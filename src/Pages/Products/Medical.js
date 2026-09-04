import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/medical.css';

// Medical product images
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
  const [heroIndex, setHeroIndex] = useState(0);

  /*
   * Use existing medical images for the hero.
   * This avoids depending on external URLs or missing image files.
   */
  const heroImages = [
    ppeKitsImg,
    medicalConsumablesImg,
    diagnosticMonitoringImg
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
        {
          name,
          email,
          message
        },
        'user_789def012'
      )
      .then(() => {
        alert("Message sent successfully! We'll contact you soon.");
        e.target.reset();
      })
      .catch(() => {
        alert(
          'Failed to send. Please try again or contact us via WhatsApp.'
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="medical-page">

      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(17, 20, 21, 0.78),
              rgba(17, 20, 21, 0.78)
            ),
            url("${heroImages[heroIndex]}")
          `
        }}
      >
        <div className="hero-content">
          <span className="hero-label">MAHEGA GENERAL SUPPLIERS LIMITED</span>

          <h1>Medical Consumables & PPE</h1>

          <p>
            Certified supplies for hospitals, clinics, laboratories,
            offices, and NGOs across Uganda.
          </p>

          <div className="hero-indicators">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`hero-dot ${
                  heroIndex === index ? 'active' : ''
                }`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="page-content">
        <div className="content-layout medical-full-width">

          <main className="main-content medical-main-content">

            {/* INTRODUCTION */}
            <section className="intro-section">
              <div className="section-label">MEDICAL SUPPLIES</div>

              <h2>
                Trusted Supplies for Clinics, Hospitals & Offices
              </h2>

              <p>
                We provide certified medical-grade consumables and personal
                protective equipment, ensuring safety, compliance, and peace
                of mind for healthcare and non-healthcare settings.
              </p>
            </section>

            {/* STATS */}
            <section className="product-stats">

              <div className="stat-box">
                <h3>100+</h3>
                <p>Health Facilities</p>
              </div>

              <div className="stat-box">
                <h3>WHO & UNBS</h3>
                <p>Compliant</p>
              </div>

              <div className="stat-box">
                <h3>Emergency</h3>
                <p>Delivery</p>
              </div>

            </section>

            {/* KEY FEATURES */}
            <section className="information-section">

              <div className="information-image">
                <img
                  src={ppeKitsImg}
                  alt="Medical PPE supplies"
                />
              </div>

              <div className="information-card">

                <div className="section-label">
                  OUR CAPABILITIES
                </div>

                <h2>Key Features</h2>

                <p className="information-intro">
                  Reliable medical supply solutions designed for
                  healthcare facilities, institutions and organizations.
                </p>

                <ul className="feature-list">
                  <li>
                    Full batch numbers and expiry date tracking for every item
                  </li>

                  <li>
                    Bulk packs and institutional pricing for hospitals and offices
                  </li>

                  <li>
                    Temperature-controlled transport for sensitive diagnostics
                  </li>

                  <li>
                    Custom donation packs for NGOs and community health programs
                  </li>

                  <li>
                    MOH-registered supplier with valid import permits
                  </li>

                  <li>
                    24/7 emergency support for critical supply needs
                  </li>
                </ul>

              </div>

            </section>

            {/* PRODUCT CATEGORIES */}
            <section className="products-section">

              <div className="section-heading">
                <div className="section-label">
                  OUR PRODUCTS
                </div>

                <h2>Medical Product Categories</h2>

                <p>
                  Quality medical consumables and protective equipment
                  suitable for healthcare and institutional use.
                </p>
              </div>

              <div className="product-grid">

                <div className="product-card">
                  <img
                    src={ppeKitsImg}
                    alt="PPE Kits"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>PPE Kits</h3>
                    <p>
                      Masks, gloves, gowns, face shields and goggles.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={medicalConsumablesImg}
                    alt="Medical Consumables"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Medical Consumables</h3>
                    <p>
                      Syringes, swabs, bandages, IV sets and catheters.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={sanitizersDisinfectantsImg}
                    alt="Sanitizers and Disinfectants"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Sanitizers & Disinfectants</h3>
                    <p>
                      Hand sanitizer, surface disinfectant, wipes and sprays.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={diagnosticMonitoringImg}
                    alt="Diagnostic and Monitoring"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Diagnostic & Monitoring</h3>
                    <p>
                      Thermometers, BP kits, glucometers and pulse oximeters.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={surgicalMasksImg}
                    alt="Surgical Masks"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Surgical Masks</h3>
                    <p>
                      3-ply, ASTM Level 1–3 and individually wrapped.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={nitrileGlovesImg}
                    alt="Nitrile Gloves"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Nitrile Gloves</h3>
                    <p>
                      Non-latex, powder-free and examination grade.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={isolationGownsImg}
                    alt="Isolation Gowns"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Isolation Gowns</h3>
                    <p>
                      Fluid-resistant and disposable protective gowns.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={faceShieldsImg}
                    alt="Face Shields"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Face Shields</h3>
                    <p>
                      Anti-fog, wrap-around and reusable options.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={syringesImg}
                    alt="Syringes"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Syringes</h3>
                    <p>
                      Luer-lock and slip-tip syringes from 1ml to 60ml.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={bandagesImg}
                    alt="Bandages and Dressings"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Bandages & Dressings</h3>
                    <p>
                      Gauze, adhesive, sterile and non-woven dressings.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={ivSetsImg}
                    alt="IV Sets"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>IV Sets</h3>
                    <p>
                      IV sets with or without burette options.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={cathetersImg}
                    alt="Catheters"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Catheters</h3>
                    <p>
                      Foley, intermittent, pediatric and adult sizes.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={handSanitizerImg}
                    alt="Hand Sanitizer"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Hand Sanitizer</h3>
                    <p>
                      Gel and liquid sanitizer in multiple sizes.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={surfaceDisinfectantImg}
                    alt="Surface Disinfectant"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Surface Disinfectant</h3>
                    <p>
                      Hospital-grade surface disinfectant.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={disinfectantWipesImg}
                    alt="Disinfectant Wipes"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Disinfectant Wipes</h3>
                    <p>
                      Pre-saturated, ready-to-use disinfectant wipes.
                    </p>
                  </div>
                </div>

                <div className="product-card">
                  <img
                    src={digitalThermometersImg}
                    alt="Digital Thermometers"
                    className="product-image"
                  />
                  <div className="product-card-content">
                    <h3>Digital Thermometers</h3>
                    <p>
                      Oral, infrared, forehead and ear models.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* WHY CHOOSE MAHEGA */}
            <section className="information-section why-section">

              <div className="information-card">

                <div className="section-label">
                  WHY MAHEGA
                </div>

                <h2>Why Choose Mahega</h2>

                <p className="information-intro">
                  We focus on dependable supply, quality assurance and
                  responsive service for organizations across Uganda.
                </p>

                <ul className="benefit-list">
                  <li>
                    Ministry of Health registered medical supplier
                  </li>

                  <li>
                    Just-in-time delivery for urgent requirements
                  </li>

                  <li>
                    Inventory management support for clinics and hospitals
                  </li>

                  <li>
                    Products supplied with relevant compliance documentation
                  </li>

                  <li>
                    Dedicated account management for large institutions
                  </li>

                  <li>
                    Nationwide delivery with cold-chain options
                  </li>
                </ul>

              </div>

              <div className="information-image">
                <img
                  src={diagnosticMonitoringImg}
                  alt="Medical diagnostic equipment"
                />
              </div>

            </section>

            {/* CTA */}
            <section className="cta-box">

              <div>
                <div className="section-label">
                  MEDICAL SUPPLY SUPPORT
                </div>

                <h2>Request Emergency Medical Supply</h2>

                <p>
                  Contact us for urgent delivery of critical medical
                  supplies and protective equipment.
                </p>
              </div>

              <button className="btn-primary">
                Contact Now
              </button>

            </section>

            {/* CONTACT FORM */}
            <section className="contact-form-section">

              <div className="section-label">
                GET IN TOUCH
              </div>

              <h2>Request Medical Supply Quote</h2>

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