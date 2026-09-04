// src/pages/Products/Branding.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import '../../style/Branding.css';

// ✅ IMPORT ALL BRANDING PRODUCT IMAGES
import brandedPensImg from '../../images/branded pens.jpeg';
import notebooksImg from '../../images/branded notebook 2.jpeg';
import uniformsImg from '../../images/branded uniform.jpeg';
import mugsImg from '../../images/mugs.jpeg';
import tshirtsImg from '../../images/branded uniform 2.jpeg';
import bagsImg from '../../images/branded bags.jpeg';
import lanyardsImg from '../../images/lanyards.jpeg';
import usbDrivesImg from '../../images/usbdrivers.jpeg';
import keychainsImg from '../../images/key chain.jpeg';
import capsImg from '../../images/caps.jpeg';
import foldersImg from '../../images/folders.jpeg';
import mousepadsImg from '../../images/mousepads.jpeg';
import brandedCupsImg from '../../images/cup.jpeg';      
import brandedPlatesImg from '../../images/plates.jpeg';  

function Branding() {
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
      alert('❌ Failed to send message. Please try again.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="branding-page">
      

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🎨 Custom Branding Solutions</h1>
          <p>Boost your brand identity with custom-printed products for offices, events and promotions.</p>
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
              <h2>🎨 Custom Branding Solutions</h2>
              <p>
                Make your mark with custom-branded merchandise — from pens and notebooks to uniforms and promotional items. 
                Perfect for corporate identity, events, giveaways and retail branding.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">🖌️</div>
                <h3>500+</h3>
                <p>Brands Served</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🏷️</div>
                <h3>Custom</h3>
                <p>Designs</p>
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
                <li> Logo printing on any product</li>
                <li> Full-color, embroidery, engraving and UV printing</li>
                <li> Design support and mockups provided</li>
                <li> Bulk discounts for corporate clients</li>
              </ul>
            </section>

            <section>
              <h2>🛍️ Branded Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={brandedPensImg} alt="Branded Pens" className="product-image" />
                  <h3>Branded Pens</h3>
                  <p>Ballpoint, rollerball and stylus pens with your logo or message.</p>
                </div>
                <div className="product-card">
                  <img src={notebooksImg} alt="Branded Notebooks" className="product-image" />
                  <h3>Branded Notebooks</h3>
                  <p>Hardcover, softcover, spiral — with custom covers and page branding.</p>
                </div>
                <div className="product-card">
                  <img src={uniformsImg} alt="Branded Uniforms" className="product-image" />
                  <h3>Branded Uniforms</h3>
                  <p>Shirts, jackets, aprons and workwear with embroidered or printed logos.</p>
                </div>
                <div className="product-card">
                  <img src={mugsImg} alt="Branded Mugs" className="product-image" />
                  <h3>Branded Mugs</h3>
                  <p>Ceramic, travel and glass mugs — perfect for gifts and promotions.</p>
                </div>
                <div className="product-card">
                  <img src={brandedCupsImg} alt="Branded Cups" className="product-image" />
                  <h3>Branded Cups</h3>
                  <p>Plastic, paper, or reusable cups with custom prints — perfect for events and offices.</p>
                </div>
                <div className="product-card">
                  <img src={brandedPlatesImg} alt="Branded Plates" className="product-image" />
                  <h3>Branded Plates</h3>
                  <p>Disposable or melamine plates with your logo — ideal for catering and corporate events.</p>
                </div>
                <div className="product-card">
                  <img src={tshirtsImg} alt="Branded T-Shirts" className="product-image" />
                  <h3>Branded T-Shirts</h3>
                  <p>Cotton, polyester and performance tees for events, staff, and giveaways.</p>
                </div>
                <div className="product-card">
                  <img src={bagsImg} alt="Branded Bags" className="product-image" />
                  <h3>Branded Bags</h3>
                  <p>Tote, backpack, laptop and shopping bags with custom prints.</p>
                </div>
                <div className="product-card">
                  <img src={lanyardsImg} alt="Branded Lanyards" className="product-image" />
                  <h3>Branded Lanyards</h3>
                  <p>For events, offices and schools — with logo QR code or text.</p>
                </div>
                <div className="product-card">
                  <img src={usbDrivesImg} alt="Branded USB Drives" className="product-image" />
                  <h3>Branded USB Drives</h3>
                  <p>Custom-shaped and printed USB sticks for data sharing and promotions.</p>
                </div>
                <div className="product-card">
                  <img src={keychainsImg} alt="Branded Keychains" className="product-image" />
                  <h3>Branded Keychains</h3>
                  <p>Metal, acrylic, leather — affordable and memorable giveaways.</p>
                </div>
                <div className="product-card">
                  <img src={capsImg} alt="Branded Caps" className="product-image" />
                  <h3>Branded Caps</h3>
                  <p>Snapback, trucker and baseball caps with embroidered logos.</p>
                </div>
                <div className="product-card">
                  <img src={foldersImg} alt="Branded Folders" className="product-image" />
                  <h3>Branded Folders</h3>
                  <p>Presentation, document and report folders with custom branding.</p>
                </div>
                <div className="product-card">
                  <img src={mousepadsImg} alt="Branded Mousepads" className="product-image" />
                  <h3>Branded Mousepads</h3>
                  <p>Standard, gaming and desk-sized pads with full-color printing.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Mahega for Branding?</h2>
              <ul className="benefit-list">
                <li> Free design mockups before production</li>
                <li> Fast turnaround — 5–7 days for most orders</li>
                <li> No order too small — from 1 to 10,000 units</li>
                <li> Premium materials and print durability</li>
                <li> Delivery across Uganda and East Africa</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>🎨 Get Your Free Design Mockup</h2>
              <p>Send us your logo and product idea — we’ll create a free digital preview.</p>
              <button className="btn-primary">Request Mockup</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📩 Contact Us for Custom Branding</h2>
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
                  placeholder="Your Message (e.g., product, quantity, logo file, deadline)" 
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

export default Branding;