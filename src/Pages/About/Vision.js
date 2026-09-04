// =========================================================
// MAHEGA GENERAL SUPPLIERS LIMITED
// VISION PAGE
// NAVY BLUE + WHITE THEME
// =========================================================

import React from "react";

import {
  Globe2,
  Smartphone,
  Leaf,
  Users,
  TrendingUp,
  Target,
  ShieldCheck,
  Lightbulb,
  Handshake,
  ArrowRight,
} from "lucide-react";

import "../../style/Vision.css";

// =========================================================
// IMAGES FROM src/images
// =========================================================

import heroImage1 from "../../images/hero-bg1.jpg";
import heroImage2 from "../../images/office chairs.jpg";
import heroImage3 from "../../images/lounge.jpeg";

import visionImage from "../../images/restarunt sents2.jpeg";

// =========================================================
// STRATEGIC PILLARS
// =========================================================

const strategicPillars = [
  {
    icon: <Globe2 size={25} />,
    number: "01",
    title: "Regional Expansion",
    description:
      "Expand our supply and logistics capabilities across Uganda and the wider East African market, including Kenya, Tanzania, and Rwanda.",
  },
  {
    icon: <Smartphone size={25} />,
    number: "02",
    title: "Digital Transformation",
    description:
      "Use technology to make ordering, communication, procurement, inventory management, and logistics more efficient and accessible.",
  },
  {
    icon: <Leaf size={25} />,
    number: "03",
    title: "Sustainable Sourcing",
    description:
      "Promote responsible, ethical, and sustainable sourcing practices while supporting suppliers and businesses that create positive impact.",
  },
  {
    icon: <Users size={25} />,
    number: "04",
    title: "SME Empowerment",
    description:
      "Help small and medium-sized businesses access dependable products, supply networks, and practical procurement solutions at competitive value.",
  },
];

// =========================================================
// 2030 GOALS
// =========================================================

const visionGoals = [
  {
    icon: <Target size={23} />,
    title: "Regional Reach",
    text:
      "Build a stronger presence across key East African markets.",
  },
  {
    icon: <Lightbulb size={23} />,
    title: "Innovation",
    text:
      "Continuously improve our services through technology and new ideas.",
  },
  {
    icon: <ShieldCheck size={23} />,
    title: "Trusted Quality",
    text:
      "Become recognized for dependable products and professional service.",
  },
  {
    icon: <Handshake size={23} />,
    title: "Strong Partnerships",
    text:
      "Develop long-term relationships with clients and suppliers.",
  },
];

// =========================================================
// VISION COMPONENT
// =========================================================

