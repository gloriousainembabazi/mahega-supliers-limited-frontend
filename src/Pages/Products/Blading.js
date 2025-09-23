// src/pages/Products/Blading.js
import React from 'react';


function Blading() {
  return (
    <div className="Blading Equipment">
      <section>
        <h2>🔪 Professional Blading Solutions for Industry</h2>
        <p>
          Precision cutting tools and machinery for metalworks, woodworking, food processing, 
          and manufacturing — sourced for performance, durability, and safety.
        </p>
      </section>

      <section className="product-stats">
        <div className="stat-box">
          <div className="stat-icon">🪚</div>
          <h3>100+</h3>
          <p>Tools</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">⚙️</div>
          <h3>Industrial</h3>
          <p>Grade</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🔧</div>
          <h3>Sharpening</h3>
          <p>Service</p>
        </div>
      </section>

      <section>
        <h2>✨ Key Features</h2>
        <ul className="feature-list">
          <li>✅ High-carbon & tungsten steel blades</li>
          <li>✅ Custom blade profiling</li>
          <li>✅ On-site installation & training</li>
          <li>✅ Maintenance contracts available</li>
        </ul>
      </section>

      <section>
        <h2>🛠️ Product Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">🔪</div>
            <h3>Cutting Blades</h3>
            <p>For metal, wood, plastic, stone — circular, band, hacksaw.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🪚</div>
            <h3>Woodworking Tools</h3>
            <p>Planer blades, jointer knives, router bits, saw blades.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🥩</div>
            <h3>Food Processing</h3>
            <p>Meat slicers, vegetable cutters, industrial kitchen blades.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">⚙️</div>
            <h3>Machinery & Parts</h3>
            <p>Blade holders, spindles, motors, guards, replacement parts.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ Blade sharpening & reconditioning service</li>
          <li>✔ Emergency blade replacement</li>
          <li>✔ OEM and compatible parts available</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>📞 Need a Custom Blade?</h2>
        <p>Send us your specs or sample — we’ll manufacture to your requirements.</p>
        <button className="btn-primary">Request Custom Quote</button>
      </section>
    </div>
  );
}

export default Blading;