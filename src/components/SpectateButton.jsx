import Link from 'next/link';
import { Eye, ShoppingBag, Gamepad2 } from "lucide-react"
import { useState } from 'react';

const SpectateButton = () => {
  const [hover, setHover] = useState(false);
  return (
    // <Link href="/spectate" passHref>
    //   <div className="d-flex w-90 max-w-md flex-column align-items-center gap-3 flex-sm-row"  style={{
    //     backgroundColor: hover ? "#006cd2" : "#000", // Changes on hover
    //     borderColor: "#0dcaf0",
    //     minWidth: "150px",
    //     fontWeight: "bold",
    //     letterSpacing: "1px",
    //     boxShadow: "0 0 5px rgba(13, 202, 240, 0.5)",
    //     transition: "background-color 0.3s ease", // Smooth transition effect
    //   }}>
    //     <button className="btn d-flex justify-content-center align-items-center gap-2 
    //       bg-gradient text-white border-0 hover-bg-white px-4 py-2"
    //       style={{ width: "160px", height: "40px", }}>
          
    //       <Eye size={70} className='mb-3' />
    //       <span className="fw-bold">SPECTATE</span>
    //     </button>
    //   </div>
    // </Link>
    <button
    type="button"
    className="btn btn-dark border border-info text-white px-5 py-2 rounded-3"
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
    SPECTATE
  </button>
  );
};

export default SpectateButton;
