import React, { useEffect } from "react";

const VideoModal = ({ isOpen, videoId, onClose }) => {
  useEffect(() => {
    // Disable scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='video-modal-overlay' onClick={onClose}>
      <div className='video-modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='video-modal-close' onClick={onClose}>
          &times;
        </button>
        <div className='video-container'>
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='YouTube Video'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
