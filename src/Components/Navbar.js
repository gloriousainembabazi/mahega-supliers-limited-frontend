<<<<<<< HEAD

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
    
=======
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-200 text-blue-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold">Mahega Suppliers Ltd</h1>

        {/* Navigation Links */}
        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/whyus" className="hover:text-blue-600">Why Us</Link>
          <Link to="/clients" className="hover:text-blue-600">Clients</Link>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
  );
}

export default Navbar;
