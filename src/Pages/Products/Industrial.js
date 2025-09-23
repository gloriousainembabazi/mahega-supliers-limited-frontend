// src/pages/Products/Industrial.js
import React from 'react';


function Industrial() {
  return (
    <div className="Industrial Materials">
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
          <li>✅ Grade-certified materials</li>
          <li>✅ Cutting & fabrication services</li>
          <li>✅ Site delivery with offloading</li>
          <li>✅ Bulk pricing for contractors</li>
        </ul>
      </section>

      <section>
        <h2>⚙️ Product Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">.PIPE</div>
            <h3>Pipes & Fittings</h3>
            <p>HDPE, PVC, steel, galvanized — for water, gas, and drainage.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🪵</div>
            <h3>Plywood & Timber</h3>
            <p>Marine, commercial, and structural grades available.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">⛓️</div>
            <h3>Metals & Hardware</h3>
            <p>Steel bars, sheets, nails, screws, hinges, locks.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🛡️</div>
            <h3>Safety Materials</h3>
            <p>Signage, barricades, harnesses, helmets, vests.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ Technical support for material selection</li>
          <li>✔ Just-in-time delivery to construction sites</li>
          <li>✔ Credit terms for registered contractors</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>📐 Request Material Quote</h2>
        <p>Send your BOQ or specifications — we’ll quote within 1 hour.</p>
        <button className="btn-primary">Upload BOQ</button>
      </section>
    </div>
  );
}

export default Industrial;