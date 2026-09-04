// src/Pages/Products/Furniture.js
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/furniture.css';

// HERO IMAGES
import heroFurniture1 from '../../images/office desk chair.jpeg';
import heroFurniture2 from '../../images/lounge.jpeg';
import heroFurniture3 from '../../images/restarunt sents2.jpeg';

// FEATURE / BENEFIT IMAGES
import keyFeaturesImg from '../../images/office desk.jpeg';
import whyChooseImg from '../../images/ergonomic.jpeg';

// PRODUCT IMAGES
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
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    heroFurniture1,
    heroFurniture2,
    heroFurniture3
  ];

  // CHANGE HERO IMAGE EVERY 5 SECONDS
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
    <div className="furniture-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="furniture-hero">

        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`furniture-hero-slide ${
              index === heroIndex ? 'active' : ''
            }`}
          >
            <img
              src={image}
              alt="Mahega furniture"
            />
          </div>
        ))}

        <div className="furniture-hero-overlay"></div>

        <div className="furniture-hero-content">

          <div className="hero-gold-line"></div>

          <h1>Premium Furniture for Work & Hospitality</h1>

          <p>
            Durable, stylish, and ergonomic furniture for offices,
            hotels, schools, and conference centers — customizable
            to your space, brand, and budget.
          </p>

          <div className="hero-buttons">
            <a href="#furniture-products" className="hero-btn hero-btn-gold">
              Explore Furniture
            </a>

            <a href="#furniture-contact" className="hero-btn hero-btn-outline">
              Request a Quote
            </a>
          </div>

        </div>

        {/* HERO INDICATORS */}
        <div className="hero-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-indicator ${
                index === heroIndex ? 'active' : ''
              }`}
              onClick={() => setHeroIndex(index)}
              aria-label={`Show furniture image ${index + 1}`}
            ></button>
          ))}
        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="furniture-main-content">

        {/* =================================================
            INTRO
        ================================================= */}
        <section className="furniture-intro section-spacing">

          <div className="section-heading">

            <span>FURNITURE SOLUTIONS</span>

            <h2>
              Quality Furniture for Professional Spaces
            </h2>

            <div className="heading-line"></div>

          </div>

          <p>
            We provide reliable furniture solutions designed for
            offices, hotels, schools, restaurants, conference
            centers and other professional environments.
          </p>

        </section>


        {/* =================================================
            STATS
        ================================================= */}
        <section className="product-stats">

          <div className="stat-box">
            <div className="stat-number">200+</div>
            <h3>Designs</h3>
            <p>Furniture designs available</p>
          </div>

          <div className="stat-box">
            <div className="stat-number">Local</div>
            <h3>Manufacturing</h3>
            <p>Locally produced solutions</p>
          </div>

          <div className="stat-box">
            <div className="stat-number">Free</div>
            <h3>Assembly</h3>
            <p>Professional assembly support</p>
          </div>

          <div className="stat-box">
            <div className="stat-number">5-Year</div>
            <h3>Warranty</h3>
            <p>Structural warranty coverage</p>
          </div>

        </section>


        {/* =================================================
            KEY FEATURES
            IMAGE LEFT - CONTENT RIGHT
        ================================================= */}
        <section className="info-section section-spacing">

          <div className="info-image">

            <img
              src={keyFeaturesImg}
              alt="Furniture key features"
            />

          </div>

          <div className="info-content">

            <span className="section-label">
              KEY FEATURES
            </span>

            <h2>
              Furniture Built Around Your Needs
            </h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              Our furniture combines durability, functionality
              and professional design to meet the demands of
              modern workplaces and hospitality environments.
            </p>

            <ul className="feature-list">

              <li>
                <strong>Durable Materials</strong>
                <span>
                  Wood, metal and hybrid designs built for
                  long-term commercial use.
                </span>
              </li>

              <li>
                <strong>Custom Designs</strong>
                <span>
                  Custom sizing, colors and upholstery to
                  complement your brand.
                </span>
              </li>

              <li>
                <strong>Commercial Grade Quality</strong>
                <span>
                  Fire-retardant fabrics and commercial-grade
                  materials for professional environments.
                </span>
              </li>

              <li>
                <strong>Warranty Protection</strong>
                <span>
                  Five-year structural warranty on qualifying
                  furniture products.
                </span>
              </li>

              <li>
                <strong>Sustainable Options</strong>
                <span>
                  Eco-friendly finishes and sustainable wood
                  options available.
                </span>
              </li>

              <li>
                <strong>Bulk Pricing</strong>
                <span>
                  Competitive pricing for offices, hotels,
                  schools and institutions.
                </span>
              </li>

            </ul>

          </div>

        </section>


        {/* =================================================
            PRODUCT CATEGORIES
        ================================================= */}
        <section
          id="furniture-products"
          className="products-section section-spacing"
        >

          <div className="section-heading">

            <span>OUR PRODUCTS</span>

            <h2>
              Furniture Categories
            </h2>

            <div className="heading-line"></div>

          </div>

          <div className="product-grid">

            <div className="product-card">
              <img
                src={officeDesksChairsImg}
                alt="Office Desks and Chairs"
                className="product-image"
              />
              <h3>Office Desks & Chairs</h3>
              <p>
                Ergonomic seating and executive workstations.
              </p>
            </div>

            <div className="product-card">
              <img
                src={receptionLoungeImg}
                alt="Reception and Lounge"
                className="product-image"
              />
              <h3>Reception & Lounge</h3>
              <p>
                Sofas, coffee tables and waiting area sets.
              </p>
            </div>

            <div className="product-card">
              <img
                src={hotelRestaurantImg}
                alt="Hotel and Restaurant Furniture"
                className="product-image"
              />
              <h3>Hotel & Restaurant</h3>
              <p>
                Dining sets, bar stools and banquet chairs.
              </p>
            </div>

            <div className="product-card">
              <img
                src={storageFilingImg}
                alt="Storage and Filing"
                className="product-image"
              />
              <h3>Storage & Filing</h3>
              <p>
                Cabinets, shelves, bookcases and lockers.
              </p>
            </div>

            <div className="product-card">
              <img
                src={executiveDesksImg}
                alt="Executive Desks"
                className="product-image"
              />
              <h3>Executive Desks</h3>
              <p>
                Luxury finishes, cable management and storage.
              </p>
            </div>

            <div className="product-card">
              <img
                src={ergonomicChairsImg}
                alt="Ergonomic Chairs"
                className="product-image"
              />
              <h3>Ergonomic Chairs</h3>
              <p>
                Adjustable lumbar, headrest and arm support.
              </p>
            </div>

            <div className="product-card">
              <img
                src={conferenceTablesImg}
                alt="Conference Tables"
                className="product-image"
              />
              <h3>Conference Tables</h3>
              <p>
                Round, oval and rectangular tables with
                power and data ports.
              </p>
            </div>

            <div className="product-card">
              <img
                src={waitingAreaSetsImg}
                alt="Waiting Area Sets"
                className="product-image"
              />
              <h3>Waiting Area Sets</h3>
              <p>
                Modular, comfortable and space-efficient.
              </p>
            </div>

            <div className="product-card">
              <img
                src={hotelBedsImg}
                alt="Hotel Beds"
                className="product-image"
              />
              <h3>Hotel Beds</h3>
              <p>
                Platform, divan and headboard sets.
              </p>
            </div>

            <div className="product-card">
              <img
                src={restaurantDiningSetsImg}
                alt="Restaurant Dining Sets"
                className="product-image"
              />
              <h3>Restaurant Dining Sets</h3>
              <p>
                Commercial-grade tables and chairs.
              </p>
            </div>

            <div className="product-card">
              <img
                src={barStoolsImg}
                alt="Bar Stools"
                className="product-image"
              />
              <h3>Bar Stools</h3>
              <p>
                Fixed or swivel designs with different
                backrest options.
              </p>
            </div>

            <div className="product-card">
              <img
                src={banquetChairsImg}
                alt="Banquet Chairs"
                className="product-image"
              />
              <h3>Banquet Chairs</h3>
              <p>
                Chiavari, folding and padded chairs.
              </p>
            </div>

            <div className="product-card">
              <img
                src={filingCabinetsImg}
                alt="Filing Cabinets"
                className="product-image"
              />
              <h3>Filing Cabinets</h3>
              <p>
                Lockable steel or wood-finish cabinets.
              </p>
            </div>

            <div className="product-card">
              <img
                src={bookshelvesImg}
                alt="Bookshelves"
                className="product-image"
              />
              <h3>Bookshelves</h3>
              <p>
                Wall-mounted, freestanding and modular units.
              </p>
            </div>

            <div className="product-card">
              <img
                src={lockersImg}
                alt="Lockers"
                className="product-image"
              />
              <h3>Lockers</h3>
              <p>
                Storage solutions for schools, gyms and offices.
              </p>
            </div>

            <div className="product-card">
              <img
                src={modularShelvingImg}
                alt="Modular Shelving"
                className="product-image"
              />
              <h3>Modular Shelving</h3>
              <p>
                Customizable storage for retail and office use.
              </p>
            </div>

          </div>

        </section>


        {/* =================================================
            WHY CHOOSE MAHEGA
            IMAGE LEFT - CONTENT RIGHT
        ================================================= */}
        <section className="info-section section-spacing">

          <div className="info-image">

            <img
              src={whyChooseImg}
              alt="Why choose Mahega furniture"
            />

          </div>

          <div className="info-content">

            <span className="section-label">
              WHY CHOOSE MAHEGA
            </span>

            <h2>
              A Reliable Furniture Partner
            </h2>

            <div className="heading-line heading-line-left"></div>

            <p className="section-description">
              We combine quality products, professional support
              and dependable delivery to make furniture
              procurement easier for our customers.
            </p>

            <ul className="benefit-list">

              <li>
                Free space planning and 3D layout design.
              </li>

              <li>
                On-time delivery and professional installation.
              </li>

              <li>
                Bulk discounts for hotels, schools and offices.
              </li>

              <li>
                Local manufacturing for faster turnaround
                and support.
              </li>

              <li>
                After-sales service and spare parts support.
              </li>

              <li>
                Samples available before full orders.
              </li>

            </ul>

          </div>

        </section>


        {/* =================================================
            CTA
        ================================================= */}
        <section className="cta-box section-spacing">

          <div className="cta-content">

            <span className="section-label">
              SPACE PLANNING
            </span>

            <h2>
              Get a Free Space Design
            </h2>

            <p>
              Send us your floor plan and our team will help
              suggest a practical furniture layout for your
              space.
            </p>

            <button className="btn-primary">
              Upload Floor Plan
            </button>

          </div>

        </section>


        {/* =================================================
            CONTACT FORM
        ================================================= */}
        <section
          id="furniture-contact"
          className="contact-form-section section-spacing"
        >

          <div className="section-heading">

            <span>GET IN TOUCH</span>

            <h2>
              Request a Furniture Quote
            </h2>

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
              placeholder="Tell us your space type, number of people, and preferred style..."
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-primary form-button"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Request'}
            </button>

          </form>

        </section>

      </main>

    </div>
  );
}

export default Furniture;