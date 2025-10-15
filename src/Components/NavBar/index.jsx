import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (path, name) => {
    setActive(name);
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="nav">
    

      {/* Burger / Close Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Desktop Menu */}
      <div className="nav-links">
        <div
          className={`nav-icon ${active === "home" ? "nav-icon-active" : ""}`}
          onClick={() => handleNavClick("/", "home")}
        >
          HOME
        </div>
        <div
          className={`nav-icon ${active === "services" ? "nav-icon-active" : ""}`}
          onClick={() => handleNavClick("/services", "services")}
        >
          SERVICES
        </div>
        <div
          className={`nav-icon ${active === "aboutus" ? "nav-icon-active" : ""}`}
          onClick={() => handleNavClick("/about", "aboutus")}
        >
          ABOUT US
        </div>
        <div
          className={`nav-icon ${active === "contactus" ? "nav-icon-active" : ""}`}
          onClick={() => handleNavClick("/contact", "contactus")}
        >
          CONTACT US
        </div>
      </div>

      {/* Fullscreen Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <div
            className={`sidebar-item ${active === "home" ? "active" : ""}`}
            onClick={() => handleNavClick("/", "home")}
          >
            HOME
          </div>
          <div
            className={`sidebar-item ${active === "services" ? "active" : ""}`}
            onClick={() => handleNavClick("/services", "services")}
          >
            SERVICES
          </div>
          <div
            className={`sidebar-item ${active === "aboutus" ? "active" : ""}`}
            onClick={() => handleNavClick("/about", "aboutus")}
          >
            ABOUT US
          </div>
          <div
            className={`sidebar-item ${active === "contactus" ? "active" : ""}`}
            onClick={() => handleNavClick("/contact", "contactus")}
          >
            CONTACT US
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
