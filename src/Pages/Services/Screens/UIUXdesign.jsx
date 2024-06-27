import React from "react";
import "./style.css";
import uiuximg from "../../../Assests/images/uiux-img.png";
import Servicesimg from "../../../Assests/images/Servicesop.png";

const UIUXdesign = () => {
  return (
    <div className="uiux-left">
      <div className="uiux-trans">
        <br />
        <div className="uiheader">UI/UX DESIGN</div>
        <div className="content">
          <div>UX Research</div>
          <div>UI Design</div>
          <div>Style Guide</div>
          <div>Re-Design</div>
        </div>
      </div>
      <div className="uiimage uiux-trans-img">
        <img src={uiuximg} alt="uiux" />
      </div>

      <div className="services uiux-trans-top">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default UIUXdesign;
