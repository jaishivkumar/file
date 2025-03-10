import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


export const PlayButton = () => {
      const [hover, setHover] = useState(false);
  return (
    <button
    type="button"
    className="btn btn-dark border border-info text-white d-flex align-items-center gap-2 px-3 py-1 rounded-2"
    style={{
        backgroundColor: "#000",
        border: `2px solid ${hover ? "#0dcaf0" : "#0dcaf0"}`,
        width: "110px", // Your specified width
        height: "40px", // From your previous code
        fontWeight: "bold",
        letterSpacing: "1px",
        boxShadow: hover
          ? "0 0 10px rgba(13, 202, 240, 0.8)"
          : "0 0 5px rgba(13, 202, 240, 0.5)",
        transition: "box-shadow 0.3s ease",
        padding: "0", // Remove padding to fit the small size
        overflow: "hidden",
        gap:"8px"  // Smooth transition effect
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
     <img src="/assets/img/iconImage/gaming 1.png" alt="icon" width="20" height="20" />
    PLAY
  </button>
  )
}
