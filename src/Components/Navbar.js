import React from 'react';
import logo from "../images/logo.png";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-brand">
          <img src={logo} alt="Mahega General Suppliers Ltd Logo" style={{ height: '100px', width: 'auto', objectFit: 'contain' }} />
          <p className="navbar-logo">Mahega General Suppliers Ltd</p>
        </div>

        {/* Navigation Links with Dropdowns */}
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>

          {/* About Dropdown */}
          <li className="dropdown">
            <a href="/about" className="dropdown-toggle">About Us</a>
            <ul className="dropdown-menu">
              <li><a href="/about/mission">About mahega company</a></li>
              <li><a href="/about/mission">Our Mission</a></li>
              <li><a href="/about/vision">Our Vision</a></li>
              <li><a href="/about/team">Our Team</a></li>

              <li><a href="/about/values">Our Values</a></li>
            </ul>
          </li>

          {/* Products Dropdown — EXPANDED LIST */}
          <li className="dropdown">
            <a href="/products" className="dropdown-toggle">Products</a>
            <ul className="dropdown-menu">
              <li><a href="/products/stationery">Stationery & Office Supplies</a></li>
              <li><a href="/products/computers">Computers & Printers</a></li>
              <li><a href="/products/furniture">Office & Hotel Furniture</a></li>
              <li><a href="/products/cleaning">Cleaning Materials</a></li>
              <li><a href="/products/agricultural">Agricultural Inputs</a></li>
              <li><a href="/products/livestock">Livestock & Rearing Supplies</a></li>
              <li><a href="/products/food-beverages">Food & Beverages</a></li>
              <li><a href="/products/medical">Medical Consumables & PPE</a></li>
              <li><a href="/products/industrial">Industrial Pipes & Plywood</a></li>
              <li><a href="/products/branding">Custom Branding</a></li>
              <li><a href="/products/export">Exported Goods</a></li>
              <li><a href="/products/custom">Custom Product Orders</a></li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <a href="/services" className="dropdown-toggle">Services</a>
            <ul className="dropdown-menu">
              <li><a href="/services/procurement">Procurement & Sourcing</a></li>
              <li><a href="/services/logistics">Logistics & Nationwide Delivery</a></li>
              <li><a href="/services/custom-orders">Custom/Bulk Orders</a></li>
              <li><a href="/services/consulting">Supply Chain Consultation</a></li>
              <li><a href="/services/export-logistics">Export Handling & Documentation</a></li>
            </ul>
          </li>

          <li><a href="/Gallary">Gallery</a></li>
          <li><a href="/clients">Clients</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;