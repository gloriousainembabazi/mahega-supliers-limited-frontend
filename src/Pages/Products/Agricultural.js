// src/pages/Products/Agricultural.js
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../../style/Agricultural.css';

// =========================================================
// CROP PRODUCT IMAGES
// =========================================================

import seedsImg from '../../images/seeds.jpeg';
import fertilizersImg from '../../images/fertilizers.jpeg';
import toolsImg from '../../images/tools.jpeg';
import irrigationImg from '../../images/irrigation.jpeg';
import greenhouseImg from '../../images/green house.jpeg';
import tractorImg from '../../images/tractor.jpeg';
import sprayerImg from '../../images/pen.jpeg';
import seedlingsImg from '../../images/seedling.jpeg';

// =========================================================
// LIVESTOCK IMAGES
// =========================================================

import cattleFeedImg from '../../images/cattlefeeding.jpeg';
import goatFeedImg from '../../images/goat feeding.jpeg';
import cattleVaccineImg from '../../images/cattle vaccine.jpeg';
import goatVaccineImg from '../../images/goat vaccine.jpeg';
import cattleFenceImg from '../../images/fencing.jpeg';
import goatShedImg from '../../images/goat rearing.jpg';
import milkingMachineImg from '../../images/milking machine.jpeg';
import weighingScaleImg from '../../images/scales.jpeg';
import cattleTagsImg from '../../images/tags.jpeg';
import hoofTrimmerImg from '../../images/cattle 2 rearing.jpg';
import waterTroughImg from '../../images/water trough.jpeg';
import mineralLickImg from '../../images/mineral licks.jpeg';

import protectiveGearImg from '../../images/gears.jpeg';

// =========================================================
// HERO IMAGES
// =========================================================

const heroImages = [
  tractorImg,
  seedsImg,
  cattleFeedImg,
  goatShedImg,
];

