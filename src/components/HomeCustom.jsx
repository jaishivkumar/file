"use client"

import Image from "next/image"
import styles from "../custonCss/home.module.css"
import { useState } from "react"

export default function Home() {
    const [isChatOpen, setIsChatOpen] = useState(true)

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen)
    }

    return (
        <div className={styles.container}>
            {/* Navigation Bar */}
            {/* <nav className={styles.navbar}>
                <div className={styles.navLeft}>
                    <div className={styles.logo}>
                        <span className={styles.logoM}>M</span>
                        <span className={styles.logoText}>&apos;s TRIBE</span>
                    </div>
                    <div className={styles.countdown}>
                        <div className={styles.countdownNumber}>1</div>
                        <div className={styles.countdownNumber}>4</div>
                        <div className={styles.countdownNumber}>1</div>
                        <div className={styles.countdownNumber}>2</div>
                        <div className={styles.countdownText}>DAYS LEFT</div>
                    </div>
                </div>

                <div className={styles.navCenter}>
                    <button className={`${styles.navButton} ${styles.spectateBtn}`}>
                        <Image
                            src="/placeholder.svg?height=20&width=20"
                            width={20}
                            height={20}
                            alt="Eye icon"
                            className={styles.btnIcon}
                        />
                        SPECTATE
                    </button>
                    <button className={`${styles.navButton} ${styles.shopBtn}`}>
                        <Image
                            src="/placeholder.svg?height=20&width=20"
                            width={20}
                            height={20}
                            alt="Shop icon"
                            className={styles.btnIcon}
                        />
                        SHOP
                    </button>
                    <button className={`${styles.navButton} ${styles.playBtn}`}>
                        <Image
                            src="/placeholder.svg?height=20&width=20"
                            width={20}
                            height={20}
                            alt="Play icon"
                            className={styles.btnIcon}
                        />
                        PLAY
                    </button>
                </div>

                <div className={styles.navRight}>
                    <div className={styles.currency}>
                        <Image
                            src="/placeholder.svg?height=30&width=30"
                            width={30}
                            height={30}
                            alt="Currency icon"
                            className={styles.currencyIcon}
                        />
                        <span className={styles.currencyAmount}>1,025,560</span>
                    </div>
                    <button className={`${styles.navButton} ${styles.loginBtn}`}>LOGIN</button>
                    <button className={`${styles.navButton} ${styles.signupBtn}`}>SIGN UP</button>
                </div>
            </nav> */}

            {/* Main Content Wrapper */}
            <div className={styles.contentWrapper}>
                {/* Main Content and Game Section */}
                <div className={`${styles.mainAndGameWrapper} ${!isChatOpen ? styles.fullWidth : ""}`}>
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


                                <div className={styles.videoOverlay}>

                                {/* <video className={styles.videoPlayer} autoPlay muted> */}
                                <video className={styles.videoPlayer} controls autoPlay muted loop playsInline>
                                    <source src="/assets/videos/video1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>



                                </div>

                                <div className={styles.videoContainer}>
                                    <p className={styles.liveTag}>Live</p>
                                    <video className={styles.videoPlayer} controls autoPlay muted>
                                        <source src="/public/videos/video1.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

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
                                    <p>Did you know that there are Segways you can ride in Starlight Plaza?</p>
                                </div>

                                <div className={styles.videoControls}>
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
                                </div>
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

                {/* Chat Toggle Button */}
                <button
                    className={`${styles.chatToggleBtn} ${!isChatOpen ? styles.chatToggleBtnClosed : ""}`}
                    onClick={toggleChat}
                >
                    {isChatOpen ? "»" : "«"}
                </button>

                {/* Chat Section */}
                {isChatOpen && (
                    <div className={styles.chatSection}>
                        <div className={styles.chatHeader}>
                            
                            <div className={styles.worldchat}>
                                <Image
                                    src="/assets/img/iconImage/arrow.png?height=16&width=16"
                                    width={16}
                                    height={16}
                                    alt="Chat"
                                    className={styles.icon}
                                />
                                
                                WORLDCHAT
                            </div>
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

                        <div className={styles.chatMessages}>
                            <div className={styles.chatMessage}>
                                <p className={styles.messageText}>
                                    &quot;There&apos;s a really strange man looking at me here. Anyone knows where I can buy pedo
                                    repellent?...&quot;
                                </p>
                                <div className={styles.messageUser}>
                                    <div className={styles.userAvatar}>
                                        <Image
                                            src="/placeholder.svg?height=30&width=30"
                                            width={30}
                                            height={30}
                                            alt="User avatar"
                                            className={styles.avatar}
                                        />
                                    </div>
                                    <div className={styles.userInfo}>
                                        <div className={styles.userName}>JAMES5423</div>
                                        <div className={styles.userLocation}>Your Mom's Apartment</div>
                                    </div>
                                    <button className={styles.shareButton}>
                                        <Image
                                            src="/placeholder.svg?height=16&width=16"
                                            width={16}
                                            height={16}
                                            alt="Share"
                                            className={styles.icon}
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.systemMessage}>Jenifer found the Red line stop!</div>

                            <div className={styles.chatMessage}>
                                <p className={styles.messageText}>&quot;I can&apos;t find how to go forward&quot;</p>
                                <div className={styles.messageUser}>
                                    <div className={styles.userAvatar}>
                                        <Image
                                            src="/placeholder.svg?height=30&width=30"
                                            width={30}
                                            height={30}
                                            alt="User avatar"
                                            className={styles.avatar}
                                        />
                                    </div>
                                    <div className={styles.userInfo}>
                                        <div className={styles.userName}>SARAHx420</div>
                                        <div className={styles.userLocation}>Woman's Gym</div>
                                    </div>
                                    <button className={styles.shareButton}>
                                        <Image
                                            src="/placeholder.svg?height=16&width=16"
                                            width={16}
                                            height={16}
                                            alt="Share"
                                            className={styles.icon}
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.tagMessage}>
                                <span className={styles.tagUser}>rage</span>
                                <Image
                                    src="/placeholder.svg?height=16&width=16"
                                    width={16}
                                    height={16}
                                    alt="Gun"
                                    className={styles.icon}
                                />
                                <span className={styles.tagTarget}>The Major</span>
                            </div>

                            <div className={styles.chatMessage}>
                                <p className={styles.messageText}>&quot;Anyone want to trade?&quot;</p>
                                <div className={styles.messageUser}>
                                    <div className={styles.userAvatar}>
                                        <Image
                                            src="/placeholder.svg?height=30&width=30"
                                            width={30}
                                            height={30}
                                            alt="User avatar"
                                            className={styles.avatar}
                                        />
                                    </div>
                                    <div className={styles.userInfo}>
                                        <div className={styles.userName}>PARZIVAL</div>
                                        <div className={styles.userLocation}>Youth Hostel</div>
                                    </div>
                                    <button className={styles.shareButton}>
                                        <Image
                                            src="/placeholder.svg?height=16&width=16"
                                            width={16}
                                            height={16}
                                            alt="Share"
                                            className={styles.icon}
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.chatMessage}>
                                <p className={styles.messageText}>&quot;Yesss! @Parzival&quot;</p>
                                <div className={styles.messageUser}>
                                    <div className={styles.userAvatar}>
                                        <Image
                                            src="/placeholder.svg?height=30&width=30"
                                            width={30}
                                            height={30}
                                            alt="User avatar"
                                            className={styles.avatar}
                                        />
                                    </div>
                                    <div className={styles.userInfo}>
                                        <div className={styles.userName}>ART3MIS</div>
                                        <div className={styles.userLocation}>Coffee Shop</div>
                                    </div>
                                    <button className={styles.shareButton}>
                                        <Image
                                            src="/placeholder.svg?height=16&width=16"
                                            width={16}
                                            height={16}
                                            alt="Share"
                                            className={styles.icon}
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.systemMessage}>Parzival won 432 $VBT</div>

                            <div className={styles.chatMessage}>
                                <p className={styles.messageText}>&quot;Great Deal, guys&quot;</p>
                                <div className={styles.messageUser}>
                                    <div className={styles.userAvatar}>
                                        <Image
                                            src="/placeholder.svg?height=30&width=30"
                                            width={30}
                                            height={30}
                                            alt="User avatar"
                                            className={styles.avatar}
                                        />
                                    </div>
                                    <div className={styles.userInfo}>
                                        <div className={styles.userName}>AECH</div>
                                        <div className={styles.userLocation}></div>
                                    </div>
                                    <button className={styles.shareButton}>
                                        <Image
                                            src="/placeholder.svg?height=16&width=16"
                                            width={16}
                                            height={16}
                                            alt="Share"
                                            className={styles.icon}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Add more messages to ensure scrolling */}
                            <div className={styles.chatMessage}>
                                <p className={styles.messageText}>&quot;Has anyone found the hidden easter egg yet?&quot;</p>
                                <div className={styles.messageUser}>
                                    <div className={styles.userAvatar}>
                                        <Image
                                            src="/placeholder.svg?height=30&width=30"
                                            width={30}
                                            height={30}
                                            alt="User avatar"
                                            className={styles.avatar}
                                        />
                                    </div>
                                    <div className={styles.userInfo}>
                                        <div className={styles.userName}>GUNTER42</div>
                                        <div className={styles.userLocation}>Arcade</div>
                                    </div>
                                    <button className={styles.shareButton}>
                                        <Image
                                            src="/placeholder.svg?height=16&width=16"
                                            width={16}
                                            height={16}
                                            alt="Share"
                                            className={styles.icon}
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.chatMessage}>
                                <p className={styles.messageText}>&quot;The new update is amazing!&quot;</p>
                                <div className={styles.messageUser}>
                                    <div className={styles.userAvatar}>
                                        <Image
                                            src="/placeholder.svg?height=30&width=30"
                                            width={30}
                                            height={30}
                                            alt="User avatar"
                                            className={styles.avatar}
                                        />
                                    </div>
                                    <div className={styles.userInfo}>
                                        <div className={styles.userName}>CYBER_NINJA</div>
                                        <div className={styles.userLocation}>Dojo</div>
                                    </div>
                                    <button className={styles.shareButton}>
                                        <Image
                                            src="/placeholder.svg?height=16&width=16"
                                            width={16}
                                            height={16}
                                            alt="Share"
                                            className={styles.icon}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.chatInput}>
                            <input type="text" placeholder="Type here..." className={styles.messageInput} />
                            <button className={styles.emojiButton}>
                                <Image
                                    src="/placeholder.svg?height=20&width=20"
                                    width={20}
                                    height={20}
                                    alt="Emoji"
                                    className={styles.icon}
                                />
                            </button>
                            <button className={styles.sendButton}>
                                <Image
                                    src="/placeholder.svg?height=20&width=20"
                                    width={20}
                                    height={20}
                                    alt="Send"
                                    className={styles.icon}
                                />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

