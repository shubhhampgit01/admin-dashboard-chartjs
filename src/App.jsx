import Navbar from "./component/navbar/Navbar";

import Sidebar from "./component/sidebar/Sidebar";
import {  useState } from "react";
import "./App.css";
const App = () => {

  const [closeSidebar, setCloseSideBar] = useState(true);
  return (
    <div className="app-container">
      <div>
        <Sidebar
          closeSidebar={closeSidebar}
          
        />
      </div>
      <div className="main-navbar">
        <Navbar closeSidebar={closeSidebar} setCloseSidebar={setCloseSideBar} />
      </div>
    </div>
  );
};

export default App;
