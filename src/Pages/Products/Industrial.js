// src/Pages/Products/Industrial.js

import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/industrial.css';

// =========================================================
// INDUSTRIAL PRODUCT IMAGES
// =========================================================

import pipesFittingsImg from '../../images/pipes fittings.jpeg';
import plywoodTimberImg from '../../images/timber plywood.jpeg';
import metalsHardwareImg from '../../images/metal bars.jpeg';
import safetyMaterialsImg from '../../images/safety gears.jpeg';

import hdpePipesImg from '../../images/hdpe pipes.jpeg';
import pvcPipesImg from '../../images/pvc pipes.jpeg';
import steelPipesImg from '../../images/steel pipes.jpeg';
import galvanizedFittingsImg from '../../images/galvanised-fittings.jpeg';

import marinePlywoodImg from '../../images/marine plywood.jpeg';
import structuralTimberImg from '../../images/structural timbers.jpeg';
import commercialPlywoodImg from '../../images/commercial plywood.jpeg';

import steelBarsImg from '../../images/steel bars.jpeg';
import metalSheetsImg from '../../images/metal hard ware.jpeg';
import constructionHardwareImg from '../../images/construction handware.jpeg';

import safetySignageImg from '../../images/safety gears.jpeg';
import ppeGearImg from '../../images/ppe gears.jpeg';

// =========================================================
// HERO BACKGROUND IMAGES
// These use images already available in your project.
// =========================================================

const heroImages = [
  pipesFittingsImg,
  metalsHardwareImg,
  safetyMaterialsImg,
  steelBarsImg,
  constructionHardwareImg
];

