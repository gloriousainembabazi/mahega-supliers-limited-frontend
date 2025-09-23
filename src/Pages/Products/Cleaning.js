// src/pages/Products/Cleaning.js
import React from 'react';


function Cleaning() {
  return (
    <div className="Cleaning Materials & Consumables">
      <section>
        <h2>🧹 Professional-Grade Cleaning Supplies</h2>
        <p>
          Keep your premises spotless with our wide range of industrial and commercial cleaning products — 
          trusted by hotels, hospitals, offices, and schools.
        </p>
      </section>

      <section className="product-stats">
        <div className="stat-box">
          <div className="stat-icon">🧴</div>
          <h3>100+</h3>
          <p>Products</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🏥</div>
          <h3>Hospital</h3>
          <p>Grade Available</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">♻️</div>
          <h3>Eco-Friendly</h3>
          <p>Options</p>
        </div>
      </section>

      <section>
        <h2>✨ Key Features</h2>
        <ul className="feature-list">
          <li> Safe for all surfaces</li>
          <li> Concentrated formulas (cost-effective)</li>
          <li> Bulk refill packs available</li>
          <li> MSDS & safety compliance provided</li>
        </ul>
      </section>

      <section>
        <h2>🧽 Product Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">🧴</div>
            <h3>Chemicals</h3>
            <p>Floor cleaners, glass cleaners, disinfectants, degreasers.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🧹</div>
            <h3>Tools</h3>
            <p>Brooms, mops, buckets, gloves, squeegees.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🧺</div>
            <h3>Waste Management</h3>
            <p>Bins, liners, recycling stations, trolleys.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🧴</div>
            <h3>Dispensers</h3>
            <p>Soap, sanitizer, paper towel, and tissue dispensers.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ Scheduled replenishment service</li>
          <li>✔ Training for cleaning staff (on request)</li>
          <li>✔ Eco-certified products available</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>🧼 Request a Cleaning Audit</h2>
        <p>We’ll assess your needs and recommend the right products & quantities.</p>
        <button className="btn-primary">Book Free Audit</button>
      </section>
    </div>
  );
}

export default Cleaning;