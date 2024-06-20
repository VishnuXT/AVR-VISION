import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import character from "../../../Assests/images/game.png";
import Servicesimg from "../../../Assests/images/Servicesop.png"; 

const CharacterDesign = () => {
  return (
    <div className="uiux-left">
      <div>
        <br />
        <div className="uiheader">Character Design</div>

        <div>
          <img src={uiux} alt="uiux" />
        </div>
      </div>
      <div className="charaimage">
        <img src={character} alt="uiux" />
      </div>

      <div></div>
      <div className="services">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default CharacterDesign;
