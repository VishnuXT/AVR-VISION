import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import web from "../../../Assests/images/Web development.png";
import Servicesimg from "../../../Assests/images/Servicesop.png";

const WebDevelopment = () => {
  return (
    <div className="uiux-left">
      <div className="uiux-trans">
        <br />
        <div className="uiheader">WEB DEVELOPMENT</div>

        <div className="content">
          <div>We create and maintain - <br /> websites</div>
          <div>web design</div>
          <div>web publishing</div>
          <div> web programming</div>
          <div> database management</div>
        </div>
      </div>
      <div className="webimage web-trans-img">
        <img src={web} alt="web" />
      </div>

      <div className="services  uiux-trans-top">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default WebDevelopment;
