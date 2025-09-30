// src/pages/Products/Industrial.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/industrial.css';

// ✅ IMPORT REAL INDUSTRIAL MATERIAL IMAGES
import pipesFittingsImg from '../../images/pipes fittings.jpeg';
import plywoodTimberImg from '../../images/timber plywood.jpeg';
import metalsHardwareImg from '../../images/metal bars.jpeg';
import safetyMaterialsImg from '../../images/safety gears.jpeg';
import hdpePipesImg from '../../images/hdpe pipes.jpeg';
import pvcPipesImg from '../../images/pvc pipes.jpeg';
import steelPipesImg from '../../images/steel pipes.jpeg';
import galvanizedFittingsImg from '../../images/galvanised-fittings.jpeg';
import marinePlywoodImg from '../../images/marine plywood.jpeg';
import structuralTimberImg from '../../images/structural timbers.jpeg';
import commercialPlywoodImg from '../../images/commercial plywood.jpeg';
import steelBarsImg from '../../images/steel bars.jpeg';
import metalSheetsImg from '../../images/metal hard ware.jpeg';
import constructionHardwareImg from '../../images/construction handware.jpeg';
import safetySignageImg from '../../images/safety gears.jpeg';
import ppeGearImg from '../../images/ppe gears.jpeg';

function Industrial() {
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
    <div className="industrial-page">
      

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🏗️ Industrial & Construction Materials</h1>
          <p>Premium pipes, metals, timber, and safety gear for contractors, factories, and infrastructure projects.</p>
        </div>
      </section>

      {/* ✅ Main Content with Sidebar */}
      <div className="page-content">
        <div className="content-layout">
          
          {/* ✅ SIDEBAR — All Products (same as other pages) */}
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
              <h2>🏗️ Premium Materials for Construction & Manufacturing</h2>
              <p>
                Source pipes, plywood, metals, and hardware from trusted suppliers — built for durability, 
                safety, and performance in industrial and construction environments.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">🔩</div>
                <h3>500+</h3>
                <p>Projects Supplied</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">📏</div>
                <h3>Custom</h3>
                <p>Sizing</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🚛</div>
                <h3>Heavy-Duty</h3>
                <p>Delivery</p>
              </div>
            </section>

            <section>
              <h2>✨ Key Features</h2>
              <ul className="feature-list">
                <li> Grade-certified materials with test reports</li>
                <li> On-site cutting, bending, and fabrication services</li>
                <li> Site delivery with crane or forklift offloading</li>
                <li> Bulk pricing and volume discounts for contractors</li>
                <li> Just-in-time supply for ongoing projects</li>
                <li> Technical support for material selection</li>
              </ul>
            </section>

            <section>
              <h2>⚙️ Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={pipesFittingsImg} alt="Pipes & Fittings" className="product-image" />
                  <h3>Pipes & Fittings</h3>
                  <p>HDPE, PVC, steel, galvanized — for water, gas, and drainage.</p>
                </div>
                <div className="product-card">
                  <img src={plywoodTimberImg} alt="Plywood & Timber" className="product-image" />
                  <h3>Plywood & Timber</h3>
                  <p>Marine, commercial, and structural grades available.</p>
                </div>
                <div className="product-card">
                  <img src={metalsHardwareImg} alt="Metals & Hardware" className="product-image" />
                  <h3>Metals & Hardware</h3>
                  <p>Steel bars, sheets, nails, screws, hinges, locks.</p>
                </div>
                <div className="product-card">
                  <img src={safetyMaterialsImg} alt="Safety Materials" className="product-image" />
                  <h3>Safety Materials</h3>
                  <p>Signage, barricades, harnesses, helmets, vests.</p>
                </div>
                <div className="product-card">
                  <img src={hdpePipesImg} alt="HDPE Pipes" className="product-image" />
                  <h3>HDPE Pipes</h3>
                  <p>Pressure-rated for water, irrigation, and sewer lines.</p>
                </div>
                <div className="product-card">
                  <img src={pvcPipesImg} alt="PVC Pipes" className="product-image" />
                  <h3>PVC Pipes</h3>
                  <p>Schedule 40 & 80 — for drainage and electrical conduits.</p>
                </div>
                <div className="product-card">
                  <img src={steelPipesImg} alt="Steel Pipes" className="product-image" />
                  <h3>Steel Pipes</h3>
                  <p>Black, galvanized, seamless — for structural and fluid use.</p>
                </div>
                <div className="product-card">
                  <img src={galvanizedFittingsImg} alt="Galvanized Fittings" className="product-image" />
                  <h3>Galvanized Fittings</h3>
                  <p>Elbows, tees, couplings — corrosion-resistant.</p>
                </div>
                <div className="product-card">
                  <img src={marinePlywoodImg} alt="Marine Plywood" className="product-image" />
                  <h3>Marine Plywood</h3>
                  <p>BS1088 certified — waterproof and durable.</p>
                </div>
                <div className="product-card">
                  <img src={structuralTimberImg} alt="Structural Timber" className="product-image" />
                  <h3>Structural Timber</h3>
                  <p>Hardwood and treated softwood for framing.</p>
                </div>
                <div className="product-card">
                  <img src={commercialPlywoodImg} alt="Commercial Plywood" className="product-image" />
                  <h3>Commercial Plywood</h3>
                  <p>For furniture, partitions, and interior use.</p>
                </div>
                <div className="product-card">
                  <img src={steelBarsImg} alt="Steel Bars" className="product-image" />
                  <h3>Steel Bars</h3>
                  <p>Deformed and round bars — 8mm to 32mm.</p>
                </div>
                <div className="product-card">
                  <img src={metalSheetsImg} alt="Metal Sheets" className="product-image" />
                  <h3>Metal Sheets</h3>
                  <p>Aluminum, galvanized, stainless — various gauges.</p>
                </div>
                <div className="product-card">
                  <img src={constructionHardwareImg} alt="Construction Hardware" className="product-image" />
                  <h3>Construction Hardware</h3>
                  <p>Nails, screws, anchors, hinges, locks, handles.</p>
                </div>
                <div className="product-card">
                  <img src={safetySignageImg} alt="Safety Signage" className="product-image" />
                  <h3>Safety Signage</h3>
                  <p>Warning, prohibition, mandatory, and emergency signs.</p>
                </div>
                <div className="product-card">
                  <img src={ppeGearImg} alt="PPE Gear" className="product-image" />
                  <h3>PPE Gear</h3>
                  <p>Helmets, vests, gloves, harnesses, goggles.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Us?</h2>
              <ul className="benefit-list">
                <li> Technical support for material selection and compliance</li>
                <li> Just-in-time delivery directly to your construction site</li>
                <li> Credit terms for registered contractors and companies</li>
                <li> Dedicated account manager for large projects</li>
                <li> Quality assurance with material test certificates</li>
                <li> Nationwide delivery across Uganda</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>📐 Request Material Quote</h2>
              <p>Send your BOQ or specifications — we’ll quote within 1 hour.</p>
              <button className="btn-primary">Upload BOQ</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📞 Contact Industrial Supply Team</h2>
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
                  placeholder="Describe your project, required materials, quantities, and delivery location..." 
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

export default Industrial;