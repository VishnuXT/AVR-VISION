import React from "react";
import "./style.css";
import homepage from "../../Assests/images/homepage-roboat.png";


const Home = () => {
  return (
    <div className="gradientdivision">
      <img src={homepage} alt="avr img" />

      <div className="wraper">
        MAKE
        <span className="header-1">YOUR VISION TO</span>
        LIFE
      </div>
    </div>
  );
};

export default Home;
