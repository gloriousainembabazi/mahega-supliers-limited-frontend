// src/pages/Products/Custom.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import '../../style/custom.css'; 

// ✅ IMPORT CUSTOM PRODUCT IMAGES
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

    emailjs.send(
      'service_xyz123',     // 👉 REPLACE WITH YOUR SERVICE ID
      'template_abc456',    // 👉 REPLACE WITH YOUR TEMPLATE ID
      { name, email, message },
      'user_789def012'      // 👉 REPLACE WITH YOUR PUBLIC KEY
    )
    .then(() => {
      alert('✅ Message sent successfully! We’ll contact you soon.');
      e.target.reset();
    })
    .catch(() => {
      alert('❌ Failed to send message. Please try again.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="custom-page">
      

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🎨 Custom Product Orders</h1>
          <p>From concept to delivery — we build what you imagine.</p>
        </div>
      </section>

      {/* ✅ Main Content with Sidebar */}
      <div className="page-content">
        <div className="content-layout">
          
          {/* ✅ SIDEBAR — All Products */}
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
              <h2>🎨 Tailor-Made Solutions for Unique Needs</h2>
              <p>
                Can’t find what you need? We design, source, and produce custom products — from branded merchandise 
                to specialized industrial tools — all to your exact specifications.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">✅</div>
                <h3>1000+</h3>
                <p>Custom Orders</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🖌️</div>
                <h3>Design</h3>
                <p>Support</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">⏱️</div>
                <h3>Fast</h3>
                <p>Turnaround</p>
              </div>
            </section>

            <section>
              <h2>✨ Key Features</h2>
              <ul className="feature-list">
                <li> Dedicated project manager for your order</li>
                <li> Prototyping & sampling before full production</li>
                <li> MOQ as low as 1 unit — no order too small</li>
                <li> Quality assurance at every stage — from design to delivery</li>
                <li> Transparent pricing with no hidden fees</li>
                <li> On-time delivery guaranteed</li>
              </ul>
            </section>

            <section>
              <h2>📋 Popular Custom Requests</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={brandedMerchandiseImg} alt="Branded Merchandise" className="product-image" />
                  <h3>Branded Merchandise</h3>
                  <p>Notebooks, pens, T-shirts, mugs, lanyards with your logo or message.</p>
                </div>
                <div className="product-card">
                  <img src={customFurnitureImg} alt="Custom Furniture" className="product-image" />
                  <h3>Custom Furniture</h3>
                  <p>Size, color, material, and design tailored to your space and brand.</p>
                </div>
                <div className="product-card">
                  <img src={specializedToolsImg} alt="Specialized Tools" className="product-image" />
                  <h3>Specialized Tools</h3>
                  <p>Industrial, agricultural, or medical tools built to your exact specs.</p>
                </div>
                <div className="product-card">
                  <img src={packagingKitsImg} alt="Packaging & Kits" className="product-image" />
                  <h3>Packaging & Kits</h3>
                  <p>Gift boxes, starter kits, combo packs for events, promotions, or sales.</p>
                </div>
                <div className="product-card">
                  <img src={uniformsImg} alt="Custom Uniforms" className="product-image" />
                  <h3>Custom Uniforms</h3>
                  <p>Corporate, school, or event uniforms with embroidery or printing.</p>
                </div>
                <div className="product-card">
                  <img src={signageImg} alt="Custom Signage" className="product-image" />
                  <h3>Custom Signage</h3>
                  <p>Acrylic, metal, or vinyl signs for offices, shops, and events.</p>
                </div>
                <div className="product-card">
                  <img src={vehicleWrapsImg} alt="Vehicle Wraps" className="product-image" />
                  <h3>Vehicle Wraps</h3>
                  <p>Full or partial wraps for branding your fleet or promotional vehicles.</p>
                </div>
                <div className="product-card">
                  <img src={promotionalItemsImg} alt="Promotional Items" className="product-image" />
                  <h3>Promotional Items</h3>
                  <p>Keychains, USB drives, caps, bags — perfect for giveaways and events.</p>
                </div>
                <div className="product-card">
                  <img src={industrialPartsImg} alt="Industrial Parts" className="product-image" />
                  <h3>Industrial Parts</h3>
                  <p>Machined components, molds, or replacement parts for machinery.</p>
                </div>
                <div className="product-card">
                  <img src={medicalDevicesImg} alt="Medical Devices" className="product-image" />
                  <h3>Medical Devices</h3>
                  <p>Custom trays, holders, or non-electronic tools for clinics and labs.</p>
                </div>
                <div className="product-card">
                  <img src={exhibitionStandsImg} alt="Exhibition Stands" className="product-image" />
                  <h3>Exhibition Stands</h3>
                  <p>Modular, pop-up, or custom-built stands for trade shows and events.</p>
                </div>
                <div className="product-card">
                  <img src={retailDisplaysImg} alt="Retail Displays" className="product-image" />
                  <h3>Retail Displays</h3>
                  <p>Countertop, floor, or wall displays to showcase your products in stores.</p>
                </div>
                <div className="product-card">
                  <img src={safetyGearImg} alt="Safety Gear" className="product-image" />
                  <h3>Safety Gear</h3>
                  <p>Custom-printed helmets, vests, gloves for construction or factory use.</p>
                </div>
                <div className="product-card">
                  <img src={trophiesAwardsImg} alt="Trophies & Awards" className="product-image" />
                  <h3>Trophies & Awards</h3>
                  <p>Engraved plaques, cups, medals for corporate or school events.</p>
                </div>
                <div className="product-card">
                  <img src={eventTentsImg} alt="Event Tents" className="product-image" />
                  <h3>Event Tents</h3>
                  <p>Branded marquees, canopies, and gazebos for outdoor events.</p>
                </div>
                <div className="product-card">
                  <img src={customMatsImg} alt="Custom Mats" className="product-image" />
                  <h3>Custom Mats</h3>
                  <p>Logo mats, anti-fatigue mats, or entrance mats for offices and shops.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Mahega for Custom Orders?</h2>
              <ul className="benefit-list">
                <li> No idea too small or too complex — we love a challenge</li>
                <li> Transparent pricing & timeline — no surprises</li>
                <li> 3D mockups and samples before you approve production</li>
                <li> Dedicated account manager — single point of contact</li>
                <li> Fast turnaround — from concept to delivery in record time</li>
                <li> Delivery across Uganda and East Africa</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>💡 Have a Custom Idea?</h2>
              <p>Describe your dream product — we’ll make it a reality.</p>
              <button className="btn-primary">Start Your Custom Order</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📞 Contact Us for Custom Projects</h2>
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
                  placeholder="Describe your custom product idea (materials, dimensions, quantity, deadline)" 
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

export default Custom;