import React from "react";
import "./contact.css"; 

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
        {/* Left Image */}
        <div className="contact-image">
          <img src="/images/contact-phone.jpg" alt="Contact" />
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Website *</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4"></textarea>
            </div>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      {/* Address */}
      <div className="contact-address">
        <h2>Nakasero 1, Crested</h2>
        <p>📍 P.O. Box 123, Kampala Central Division</p>
      </div>
    </div>
  );
};

export default Contact;
