// src/pages/Products/Cleaning.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/cleaning.css'; 

// ✅ IMPORT CLEANING PRODUCT IMAGES
import floorCleanersImg from '../../images/floor cleaners.jpeg';
import glassCleanersImg from '../../images/glass cleaner.jpeg';
import disinfectantsImg from '../../images/disinfectants.jpeg';
import degreasersImg from '../../images/degreasers.jpeg';
import broomsMopsImg from '../../images/broom mops.jpeg';
import glovesBucketsImg from '../../images/glove buckets.jpeg';
import wasteBinsImg from '../../images/waste bin.jpeg';
import recyclingStationsImg from '../../images/recycling station.jpeg';
import soapDispensersImg from '../../images/soap despensers.jpeg';
import sanitizerDispensersImg from '../../images/sanitizer dispenser.jpeg';
import paperTowelDispensersImg from '../../images/paper towel.jpeg';
import cleaningCartsImg from '../../images/cleaning carts.jpeg';
import ecoCleanersImg from '../../images/ecocleaners.jpeg';
import hospitalGradeImg from '../../images/hospital grade.jpeg';

function Cleaning() {
  const [loading, setLoading] = useState(false);

  const sendContactForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    setLoading(true);

    emailjs.send(
      'service_xyz123',     // 👉 REPLACE WITH YOUR SERVICE ID
      'template_abc456',    // 👉 REPLACE WITH YOUR TEMPLATE ID
      { name, email, message },
      'user_789def012'      // 👉 REPLACE WITH YOUR PUBLIC KEY
    )
    .then(() => {
      alert('✅ Message sent successfully! We’ll contact you soon.');
      e.target.reset();
    })
    .catch(() => {
      alert('❌ Failed to send message. Please try again.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="cleaning-page">
      

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🧹 Cleaning Materials & Consumables</h1>
          <p>Professional-grade cleaning supplies for offices, hospitals, hotels, and schools.</p>
        </div>
      </section>

      {/* ✅ Main Content with Sidebar */}
      <div className="page-content">
        <div className="content-layout">
          
          {/* ✅ SIDEBAR — All Products */}
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
                <li> Safe for all surfaces — wood, glass, tile, stainless steel</li>
                <li> Concentrated formulas — cost-effective, reduces storage space</li>
                <li> Bulk refill packs available — reduce plastic waste</li>
                <li> MSDS & safety compliance provided — meet OSHA and MOH standards</li>
                <li> Eco-certified and hospital-grade options available</li>
              </ul>
            </section>

            <section>
              <h2>🧽 Cleaning Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={floorCleanersImg} alt="Floor Cleaners" className="product-image" />
                  <h3>Floor Cleaners</h3>
                  <p>For tile, vinyl, wood, and concrete — neutral, alkaline, and acid-based options.</p>
                </div>
                <div className="product-card">
                  <img src={glassCleanersImg} alt="Glass Cleaners" className="product-image" />
                  <h3>Glass Cleaners</h3>
                  <p>Streak-free formulas for windows, mirrors, and glass partitions.</p>
                </div>
                <div className="product-card">
                  <img src={disinfectantsImg} alt="Disinfectants" className="product-image" />
                  <h3>Disinfectants</h3>
                  <p>Hospital-grade, kills 99.9% of germs — ideal for clinics, schools, and kitchens.</p>
                </div>
                <div className="product-card">
                  <img src={degreasersImg} alt="Degreasers" className="product-image" />
                  <h3>Degreasers</h3>
                  <p>Heavy-duty formulas for kitchens, workshops, and machinery.</p>
                </div>
                <div className="product-card">
                  <img src={broomsMopsImg} alt="Brooms & Mops" className="product-image" />
                  <h3>Brooms & Mops</h3>
                  <p>Industrial-grade handles, microfiber heads, and replaceable pads.</p>
                </div>
                <div className="product-card">
                  <img src={glovesBucketsImg} alt="Gloves & Buckets" className="product-image" />
                  <h3>Gloves & Buckets</h3>
                  <p>Nitrile, latex, rubber gloves + wringer buckets and mop pails.</p>
                </div>
                <div className="product-card">
                  <img src={wasteBinsImg} alt="Waste Bins" className="product-image" />
                  <h3>Waste Bins</h3>
                  <p>Plastic, metal, pedal, and touchless bins for offices and restrooms.</p>
                </div>
                <div className="product-card">
                  <img src={recyclingStationsImg} alt="Recycling Stations" className="product-image" />
                  <h3>Recycling Stations</h3>
                  <p>Multi-stream units for paper, plastic, cans, and general waste.</p>
                </div>
                <div className="product-card">
                  <img src={soapDispensersImg} alt="Soap Dispensers" className="product-image" />
                  <h3>Soap Dispensers</h3>
                  <p>Wall-mounted, countertop, and automatic dispensers for liquid and foam soap.</p>
                </div>
                <div className="product-card">
                  <img src={sanitizerDispensersImg} alt="Sanitizer Dispensers" className="product-image" />
                  <h3>Sanitizer Dispensers</h3>
                  <p>Touchless, wall-mounted, and stand units for high-traffic areas.</p>
                </div>
                <div className="product-card">
                  <img src={paperTowelDispensersImg} alt="Paper Towel Dispensers" className="product-image" />
                  <h3>Paper Towel Dispensers</h3>
                  <p>Manual and automatic dispensers for rolls and folded towels.</p>
                </div>
                <div className="product-card">
                  <img src={cleaningCartsImg} alt="Cleaning Carts" className="product-image" />
                  <h3>Cleaning Carts</h3>
                  <p>Multi-shelf trolleys with buckets, holders, and waste compartments.</p>
                </div>
                <div className="product-card">
                  <img src={ecoCleanersImg} alt="Eco-Friendly Cleaners" className="product-image" />
                  <h3>Eco-Friendly Cleaners</h3>
                  <p>Biodegradable, non-toxic, and phosphate-free formulas for green cleaning.</p>
                </div>
                <div className="product-card">
                  <img src={hospitalGradeImg} alt="Hospital-Grade Supplies" className="product-image" />
                  <h3>Hospital-Grade Supplies</h3>
                  <p>Approved for use in medical facilities — meets stringent hygiene standards.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Mahega for Cleaning Supplies?</h2>
              <ul className="benefit-list">
                <li> Scheduled replenishment service — never run out</li>
                <li> Training for cleaning staff — proper usage and safety</li>
                <li> Eco-certified and hospital-grade products available</li>
                <li> Custom cleaning kits for offices, schools, or hotels</li>
                <li> Fast delivery across Uganda — same-day in Kampala</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>🧼 Request a Free Cleaning Audit</h2>
              <p>We’ll assess your facility and recommend the right products & quantities.</p>
              <button className="btn-primary">Book Free Audit</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📞 Contact Us for Bulk or Custom Orders</h2>
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
                  placeholder="Your Message (e.g., facility type, square footage, current products)" 
                  rows="5" 
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>


    </div>
  );
}

export default Cleaning;