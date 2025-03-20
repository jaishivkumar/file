"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useSocket } from "../contexts/SocketContext"

export default function WebRTCStream({
  streamId,
  isPublisher = false,
  className = "",
  onPlay = () => {},
  onPause = () => {},
}) {
  const socketContext = useSocket()
  const socket = socketContext?.socket
  const videoRef = useRef(null)
  const peerConnectionRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [usingFallback, setUsingFallback] = useState(false)
  const [fallbackVideoSource, setFallbackVideoSource] = useState(null)

  // ICE servers configuration - critical for production scale
  const iceServers = [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
    { urls: "stun:stun2.l.google.com:19302" },
    // For production with 100M users, you would add multiple TURN servers here
    // { urls: 'turn:turn.yourdomain.com:443', username: 'username', credential: 'credential' },
  ]

  // Determine fallback video source based on streamId
  useEffect(() => {
    let videoSource
    switch (streamId) {
      case "stream-1":
        videoSource = "/assets/videos/videoplayback.mp4"
        break
      case "stream-2":
        videoSource = "/assets/videos/video1.mp4"
        break
      case "stream-3":
        videoSource = "/assets/videos/office.mp4"
        break
      case "stream-4":
        videoSource = "/assets/videos/orchestra.mp4"
        break
      default:
        videoSource = "/assets/videos/videoplayback.mp4"
    }
    setFallbackVideoSource(videoSource)
  }, [streamId])

  // Use fallback video - moved outside useEffect to satisfy hook rules
  const useFallbackVideo = useCallback(() => {
    if (!fallbackVideoSource) return

    console.log(`Using fallback video for stream: ${streamId}`)

    // Clear any existing srcObject
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop())
      videoRef.current.srcObject = null
    }

    // Set the src attribute
    videoRef.current.src = fallbackVideoSource
    videoRef.current
      .play()
      .then(() => {
        setIsLoading(false)
        setIsPlaying(true)
        onPlay()
      })
      .catch((err) => {
        console.error("Error playing fallback video:", err)
        setError("Could not play video. Click to play.")
      })
  }, [streamId, onPlay, fallbackVideoSource])

  // Set up WebRTC connection and socket event handlers
  useEffect(() => {
    if (!socket || !streamId) return

    console.log(`Setting up WebRTC for stream: ${streamId}, isPublisher: ${isPublisher}`)

    // Create peer connection
    const peerConnection = new RTCPeerConnection({ iceServers })
    peerConnectionRef.current = peerConnection

    // Handle ICE candidates
    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        console.log(`Sending ICE candidate for stream: ${streamId}`)
        socket.emit("ice_candidate", {
          streamId,
          candidate: event.candidate,
          isViewer: !isPublisher,
        })
      }
    }

    // Handle connection state changes
    peerConnection.onconnectionstatechange = () => {
      console.log(`WebRTC connection state changed to: ${peerConnection.connectionState}`)
      if (peerConnection.connectionState === "failed" || peerConnection.connectionState === "disconnected") {
        console.log("WebRTC connection failed, falling back to video file")
        setUsingFallback(true)
      }
    }

    // For publishers (camera sources)
    if (isPublisher) {
      // In a real implementation, we would get the user's camera/mic
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          // Add tracks to the peer connection
          stream.getTracks().forEach((track) => {
            peerConnection.addTrack(track, stream)
          })

          // Display local stream in video element
          if (videoRef.current) {
            videoRef.current.srcObject = stream
            setIsLoading(false)
          }

          // Listen for viewer requests
          socket.on("viewer_request", async ({ streamId: receivedStreamId, viewerId }) => {
            if (receivedStreamId !== streamId) return

            console.log(`Received viewer request from ${viewerId} for stream: ${streamId}`)

            try {
              // Create offer
              const offer = await peerConnection.createOffer()
              await peerConnection.setLocalDescription(offer)

              // Send offer to specific viewer
              socket.emit("viewer_offer", {
                streamId,
                offer,
                viewerId,
              })
            } catch (err) {
              console.error("Error creating offer:", err)
            }
          })

          // Listen for viewer answers
          socket.on("viewer_answer", async ({ streamId: receivedStreamId, answer, viewerId }) => {
            if (receivedStreamId !== streamId) return

            console.log(`Received viewer answer from ${viewerId} for stream: ${streamId}`)

            try {
              await peerConnection.setRemoteDescription(new RTCSessionDescription(answer))
            } catch (err) {
              console.error("Error setting remote description:", err)
            }
          })

          // Notify that we're a broadcaster for this stream
          socket.emit("broadcaster_offer", { streamId, offer: {} })
        })
        .catch((err) => {
          console.error("Error accessing media devices:", err)
          setError("Could not access camera/microphone")
          setUsingFallback(true)
        })
    }
    // For viewers
    else {
      // Handle incoming tracks
      peerConnection.ontrack = (event) => {
        console.log(`Received track for stream: ${streamId}`)
        if (videoRef.current && event.streams[0]) {
          console.log("Setting video source from remote stream")
          videoRef.current.srcObject = event.streams[0]
          setIsLoading(false)

          // Try to play the video
          videoRef.current
            .play()
            .then(() => {
              console.log("Remote video playing successfully")
              setIsPlaying(true)
              onPlay()
            })
            .catch((err) => {
              console.error("Error playing remote video:", err)
              // May need user interaction to play
            })
        }
      }

      // Listen for broadcaster offers
      socket.on("viewer_offer", async ({ streamId: receivedStreamId, offer }) => {
        if (receivedStreamId !== streamId) return

        console.log(`Received offer for stream: ${streamId}`)

        try {
          await peerConnection.setRemoteDescription(new RTCSessionDescription(offer))

          const answer = await peerConnection.createAnswer()
          await peerConnection.setLocalDescription(answer)

          console.log(`Sending answer for stream: ${streamId}`)
          socket.emit("viewer_answer", { streamId, answer })
        } catch (err) {
          console.error("Error handling offer:", err)
          setError("Connection error")
          setUsingFallback(true)
        }
      })

      // Request to view stream
      console.log(`Sending viewer request for stream: ${streamId}`)
      socket.emit("viewer_request", { streamId })
    }

    // Handle ICE candidates from remote peer
    socket.on("ice_candidate", async ({ streamId: receivedStreamId, candidate, isViewer: remoteIsViewer }) => {
      // Only process candidates that are for this stream and from the opposite peer type
      if (receivedStreamId !== streamId || remoteIsViewer === !isPublisher) return

      try {
        console.log(`Adding ICE candidate for stream: ${streamId}`)
        await peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
      } catch (err) {
        console.error("Error adding ICE candidate:", err)
      }
    })

    // Handle errors
    socket.on("error", ({ message }) => {
      console.error(`WebRTC error: ${message}`)
      setError(message)
      setUsingFallback(true)
    })

    // Set a timeout to fall back to regular video if WebRTC doesn't connect
    const fallbackTimeout = setTimeout(() => {
      if (isLoading && !isPlaying) {
        console.log(`WebRTC connection timeout for stream: ${streamId}, using fallback`)
        setUsingFallback(true)
      }
    }, 5000)

    // Cleanup function
    return () => {
      // Remove socket event listeners
      socket.off("viewer_offer")
      socket.off("viewer_answer")
      socket.off("ice_candidate")
      socket.off("error")

      clearTimeout(fallbackTimeout)

      // Close peer connection and release media resources
      if (peerConnectionRef.current) {
        console.log(`Closing WebRTC connection for stream: ${streamId}`)
        peerConnectionRef.current.close()
        peerConnectionRef.current = null
      }

      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop())
      }

      // Notify that we're no longer playing
      if (isPlaying) {
        setIsPlaying(false)
        onPause()
      }
    }
  }, [socket, streamId, isPublisher, onPlay, onPause, isLoading, isPlaying])

  // Use fallback video when WebRTC fails
  useEffect(() => {
    if (usingFallback) {
      useFallbackVideo()
    }
  }, [usingFallback, useFallbackVideo])

  // Handle play/pause events
  const handlePlay = () => {
    console.log(`Video playing for stream: ${streamId}`)
    setIsPlaying(true)
    onPlay()
  }

  const handlePause = () => {
    console.log(`Video paused for stream: ${streamId}`)
    setIsPlaying(false)
    onPause()
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && !usingFallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10">
          <div className="bg-red-500 text-white px-4 py-2 rounded">{error}</div>
        </div>
      )}

      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${className}`}
        autoPlay
        playsInline
        muted={isPublisher}
        controls={!isPublisher}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handlePause}
        onClick={() => {
          if (videoRef.current && !isPlaying) {
            videoRef.current.play().catch((err) => console.error("Error playing video on click:", err))
          }
        }}
      />

      {usingFallback && (
        <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded opacity-70">
          Fallback
        </div>
      )}
    </div>
  )
}

