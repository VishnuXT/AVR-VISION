import React from "react";
import uiux from "../../../Assests/images/uiux.svg";
import "./style.css";
import game from "../../../Assests/images/chara.png";
import Servicesimg from "../../../Assests/images/Servicesop.png"; 

const  GameDevelopment = () => {
  return (
    <div className="uiux-left">
      <div>
        <br />
        <div className="uiheader">Game Development</div>

        <div>
          <img src={uiux} alt="uiux" />
        </div>
      </div>
      <div className="webimage">
        <img src={game} alt="uiux" />
      </div>

      <div></div>
      <div className="services">
        <img src={Servicesimg} alt="avr img" />
      </div>
    </div>
  );
};

export default GameDevelopment;
