import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import web from "../../../Assests/images/Web development.png";
import Servicesimg from "../../../Assests/images/Servicesop.png"; 

const WebDevelopment = () => {
  return (
    <div className="uiux-left">
      <div>
        <br />
        <div className="uiheader">WEB DEVELOPMENT</div>

        <div>
          <img src={uiux} alt="uiux" />
        </div>
      </div>
      <div className="webimage">
        <img src={web} alt="web" />
      </div>

      <div></div>
      <div className="services">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default WebDevelopment;
