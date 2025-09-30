// src/pages/Contact.js
import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>CONTACT US</h1>
        <p>Need to talk to us?</p>
        <p className="subtitle">
          Mahega Suppliers Limited is your reliable partner in quality supplies across industries.
          We focus on affordability, efficiency, and customer satisfaction.
        </p>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        {/* Left: Google Map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.929993291915!2d32.5862!3d0.3181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c7a4c97db392bf%3A0xeebb1f4f7f76c9b1!2sCrested%20Towers%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1727170000000!5m2!1sen!2sug"
            width="100%"
            height="650"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mahega Suppliers Location"
          ></iframe>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>FName *</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>LName *</label>
                <input type="text" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="text" required />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell us how we can help..."></textarea>
            </div>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      {/* Address */}
      <div className="contact-address">
        <h2>📍 Our Office</h2>
        <p>Crested Towers, Nakasero 1</p>
        <p>P.O. Box 123, Kampala Central Division</p>
        <p>📞 +256 700 000 000 | 📧 info@mahega.com</p>
      </div>
    </div>
  );
};

export default Contact;
