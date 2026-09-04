import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-brand">
          <img src={logo} alt="Mahega General Suppliers Ltd Logo" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
          <p className="navbar-logo">Mahega General Supplies Ltd</p>
        </div>

        {/* Navigation Links with Dropdowns */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>

          <li><Link to="/about">About Us</Link></li>

          {/* Products Dropdown — EXPANDED LIST */}
          <li className="dropdown">
            <Link to="/products" className="dropdown-toggle">Products</Link>
            <ul className="dropdown-menu">
              <li><Link to="/products/stationery">Stationery & Office Supplies</Link></li>
              <li><a href="/products/computers">Computers & Printers</Link></li>
              <li><a href="/products/furniture">Office & Hotel Furniture</Link></li>
              <li><a href="/products/cleaning">Cleaning Materials</Link></li>
              <li><a href="/products/agricultural">Agricultural Inputs</Link></li>
              <li><a href="/products/livestock">Livestock & Rearing Supplies</Link></li>
              <li><a href="/products/food-beverages">Food & Beverages</Link></li>
              <li><a href="/products/medical">Medical Consumables & PPE</Link></li>
              <li><a href="/products/industrial">Industrial Pipes & Plywood</Link></li>
              <li><a href="/products/branding">Custom Branding</Link></li>
              <li><a href="/products/export">Exported Goods</Link></li>
              <li><a href="/products/custom">Custom Product Orders</Link></li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <a href="/services" className="dropdown-toggle">Services</a>
            <ul className="dropdown-menu">
              <li><a href="/services/procurement">Procurement & Sourcing</Link></li>
              <li><a href="/services/logistics">Logistics & Nationwide Delivery</Link></li>
              <li><a href="/services/custom-orders">Custom/Bulk Orders</Link></li>
              <li><a href="/services/consulting">Supply Chain Consultation</Link></li>
              <li><a href="/services/export-logistics">Export Handling & Documentation</Link></li>
            </ul>
          </li>

          <li><a href="/Gallary">Gallery</Link></li>
          <li><a href="/clients">Clients</Link></li>
          <li><a href="/blog">Blog</Link></li>
          <li><a href="/contact">Contact Us</Link></li>
          
          {/* Dashboard Link with Icon */}
          <li>
            <a href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Dashboard
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
