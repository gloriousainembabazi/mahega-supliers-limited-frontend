// src/pages/Products/Medical.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/medical.css';

// ✅ IMPORT REAL MEDICAL SUPPLY IMAGES
import ppeKitsImg from '../../images/ppe kits.jpeg';
import medicalConsumablesImg from '../../images/medical consumables.jpeg';
import sanitizersDisinfectantsImg from '../../images/disinfectants.jpeg';
import diagnosticMonitoringImg from '../../images/diagnostic.jpeg';
import surgicalMasksImg from '../../images/surgical masks.jpeg';
import nitrileGlovesImg from '../../images/gloves.jpeg';
import isolationGownsImg from '../../images/gowns.jpeg';
import faceShieldsImg from '../../images/face shields.jpeg';
import syringesImg from '../../images/syringes.jpeg';
import bandagesImg from '../../images/bandages.jpeg';
import ivSetsImg from '../../images/iv sets.jpeg';
import cathetersImg from '../../images/catheters.jpeg';
import handSanitizerImg from '../../images/sanitizers.jpeg';
import surfaceDisinfectantImg from '../../images/surface disinfectant.jpeg';
import disinfectantWipesImg from '../../images/wipes.jpeg';
import digitalThermometersImg from '../../images/digital thermoneter.jpeg';

