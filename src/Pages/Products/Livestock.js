// src/pages/Products/Livestock.js
import React from 'react';


function Livestock() {
  return (
    <div className="Livestock & Rearing Supplies">
      <section>
        <h2>🐄 Complete Solutions for Animal Farming</h2>
        <p>
          From feed and vaccines to fencing and housing — we supply everything you need to raise 
          healthy cattle, goats, poultry, and pigs profitably.
        </p>
      </section>

      <section className="product-stats">
        <div className="stat-box">
          <div className="stat-icon">🐐</div>
          <h3>300+</h3>
          <p>Farms Supported</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">💊</div>
          <h3>Vet-Approved</h3>
          <p>Products</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🚚</div>
          <h3>Farm Gate</h3>
          <p>Delivery</p>
        </div>
      </section>

      <section>
        <h2>✨ Key Features</h2>
        <ul className="feature-list">
          <li>✅ Formulated feeds for all animal types</li>
          <li>✅ Vaccines & supplements from certified suppliers</li>
          <li>✅ Installation support for pens & fencing</li>
          <li>✅ Group discounts for cooperatives</li>
        </ul>
      </section>

      <section>
        <h2>🐓 Product Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">🌾</div>
            <h3>Animal Feed</h3>
            <p>Cattle, goat, poultry, pig, and fish feeds — starter to finisher.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">💊</div>
            <h3>Vaccines & Meds</h3>
            <p>Dewormers, antibiotics, supplements, injectables.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">建篱</div>
            <h3>Housing & Fencing</h3>
            <p>Wire mesh, posts, water troughs, feeders, roofing.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🧴</div>
            <h3>Hygiene & Care</h3>
            <p>Disinfectants, hoof care, milking equipment, grooming kits.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ On-call veterinary advisory</li>
          <li>✔ Feed formulation based on your livestock</li>
          <li>✔ Training on modern rearing practices</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>📞 Request Livestock Supply Plan</h2>
        <p>Tell us your animal type and quantity — we’ll build a custom supply package.</p>
        <button className="btn-primary">Get Custom Plan</button>
      </section>
    </div>
  );
}

export default Livestock;