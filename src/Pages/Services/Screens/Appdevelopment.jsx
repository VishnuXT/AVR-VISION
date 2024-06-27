import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import app from "../../../Assests/images/app.png";
import Servicesimg from "../../../Assests/images/Servicesop.png";

const AppDevelopment = () => {
  return (
    <div className="uiux-left">
      <div className="uiux-trans">
        <br />
        <div className="uiheader">App Development</div>

        <div className="content">
          <div>
            we create software applications 
            <br /> that run on mobile devices
          </div>
          <div>combining
          coding</div>
          <div> design and testing</div>
       
          <div>deployment</div>
        
       
        </div>
      </div>
      <div className="uiimage app-trans-img">
        <img src={app} alt="app" />
      </div>

      <div className="services  uiux-trans-top">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default AppDevelopment;
