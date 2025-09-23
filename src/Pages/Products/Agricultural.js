// src/pages/Products/Agricultural.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import  '../../style/Agricultural.css';

// ✅ IMPORT PRODUCT IMAGES — CROPS + LIVESTOCK (ALL USED)
import seedsImg from '../../images/seeds.jpeg';
import fertilizersImg from '../../images/fertilizers.jpeg';
import toolsImg from '../../images/tools.jpeg';
import irrigationImg from '../../images/irrigation.jpeg'; 
import greenhouseImg from '../../images/green house.jpeg';
import tractorImg from '../../images/tractor.jpeg';
 import sprayerImg from '../../images/pen.jpeg'
import seedlingsImg from '../../images/seedling.jpeg';

// ✅ LIVESTOCK IMAGES
import cattleFeedImg from '../../images/cattlefeeding.jpeg';
import goatFeedImg from '../../images/goat feeding.jpeg';
import cattleVaccineImg from '../../images/cattle vaccine.jpeg';
import goatVaccineImg from '../../images/goat vaccine.jpeg';
import cattleFenceImg from '../../images/fencing.jpeg';
import goatShedImg from '../../images/goat rearing.jpg';
import milkingMachineImg from '../../images/milking machine.jpeg';
import weighingScaleImg from '../../images/scales.jpeg';
import cattleTagsImg from '../../images/tags.jpeg';
import hoofTrimmerImg from '../../images/cattle 2 rearing.jpg';
import waterTroughImg from '../../images/water trough.jpeg';
import mineralLickImg from '../../images/mineral licks.jpeg';

import protectiveGearImg from '../../images/gears.jpeg';

