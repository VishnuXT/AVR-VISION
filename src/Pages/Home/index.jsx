import React from "react";
import "./style.css";
import homepage from "../../Assests/images/homepage-roboat.png";
import text1 from "../../Assests/images/Group 1.png";

const Home = () => {
  return (
    <div className="gradientdivision">
      <div className="himg"><img src={homepage} alt="avr img" /></div>
      
      <div className="text"> <img src={text1} alt="avr img" height={300} /></div>
     
    </div>
  );
};

export default Home;
