import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Shope = () => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      className="btn text-white rounded-3 d-flex align-items-center justify-content-center"
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
        gap:"8px" // Ensure content doesn't overflow
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src="/assets/img/iconImage/shopping-bag 1.png" // Ensure this path is correct
        alt="shopping bag icon"
        width="20" // Increased size for visibility
        height="20"
      />
      {/* Remove the text if you only want the icon */}
      <span>SHOP</span>
    </button>
  );
};