function Industrial() {
  const [loading, setLoading] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  // =========================================================
  // CHANGE HERO IMAGE AUTOMATICALLY
  // =========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((currentIndex) => {
        return (currentIndex + 1) % heroImages.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
        'service_xyz123',
        'template_abc456',
        {
          name,
          email,
          message
        },
        'user_789def012'
      )
      .then(() => {
        alert(
          'Message sent successfully! We will contact you soon.'
        );

        e.target.reset();
      })
      .catch(() => {
        alert(
          'Failed to send. Please try again or contact us via WhatsApp.'
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="industrial-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="industrial-hero-section"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(17, 20, 21, 0.78),
              rgba(17, 20, 21, 0.78)
            ),
            url("${heroImages[heroIndex]}")
          `
        }}
      >
        <div className="industrial-hero-content">

          <span className="industrial-hero-label">
            MAHEGA GENERAL SUPPLIERS LIMITED
          </span>

          <h1>
            Industrial & Construction Materials
          </h1>

          <p>
            Premium pipes, metals, timber, hardware and safety
            materials for contractors, factories and infrastructure
            projects across Uganda.
          </p>

          <div className="industrial-hero-indicators">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={
                  index === heroIndex
                    ? 'hero-indicator active'
                    : 'hero-indicator'
                }
              ></span>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN PAGE CONTENT
      ===================================================== */}

      <div className="industrial-page-content">

        <main className="industrial-main-content">

          {/* =================================================
              INTRODUCTION
          ================================================= */}

          <section className="industrial-intro-section">

            <div className="industrial-section-heading">
              <span className="section-line"></span>

              <div>
                <span className="section-label">
                  INDUSTRIAL SUPPLY
                </span>

                <h2>
                  Premium Materials for Construction & Manufacturing
                </h2>
              </div>
            </div>

            <p>
              Source pipes, plywood, metals, hardware and safety
              equipment from trusted suppliers. Our materials are
              selected for durability, safety and performance in
              industrial and construction environments.
            </p>

          </section>

          {/* =================================================
              STATS
          ================================================= */}

          <section className="industrial-stats">

            <div className="industrial-stat-box">
              <h3>500+</h3>
              <p>Projects Supplied</p>
            </div>

            <div className="industrial-stat-box">
              <h3>Custom</h3>
              <p>Sizing Available</p>
            </div>

            <div className="industrial-stat-box">
              <h3>Heavy-Duty</h3>
              <p>Delivery</p>
            </div>

          </section>

          {/* =================================================
              KEY FEATURES
          ================================================= */}

          <section className="industrial-feature-section">

            <div className="industrial-feature-image">

              <img
                src={safetyMaterialsImg}
                alt="Industrial safety materials"
              />

            </div>

            <div className="industrial-feature-content">

              <span className="section-label">
                WHAT WE PROVIDE
              </span>

              <h2>
                Key Features
              </h2>

              <p>
                We provide dependable industrial materials and
                professional supply support for projects of different
                sizes.
              </p>

              <ul className="industrial-feature-list">

                <li>
                  Grade-certified materials with test reports
                </li>

                <li>
                  On-site cutting, bending and fabrication services
                </li>

                <li>
                  Site delivery with crane or forklift offloading
                </li>

                <li>
                  Bulk pricing and volume discounts for contractors
                </li>

                <li>
                  Just-in-time supply for ongoing projects
                </li>

                <li>
                  Technical support for material selection
                </li>

              </ul>

            </div>

          </section>

          {/* =================================================
              PRODUCT CATEGORIES
          ================================================= */}

          <section className="industrial-products-section">

            <div className="industrial-section-title">

              <span className="section-label">
                OUR PRODUCTS
              </span>

              <h2>
                Product Categories
              </h2>

              <p>
                Explore our range of industrial and construction
                materials available for wholesale supply.
              </p>

            </div>

            <div className="industrial-product-grid">

              <div className="industrial-product-card">
                <img
                  src={pipesFittingsImg}
                  alt="Pipes and fittings"
                />
                <div className="product-card-content">
                  <h3>Pipes & Fittings</h3>
                  <p>
                    HDPE, PVC, steel and galvanized pipes for water,
                    gas and drainage.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={plywoodTimberImg}
                  alt="Plywood and timber"
                />
                <div className="product-card-content">
                  <h3>Plywood & Timber</h3>
                  <p>
                    Marine, commercial and structural grades
                    available.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={metalsHardwareImg}
                  alt="Metals and hardware"
                />
                <div className="product-card-content">
                  <h3>Metals & Hardware</h3>
                  <p>
                    Steel bars, sheets, nails, screws, hinges and
                    locks.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={safetyMaterialsImg}
                  alt="Safety materials"
                />
                <div className="product-card-content">
                  <h3>Safety Materials</h3>
                  <p>
                    Signage, barricades, harnesses, helmets and
                    protective equipment.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={hdpePipesImg}
                  alt="HDPE pipes"
                />
                <div className="product-card-content">
                  <h3>HDPE Pipes</h3>
                  <p>
                    Pressure-rated pipes for water, irrigation and
                    sewer lines.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={pvcPipesImg}
                  alt="PVC pipes"
                />
                <div className="product-card-content">
                  <h3>PVC Pipes</h3>
                  <p>
                    Pipes for drainage and electrical conduit
                    applications.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={steelPipesImg}
                  alt="Steel pipes"
                />
                <div className="product-card-content">
                  <h3>Steel Pipes</h3>
                  <p>
                    Black, galvanized and seamless steel pipes for
                    structural and fluid applications.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={galvanizedFittingsImg}
                  alt="Galvanized fittings"
                />
                <div className="product-card-content">
                  <h3>Galvanized Fittings</h3>
                  <p>
                    Elbows, tees and couplings designed for
                    corrosion resistance.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={marinePlywoodImg}
                  alt="Marine plywood"
                />
                <div className="product-card-content">
                  <h3>Marine Plywood</h3>
                  <p>
                    Waterproof and durable plywood for demanding
                    construction applications.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={structuralTimberImg}
                  alt="Structural timber"
                />
                <div className="product-card-content">
                  <h3>Structural Timber</h3>
                  <p>
                    Hardwood and treated softwood for structural
                    framing.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={commercialPlywoodImg}
                  alt="Commercial plywood"
                />
                <div className="product-card-content">
                  <h3>Commercial Plywood</h3>
                  <p>
                    Suitable for furniture, partitions and interior
                    construction.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={steelBarsImg}
                  alt="Steel bars"
                />
                <div className="product-card-content">
                  <h3>Steel Bars</h3>
                  <p>
                    Deformed and round steel bars in different sizes.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={metalSheetsImg}
                  alt="Metal sheets"
                />
                <div className="product-card-content">
                  <h3>Metal Sheets</h3>
                  <p>
                    Aluminum, galvanized and stainless steel sheets.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={constructionHardwareImg}
                  alt="Construction hardware"
                />
                <div className="product-card-content">
                  <h3>Construction Hardware</h3>
                  <p>
                    Nails, screws, anchors, hinges, locks and
                    handles.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={safetySignageImg}
                  alt="Safety signage"
                />
                <div className="product-card-content">
                  <h3>Safety Signage</h3>
                  <p>
                    Warning, mandatory, emergency and prohibition
                    signs.
                  </p>
                </div>
              </div>

              <div className="industrial-product-card">
                <img
                  src={ppeGearImg}
                  alt="PPE gear"
                />
                <div className="product-card-content">
                  <h3>PPE Gear</h3>
                  <p>
                    Helmets, vests, gloves, harnesses and goggles.
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* =================================================
              WHY CHOOSE MAHEGA
          ================================================= */}

          <section className="industrial-benefits-section">

            <div className="industrial-benefits-content">

              <span className="section-label">
                WHY MAHEGA
              </span>

              <h2>
                Why Choose Mahega?
              </h2>

              <p>
                We combine dependable product sourcing, responsive
                service and project-focused delivery to help our
                customers complete their work efficiently.
              </p>

              <ul className="industrial-benefit-list">

                <li>
                  Technical support for material selection and
                  compliance
                </li>

                <li>
                  Just-in-time delivery directly to your
                  construction site
                </li>

                <li>
                  Credit terms for registered contractors and
                  companies
                </li>

                <li>
                  Dedicated account management for large projects
                </li>

                <li>
                  Quality assurance with material test certificates
                </li>

                <li>
                  Nationwide delivery across Uganda
                </li>

              </ul>

            </div>

            <div className="industrial-benefits-image">

              <img
                src={constructionHardwareImg}
                alt="Construction hardware supplied by Mahega"
              />

            </div>

          </section>

          {/* =================================================
              CTA
          ================================================= */}

          <section className="industrial-cta">

            <div>

              <span className="section-label">
                PROJECT SUPPLY
              </span>

              <h2>
                Request a Material Quote
              </h2>

              <p>
                Send your BOQ or material specifications and our
                team will prepare a quotation for your project.
              </p>

            </div>

            <button className="industrial-btn">
              Upload BOQ
            </button>

          </section>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <section className="industrial-contact-section">

            <div className="industrial-section-title">

              <span className="section-label">
                GET IN TOUCH
              </span>

              <h2>
                Contact Industrial Supply Team
              </h2>

              <p>
                Tell us about your project, required materials,
                quantities and delivery location.
              </p>

            </div>

            <form
              className="industrial-contact-form"
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
                placeholder="Describe your project, required materials, quantities and delivery location..."
                rows="6"
                required
              ></textarea>

              <button
                type="submit"
                className="industrial-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Request'}
              </button>

            </form>

          </section>

        </main>

      </div>

    </div>
  );
}

export default Industrial;