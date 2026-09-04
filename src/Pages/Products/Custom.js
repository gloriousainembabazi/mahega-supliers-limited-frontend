// src/Pages/Products/Custom.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/custom.css';

// CUSTOM PRODUCT IMAGES
import brandedMerchandiseImg from '../../images/merchandise.jpeg';
import customFurnitureImg from '../../images/custom furniture.jpeg';
import specializedToolsImg from '../../images/specialized tools.jpeg';
import packagingKitsImg from '../../images/packaging kits.jpeg';
import uniformsImg from '../../images/uniforms 22222.jpeg';
import signageImg from '../../images/signage.jpeg';
import vehicleWrapsImg from '../../images/vehicle wraps.jpeg';
import promotionalItemsImg from '../../images/promotional item.jpeg';
import industrialPartsImg from '../../images/industral parts.jpeg';
import medicalDevicesImg from '../../images/medical devices.jpeg';
import exhibitionStandsImg from '../../images/stands.jpeg';
import retailDisplaysImg from '../../images/displays.jpeg';
import safetyGearImg from '../../images/safety gears.jpeg';
import trophiesAwardsImg from '../../images/trophies.jpeg';
import eventTentsImg from '../../images/tents.jpeg';
import customMatsImg from '../../images/mats.jpeg';

function Custom() {
  const [loading, setLoading] = useState(false);

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
        alert('Message sent successfully! We will contact you soon.');
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
    <div className="custom-page">

      {/* ================= HERO ================= */}
      <section className="custom-hero">

        <div className="custom-hero-slide custom-slide-one">
          <img
            src={brandedMerchandiseImg}
            alt="Custom branded merchandise"
          />
        </div>

        <div className="custom-hero-slide custom-slide-two">
          <img
            src={customFurnitureImg}
            alt="Custom furniture"
          />
        </div>

        <div className="custom-hero-slide custom-slide-three">
          <img
            src={exhibitionStandsImg}
            alt="Custom exhibition stands"
          />
        </div>

        <div className="custom-hero-overlay"></div>

        <div className="custom-hero-content">

          <div className="hero-gold-line"></div>

          <h1>
            Custom Products & Tailor-Made Solutions
          </h1>

          <p>
            From concept to delivery, we design, source and produce
            custom products tailored to your exact requirements.
          </p>

          <div className="hero-buttons">

            <a
              href="#custom-products"
              className="hero-btn hero-btn-gold"
            >
              Explore Products
            </a>

            <a
              href="#custom-contact"
              className="hero-btn hero-btn-outline"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="custom-main-content">

        {/* ================= INTRO ================= */}
        <section className="custom-intro section-spacing">

          <div className="section-heading">

            <span>
              MAHEGA CUSTOM SOLUTIONS
            </span>

            <h2>
              Tailor-Made Solutions for Unique Needs
            </h2>

            <div className="heading-line"></div>

          </div>

          <p>
            Can&apos;t find exactly what you need? We design, source and
            produce custom products to your specifications. From branded
            merchandise and furniture to specialized tools, packaging,
            uniforms and industrial solutions, we help turn your ideas
            into practical products.
          </p>

        </section>

        {/* ================= STATS ================= */}
        <section className="product-stats">

          <div className="stat-box">
            <div className="stat-icon">1000+</div>
            <h3>Orders</h3>
            <p>Custom Orders</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">DES</div>
            <h3>Design</h3>
            <p>Design Support</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">FAST</div>
            <h3>Turnaround</h3>
            <p>Efficient Delivery</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">UG</div>
            <h3>Uganda</h3>
            <p>Delivery Across Uganda</p>
          </div>

        </section>

        {/* ================= KEY FEATURES ================= */}
        <section className="info-section section-spacing">

          <div className="info-image">
            <img
              src={brandedMerchandiseImg}
              alt="Custom branded merchandise"
            />
          </div>

          <div className="info-content">

            <span className="section-label">
              CUSTOM SOLUTIONS
            </span>

            <h2>
              Key Features
            </h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              Our custom-order service provides flexible solutions for
              organizations, businesses, schools and individuals looking
              for products designed around their specific requirements.
            </p>

            <ul className="feature-list">

              <li>
                <strong>Dedicated project management</strong>
                <span>
                  Professional support throughout your custom order,
                  from initial concept to final delivery.
                </span>
              </li>

              <li>
                <strong>Prototyping and sampling</strong>
                <span>
                  Review samples and prototypes before full production
                  begins.
                </span>
              </li>

              <li>
                <strong>Flexible order quantities</strong>
                <span>
                  Solutions available for both small and large custom
                  requirements.
                </span>
              </li>

              <li>
                <strong>Quality assurance</strong>
                <span>
                  Products are checked throughout the production process
                  to maintain the required standards.
                </span>
              </li>

              <li>
                <strong>Transparent pricing</strong>
                <span>
                  Clear quotations based on your selected materials,
                  specifications and quantities.
                </span>
              </li>

              <li>
                <strong>Reliable delivery</strong>
                <span>
                  Coordinated delivery to help ensure your custom order
                  reaches you on time.
                </span>
              </li>

            </ul>

          </div>

        </section>

        {/* ================= PRODUCTS ================= */}
        <section
          className="products-section section-spacing"
          id="custom-products"
        >

          <div className="section-heading">

            <span>
              OUR CUSTOM PRODUCTS
            </span>

            <h2>
              Popular Custom Requests
            </h2>

            <div className="heading-line"></div>

          </div>

          <div className="product-grid">

            <div className="product-card">
              <img
                src={brandedMerchandiseImg}
                alt="Branded Merchandise"
                className="product-image"
              />
              <h3>Branded Merchandise</h3>
              <p>
                Notebooks, pens, T-shirts, mugs and lanyards with your
                logo or message.
              </p>
            </div>

            <div className="product-card">
              <img
                src={customFurnitureImg}
                alt="Custom Furniture"
                className="product-image"
              />
              <h3>Custom Furniture</h3>
              <p>
                Furniture with size, color, material and design tailored
                to your space and brand.
              </p>
            </div>

            <div className="product-card">
              <img
                src={specializedToolsImg}
                alt="Specialized Tools"
                className="product-image"
              />
              <h3>Specialized Tools</h3>
              <p>
                Industrial, agricultural and specialized tools built to
                your required specifications.
              </p>
            </div>

            <div className="product-card">
              <img
                src={packagingKitsImg}
                alt="Packaging and Kits"
                className="product-image"
              />
              <h3>Packaging & Kits</h3>
              <p>
                Gift boxes, starter kits and combination packs for
                events, promotions and sales.
              </p>
            </div>

            <div className="product-card">
              <img
                src={uniformsImg}
                alt="Custom Uniforms"
                className="product-image"
              />
              <h3>Custom Uniforms</h3>
              <p>
                Corporate, school and event uniforms with embroidery
                or printing.
              </p>
            </div>

            <div className="product-card">
              <img
                src={signageImg}
                alt="Custom Signage"
                className="product-image"
              />
              <h3>Custom Signage</h3>
              <p>
                Acrylic, metal and vinyl signs for offices, shops and
                events.
              </p>
            </div>

            <div className="product-card">
              <img
                src={vehicleWrapsImg}
                alt="Vehicle Wraps"
                className="product-image"
              />
              <h3>Vehicle Wraps</h3>
              <p>
                Full or partial wraps for fleet branding and promotional
                vehicles.
              </p>
            </div>

            <div className="product-card">
              <img
                src={promotionalItemsImg}
                alt="Promotional Items"
                className="product-image"
              />
              <h3>Promotional Items</h3>
              <p>
                Keychains, USB drives, caps and bags for giveaways and
                promotional events.
              </p>
            </div>

            <div className="product-card">
              <img
                src={industrialPartsImg}
                alt="Industrial Parts"
                className="product-image"
              />
              <h3>Industrial Parts</h3>
              <p>
                Machined components, molds and replacement parts for
                machinery.
              </p>
            </div>

            <div className="product-card">
              <img
                src={medicalDevicesImg}
                alt="Medical Devices"
                className="product-image"
              />
              <h3>Medical Devices</h3>
              <p>
                Custom trays, holders and non-electronic tools for
                clinics and laboratories.
              </p>
            </div>

            <div className="product-card">
              <img
                src={exhibitionStandsImg}
                alt="Exhibition Stands"
                className="product-image"
              />
              <h3>Exhibition Stands</h3>
              <p>
                Modular, pop-up and custom-built stands for trade shows
                and events.
              </p>
            </div>

            <div className="product-card">
              <img
                src={retailDisplaysImg}
                alt="Retail Displays"
                className="product-image"
              />
              <h3>Retail Displays</h3>
              <p>
                Countertop, floor and wall displays for showcasing
                products in stores.
              </p>
            </div>

            <div className="product-card">
              <img
                src={safetyGearImg}
                alt="Safety Gear"
                className="product-image"
              />
              <h3>Safety Gear</h3>
              <p>
                Custom-printed helmets, vests and gloves for construction
                and industrial use.
              </p>
            </div>

            <div className="product-card">
              <img
                src={trophiesAwardsImg}
                alt="Trophies and Awards"
                className="product-image"
              />
              <h3>Trophies & Awards</h3>
              <p>
                Engraved plaques, cups and medals for corporate and
                school events.
              </p>
            </div>

            <div className="product-card">
              <img
                src={eventTentsImg}
                alt="Event Tents"
                className="product-image"
              />
              <h3>Event Tents</h3>
              <p>
                Branded marquees, canopies and gazebos for outdoor
                events.
              </p>
            </div>

            <div className="product-card">
              <img
                src={customMatsImg}
                alt="Custom Mats"
                className="product-image"
              />
              <h3>Custom Mats</h3>
              <p>
                Logo mats, anti-fatigue mats and entrance mats for
                offices and shops.
              </p>
            </div>

          </div>

        </section>

        {/* ================= WHY CHOOSE MAHEGA ================= */}
        <section className="info-section reverse-mobile section-spacing">

          <div className="info-image">
            <img
              src={customFurnitureImg}
              alt="Mahega custom product solutions"
            />
          </div>

          <div className="info-content">

            <span className="section-label">
              WHY MAHEGA
            </span>

            <h2>
              Why Choose Mahega for Custom Orders?
            </h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              We combine practical design support, quality sourcing and
              dependable delivery to provide custom products that meet
              your specific requirements.
            </p>

            <ul className="benefit-list">

              <li>
                Solutions designed around your exact requirements.
              </li>

              <li>
                Professional support from concept through delivery.
              </li>

              <li>
                Quality materials and products selected for reliability.
              </li>

              <li>
                Transparent quotations and clear project timelines.
              </li>

              <li>
                Flexible solutions for schools, businesses and institutions.
              </li>

              <li>
                Delivery solutions available across Uganda and East Africa.
              </li>

            </ul>

          </div>

        </section>

        {/* ================= CTA ================= */}
        <section className="cta-box">

          <div className="cta-content">

            <span className="section-label">
              CUSTOM PROJECTS
            </span>

            <h2>
              Have a Custom Idea?
            </h2>

            <p>
              Tell us what you need and our team will help transform your
              idea into a practical product solution.
            </p>

            <a
              href="#custom-contact"
              className="btn-primary"
            >
              Start Your Custom Order
            </a>

          </div>

        </section>

        {/* ================= CONTACT ================= */}
        <section
          className="contact-form-section section-spacing"
          id="custom-contact"
        >

          <div className="section-heading">

            <span>
              GET IN TOUCH
            </span>

            <h2>
              Contact Us for Custom Projects
            </h2>

            <div className="heading-line"></div>

          </div>

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
              placeholder="Describe your custom product idea (materials, dimensions, quantity, deadline)"
              rows="6"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-primary form-button"
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

export default Custom;