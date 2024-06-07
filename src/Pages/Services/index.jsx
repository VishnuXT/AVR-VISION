import React from "react";
import "./style.css";
import logo from "../../Assests/Icons/AVR.svg";
import NavBar from "../../Components/NavBar";
import service from "../../Assests/images/service.png";

const Services = () => {
  return (
    <div>
      <div className="nav-wrpaper">
        <div className="gradient-left">
          <img src={logo} alt="avr img" />
        </div>
        <div className="gradient-right">
          <NavBar />
        </div>
      </div>

      <div className="gradient">
        <div className="service-header">SERVICES</div>
        <div className="service-img">
          <img src={service} alt="avr img" />
        </div>

        <div className="service-list service-text">
          
          <div>UI/UX design</div>
          <div>Web development</div>
          <div>App Development</div>
          <div>Graphics Design</div>
          <div>Character Design</div>
          <div>Game Development</div>
          <div>3D Modeling</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
