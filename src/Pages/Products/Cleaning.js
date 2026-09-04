// src/Pages/Products/Cleaning.js

import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/cleaning.css';

// =========================================================
// HERO IMAGES
// =========================================================

import heroBg1 from '../../images/hero-bg1.jpg';
import heroBg2 from '../../images/hero-bg2.jpg';
import heroBg3 from '../../images/hero-bg3.jpg';
import heroBg4 from '../../images/hero-bg4.jpg';
import heroBg5 from '../../images/hero-bg5.jpg';

// =========================================================
// CLEANING SECTION IMAGES
// =========================================================

import cleaningFeaturesImg from '../../images/hygine care.jpeg';
import whyCleaningImg from '../../images/ecocleaners.jpeg';

// =========================================================
// CLEANING PRODUCT IMAGES
// =========================================================

import floorCleanersImg from '../../images/floor cleaners.jpeg';
import glassCleanersImg from '../../images/glass cleaner.jpeg';
import disinfectantsImg from '../../images/disinfectants.jpeg';
import degreasersImg from '../../images/degreasers.jpeg';
import broomsMopsImg from '../../images/broom mops.jpeg';
import glovesBucketsImg from '../../images/glove buckets.jpeg';
import wasteBinsImg from '../../images/waste bin.jpeg';
import recyclingStationsImg from '../../images/recycling station.jpeg';
import soapDispensersImg from '../../images/soap despensers.jpeg';
import sanitizerDispensersImg from '../../images/sanitizer dispenser.jpeg';
import paperTowelDispensersImg from '../../images/paper towel.jpeg';
import cleaningCartsImg from '../../images/cleaning carts.jpeg';
import ecoCleanersImg from '../../images/ecocleaners.jpeg';
import hospitalGradeImg from '../../images/hospital grade.jpeg';

