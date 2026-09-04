// src/pages/Products/Stationery.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

 


// ✅ IMPORT PRODUCT IMAGES
import writingImg from "../../images/books and pens.jpeg";
import paperImg from '../../images/books.jpeg';
import deskAccessoriesImg from '../../images/office desk.jpeg';
import printImg from '../../images/printer.jpeg';
import officeChairsImg from '../../images/office material 2.jpg';
import officeDesksImg from '../../images/office desk chair.jpeg';
import receptionImg from '../../images/reception chair.jpeg';
import trainingImg from '../../images/mobile.jpeg';
import cafeImg from '../../images/cafe table 2.webp';
import foldingImg from '../../images/folding chair.jpeg';
import metroImg from '../../images/metro 1.jpeg';
import storageImg from '../../images/office storage.jpg';

// ✅ IMPORT STYLES
import '../../style/stationery.css';

function Stationery() {
  const [loading, setLoading] = useState(false);

  // ✅ Handle Contact Form Submission
  const sendContactForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    setLoading(true);

    emailjs.send(
      'gloriousainembabaz16@gmail.com',     // 👉 REPLACE WITH YOUR EMAILJS SERVICE ID
      'YOUR_TEMPLATE_ID',    // 👉 REPLACE WITH YOUR TEMPLATE ID
      { name, email, message },
      'YOUR_PUBLIC_KEY'      // 👉 REPLACE WITH YOUR PUBLIC KEY
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
    <div className="stationery-page">
      

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Stationery & Office Supplies</h1>
          <p>Quality products. Fast delivery. Trusted by businesses across Uganda.</p>
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
              <h2>📘 Complete Office & Stationery Solutions</h2>
              <p>
                From everyday pens and paper to executive furniture and filing systems — we supply 
                everything your business, school, or institution needs to operate efficiently and professionally.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">📋</div>
                <h3>500+</h3>
                <p>Products</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🏢</div>
                <h3>1000+</h3>
                <p>Clients Served</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🚚</div>
                <h3>Same-Day</h3>
                <p>Kampala Delivery</p>
              </div>
            </section>

            <section>
              <h2>✨ Key Features</h2>
              <ul className="feature-list">
                <li> Branded & generic stationery</li>
                <li> Eco-friendly & recycled paper products</li>
                <li> Custom logo printing on notebooks, pens, folders</li>
                <li> Bulk corporate discounts & scheduled replenishment</li>
                <li> Free office layout planning for furniture orders</li>
              </ul>
            </section>

            <section>
              <h2>📂 Popular Stationery & Office Products</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={writingImg} alt="Writing Instruments" className="product-image" />
                  <h3>Writing Instruments</h3>
                  <p>Pens, pencils, markers, highlighters from top global & local brands.</p>
                </div>
                <div className="product-card">
                  <img src={paperImg} alt="Paper & Filing" className="product-image" />
                  <h3>Paper & Filing</h3>
                  <p>Notebooks, files, envelopes, sticky notes, printing paper, binders.</p>
                </div>
                <div className="product-card">
                  <img src={deskAccessoriesImg} alt="Desk Accessories" className="product-image" />
                  <h3>Desk Accessories</h3>
                  <p>Scissors, staplers, tapes, clips, desk organizers, hole punches.</p>
                </div>
                <div className="product-card">
                  <img src={printImg} alt="Print & Presentation" className="product-image" />
                  <h3>Print & Presentation</h3>
                  <p>Ink cartridges, toners, laminators, whiteboards, projectors.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🪑 Premium Office Furniture Collection</h2>
              <p>
                We offer locally crafted and imported office furniture designed for comfort,
                durability and professional aesthetics all available for bulk orders and 
                custom configurations.
              </p>
              <div className="product-grid">
                <div className="product-card">
                  <img src={officeChairsImg} alt="Office Chairs" className="product-image" />
                  <h3>Office Chairs</h3>
                  <p>Ergonomic, executive and visitor chairs for all workspaces.</p>
                </div>
                <div className="product-card">
                  <img src={officeDesksImg} alt="Office Desks & Tables" className="product-image" />
                  <h3>Office Desks & Tables</h3>
                  <p>Standing desks, L-shaped, rectangular and corner workstations.</p>
                </div>
                <div className="product-card">
                  <img src={receptionImg} alt="Reception & Guest Seating" className="product-image" />
                  <h3>Reception & Guest Seating</h3>
                  <p>Modern sofas, armchairs and lounge sets for lobbies and waiting areas.</p>
                </div>
                <div className="product-card">
                  <img src={trainingImg} alt="Training & Conference Furniture" className="product-image" />
                  <h3>Training & Conference</h3>
                  <p>Mobile training tables, folding chairs, seminar setups for classrooms & meetings.</p>
                </div>
                <div className="product-card">
                  <img src={cafeImg} alt="Café & Breakout Furniture" className="product-image" />
                  <h3>Café & Breakout Furniture</h3>
                  <p>Bar stools, café tables, high-top sets for office pantries and lounges.</p>
                </div>
                <div className="product-card">
                  <img src={foldingImg} alt="Folding Tables & Chairs" className="product-image" />
                  <h3>Folding Tables & Chairs</h3>
                  <p>Portable, space-saving solutions for events, training and flexible offices.</p>
                </div>
                <div className="product-card">
                  <img src={metroImg} alt="Metro Furniture Collection" className="product-image" />
                  <h3>Metro Furniture Collection</h3>
                  <p>Imported premium designs from Europe & Asia — modern, minimalist, executive.</p>
                </div>
                <div className="product-card">
                  <img src={storageImg} alt="Storage & Filing Cabinets" className="product-image" />
                  <h3>Storage & Filing Cabinets</h3>
                  <p>Steel, wooden, and modular cabinets for documents, supplies, and equipment.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Mahega for Office Supplies?</h2>
              <ul className="benefit-list">
                <li> One-stop shop — stationery + furniture + tech + logistics</li>
                <li> Quality inspection before delivery — guaranteed durability</li>
                <li> Custom branding and sizing for furniture and stationery</li>
                <li> Free 3D office layout design with furniture orders</li>
                <li> Inventory auto-replenishment for recurring corporate clients</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>📩 Get Your Office Setup Today</h2>
              <p>Download our full catalog or speak to our team for a customized quote and layout plan.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Download Catalog</button>
                <button className="btn-secondary">Request Free Consultation</button>
              </div>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📞 Contact Us for Bulk Orders or Custom Requests</h2>
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
                  placeholder="Your Message (e.g., product list, quantity, deadline)" 
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

export default Stationery;