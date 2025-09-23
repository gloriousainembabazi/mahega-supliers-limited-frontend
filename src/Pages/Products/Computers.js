// src/pages/Products/Computers.js
import React from 'react';


function Computers() {
  return (
    <div className="Computers & Printers">
      <section>
        <h2>💻 Reliable ICT Equipment for Modern Workplaces</h2>
        <p>
          We supply brand-new and certified refurbished computers, printers, and accessories 
          tailored for offices, schools, and businesses across Uganda.
        </p>
      </section>

      <section className="product-stats">
        <div className="stat-box">
          <div className="stat-icon">🖥️</div>
          <h3>100+</h3>
          <p>Models Available</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🖨️</div>
          <h3>50+</h3>
          <p>Printer Types</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🛡️</div>
          <h3>1-Year</h3>
          <p>Warranty Included</p>
        </div>
      </section>

      <section>
        <h2>✨ Key Features</h2>
        <ul className="feature-list">
          <li>✅ Genuine licensed software</li>
          <li>✅ On-site setup & installation</li>
          <li>✅ Corporate leasing options</li>
          <li>✅ After-sales technical support</li>
        </ul>
      </section>

      <section>
        <h2>🔌 Product Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">💻</div>
            <h3>Laptops & Desktops</h3>
            <p>From budget to high-performance machines for all business needs.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🖨️</div>
            <h3>Printers & Scanners</h3>
            <p>Inkjet, laser, multifunction, and industrial-grade devices.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">⌨️</div>
            <h3>Peripherals</h3>
            <p>Keyboards, mice, webcams, UPS, and monitors.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">💾</div>
            <h3>Consumables</h3>
            <p>Ink cartridges, toners, cables, and cleaning kits.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ Certified genuine products</li>
          <li>✔ Bulk discounts for schools & offices</li>
          <li>✔ Trade-in for old equipment</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>📲 Speak to Our ICT Team</h2>
        <p>Get advice on the right setup for your team or classroom.</p>
        <button className="btn-primary">Schedule Consultation</button>
      </section>
    </div>
  );
}

export default Computers;