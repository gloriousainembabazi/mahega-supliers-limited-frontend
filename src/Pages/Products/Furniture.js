// src/pages/Products/Furniture.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/furniture.css';

// ✅ IMPORT REAL FURNITURE IMAGES
import officeDesksChairsImg from '../../images/office desk chair.jpeg';
import receptionLoungeImg from '../../images/lounge.jpeg';
import hotelRestaurantImg from '../../images/restarunt sents2.jpeg';
import storageFilingImg from '../../images/storage filing.jpeg';
import executiveDesksImg from '../../images/office desk.jpeg';
import ergonomicChairsImg from '../../images/ergonomic.jpeg';
import conferenceTablesImg from '../../images/coference tables.jpeg';
import waitingAreaSetsImg from '../../images/waiting area.jpeg';
import hotelBedsImg from '../../images/hotel beds.jpeg';
import restaurantDiningSetsImg from '../../images/restarunt sents2.jpeg';
import barStoolsImg from '../../images/bar stools.jpeg';
import banquetChairsImg from '../../images/banquet chairs.jpeg';
import filingCabinetsImg from '../../images/filling cabinets.jpeg';
import bookshelvesImg from '../../images/book shelves.jpeg';
import lockersImg from '../../images/lockers.jpeg';
import modularShelvingImg from '../../images/modularshelving.jpeg';

function Furniture() {
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
    <div className="furniture-page">
      

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🪑 Premium Office & Hotel Furniture</h1>
          <p>Durable, stylish, and ergonomic furniture for offices, hotels, schools, and conference centers.</p>
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
                <li> Wood, metal, and hybrid designs — built to last</li>
                <li> Custom sizing, colors, and upholstery to match your brand</li>
                <li> Fire-retardant fabrics & commercial-grade materials</li>
                <li> 5-year structural warranty on all furniture</li>
                <li> Eco-friendly finishes and sustainable wood options</li>
                <li> Bulk pricing for offices, hotels, and institutions</li>
              </ul>
            </section>

            <section>
              <h2>🛋️ Furniture Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={officeDesksChairsImg} alt="Office Desks & Chairs" className="product-image" />
                  <h3>Office Desks & Chairs</h3>
                  <p>Ergonomic seating and executive workstations.</p>
                </div>
                <div className="product-card">
                  <img src={receptionLoungeImg} alt="Reception & Lounge" className="product-image" />
                  <h3>Reception & Lounge</h3>
                  <p>Sofas, coffee tables, waiting area sets.</p>
                </div>
                <div className="product-card">
                  <img src={hotelRestaurantImg} alt="Hotel & Restaurant" className="product-image" />
                  <h3>Hotel & Restaurant</h3>
                  <p>Dining sets, bar stools, banquet chairs.</p>
                </div>
                <div className="product-card">
                  <img src={storageFilingImg} alt="Storage & Filing" className="product-image" />
                  <h3>Storage & Filing</h3>
                  <p>Cabinets, shelves, bookcases, lockers.</p>
                </div>
                <div className="product-card">
                  <img src={executiveDesksImg} alt="Executive Desks" className="product-image" />
                  <h3>Executive Desks</h3>
                  <p>Luxury finishes, cable management, built-in storage.</p>
                </div>
                <div className="product-card">
                  <img src={ergonomicChairsImg} alt="Ergonomic Chairs" className="product-image" />
                  <h3>Ergonomic Chairs</h3>
                  <p>Adjustable lumbar, headrest, and arm support.</p>
                </div>
                <div className="product-card">
                  <img src={conferenceTablesImg} alt="Conference Tables" className="product-image" />
                  <h3>Conference Tables</h3>
                  <p>Round, oval, rectangular — with power & data ports.</p>
                </div>
                <div className="product-card">
                  <img src={waitingAreaSetsImg} alt="Waiting Area Sets" className="product-image" />
                  <h3>Waiting Area Sets</h3>
                  <p>Modular, comfortable, and space-efficient.</p>
                </div>
                <div className="product-card">
                  <img src={hotelBedsImg} alt="Hotel Beds" className="product-image" />
                  <h3>Hotel Beds</h3>
                  <p>Platform, divan, and headboard sets — durable & stylish.</p>
                </div>
                <div className="product-card">
                  <img src={restaurantDiningSetsImg} alt="Restaurant Dining Sets" className="product-image" />
                  <h3>Restaurant Dining Sets</h3>
                  <p>Stackable, wipe-clean, commercial-grade tables & chairs.</p>
                </div>
                <div className="product-card">
                  <img src={barStoolsImg} alt="Bar Stools" className="product-image" />
                  <h3>Bar Stools</h3>
                  <p>Fixed or swivel, with or without backrest.</p>
                </div>
                <div className="product-card">
                  <img src={banquetChairsImg} alt="Banquet Chairs" className="product-image" />
                  <h3>Banquet Chairs</h3>
                  <p>Chiavari, folding, padded — for events & halls.</p>
                </div>
                <div className="product-card">
                  <img src={filingCabinetsImg} alt="Filing Cabinets" className="product-image" />
                  <h3>Filing Cabinets</h3>
                  <p>2-4 drawers, lockable, steel or wood finish.</p>
                </div>
                <div className="product-card">
                  <img src={bookshelvesImg} alt="Bookshelves" className="product-image" />
                  <h3>Bookshelves</h3>
                  <p>Wall-mounted, freestanding, modular units.</p>
                </div>
                <div className="product-card">
                  <img src={lockersImg} alt="Lockers" className="product-image" />
                  <h3>Lockers</h3>
                  <p>For schools, gyms, offices — single or multi-compartment.</p>
                </div>
                <div className="product-card">
                  <img src={modularShelvingImg} alt="Modular Shelving" className="product-image" />
                  <h3>Modular Shelving</h3>
                  <p>Customizable storage for retail or office use.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Us?</h2>
              <ul className="benefit-list">
                <li> Free space planning & 3D layout design</li>
                <li> On-time delivery and professional installation</li>
                <li> Bulk discounts for hotel chains, schools, and offices</li>
                <li> Local manufacturing = faster turnaround & support</li>
                <li> After-sales service and spare parts available</li>
                <li> Samples available before full order</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>📐 Get a Free Space Design</h2>
              <p>Send us your floor plan — we’ll suggest the perfect furniture layout.</p>
              <button className="btn-primary">Upload Floor Plan</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📞 Request a Furniture Quote</h2>
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
                  placeholder="Tell us your space type, number of people, and preferred style (modern, classic, etc.)..." 
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

export default Furniture;