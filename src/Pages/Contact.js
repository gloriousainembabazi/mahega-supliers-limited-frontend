import React, { useState } from "react";
import "../style/contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedinIn,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  MessageCircle,
  Building2,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      /*
       * If you already have a backend/API for contact messages,
       * replace this section with your API request.
       */

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        type: "success",
        message:
          "Thank you for contacting Mahega General Suppliers Limited. Your message has been received. Our team will get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h1>
            Let's Work <span>Together.</span>
          </h1>

          <p className="contact-hero-text">
            Whether you need reliable supplies, procurement support, logistics
            solutions, or a trusted business partner, Mahega General Suppliers
            Limited is ready to serve you.
          </p>

          <div className="contact-hero-line"></div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT SECTION
      ===================================================== */}

      <section className="contact-main-section">
        <div className="contact-main-grid">

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div className="contact-form-card">
            <div className="contact-card-heading">
              <span className="contact-small-title">
                SEND US A MESSAGE
              </span>

              <h2>How Can We Help You?</h2>

              <div className="heading-line"></div>
            </div>

            {status.message && (
              <div
                className={
                  status.type === "success"
                    ? "success-message"
                    : "error-message"
                }
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">FULL NAME</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">PHONE NUMBER</label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">SERVICE REQUIRED</label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>

                    <option value="Agricultural Supplies">
                      Agricultural Supplies
                    </option>

                    <option value="Cleaning Supplies">
                      Cleaning Supplies
                    </option>

                    <option value="Medical Supplies">
                      Medical Supplies
                    </option>

                    <option value="Stationery">
                      Stationery & Office Supplies
                    </option>

                    <option value="Furniture">
                      Furniture
                    </option>

                    <option value="Computers">
                      Computers & ICT Equipment
                    </option>

                    <option value="Branding">
                      Branding & Printing
                    </option>

                    <option value="Procurement">
                      Procurement & Logistics
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">YOUR MESSAGE</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}

                <Send className="submit-icon" size={15} />

              </button>
            </form>
          </div>

          {/* =================================================
              CONTACT DETAILS
          ================================================= */}

          <aside className="contact-details-card">

            <span className="contact-details-eyebrow">
              CONTACT INFORMATION
            </span>

            <h2>Reach Us</h2>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <MapPin size={19} />
              </div>

              <div>
                <h3>OUR LOCATION</h3>

                <p>
                  Kampala, Uganda
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <Phone size={19} />
              </div>

              <div>
                <h3>PHONE</h3>

                <p>
                  +256 XXX XXX XXX
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <Mail size={19} />
              </div>

              <div>
                <h3>EMAIL</h3>

                <p>
                  info@mahega.com
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <Clock3 size={19} />
              </div>

              <div>
                <h3>BUSINESS HOURS</h3>

                <p>
                  Monday – Friday
                  <br />
                  8:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            <div className="contact-divider"></div>

            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <div className="connect-section">
              <h3>CONNECT WITH US</h3>

              <div className="connect-icons">

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="social-whatsapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="social-youtube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>

              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* =====================================================
          WHY CONTACT US
      ===================================================== */}

      <section className="contact-benefits-section">
        <div className="contact-section-container">

          <div className="section-title-wrap">
            <span className="contact-eyebrow">
              WHY WORK WITH MAHEGA
            </span>

            <h2>A Reliable Partner for Your Supply Needs</h2>

            <p>
              We combine dependable sourcing, quality products and responsive
              customer service to help organizations get what they need.
            </p>
          </div>

          <div className="contact-benefits-grid">

            <div className="contact-benefit-card">
              <div className="benefit-icon">
                <Building2 size={22} />
              </div>

              <h3>Reliable Supply</h3>

              <p>
                We focus on dependable sourcing and consistent delivery to
                support your day-to-day operations.
              </p>
            </div>

            <div className="contact-benefit-card">
              <div className="benefit-icon">
                <MessageCircle size={22} />
              </div>

              <h3>Responsive Support</h3>

              <p>
                Our team is available to understand your requirements and
                provide practical solutions.
              </p>
            </div>

            <div className="contact-benefit-card">
              <div className="benefit-icon">
                <Send size={22} />
              </div>

              <h3>Professional Service</h3>

              <p>
                From enquiry to delivery, we aim to make procurement simple,
                clear and efficient.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="map-section">

        <div className="section-title-wrap">
          <span className="contact-eyebrow">
            FIND US
          </span>

          <h2>Our Location</h2>

          <p>
            Visit or contact our team in Kampala, Uganda.
          </p>
        </div>

        <div className="map-card">

          <iframe
            title="Mahega General Suppliers Limited Location"
            src="https://www.google.com/maps?q=Kampala%2C%20Uganda&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="faq-section">

        <span className="contact-eyebrow">
          FREQUENTLY ASKED QUESTIONS
        </span>

        <h2>How Can We Assist You?</h2>

        <div className="faq-grid">

          <div className="faq-card">
            <h3>
              <span>01</span>
              What products do you supply?
            </h3>

            <p>
              We provide a wide range of products including agricultural
              supplies, cleaning products, medical supplies, office
              stationery, furniture, ICT equipment, branding solutions and
              other general supplies.
            </p>
          </div>

          <div className="faq-card">
            <h3>
              <span>02</span>
              Do you handle bulk orders?
            </h3>

            <p>
              Yes. We support organizations, institutions and businesses with
              bulk procurement requirements based on their specific needs.
            </p>
          </div>

          <div className="faq-card">
            <h3>
              <span>03</span>
              Can you provide customized quotations?
            </h3>

            <p>
              Yes. Send us your requirements and our team can review them and
              provide an appropriate quotation.
            </p>
          </div>

          <div className="faq-card">
            <h3>
              <span>04</span>
              How can I request a quotation?
            </h3>

            <p>
              You can complete the contact form above or reach us directly
              through our phone, email or social-media channels.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;