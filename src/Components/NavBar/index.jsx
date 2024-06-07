import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-icon" onClick={() => navigate("/")}>
        HOME
      </div>
      <div className="nav-icon nav-icon-active" onClick={() => navigate("/services")}>
        SERVICES
      </div>
      <div className="nav-icon" onClick={() => navigate("/about")}>
        ABOUT US
      </div>
      <div className="nav-icon" onClick={() => navigate("/contact")}>
        CONTACT US
      </div>
    </div>
  );
};

export default NavBar;
