// src/pages/Products/Export.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/export.css';

// ✅ IMPORT EXPORT PRODUCT IMAGES
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

    emailjs.send(
      'service_xyz123',     // 👉 REPLACE WITH YOUR EMAILJS SERVICE ID
      'template_abc456',    // 👉 REPLACE WITH YOUR TEMPLATE ID
      { name, email, message },
      'user_789def012'      // 👉 REPLACE WITH YOUR PUBLIC KEY
    )
    .then(() => {
      alert('✅ Message sent successfully! Our export team will contact you soon.');
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
    <div className="export-page">
      

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🌍 Ugandan Products, Global Standards</h1>
          <p>We source, certify, package and export premium Ugandan goods to international markets.</p>
        </div>
      </section>

      {/* ✅ Main Content with Sidebar */}
      <div className="page-content">
        <div className="content-layout">
          
          {/* ✅ SIDEBAR — All Products (same as Custom.js) */}
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
              <h2>🌍 Ugandan Products, Global Standards</h2>
              <p>
                We source, package, and prepare Ugandan-made goods for export — helping local producers 
                reach international markets with compliant, branded, and competitive products.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">✈️</div>
                <h3>50+</h3>
                <p>Export Clients</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">📜</div>
                <h3>Full</h3>
                <p>Documentation</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🏷️</div>
                <h3>Custom</h3>
                <p>Branding</p>
              </div>
            </section>

            <section>
              <h2>✨ Key Features</h2>
              <ul className="feature-list">
                <li> Compliance with EU, US, EAC, and FDA standards</li>
                <li> Private labeling & custom packaging design</li>
                <li> Consolidation, palletization & container loading</li>
                <li> Phytosanitary, COO, lab reports & traceability</li>
                <li> End-to-end export management — from farm to port</li>
                <li> Support for small cooperatives and large exporters</li>
              </ul>
            </section>

            <section>
              <h2>📦 Export-Ready Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={coffeeTeaImg} alt="Coffee & Tea" className="product-image" />
                  <h3>Coffee & Tea</h3>
                  <p>Washed, roasted, ground, branded for supermarkets & cafes.</p>
                </div>
                <div className="product-card">
                  <img src={handicraftsTextilesImg} alt="Handicrafts & Textiles" className="product-image" />
                  <h3>Handicrafts & Textiles</h3>
                  <p>Baskets, barkcloth, beads, garments, home decor.</p>
                </div>
                <div className="product-card">
                  <img src={spicesHerbsImg} alt="Spices & Herbs" className="product-image" />
                  <h3>Spices & Herbs</h3>
                  <p>Vanilla, ginger, moringa, dried chilies, packaged for retail.</p>
                </div>
                <div className="product-card">
                  <img src={agroProductsImg} alt="Agro-Products" className="product-image" />
                  <h3>Agro-Products</h3>
                  <p>Honey, Shea butter, fruit concentrates, dried fruits.</p>
                </div>
                <div className="product-card">
                  <img src={sheaButterImg} alt="Shea Butter" className="product-image" />
                  <h3>Shea Butter</h3>
                  <p>Unrefined, organic, export-grade for cosmetics & food.</p>
                </div>
                <div className="product-card">
                  <img src={vanillaBeansImg} alt="Vanilla Beans" className="product-image" />
                  <h3>Vanilla Beans</h3>
                  <p>Premium Ugandan Bourbon vanilla, vacuum-sealed.</p>
                </div>
                <div className="product-card">
                  <img src={barkclothImg} alt="Barkcloth Art" className="product-image" />
                  <h3>Barkcloth Art</h3>
                  <p>Traditional Ugandan craft, certified sustainable.</p>
                </div>
                <div className="product-card">
                  <img src={driedFruitsImg} alt="Dried Fruits" className="product-image" />
                  <h3>Dried Fruits</h3>
                  <p>Mango, pineapple, banana — sulfite-free, shelf-stable.</p>
                </div>
                <div className="product-card">
                  <img src={moringaPowderImg} alt="Moringa Powder" className="product-image" />
                  <h3>Moringa Powder</h3>
                  <p>Nutrient-rich superfood, lab-tested, export-ready.</p>
                </div>
                <div className="product-card">
                  <img src={honeyImg} alt="Raw Honey" className="product-image" />
                  <h3>Raw Honey</h3>
                  <p>Wild-harvested, unfiltered, with traceability documentation.</p>
                </div>
                <div className="product-card">
                  <img src={wovenBasketsImg} alt="Woven Baskets" className="product-image" />
                  <h3>Woven Baskets</h3>
                  <p>Handmade by women cooperatives, fair-trade certified.</p>
                </div>
                <div className="product-card">
                  <img src={organicGingerImg} alt="Organic Ginger" className="product-image" />
                  <h3>Organic Ginger</h3>
                  <p>Dehydrated & powdered, meets EU organic standards.</p>
                </div>
                <div className="product-card">
                  <img src={fruitConcentratesImg} alt="Fruit Concentrates" className="product-image" />
                  <h3>Fruit Concentrates</h3>
                  <p>Passion, mango, guava — for beverage manufacturers.</p>
                </div>
                <div className="product-card">
                  <img src={teaLeavesImg} alt="Tea Leaves" className="product-image" />
                  <h3>Tea Leaves</h3>
                  <p>Black, green, and herbal blends, bulk or retail packed.</p>
                </div>
                <div className="product-card">
                  <img src={exportPackagingImg} alt="Export Packaging" className="product-image" />
                  <h3>Export Packaging</h3>
                  <p>Custom boxes, labels, barcodes, palletization.</p>
                </div>
                <div className="product-card">
                  <img src={phytosanitaryCertImg} alt="Compliance Documentation" className="product-image" />
                  <h3>Compliance Docs</h3>
                  <p>Phytosanitary, COO, lab reports, FDA/EU compliance.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Us for Export?</h2>
              <ul className="benefit-list">
                <li> End-to-end export management — you focus on production, we handle the rest</li>
                <li> Market access support for EU, US, Asia, and Middle East</li>
                <li> Small batch export options for startups and cooperatives</li>
                <li> Transparent pricing with no hidden port or documentation fees</li>
                <li> Real-time shipment tracking and updates</li>
                <li> Trusted by 50+ Ugandan producers and exporters</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>📩 Start Exporting Today</h2>
              <p>Whether you’re a farmer, cooperative, or manufacturer — we’ll handle the export process for you.</p>
              <button className="btn-primary">Talk to Export Team</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📞 Contact Us for Export Services</h2>
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
                  placeholder="Tell us about your product, target market, and export goals..." 
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
      </div>

      
    </div>
  );
}

export default Export;