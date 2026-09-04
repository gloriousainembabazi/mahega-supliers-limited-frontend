// =========================================================
// MAHEGA GENERAL SUPPLIERS LIMITED
// MISSION & VISION PAGE
// =========================================================

import React from "react";

import {
  Target,
  Eye,
  ShieldCheck,
  Clock3,
  Handshake,
  Lightbulb,
  Wheat,
  Truck,
  Award,
  Users,
} from "lucide-react";

// CSS is located in src/style
import "../../style/mission.css";

// =========================================================
// IMAGES FROM src/images
// =========================================================

import heroImage1 from "../../images/hero-bg1.jpg";
import heroImage2 from "../../images/tractor.jpeg";
import heroImage3 from "../../images/lounge.jpeg";

import missionImage from "../../images/restarunt sents2.jpeg";
import focusImage from "../../images/statinary.jpg";

// =========================================================
// CORE FOCUS AREAS
// =========================================================

const focusAreas = [
  {
    icon: <Truck size={24} />,
    title: "Reliable Supply & Delivery",
    description:
      "We work to ensure that quality products reach our clients on time, with dependable coordination from sourcing to final delivery.",
  },
  {
    icon: <Award size={24} />,
    title: "Quality Products",
    description:
      "We focus on sourcing products that meet required standards and provide value, reliability, and consistency to our clients.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Long-Term Partnerships",
    description:
      "We build lasting relationships with clients, suppliers, institutions, and business partners through trust and professional service.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Innovative Solutions",
    description:
      "We continuously improve the way we work and develop practical solutions that respond to changing client and market needs.",
  },
  {
    icon: <Wheat size={24} />,
    title: "Supporting Local Industries",
    description:
      "We contribute to local business, agriculture, and supply chains by connecting organizations with dependable products and services.",
  },
  {
    icon: <Users size={24} />,
    title: "Customer-Centred Service",
    description:
      "We listen to our clients, understand their requirements, and work to provide solutions that meet their specific needs.",
  },
];

// =========================================================
// COMMITMENTS
// =========================================================

const commitments = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Integrity",
    text:
      "We conduct our business with honesty, transparency, accountability, and respect.",
  },
  {
    icon: <Clock3 size={24} />,
    title: "Efficiency",
    text:
      "We value time and continuously improve our processes to provide efficient service and timely delivery.",
  },
  {
    icon: <Award size={24} />,
    title: "Excellence",
    text:
      "We pursue high standards in the products we supply and the services we provide.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Trust",
    text:
      "We build relationships based on reliability, consistency, professionalism, and mutual respect.",
  },
];

// =========================================================
// MISSION COMPONENT
// =========================================================

