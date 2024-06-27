import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import character from "../../../Assests/images/vedio.png";
import Servicesimg from "../../../Assests/images/Servicesop.png"; 

const VedioEditing = () => {
  return (
    <div className="uiux-left">
      <div  className="uiux-trans">
        <br />
        <div className="uiheader">Vedio Editing</div>

        <div className="content">
          <div>vedio generation</div>
          <div>animated cinematics</div>
          <div>mixing</div>
          <div>vedio editing</div>
          <div>vfx</div>
        </div>
      </div>
      <div className="charaimage charaimagetrans">
        <img src={character} alt="uiux" />
      </div>

      <div></div>
      <div className="services  uiux-trans-top">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default VedioEditing;
