// src/pages/Products/FoodBeverages.js
import React  from 'react';



function FoodBeverages() {
  return (
    <div className="Food & Beverages">
      <section>
        <h2>☕ Bulk Supplies for Offices, Hotels & Events</h2>
        <p>
          Stock your pantry, café, or event with our wide selection of beverages, snacks, and catering essentials — 
          all at wholesale prices with reliable delivery.
        </p>
      </section>

      <section className="product-stats">
        <div className="stat-box">
          <div className="stat-icon">🥤</div>
          <h3>200+</h3>
          <p>Items</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🏨</div>
          <h3>Hotels &</h3>
          <p>Caterers Served</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">⏱️</div>
          <h3>24-Hour</h3>
          <p>Restocking</p>
        </div>
      </section>

      <section>
        <h2>✨ Key Features</h2>
        <ul className="feature-list">
          <li>✅ Expiry date guaranteed</li>
          <li>✅ Halal & allergen-free options</li>
          <li>✅ Custom combo packs for events</li>
          <li>✅ Scheduled weekly deliveries</li>
        </ul>
      </section>

      <section>
        <h2>🍱 Product Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">☕</div>
            <h3>Hot Beverages</h3>
            <p>Coffee, tea, sugar, creamers, disposable cups.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🥤</div>
            <h3>Cold Drinks</h3>
            <p>Water, soda, juice, energy drinks, coolers.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🍪</div>
            <h3>Snacks & Confectionery</h3>
            <p>Biscuits, chocolates, nuts, crisps, candies.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🍽️</div>
            <h3>Catering Essentials</h3>
            <p>Napkins, cutlery, plates, chafing fuel, serving trays.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ Emergency restocking available</li>
          <li>✔ Branded vending machine supplies</li>
          <li>✔ Menu planning support for cafeterias</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>📋 Build Your Pantry Package</h2>
        <p>Choose your products and frequency — we’ll handle the rest.</p>
        <button className="btn-primary">Create Package</button>
      </section>
    </div>
  );
}

export default FoodBeverages;