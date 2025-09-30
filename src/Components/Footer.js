// src/Components/Footer.js
import React, { useState } from 'react'; // ✅ Added useState
import emailjs from '@emailjs/browser';
import "../style/Footer.css";

function Footer() {
  const [loading, setLoading] = useState(false); // ✅ Loading state

  // ✅ Handle Newsletter Form Submission
  const sendNewsletter = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    setLoading(true); // ✅ Start loading

    emailjs.send(
      'YOUR_SERVICE_ID',     // 👉 REPLACE WITH YOUR SERVICE ID
      'YOUR_TEMPLATE_ID',    // 👉 REPLACE WITH YOUR TEMPLATE ID
      { email },
      'YOUR_PUBLIC_KEY'      // 👉 REPLACE WITH YOUR PUBLIC KEY
    )
    .then(() => {
      alert('✅ Subscribed successfully! You’ll receive updates soon.');
      e.target.reset(); // ✅ Clear form
    })
    .catch(() => {
      alert('❌ Subscription failed. Please check your connection and try again.');
    })
    .finally(() => {
      setLoading(false); // ✅ Stop loading (success or error)
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Mahega General Suppliers Ltd</h3>
          <p>Trusted supplier of office, industrial, and agricultural products across Uganda and East Africa.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📞 +256 700 123 456</p>
          <p>✉️ info@mahega.co.ug</p>
          <p>📍 Kampala, Uganda</p>
        </div>

        {/* ✅ Newsletter Signup Section */}
        <div className="footer-section newsletter-section">
          <h4>📬 Stay Updated</h4>
          <p>Subscribe to our newsletter for product updates and offers.</p>
          <form className="newsletter-form" onSubmit={sendNewsletter}>
            <input 
              type="email" 
              name="email" 
              placeholder="Your email address" 
              className="newsletter-input" 
              required 
            />
            <button 
              type="submit" 
              className="newsletter-button"
              disabled={loading} 
              aria-busy={loading}
            >
              {loading ? '⏳ Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a 
              href="https://facebook.com/mahega" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              📘
            </a>
            <a 
              href="https://twitter.com/mahega" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
            >
              🐦
            </a>
            <a 
              href="https://linkedin.com/company/mahega" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
            >
              🔗
            </a>
            <a 
              href="https://wa.me/0751120022" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              💬
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mahega General Suppliers Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;