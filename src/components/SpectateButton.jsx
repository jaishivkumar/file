import Link from 'next/link';
import { Eye, ShoppingBag, Gamepad2 } from "lucide-react"

const SpectateButton = () => {
  return (
    <Link href="/spectate" passHref>
      <div className="d-flex w-90 max-w-md flex-column align-items-center gap-3 flex-sm-row">
        <button className="btn btn-primary d-flex justify-content-center align-items-center gap-2 rounded-pill 
          bg-gradient text-white border-0 hover-bg-white px-4 py-2"
          style={{ width: "160px", height: "40px" }}>
          
          <Eye size={70} className='mb-3' />
          <span className="fw-bold">SPECTATE</span>
        </button>
      </div>
    </Link>
  );
};

export default SpectateButton;
