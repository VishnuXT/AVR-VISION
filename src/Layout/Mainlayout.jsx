import React from "react";
import "./Style.css";
import logo from "../Assests/Icons/AVR.svg";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";


const Mainlayout = () => {
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
        <Outlet/>
      </div>
    </div>
  );
};
export default Mainlayout