function Medical() {
  const [loading, setLoading] = useState(false);

  const sendContactForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    setLoading(true);

    emailjs.send(
      'service_xyz123',     // 👉 REPLACE WITH YOUR EMAILJS SERVICE ID
      'template_abc456',    // 👉 REPLACE WITH YOUR TEMPLATE ID
      { name, email, message },
      'user_789def012'      // 👉 REPLACE WITH YOUR PUBLIC KEY
    )
    .then(() => {
      alert('✅ Message sent successfully! We’ll contact you soon.');
      e.target.reset();
    })
    .catch(() => {
      alert('❌ Failed to send. Please try again or contact us via WhatsApp.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="medical-page">
    

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🩺 Medical Consumables & PPE</h1>
          <p>Certified supplies for hospitals, clinics, labs, offices, and NGOs across Uganda.</p>
        </div>
      </section>

      {/* ✅ Main Content with Sidebar */}
      <div className="page-content">
        <div className="content-layout">
          
          {/* ✅ SIDEBAR — All Products (same as other pages) */}
          <aside className="product-sidebar">
            <h3>📦 All Products</h3>
            <ul className="product-links">
              <li><a href="/products/stationery">Stationery & Office Supplies</a></li>
              <li><a href="/products/computers">Computers & Printers</a></li>
              <li><a href="/products/furniture">Office & Hotel Furniture</a></li>
              <li><a href="/products/cleaning">Cleaning Materials</a></li>
              <li><a href="/products/agricultural">Agricultural Inputs</a></li>
              <li><a href="/products/livestock">Livestock & Rearing</a></li>
              <li><a href="/products/food-beverages">Food & Beverages</a></li>
              <li><a href="/products/medical">Medical & PPE</a></li>
              <li><a href="/products/industrial">Industrial Materials</a></li>
              <li><a href="/products/branding">Custom Branding</a></li>
              <li><a href="/products/export">Exported Goods</a></li>
              <li><a href="/products/custom">Custom Orders</a></li>
            </ul>
          </aside>

          {/* ✅ MAIN CONTENT */}
          <main className="main-content">
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
                <li> Full batch numbers and expiry date tracking for every item</li>
                <li> Bulk packs and institutional pricing for hospitals and offices</li>
                <li> Temperature-controlled transport for sensitive diagnostics</li>
                <li> Custom donation packs for NGOs and community health programs</li>
                <li> MOH-registered supplier with valid import permits</li>
                <li> 24/7 emergency hotline for critical supply needs</li>
              </ul>
            </section>

            <section>
              <h2>💊 Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={ppeKitsImg} alt="PPE Kits" className="product-image" />
                  <h3>PPE Kits</h3>
                  <p>Masks, gloves, gowns, face shields, goggles.</p>
                </div>
                <div className="product-card">
                  <img src={medicalConsumablesImg} alt="Medical Consumables" className="product-image" />
                  <h3>Medical Consumables</h3>
                  <p>Syringes, swabs, bandages, IV sets, catheters.</p>
                </div>
                <div className="product-card">
                  <img src={sanitizersDisinfectantsImg} alt="Sanitizers & Disinfectants" className="product-image" />
                  <h3>Sanitizers & Disinfectants</h3>
                  <p>Hand sanitizer, surface disinfectant, wipes, sprays.</p>
                </div>
                <div className="product-card">
                  <img src={diagnosticMonitoringImg} alt="Diagnostic & Monitoring" className="product-image" />
                  <h3>Diagnostic & Monitoring</h3>
                  <p>Thermometers, BP kits, glucometers, pulse oximeters.</p>
                </div>
                <div className="product-card">
                  <img src={surgicalMasksImg} alt="Surgical Masks" className="product-image" />
                  <h3>Surgical Masks</h3>
                  <p>3-ply, ASTM Level 1–3, individually wrapped.</p>
                </div>
                <div className="product-card">
                  <img src={nitrileGlovesImg} alt="Nitrile Gloves" className="product-image" />
                  <h3>Nitrile Gloves</h3>
                  <p>Non-latex, powder-free, exam-grade.</p>
                </div>
                <div className="product-card">
                  <img src={isolationGownsImg} alt="Isolation Gowns" className="product-image" />
                  <h3>Isolation Gowns</h3>
                  <p>Fluid-resistant, disposable, AAMI Level 2–3.</p>
                </div>
                <div className="product-card">
                  <img src={faceShieldsImg} alt="Face Shields" className="product-image" />
                  <h3>Face Shields</h3>
                  <p>Anti-fog, wrap-around, reusable or disposable.</p>
                </div>
                <div className="product-card">
                  <img src={syringesImg} alt="Syringes" className="product-image" />
                  <h3>Syringes</h3>
                  <p>Luer-lock and slip-tip, 1ml to 60ml.</p>
                </div>
                <div className="product-card">
                  <img src={bandagesImg} alt="Bandages & Dressings" className="product-image" />
                  <h3>Bandages & Dressings</h3>
                  <p>Gauze, adhesive, sterile, non-woven.</p>
                </div>
                <div className="product-card">
                  <img src={ivSetsImg} alt="IV Sets" className="product-image" />
                  <h3>IV Sets</h3>
                  <p>With or without burette, DEHP-free tubing.</p>
                </div>
                <div className="product-card">
                  <img src={cathetersImg} alt="Catheters" className="product-image" />
                  <h3>Catheters</h3>
                  <p>Foley, intermittent, pediatric & adult sizes.</p>
                </div>
                <div className="product-card">
                  <img src={handSanitizerImg} alt="Hand Sanitizer" className="product-image" />
                  <h3>Hand Sanitizer</h3>
                  <p>70% alcohol, gel and liquid, 100ml to 5L.</p>
                </div>
                <div className="product-card">
                  <img src={surfaceDisinfectantImg} alt="Surface Disinfectant" className="product-image" />
                  <h3>Surface Disinfectant</h3>
                  <p>Hospital-grade, virucidal, 1L to 20L.</p>
                </div>
                <div className="product-card">
                  <img src={disinfectantWipesImg} alt="Disinfectant Wipes" className="product-image" />
                  <h3>Disinfectant Wipes</h3>
                  <p>Pre-saturated, ready-to-use, tubs and canisters.</p>
                </div>
                <div className="product-card">
                  <img src={digitalThermometersImg} alt="Digital Thermometers" className="product-image" />
                  <h3>Digital Thermometers</h3>
                  <p>Oral, infrared, forehead, and ear models.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Us?</h2>
              <ul className="benefit-list">
                <li> Ministry of Health (MOH) registered medical supplier</li>
                <li> Just-in-time delivery for emergencies — within hours</li>
                <li> Free inventory management support for clinics and hospitals</li>
                <li> All products come with certificates of analysis and compliance</li>
                <li> Dedicated account manager for large institutions</li>
                <li> Nationwide delivery with cold-chain options</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>🆘 Request Emergency Medical Supply</h2>
              <p>Call or WhatsApp us for urgent delivery of critical items.</p>
              <button className="btn-primary">Contact Now</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📩 Request Medical Supply Quote</h2>
              <form className="contact-form" onSubmit={sendContactForm}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                />
                <textarea 
                  name="message" 
                  placeholder="Tell us your facility type, required items, quantities, and urgency level..." 
                  rows="5" 
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>

    </div>
  );
}

export default Medical;