// src/pages/Products/Branding.js
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../../style/Branding.css';

// =========================================================
// BRANDING PRODUCT IMAGES
// =========================================================

import brandedPensImg from '../../images/branded pens.jpeg';
import notebooksImg from '../../images/branded notebook 2.jpeg';
import uniformsImg from '../../images/branded uniform.jpeg';
import mugsImg from '../../images/mugs.jpeg';
import tshirtsImg from '../../images/branded uniform 2.jpeg';
import bagsImg from '../../images/branded bags.jpeg';
import lanyardsImg from '../../images/lanyards.jpeg';
import usbDrivesImg from '../../images/usbdrivers.jpeg';
import keychainsImg from '../../images/key chain.jpeg';
import capsImg from '../../images/caps.jpeg';
import foldersImg from '../../images/folders.jpeg';
import mousepadsImg from '../../images/mousepads.jpeg';
import brandedCupsImg from '../../images/cup.jpeg';
import brandedPlatesImg from '../../images/plates.jpeg';

// =========================================================
// HERO IMAGES
// =========================================================

const heroImages = [
  brandedPensImg,
  notebooksImg,
  uniformsImg,
  mugsImg,
  tshirtsImg,
  bagsImg,
];

// =========================================================
// COMPONENT
// =========================================================

function Branding() {
  const [loading, setLoading] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  // =======================================================
  // HERO SLIDESHOW
  // =======================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((previousIndex) => {
        return (previousIndex + 1) % heroImages.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // =======================================================
  // CONTACT FORM
  // =======================================================

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
          message,
        },
        'user_789def012'
      )
      .then(() => {
        alert('Message sent successfully! We’ll contact you soon.');
        e.target.reset();
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="branding-page">

      {/* ===================================================
          HERO
          =================================================== */}

      <section
        className="branding-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(17, 20, 21, 0.82),
              rgba(17, 20, 21, 0.82)
            ),
            url("${heroImages[heroIndex]}")
          `,
        }}
      >
        <div className="branding-hero-content">

          <span className="branding-hero-label">
            MAHEGA GENERAL SUPPLIERS LIMITED
          </span>

          <h1>
            Custom Branding Solutions
          </h1>

          <p>
            Make your mark with professionally branded merchandise
            for businesses, schools, events, organizations and
            corporate teams.
          </p>

          <div className="branding-hero-buttons">

            <a
              href="#branding-products"
              className="branding-hero-btn"
            >
              Explore Products
            </a>

            <a
              href="#branding-contact"
              className="branding-hero-btn branding-hero-btn-outline"
            >
              Contact Us
            </a>

          </div>

          {/* HERO INDICATORS */}

          <div className="branding-hero-indicators">

            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`branding-hero-indicator ${
                  index === heroIndex ? 'active' : ''
                }`}
              />
            ))}

          </div>

        </div>
      </section>

      {/* ===================================================
          MAIN CONTENT
          =================================================== */}

      <main className="branding-main">

        {/* =================================================
            INTRODUCTION
            ================================================= */}

        <section className="branding-intro">

          <div className="branding-section-label">
            BRANDING SOLUTIONS
          </div>

          <h2>
            Professional Branding for Your Business
          </h2>

          <p>
            From branded pens and notebooks to uniforms, bags,
            mugs and promotional products, we help organizations
            create a strong and consistent visual identity.
          </p>

        </section>

        {/* =================================================
            STATS
            ================================================= */}

        <section className="branding-stats">

          <div className="branding-stat-box">
            <div className="branding-stat-number">
              500+
            </div>

            <h3>
              Brands Served
            </h3>

            <p>
              Supporting businesses and organizations
            </p>
          </div>

          <div className="branding-stat-box">
            <div className="branding-stat-number">
              Custom
            </div>

            <h3>
              Designs
            </h3>

            <p>
              Branding designed around your identity
            </p>
          </div>

          <div className="branding-stat-box">
            <div className="branding-stat-number">
              Fast
            </div>

            <h3>
              Turnaround
            </h3>

            <p>
              Efficient production and delivery
            </p>
          </div>

        </section>

        {/* =================================================
            KEY FEATURES
            ================================================= */}

        <section className="branding-feature-section">

          <div className="branding-feature-image-wrapper">

            <img
              src={brandedPensImg}
              alt="Custom branded promotional products"
              className="branding-feature-image"
            />

          </div>

          <div className="branding-feature-content">

            <div className="branding-section-label">
              OUR ADVANTAGE
            </div>

            <h2>
              Key Features
            </h2>

            <p>
              We provide complete branding solutions from design
              preparation to production, helping you create
              professional and memorable branded products.
            </p>

            <ul className="branding-feature-list">

              <li>
                Logo printing on a wide range of products
              </li>

              <li>
                Full-color printing, embroidery, engraving and UV printing
              </li>

              <li>
                Design support and digital mockups
              </li>

              <li>
                Bulk discounts for corporate clients
              </li>

            </ul>

          </div>

        </section>

        {/* =================================================
            PRODUCTS
            ================================================= */}

        <section
          id="branding-products"
          className="branding-products-section"
        >

          <div className="branding-section-heading">

            <div className="branding-section-label">
              OUR PRODUCTS
            </div>

            <h2>
              Branded Product Categories
            </h2>

            <p>
              Choose from a wide range of professional promotional
              and corporate branding products.
            </p>

          </div>

          <div className="branding-product-grid">

            {/* PENS */}

            <div className="branding-product-card">

              <img
                src={brandedPensImg}
                alt="Branded Pens"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Pens
                </h3>

                <p>
                  Ballpoint, rollerball and stylus pens with your
                  logo or message.
                </p>

              </div>

            </div>

            {/* NOTEBOOKS */}

            <div className="branding-product-card">

              <img
                src={notebooksImg}
                alt="Branded Notebooks"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Notebooks
                </h3>

                <p>
                  Hardcover, softcover and spiral notebooks with
                  customized covers.
                </p>

              </div>

            </div>

            {/* UNIFORMS */}

            <div className="branding-product-card">

              <img
                src={uniformsImg}
                alt="Branded Uniforms"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Uniforms
                </h3>

                <p>
                  Shirts, jackets, aprons and workwear with
                  embroidered or printed logos.
                </p>

              </div>

            </div>

            {/* MUGS */}

            <div className="branding-product-card">

              <img
                src={mugsImg}
                alt="Branded Mugs"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Mugs
                </h3>

                <p>
                  Ceramic, travel and glass mugs for gifts,
                  offices and promotions.
                </p>

              </div>

            </div>

            {/* CUPS */}

            <div className="branding-product-card">

              <img
                src={brandedCupsImg}
                alt="Branded Cups"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Cups
                </h3>

                <p>
                  Plastic, paper and reusable cups with custom
                  prints for events and offices.
                </p>

              </div>

            </div>

            {/* PLATES */}

            <div className="branding-product-card">

              <img
                src={brandedPlatesImg}
                alt="Branded Plates"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Plates
                </h3>

                <p>
                  Customized plates suitable for catering and
                  corporate events.
                </p>

              </div>

            </div>

            {/* T-SHIRTS */}

            <div className="branding-product-card">

              <img
                src={tshirtsImg}
                alt="Branded T-Shirts"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded T-Shirts
                </h3>

                <p>
                  Quality shirts for staff, events, campaigns
                  and giveaways.
                </p>

              </div>

            </div>

            {/* BAGS */}

            <div className="branding-product-card">

              <img
                src={bagsImg}
                alt="Branded Bags"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Bags
                </h3>

                <p>
                  Tote, backpack, laptop and shopping bags with
                  custom branding.
                </p>

              </div>

            </div>

            {/* LANYARDS */}

            <div className="branding-product-card">

              <img
                src={lanyardsImg}
                alt="Branded Lanyards"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Lanyards
                </h3>

                <p>
                  Professional lanyards for offices, schools
                  and events.
                </p>

              </div>

            </div>

            {/* USB DRIVES */}

            <div className="branding-product-card">

              <img
                src={usbDrivesImg}
                alt="Branded USB Drives"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded USB Drives
                </h3>

                <p>
                  Custom USB drives for promotions, data sharing
                  and corporate gifts.
                </p>

              </div>

            </div>

            {/* KEYCHAINS */}

            <div className="branding-product-card">

              <img
                src={keychainsImg}
                alt="Branded Keychains"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Keychains
                </h3>

                <p>
                  Metal, acrylic and leather keychains for
                  memorable giveaways.
                </p>

              </div>

            </div>

            {/* CAPS */}

            <div className="branding-product-card">

              <img
                src={capsImg}
                alt="Branded Caps"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Caps
                </h3>

                <p>
                  Baseball, trucker and snapback caps with
                  embroidered logos.
                </p>

              </div>

            </div>

            {/* FOLDERS */}

            <div className="branding-product-card">

              <img
                src={foldersImg}
                alt="Branded Folders"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Folders
                </h3>

                <p>
                  Presentation, document and report folders with
                  custom branding.
                </p>

              </div>

            </div>

            {/* MOUSEPADS */}

            <div className="branding-product-card">

              <img
                src={mousepadsImg}
                alt="Branded Mousepads"
                className="branding-product-image"
              />

              <div className="branding-product-card-content">

                <h3>
                  Branded Mousepads
                </h3>

                <p>
                  Desk and gaming mousepads with full-color
                  custom printing.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            WHY CHOOSE MAHEGA
            ================================================= */}

        <section className="branding-why-section">

          <div className="branding-why-image-wrapper">

            <img
              src={bagsImg}
              alt="Custom branded bags and promotional products"
              className="branding-why-image"
            />

          </div>

          <div className="branding-why-content">

            <div className="branding-section-label">
              WHY MAHEGA
            </div>

            <h2>
              Why Choose Mahega for Branding?
            </h2>

            <p>
              We combine quality products, professional branding
              and dependable service to help businesses and
              organizations build a strong identity.
            </p>

            <ul className="branding-feature-list">

              <li>
                Free design mockups before production
              </li>

              <li>
                Fast turnaround for most orders
              </li>

              <li>
                Orders from small quantities to bulk production
              </li>

              <li>
                Premium materials and durable printing
              </li>

              <li>
                Delivery across Uganda and East Africa
              </li>

            </ul>

          </div>

        </section>

        {/* =================================================
            CTA
            ================================================= */}

        <section className="branding-cta">

          <div className="branding-section-label">
            CUSTOM BRANDING
          </div>

          <h2>
            Get Your Free Design Mockup
          </h2>

          <p>
            Send us your logo and product idea and our team will
            prepare a digital preview before production.
          </p>

          <button
            type="button"
            className="branding-primary-btn"
            onClick={() => {
              document
                .getElementById('branding-contact')
                ?.scrollIntoView({
                  behavior: 'smooth',
                });
            }}
          >
            Request Mockup
          </button>

        </section>

        {/* =================================================
            CONTACT FORM
            ================================================= */}

        <section
          id="branding-contact"
          className="branding-contact-section"
        >

          <div className="branding-section-label">
            GET IN TOUCH
          </div>

          <h2>
            Contact Us for Custom Branding
          </h2>

          <p className="branding-contact-description">
            Tell us what you need and our team will get back to you.
          </p>

          <form
            className="branding-contact-form"
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
              placeholder="Your Message (e.g. product, quantity, logo, deadline)"
              rows="5"
              required
            />

            <button
              type="submit"
              className="branding-primary-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

          </form>

        </section>

      </main>
    </div>
  );
}

export default Branding;