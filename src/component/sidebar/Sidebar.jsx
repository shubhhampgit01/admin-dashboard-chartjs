import "./style.css";

import { LiaHomeSolid } from "react-icons/lia";
import { TbCalendarStats } from "react-icons/tb";
import { BsClockHistory } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { RxActivityLog } from "react-icons/rx";
import { MdOutlineSettings } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useState } from "react";

const Sidebar = ({ closeSidebar }) => {
  const data = [
    {
      icon: <LiaHomeSolid />,
      text: "Dashboard",
      number: 20,
    },
    {
      icon: <TbCalendarStats />,
      text: "Statics",
      // background: "transparent",
    },
    {
      icon: <BsClockHistory />,
      text: "Activity",
      background: "transparent",
    },
    {
      icon: <GrTransaction />,
      text: "Transaction",
      background: "transparent",
      number: 27,
    },
    {
      icon: <TbReport />,
      text: "Report",
      background: "transparent",
    },
    {
      icon: <RxActivityLog />,
      text: "Log Activity",
      background: "transparent",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    // Set the active index to the clicked element
    setActiveIndex(index);
  };
  return (
    <>
      {closeSidebar && (
        <div className="sidebar-container">
          <div className="nav-content">
            {/* heading section */}
            <div className="nav-heading">
              <h2>Masshive</h2>
            </div>
            {/* menu section */}
            <div className="middle-bottom-section">
              <div className="nav-middle">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="middle-menu-content"
                    style={{
                      background:
                        activeIndex === index ? "rgba(229, 209, 255, 0.5)" : "",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleClick(index)}
                  >
                    <div className="sub-menu-content">
                      <span
                        className="menu-icon"
                        style={
                          activeIndex === index
                            ? { color: "#7D33D9" }
                            : { color: "rgb(191, 191, 191)" }
                        }
                      >
                        {item.icon}
                      </span>
                      {/* {item.icon} */}
                      <p
                        style={{
                          color: activeIndex === index ? "#7D33D9" : "",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                    <span
                      style={{
                        color:
                          activeIndex === index
                            ? "#7D33D9"
                            : "rgb(154, 158, 171)",
                        paddingRight: "10px",
                      }}
                    >
                      {item.number}
                    </span>
                  </div>
                ))}
              </div>
              {/* bottom section */}
              <div className="nav-bottom">
                <div className="bottom-menu-content">
                  <MdOutlineSettings className="menu-icon" />
                  <p>Settings</p>
                </div>
                <div className="bottom-menu-content">
                  <RiLogoutBoxLine className="menu-icon" />
                  <p>Log out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