function Cleaning() {
  const [loading, setLoading] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);

  // =========================================================
  // HERO SLIDESHOW
  // =========================================================

  const heroImages = [
    heroBg1,
    heroBg2,
    heroBg3,
    heroBg4,
    heroBg5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((previous) => (
        previous + 1
      ) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
    <div className="cleaning-page">

      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section
        className="cleaning-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.62),
              rgba(0, 0, 0, 0.62)
            ),
            url("${heroImages[currentHero]}")
          `,
        }}
      >
        <div className="cleaning-hero-content">

          <h1>Professional Cleaning Supplies</h1>

          <p>
            Reliable cleaning solutions for offices, schools, hospitals,
            hotels, restaurants and businesses across Uganda.
          </p>

          <div className="hero-dots">
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`hero-dot ${
                  currentHero === index ? 'active' : ''
                }`}
                onClick={() => setCurrentHero(index)}
                aria-label={`Show hero image ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          PAGE CONTENT
          ===================================================== */}

      <div className="cleaning-main-content">

        {/* ===================================================
            INTRODUCTION
            =================================================== */}

        <section className="intro-section">

          <h2>Professional-Grade Cleaning Supplies</h2>

          <p>
            Keep your premises spotless with our wide range of industrial
            and commercial cleaning products trusted by hotels, hospitals,
            offices, schools and other institutions.
          </p>

        </section>

        {/* ===================================================
            STATS
            =================================================== */}

        <section className="product-stats">

          <div className="stat-box">
            <div className="stat-number">100+</div>
            <h3>Products</h3>
            <p>Available</p>
          </div>

          <div className="stat-box">
            <div className="stat-number">Hospital</div>
            <h3>Grade</h3>
            <p>Products Available</p>
          </div>

          <div className="stat-box">
            <div className="stat-number">Eco</div>
            <h3>Friendly</h3>
            <p>Options Available</p>
          </div>

        </section>

        {/* ===================================================
            KEY FEATURES
            =================================================== */}

        <section className="features-section">

          <div className="section-image">
            <img
              src={cleaningFeaturesImg}
              alt="Professional cleaning supplies"
            />
          </div>

          <div className="section-text">

            <h2>Key Features</h2>

            <ul className="feature-list">

              <li>
                Safe for all surfaces including wood, glass, tile
                and stainless steel.
              </li>

              <li>
                Concentrated formulas that are cost-effective and
                reduce storage requirements.
              </li>

              <li>
                Bulk refill packs available to help reduce plastic
                waste.
              </li>

              <li>
                MSDS and safety compliance information provided.
              </li>

              <li>
                Eco-friendly and hospital-grade options available.
              </li>

            </ul>

          </div>

        </section>

        {/* ===================================================
            PRODUCT CATEGORIES
            =================================================== */}

        <section className="products-section">

          <div className="section-heading">
            <h2>Cleaning Product Categories</h2>
          </div>

          <div className="product-grid">

            <div className="product-card">
              <img
                src={floorCleanersImg}
                alt="Floor Cleaners"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Floor Cleaners</h3>
                <p>
                  For tile, vinyl, wood and concrete surfaces.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={glassCleanersImg}
                alt="Glass Cleaners"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Glass Cleaners</h3>
                <p>
                  Streak-free formulas for windows, mirrors and glass partitions.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={disinfectantsImg}
                alt="Disinfectants"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Disinfectants</h3>
                <p>
                  Effective hygiene solutions for clinics, schools,
                  kitchens and offices.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={degreasersImg}
                alt="Degreasers"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Degreasers</h3>
                <p>
                  Heavy-duty formulas for kitchens, workshops and machinery.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={broomsMopsImg}
                alt="Brooms and Mops"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Brooms &amp; Mops</h3>
                <p>
                  Industrial-grade handles, microfiber heads and
                  replaceable pads.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={glovesBucketsImg}
                alt="Gloves and Buckets"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Gloves &amp; Buckets</h3>
                <p>
                  Gloves, wringer buckets and mop pails for professional use.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={wasteBinsImg}
                alt="Waste Bins"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Waste Bins</h3>
                <p>
                  Plastic, metal, pedal and touchless bins for
                  offices and restrooms.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={recyclingStationsImg}
                alt="Recycling Stations"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Recycling Stations</h3>
                <p>
                  Multi-stream units for paper, plastic, cans and
                  general waste.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={soapDispensersImg}
                alt="Soap Dispensers"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Soap Dispensers</h3>
                <p>
                  Wall-mounted, countertop and automatic dispensers.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={sanitizerDispensersImg}
                alt="Sanitizer Dispensers"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Sanitizer Dispensers</h3>
                <p>
                  Touchless, wall-mounted and stand units for
                  high-traffic areas.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={paperTowelDispensersImg}
                alt="Paper Towel Dispensers"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Paper Towel Dispensers</h3>
                <p>
                  Manual and automatic dispensers for rolls and folded towels.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={cleaningCartsImg}
                alt="Cleaning Carts"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Cleaning Carts</h3>
                <p>
                  Multi-shelf trolleys with buckets, holders and
                  waste compartments.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={ecoCleanersImg}
                alt="Eco-Friendly Cleaners"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Eco-Friendly Cleaners</h3>
                <p>
                  Biodegradable and environmentally conscious cleaning options.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src={hospitalGradeImg}
                alt="Hospital-Grade Supplies"
                className="product-image"
              />
              <div className="product-card-content">
                <h3>Hospital-Grade Supplies</h3>
                <p>
                  Professional hygiene supplies suitable for medical facilities.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* ===================================================
            WHY CHOOSE MAHEGA
            =================================================== */}

        <section className="why-section">

          <div className="section-image">
            <img
              src={whyCleaningImg}
              alt="Why choose Mahega cleaning supplies"
            />
          </div>

          <div className="section-text">

            <h2>Why Choose Mahega for Cleaning?</h2>

            <ul className="benefit-list">

              <li>
                Scheduled replenishment service to help ensure
                you never run out of essential supplies.
              </li>

              <li>
                Training for cleaning staff on proper product usage
                and safety.
              </li>

              <li>
                Eco-friendly and hospital-grade products available.
              </li>

              <li>
                Custom cleaning kits designed for offices, schools
                and hotels.
              </li>

              <li>
                Fast delivery across Uganda.
              </li>

            </ul>

          </div>

        </section>

        {/* ===================================================
            CTA
            =================================================== */}

        <section className="cta-box">

          <h2>Request a Free Cleaning Audit</h2>

          <p>
            We will assess your facility and recommend the right
            products and quantities for your cleaning needs.
          </p>

          <button className="btn-primary" type="button">
            Book Free Audit
          </button>

        </section>

        {/* ===================================================
            CONTACT FORM
            =================================================== */}

        <section className="contact-form-section">

          <h2>Contact Us for Bulk or Custom Orders</h2>

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
              placeholder="Your Message (e.g., facility type, quantity, current products)"
              rows="5"
              required
            />

            <button
              type="submit"
              className="btn-primary form-submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

          </form>

        </section>

      </div>
    </div>
  );
}

export default Cleaning;