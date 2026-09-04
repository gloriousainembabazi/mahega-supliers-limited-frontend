// src/Pages/Products/Export.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/export.css';

// EXPORT PRODUCT IMAGES
import coffeeTeaImg from '../../images/coffee tea.jpeg';
import handicraftsTextilesImg from '../../images/textiles.jpeg';
import spicesHerbsImg from '../../images/spice herbs.jpeg';
import agroProductsImg from '../../images/agro products.jpeg';
import sheaButterImg from '../../images/shea buttering.jpeg';
import vanillaBeansImg from '../../images/vanila.jpeg';
import barkclothImg from '../../images/bark cloth.jpeg';
import driedFruitsImg from '../../images/dried fruits.jpeg';
import moringaPowderImg from '../../images/powder.jpeg';
import honeyImg from '../../images/honey.jpeg';
import wovenBasketsImg from '../../images/basket.jpeg';
import organicGingerImg from '../../images/ginger.jpeg';
import fruitConcentratesImg from '../../images/fruits.jpeg';
import teaLeavesImg from '../../images/tea leaves.jpeg';
import exportPackagingImg from '../../images/export packaging.jpeg';
import phytosanitaryCertImg from '../../images/phytosanitary cert.jpeg';

function Export() {
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
        { name, email, message },
        'user_789def012'
      )
      .then(() => {
        alert('Message sent successfully! Our export team will contact you soon.');
        e.target.reset();
      })
      .catch(() => {
        alert('Failed to send. Please try again or contact us via WhatsApp.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="export-page">

      {/* ================= HERO ================= */}
      <section className="export-hero">

        <div className="export-hero-slide export-slide-one">
          <img
            src={coffeeTeaImg}
            alt="Ugandan coffee and tea for export"
          />
        </div>

        <div className="export-hero-slide export-slide-two">
          <img
            src={agroProductsImg}
            alt="Ugandan agricultural export products"
          />
        </div>

        <div className="export-hero-slide export-slide-three">
          <img
            src={wovenBasketsImg}
            alt="Ugandan handmade export products"
          />
        </div>

        <div className="export-hero-overlay"></div>

        <div className="export-hero-content">

          <div className="hero-gold-line"></div>

          <h1>Ugandan Products, Global Standards</h1>

          <p>
            We source, certify, package and export premium Ugandan goods
            to international markets.
          </p>

          <div className="hero-buttons">

            <a
              href="#export-products"
              className="hero-btn hero-btn-gold"
            >
              Explore Products
            </a>

            <a
              href="#export-contact"
              className="hero-btn hero-btn-outline"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="export-main-content">

        {/* ================= INTRO ================= */}
        <section className="export-intro section-spacing">

          <div className="section-heading">

            <span>MAHEGA EXPORT SOLUTIONS</span>

            <h2>Ugandan Products for International Markets</h2>

            <div className="heading-line"></div>

          </div>

          <p>
            We source, package and prepare Ugandan-made goods for export,
            helping local producers reach international markets with
            compliant, branded and competitive products.
          </p>

        </section>

        {/* ================= STATS ================= */}
        <section className="product-stats">

          <div className="stat-box">
            <div className="stat-icon">50+</div>
            <h3>Export Clients</h3>
            <p>Producers and exporters supported</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">100%</div>
            <h3>Documentation</h3>
            <p>Export documentation support</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">EAC</div>
            <h3>Market Access</h3>
            <p>Regional and international markets</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">B2B</div>
            <h3>Custom Solutions</h3>
            <p>Solutions for businesses and producers</p>
          </div>

        </section>

        {/* ================= KEY FEATURES ================= */}
        <section className="info-section section-spacing">

          <div className="info-image">

            <img
              src={exportPackagingImg}
              alt="Export packaging and preparation"
            />

          </div>

          <div className="info-content">

            <span className="section-label">
              EXPORT SOLUTIONS
            </span>

            <h2>Key Features</h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              Our export solutions help producers prepare quality products
              for international markets while supporting packaging,
              documentation, compliance and logistics.
            </p>

            <ul className="feature-list">

              <li>
                <strong>International compliance</strong>
                <span>
                  Support for applicable EU, US, EAC and other market
                  requirements.
                </span>
              </li>

              <li>
                <strong>Private labeling and packaging</strong>
                <span>
                  Custom packaging, labeling and branding solutions for
                  export products.
                </span>
              </li>

              <li>
                <strong>Export documentation</strong>
                <span>
                  Assistance with certificates, laboratory reports,
                  traceability and required documentation.
                </span>
              </li>

              <li>
                <strong>Product consolidation</strong>
                <span>
                  Consolidation, palletization and container preparation
                  for different shipment sizes.
                </span>
              </li>

              <li>
                <strong>End-to-end export support</strong>
                <span>
                  Support from product sourcing and preparation through
                  shipment and delivery.
                </span>
              </li>

              <li>
                <strong>Support for producers</strong>
                <span>
                  Flexible export solutions for cooperatives, farmers,
                  manufacturers and established exporters.
                </span>
              </li>

            </ul>

          </div>

        </section>

        {/* ================= PRODUCTS ================= */}
        <section
          className="products-section section-spacing"
          id="export-products"
        >

          <div className="section-heading">

            <span>OUR PRODUCTS</span>

            <h2>Export-Ready Product Categories</h2>

            <div className="heading-line"></div>

          </div>

          <div className="product-grid">

            <div className="product-card">
              <img src={coffeeTeaImg} alt="Coffee and Tea" className="product-image" />
              <h3>Coffee & Tea</h3>
              <p>Washed, roasted, ground and branded products for supermarkets and cafes.</p>
            </div>

            <div className="product-card">
              <img src={handicraftsTextilesImg} alt="Handicrafts and Textiles" className="product-image" />
              <h3>Handicrafts & Textiles</h3>
              <p>Baskets, barkcloth, beads, garments and home decor.</p>
            </div>

            <div className="product-card">
              <img src={spicesHerbsImg} alt="Spices and Herbs" className="product-image" />
              <h3>Spices & Herbs</h3>
              <p>Vanilla, ginger, moringa, dried chilies and packaged herbs.</p>
            </div>

            <div className="product-card">
              <img src={agroProductsImg} alt="Agro Products" className="product-image" />
              <h3>Agro-Products</h3>
              <p>Honey, shea butter, fruit concentrates and dried fruits.</p>
            </div>

            <div className="product-card">
              <img src={sheaButterImg} alt="Shea Butter" className="product-image" />
              <h3>Shea Butter</h3>
              <p>Unrefined and organic export-grade shea butter for cosmetics and food.</p>
            </div>

            <div className="product-card">
              <img src={vanillaBeansImg} alt="Vanilla Beans" className="product-image" />
              <h3>Vanilla Beans</h3>
              <p>Premium Ugandan vanilla prepared for international markets.</p>
            </div>

            <div className="product-card">
              <img src={barkclothImg} alt="Barkcloth Art" className="product-image" />
              <h3>Barkcloth Art</h3>
              <p>Traditional Ugandan craft products prepared for international buyers.</p>
            </div>

            <div className="product-card">
              <img src={driedFruitsImg} alt="Dried Fruits" className="product-image" />
              <h3>Dried Fruits</h3>
              <p>Mango, pineapple and banana products prepared for export.</p>
            </div>

            <div className="product-card">
              <img src={moringaPowderImg} alt="Moringa Powder" className="product-image" />
              <h3>Moringa Powder</h3>
              <p>Nutrient-rich moringa products prepared for international markets.</p>
            </div>

            <div className="product-card">
              <img src={honeyImg} alt="Raw Honey" className="product-image" />
              <h3>Raw Honey</h3>
              <p>Quality honey products with traceability documentation.</p>
            </div>

            <div className="product-card">
              <img src={wovenBasketsImg} alt="Woven Baskets" className="product-image" />
              <h3>Woven Baskets</h3>
              <p>Handmade Ugandan baskets and craft products.</p>
            </div>

            <div className="product-card">
              <img src={organicGingerImg} alt="Organic Ginger" className="product-image" />
              <h3>Organic Ginger</h3>
              <p>Dehydrated and powdered ginger prepared for export markets.</p>
            </div>

            <div className="product-card">
              <img src={fruitConcentratesImg} alt="Fruit Concentrates" className="product-image" />
              <h3>Fruit Concentrates</h3>
              <p>Passion, mango and guava concentrates for beverage manufacturers.</p>
            </div>

            <div className="product-card">
              <img src={teaLeavesImg} alt="Tea Leaves" className="product-image" />
              <h3>Tea Leaves</h3>
              <p>Black, green and herbal tea products in bulk or retail packaging.</p>
            </div>

            <div className="product-card">
              <img src={exportPackagingImg} alt="Export Packaging" className="product-image" />
              <h3>Export Packaging</h3>
              <p>Custom boxes, labels, barcodes and palletization solutions.</p>
            </div>

            <div className="product-card">
              <img src={phytosanitaryCertImg} alt="Compliance Documentation" className="product-image" />
              <h3>Compliance Documentation</h3>
              <p>Export certificates, laboratory reports and compliance documentation.</p>
            </div>

          </div>

        </section>

        {/* ================= WHY CHOOSE MAHEGA ================= */}
        <section className="info-section reverse-mobile section-spacing">

          <div className="info-image">

            <img
              src={coffeeTeaImg}
              alt="Mahega export products"
            />

          </div>

          <div className="info-content">

            <span className="section-label">
              WHY MAHEGA
            </span>

            <h2>Why Choose Mahega for Export?</h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              We provide practical export solutions designed to help
              Ugandan producers access regional and international markets.
            </p>

            <ul className="benefit-list">

              <li>
                End-to-end export management from product preparation
                to shipment.
              </li>

              <li>
                Market access support for regional and international buyers.
              </li>

              <li>
                Flexible solutions for small producers and large exporters.
              </li>

              <li>
                Professional packaging and branding support.
              </li>

              <li>
                Export documentation and compliance assistance.
              </li>

              <li>
                Reliable communication and shipment updates.
              </li>

            </ul>

          </div>

        </section>

        {/* ================= CTA ================= */}
        <section className="cta-box">

          <div className="cta-content">

            <span className="section-label">
              EXPORT CONSULTATION
            </span>

            <h2>Start Exporting with Mahega</h2>

            <p>
              Whether you are a farmer, cooperative, manufacturer or
              established exporter, our team can help you prepare your
              products for international markets.
            </p>

            <a
              href="#export-contact"
              className="btn-primary"
            >
              Talk to Export Team
            </a>

          </div>

        </section>

        {/* ================= CONTACT ================= */}
        <section
          className="contact-form-section section-spacing"
          id="export-contact"
        >

          <div className="section-heading">

            <span>GET IN TOUCH</span>

            <h2>Contact Us for Export Services</h2>

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
              placeholder="Tell us about your product, target market, and export goals..."
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

export default Export;