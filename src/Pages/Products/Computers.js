// src/Pages/Products/Computers.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/computers.css';

// IMPORT COMPUTER PRODUCT IMAGES
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

    emailjs
      .send(
        'service_xyz123',
        'template_abc456',
        { name, email, message },
        'user_789def012'
      )
      .then(() => {
        alert('Message sent successfully! We’ll contact you soon.');
        e.target.reset();
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="computers-page">

      {/* ================= HERO ================= */}
      <section className="computers-hero">

        <div className="computers-hero-slide computers-slide-one">
          <img src={laptopsImg} alt="Laptops and computers" />
        </div>

        <div className="computers-hero-slide computers-slide-two">
          <img src={desktopsImg} alt="Desktop computers" />
        </div>

        <div className="computers-hero-slide computers-slide-three">
          <img src={serversImg} alt="Business servers" />
        </div>

        <div className="computers-hero-overlay"></div>

        <div className="computers-hero-content">

          <div className="hero-gold-line"></div>

          <h1>Reliable ICT Equipment & Technology Solutions</h1>

          <p>
            Quality computers, printers, networking equipment and accessories
            for offices, schools, institutions and businesses across Uganda.
          </p>

          <div className="hero-buttons">

            <a
              href="#computer-products"
              className="hero-btn hero-btn-gold"
            >
              Explore Products
            </a>

            <a
              href="#computer-contact"
              className="hero-btn hero-btn-outline"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="computers-main-content">

        {/* ================= INTRO ================= */}
        <section className="computers-intro section-spacing">

          <div className="section-heading">

            <span>MAHEGA ICT SOLUTIONS</span>

            <h2>Reliable ICT Equipment for Modern Workplaces</h2>

            <div className="heading-line"></div>

          </div>

          <p>
            We supply brand-new and certified refurbished computers, printers,
            networking equipment and accessories tailored for offices, schools,
            institutions and businesses across Uganda.
          </p>

        </section>

        {/* ================= STATS ================= */}
        <section className="product-stats">

          <div className="stat-box">
            <div className="stat-icon">100+</div>
            <h3>Models</h3>
            <p>Computer Models Available</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">50+</div>
            <h3>Printers</h3>
            <p>Printer Types Available</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">1Y</div>
            <h3>Warranty</h3>
            <p>Warranty on New Devices</p>
          </div>

          <div className="stat-box">
            <div className="stat-icon">UG</div>
            <h3>Uganda</h3>
            <p>Delivery Across Uganda</p>
          </div>

        </section>

        {/* ================= KEY FEATURES ================= */}
        <section className="info-section section-spacing">

          <div className="info-image">
            <img
              src={laptopsImg}
              alt="Mahega computer and ICT equipment"
            />
          </div>

          <div className="info-content">

            <span className="section-label">
              QUALITY TECHNOLOGY
            </span>

            <h2>Key Features</h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              Our ICT solutions are designed to provide dependable technology
              for modern organizations, educational institutions and businesses.
            </p>

            <ul className="feature-list">

              <li>
                <strong>Genuine licensed software</strong>
                <span>
                  Reliable systems configured with appropriate software
                  solutions.
                </span>
              </li>

              <li>
                <strong>On-site setup and installation</strong>
                <span>
                  Professional installation and configuration for your equipment.
                </span>
              </li>

              <li>
                <strong>Corporate leasing options</strong>
                <span>
                  Flexible equipment solutions for organizations with large
                  technology requirements.
                </span>
              </li>

              <li>
                <strong>After-sales technical support</strong>
                <span>
                  Technical assistance to keep your equipment working efficiently.
                </span>
              </li>

              <li>
                <strong>Trade-in options</strong>
                <span>
                  Upgrade older equipment through available trade-in solutions.
                </span>
              </li>

              <li>
                <strong>Bulk solutions</strong>
                <span>
                  Special solutions for schools, offices and institutions.
                </span>
              </li>

            </ul>

          </div>

        </section>

        {/* ================= PRODUCTS ================= */}
        <section
          className="products-section section-spacing"
          id="computer-products"
        >

          <div className="section-heading">

            <span>OUR PRODUCTS</span>

            <h2>ICT Product Categories</h2>

            <div className="heading-line"></div>

          </div>

          <div className="product-grid">

            <div className="product-card">
              <img src={laptopsImg} alt="Laptops" className="product-image" />
              <h3>Laptops & Notebooks</h3>
              <p>Budget-friendly to high-performance machines for different business and educational needs.</p>
            </div>

            <div className="product-card">
              <img src={desktopsImg} alt="Desktop PCs" className="product-image" />
              <h3>Desktop PCs</h3>
              <p>Tower, mini-PC and all-in-one desktops for offices, schools and homes.</p>
            </div>

            <div className="product-card">
              <img src={printersImg} alt="Printers" className="product-image" />
              <h3>Printers</h3>
              <p>Inkjet, laser, multifunction and professional printing devices.</p>
            </div>

            <div className="product-card">
              <img src={scannersImg} alt="Scanners" className="product-image" />
              <h3>Scanners</h3>
              <p>Flatbed, sheet-fed and document scanners for offices and institutions.</p>
            </div>

            <div className="product-card">
              <img src={keyboardsImg} alt="Keyboards" className="product-image" />
              <h3>Keyboards</h3>
              <p>Mechanical, wireless, ergonomic and standard keyboards.</p>
            </div>

            <div className="product-card">
              <img src={miceImg} alt="Computer Mice" className="product-image" />
              <h3>Mice</h3>
              <p>Wireless, optical, ergonomic and professional computer mice.</p>
            </div>

            <div className="product-card">
              <img src={webcamsImg} alt="Webcams" className="product-image" />
              <h3>Webcams</h3>
              <p>HD and 1080p webcams for meetings, video conferencing and online learning.</p>
            </div>

            <div className="product-card">
              <img src={upssImg} alt="UPS" className="product-image" />
              <h3>UPS</h3>
              <p>Uninterruptible power supply units for equipment protection and backup.</p>
            </div>

            <div className="product-card">
              <img src={monitorsImg} alt="Monitors" className="product-image" />
              <h3>Monitors</h3>
              <p>LED, IPS, curved and high-resolution monitors for productivity.</p>
            </div>

            <div className="product-card">
              <img src={inkCartridgesImg} alt="Ink Cartridges" className="product-image" />
              <h3>Ink Cartridges</h3>
              <p>Compatible and OEM ink cartridges for different printer models.</p>
            </div>

            <div className="product-card">
              <img src={tonerCartridgesImg} alt="Toner Cartridges" className="product-image" />
              <h3>Toner Cartridges</h3>
              <p>High-yield toner cartridges for laser printers.</p>
            </div>

            <div className="product-card">
              <img src={cablesImg} alt="Cables and Adapters" className="product-image" />
              <h3>Cables & Adapters</h3>
              <p>HDMI, USB-C, Ethernet, VGA and power cables and adapters.</p>
            </div>

            <div className="product-card">
              <img src={cleaningKitsImg} alt="Computer Cleaning Kits" className="product-image" />
              <h3>Computer Cleaning Kits</h3>
              <p>Screen wipes, dusting kits and keyboard cleaning accessories.</p>
            </div>

            <div className="product-card">
              <img src={serversImg} alt="Servers" className="product-image" />
              <h3>Servers</h3>
              <p>Business, rack-mount and high-performance server solutions.</p>
            </div>

            <div className="product-card">
              <img src={workstationsImg} alt="Workstations" className="product-image" />
              <h3>Workstations</h3>
              <p>High-performance computers for engineering, CAD, graphics and design.</p>
            </div>

            <div className="product-card">
              <img src={tabletsImg} alt="Tablets" className="product-image" />
              <h3>Tablets</h3>
              <p>Android, iOS and Windows tablets for education and field work.</p>
            </div>

            <div className="product-card">
              <img src={projectorsImg} alt="Projectors" className="product-image" />
              <h3>Projectors</h3>
              <p>DLP, LCD and LED projectors for classrooms, meetings and presentations.</p>
            </div>

          </div>

        </section>

        {/* ================= WHY CHOOSE MAHEGA ================= */}
        <section className="info-section reverse-mobile section-spacing">

          <div className="info-image">
            <img
              src={serversImg}
              alt="Mahega ICT technology solutions"
            />
          </div>

          <div className="info-content">

            <span className="section-label">
              WHY MAHEGA
            </span>

            <h2>Why Choose Mahega for ICT Equipment?</h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              We provide practical technology solutions backed by dependable
              service, technical support and equipment suited to your needs.
            </p>

            <ul className="benefit-list">

              <li>
                Certified genuine products with a focus on quality and reliability.
              </li>

              <li>
                Bulk discounts for schools, universities and organizations.
              </li>

              <li>
                Trade-in options for upgrading old equipment.
              </li>

              <li>
                On-site installation and network setup by technicians.
              </li>

              <li>
                Warranty options available on new devices.
              </li>

              <li>
                Technical support and repair services available.
              </li>

            </ul>

          </div>

        </section>

        {/* ================= CTA ================= */}
        <section className="cta-box">

          <div className="cta-content">

            <span className="section-label">
              ICT CONSULTATION
            </span>

            <h2>Speak to Our ICT Team</h2>

            <p>
              Get professional advice on the right computers, printers,
              networking equipment and technology setup for your organization.
            </p>

            <a
              href="#computer-contact"
              className="btn-primary"
            >
              Schedule Consultation
            </a>

          </div>

        </section>

        {/* ================= CONTACT ================= */}
        <section
          className="contact-form-section section-spacing"
          id="computer-contact"
        >

          <div className="section-heading">

            <span>GET IN TOUCH</span>

            <h2>Contact Us for Bulk or Custom Orders</h2>

            <div className="heading-line"></div>

          </div>

          <form
            className="contact-form"
            onSubmit={sendContactForm}
          >

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
              rows="6"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-primary form-button"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

          </form>

        </section>

      </main>
    </div>
  );
}

export default Computers;