// =========================================================
// MAHEGA GENERAL SUPPLIERS LIMITED
// TEAM PAGE
// =========================================================

import React from "react";

import {
  Target,
  Users,
  ShieldCheck,
  Handshake,
  Award,
  TrendingUp,
} from "lucide-react";

// Team page styling is inside src/style
import "../../style/Team.css";

// =========================================================
// HERO IMAGES
// Images are imported directly from src/images
// =========================================================

import heroImage1 from "../../images/hero-bg1.jpg";
import heroImage2 from "../../images/goat rearing.jpg";
import heroImage3 from "../../images/lounge.jpeg";

// =========================================================
// TEAM MEMBER IMAGES
// Replace these filenames only if your actual images
// have different names.
// =========================================================

import teamImage1 from "../../images/hero-bg1.jpg";
import teamImage2 from "../../images/glorious.PNG";
import teamImage3 from "../../images/lounge.jpeg";
import teamImage4 from "../../images/restarunt sents2.jpeg";

// =========================================================
// TEAM MEMBERS
// =========================================================

const teamMembers = [
  {
    name: "Mr. James Mugisha",
    title: "Founder & Chief Executive Officer",
    image: teamImage1,
    description:
      "Provides strategic leadership and oversees the company's vision, growth, partnerships, and commitment to delivering reliable solutions to clients across East Africa.",
  },

  {
    name: "Mrs. Sarah Nalweyiso",
    title: "Operations Director",
    image: teamImage2,
    description:
      "Oversees daily operations and ensures that our teams, processes, and client requirements are coordinated efficiently and professionally.",
  },

  {
    name: "Eng. David Tumusiime",
    title: "Head of Procurement & Logistics",
    image: teamImage3,
    description:
      "Leads procurement, supplier coordination, transportation, and logistics to ensure products and services reach our clients on time and according to required standards.",
  },

  {
    name: "Dr. Grace Akello",
    title: "Quality Assurance & Compliance",
    image: teamImage4,
    description:
      "Ensures that products, services, and operational processes meet quality, safety, and compliance requirements while maintaining high professional standards.",
  },
];

// =========================================================
// TEAM VALUES
// =========================================================

const teamValues = [
  {
    icon: <Target size={24} />,
    title: "Purpose Driven",
    text:
      "We work with a clear purpose and remain focused on delivering meaningful value to every client we serve.",
  },

  {
    icon: <Users size={24} />,
    title: "Teamwork",
    text:
      "Our people work together across departments to achieve shared goals and provide dependable solutions.",
  },

  {
    icon: <ShieldCheck size={24} />,
    title: "Integrity",
    text:
      "We believe in honesty, accountability, transparency, and doing the right thing in every engagement.",
  },

  {
    icon: <Handshake size={24} />,
    title: "Customer Focus",
    text:
      "Our clients are at the centre of what we do, and we continuously work to understand and exceed their expectations.",
  },

  {
    icon: <Award size={24} />,
    title: "Professional Excellence",
    text:
      "We maintain high standards of professionalism, quality, safety, and service delivery.",
  },

  {
    icon: <TrendingUp size={24} />,
    title: "Continuous Growth",
    text:
      "We invest in people, knowledge, innovation, and better ways of working to continually improve our services.",
  },
];

// =========================================================
// TEAM COMPONENT
// =========================================================

