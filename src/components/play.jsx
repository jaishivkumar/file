import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


export const PlayButton = () => {
      const [hover, setHover] = useState(false);
  return (
    <button
    type="button"
    className="btn btn-dark border border-info text-white d-flex align-items-center gap-2 px-3 py-1 rounded-2"
    style={{
      backgroundColor: hover ? "#006cd2" : "#000", // Changes on hover
      borderColor: "#0dcaf0",
      minWidth: "150px",
      fontWeight: "bold",
      letterSpacing: "1px",
      boxShadow: "0 0 5px rgba(13, 202, 240, 0.5)",
      transition: "background-color 0.3s ease", // Smooth transition effect
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
     <img src="/assets/img/iconImage/gaming 1.png" alt="icon" width="20" height="20" />
    PLAY
  </button>
  )
}
