"use client";

import Image from "next/image";
import styles from "../custonCss/home.module.css";
import { useState } from "react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
        <div
          className={`${styles.mainAndGameWrapper} ${
            !isChatOpen ? styles.fullWidth : ""
          }`}
        >
          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Video Section */}
            <div className={styles.videoSection}>
              <div className={styles.videoContainer}>
                {/* <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9E5tCHpUD7jOBgsygHItTE3nNkiA6W.png"
                  alt="Cyberpunk city street"
                  fill
                  className={styles.videoBackground}
                  style={{ objectFit: "cover" }}
                /> */}

                {/* <Image
                                    src="/public/assets/img/login.png"
                                    alt="Cyberpunk city street"
                                    fill
                                    className={styles.videoBackground}
                                    style={{ objectFit: "cover" }}
                                /> */}

                {/* <div className={styles.videoOverlay}> */}

                {/* <video className={styles.videoPlayer} autoPlay muted> */}
                <video
                  className={styles.videoPlayer}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/assets/videos/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* </div> */}

                {/* <div className={styles.videoContainer}>
                                    <p className={styles.liveTag}>Live</p>
                                    <video className={styles.videoPlayer} controls autoPlay muted>
                                        <source src="/public/videos/video1.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div> */}

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
                    <div>Main Cam</div>
                    <div className={styles.changeView}>Change View</div>
                  </div>
                </div>

                <div className={styles.liveIndicator}>
                  <div className={styles.liveIcon}>
                    <Image
                      src="/assets/img/live.png?height=16&width=16"
                      width={16}
                      height={16}
                      alt="Live"
                      className={styles.icon}
                    />
                    LIVE
                  </div>
                  <div className={styles.viewerCount}>
                    <Image
                      src="/assets/img/iconImage/livefeed_3106921.png?height=16&width=16"
                      width={16}
                      height={16}
                      alt="Viewers"
                      className={styles.icon}
                    />
                    342
                  </div>
                </div>

                <div className={styles.infoBox}>
                  <p>
                    Did you know that there are Segways you can ride in
                    Starlight Plaza?
                  </p>
                </div>

                {/* <div className={styles.videoControls}>
                  <button className={styles.controlButton}>
                    <Image
                      src="/assets/img/iconImage/settings 1.png?height=20&width=20"
                      width={20}
                      height={20}
                      alt="Settings"
                      className={styles.icon}
                    />
                  </button>
                  <button className={styles.controlButton}>
                    <Image
                      src="/assets/img/iconImage/preview 1.png?height=20&width=20"
                      width={20}
                      height={20}
                      alt="Fullscreen"
                      className={styles.icon}
                    />
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Bottom Game Section */}
          <div className={styles.gameSection}>
            <div className={styles.gameContainer}>
              <Image
                src="/assets/img/gallery/2d.png?height=400&width=1200"
                width={1200}
                height={230}
                alt="Game platform"
                className={styles.gamePlatform}
              />
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
                  <Image
                    src="/assets/img/iconImage/settings 1.png?height=20&width=20"
                    width={20}
                    height={20}
                    alt="Settings"
                    className={styles.icon}
                  />
                </button>
                <button className={styles.fullscreenButton}>
                  <Image
                    src="/assets/img/iconImage/preview 1.png?height=20&width=20"
                    width={20}
                    height={20}
                    alt="Fullscreen"
                    className={styles.icon}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>


  );
}
