// File: SubscribeButton.jsx (renamed)
import Link from 'next/link';
import { useState } from 'react';

const SubscribeButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href="/service-details"
      passHref
      className="btn btn-dark border border-info text-white d-flex align-items-center gap-2 px-3 py-1 rounded-2"
      style={{
        backgroundColor: "#000",
        border: `2px solid ${hover ? "#0dcaf0" : "#0dcaf0"}`,
        width: "145px",
        height: "40px",
        fontWeight: "bold",
        letterSpacing: "1px",
        boxShadow: hover
          ? "0 0 10px rgba(13, 202, 240, 0.8)"
          : "0 0 5px rgba(13, 202, 240, 0.5)",
        transition: "box-shadow 0.3s ease",
        padding: "0",
        overflow: "hidden",
        gap: "8px",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src="assets/img/iconImage/sub.png.png"
        alt="icon"
        width="20"
        height="20"
      />
      SUBSCRIBE
    </Link>
  );
};

export default SubscribeButton;