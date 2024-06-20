import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import Servicesimg from "../../../Assests/images/Servicesop.png"; 
import grapgics from "../../../Assests/images/graphics.png";

const GraphicsDesign = () => {
  return (
    <div className="uiux-left">
      <div>
        <br />
        <div className="uiheader">Graphics Design</div>

        <div>
          <img src={uiux} alt="uiux" />
        </div>
      </div>
      <div className="webimage">
        <img src={grapgics} alt="uiux" />
      </div>

      <div></div>
      <div className="services">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default GraphicsDesign;
