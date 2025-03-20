"use client"
import { useEffect, useState, useRef } from "react"
import styles from "../custonCss/home.module.css"
import Image from "next/image"
import io from "socket.io-client"

const RealTimeChatComp = ({ streamId = "default-stream" }) => {
  const [isChatOpen, setIsChatOpen] = useState(true)
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")
  const [connected, setConnected] = useState(false)
  const [anonymousId, setAnonymousId] = useState("")
  const messagesEndRef = useRef(null)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }


  // Initialize socket connection
  useEffect(() => {
    // Generate a random anonymous ID if not already set
    if (!anonymousId) {
      setAnonymousId(`anon-${Math.random().toString(36).substring(2, 10)}`)
    }

    // Connect to socket server
    const newSocket = io(process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000", {
      transports: ["websocket"],
      auth: {
        anonymousId,
        customUsername: `User${Math.floor(Math.random() * 10000)}`,
      },
    })

    // Socket event listeners
    newSocket.on("connect", () => {
      console.log("Connected to socket server")
      setConnected(true)

      // Join the stream room
      newSocket.emit("join_stream", { streamId })
    })

    newSocket.on("disconnect", () => {
      console.log("Disconnected from socket server")
      setConnected(false)
    })

    newSocket.on("new_message", (newMessage) => {
      console.log("New message received:", newMessage)
      setMessages((prev) => [...prev, newMessage])
    })

    newSocket.on("recent_messages", (recentMessages) => {
      console.log("Recent messages received:", recentMessages)
      setMessages(recentMessages)
    })

    newSocket.on("error", (error) => {
      console.error("Socket error:", error)
    })

    setSocket(newSocket)

    // Cleanup on unmount
    return () => {
      if (newSocket) {
        newSocket.emit("leave_stream", { streamId })
        newSocket.disconnect()
      }
    }
  }, [anonymousId, streamId])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Fetch initial messages via API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/messages/${streamId}`,
        )
        const data = await response.json()
        if (data.messages && data.messages.length > 0) {
          setMessages(data.messages)
        }
      } catch (error) {
        console.error("Error fetching messages:", error)
      }
    }

    fetchMessages()
  }, [streamId])

  // Send message function
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!message.trim() || !socket || !connected) return

    socket.emit("send_message", {
      content: message,
      streamId,
    })

    setMessage("")
  }

  return (
    <div className={styles.chatSection} >
      <div className={styles.chatHeader}>
        {/*  this is for the upper close and open button  */}
        <div className={styles.worldchat}>
          <button onClick={toggleChat} className="btn">
            <Image
              src="/assets/img/iconImage/arrow.png?height=16&width=16"
              width={16}
              height={16}
              alt="Chat"
              className={styles.icon}
            />
          </button>
          <h5>WORLDCHAT {connected }</h5>
          <button className={styles.usersButton}>
            <Image
              src="/assets/img/iconImage/human.png?height=20&width=20"
              width={20}
              height={20}
              alt="Users"
              className={styles.icon}
            />
          </button>
        </div>
      </div>

      <div className={styles.chatMessages}>
        {messages.length === 0 ? (
          <div className={styles.systemMessage}>No messages yet. Start chatting!</div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={styles.chatMessage}>
              <p className={styles.messageText}>&quot;{msg.content}&quot;</p>
              <div className={styles.messageUser}>
                <div className={styles.userAvatar}>
                  {/* <Image
                    src={msg.sender.profilePicture || "/placeholder.svg?height=30&width=30"}
                    width={30}
                    height={30}
                    alt="User avatar"
                    className={styles.avatar}
                  /> */}
                </div>
                <div className={styles.userInfo}>
                  <div className={styles.userName}>{msg.sender.username}</div>
                  <div className={styles.userLocation}>{new Date(msg.timestamp).toLocaleTimeString()}</div>
                </div>
                <button className={styles.shareButton}>
                  {/* <Image
                    src="/placeholder.svg?height=16&width=16"
                    width={16}
                    height={16}
                    alt="Share"
                    className={styles.icon}
                  /> */}
                </button>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className={styles.chatInput}>
        <input
          type="text"
          placeholder="Type here..."
          className={styles.messageInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!connected}
        />
        <button type="button" className={styles.emojiButton}>
          <Image src="/assets/img/chat/emoji.png?height=20&width=20" width={20} height={20} alt="Emoji" className={styles.icon} />
        </button>
        <button type="submit" className={styles.sendButton} disabled={!connected || !message.trim()}>
          <Image src="/assets/img/chat/paper-plane_9187575.png?height=20&width=20" width={20} height={20} alt="Send" className={styles.icon} />
        </button>
      </form>
    </div>
  )
}

export default RealTimeChatComp