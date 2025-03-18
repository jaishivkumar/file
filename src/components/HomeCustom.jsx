"use client"

import Image from "next/image"
import { useState } from "react"
import styles from "../viewscreen/screen.module.css"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(true)
  const [viewMode, setViewMode] = useState("single")
  const [selectedCamera, setSelectedCamera] = useState(1) // Set to main camera ID initially

  // Define cameras that will be shown in multi-view (excluding main camera initially)
  const otherCameras = [
    { id: 2, name: "Shopping Mall", src: "/assets/videos/video1.mp4" },
    { id: 3, name: "Office", src: "/assets/videos/office.png" },
    { id: 4, name: "Orchestra", src: "/assets/videos/orchestra.png" },
  ]

  // Main camera that starts in single view
  const mainCamera = {
    id: 1,
    name: "Street Cam",
    src: "/assets/videos/videoplayback.mp4",
  }

  const toggleViewMode = () => {
    setViewMode(viewMode === "single" ? "multi" : "single")
  }

  const expandCamera = (camera) => {
    setSelectedCamera(camera.id)
    setViewMode("single")
  }


  // Get current camera for single view
  const getCurrentCamera = () => {
    if (selectedCamera === mainCamera.id) return mainCamera
    return otherCameras.find((cam) => cam.id === selectedCamera) || mainCamera
  }

  const renderCameraView = (camera, isMain = false) => {
    // Determine if we should render an image or video based on the file extension
    const isImage = camera.src.endsWith(".png") || camera.src.endsWith(".jpg") || camera.src.endsWith(".jpeg")

    return (
      <div className={`${styles.cameraContainer} ${isMain ? styles.mainCameraView : ""}`}>
        {/* Camera icon in top left */}
        <div className={styles.cameraIconCircle}>
          <Image src="/placeholder.svg?height=16&width=16" width={16} height={16} alt="Camera" />
        </div>

        {/* Info button in top right */}
        <div className={styles.infoButton}>
          <Image src="/placeholder.svg?height=16&width=16" width={16} height={16} alt="Info" />
        </div>

        {isImage ? (
          <Image
            src={camera.src || "/placeholder.svg"}
            alt={camera.name}
            fill
            className={isMain ? styles.videoPlayer : styles.smallVideo}
          />
        ) : (
          <video
            className={isMain ? styles.videoPlayer : styles.smallVideo}
            muted
            loop
            playsInline
            autoPlay
            controls={isMain}
          >
            <source src={camera.src} type="video/mp4" />
          </video>
        )}


        {/* Camera name and expand button */}
        <div className={styles.cameraLabel}>
          <span>{camera.name}</span>
          {!isMain && (
            <button className={styles.expandButton} onClick={() => expandCamera(camera)}>
              <span>Expand</span>
            </button>
          )}
        </div>

        {isMain && (
          <>
            <div className={styles.mainCam}>
              <div className={styles.camIcon}>
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  width={24}
                  height={24}
                  alt="Camera"
                  className={styles.icon}
                />
              </div>
              <div className={styles.camText}>
                <div>{camera.name}</div>
                <div className={styles.changeView} onClick={toggleViewMode}>
                  Change View
                </div>
              </div>
            </div>

            <div className={styles.liveIndicator}>
              <div className={styles.liveIcon}>
                <Image src="/assets/img/live.png" width={16} height={16} alt="Live" className={styles.icon} />
                LIVE
              </div>
              <div className={styles.viewerCount}>
                <Image
                  src="/assets/img/iconImage/livefeed_3106921.png"
                  width={16}
                  height={16}
                  alt="Viewers"
                  className={styles.icon}
                />
                342
              </div>
            </div>
            <div className={styles.infoBox}>
              <p>Did you know that there are Segways you can ride in Starlight Plaza?</p>
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className={`${styles.mainAndGameWrapper} ${!isChatOpen ? styles.fullWidth : ""}`}>
      <div className={styles.mainContent}>
        {viewMode === "single" ? (
          // Single View Mode
          <div className={styles.videoSection}>{renderCameraView(getCurrentCamera(), true)}</div>
        ) : (
          // Multi View Mode
          <div className={styles.multiViewSection}>
            <div className={styles.multiViewGrid}>
              {/* Main camera is always first in multi-view */}
              <div className={`${styles.multiViewItem} ${selectedCamera === mainCamera.id ? styles.activeCamera : ""}`}>
                {renderCameraView(mainCamera)}
              </div>

              {/* Other cameras */}
              {otherCameras.map((camera) => (
                <div
                  key={camera.id}
                  className={`${styles.multiViewItem} ${selectedCamera === camera.id ? styles.activeCamera : ""}`}
                >
                  {renderCameraView(camera)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Game Section */}
      <div className={styles.gameSection}>
        <div className={styles.gameContainer}>
          <div className="relative w-full h-[230px]">
            <Image src="/assets/img/funds/2d.png" alt="Game platform" fill className={styles.gamePlatform} priority />
          </div>
          <div className={styles.gameControls}>
            <div className={styles.controlsLeft}>
              <div className={styles.controlsGrid}>
                <button className={styles.controlKey}>W</button>
                <button className={styles.controlKey}>A</button>
                <button className={styles.controlKey}>S</button>
                <button className={styles.controlKey}>D</button>
              </div>
              <div className={styles.controlLabel}>Move</div>
            </div>
            <div className={styles.controlsRight}>
              <button className={styles.spaceKey}>SPACE</button>
              <div className={styles.controlLabel}>
                Jump and
                <br />
                Double Jump
              </div>
            </div>
          </div>
          <div className={styles.gameSettings}>
            <button className={styles.settingsButton}>
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <button className={styles.fullscreenButton}>
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

