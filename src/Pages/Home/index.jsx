import React from "react";
import "./style.css";
import homepage from "../../Assests/images/homepage-roboat.png";
import logo from "../../Assests/Icons/AVR.svg";
import NavBar from "../../Components/NavBar";


const Home = () => {
  return (
    <div>
      <div className="nav-wrpaper">
        <div className="gradient-left">
          <img src={logo} alt="avr img" />
        </div>
        <div className="gradient-right">
        <NavBar/>
        </div>
      </div>

      <div className="gradient">
        <img src={homepage} alt="avr img" />

        <div className="wraper">
          MAKE
          <span className="header-1">YOUR VISION TO</span>
          LIFE
        </div>
      </div>
    </div>
  );
};

export default Home;
