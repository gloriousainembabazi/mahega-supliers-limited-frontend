// src/pages/Products/FoodBeverages.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import '../../style/food.css';

// ✅ IMPORT REAL PRODUCT IMAGES
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

    emailjs.send(
      'service_xyz123',     // 👉 REPLACE WITH YOUR EMAILJS SERVICE ID
      'template_abc456',    // 👉 REPLACE WITH YOUR TEMPLATE ID
      { name, email, message },
      'user_789def012'      // 👉 REPLACE WITH YOUR PUBLIC KEY
    )
    .then(() => {
      alert('✅ Message sent successfully! We’ll contact you soon.');
      e.target.reset();
    })
    .catch(() => {
      alert('❌ Failed to send. Please try again or contact us via WhatsApp.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="food-beverages-page">
      

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>☕ Bulk Food & Beverage Supplies</h1>
          <p>Wholesale snacks, drinks and catering essentials for offices, hotels and events across Uganda.</p>
        </div>
      </section>

      {/* ✅ Main Content with Sidebar */}
      <div className="page-content">
        <div className="content-layout">
          
          {/* ✅ SIDEBAR — All Products (same as Custom.js & Export.js) */}
          <aside className="product-sidebar">
            <h3>📦 All Products</h3>
            <ul className="product-links">
              <li><a href="/products/stationery">Stationery & Office Supplies</a></li>
              <li><a href="/products/computers">Computers & Printers</a></li>
              <li><a href="/products/furniture">Office & Hotel Furniture</a></li>
              <li><a href="/products/cleaning">Cleaning Materials</a></li>
              <li><a href="/products/agricultural">Agricultural Inputs</a></li>
              <li><a href="/products/livestock">Livestock & Rearing</a></li>
              <li><a href="/products/food-beverages">Food & Beverages</a></li>
              <li><a href="/products/medical">Medical & PPE</a></li>
              <li><a href="/products/industrial">Industrial Materials</a></li>
              <li><a href="/products/branding">Custom Branding</a></li>
              <li><a href="/products/export">Exported Goods</a></li>
              <li><a href="/products/custom">Custom Orders</a></li>
            </ul>
          </aside>

          {/* ✅ MAIN CONTENT */}
          <main className="main-content">
            <section>
              <h2>☕ Bulk Supplies for Offices, Hotels & Events</h2>
              <p>
                Stock your pantry, café or event with our wide selection of beverages, snacks and catering essentials — 
                all at wholesale prices with reliable delivery.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">🥤</div>
                <h3>200+</h3>
                <p>Items</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🏨</div>
                <h3>Hotels &</h3>
                <p>Caterers Served</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">⏱️</div>
                <h3>24-Hour</h3>
                <p>Restocking</p>
              </div>
            </section>

            <section>
              <h2> Key Features</h2>
              <ul className="feature-list">
                <li> Expiry date guaranteed — fresh stock always</li>
                <li> Halal-certified & allergen-free options available</li>
                <li> Custom combo packs for conferences, weddings and offices</li>
                <li> Scheduled weekly or monthly deliveries</li>
                <li> Emergency restocking within 24 hours</li>
                <li> Branded vending machine refills</li>
              </ul>
            </section>

            <section>
              <h2>🍱 Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={hotBeveragesImg} alt="Hot Beverages" className="product-image" />
                  <h3>Hot Beverages</h3>
                  <p>Coffee, tea, sugar, creamers, disposable cups.</p>
                </div>
                <div className="product-card">
                  <img src={coldDrinksImg} alt="Cold Drinks" className="product-image" />
                  <h3>Cold Drinks</h3>
                  <p>Water, soda, juice, energy drinks, coolers.</p>
                </div>
                <div className="product-card">
                  <img src={snacksConfectioneryImg} alt="Snacks & Confectionery" className="product-image" />
                  <h3>Snacks & Confectionery</h3>
                  <p>Biscuits, chocolates, nuts, crisps, candies.</p>
                </div>
                <div className="product-card">
                  <img src={cateringEssentialsImg} alt="Catering Essentials" className="product-image" />
                  <h3>Catering Essentials</h3>
                  <p>Napkins, cutlery, plates, chafing fuel, serving trays.</p>
                </div>
                <div className="product-card">
                  <img src={coffeeBeansImg} alt="Coffee Beans" className="product-image" />
                  <h3>Coffee Beans</h3>
                  <p>Arabica, Robusta, ground or whole bean — bulk packs.</p>
                </div>
                <div className="product-card">
                  <img src={teaVarietiesImg} alt="Tea Varieties" className="product-image" />
                  <h3>Tea Varieties</h3>
                  <p>Black, green, herbal — loose leaf and teabags.</p>
                </div>
                <div className="product-card">
                  <img src={bottledWaterImg} alt="Bottled Water" className="product-image" />
                  <h3>Bottled Water</h3>
                  <p>500ml to 20L — still and sparkling options.</p>
                </div>
                <div className="product-card">
                  <img src={energyDrinksImg} alt="Energy Drinks" className="product-image" />
                  <h3>Energy Drinks</h3>
                  <p>Popular brands in cans and multipacks.</p>
                </div>
                <div className="product-card">
                  <img src={biscuitsCookiesImg} alt="Biscuits & Cookies" className="product-image" />
                  <h3>Biscuits & Cookies</h3>
                  <p>Assorted packs for offices and events.</p>
                </div>
                <div className="product-card">
                  <img src={chocolatesImg} alt="Chocolates" className="product-image" />
                  <h3>Chocolates</h3>
                  <p>Bars, buttons, and bulk packs for gifting.</p>
                </div>
                <div className="product-card">
                  <img src={nutsDriedFruitsImg} alt="Nuts & Dried Fruits" className="product-image" />
                  <h3>Nuts & Dried Fruits</h3>
                  <p>Healthy snack mixes, vacuum-sealed.</p>
                </div>
                <div className="product-card">
                  <img src={crispsChipsImg} alt="Crisps & Chips" className="product-image" />
                  <h3>Crisps & Chips</h3>
                  <p>Local and international brands in bulk.</p>
                </div>
                <div className="product-card">
                  <img src={disposableCupsImg} alt="Disposable Cups" className="product-image" />
                  <h3>Disposable Cups</h3>
                  <p>Hot & cold, with or without lids — eco options.</p>
                </div>
                <div className="product-card">
                  <img src={cutlerySetsImg} alt="Cutlery Sets" className="product-image" />
                  <h3>Cutlery Sets</h3>
                  <p>Plastic, bamboo and biodegradable options.</p>
                </div>
                <div className="product-card">
                  <img src={servingTraysImg} alt="Serving Trays" className="product-image" />
                  <h3>Serving Trays</h3>
                  <p>Stainless steel and disposable for buffets.</p>
                </div>
                <div className="product-card">
                  <img src={napkinsImg} alt="Napkins" className="product-image" />
                  <h3>Napkins</h3>
                  <p>White, colored, printed — cocktail to dinner size.</p>
                </div>
              </div>
            </section>

            <section>
              <h2> Why Choose Us?</h2>
              <ul className="benefit-list">
                <li> Emergency restocking available 24/7</li>
                <li> Branded vending machine supplies with your logo</li>
                <li> Menu planning & portioning support for cafeterias</li>
                <li> Transparent pricing with volume discounts</li>
                <li> Delivery across Kampala, Entebbe and major towns</li>
                <li> Dedicated account manager for large clients</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>📋 Build Your Pantry Package</h2>
              <p>Choose your products and delivery frequency — we’ll handle the rest.</p>
              <button className="btn-primary">Create Package</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📞 Request a Food & Beverage Quote</h2>
              <form className="contact-form" onSubmit={sendContactForm}>
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
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>

      
    </div>
  );
}

export default FoodBeverages;