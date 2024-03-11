import { CiSearch } from "react-icons/ci";
import { TiMessage } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import "./style.css";
import DashboardContent from "../dashboardContent/DashboardContent";

const Navbar = ({ closeSidebar, setCloseSidebar }) => {
  return (
    <>
      <div className="nav-container">
        <div className="input-container">
          <div className="sub-input-container">
            <FaBars
              className="bars"
              onClick={() => setCloseSidebar(!closeSidebar)}
            />
            <input type="text" className="input" placeholder="Search..." />
          </div>

          <CiSearch className="search-icon" />
        </div>
        <div className="right-section">
          <div className="notification-conatiner">
            <TiMessage className="message-icon" />
            <BsDot className="notification-dot" />
          </div>
          <div className="notification-conatiner">
            <IoMdNotificationsOutline className="message-icon" />
            <BsDot
              className="notification-dot"
              style={{
                right: -4,
              }}
            />
          </div>

          <div className="profile-container">
            <img
              height="35px"
              width="35px"
              className="profile-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JPMhmxsf741nKAogYTj78nouPE1TQ5Djb_ETDiYERg&s"
              alt=""
            />
            <div className="sub-profile">
              <h4>John Doe</h4>
              <h6>Admin Staff</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="main-dashboard">
        <DashboardContent />
      </div>
    </>
  );
};

export default Navbar;
