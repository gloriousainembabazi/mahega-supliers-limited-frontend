// =========================================================
// MAHEGA GENERAL SUPPLIERS LIMITED
// CORE VALUES PAGE
// =========================================================

import React from "react";

import {
  ShieldCheck,
  Truck,
  Heart,
  Lightbulb,
  Users,
  Award,
  CheckCircle2,
  Handshake,
} from "lucide-react";

// CSS is located in src/style
import "../../style/Values.css";

// =========================================================
// IMAGES FROM src/images
// =========================================================

import heroImage1 from "../../images/hero-bg1.jpg";
import heroImage2 from "../../images/workstation.jpeg";
import heroImage3 from "../../images/lounge.jpeg";

import valuesImage from "../../images/restarunt sents2.jpeg";

// =========================================================
// CORE VALUES
// =========================================================

const coreValues = [
  {
    icon: <ShieldCheck size={27} />,
    title: "Integrity",
    shortTitle: "We Do What We Say",
    description:
      "We conduct our business with honesty, transparency, and accountability. We believe that trust is earned through consistent actions and keeping our commitments.",
    points: [
      "Transparent communication",
      "Honest pricing and sourcing",
      "Accountability in our work",
    ],
  },

  {
    icon: <Truck size={27} />,
    title: "Reliability",
    shortTitle: "Dependable Every Time",
    description:
      "Our clients depend on us to deliver the right products and services at the right time. We build our processes around consistency, efficiency, and dependable service.",
    points: [
      "Timely deliveries",
      "Consistent product availability",
      "Dependable logistics support",
    ],
  },

  {
    icon: <Heart size={27} />,
    title: "Customer First",
    shortTitle: "Your Success Matters",
    description:
      "We put our clients at the centre of everything we do. We listen carefully, understand their needs, and work to provide solutions that create real value.",
    points: [
      "Listening to client needs",
      "Responsive customer support",
      "Solutions tailored to requirements",
    ],
  },

  {
    icon: <Lightbulb size={27} />,
    title: "Innovation",
    shortTitle: "Better Ways of Working",
    description:
      "We continuously look for smarter and more efficient ways to improve procurement, supply, logistics, and customer service.",
    points: [
      "Continuous improvement",
      "Practical solutions",
      "Efficient processes",
    ],
  },

  {
    icon: <Users size={27} />,
    title: "Community",
    shortTitle: "Growing Together",
    description:
      "We believe in contributing to the communities where we operate by supporting local businesses, farmers, manufacturers, suppliers, and entrepreneurs.",
    points: [
      "Supporting local suppliers",
      "Promoting local enterprise",
      "Creating meaningful partnerships",
    ],
  },

  {
    icon: <Award size={27} />,
    title: "Excellence",
    shortTitle: "Always Raise the Standard",
    description:
      "We pursue excellence in every part of our business, from product sourcing and logistics to communication, customer care, and project delivery.",
    points: [
      "High service standards",
      "Quality-focused operations",
      "Professional service delivery",
    ],
  },
];

// =========================================================
// VALUES COMPONENT
// =========================================================

