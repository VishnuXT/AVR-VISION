import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import uiuximg from "../../../Assests/images/uiux-img.png";
import Servicesimg from "../../../Assests/images/Servicesop.png"; 

const UIUXdesign = () => {
  return (
    <div className="uiux-left">
      <div className="uiux-trans">
        <br />
        <div className="uiheader">UI/UX DESIGN</div>

        <div>
          <img src={uiux} alt="uiux" />
        </div>
      </div>
      <div className="uiimage uiux-trans-img">
        <img src={uiuximg} alt="uiux" />
      </div>

      <div></div>
      <div className="services uiux-trans-top">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default UIUXdesign;