function Mission() {
  return (
    <main className="mission-page">

      {/* ===================================================
          HERO
      ==================================================== */}

      <section className="mission-hero">

        <div className="mission-slideshow">

          <div
            className="mission-slide"
            style={{
              backgroundImage: `url(${heroImage1})`,
            }}
          />

          <div
            className="mission-slide"
            style={{
              backgroundImage: `url(${heroImage2})`,
            }}
          />

          <div
            className="mission-slide"
            style={{
              backgroundImage: `url(${heroImage3})`,
            }}
          />

        </div>

        <div className="mission-hero-overlay" />

        <div className="mission-hero-content">

          <span className="mission-eyebrow">
            OUR PURPOSE
          </span>

          <h1>
            Our <span>Mission</span>
          </h1>

          <p>
            Driving excellence in supply chain solutions
            through reliable products, professional service,
            and lasting partnerships.
          </p>

          <div className="mission-hero-line" />

        </div>

      </section>

      {/* ===================================================
          INTRODUCTION
      ==================================================== */}

      <section className="mission-introduction">

        <div className="mission-container">

          <div className="mission-intro-grid">

            <div className="mission-intro-content">

              <span className="mission-small-title">
                WHAT DRIVES US
              </span>

              <h2>
                Driving Excellence in{" "}
                <strong>Supply Chain Solutions</strong>
              </h2>

              <div className="mission-heading-line" />

              <p className="mission-lead">
                At Mahega General Suppliers Limited, our
                mission is to empower businesses, institutions,
                and organizations across East Africa with
                reliable products and dependable supply
                solutions.
              </p>

              <p>
                We are committed to making procurement and
                supply processes easier, more efficient, and
                more reliable for our clients. From sourcing
                and procurement to logistics and delivery,
                we work to ensure that every stage of the
                process is handled professionally.
              </p>

              <p>
                We believe that successful supply relationships
                are built on quality, integrity, accountability,
                and a deep understanding of our clients' needs.
              </p>

              <p>
                Through continuous improvement, strong supplier
                relationships, and dedicated teams, we strive
                to create lasting value for the businesses and
                communities we serve.
              </p>

            </div>

            <div className="mission-intro-image">

              <img
                src={missionImage}
                alt="Mahega supply and service operations"
              />

              <div className="mission-image-label">
                <strong>
                  Reliable Solutions
                </strong>

                <span>
                  Built around your needs
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          MISSION & VISION
      ==================================================== */}

      <section className="mission-vision-section">

        <div className="mission-container">

          <div className="mission-section-heading">

            <span>
              OUR DIRECTION
            </span>

            <h2>
              Mission, Vision &{" "}
              <strong>Purpose</strong>
            </h2>

            <div className="mission-heading-line centered-line" />

            <p>
              We are guided by a clear purpose and a long-term
              commitment to creating value through dependable
              supply and service.
            </p>

          </div>

          <div className="mission-vision-grid">

            {/* MISSION */}

            <article className="mission-purpose-card">

              <div className="purpose-icon">
                <Target size={27} />
              </div>

              <span>
                OUR MISSION
              </span>

              <h3>
                Empowering Businesses Through Reliable Supply
              </h3>

              <p>
                To provide reliable, high-quality products and
                professional supply chain solutions that help
                businesses and institutions operate efficiently,
                grow sustainably, and achieve their goals.
              </p>

            </article>

            {/* VISION */}

            <article className="mission-purpose-card vision-card">

              <div className="purpose-icon">
                <Eye size={27} />
              </div>

              <span>
                OUR VISION
              </span>

              <h3>
                A Trusted Supply Partner Across East Africa
              </h3>

              <p>
                To become one of the most trusted and respected
                general supply and logistics partners in East
                Africa, recognized for quality, reliability,
                innovation, and exceptional customer service.
              </p>

            </article>

          </div>

        </div>

      </section>

      {/* ===================================================
          CORE FOCUS AREAS
      ==================================================== */}

      <section className="focus-section">

        <div className="mission-container">

          <div className="mission-section-heading centered-heading">

            <span>
              WHAT WE FOCUS ON
            </span>

            <h2>
              Our Core{" "}
              <strong>Focus Areas</strong>
            </h2>

            <div className="mission-heading-line centered-line" />

            <p>
              Every part of our work is guided by our commitment
              to quality, reliability, efficiency, and customer
              satisfaction.
            </p>

          </div>

          <div className="focus-grid">

            {focusAreas.map((item) => (

              <article
                className="focus-card"
                key={item.title}
              >

                <div className="focus-icon">
                  {item.icon}
                </div>

                <div className="focus-card-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
          COMMITMENT IMAGE + CONTENT
      ==================================================== */}

      <section className="commitment-section">

        <div className="mission-container">

          <div className="commitment-grid">

            <div className="commitment-image">

              <img
                src={focusImage}
                alt="Mahega commitment to reliable supply"
              />

              <div className="commitment-image-overlay" />

              <div className="commitment-image-text">
                <span>
                  OUR COMMITMENT
                </span>

                <strong>
                  Quality in Every Delivery
                </strong>
              </div>

            </div>

            <div className="commitment-content">

              <span className="mission-small-title">
                WHAT WE STAND FOR
              </span>

              <h2>
                Principles That{" "}
                <strong>Guide Our Work</strong>
              </h2>

              <div className="mission-heading-line" />

              <p>
                Our mission is supported by principles that
                influence how we work with clients, suppliers,
                employees, and communities.
              </p>

              <div className="commitment-list">

                {commitments.map((item) => (

                  <div
                    className="commitment-item"
                    key={item.title}
                  >

                    <div className="commitment-icon">
                      {item.icon}
                    </div>

                    <div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          OUR IMPACT
      ==================================================== */}

      <section className="impact-section">

        <div className="mission-container">

          <div className="impact-content">

            <span>
              OUR IMPACT
            </span>

            <h2>
              More Than a Supplier.
              <br />
              <strong>A Reliable Partner.</strong>
            </h2>

            <div className="mission-heading-line centered-line" />

            <p>
              Our goal goes beyond supplying products. We aim
              to contribute to the success of our clients by
              making their procurement and supply processes
              simpler, more dependable, and more efficient.
            </p>

          </div>

          <div className="impact-grid">

            <div className="impact-card">

              <strong>
                Quality
              </strong>

              <span>
                Products and services that meet expectations
              </span>

            </div>

            <div className="impact-card">

              <strong>
                Reliability
              </strong>

              <span>
                Dependable supply and professional support
              </span>

            </div>

            <div className="impact-card">

              <strong>
                Partnership
              </strong>

              <span>
                Relationships designed for long-term value
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          CTA
      ==================================================== */}

      <section className="mission-cta">

        <div className="mission-container">

          <div className="mission-cta-content">

            <span>
              BUILD WITH MAHEGA
            </span>

            <h2>
              Let's Create{" "}
              <strong>Reliable Solutions Together.</strong>
            </h2>

            <p>
              Whether you need dependable supplies, procurement
              support, logistics, or customized solutions, our
              team is ready to work with you.
            </p>

            <a
              href="/contact"
              className="mission-cta-button"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Mission;