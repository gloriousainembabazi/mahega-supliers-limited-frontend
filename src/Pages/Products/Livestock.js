// src/pages/Products/Livestock.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/livestock.css';

// ✅ IMPORT REAL LIVESTOCK SUPPLY IMAGES
import animalFeedImg from '../../images/feeds.jpeg';
import vaccinesMedsImg from '../../images/cattle vaccine.jpeg';
import housingFencingImg from '../../images/housing fencing.jpeg';
import hygieneCareImg from '../../images/hygine care.jpeg';
import cattleFeedImg from '../../images/cattlefeeding.jpeg';
import poultryFeedImg from '../../images/poutry feeds.jpeg';
import pigFeedImg from '../../images/pig feeds.jpeg';
import fishFeedImg from '../../images/fish feeds.jpeg';
import dewormersImg from '../../images/dewormers.jpeg';
import antibioticsImg from '../../images/antibiotics 2.jpeg';
import supplementsImg from '../../images/suppliments.jpeg';
import injectablesImg from '../../images/injectables.jpeg';
import wireMeshFencingImg from '../../images/wire mesh fencing.jpeg';
import livestockPostsImg from '../../images/livestock posts.jpeg';
import waterTroughsImg from '../../images/water trough.jpeg';
import feedersImg from '../../images/feeders.jpeg';

function Livestock() {
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
    <div className="livestock-page">
    

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🐄 Livestock & Rearing Supplies</h1>
          <p>Complete solutions for cattle, goats, poultry, pigs, and fish farming across Uganda.</p>
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
                <li> Scientifically formulated feeds for all animal types and growth stages</li>
                <li> Vaccines, dewormers, and supplements from certified veterinary suppliers</li>
                <li> Installation support for pens, fencing, water systems, and feeders</li>
                <li> Group discounts for cooperatives and farmer groups</li>
                <li> Cold-chain delivery for temperature-sensitive medicines</li>
                <li> Technical guidance on nutrition and disease prevention</li>
              </ul>
            </section>

            <section>
              <h2>🐓 Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={animalFeedImg} alt="Animal Feed" className="product-image" />
                  <h3>Animal Feed</h3>
                  <p>Cattle, goat, poultry, pig, and fish feeds — starter to finisher.</p>
                </div>
                <div className="product-card">
                  <img src={vaccinesMedsImg} alt="Vaccines & Medications" className="product-image" />
                  <h3>Vaccines & Meds</h3>
                  <p>Dewormers, antibiotics, supplements, injectables.</p>
                </div>
                <div className="product-card">
                  <img src={housingFencingImg} alt="Housing & Fencing" className="product-image" />
                  <h3>Housing & Fencing</h3>
                  <p>Wire mesh, posts, water troughs, feeders, roofing.</p>
                </div>
                <div className="product-card">
                  <img src={hygieneCareImg} alt="Hygiene & Care" className="product-image" />
                  <h3>Hygiene & Care</h3>
                  <p>Disinfectants, hoof care, milking equipment, grooming kits.</p>
                </div>
                <div className="product-card">
                  <img src={cattleFeedImg} alt="Cattle Feed" className="product-image" />
                  <h3>Cattle Feed</h3>
                  <p>High-energy dairy and beef formulations.</p>
                </div>
                <div className="product-card">
                  <img src={poultryFeedImg} alt="Poultry Feed" className="product-image" />
                  <h3>Poultry Feed</h3>
                  <p>Broiler, layer, and chick mash — balanced nutrition.</p>
                </div>
                <div className="product-card">
                  <img src={pigFeedImg} alt="Pig Feed" className="product-image" />
                  <h3>Pig Feed</h3>
                  <p>Creep, grower, and finisher rations.</p>
                </div>
                <div className="product-card">
                  <img src={fishFeedImg} alt="Fish Feed" className="product-image" />
                  <h3>Fish Feed</h3>
                  <p>Floating and sinking pellets for tilapia and catfish.</p>
                </div>
                <div className="product-card">
                  <img src={dewormersImg} alt="Dewormers" className="product-image" />
                  <h3>Dewormers</h3>
                  <p>Oral and injectable — for internal and external parasites.</p>
                </div>
                <div className="product-card">
                  <img src={antibioticsImg} alt="Antibiotics" className="product-image" />
                  <h3>Antibiotics</h3>
                  <p>Vet-prescribed treatments for common livestock diseases.</p>
                </div>
                <div className="product-card">
                  <img src={supplementsImg} alt="Vitamin Supplements" className="product-image" />
                  <h3>Supplements</h3>
                  <p>Mineral licks, vitamin injections, electrolytes.</p>
                </div>
                <div className="product-card">
                  <img src={injectablesImg} alt="Injectable Medicines" className="product-image" />
                  <h3>Injectables</h3>
                  <p>Vaccines and treatments in sterile vials.</p>
                </div>
                <div className="product-card">
                  <img src={wireMeshFencingImg} alt="Wire Mesh Fencing" className="product-image" />
                  <h3>Wire Mesh Fencing</h3>
                  <p>Galvanized, rust-resistant for secure enclosures.</p>
                </div>
                <div className="product-card">
                  <img src={livestockPostsImg} alt="Livestock Posts" className="product-image" />
                  <h3>Livestock Posts</h3>
                  <p>Concrete and treated timber for durable fencing.</p>
                </div>
                <div className="product-card">
                  <img src={waterTroughsImg} alt="Water Troughs" className="product-image" />
                  <h3>Water Troughs</h3>
                  <p>Plastic and metal — various capacities for all animals.</p>
                </div>
                <div className="product-card">
                  <img src={feedersImg} alt="Animal Feeders" className="product-image" />
                  <h3>Feeders</h3>
                  <p>Automatic and manual — reduce waste and improve hygiene.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Us?</h2>
              <ul className="benefit-list">
                <li> On-call veterinary advisory for disease outbreaks</li>
                <li> Custom feed formulation based on your livestock type and goals</li>
                <li> Free training on modern rearing, biosecurity, and record-keeping</li>
                <li> Reliable farm-gate delivery across Uganda</li>
                <li> Quality-assured products with expiry tracking</li>
                <li> Support for youth and women in agri-business</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>📞 Request Livestock Supply Plan</h2>
              <p>Tell us your animal type and quantity — we’ll build a custom supply package.</p>
              <button className="btn-primary">Get Custom Plan</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📩 Contact Livestock Supply Team</h2>
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
                  placeholder="Tell us your farm location, animal types, numbers, and current challenges..." 
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

export default Livestock;