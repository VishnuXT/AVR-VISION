import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import Servicesimg from "../../../Assests/images/Servicesop.png";
import grapgics from "../../../Assests/images/graphics.png";

const GraphicsDesign = () => {
  return (
    <div className="uiux-left">
      <div className="uiux-trans">
        <br />
        <div className="uiheader">Graphics Design</div>

        <div className="content">
          <div>character designing</div>
          <div>Marketing and advertising design</div>
          <div>Motion graphics design</div>
          <div>print and publication  design</div>
          <div>brand logo designs</div>
          <div>image restoration</div>
        </div>
      </div>
      <div className="webimage graph-trans-img">
        <img src={grapgics} alt="uiux" />
      </div>

      <div></div>
      <div className="services  uiux-trans-top">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default GraphicsDesign;
