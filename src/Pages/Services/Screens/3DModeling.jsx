import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import modeling from "../../../Assests/images/modeling.png";
import Servicesimg from "../../../Assests/images/Servicesop.png"; 

const DModeling = () => {
  return (
    <div className="uiux-left">
      <div>
        <br />
        <div className="uiheader">UI/UX DESIGN</div>

        <div>
          <img src={uiux} alt="uiux" />
        </div>
      </div>
      <div className="webimage">
        <img src={modeling} alt="uiux" />
      </div>

      <div></div>
      <div className="services">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default DModeling;
