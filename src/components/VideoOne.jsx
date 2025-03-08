import React from "react";

const VideoOne = () => {
  return (
    <div
      className='video-autoplay-area'
      style={{
        WebkitMaskImage: "url('assets/img/bg/3.png')", // Use `WebkitMaskImage` for cross-browser support
        maskImage: "url('assets/img/bg/3.png')",
      }}
    >
      <video
        className='video-autoplay'
        src='https://videos.pexels.com/video-files/6498514/6498514-uhd_2560_1440_25fps.mp4'
        preload='auto'
        muted
        autoPlay
        loop
        playsInline
      ></video>
    </div>
  );
};

export default VideoOne;
