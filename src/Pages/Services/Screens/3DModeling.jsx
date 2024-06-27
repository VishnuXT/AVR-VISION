import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import modeling from "../../../Assests/images/modeling.png";
import Servicesimg from "../../../Assests/images/Servicesop.png";

const DModeling = () => {
  return (
    <div className="uiux-left">
      <div className="uiux-trans">
        <br />
        <div className="uiheader">3DModeling</div>

        <div className="content">
          <div>character modeling</div>
          <div>object modeling</div>
          <div>model rebuilding</div>
          <div></div>
        </div>
      </div>
      <div className="webimage model-trans-img">
        <img src={modeling} alt="uiux " />
      </div>

      
      <div className="services  uiux-trans-top">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default DModeling;