function Team() {
  return (
    <main className="team-page">

      {/* ===================================================
          HERO WITH SLIDING BACKGROUND
      ==================================================== */}

      <section className="team-hero">

        <div className="team-slideshow">

          <div
            className="team-slide"
            style={{
              backgroundImage: `url(${heroImage1})`,
            }}
          />

          <div
            className="team-slide"
            style={{
              backgroundImage: `url(${heroImage2})`,
            }}
          />

          <div
            className="team-slide"
            style={{
              backgroundImage: `url(${heroImage3})`,
            }}
          />

        </div>

        <div className="team-hero-overlay" />

        <div className="team-hero-content">

          <span className="team-eyebrow">
            OUR PEOPLE
          </span>

          <h1>
            Meet Our <span>Team</span>
          </h1>

          <p>
            The people behind Mahega General Suppliers Limited —
            experienced professionals committed to reliable service,
            quality solutions, and long-term partnerships.
          </p>

          <div className="team-hero-line" />

        </div>

      </section>

      {/* ===================================================
          INTRODUCTION
      ==================================================== */}

      <section className="team-introduction">

        <div className="section-container">

          <div className="section-heading">

            <span>
              THE PEOPLE BEHIND OUR SUCCESS
            </span>

            <h2>
              Leadership That{" "}
              <strong>Drives Excellence</strong>
            </h2>

            <div className="heading-line" />

          </div>

          <div className="team-intro-grid">

            <div className="team-intro-content">

              <p className="intro-lead">
                At Mahega General Suppliers Limited,
                our people are our greatest asset.
              </p>

              <p>
                Our team brings together professionals with
                expertise in procurement, logistics, operations,
                customer service, quality assurance, and
                business development.
              </p>

              <p>
                Together, we work to ensure that every client
                receives dependable products, professional
                service, and timely solutions.
              </p>

              <p>
                We believe successful businesses are built by
                people who understand their responsibilities,
                work together, and remain committed to excellence.
              </p>

            </div>

            <div className="team-intro-highlight">

              <div className="highlight-number">
                50+
              </div>

              <h3>
                Dedicated Professionals
              </h3>

              <p>
                From management and procurement to warehousing,
                logistics, customer support, and field operations,
                our workforce contributes to the success of
                every project and client relationship.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          EXECUTIVE LEADERSHIP
      ==================================================== */}

      <section className="leadership-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              EXECUTIVE LEADERSHIP
            </span>

            <h2>
              The Team That{" "}
              <strong>Leads Us Forward</strong>
            </h2>

            <div className="heading-line" />

            <p>
              Our leadership team provides the vision,
              experience, and direction that keeps Mahega
              moving forward.
            </p>

          </div>

          <div className="team-grid">

            {teamMembers.map((member, index) => (

              <article
                className="team-card"
                key={member.name}
              >

                <div className="team-image-wrapper">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-image"
                  />

                  <div className="team-image-overlay" />

                  <div className="team-member-number">
                    0{index + 1}
                  </div>

                </div>

                <div className="team-card-content">

                  <span className="team-member-title">
                    {member.title}
                  </span>

                  <h3>
                    {member.name}
                  </h3>

                  <div className="team-card-line" />

                  <p>
                    {member.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
          OUR WORKFORCE
      ==================================================== */}

      <section className="workforce-section">

        <div className="section-container">

          <div className="workforce-grid">

            <div className="workforce-content">

              <span className="section-small-title">
                OUR WORKFORCE
              </span>

              <h2>
                A Team Built Around{" "}
                <span>Reliability</span>
              </h2>

              <div className="heading-line" />

              <p>
                Behind every successful delivery is a team of
                dedicated professionals working together.
              </p>

              <p>
                Our workforce includes warehouse personnel,
                logistics teams, procurement specialists,
                customer service professionals, sourcing agents,
                administrators, and field staff.
              </p>

              <p>
                Every member of our team plays an important role
                in ensuring that orders are handled with care,
                speed, accuracy, and professionalism.
              </p>

              <p>
                We encourage continuous learning, teamwork,
                accountability, safety, and employee development
                because we believe that a strong team creates
                stronger client relationships.
              </p>

            </div>

            <div className="workforce-stats">

              <div className="workforce-stat">
                <strong>50+</strong>
                <span>Team Members</span>
              </div>

              <div className="workforce-stat">
                <strong>100%</strong>
                <span>Commitment</span>
              </div>

              <div className="workforce-stat">
                <strong>24/7</strong>
                <span>Operational Support</span>
              </div>

              <div className="workforce-stat">
                <strong>1</strong>
                <span>Shared Vision</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          TEAM VALUES
      ==================================================== */}

      <section className="values-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              HOW WE WORK
            </span>

            <h2>
              What Makes Our{" "}
              <strong>Team Different</strong>
            </h2>

            <div className="heading-line" />

            <p>
              Our success is built on the values that guide
              the way we work, serve our clients, and support
              one another.
            </p>

          </div>

          <div className="values-grid">

            {teamValues.map((value) => (

              <div
                className="value-card"
                key={value.title}
              >

                <div className="value-icon">
                  {value.icon}
                </div>

                <div>

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
          TEAM CULTURE
      ==================================================== */}

      <section className="culture-section">

        <div className="section-container">

          <div className="culture-box">

            <div className="culture-content">

              <span className="section-small-title">
                OUR CULTURE
              </span>

              <h2>
                Growing Together.
                <br />
                <span>
                  Achieving More Together.
                </span>
              </h2>

              <p>
                At Mahega, we understand that excellence is
                not achieved by one person alone. It comes from
                a committed team working toward a common goal.
              </p>

              <p>
                We create an environment where people can learn,
                contribute ideas, take responsibility, and grow
                professionally while delivering value to our
                clients.
              </p>

            </div>

            <div className="culture-quote">

              <span className="quote-mark">
                “
              </span>

              <p>
                Strong teams build strong businesses,
                and strong relationships build lasting success.
              </p>

              <span className="quote-line" />

              <small>
                MAHEGA GENERAL SUPPLIERS LIMITED
              </small>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          CTA
      ==================================================== */}

      <section className="team-cta">

        <div className="team-cta-overlay" />

        <div className="section-container team-cta-content">

          <span>
            WORK WITH US
          </span>

          <h2>
            Reliable People.
            <br />
            <strong>
              Reliable Solutions.
            </strong>
          </h2>

          <p>
            Our team is ready to support your business with
            dependable products, professional service, and
            solutions built around your needs.
          </p>

          <a
            href="/contact"
            className="team-cta-button"
          >
            Get In Touch
          </a>

        </div>

      </section>

    </main>
  );
}

export default Team;