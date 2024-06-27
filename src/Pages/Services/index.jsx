import React from "react";
import "./style.css";
import service from "../../Assests/images/service.png";
import Servicesimg from "../../Assests/images/Services.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top">
        <div
          className="nav-icon service-trans service-trans2 "
          onClick={() => navigate("/uiux")}
        >
          UI/UX design
        </div>
        <div
          className="nav-icon service-trans service-trans1"
          onClick={() => navigate("/Webdevelopment")}
        >
          Web development
        </div>
        <div
          className="nav-icon service-trans service-trans2"
          onClick={() => navigate("/AppDevelopment")}
        >
          App Development
        </div>
        <div
          className="nav-icon service-trans service-trans1"
          onClick={() => navigate("/GraphicsDesign")}
        >
          Graphics Design
        </div>
        <div
          className="nav-icon service-trans service-trans2"
          onClick={() => navigate("/VedioEditing")}
        >
          Vedio Editing
        </div>
        {/* <div className="nav-icon service-trans service-trans1" onClick={() => navigate("/GameDevelopment")}>
          Game Development
        </div> */}
        <div
          className="nav-icon service-trans service-trans1"
          onClick={() => navigate("/3DModeling")}
        >
          3D Modeling
        </div>
      </div>
      <div className="services serviceanim">
        <img src={Servicesimg} alt="avr img" />
      </div>
      <div className="service-img service-img-anim">
        <img src={service} alt="avr img" />
      </div>
    </div>
  );
};

export default Services;
