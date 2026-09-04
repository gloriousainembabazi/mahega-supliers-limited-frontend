
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroBg1 from "../images/hero-bg1.jpg";
import heroBg2 from "../images/hero-bg2.jpg";
import heroBg3 from "../images/hero-bg3.jpg";
import heroBg4 from "../images/hero-bg4.jpg";
import heroBg5 from "../images/hero-bg5.jpg";

import "./Home.css";

const Home = () => {
  const heroImages = [
    heroBg1,
    heroBg2,
    heroBg3,
    heroBg4,
    heroBg5,
  ];

  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((previous) =>
        previous === heroImages.length - 1 ? 0 : previous + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="mh">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="mh-hero">

        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`mh-hero-slide ${
              index === currentHero ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        <div className="mh-hero-overlay" />

        <div className="mh-container mh-hero-content">
          <span className="mh-hero-label">
            MAHEGA GENERAL SUPPLIERS LIMITED
          </span>

          <h1>
            Advancing Industrial Excellence
            <span> Across East Africa</span>
          </h1>

          <p>
            Trusted supplier of agricultural, industrial, corporate,
            and procurement solutions — delivering quality products,
            reliable logistics, and professional service across the region.
          </p>

          <div className="mh-hero-buttons">
            <Link to="/products" className="mh-btn mh-btn-primary">
              View Products
            </Link>

            <Link to="/contact" className="mh-btn mh-btn-outline">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Hero indicators */}
        <div className="mh-hero-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`mh-hero-dot ${
                index === currentHero ? "active" : ""
              }`}
              onClick={() => setCurrentHero(index)}
              aria-label={`Show hero image ${index + 1}`}
            />
          ))}
        </div>

        {/* Feature cards */}
        <div className="mh-container">
          <div className="mh-feature-cards">

            <div className="mh-feature-card">
              <img src={heroBg2} alt="Applications" />

              <div className="mh-feature-body">
                <h3>Applications</h3>

                <p>
                  Solutions tailored to farming, industry,
                  construction, and enterprise needs.
                </p>
              </div>
            </div>

            <div className="mh-feature-card">
              <img src={heroBg3} alt="Quality Products" />

              <div className="mh-feature-body">
                <h3>Quality Products</h3>

                <p>
                  A wide catalogue of dependable,
                  quality-tested equipment and supplies.
                </p>
              </div>
            </div>

            <div className="mh-feature-card">
              <img src={heroBg4} alt="Professional Services" />

              <div className="mh-feature-body">
                <h3>Professional Services</h3>

                <p>
                  End-to-end procurement, logistics,
                  delivery, and after-sales support.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CORE COMPETENCIES
      ===================================================== */}
      <section className="mh-core">

        <div className="mh-container">

          <div className="mh-section-heading">
            <span className="mh-small-label">
              WHAT WE DO
            </span>

            <h2>Core Competencies</h2>

            <span className="mh-underline" />
          </div>

          <div className="mh-core-grid">

            <div className="mh-core-item">
              <h3>Agriculture Supplies</h3>

              <p>
                High-performance farming equipment,
                machinery, tools, and agricultural inputs
                for growing operations.
              </p>
            </div>

            <div className="mh-core-item">
              <h3>Corporate Procurement</h3>

              <p>
                Streamlined sourcing and supply chain
                solutions designed to support businesses
                and institutions.
              </p>
            </div>

            <div className="mh-core-item">
              <h3>Industrial Equipment</h3>

              <p>
                Durable tools, machinery, safety equipment,
                and industrial supplies for demanding environments.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT US
      ===================================================== */}
      <section className="mh-about">

        <div className="mh-container mh-about-grid">

          <div className="mh-about-image">
            <img
              src={heroBg5}
              alt="Mahega General Suppliers operations"
            />
          </div>

          <div className="mh-about-content">

            <span className="mh-small-label">
              ABOUT MAHEGA
            </span>

            <h2>
              A Reliable Partner for Quality Supply Solutions
            </h2>

            <span className="mh-underline mh-underline-left" />

            <p>
              Mahega General Suppliers Limited provides dependable
              procurement and supply solutions for businesses,
              institutions, agricultural enterprises, and industrial
              operations.
            </p>

            <p>
              We focus on quality products, reliable sourcing,
              efficient logistics, and professional customer service
              to help our clients operate with confidence.
            </p>

            <div className="mh-about-highlights">

              <div className="mh-about-highlight">
                <strong>Quality</strong>
                <span>Reliable products and supplies</span>
              </div>

              <div className="mh-about-highlight">
                <strong>Reliability</strong>
                <span>Dependable delivery and support</span>
              </div>

              <div className="mh-about-highlight">
                <strong>Service</strong>
                <span>Professional client support</span>
              </div>

            </div>

            <Link to="/about" className="mh-btn mh-btn-primary">
              Learn More About Us
            </Link>

          </div>
        </div>
      </section>


      {/* =====================================================
          OUR SERVICES
      ===================================================== */}
      <section className="mh-services">

        <div className="mh-container">

          <div className="mh-section-heading">

            <span className="mh-small-label">
              OUR SERVICES
            </span>

            <h2>Professional Supply & Procurement Services</h2>

            <span className="mh-underline" />

            <p className="mh-services-intro">
              We provide practical procurement, sourcing, logistics,
              and supply solutions designed around the needs of
              modern organizations.
            </p>

          </div>

          <div className="mh-services-grid">

            <div className="mh-service-card">

              <div className="mh-service-image">
                <img
                  src={heroBg1}
                  alt="Procurement services"
                />
              </div>

              <div className="mh-service-content">

                <h3>Procurement & Sourcing</h3>

                <p>
                  Professional sourcing and procurement services
                  that help organizations access the right products
                  at the right time.
                </p>

                <Link
                  to="/services"
                  className="mh-service-link"
                >
                  Learn More →
                </Link>

              </div>
            </div>


            <div className="mh-service-card">

              <div className="mh-service-image">
                <img
                  src={heroBg2}
                  alt="Logistics and delivery"
                />
              </div>

              <div className="mh-service-content">

                <h3>Logistics & Delivery</h3>

                <p>
                  Reliable coordination and delivery solutions
                  designed to ensure orders reach clients safely
                  and efficiently.
                </p>

                <Link
                  to="/services"
                  className="mh-service-link"
                >
                  Learn More →
                </Link>

              </div>
            </div>


            <div className="mh-service-card">

              <div className="mh-service-image">
                <img
                  src={heroBg3}
                  alt="Corporate supply solutions"
                />
              </div>

              <div className="mh-service-content">

                <h3>Corporate Supply Solutions</h3>

                <p>
                  Complete supply solutions for offices,
                  institutions, organizations, and corporate
                  operations.
                </p>

                <Link
                  to="/services"
                  className="mh-service-link"
                >
                  Learn More →
                </Link>

              </div>
            </div>

          </div>

          <div className="mh-services-action">
            <Link to="/services" className="mh-btn mh-btn-outline">
              View All Services
            </Link>
          </div>

        </div>
      </section>


      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="mh-stats">

        <div className="mh-container mh-stats-grid">

          <div className="mh-stat">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div className="mh-stat">
            <h3>500+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="mh-stat">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED CATEGORIES
      ===================================================== */}
      <section className="mh-featured">

        <div className="mh-container">

          <div className="mh-featured-header">

            <div className="mh-section-heading mh-section-heading-left">

              <span className="mh-small-label">
                OUR PRODUCTS
              </span>

              <h2>Featured Categories</h2>

              <span className="mh-underline mh-underline-left" />

            </div>

            <Link
              to="/products"
              className="mh-view-all"
            >
              View All →
            </Link>

          </div>


          <div className="mh-featured-grid">

            <div className="mh-featured-card">
              <img
                src={heroBg3}
                alt="Industrial Safety Gear"
              />

              <div className="mh-featured-overlay">
                <h3>Industrial Safety Gear</h3>
              </div>
            </div>


            <div className="mh-featured-card">
              <img
                src={heroBg4}
                alt="Agriculture Machinery"
              />

              <div className="mh-featured-overlay">
                <h3>Agriculture Machinery</h3>
              </div>
            </div>


            <div className="mh-featured-card">
              <img
                src={heroBg5}
                alt="Corporate IT Infrastructure"
              />

              <div className="mh-featured-overlay">
                <h3>Corporate IT Infrastructure</h3>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          OUR HERITAGE
      ===================================================== */}
      <section className="mh-heritage">

        <div className="mh-container mh-heritage-grid">

          <div className="mh-heritage-image">
            <img
              src={heroBg5}
              alt="Mahega warehouse and logistics operations"
            />
          </div>

          <div className="mh-heritage-content">

            <span className="mh-small-label">
              OUR HERITAGE OF RELIABILITY
            </span>

            <h2>Our Heritage of Reliability</h2>

            <span className="mh-underline mh-underline-left" />

            <p>
              Founded on the principles of steadfast reliability
              and unmatched quality, Mahega General Supplies Ltd
              has grown into a trusted partner in East Africa's
              industrial and corporate supply chain.
            </p>

            <p>
              Our mission is to bridge the gap between quality
              manufacturers and the dynamic needs of Ugandan
              enterprises through dependable sourcing,
              logistics, and professional service.
            </p>

            <p>
              We remain committed to maintaining high standards
              of quality, reliability, and customer service while
              building lasting partnerships with our clients.
            </p>

            <Link
              to="/about"
              className="mh-btn mh-btn-outline-light"
            >
              Learn About Our Process
            </Link>

          </div>
        </div>
      </section>


      {/* =====================================================
          BUSINESS SOLUTIONS
      ===================================================== */}
      <section className="mh-business-solutions">

        <div className="mh-container mh-split-section">

          <div className="mh-split-content">

            <span className="mh-small-label">
              BUSINESS SOLUTIONS
            </span>

            <h2>
              Solutions Designed for Your Business
            </h2>

            <span className="mh-underline mh-underline-left" />

            <p>
              We provide dependable procurement and supply chain
              solutions designed to help organizations operate
              efficiently and reduce procurement challenges.
            </p>

            <p>
              From corporate procurement and agricultural supplies
              to industrial equipment and logistics, Mahega delivers
              practical solutions tailored to your organization's needs.
            </p>

            <Link
              to="/services"
              className="mh-btn mh-btn-primary"
            >
              Learn More
            </Link>

          </div>

          <div className="mh-split-image">
            <img
              src={heroBg4}
              alt="Mahega Business Solutions"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          OUR VISION
      ===================================================== */}
      <section className="mh-vision-section">

        <div className="mh-container mh-split-section">

          <div className="mh-split-image">
            <img
              src={heroBg5}
              alt="Mahega Vision"
            />
          </div>

          <div className="mh-split-content">

            <span className="mh-small-label">
              OUR VISION
            </span>

            <h2>
              Building a More Reliable Supply Chain
            </h2>

            <span className="mh-underline mh-underline-left" />

            <p>
              Our vision is to become a trusted supply partner
              across East Africa by connecting businesses with
              reliable products, dependable logistics, and
              professional procurement services.
            </p>

            <p>
              We are committed to building lasting relationships
              through consistency, quality, innovation, and
              service excellence.
            </p>

            <Link
              to="/about/vision"
              className="mh-btn mh-btn-outline-light"
            >
              Read Our Story
            </Link>

          </div>
        </div>
      </section>


      {/* =====================================================
          WAREHOUSE
      ===================================================== */}
      <section className="mh-warehouse">

        <div className="mh-container mh-warehouse-grid">

          <div className="mh-warehouse-image">
            <img
              src={heroBg5}
              alt="Warehouse operations"
            />
          </div>

          <div className="mh-warehouse-content">

            <span className="mh-small-label">
              LOGISTICS & STORAGE
            </span>

            <h2>
              Warehousing & Reliability
            </h2>

            <span className="mh-underline mh-underline-left" />

            <p>
              Our warehouse facilities help ensure quality
              products are stored and prepared for delivery
              in optimal condition.
            </p>

            <p>
              With organized inventory management, trained staff,
              and reliable logistics partners, we work to ensure
              your orders arrive complete and on time.
            </p>

            <Link
              to="/about"
              className="mh-btn mh-btn-outline-light"
            >
              Learn More
            </Link>

          </div>
        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="mh-cta">

        <div className="mh-container">

          <span className="mh-small-label">
            LET'S WORK TOGETHER
          </span>

          <h2>
            Custom Procurement Solutions
          </h2>

          <p>
            Need a tailored sourcing or supply chain solution?
            Let's discuss your requirements and find the right
            solution for your organization.
          </p>

          <Link
            to="/contact"
            className="mh-btn mh-btn-primary"
          >
            Request a Quote
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Home;
