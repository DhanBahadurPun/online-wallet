import { IoNotificationsOutline } from "react-icons/io5";

import headerStyles from "~/styles/MainHeader.css";

export default function MainHeader() {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-box">
          <h1>LOGO</h1>
        </div>
        <div className="nav-container">
          <ul className="nav-items">
            <li className="icon">
              <IoNotificationsOutline size="3.5rem" color="#fff" />
              <p>7</p>
            </li>
            <li className="item">
              <p>DP</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
