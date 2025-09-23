// src/pages/Products/Furniture.js
import React from 'react';


function Furniture() {
  return (
    <div className="Office & Hotel Furniture">
      <section>
        <h2>🪑 Premium Furniture for Work & Hospitality</h2>
        <p>
          Durable, stylish, and ergonomic furniture for offices, hotels, schools, and conference centers — 
          customizable to your space, brand, and budget.
        </p>
      </section>

      <section className="product-stats">
        <div className="stat-box">
          <div className="stat-icon">🛏️</div>
          <h3>200+</h3>
          <p>Designs</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🏭</div>
          <h3>Local</h3>
          <p>Manufacturing</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🔧</div>
          <h3>Free</h3>
          <p>Assembly</p>
        </div>
      </section>

      <section>
        <h2>✨ Key Features</h2>
        <ul className="feature-list">
          <li>✅ Wood, metal, and hybrid designs</li>
          <li>✅ Custom sizing & upholstery</li>
          <li>✅ Fire-retardant & commercial-grade</li>
          <li>✅ 5-year structural warranty</li>
        </ul>
      </section>

      <section>
        <h2>🛋️ Furniture Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">🪑</div>
            <h3>Office Desks & Chairs</h3>
            <p>Ergonomic seating and executive workstations.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🛋️</div>
            <h3>Reception & Lounge</h3>
            <p>Sofas, coffee tables, waiting area sets.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🍽️</div>
            <h3>Hotel & Restaurant</h3>
            <p>Dining sets, bar stools, banquet chairs.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🗄️</div>
            <h3>Storage & Filing</h3>
            <p>Cabinets, shelves, bookcases, lockers.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ Free space planning & 3D layout</li>
          <li>✔ On-time delivery & installation</li>
          <li>✔ Bulk discounts for chains & franchises</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>📐 Get a Free Space Design</h2>
        <p>Send us your floor plan — we’ll suggest the perfect furniture layout.</p>
        <button className="btn-primary">Upload Floor Plan</button>
      </section>
    </div>
  );
}

export default Furniture;