function Agricultural() {
  const [loading, setLoading] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  // =======================================================
  // HERO IMAGE SLIDESHOW
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
    <div className="agricultural-page">

      {/* ===================================================
          HERO SECTION
          =================================================== */}

      <section
        className="hero-section"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(17, 20, 21, 0.90),
              rgba(17, 20, 21, 0.62),
              rgba(17, 20, 21, 0.30)
            ),
            url("${heroImages[heroIndex]}")
          `,
        }}
      >
        <div className="hero-content">

          <span className="hero-label">
            MAHEGA GENERAL SUPPLIERS LIMITED
          </span>

          <h1>
            Agricultural & Livestock Solutions
          </h1>

          <p>
            Quality inputs for crops, cattle, goats, and modern farming
            solutions designed for Uganda.
          </p>

          <div className="hero-buttons">

            <a
              href="#crop-products"
              className="hero-btn"
            >
              Explore Products
            </a>

            <a
              href="#contact"
              className="hero-btn hero-btn-outline"
            >
              Contact Us
            </a>

          </div>

          {/* HERO SLIDE INDICATORS */}

          <div className="hero-indicators">

            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`hero-indicator ${
                  index === heroIndex ? 'active' : ''
                }`}
              ></span>
            ))}

          </div>

        </div>
      </section>

      {/* ===================================================
          MAIN CONTENT
          =================================================== */}

      <main className="agricultural-main">

        {/* =================================================
            CROP FARMING INTRODUCTION
            ================================================= */}

        <section className="intro-section">

          <div className="section-label">
            AGRICULTURAL SOLUTIONS
          </div>

          <h2>
            Quality Inputs for Modern Crop Farming
          </h2>

          <p>
            Boost your yield with our certified seeds, fertilizers,
            tools, irrigation systems, and protective gear — sourced
            for Uganda’s soil and climate and trusted by smallholders
            and commercial farms.
          </p>

        </section>

        {/* =================================================
            CROP STATISTICS
            ================================================= */}

        <section className="product-stats">

          <div className="stat-box">

            <div className="stat-number">
              500+
            </div>

            <h3>
              Farms Supplied
            </h3>

            <p>
              Supporting farmers across Uganda
            </p>

          </div>

          <div className="stat-box">

            <div className="stat-number">
              Certified
            </div>

            <h3>
              Quality Inputs
            </h3>

            <p>
              Reliable agricultural products
            </p>

          </div>

          <div className="stat-box">

            <div className="stat-number">
              Rural
            </div>

            <h3>
              Delivery
            </h3>

            <p>
              Products delivered closer to farmers
            </p>

          </div>

        </section>

        {/* =================================================
            KEY FEATURES
            IMAGE LEFT / CONTENT RIGHT
            ================================================= */}

        <section className="image-feature-section">

          <div className="feature-image-wrapper">

            <img
              src={seedsImg}
              alt="Agricultural seeds and farming inputs"
              className="feature-main-image"
            />

          </div>

          <div className="feature-content">

            <div className="section-label">
              OUR ADVANTAGE
            </div>

            <h2>
              Key Features
            </h2>

            <p className="feature-intro">
              We provide farmers with dependable agricultural inputs
              and practical support to help improve productivity and
              profitability.
            </p>

            <ul className="feature-list">

              <li>
                MOA-certified seeds & fertilizers
              </li>

              <li>
                Training & usage guides available
              </li>

              <li>
                Bulk discounts for cooperatives
              </li>

              <li>
                Credit options for registered farmers
              </li>

            </ul>

          </div>

        </section>

        {/* =================================================
            CROP PRODUCT CATEGORIES
            ================================================= */}

        <section
          id="crop-products"
          className="products-section"
        >

          <div className="section-heading">

            <div className="section-label">
              OUR PRODUCTS
            </div>

            <h2>
              Crop Farming Product Categories
            </h2>

            <p>
              Quality products and equipment for efficient and
              productive farming.
            </p>

          </div>

          <div className="product-grid">

            {/* SEEDS */}

            <div className="product-card">

              <img
                src={seedsImg}
                alt="Seeds and Seedlings"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Seeds & Seedlings
                </h3>

                <p>
                  Maize, beans, tomatoes, onions, and horticultural
                  varieties.
                </p>

              </div>

            </div>

            {/* FERTILIZERS */}

            <div className="product-card">

              <img
                src={fertilizersImg}
                alt="Fertilizers and Chemicals"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Fertilizers & Chemicals
                </h3>

                <p>
                  Organic & synthetic fertilizers, foliar feeds,
                  pesticides, and herbicides.
                </p>

              </div>

            </div>

            {/* TOOLS */}

            <div className="product-card">

              <img
                src={toolsImg}
                alt="Tools and Equipment"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Tools & Equipment
                </h3>

                <p>
                  Hoes, pangas, sprayers, wheelbarrows, and
                  irrigation kits.
                </p>

              </div>

            </div>

            {/* PROTECTIVE GEAR */}

            <div className="product-card">

              <img
                src={protectiveGearImg}
                alt="Protective Gear"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Protective Gear
                </h3>

                <p>
                  Gloves, boots, masks, and overalls for safe
                  chemical handling.
                </p>

              </div>

            </div>

            {/* IRRIGATION */}

            <div className="product-card">

              <img
                src={irrigationImg}
                alt="Irrigation Systems"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Irrigation Systems
                </h3>

                <p>
                  Drip kits, sprinklers, and water pumps for
                  efficient watering.
                </p>

              </div>

            </div>

            {/* GREENHOUSE */}

            <div className="product-card">

              <img
                src={greenhouseImg}
                alt="Greenhouse Materials"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Greenhouse Materials
                </h3>

                <p>
                  Plastic sheeting, frames, and ventilation for
                  controlled farming.
                </p>

              </div>

            </div>

            {/* TRACTOR */}

            <div className="product-card">

              <img
                src={tractorImg}
                alt="Tractor Implements"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Tractor Implements
                </h3>

                <p>
                  Plows, harrows, planters, and harvesters for
                  mechanized farming.
                </p>

              </div>

            </div>

            {/* SPRAYERS */}

            <div className="product-card">

              <img
                src={sprayerImg}
                alt="Sprayers and Applicators"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Sprayers & Applicators
                </h3>

                <p>
                  Backpack, knapsack, and motorized sprayers
                  for field use.
                </p>

              </div>

            </div>

            {/* SEEDLING TRAYS */}

            <div className="product-card">

              <img
                src={seedlingsImg}
                alt="Seedling Trays and Nurseries"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Seedling Trays & Nurseries
                </h3>

                <p>
                  Germination kits, soil mixes, and trays for
                  nursery production.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            CATTLE INTRODUCTION
            ================================================= */}

        <section className="intro-section livestock-intro">

          <div className="section-label">
            LIVESTOCK SOLUTIONS
          </div>

          <h2>
            Cattle Keeping Solutions
          </h2>

          <p>
            From feed and vaccines to fencing and milking equipment,
            we supply the essential products you need to run a
            profitable and healthy cattle operation.
          </p>

        </section>

        {/* =================================================
            CATTLE STATISTICS
            ================================================= */}

        <section className="product-stats">

          <div className="stat-box">

            <div className="stat-number">
              200+
            </div>

            <h3>
              Cattle Farms Served
            </h3>

            <p>
              Supporting cattle farmers
            </p>

          </div>

          <div className="stat-box">

            <div className="stat-number">
              Vet-Approved
            </div>

            <h3>
              Products
            </h3>

            <p>
              Reliable livestock supplies
            </p>

          </div>

          <div className="stat-box">

            <div className="stat-number">
              Farm Gate
            </div>

            <h3>
              Delivery
            </h3>

            <p>
              Convenient delivery services
            </p>

          </div>

        </section>

        {/* =================================================
            CATTLE FARMING FEATURES
            IMAGE LEFT / CONTENT RIGHT
            ================================================= */}

        <section className="image-feature-section">

          <div className="feature-image-wrapper">

            <img
              src={cattleFeedImg}
              alt="Cattle feeding and livestock management"
              className="feature-main-image"
            />

          </div>

          <div className="feature-content">

            <div className="section-label">
              CATTLE FARMING
            </div>

            <h2>
              Cattle Farming Features
            </h2>

            <p className="feature-intro">
              Our cattle solutions support farmers from feeding
              and animal health to housing, fencing, and herd
              management.
            </p>

            <ul className="feature-list">

              <li>
                Formulated feeds for dairy & beef cattle
              </li>

              <li>
                Vaccines & supplements from certified suppliers
              </li>

              <li>
                Installation support for pens & fencing
              </li>

              <li>
                Group discounts for cooperatives
              </li>

            </ul>

          </div>

        </section>

        {/* =================================================
            CATTLE PRODUCTS
            ================================================= */}

        <section className="products-section">

          <div className="section-heading">

            <div className="section-label">
              CATTLE PRODUCTS
            </div>

            <h2>
              Cattle Product Categories
            </h2>

            <p>
              Essential products for cattle health, productivity,
              housing, and management.
            </p>

          </div>

          <div className="product-grid">

            {/* CATTLE FEED */}

            <div className="product-card">

              <img
                src={cattleFeedImg}
                alt="Cattle Feed"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Cattle Feed
                </h3>

                <p>
                  Concentrates, hay, and mineral blocks for dairy
                  and beef breeds.
                </p>

              </div>

            </div>

            {/* CATTLE VACCINES */}

            <div className="product-card">

              <img
                src={cattleVaccineImg}
                alt="Cattle Vaccines and Medicines"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Vaccines & Medicines
                </h3>

                <p>
                  Dewormers, antibiotics, injectables, and
                  mastitis treatments.
                </p>

              </div>

            </div>

            {/* FENCING */}

            <div className="product-card">

              <img
                src={cattleFenceImg}
                alt="Cattle Fencing and Housing"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Fencing & Housing
                </h3>

                <p>
                  Wire mesh, posts, water troughs, roofing, and
                  milking stalls.
                </p>

              </div>

            </div>

            {/* MILKING */}

            <div className="product-card">

              <img
                src={milkingMachineImg}
                alt="Milking Equipment"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Milking Equipment
                </h3>

                <p>
                  Manual and electric milkers, cooling tanks,
                  and hygiene kits.
                </p>

              </div>

            </div>

            {/* WEIGHING */}

            <div className="product-card">

              <img
                src={weighingScaleImg}
                alt="Weighing Scales"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Weighing Scales
                </h3>

                <p>
                  Digital and mechanical scales for livestock
                  monitoring.
                </p>

              </div>

            </div>

            {/* ID TAGS */}

            <div className="product-card">

              <img
                src={cattleTagsImg}
                alt="Livestock ID Tags and Trackers"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  ID Tags & Trackers
                </h3>

                <p>
                  Ear tags and electronic trackers for herd
                  management.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            GOAT INTRODUCTION
            ================================================= */}

        <section className="intro-section livestock-intro">

          <div className="section-label">
            GOAT FARMING
          </div>

          <h2>
            Goat Rearing Essentials
          </h2>

          <p>
            Optimize your goat farm with specialized feed, housing,
            health products, and equipment designed for Ugandan
            conditions and breeds.
          </p>

        </section>

        {/* =================================================
            GOAT STATISTICS
            ================================================= */}

        <section className="product-stats">

          <div className="stat-box">

            <div className="stat-number">
              300+
            </div>

            <h3>
              Goat Farms Supported
            </h3>

            <p>
              Helping goat farmers grow
            </p>

          </div>

          <div className="stat-box">

            <div className="stat-number">
              Health-Focused
            </div>

            <h3>
              Products
            </h3>

            <p>
              Supporting healthy livestock
            </p>

          </div>

          <div className="stat-box">

            <div className="stat-number">
              Shed Plans
            </div>

            <h3>
              Available
            </h3>

            <p>
              Practical housing solutions
            </p>

          </div>

        </section>

        {/* =================================================
            GOAT FARMING FEATURES
            IMAGE LEFT / CONTENT RIGHT
            ================================================= */}

        <section className="image-feature-section">

          <div className="feature-image-wrapper">

            <img
              src={goatShedImg}
              alt="Modern goat rearing and housing"
              className="feature-main-image"
            />

          </div>

          <div className="feature-content">

            <div className="section-label">
              GOAT FARMING
            </div>

            <h2>
              Goat Farming Features
            </h2>

            <p className="feature-intro">
              We provide practical goat farming solutions covering
              nutrition, animal health, housing, grazing, and
              veterinary support.
            </p>

            <ul className="feature-list">

              <li>
                Feed formulated for growth, milk, or meat production
              </li>

              <li>
                Vaccines for PPR, CCPP, and other common diseases
              </li>

              <li>
                Portable sheds and fencing for rotational grazing
              </li>

              <li>
                On-call veterinary advisory
              </li>

            </ul>

          </div>

        </section>

        {/* =================================================
            GOAT PRODUCTS
            ================================================= */}

        <section className="products-section">

          <div className="section-heading">

            <div className="section-label">
              GOAT PRODUCTS
            </div>

            <h2>
              Goat Product Categories
            </h2>

            <p>
              Products designed to support healthy and productive
              goat farming.
            </p>

          </div>

          <div className="product-grid">

            {/* GOAT FEED */}

            <div className="product-card">

              <img
                src={goatFeedImg}
                alt="Goat Feed"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Goat Feed
                </h3>

                <p>
                  Pellets, mineral licks, hay, and supplements
                  for all ages.
                </p>

              </div>

            </div>

            {/* GOAT HEALTH */}

            <div className="product-card">

              <img
                src={goatVaccineImg}
                alt="Goat Vaccines and Health"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Vaccines & Health
                </h3>

                <p>
                  PPR, CCPP, dewormers, hoof care, and vitamin
                  injections.
                </p>

              </div>

            </div>

            {/* GOAT SHEDS */}

            <div className="product-card">

              <img
                src={goatShedImg}
                alt="Goat Sheds and Housing"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Sheds & Housing
                </h3>

                <p>
                  Portable pens, elevated floors, and ventilation
                  systems.
                </p>

              </div>

            </div>

            {/* WATER */}

            <div className="product-card">

              <img
                src={waterTroughImg}
                alt="Goat Water Systems"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Water Systems
                </h3>

                <p>
                  Automatic drinkers, troughs, and nipple systems
                  for goats.
                </p>

              </div>

            </div>

            {/* MINERAL LICKS */}

            <div className="product-card">

              <img
                src={mineralLickImg}
                alt="Mineral Licks"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Mineral Licks
                </h3>

                <p>
                  Salt, calcium, and phosphorus blocks for
                  nutritional balance.
                </p>

              </div>

            </div>

            {/* HOOF CARE */}

            <div className="product-card">

              <img
                src={hoofTrimmerImg}
                alt="Goat Hoof Care Tools"
                className="product-image"
              />

              <div className="product-card-content">

                <h3>
                  Hoof Care Tools
                </h3>

                <p>
                  Trimmers, antiseptics, and foot baths for
                  disease prevention.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            WHY CHOOSE MAHEGA
            IMAGE LEFT / CONTENT RIGHT
            ================================================= */}

        <section className="image-feature-section why-mahega-section">

          <div className="feature-image-wrapper">

            <img
              src={hoofTrimmerImg}
              alt="Livestock farming and management"
              className="feature-main-image"
            />

          </div>

          <div className="feature-content">

            <div className="section-label">
              WHY MAHEGA
            </div>

            <h2>
              Why Choose Mahega for Livestock?
            </h2>

            <p className="feature-intro">
              We combine quality livestock products, practical
              farming support, and convenient delivery to help
              farmers operate successful livestock businesses.
            </p>

            <ul className="feature-list benefit-list">

              <li>
                On-call veterinary advisory
              </li>

              <li>
                Feed formulation based on your livestock type
              </li>

              <li>
                Training on modern rearing practices
              </li>

              <li>
                Mobile delivery to rural goat & cattle farms
              </li>

              <li>
                Bulk discounts for cooperatives and large farms
              </li>

            </ul>

          </div>

        </section>

        {/* =================================================
            CALL TO ACTION
            ================================================= */}

        <section className="cta-box">

          <div className="section-label">
            LIVESTOCK SUPPORT
          </div>

          <h2>
            Talk to Our Livestock Team
          </h2>

          <p>
            Get advice on feed, vaccines, livestock equipment,
            or shed design for your herd.
          </p>

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              document
                .getElementById('contact')
                ?.scrollIntoView({
                  behavior: 'smooth',
                });
            }}
          >
            Request Free Consultation
          </button>

        </section>

        {/* =================================================
            CONTACT FORM
            ================================================= */}

        <section
          id="contact"
          className="contact-form-section"
        >

          <div className="section-label">
            GET IN TOUCH
          </div>

          <h2>
            Contact Us for Bulk Livestock Orders
          </h2>

          <p className="contact-description">
            Tell us what you need and our team will get back to you.
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
              placeholder="Your Message (e.g., cattle/goat type, quantity, location)"
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-primary"
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

export default Agricultural;