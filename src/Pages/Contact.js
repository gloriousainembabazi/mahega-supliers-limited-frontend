import React from "react";
<<<<<<< HEAD
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
=======

function Contact() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
      <p className="mb-6 text-lg">We’d love to hear from you. Reach out for inquiries or partnerships.</p>

      <form className="grid gap-4 max-w-lg mx-auto bg-gray-100 p-6 rounded-xl shadow-md">
        <input type="text" placeholder="Name" className="p-3 rounded-lg border" />
        <input type="email" placeholder="Email" className="p-3 rounded-lg border" />
        <input type="tel" placeholder="Phone" className="p-3 rounded-lg border" />
        <textarea placeholder="Message" className="p-3 rounded-lg border" rows="4"></textarea>
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd

export default Contact;
