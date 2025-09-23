// src/pages/Services/Logistics.js
import React from 'react';

function Logistics() {
  return (
    <div className="logistics-page">
      {/* Intro Section */}
      <section>
        <h2>🚛 Reliable. ⏱️ Timely. 🌍 Nationwide.</h2>
        <p>
          At Mahega General Suppliers Limited, we don’t just supply products — we ensure they reach you, 
          wherever you are, on time and in perfect condition. Our logistics network covers every region 
          in Uganda and extends to key East African markets.
        </p>
      </section>

      {/* Logistics Stats with Icons */}
      <section className="logistics-stats">
        <div className="stat-box">
          <div className="stat-icon">📦</div>
          <h3>500+</h3>
          <p>Deliveries Weekly</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">⏱️</div>
          <h3>98%</h3>
          <p>On-Time Rate</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🚚</div>
          <h3>50+</h3>
          <p>Vehicles in Fleet</p>
        </div>
        <div className="stat-box">
          <div className="stat-icon">📞</div>
          <h3>24/7</h3>
          <p>Support Team</p>
        </div>
      </section>

      {/* Coverage Section */}
      <section>
        <h2>📍 Our Delivery Coverage</h2>
        <ul className="coverage-list">
          <li><strong>🏙️ Within Kampala</strong> — Same-day delivery (orders placed before 12 PM)</li>
          <li><strong>🏘️ Major Cities</strong> — Jinja, Mbale, Mbarara, Gulu, Fort Portal (24–48 hours)</li>
          <li><strong>🏞️ Rural & Remote Areas</strong> — 3–5 business days, with SMS tracking</li>
          <li><strong>🌍 East Africa</strong> — Kenya, Tanzania, Rwanda, South Sudan (5–7 days, by road or air)</li>
        </ul>
      </section>

      {/* Fleet & Technology */}
      <section>
        <h2>🚗 Our Fleet & Technology</h2>
        <p>
          We operate a modern fleet of delivery vans, trucks, and refrigerated vehicles — all GPS-tracked 
          and maintained to the highest standards. Our logistics team uses real-time route optimization 
          software to ensure speed and fuel efficiency.
        </p>
        <p>
          Every client receives:
        </p>
        <ul className="feature-list">
          <li>✅ Order confirmation SMS/email</li>
          <li>✅ Live tracking link (where applicable)</li>
          <li>✅ Driver contact details before delivery</li>
          <li>✅ Proof of delivery (signed receipt or photo)</li>
        </ul>
      </section>

      {/* Specialized Logistics */}
      <section>
        <h2>🎯 Specialized Logistics Solutions</h2>
        <div className="solution-grid">
          <div className="solution-card">
            <div className="solution-icon">📦</div>
            <h3>Bulk Deliveries</h3>
            <p>For schools, hospitals, factories, and events — handled with precision.</p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">❄️</div>
            <h3>Temperature-Sensitive</h3>
            <p>Medical supplies, beverages, perishables — delivered under controlled conditions.</p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">🔒</div>
            <h3>High-Value Items</h3>
            <p>Sealed, tracked, and insured delivery for maximum security.</p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">🌙</div>
            <h3>After-Hours/Weekend</h3>
            <p>Available on request for urgent or special timing needs.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2>🌟 Why Clients Choose Our Logistics</h2>
        <ul className="benefit-list">
          <li>✔ <strong>On-Time Guarantee</strong> — We meet 98% of promised delivery windows</li>
          <li>✔ <strong>No Hidden Fees</strong> — Transparent pricing based on weight, volume, and distance</li>
          <li>✔ <strong>Dedicated Account Manager</strong> — For corporate and recurring clients</li>
          <li>✔ <strong>Flexible Scheduling</strong> — Morning, afternoon, or after-hours delivery slots</li>
          <li>✔ <strong>Damage-Free Promise</strong> — Careful handling and secure packaging</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="cta-box">
        <h2>📞 Get a Delivery Quote</h2>
        <p>
          Tell us what you need delivered, where, and when — we’ll respond with options and pricing within 1 hour.
        </p>
        <button className="btn-primary">Request a Quote</button>
      </section>
    </div>
  );
}

export default Logistics;
