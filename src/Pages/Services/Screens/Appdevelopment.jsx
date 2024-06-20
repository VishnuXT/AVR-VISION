import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import app from "../../../Assests/images/app.png";
import Servicesimg from "../../../Assests/images/Servicesop.png"; 

const AppDevelopment = () => {
  return (
    <div className="uiux-left">
      <div>
        <br />
        <div className="uiheader">App Development</div>

        <div>
          <img src={uiux} alt="uiux" />
        </div>
      </div>
      <div className="uiimage">
        <img src={app} alt="app" />
      </div>

      <div></div>
      <div className="services">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default AppDevelopment;
