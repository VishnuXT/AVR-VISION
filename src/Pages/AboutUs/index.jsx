import React from "react";
import "./style.css";
import abouttext from "../../Assests/images/about1.png";
import aboutimg1 from "../../Assests/images/about2.png";
import aboutimg2 from "../../Assests/images/about3.png";
import aboutimg3 from "../../Assests/images/about4.png";

const AboutUs = () => {
  return (
    <>
      <div className="aboutgridding">
        <div></div>
        <div className="about">
          <div className="firstline">
            <span className="about1">
              <img src={abouttext} alt="avr img" />
            </span>
            <span className="about2">WE are a bunch of</span>
          </div>

          <div className="firstline">
            <span className="about3">Travalers</span>
            <span className="about7"> that joined</span>
          </div>

          <div className="firstline">
            <span className="about4">togother to share</span>
          </div>
          <div className="firstline">
            <span className="about5">our</span>
            <span className="about6"> visions.</span>
          </div>
        </div>
      </div>

      <div className="end">
        <div className="imgleft">
          <img src={aboutimg1} alt="avr img" />
        </div>
        <div>
          <img src={aboutimg2} alt="avr img" />
        </div>
        <div className="imgright">
          <img src={aboutimg3} alt="avr img" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
