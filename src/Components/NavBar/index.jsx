import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  return (
    <div className="nav">
      <div
        className={`nav-icon ${active === "home" ? "nav-icon-active" : ""}`}
        onClick={() => {
          setActive("home");
          navigate("/");
        }}
      >
        HOME
      </div>
      <div
        className={`nav-icon ${active === "services" ? "nav-icon-active" : ""}`}
        onClick={() => {
          setActive("services");
          navigate("/services");
        }}
      >
        SERVICES
      </div>
      <div
        className={`nav-icon ${active === "aboutus" ? "nav-icon-active" : ""}`}
        onClick={() => {
          setActive("aboutus");
          navigate("/about");
        }}
      >
        ABOUT US
      </div>
      <div
        className={`nav-icon ${
          active === "contactus" ? "nav-icon-active" : ""
        }`}
        onClick={() => {
          setActive("contactus");
          navigate("/contact");
        }}
      >
        CONTACT US
      </div>
    </div>
  );
};

export default NavBar;
