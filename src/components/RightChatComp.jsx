"use client"
import React from 'react'
import styles from "../custonCss/home.module.css";
import { useState } from "react";
import Image from "next/image";


const RightChatComp = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
                <div className={styles.chatSection}>
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
                      <h5>WORLDCHAT</h5>
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
                    <div className={styles.chatMessage}>
                      <p className={styles.messageText}>
                        &quot;There&apos;s a really strange man looking at me here.
                        Anyone knows where I can buy pedo repellent?...&quot;
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
                          <div className={styles.userLocation}>
                            Your Mom's Apartment
                          </div>
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

                    <div className={styles.systemMessage}>
                      Jenifer found the Red line stop!
                    </div>

                    <div className={styles.chatMessage}>
                      <p className={styles.messageText}>
                        &quot;I can&apos;t find how to go forward&quot;
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
                      <p className={styles.messageText}>
                        &quot;Anyone want to trade?&quot;
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
                      <p className={styles.messageText}>
                        &quot;Yesss! @Parzival&quot;
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
                      <p className={styles.messageText}>
                        &quot;Great Deal, guys&quot;
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
                      <p className={styles.messageText}>
                        &quot;Has anyone found the hidden easter egg yet?&quot;
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
                      <p className={styles.messageText}>
                        &quot;The new update is amazing!&quot;
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
                    <input
                      type="text"
                      placeholder="Type here..."
                      className={styles.messageInput}
                    />
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
  )
}

export default RightChatComp
