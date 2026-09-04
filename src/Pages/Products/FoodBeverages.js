// src/pages/Products/FoodBeverages.js

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import '../../style/food.css';

// PRODUCT IMAGES
import hotBeveragesImg from '../../images/hot beverages.jpeg';
import coldDrinksImg from '../../images/cold drinks.jpeg';
import snacksConfectioneryImg from '../../images/snacks.jpeg';
import cateringEssentialsImg from '../../images/catering.jpeg';
import coffeeBeansImg from '../../images/coffee beans.jpeg';
import teaVarietiesImg from '../../images/tea varieties.jpeg';
import bottledWaterImg from '../../images/bottle watering.jpeg';
import energyDrinksImg from '../../images/energy drink.jpeg';
import biscuitsCookiesImg from '../../images/cookies.jpeg';
import chocolatesImg from '../../images/chocolates.jpeg';
import nutsDriedFruitsImg from '../../images/dried fruits12.jpeg';
import crispsChipsImg from '../../images/crispschips.jpeg';
import disposableCupsImg from '../../images/disposable cups.jpeg';
import cutlerySetsImg from '../../images/cutlerysets.jpeg';
import servingTraysImg from '../../images/serving trays.jpeg';
import napkinsImg from '../../images/napkins.jpeg';

function FoodBeverages() {
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
        alert(
          'Failed to send. Please try again or contact us via WhatsApp.'
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="food-beverages-page">

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="food-hero">

        <div className="food-hero-slide food-slide-one">
          <img
            src={hotBeveragesImg}
            alt="Food and beverage supplies"
          />
        </div>

        <div className="food-hero-slide food-slide-two">
          <img
            src={cateringEssentialsImg}
            alt="Catering supplies"
          />
        </div>

        <div className="food-hero-slide food-slide-three">
          <img
            src={snacksConfectioneryImg}
            alt="Snacks and confectionery"
          />
        </div>

        <div className="food-hero-overlay"></div>

        <div className="food-hero-content">

          <div className="hero-gold-line"></div>

          <h1>Bulk Food & Beverage Supplies</h1>

          <p>
            Wholesale snacks, drinks and catering essentials for
            offices, hotels and events across Uganda.
          </p>

          <div className="hero-buttons">
            <a href="#food-products" className="hero-btn hero-btn-gold">
              View Products
            </a>

            <a href="#food-contact" className="hero-btn hero-btn-outline">
              Request a Quote
            </a>
          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}
      <main className="food-main-content">

        {/* ===================================================
            INTRODUCTION
            =================================================== */}
        <section className="food-intro section-spacing">

          <div className="section-heading">

            <span>Food & Beverage Supply</span>

            <h2>
              Bulk Supplies for Offices, Hotels & Events
            </h2>

            <div className="heading-line"></div>

          </div>

          <p>
            Stock your pantry, café or event with our wide selection
            of beverages, snacks and catering essentials — all at
            wholesale prices with reliable delivery.
          </p>

        </section>

        {/* ===================================================
            STATS
            =================================================== */}
        <section className="product-stats">

          <div className="stat-box">

            <div className="stat-icon">
              200+
            </div>

            <h3>200+</h3>

            <p>Food & Beverage Items</p>

          </div>

          <div className="stat-box">

            <div className="stat-icon">
              24/7
            </div>

            <h3>Hotels &</h3>

            <p>Caterers Served</p>

          </div>

          <div className="stat-box">

            <div className="stat-icon">
              24H
            </div>

            <h3>24-Hour</h3>

            <p>Restocking</p>

          </div>

          <div className="stat-box">

            <div className="stat-icon">
              UG
            </div>

            <h3>Nationwide</h3>

            <p>Delivery Coverage</p>

          </div>

        </section>

        {/* ===================================================
            KEY FEATURES
            IMAGE LEFT / CONTENT RIGHT
            =================================================== */}
        <section className="info-section section-spacing">

          <div className="info-image">

            <img
              src={cateringEssentialsImg}
              alt="Food and beverage catering essentials"
            />

          </div>

          <div className="info-content">

            <span className="section-label">
              Our Service
            </span>

            <h2>
              Key Features
            </h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              We provide dependable food and beverage supply
              solutions designed to keep offices, hotels,
              restaurants and events fully stocked.
            </p>

            <ul className="feature-list">

              <li>
                <strong>Fresh and Reliable Stock</strong>
                <span>
                  Carefully sourced products with reliable
                  expiry dates and consistent quality.
                </span>
              </li>

              <li>
                <strong>Wide Product Selection</strong>
                <span>
                  Beverages, snacks, confectionery and catering
                  essentials available in different quantities.
                </span>
              </li>

              <li>
                <strong>Custom Supply Packages</strong>
                <span>
                  Build packages according to your venue,
                  consumption levels and budget.
                </span>
              </li>

              <li>
                <strong>Scheduled Deliveries</strong>
                <span>
                  Weekly, monthly or scheduled deliveries
                  according to your business requirements.
                </span>
              </li>

              <li>
                <strong>Emergency Restocking</strong>
                <span>
                  Fast restocking support when your business
                  requires urgent supplies.
                </span>
              </li>

              <li>
                <strong>Business Support</strong>
                <span>
                  Dedicated support for hotels, offices,
                  restaurants, events and large clients.
                </span>
              </li>

            </ul>

          </div>

        </section>

        {/* ===================================================
            PRODUCTS
            =================================================== */}
        <section
          id="food-products"
          className="products-section section-spacing"
        >

          <div className="section-heading">

            <span>Our Products</span>

            <h2>
              Food & Beverage Product Categories
            </h2>

            <div className="heading-line"></div>

          </div>

          <div className="product-grid">

            <div className="product-card">
              <img
                src={hotBeveragesImg}
                alt="Hot Beverages"
                className="product-image"
              />
              <h3>Hot Beverages</h3>
              <p>
                Coffee, tea, sugar, creamers and disposable cups.
              </p>
            </div>

            <div className="product-card">
              <img
                src={coldDrinksImg}
                alt="Cold Drinks"
                className="product-image"
              />
              <h3>Cold Drinks</h3>
              <p>
                Water, soda, juice, energy drinks and coolers.
              </p>
            </div>

            <div className="product-card">
              <img
                src={snacksConfectioneryImg}
                alt="Snacks and Confectionery"
                className="product-image"
              />
              <h3>Snacks & Confectionery</h3>
              <p>
                Biscuits, chocolates, nuts, crisps and candies.
              </p>
            </div>

            <div className="product-card">
              <img
                src={cateringEssentialsImg}
                alt="Catering Essentials"
                className="product-image"
              />
              <h3>Catering Essentials</h3>
              <p>
                Napkins, cutlery, plates, serving trays and catering supplies.
              </p>
            </div>

            <div className="product-card">
              <img
                src={coffeeBeansImg}
                alt="Coffee Beans"
                className="product-image"
              />
              <h3>Coffee Beans</h3>
              <p>
                Arabica, Robusta, ground or whole bean bulk packs.
              </p>
            </div>

            <div className="product-card">
              <img
                src={teaVarietiesImg}
                alt="Tea Varieties"
                className="product-image"
              />
              <h3>Tea Varieties</h3>
              <p>
                Black, green and herbal teas in loose leaf and teabags.
              </p>
            </div>

            <div className="product-card">
              <img
                src={bottledWaterImg}
                alt="Bottled Water"
                className="product-image"
              />
              <h3>Bottled Water</h3>
              <p>
                500ml to 20L still and sparkling water options.
              </p>
            </div>

            <div className="product-card">
              <img
                src={energyDrinksImg}
                alt="Energy Drinks"
                className="product-image"
              />
              <h3>Energy Drinks</h3>
              <p>
                Popular energy drinks available in cans and multipacks.
              </p>
            </div>

            <div className="product-card">
              <img
                src={biscuitsCookiesImg}
                alt="Biscuits and Cookies"
                className="product-image"
              />
              <h3>Biscuits & Cookies</h3>
              <p>
                Assorted packs suitable for offices and events.
              </p>
            </div>

            <div className="product-card">
              <img
                src={chocolatesImg}
                alt="Chocolates"
                className="product-image"
              />
              <h3>Chocolates</h3>
              <p>
                Bars, buttons and bulk packs for gifting and events.
              </p>
            </div>

            <div className="product-card">
              <img
                src={nutsDriedFruitsImg}
                alt="Nuts and Dried Fruits"
                className="product-image"
              />
              <h3>Nuts & Dried Fruits</h3>
              <p>
                Healthy snack mixes and carefully packed dried fruits.
              </p>
            </div>

            <div className="product-card">
              <img
                src={crispsChipsImg}
                alt="Crisps and Chips"
                className="product-image"
              />
              <h3>Crisps & Chips</h3>
              <p>
                Local and international brands available in bulk.
              </p>
            </div>

            <div className="product-card">
              <img
                src={disposableCupsImg}
                alt="Disposable Cups"
                className="product-image"
              />
              <h3>Disposable Cups</h3>
              <p>
                Hot and cold cups with or without lids.
              </p>
            </div>

            <div className="product-card">
              <img
                src={cutlerySetsImg}
                alt="Cutlery Sets"
                className="product-image"
              />
              <h3>Cutlery Sets</h3>
              <p>
                Plastic, bamboo and biodegradable options.
              </p>
            </div>

            <div className="product-card">
              <img
                src={servingTraysImg}
                alt="Serving Trays"
                className="product-image"
              />
              <h3>Serving Trays</h3>
              <p>
                Stainless steel and disposable trays for buffets.
              </p>
            </div>

            <div className="product-card">
              <img
                src={napkinsImg}
                alt="Napkins"
                className="product-image"
              />
              <h3>Napkins</h3>
              <p>
                White, colored and printed napkins in different sizes.
              </p>
            </div>

          </div>

        </section>

        {/* ===================================================
            WHY CHOOSE MAHEGA
            IMAGE LEFT / CONTENT RIGHT
            =================================================== */}
        <section className="info-section section-spacing">

          <div className="info-image">

            <img
              src={hotBeveragesImg}
              alt="Mahega food and beverage supplies"
            />

          </div>

          <div className="info-content">

            <span className="section-label">
              Why Mahega
            </span>

            <h2>
              Why Choose Mahega?
            </h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              Mahega General Suppliers Limited provides
              reliable food and beverage supply solutions
              for businesses, institutions and events.
            </p>

            <ul className="benefit-list">

              <li>
                Reliable emergency restocking support
              </li>

              <li>
                Branded vending machine supplies available
              </li>

              <li>
                Support with menu planning and portioning
              </li>

              <li>
                Transparent pricing with volume discounts
              </li>

              <li>
                Delivery across Kampala, Entebbe and major towns
              </li>

              <li>
                Dedicated account management for large clients
              </li>

            </ul>

          </div>

        </section>

        {/* ===================================================
            CTA
            =================================================== */}
        <section className="cta-box section-spacing">

          <div className="cta-content">

            <span className="section-label">
              Custom Supply
            </span>

            <h2>
              Build Your Pantry Package
            </h2>

            <p>
              Choose your products and delivery frequency.
              We will handle the rest with reliable sourcing,
              packaging and delivery.
            </p>

            <a
              href="#food-contact"
              className="btn-primary"
            >
              Create Package
            </a>

          </div>

        </section>

        {/* ===================================================
            CONTACT
            =================================================== */}
        <section
          id="food-contact"
          className="contact-form-section section-spacing"
        >

          <div className="section-heading">

            <span>Get In Touch</span>

            <h2>
              Request a Food & Beverage Quote
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
              placeholder="Tell us your venue type, expected consumption and delivery needs..."
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-primary form-button"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Request'}
            </button>

          </form>

        </section>

      </main>

    </div>
  );
}

export default FoodBeverages;