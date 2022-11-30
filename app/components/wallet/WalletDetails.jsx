import { BsServer } from "react-icons/bs";
import { AiOutlineSwap, AiFillBank } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

function WalletDetails() {
  return (
    <div className="wallet-container">
      <h1>Wallet Balance</h1>
      <div className="balance-container">
        <div className="balance">
          0.00
          <span>NRs</span>
        </div>
        <button className="btn">
          <BsServer />
          <span>Load</span>
        </button>
        <button className="btn">
          <AiFillBank />
          <span>Bank Transfer</span>
        </button>
        <button className="btn">
          <AiOutlineSwap />
          <span>Remittance</span>
        </button>
      </div>
      <div className="space"></div>
      <div className="btn-container">
        <button className="btn">
          <BiLink />
          <span>Bank Link</span>
        </button>
        <button className="btn">Send</button>
        <button className="btn">Request</button>
        <button className="btn">Pay Bills</button>
      </div>
    </div>
  );
}

export default WalletDetails;
