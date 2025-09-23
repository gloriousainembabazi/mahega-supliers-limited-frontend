// src/pages/Products/Export.js
import React from 'react';


function Export() {
  return (
    <div className="Exported Goods">
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
          <li>✅ Compliance with EU, US, EAC standards</li>
          <li>✅ Private labeling & packaging design</li>
          <li>✅ Consolidation & palletization</li>
          <li>✅ Phytosanitary & quality certificates</li>
        </ul>
      </section>

      <section>
        <h2>📦 Product Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">☕</div>
            <h3>Coffee & Tea</h3>
            <p>Washed, roasted, ground, branded for supermarkets & cafes.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🧺</div>
            <h3>Handicrafts & Textiles</h3>
            <p>Baskets, barkcloth, beads, garments, home decor.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🌶️</div>
            <h3>Spices & Herbs</h3>
            <p>Vanilla, ginger, moringa, dried chilies, packaged for retail.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🍯</div>
            <h3>Agro-Products</h3>
            <p>Honey, Shea butter, fruit concentrates, dried fruits.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ End-to-end export management</li>
          <li>✔ Market access support (EU, US, Asia)</li>
          <li>✔ Small batch export options for startups</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>📩 Start Exporting Today</h2>
        <p>Whether you’re a farmer, cooperative, or manufacturer — we’ll handle the export process for you.</p>
        <button className="btn-primary">Talk to Export Team</button>
      </section>
    </div>
  );
}

export default Export;