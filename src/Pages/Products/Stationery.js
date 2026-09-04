// src/Pages/Products/Stationery.js

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// =========================================================
// PRODUCT IMAGES
// =========================================================

import writingImg from "../../images/books and pens.jpeg";
import paperImg from "../../images/books.jpeg";
import deskAccessoriesImg from "../../images/office desk.jpeg";
import printImg from "../../images/printer.jpeg";

import officeChairsImg from "../../images/office material 2.jpg";
import officeDesksImg from "../../images/office desk chair.jpeg";
import receptionImg from "../../images/reception chair.jpeg";
import trainingImg from "../../images/mobile.jpeg";
import cafeImg from "../../images/cafe table 2.webp";
import foldingImg from "../../images/folding chair.jpeg";
import metroImg from "../../images/metro 1.jpeg";
import storageImg from "../../images/office storage.jpg";

// =========================================================
// STYLES
// =========================================================

import "../../style/stationery.css";

function Stationery() {
  const [loading, setLoading] = useState(false);

  // =========================================================
  // CONTACT FORM
  // =========================================================

  const sendContactForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    setLoading(true);

    emailjs
      .send(
        "gloriousainembabaz16@gmail.com",
        "YOUR_TEMPLATE_ID",
        {
          name,
          email,
          message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully! We will contact you soon.");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="stationery-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="stationery-hero">

        <div className="stationery-hero-slide stationery-slide-one">
          <img src={writingImg} alt="Stationery and writing supplies" />
        </div>

        <div className="stationery-hero-slide stationery-slide-two">
          <img src={officeDesksImg} alt="Office desks and furniture" />
        </div>

        <div className="stationery-hero-slide stationery-slide-three">
          <img src={storageImg} alt="Office storage solutions" />
        </div>

        <div className="stationery-hero-overlay"></div>

        <div className="stationery-hero-content">

          <div className="hero-gold-line"></div>

          <span className="hero-label">
            OFFICE SUPPLIES & FURNITURE
          </span>

          <h1>
            Complete Office & Stationery Solutions
          </h1>

          <p>
            From everyday stationery to professional office furniture,
            we provide reliable solutions that help businesses, schools
            and institutions operate efficiently and professionally.
          </p>

          <div className="hero-buttons">

            <a
              href="#products"
              className="hero-btn hero-btn-gold"
            >
              Explore Products
            </a>

            <a
              href="#contact"
              className="hero-btn hero-btn-outline"
            >
              Request a Quote
            </a>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <main className="stationery-main-content">

        {/* ===================================================
            INTRODUCTION
            =================================================== */}

        <section className="stationery-intro">

          <div className="section-heading">

            <span>OUR OFFICE SOLUTIONS</span>

            <h2>
              Everything Your Workplace Needs
            </h2>

            <div className="heading-line"></div>

          </div>

          <p>
            Mahega General Suppliers Limited provides a complete range
            of stationery, office supplies and furniture for businesses,
            schools, government institutions, NGOs and other organizations.
            Our solutions are designed to combine quality, functionality
            and professional presentation.
          </p>

        </section>

        {/* ===================================================
            STATS
            =================================================== */}

        <section className="product-stats">

          <div className="stat-box">
            <div className="stat-icon">500+</div>
            <h3>Products</h3>
            <p>
              Stationery, furniture and office essentials
            </p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">1000+</div>
            <h3>Clients Served</h3>
            <p>
              Businesses, schools and institutions
            </p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">24H</div>
            <h3>Fast Response</h3>
            <p>
              Prompt support for orders and enquiries
            </p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">BULK</div>
            <h3>Supply</h3>
            <p>
              Flexible solutions for large orders
            </p>
          </div>

        </section>

        {/* ===================================================
            KEY FEATURES
            IMAGE LEFT - CONTENT RIGHT
            =================================================== */}

        <section className="info-section section-spacing">

          <div className="info-image">
            <img
              src={writingImg}
              alt="Stationery products and office supplies"
            />
          </div>

          <div className="info-content">

            <span className="section-label">
              KEY FEATURES
            </span>

            <h2>
              Professional Stationery Solutions
            </h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              We supply dependable stationery and office products
              suitable for everyday operations, educational institutions,
              corporate environments and large organizational projects.
            </p>

            <ul className="feature-list">

              <li>
                <strong>Branded & Generic Stationery</strong>
                <span>
                  Quality pens, notebooks, files, folders and other
                  essential office supplies.
                </span>
              </li>

              <li>
                <strong>Paper & Filing Solutions</strong>
                <span>
                  Printing paper, envelopes, binders, files and document
                  organization products.
                </span>
              </li>

              <li>
                <strong>Custom Branding</strong>
                <span>
                  Customized notebooks, pens, folders and other stationery
                  carrying your organization identity.
                </span>
              </li>

              <li>
                <strong>Bulk Corporate Supply</strong>
                <span>
                  Flexible supply arrangements for companies, schools
                  and institutions with recurring requirements.
                </span>
              </li>

              <li>
                <strong>Office Setup Support</strong>
                <span>
                  Stationery and furniture solutions designed to work
                  together as a complete office setup.
                </span>
              </li>

            </ul>

          </div>

        </section>

        {/* ===================================================
            STATIONERY PRODUCTS
            =================================================== */}

        <section
          className="products-section section-spacing"
          id="products"
        >

          <div className="section-heading">

            <span>STATIONERY COLLECTION</span>

            <h2>
              Popular Stationery & Office Products
            </h2>

            <div className="heading-line"></div>

          </div>

          <div className="product-grid">

            <div className="product-card">

              <img
                src={writingImg}
                alt="Writing Instruments"
                className="product-image"
              />

              <h3>
                Writing Instruments
              </h3>

              <p>
                Pens, pencils, markers and highlighters for everyday
                writing, classroom and professional use.
              </p>

            </div>

            <div className="product-card">

              <img
                src={paperImg}
                alt="Paper and Filing"
                className="product-image"
              />

              <h3>
                Paper & Filing
              </h3>

              <p>
                Notebooks, files, envelopes, sticky notes, printing
                paper, binders and document organization supplies.
              </p>

            </div>

            <div className="product-card">

              <img
                src={deskAccessoriesImg}
                alt="Desk Accessories"
                className="product-image"
              />

              <h3>
                Desk Accessories
              </h3>

              <p>
                Scissors, staplers, tapes, clips, desk organizers
                and other essential desk accessories.
              </p>

            </div>

            <div className="product-card">

              <img
                src={printImg}
                alt="Print and Presentation"
                className="product-image"
              />

              <h3>
                Print & Presentation
              </h3>

              <p>
                Ink cartridges, toners, laminators, whiteboards,
                projectors and presentation essentials.
              </p>

            </div>

          </div>

        </section>

        {/* ===================================================
            OFFICE FURNITURE INTRO
            =================================================== */}

        <section className="furniture-intro section-spacing">

          <div className="section-heading">

            <span>OFFICE FURNITURE</span>

            <h2>
              Premium Office Furniture Collection
            </h2>

            <div className="heading-line"></div>

          </div>

          <p>
            We offer locally crafted and imported office furniture
            designed for comfort, durability and professional aesthetics.
            Our furniture solutions are available for bulk orders,
            office projects and customized configurations.
          </p>

        </section>

        {/* ===================================================
            FURNITURE PRODUCTS
            =================================================== */}

        <section className="products-section">

          <div className="product-grid">

            <div className="product-card">

              <img
                src={officeChairsImg}
                alt="Office Chairs"
                className="product-image"
              />

              <h3>
                Office Chairs
              </h3>

              <p>
                Ergonomic, executive and visitor chairs for
                different workspaces.
              </p>

            </div>

            <div className="product-card">

              <img
                src={officeDesksImg}
                alt="Office Desks and Tables"
                className="product-image"
              />

              <h3>
                Office Desks & Tables
              </h3>

              <p>
                Standing desks, L-shaped desks, rectangular desks
                and corner workstations.
              </p>

            </div>

            <div className="product-card">

              <img
                src={receptionImg}
                alt="Reception and Guest Seating"
                className="product-image"
              />

              <h3>
                Reception & Guest Seating
              </h3>

              <p>
                Modern sofas, armchairs and lounge sets for
                reception and waiting areas.
              </p>

            </div>

            <div className="product-card">

              <img
                src={trainingImg}
                alt="Training and Conference Furniture"
                className="product-image"
              />

              <h3>
                Training & Conference
              </h3>

              <p>
                Mobile training tables, folding chairs and
                seminar setups for meetings and classrooms.
              </p>

            </div>

            <div className="product-card">

              <img
                src={cafeImg}
                alt="Cafe and Breakout Furniture"
                className="product-image"
              />

              <h3>
                Café & Breakout Furniture
              </h3>

              <p>
                Bar stools, café tables and high-top sets for
                office pantries and lounges.
              </p>

            </div>

            <div className="product-card">

              <img
                src={foldingImg}
                alt="Folding Tables and Chairs"
                className="product-image"
              />

              <h3>
                Folding Tables & Chairs
              </h3>

              <p>
                Portable, space-saving furniture for events,
                training and flexible office environments.
              </p>

            </div>

            <div className="product-card">

              <img
                src={metroImg}
                alt="Metro Furniture Collection"
                className="product-image"
              />

              <h3>
                Metro Furniture Collection
              </h3>

              <p>
                Premium modern designs suitable for minimalist
                and executive office environments.
              </p>

            </div>

            <div className="product-card">

              <img
                src={storageImg}
                alt="Storage and Filing Cabinets"
                className="product-image"
              />

              <h3>
                Storage & Filing Cabinets
              </h3>

              <p>
                Steel, wooden and modular cabinets for documents,
                supplies and office equipment.
              </p>

            </div>

          </div>

        </section>

        {/* ===================================================
            WHY CHOOSE MAHEGA
            IMAGE LEFT - CONTENT RIGHT
            =================================================== */}

        <section className="info-section section-spacing">

          <div className="info-image">

            <img
              src={officeChairsImg}
              alt="Professional office furniture"
            />

          </div>

          <div className="info-content">

            <span className="section-label">
              WHY CHOOSE MAHEGA
            </span>

            <h2>
              A Reliable Partner for Your Office
            </h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              We combine office supplies, furniture and professional
              service to provide organizations with convenient,
              dependable and cost-effective procurement solutions.
            </p>

            <ul className="benefit-list">

              <li>
                One-stop sourcing for stationery, furniture and office essentials.
              </li>

              <li>
                Quality-focused products selected for durability and reliability.
              </li>

              <li>
                Custom branding and sizing available for selected products.
              </li>

              <li>
                Bulk supply solutions for companies, schools and institutions.
              </li>

              <li>
                Professional support from product selection through delivery.
              </li>

            </ul>

          </div>

        </section>

        {/* ===================================================
            CTA
            =================================================== */}

        <section className="cta-box">

          <div className="cta-content">

            <span className="section-label">
              GET STARTED
            </span>

            <h2>
              Get Your Office Setup Today
            </h2>

            <p>
              Speak to our team about your stationery requirements,
              furniture needs, bulk order or complete office setup.
              We can help you find the right products for your organization.
            </p>

            <div className="cta-buttons">

              <button
                className="btn-primary"
                type="button"
                onClick={() =>
                  alert("Our full catalogue will be available soon.")
                }
              >
                Download Catalog
              </button>

              <a
                href="#contact"
                className="btn-secondary"
              >
                Request Free Consultation
              </a>

            </div>

          </div>

        </section>

        {/* ===================================================
            CONTACT FORM
            =================================================== */}

        <section
          className="contact-form-section section-spacing"
          id="contact"
        >

          <div className="section-heading">

            <span>CONTACT OUR TEAM</span>

            <h2>
              Bulk Orders & Custom Requests
            </h2>

            <div className="heading-line"></div>

          </div>

          <p className="contact-description">
            Tell us what you need, the quantities required and your
            preferred delivery timeline. Our team will get back to you.
          </p>

          <form
            className="contact-form"
            onSubmit={sendContactForm}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message (product list, quantity, deadline, etc.)"
              rows="6"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-primary form-button"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </section>

      </main>
    </div>
  );
}

export default Stationery;