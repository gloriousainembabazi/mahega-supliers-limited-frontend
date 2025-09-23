// src/pages/Products/Custom.js
import React from 'react';


function Custom() {
  return (
    <div className="Custom Product Orders">
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
          <li>✅ Dedicated project manager</li>
          <li>✅ Prototyping & sampling</li>
          <li>✅ MOQ as low as 1 unit</li>
          <li>✅ Quality assurance at every stage</li>
        </ul>
      </section>

      <section>
        <h2>📋 Popular Custom Requests</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">🖊️</div>
            <h3>Branded Merchandise</h3>
            <p>Notebooks, pens, T-shirts, mugs, lanyards with your logo.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🪑</div>
            <h3>Custom Furniture</h3>
            <p>Size, color, material, and design tailored to your space.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">⚙️</div>
            <h3>Specialized Tools</h3>
            <p>Industrial, agricultural, or medical tools built to spec.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">📦</div>
            <h3>Packaging & Kits</h3>
            <p>Gift boxes, starter kits, combo packs for events or sales.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ No idea too small or too complex</li>
          <li>✔ Transparent pricing & timeline</li>
          <li>✔ 3D mockups before production</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>💡 Have a Custom Idea?</h2>
        <p>Describe your dream product — we’ll make it a reality.</p>
        <button className="btn-primary">Start Your Custom Order</button>
      </section>
    </div>
  );
}

export default Custom;