function Agricultural() {
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
      alert('❌ Failed to send message. Please try again.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="agricultural-page">
    

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>🌱 Agricultural & Livestock Solutions</h1>
          <p>Quality inputs for crops, cattle, goats, and modern farming in Uganda.</p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
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
              <li><a href="/products/blading">Blading Equipment</a></li>
              <li><a href="/products/export">Exported Goods</a></li>
              <li><a href="/products/custom">Custom Orders</a></li>
            </ul>
          </aside>

          {/* ✅ MAIN CONTENT */}
          <main className="main-content">
            
            {/* Crop Farming Section */}
            <section>
              <h2>🌱 Quality Inputs for Modern Crop Farming</h2>
              <p>
                Boost your yield with our certified seeds, fertilizers, tools, and protective gear — 
                sourced for Uganda’s soil and climate, trusted by smallholders and commercial farms.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">🚜</div>
                <h3>500+</h3>
                <p>Farms Supplied</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🧪</div>
                <h3>Certified</h3>
                <p>Quality Inputs</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">📦</div>
                <h3>Rural</h3>
                <p>Delivery</p>
              </div>
            </section>

            <section>
              <h2>✨ Key Features</h2>
              <ul className="feature-list">
                <li> MOA-certified seeds & fertilizers</li>
                <li> Training & usage guides available</li>
                <li> Bulk discounts for cooperatives</li>
                <li> Credit options for registered farmers</li>
              </ul>
            </section>

            <section>
              <h2>🌾 Crop Farming Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={seedsImg} alt="Seeds & Seedlings" className="product-image" />
                  <h3>Seeds & Seedlings</h3>
                  <p>Maize, beans, tomatoes, onions, and horticultural varieties.</p>
                </div>
                <div className="product-card">
                  <img src={fertilizersImg} alt="Fertilizers & Chemicals" className="product-image" />
                  <h3>Fertilizers & Chemicals</h3>
                  <p>Organic & synthetic, foliar feeds, pesticides, herbicides.</p>
                </div>
                <div className="product-card">
                  <img src={toolsImg} alt="Tools & Equipment" className="product-image" />
                  <h3>Tools & Equipment</h3>
                  <p>Hoes, pangas, sprayers, wheelbarrows, irrigation kits.</p>
                </div>
                <div className="product-card">
                  <img src={protectiveGearImg} alt="Protective Gear" className="product-image" />
                  <h3>Protective Gear</h3>
                  <p>Gloves, boots, masks, overalls for safe chemical handling.</p>
                </div>
                <div className="product-card">
                  <img src={irrigationImg} alt="Irrigation Systems" className="product-image" />
                  <h3>Irrigation Systems</h3>
                  <p>Drip kits, sprinklers, water pumps for efficient watering.</p>
                </div>
                <div className="product-card">
                  <img src={greenhouseImg} alt="Greenhouse Materials" className="product-image" />
                  <h3>Greenhouse Materials</h3>
                  <p>Plastic sheeting, frames, ventilation for controlled farming.</p>
                </div>
                <div className="product-card">
                  <img src={tractorImg} alt="Tractor Implements" className="product-image" />
                  <h3>Tractor Implements</h3>
                  <p>Plows, harrows, planters, harvesters for mechanized farming.</p>
                </div>
                <div className="product-card">
                  <img src={sprayerImg} alt="Sprayers & Applicators" className="product-image" />
                  <h3>Sprayers & Applicators</h3>
                  <p>Backpack, knapsack, and motorized sprayers for field use.</p>
                </div>
                <div className="product-card">
                  <img src={seedlingsImg} alt="Seedling Trays & Nurseries" className="product-image" />
                  <h3>Seedling Trays & Nurseries</h3>
                  <p>Germination kits, soil mixes and trays for nursery production.</p>
                </div>
              </div>
            </section>

            {/* ✅ CATTLE KEEPING SECTION */}
            <section>
              <h2>🐄 Cattle Keeping Solutions</h2>
              <p>
                From feed and vaccines to fencing and milking equipment — we supply everything you need 
                to run a profitable, healthy cattle operation.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">🐄</div>
                <h3>200+</h3>
                <p>Cattle Farms Served</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">💉</div>
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
              <h2>✨ Cattle Farming Features</h2>
              <ul className="feature-list">
                <li> Formulated feeds for dairy & beef cattle</li>
                <li> Vaccines & supplements from certified suppliers</li>
                <li> Installation support for pens & fencing</li>
                <li> Group discounts for cooperatives</li>
              </ul>
            </section>

            <section>
              <h2>🐮 Cattle Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={cattleFeedImg} alt="Cattle Feed" className="product-image" />
                  <h3>Cattle Feed</h3>
                  <p>Concentrates, hay, mineral blocks for dairy and beef breeds.</p>
                </div>
                <div className="product-card">
                  <img src={cattleVaccineImg} alt="Vaccines & Meds" className="product-image" />
                  <h3>Vaccines & Medicines</h3>
                  <p>Dewormers, antibiotics, injectables, mastitis treatments.</p>
                </div>
                <div className="product-card">
                  <img src={cattleFenceImg} alt="Fencing & Housing" className="product-image" />
                  <h3>Fencing & Housing</h3>
                  <p>Wire mesh, posts, water troughs, roofing, milking stalls.</p>
                </div>
                <div className="product-card">
                  <img src={milkingMachineImg} alt="Milking Equipment" className="product-image" />
                  <h3>Milking Equipment</h3>
                  <p>Manual and electric milkers, cooling tanks, hygiene kits.</p>
                </div>
                <div className="product-card">
                  <img src={weighingScaleImg} alt="Weighing Scales" className="product-image" />
                  <h3>Weighing Scales</h3>
                  <p>Digital and mechanical scales for livestock monitoring.</p>
                </div>
                <div className="product-card">
                  <img src={cattleTagsImg} alt="ID Tags & Trackers" className="product-image" />
                  <h3>ID Tags & Trackers</h3>
                  <p>Ear tags, electronic trackers for herd management.</p>
                </div>
              </div>
            </section>

            {/* ✅ GOAT REARING SECTION */}
            <section>
              <h2>🐐 Goat Rearing Essentials</h2>
              <p>
                Optimize your goat farm with specialized feed, housing, health products, and equipment 
                designed for Ugandan conditions and breeds.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">🐐</div>
                <h3>300+</h3>
                <p>Goat Farms Supported</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">💊</div>
                <h3>Health-Focused</h3>
                <p>Products</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🏡</div>
                <h3>Shed Plans</h3>
                <p>Available</p>
              </div>
            </section>

            <section>
              <h2>✨ Goat Farming Features</h2>
              <ul className="feature-list">
                <li> Feed formulated for growth, milk, or meat production</li>
                <li> Vaccines for PPR, CCPP, and other common diseases</li>
                <li> Portable sheds and fencing for rotational grazing</li>
                <li> On-call veterinary advisory</li>
              </ul>
            </section>

            <section>
              <h2>🐐 Goat Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={goatFeedImg} alt="Goat Feed" className="product-image" />
                  <h3>Goat Feed</h3>
                  <p>Pellets, mineral licks, hay, and supplements for all ages.</p>
                </div>
                <div className="product-card">
                  <img src={goatVaccineImg} alt="Goat Vaccines" className="product-image" />
                  <h3>Vaccines & Health</h3>
                  <p>PPR, CCPP, dewormers, hoof care, vitamin injections.</p>
                </div>
                <div className="product-card">
                  <img src={goatShedImg} alt="Goat Sheds" className="product-image" />
                  <h3>Sheds & Housing</h3>
                  <p>Portable pens, elevated floors, ventilation systems.</p>
                </div>
                <div className="product-card">
                  <img src={waterTroughImg} alt="Water Systems" className="product-image" />
                  <h3>Water Systems</h3>
                  <p>Automatic drinkers, troughs, nipple systems for goats.</p>
                </div>
                <div className="product-card">
                  <img src={mineralLickImg} alt="Mineral Licks" className="product-image" />
                  <h3>Mineral Licks</h3>
                  <p>Salt, calcium, phosphorus blocks for nutritional balance.</p>
                </div>
                <div className="product-card">
                  <img src={hoofTrimmerImg} alt="Hoof Care" className="product-image" />
                  <h3>Hoof Care Tools</h3>
                  <p>Trimmers, antiseptics, foot baths for disease prevention.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Mahega for Livestock?</h2>
              <ul className="benefit-list">
                <li> On-call veterinary advisory</li>
                <li> Feed formulation based on your livestock type</li>
                <li> Training on modern rearing practices</li>
                <li> Mobile delivery to rural goat & cattle farms</li>
                <li> Bulk discounts for cooperatives and large farms</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>📲 Talk to Our Livestock Team</h2>
              <p>Get advice on feed, vaccines, or shed design for your herd.</p>
              <button className="btn-primary">Request Free Consultation</button>
            </section>

            {/* ✅ CONTACT FORM */}
            <section className="contact-form-section">
              <h2>📞 Contact Us for Bulk Livestock Orders</h2>
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
                  placeholder="Your Message (e.g., cattle/goat type, quantity, location)" 
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

export default Agricultural;