
import React from 'react';
import logo from "../images/Mahega General Supplies.png";


import "../style/Navbar.css";

function Navbar() {
  return (
    
      
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
          <div>
          <img src={logo } alt="logo" height="200" width="200" style={{marginleft:'5px'}} ></img>
          
        </div>
        <div>
        <p className="navbar-logo "padding="100px" style={{marginTop:"10px"}}>
                 Mahega General Suppliers Ltd
    
          
        </p>
        </div>
        {/* Dropdown Menu */}
        <div className="navbar-dropdown">
          <button className="dropdown-toggle">More</button>
          <div className="dropdown-menu">
            <a href="/careers">Careers</a>
            <a href="/partners">Partners</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/services">Services</a>
          <a href="/Gallary">Gallary</a>
          <a href="/clients">Clients</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
