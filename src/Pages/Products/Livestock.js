import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../style/livestock.css';

// Livestock images
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

  // Hero background images
  const heroImages = [
    animalFeedImg,
    cattleFeedImg,
    poultryFeedImg,
    housingFencingImg,
    hygieneCareImg
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  // Change hero image automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((previousIndex) =>
        (previousIndex + 1) % heroImages.length
      );
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
        alert(
          'Message sent successfully! We will contact you soon.'
        );
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
    <div className="livestock-page">

      {/* HERO SECTION */}
      <section
        className="livestock-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.62),
              rgba(0, 0, 0, 0.62)
            ),
            url("${heroImages[heroIndex]}")
          `
        }}
      >
        <div className="hero-content">
          <h1>Livestock Supplies & Solutions</h1>

          <p>
            Quality feed, veterinary supplies, fencing, housing and
            farm equipment for productive and healthy livestock farming.
          </p>

          <div className="hero-indicators">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={
                  index === heroIndex
                    ? 'hero-dot active'
                    : 'hero-dot'
                }
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="page-content">

        <div className="content-layout livestock-full-width">

          <main className="main-content livestock-main-content">

            {/* INTRODUCTION */}
            <section className="intro-section">
              <h2>
                Complete Solutions for Animal Farming
              </h2>

              <p>
                From feed and veterinary supplies to fencing and
                livestock housing, Mahega General Suppliers Limited
                provides dependable products for cattle, goats,
                poultry, pigs and other livestock enterprises.
              </p>
            </section>

            {/* STATS */}
            <section className="product-stats">

              <div className="stat-box">
                <h3>300+</h3>
                <p>Farms Supported</p>
              </div>

              <div className="stat-box">
                <h3>Quality</h3>
                <p>Assured Products</p>
              </div>

              <div className="stat-box">
                <h3>Farm Gate</h3>
                <p>Delivery</p>
              </div>

            </section>

            {/* KEY FEATURES */}
            <section className="information-section">

              <div className="information-image">
                <img
                  src={animalFeedImg}
                  alt="Livestock feed and farming supplies"
                />
              </div>

              <div className="information-content">

                <h2>Key Features</h2>

                <ul className="feature-list">
                  <li>
                    Scientifically formulated feeds for different
                    animal types and growth stages.
                  </li>

                  <li>
                    Veterinary supplies, dewormers and supplements
                    sourced from reliable suppliers.
                  </li>

                  <li>
                    Support for livestock housing, fencing,
                    water systems and feeding equipment.
                  </li>

                  <li>
                    Group discounts for cooperatives and farmer groups.
                  </li>

                  <li>
                    Reliable delivery for farm and commercial
                    livestock operations.
                  </li>

                  <li>
                    Practical guidance on nutrition, animal care
                    and farm supply requirements.
                  </li>
                </ul>

              </div>

            </section>

            {/* PRODUCT CATEGORIES */}
            <section className="products-section">

              <h2>Product Categories</h2>

              <div className="product-grid">

                <div className="product-card">
                  <img
                    src={animalFeedImg}
                    alt="Animal Feed"
                    className="product-image"
                  />
                  <h3>Animal Feed</h3>
                  <p>
                    Cattle, goat, poultry, pig and fish feeds
                    for different growth stages.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={vaccinesMedsImg}
                    alt="Vaccines and Medications"
                    className="product-image"
                  />
                  <h3>Vaccines & Medications</h3>
                  <p>
                    Veterinary medicines, supplements,
                    dewormers and other livestock care products.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={housingFencingImg}
                    alt="Housing and Fencing"
                    className="product-image"
                  />
                  <h3>Housing & Fencing</h3>
                  <p>
                    Wire mesh, posts, water troughs, feeders
                    and livestock housing materials.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={hygieneCareImg}
                    alt="Hygiene and Care"
                    className="product-image"
                  />
                  <h3>Hygiene & Care</h3>
                  <p>
                    Disinfectants, hoof care products,
                    milking equipment and grooming supplies.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={cattleFeedImg}
                    alt="Cattle Feed"
                    className="product-image"
                  />
                  <h3>Cattle Feed</h3>
                  <p>
                    High-energy dairy and beef feed formulations.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={poultryFeedImg}
                    alt="Poultry Feed"
                    className="product-image"
                  />
                  <h3>Poultry Feed</h3>
                  <p>
                    Broiler, layer and chick feeds with
                    balanced nutrition.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={pigFeedImg}
                    alt="Pig Feed"
                    className="product-image"
                  />
                  <h3>Pig Feed</h3>
                  <p>
                    Creep, grower and finisher rations.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={fishFeedImg}
                    alt="Fish Feed"
                    className="product-image"
                  />
                  <h3>Fish Feed</h3>
                  <p>
                    Floating and sinking pellets for
                    tilapia and catfish.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={dewormersImg}
                    alt="Dewormers"
                    className="product-image"
                  />
                  <h3>Dewormers</h3>
                  <p>
                    Oral and injectable products for
                    parasite management.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={antibioticsImg}
                    alt="Antibiotics"
                    className="product-image"
                  />
                  <h3>Antibiotics</h3>
                  <p>
                    Veterinary treatments for livestock
                    health management.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={supplementsImg}
                    alt="Vitamin Supplements"
                    className="product-image"
                  />
                  <h3>Supplements</h3>
                  <p>
                    Mineral supplements, vitamins and
                    electrolytes.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={injectablesImg}
                    alt="Injectable Medicines"
                    className="product-image"
                  />
                  <h3>Injectable Medicines</h3>
                  <p>
                    Veterinary vaccines and treatments
                    in sterile containers.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={wireMeshFencingImg}
                    alt="Wire Mesh Fencing"
                    className="product-image"
                  />
                  <h3>Wire Mesh Fencing</h3>
                  <p>
                    Galvanized and rust-resistant fencing
                    for livestock enclosures.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={livestockPostsImg}
                    alt="Livestock Posts"
                    className="product-image"
                  />
                  <h3>Livestock Posts</h3>
                  <p>
                    Concrete and treated timber posts
                    for durable fencing.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={waterTroughsImg}
                    alt="Water Troughs"
                    className="product-image"
                  />
                  <h3>Water Troughs</h3>
                  <p>
                    Plastic and metal troughs in different
                    capacities.
                  </p>
                </div>

                <div className="product-card">
                  <img
                    src={feedersImg}
                    alt="Animal Feeders"
                    className="product-image"
                  />
                  <h3>Animal Feeders</h3>
                  <p>
                    Manual and automatic feeders designed
                    to reduce waste.
                  </p>
                </div>

              </div>

            </section>

            {/* WHY CHOOSE MAHEGA */}
            <section className="information-section why-mahega">

              <div className="information-image">
                <img
                  src={housingFencingImg}
                  alt="Livestock farming solutions"
                />
              </div>

              <div className="information-content">

                <h2>Why Choose Mahega?</h2>

                <ul className="benefit-list">

                  <li>
                    Reliable supply of quality livestock
                    products and equipment.
                  </li>

                  <li>
                    Practical support for selecting suitable
                    farm supplies.
                  </li>

                  <li>
                    Dependable farm-gate delivery across Uganda.
                  </li>

                  <li>
                    Quality-assured products with proper
                    product tracking.
                  </li>

                  <li>
                    Competitive pricing for individual farmers,
                    businesses and farmer groups.
                  </li>

                  <li>
                    Dedicated support for growing livestock
                    enterprises.
                  </li>

                </ul>

              </div>

            </section>

            {/* CTA */}
            <section className="cta-box">

              <h2>Request a Livestock Supply Plan</h2>

              <p>
                Tell us your animal type, quantity and
                requirements and we will prepare a suitable
                supply package.
              </p>

              <button className="btn-primary">
                Get Custom Plan
              </button>

            </section>

            {/* CONTACT FORM */}
            <section className="contact-form-section">

              <h2>Contact Livestock Supply Team</h2>

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
                  placeholder="Tell us your farm location, animal types, numbers and current requirements..."
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