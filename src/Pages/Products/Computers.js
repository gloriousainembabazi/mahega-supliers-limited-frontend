// src/pages/Products/Computers.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/computers.css'; 

// ✅ IMPORT COMPUTER PRODUCT IMAGES
import laptopsImg from '../../images/latops.jpeg';
import desktopsImg from '../../images/desktops.jpeg';
import printersImg from '../../images/printers 33333.jpeg';
import scannersImg from '../../images/scanners.jpeg';
import keyboardsImg from '../../images/keyboard.jpeg';
import miceImg from '../../images/mouse1.jpeg';
import webcamsImg from '../../images/webcom.jpeg';
import upssImg from '../../images/upss.jpeg';
import monitorsImg from '../../images/monitors.jpeg';
import inkCartridgesImg from '../../images/ink cartridge.jpeg';
import tonerCartridgesImg from '../../images/tonercartridge.jpeg';
import cablesImg from '../../images/cables.jpeg';
import cleaningKitsImg from '../../images/cleaning kits.jpeg';
import serversImg from '../../images/servers.jpeg';
import workstationsImg from '../../images/workstation.jpeg';
import tabletsImg from '../../images/tablet 2.jpeg';
import projectorsImg from '../../images/printers 33333.jpeg';

function Computers() {
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
    <div className="computers-page">


      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>💻 Computers & Printers</h1>
          <p>Reliable ICT equipment for offices, schools, and businesses across Uganda.</p>
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
              <h2>💻 Reliable ICT Equipment for Modern Workplaces</h2>
              <p>
                We supply brand-new and certified refurbished computers, printers, and accessories 
                tailored for offices, schools, and businesses across Uganda.
              </p>
            </section>

            <section className="product-stats">
              <div className="stat-box">
                <div className="stat-icon">🖥️</div>
                <h3>100+</h3>
                <p>Models Available</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🖨️</div>
                <h3>50+</h3>
                <p>Printer Types</p>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🛡️</div>
                <h3>1-Year</h3>
                <p>Warranty Included</p>
              </div>
            </section>

            <section>
              <h2>✨ Key Features</h2>
              <ul className="feature-list">
                <li> Genuine licensed software</li>
                <li> On-site setup & installation</li>
                <li> Corporate leasing options</li>
                <li> After-sales technical support</li>
                <li> Trade-in for old equipment</li>
                <li> Bulk discounts for schools & offices</li>
              </ul>
            </section>

            <section>
              <h2>🔌 Product Categories</h2>
              <div className="product-grid">
                <div className="product-card">
                  <img src={laptopsImg} alt="Laptops" className="product-image" />
                  <h3>Laptops & Notebooks</h3>
                  <p>From budget to high-performance machines for all business needs.</p>
                </div>
                <div className="product-card">
                  <img src={desktopsImg} alt="Desktops" className="product-image" />
                  <h3>Desktop PCs</h3>
                  <p>Tower, mini-PC, and all-in-one desktops for offices and homes.</p>
                </div>
                <div className="product-card">
                  <img src={printersImg} alt="Printers" className="product-image" />
                  <h3>Printers</h3>
                  <p>Inkjet, laser, multifunction, and industrial-grade devices.</p>
                </div>
                <div className="product-card">
                  <img src={scannersImg} alt="Scanners" className="product-image" />
                  <h3>Scanners</h3>
                  <p>Flatbed, sheet-fed, and document scanners for offices and schools.</p>
                </div>
                <div className="product-card">
                  <img src={keyboardsImg} alt="Keyboards" className="product-image" />
                  <h3>Keyboards</h3>
                  <p>Mechanical, wireless, ergonomic, and gaming keyboards.</p>
                </div>
                <div className="product-card">
                  <img src={miceImg} alt="Mice" className="product-image" />
                  <h3>Mice</h3>
                  <p>Wireless, optical, gaming, and ergonomic mice for all users.</p>
                </div>
                <div className="product-card">
                  <img src={webcamsImg} alt="Webcams" className="product-image" />
                  <h3>Webcams</h3>
                  <p>HD, 1080p, and USB webcams for video conferencing and online learning.</p>
                </div>
                <div className="product-card">
                  <img src={upssImg} alt="UPSS" className="product-image" />
                  <h3>UPSS</h3>
                  <p>Uninterruptible Power Supply units for data protection and backup.</p>
                </div>
                <div className="product-card">
                  <img src={monitorsImg} alt="Monitors" className="product-image" />
                  <h3>Monitors</h3>
                  <p>LED, IPS, curved, and 4K monitors for productivity and gaming.</p>
                </div>
                <div className="product-card">
                  <img src={inkCartridgesImg} alt="Ink Cartridges" className="product-image" />
                  <h3>Ink Cartridges</h3>
                  <p>Compatible and OEM ink cartridges for all printer models.</p>
                </div>
                <div className="product-card">
                  <img src={tonerCartridgesImg} alt="Toner Cartridges" className="product-image" />
                  <h3>Toner Cartridges</h3>
                  <p>High-yield toner for laser printers — cost-effective and reliable.</p>
                </div>
                <div className="product-card">
                  <img src={cablesImg} alt="Cables" className="product-image" />
                  <h3>Cables & Adapters</h3>
                  <p>HDMI, USB-C, Ethernet, VGA, and power cables for all devices.</p>
                </div>
                <div className="product-card">
                  <img src={cleaningKitsImg} alt="Cleaning Kits" className="product-image" />
                  <h3>Computer Cleaning Kits</h3>
                  <p>Screen wipes, dusting kits, and keyboard cleaners for hygiene.</p>
                </div>
                <div className="product-card">
                  <img src={serversImg} alt="Servers" className="product-image" />
                  <h3>Servers</h3>
                  <p>Workstation, rack-mount, and cloud-ready servers for businesses.</p>
                </div>
                <div className="product-card">
                  <img src={workstationsImg} alt="Workstations" className="product-image" />
                  <h3>Workstations</h3>
                  <p>High-performance computers for CAD, engineering, and design.</p>
                </div>
                <div className="product-card">
                  <img src={tabletsImg} alt="Tablets" className="product-image" />
                  <h3>Tablets</h3>
                  <p>Android, iOS, and Windows tablets for education and field use.</p>
                </div>
                <div className="product-card">
                  <img src={projectorsImg} alt="Projectors" className="product-image" />
                  <h3>Projectors</h3>
                  <p>DLP, LCD, and LED projectors for classrooms and meetings.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>🌟 Why Choose Mahega for ICT Equipment?</h2>
              <ul className="benefit-list">
                <li>✔ Certified genuine products — no counterfeit or fake hardware</li>
                <li>✔ Bulk discounts for schools, universities, and government offices</li>
                <li>✔ Trade-in program for old equipment — upgrade at lower cost</li>
                <li>✔ On-site installation and network setup by our technicians</li>
                <li>✔ 1-year warranty on all new devices</li>
                <li>✔ Technical support and repair services available</li>
              </ul>
            </section>

            <section className="cta-box">
              <h2>📲 Speak to Our ICT Team</h2>
              <p>Get advice on the right setup for your team or classroom.</p>
              <button className="btn-primary">Schedule Consultation</button>
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
                  placeholder="Your Message (e.g., device type, quantity, school name)" 
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

export default Computers;