function Values() {
  return (
    <main className="values-page">

      {/* ===================================================
          HERO
      ==================================================== */}

      <section className="values-hero">

        <div className="values-slideshow">

          <div
            className="values-slide"
            style={{
              backgroundImage: `url(${heroImage1})`,
            }}
          />

          <div
            className="values-slide"
            style={{
              backgroundImage: `url(${heroImage2})`,
            }}
          />

          <div
            className="values-slide"
            style={{
              backgroundImage: `url(${heroImage3})`,
            }}
          />

        </div>

        <div className="values-hero-overlay" />

        <div className="values-hero-content">

          <span className="values-eyebrow">
            WHAT GUIDES US
          </span>

          <h1>
            Our Core <span>Values</span>
          </h1>

          <p>
            The principles that guide how we work,
            how we serve our clients, and how we build
            lasting partnerships.
          </p>

          <div className="values-hero-line" />

        </div>

      </section>

      {/* ===================================================
          INTRODUCTION
      ==================================================== */}

      <section className="values-introduction">

        <div className="values-container">

          <div className="values-intro-grid">

            <div className="values-intro-content">

              <span className="values-small-title">
                OUR PRINCIPLES
              </span>

              <h2>
                The Principles That{" "}
                <strong>Guide Us</strong>
              </h2>

              <div className="values-heading-line" />

              <p className="values-lead">
                Our values are not simply words on a wall.
                They are embedded in every decision we make,
                every product we source, and every client
                we serve.
              </p>

              <p>
                At Mahega General Suppliers Limited, we believe
                that successful business relationships are built
                on trust, consistency, professionalism, and a
                genuine commitment to helping our clients succeed.
              </p>

              <p>
                These principles guide our people and shape the
                way we approach procurement, logistics, customer
                service, partnerships, and business growth.
              </p>

            </div>

            <div className="values-intro-image">

              <img
                src={valuesImage}
                alt="Mahega team and business operations"
              />

              <div className="values-image-overlay" />

              <div className="values-image-label">

                <span>
                  OUR FOUNDATION
                </span>

                <strong>
                  Values That Build Trust
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          VALUES CARDS
      ==================================================== */}

      <section className="core-values-section">

        <div className="values-container">

          <div className="values-section-heading">

            <span>
              WHAT WE STAND FOR
            </span>

            <h2>
              Values in{" "}
              <strong>Action</strong>
            </h2>

            <div className="values-heading-line centered-line" />

            <p>
              These core values influence our decisions,
              our relationships, and the quality of service
              we provide every day.
            </p>

          </div>

          <div className="core-values-grid">

            {coreValues.map((value, index) => (

              <article
                className="core-value-card"
                key={value.title}
              >

                <div className="value-card-top">

                  <div className="core-value-icon">
                    {value.icon}
                  </div>

                  <span className="value-number">
                    0{index + 1}
                  </span>

                </div>

                <span className="value-card-label">
                  {value.shortTitle}
                </span>

                <h3>
                  {value.title}
                </h3>

                <div className="value-card-line" />

                <p>
                  {value.description}
                </p>

                <ul>

                  {value.points.map((point) => (

                    <li key={point}>

                      <CheckCircle2 size={14} />

                      <span>
                        {point}
                      </span>

                    </li>

                  ))}

                </ul>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
          VALUES + BUSINESS
      ==================================================== */}

      <section className="values-business-section">

        <div className="values-container">

          <div className="values-business-box">

            <div className="values-business-content">

              <span className="values-small-title">
                VALUES IN OUR WORK
              </span>

              <h2>
                Turning Principles Into{" "}
                <strong>Results</strong>
              </h2>

              <div className="values-heading-line" />

              <p>
                Our values are reflected in the way we manage
                every client relationship and every supply
                requirement.
              </p>

              <p>
                From the first conversation with a client to
                sourcing, quality checks, transportation, and
                final delivery, we remain committed to doing
                things the right way.
              </p>

              <p>
                This approach allows us to build trust, reduce
                uncertainty, and create relationships that can
                grow over time.
              </p>

            </div>

            <div className="values-business-points">

              <div className="business-point">

                <div className="business-point-icon">
                  <Handshake size={23} />
                </div>

                <div>

                  <h3>
                    Trusted Partnerships
                  </h3>

                  <p>
                    We build relationships based on mutual
                    respect, communication, and reliability.
                  </p>

                </div>

              </div>

              <div className="business-point">

                <div className="business-point-icon">
                  <ShieldCheck size={23} />
                </div>

                <div>

                  <h3>
                    Responsible Service
                  </h3>

                  <p>
                    We take responsibility for the work we
                    undertake and the commitments we make.
                  </p>

                </div>

              </div>

              <div className="business-point">

                <div className="business-point-icon">
                  <Award size={23} />
                </div>

                <div>

                  <h3>
                    Quality Driven
                  </h3>

                  <p>
                    We continuously work to improve the
                    quality and reliability of our services.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          CULTURE
      ==================================================== */}

      <section className="values-culture-section">

        <div className="values-container">

          <div className="values-culture-content">

            <span>
              OUR CULTURE
            </span>

            <h2>
              We Believe in{" "}
              <strong>Doing the Right Thing</strong>
            </h2>

            <div className="values-heading-line centered-line" />

            <p>
              Our culture is built around responsibility,
              teamwork, respect, continuous learning, and
              commitment to excellence.
            </p>

            <p>
              We encourage every member of the Mahega team
              to take ownership of their work and understand
              the impact their contribution has on our clients
              and the wider business.
            </p>

          </div>

        </div>

      </section>

      {/* ===================================================
          CTA
      ==================================================== */}

      <section className="values-cta">

        <div className="values-container">

          <div className="values-cta-content">

            <span>
              BUILT ON STRONG VALUES
            </span>

            <h2>
              Trust. Reliability.
              <br />
              <strong>Excellence.</strong>
            </h2>

            <p>
              These values guide us today and will continue
              to shape the future of Mahega General Suppliers
              Limited.
            </p>

            <a
              href="/contact"
              className="values-cta-button"
            >
              Work With Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Values;