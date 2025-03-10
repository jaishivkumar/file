"use client";  // <-- Add this line

import { useState } from "react";
// import { FaReply, FaPaperPlane } from "react-icons/fa";


const chatData = [
  {
    id: 1,
    username: "JAMES5423",
    location: "Your Mom’s Basement",
    message: "There’s a really strange man looking at me here...",
    avatar: "/images/james.png",
    replies: [
      { user: "Sho", text: "There is a shop behind coffee shop." },
      { user: "Trunk", text: "I know a place too, 100 mtrs from th." },
    ],
  },
  {
    id: 2,
    username: "SARAHx420",
    location: "Woman’s Gym",
    message: "I can’t find how to go forward",
    avatar: "/images/sarah.png",
  },
  {
    id: 3,
    username: "PARZIVAL",
    location: "Spawn Point",
    message: "Anyone want to trade?",
    avatar: "/images/parzival.png",
  },
  {
    id: 4,
    username: "ART3MIS",
    location: "Coffee Shop",
    message: 'Yesss! @Parzival',
    avatar: "/images/art3mis.png",
  },
];

const ChatLayout = () => {
  const [replyText, setReplyText] = useState("");

  return (
    <div className="d-flex vh-100">
      {/* LEFT SIDE - VIDEO STREAM */}
      <div className="flex-grow-1 position-relative">
        {/* <video className="w-100 h-100 object-fit-cover" autoPlay loop muted>
          <source src="/video/stream.mp4" type="video/mp4" />
        </video> */}
         <div className="video-container">
      <iframe
        width="100%"
        height="100vh"
        src="https://www.youtube.com/embed/live_stream?channel=UC4R8DWoMoI7CAwX8_LjQHig&autoplay=1"
        title="YouTube Live Stream"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
      </div>

      {/* RIGHT SIDE - CHAT PANEL */}
      <div className="chat-panel p-3">
        <h5 className="text-white text-center">WORLDCHAT</h5>
        <div className="chat-box">
          {chatData.map((chat) => (
            <div key={chat.id} className="chat-message">
              {/* USER INFO */}
              <div className="d-flex align-items-center">
                <img
                  src={chat.avatar}
                  alt={chat.username}
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                />
                <div>
                  <p className="m-0 fw-bold text-info">{chat.username}</p>
                  <p className="small text-muted">{chat.location}</p>
                </div>
              </div>

              {/* MESSAGE */}
              <p className="message-text">{chat.message}</p>

              {/* REPLIES */}
              {chat.replies &&
                chat.replies.map((reply, index) => (
                  <div key={index} className="reply-box">
                    <small className="fw-bold">{reply.user}: </small>
                    <small>{reply.text}</small>
                  </div>
                ))}

              {/* REPLY INPUT */}
              <div className="input-group mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button className="btn btn-info" onClick={() => setReplyText("")}>
                  {/* <FaPaperPlane /> */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .chat-panel {
          width: 350px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          overflow-y: auto;
        }
        .chat-box {
          max-height: 85vh;
          overflow-y: auto;
        }
        .chat-message {
          background: #1e1e1e;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 10px;
        }
        .message-text {
          margin: 5px 0;
        }
        .reply-box {
          background: rgba(255, 255, 255, 0.1);
          padding: 5px;
          border-radius: 5px;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default ChatLayout;