function Vision() {
  return (
    <main className="vision-page">

      {/* ===================================================
          HERO
      ==================================================== */}

      <section className="vision-hero">

        <div className="vision-slideshow">

          <div
            className="vision-slide"
            style={{
              backgroundImage: `url(${heroImage1})`,
            }}
          />

          <div
            className="vision-slide"
            style={{
              backgroundImage: `url(${heroImage2})`,
            }}
          />

          <div
            className="vision-slide"
            style={{
              backgroundImage: `url(${heroImage3})`,
            }}
          />

        </div>

        <div className="vision-hero-overlay" />

        <div className="vision-hero-content">

          <span className="vision-eyebrow">
            OUR FUTURE
          </span>

          <h1>
            Our <span>Vision</span>
          </h1>

          <p>
            Building a trusted, innovative, and customer-focused
            supply partner for East Africa.
          </p>

          <div className="vision-hero-line" />

        </div>

      </section>

      {/* ===================================================
          INTRODUCTION
      ==================================================== */}

      <section className="vision-introduction">

        <div className="vision-container">

          <div className="vision-intro-grid">

            <div className="vision-intro-content">

              <span className="vision-small-title">
                WHERE WE ARE GOING
              </span>

              <h2>
                To Be East Africa's{" "}
                <strong>Leading Supply Partner</strong>
              </h2>

              <div className="vision-heading-line" />

              <p className="vision-lead">
                We envision Mahega General Suppliers Limited
                as one of the most innovative, reliable, and
                customer-centric supply chain solutions providers
                in East Africa.
              </p>

              <p>
                Our vision is built around creating a supply
                network that connects businesses, institutions,
                suppliers, and communities with dependable
                products and efficient logistics solutions.
              </p>

              <p>
                As we grow, we will continue investing in
                technology, people, partnerships, and systems
                that enable us to serve clients more effectively
                and create lasting value.
              </p>

            </div>

            <div className="vision-intro-image">

              <img
                src={visionImage}
                alt="Mahega vision and supply operations"
              />

              <div className="vision-image-overlay" />

              <div className="vision-image-label">

                <span>
                  LOOKING AHEAD
                </span>

                <strong>
                  Building East Africa's Future
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          VISION STATEMENT
      ==================================================== */}

      <section className="vision-statement-section">

        <div className="vision-container">

          <div className="vision-statement-card">

            <div className="vision-statement-icon">
              <TrendingUp size={30} />
            </div>

            <span>
              OUR 2030 VISION
            </span>

            <h2>
              Growing With Purpose,
              <br />
              <strong>Serving With Excellence</strong>
            </h2>

            <div className="vision-heading-line centered-line" />

            <p>
              By 2030, Mahega General Suppliers Limited aims
              to be recognized as a dependable and innovative
              supply partner across East Africa, delivering
              quality products, efficient logistics, and
              customer-focused solutions.
            </p>

          </div>

        </div>

      </section>

      {/* ===================================================
          STRATEGIC PILLARS
      ==================================================== */}

      <section className="strategic-section">

        <div className="vision-container">

          <div className="vision-section-heading">

            <span>
              OUR STRATEGY
            </span>

            <h2>
              Our Strategic{" "}
              <strong>Pillars</strong>
            </h2>

            <div className="vision-heading-line centered-line" />

            <p>
              Our growth is guided by four strategic priorities
              that will help us build a stronger and more
              sustainable supply network.
            </p>

          </div>

          <div className="strategic-grid">

            {strategicPillars.map((pillar) => (

              <article
                className="strategic-card"
                key={pillar.number}
              >

                <div className="strategic-card-top">

                  <div className="strategic-icon">
                    {pillar.icon}
                  </div>

                  <span>
                    {pillar.number}
                  </span>

                </div>

                <h3>
                  {pillar.title}
                </h3>

                <div className="strategic-line" />

                <p>
                  {pillar.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
          2030 GOALS
      ==================================================== */}

      <section className="vision-goals-section">

        <div className="vision-container">

          <div className="vision-goals-grid">

            <div className="vision-goals-content">

              <span className="vision-small-title">
                OUR GOALS
              </span>

              <h2>
                Turning Our Vision Into{" "}
                <strong>Action</strong>
              </h2>

              <div className="vision-heading-line" />

              <p>
                A vision becomes meaningful when it is supported
                by clear goals and consistent action. We are
                committed to developing the capabilities required
                to achieve sustainable growth.
              </p>

              <p>
                We will continue strengthening our supply
                networks, improving our systems, developing
                our people, and building partnerships that
                support long-term growth.
              </p>

            </div>

            <div className="vision-goals-list">

              {visionGoals.map((goal) => (

                <div
                  className="vision-goal-item"
                  key={goal.title}
                >

                  <div className="vision-goal-icon">
                    {goal.icon}
                  </div>

                  <div>

                    <h3>
                      {goal.title}
                    </h3>

                    <p>
                      {goal.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          FUTURE
      ==================================================== */}

      <section className="future-section">

        <div className="vision-container">

          <div className="future-content">

            <span>
              THE ROAD AHEAD
            </span>

            <h2>
              A Bigger Vision.
              <br />
              <strong>A Stronger Mahega.</strong>
            </h2>

            <div className="vision-heading-line centered-line" />

            <p>
              We see a future where businesses across East
              Africa can access dependable supplies and
              professional logistics support through a
              trusted regional partner.
            </p>

            <p>
              Our journey is about more than growth. It is
              about creating opportunities, strengthening
              supply chains, supporting businesses, and
              contributing to the development of the region.
            </p>

          </div>

        </div>

      </section>

      {/* ===================================================
          CTA
      ==================================================== */}

      <section className="vision-cta">

        <div className="vision-container">

          <div className="vision-cta-content">

            <span>
              JOIN OUR JOURNEY
            </span>

            <h2>
              The Future of Supply
              <br />
              <strong>Starts With Partnership.</strong>
            </h2>

            <p>
              Partner with Mahega General Suppliers Limited
              as we build reliable and innovative supply
              solutions for East Africa.
            </p>

            <a
              href="/contact"
              className="vision-cta-button"
            >
              Partner With Us
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Vision;