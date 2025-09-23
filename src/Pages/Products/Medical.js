// src/pages/Products/Medical.js
import React from 'react';


function Medical() {
  return (
    <div className="Medical Consumables & PPE">
      <section>
        <h2>🩺 Trusted Supplies for Clinics, Hospitals & Offices</h2>
        <p>
          We provide certified medical-grade consumables and personal protective equipment — 
          ensuring safety, compliance, and peace of mind for healthcare and non-healthcare settings.
        </p>
      </section>

      <section className="product-stats">
        <div className="stat-box">
          <div className="stat-icon">🏥</div>
          <h3>100+</h3>
          <p>Health Facilities</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🛡️</div>
          <h3>WHO & UNBS</h3>
          <p>Compliant</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">📦</div>
          <h3>Emergency</h3>
          <p>Delivery</p>
        </div>
      </section>

      <section>
        <h2>✨ Key Features</h2>
        <ul className="feature-list">
          <li>✅ Batch numbers & expiry tracking</li>
          <li>✅ Bulk packs for institutions</li>
          <li>✅ Temperature-controlled transport</li>
          <li>✅ Donation packs for NGOs</li>
        </ul>
      </section>

      <section>
        <h2>💊 Product Categories</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon">😷</div>
            <h3>PPE Kits</h3>
            <p>Masks, gloves, gowns, face shields, goggles.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">💉</div>
            <h3>Medical Consumables</h3>
            <p>Syringes, swabs, bandages, IV sets, catheters.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🧴</div>
            <h3>Sanitizers & Disinfectants</h3>
            <p>Hand sanitizer, surface disinfectant, wipes, sprays.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🌡️</div>
            <h3>Diagnostic & Monitoring</h3>
            <p>Thermometers, BP kits, glucometers, pulse oximeters.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🌟 Why Choose Us?</h2>
        <ul className="benefit-list">
          <li>✔ MOH-registered supplier</li>
          <li>✔ Just-in-time delivery for emergencies</li>
          <li>✔ Inventory management for clinics</li>
        </ul>
      </section>

      <section className="cta-box">
        <h2>🆘 Request Emergency Medical Supply</h2>
        <p>Call or WhatsApp us for urgent delivery of critical items.</p>
        <button className="btn-primary">Contact Now</button>
      </section>
    </div>
  );
}

export default Medical;