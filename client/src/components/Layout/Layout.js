import React, { useState } from "react";
import "./Layout.css";
import { TiThMenu } from "react-icons/ti";
import Home from "../../pages/Home/Home";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? <TiThMenu size={30} /> : <TiThMenu size={30} />}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
