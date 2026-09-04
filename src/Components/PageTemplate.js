import React from "react";
import { Link } from "react-router-dom";
import "../style/PageTemplate.css";

import logo from "../images/logo1.png";

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">

      {/* =====================================================
          TOP NAVIGATION BAR
      ===================================================== */}
      <header className="top-bar-logistics">

        <div className="container nav-container">

          {/* =================================================
              LOGO + COMPANY NAME
          ================================================= */}
          <Link to="/" className="logo-area-logistics">

            <img
              src={logo}
              alt="Mahega General Supplies Limited"
              className="mahega-logo"
            />

            <div className="brand-text">

              <span className="brand-name">
                Mahega
              </span>

              <span className="brand-subtitle">
                General Supplies Limited
              </span>

            </div>

          </Link>


          {/* =================================================
              NAVIGATION
          ================================================= */}
          <nav className="nav-links-logistics">

            {/* HOME */}
            <Link to="/">
              Home
            </Link>


            {/* =================================================
                PRODUCTS DROPDOWN
            ================================================= */}
            <div className="nav-dropdown">

              <Link
                to="/products"
                className="dropdown-title"
              >
                Products
                <span className="dropdown-arrow">
                  ▾
                </span>
              </Link>

              <div className="dropdown-menu">

                <Link to="/products/stationery">
                  Stationery & Office Supplies
                </Link>

                <Link to="/products/computers">
                  Computers & ICT
                </Link>

                <Link to="/products/furniture">
                  Furniture & Fittings
                </Link>

                <Link to="/products/cleaning">
                  Cleaning Supplies
                </Link>

                <Link to="/products/agricultural">
                  Agricultural Supplies
                </Link>

                <Link to="/products/livestock">
                  Livestock Supplies
                </Link>

                <Link to="/products/food-beverages">
                  Food & Beverages
                </Link>

                <Link to="/products/medical">
                  Medical Supplies
                </Link>

                <Link to="/products/industrial">
                  Industrial Supplies
                </Link>

                <Link to="/products/branding">
                  Branding & Promotional Items
                </Link>

                <Link to="/products/export">
                  Export Products
                </Link>

                <Link to="/products/custom">
                  Custom Products
                </Link>

                <Link
                  to="/products"
                  className="view-all-link"
                >
                  View All Products →
                </Link>

              </div>

            </div>


            {/* =================================================
                SERVICES DROPDOWN
            ================================================= */}
            <div className="nav-dropdown">

              <Link
                to="/services"
                className="dropdown-title"
              >
                Services
                <span className="dropdown-arrow">
                  ▾
                </span>
              </Link>

              <div className="dropdown-menu">

                <Link to="/services/procurement">
                  Procurement & Sourcing
                </Link>

                <Link to="/services/logistics">
                  Logistics & Delivery
                </Link>

                <Link to="/services/custom-orders">
                  Custom Orders
                </Link>

                <Link to="/services/consulting">
                  Procurement Consulting
                </Link>

                <Link to="/services/export-logistics">
                  Export Logistics
                </Link>

                <Link
                  to="/services"
                  className="view-all-link"
                >
                  View All Services →
                </Link>

              </div>

            </div>


            {/* =================================================
                ABOUT US DROPDOWN
            ================================================= */}
            <div className="nav-dropdown">

              <Link
                to="/about"
                className="dropdown-title"
              >
                About Us
                <span className="dropdown-arrow">
                  ▾
                </span>
              </Link>

              <div className="dropdown-menu">

                <Link to="/about">
                  About Mahega
                </Link>

                <Link to="/about/mission">
                  Our Mission
                </Link>

                <Link to="/about/vision">
                  Our Vision
                </Link>

                <Link to="/about/team">
                  Our Team
                </Link>

                <Link to="/about/history">
                  Our History
                </Link>

                <Link to="/about/values">
                  Core Values
                </Link>

              </div>

            </div>


            {/* GALLERY */}
            <Link to="/gallary">
              Gallery
            </Link>


            {/* CLIENTS */}
            <Link to="/clients">
              Clients
            </Link>


            {/* BLOG */}
            <Link to="/blog">
              Blog
            </Link>


            {/* CONTACT */}
            <Link to="/contact">
              Contact Us
            </Link>

          </nav>

        </div>

      </header>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="main-content">
        {children}
      </main>


      {/* =====================================================
          FOOTER
          NO LOGO HERE
      ===================================================== */}
      <footer className="footer-logistics">

        <div className="container">

          <div className="footer-logistics-content">


            {/* =================================================
                COMPANY INFORMATION
                NO IMAGE LOGO
            ================================================= */}
            <div className="footer-brand-logistics">

              <h2>
                Mahega
              </h2>

              <span className="footer-gold-line"></span>

              <p>
                Advancing Industrial Excellence across East Africa
                through reliable supply chain management, quality
                products, and professional procurement services.
              </p>

            </div>


            {/* =================================================
                FOOTER LINKS
            ================================================= */}
            <div className="footer-links-logistics">


              {/* ================= NAVIGATION ================= */}
              <div className="footer-column-logistics">

                <h4>
                  Navigation
                </h4>

                <Link to="/">
                  Home
                </Link>

                <Link to="/about">
                  About Us
                </Link>

                <Link to="/products">
                  Products
                </Link>

                <Link to="/services">
                  Services
                </Link>

                <Link to="/gallary">
                  Gallery
                </Link>

                <Link to="/clients">
                  Clients
                </Link>

                <Link to="/blog">
                  Blog
                </Link>

                <Link to="/contact">
                  Contact Us
                </Link>

              </div>


              {/* ================= PRODUCTS ================= */}
              <div className="footer-column-logistics">

                <h4>
                  Products
                </h4>

                <Link to="/products/stationery">
                  Stationery
                </Link>

                <Link to="/products/computers">
                  Computers & ICT
                </Link>

                <Link to="/products/furniture">
                  Furniture
                </Link>

                <Link to="/products/cleaning">
                  Cleaning Supplies
                </Link>

                <Link to="/products/agricultural">
                  Agricultural Supplies
                </Link>

                <Link to="/products/livestock">
                  Livestock Supplies
                </Link>

                <Link to="/products/food-beverages">
                  Food & Beverages
                </Link>

                <Link to="/products/medical">
                  Medical Supplies
                </Link>

                <Link to="/products/industrial">
                  Industrial Supplies
                </Link>

                <Link to="/products/branding">
                  Branding
                </Link>

                <Link to="/products/export">
                  Export
                </Link>

                <Link to="/products/custom">
                  Custom Products
                </Link>

              </div>


              {/* ================= SERVICES ================= */}
              <div className="footer-column-logistics">

                <h4>
                  Services
                </h4>

                <Link to="/services/procurement">
                  Procurement & Sourcing
                </Link>

                <Link to="/services/logistics">
                  Logistics & Delivery
                </Link>

                <Link to="/services/custom-orders">
                  Custom Orders
                </Link>

                <Link to="/services/consulting">
                  Procurement Consulting
                </Link>

                <Link to="/services/export-logistics">
                  Export Logistics
                </Link>

              </div>


              {/* ================= CONTACT ================= */}
              <div className="footer-column-logistics">

                <h4>
                  Contact
                </h4>

                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  Colville Street - Airways House,
                  Kampala, Uganda
                </p>

                <p>
                  <i className="fas fa-phone"></i>
                  +256 702 850 154
                </p>

                <p>
                  <i className="fas fa-phone"></i>
                  +256 785 656 360
                </p>

                <p>
                  <i className="fas fa-envelope"></i>
                  mahega.gs@gmail.com
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              FOOTER BOTTOM
          ================================================= */}
          <div className="footer-bottom-logistics">

            <p>
              © 2026 Mahega General Supplies Ltd.
              Kampala, Uganda. All rights reserved.
            </p>

            <div className="footer-bottom-links">

              <Link to="#">
                Privacy Policy
              </Link>

              <Link to="#">
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default PageTemplate;