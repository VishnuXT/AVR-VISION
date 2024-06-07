import React from "react";
import "./servicestyle.css";
import service from "../../Assests/images/service.png";
import Servicesimg from "../../Assests/images/Services.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="services">
        <img src={Servicesimg} alt="avr img" />
      </div>
      <div className="service-img">
        <img src={service} alt="avr img" />
      </div>

      <div className="top">
        <div className="nav-icon" onClick={() => navigate("/")}>
          UI/UX design
        </div>
        <div className="nav-icon" onClick={() => navigate("/")}>
          Web development
        </div>
        <div className="nav-icon" onClick={() => navigate("/")}>
          App Development
        </div>
        <div className="nav-icon" onClick={() => navigate("/")}>
          Graphics Design
        </div>
        <div className="nav-icon" onClick={() => navigate("/")}>
          Character Design
        </div>
        <div className="nav-icon" onClick={() => navigate("/")}>
          Game Development
        </div>
        <div className="nav-icon" onClick={() => navigate("/")}>
          3D Modeling
        </div>
      </div>
    </div>
  );
};

export default Services;
