// src/Components/Footer.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "../style/Footer.css";

function Footer() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle Newsletter Form Submission
  const sendNewsletter = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email').trim();

    // Basic email validation
    if (!email || !email.includes('@')) {
      setMessage('❌ Please enter a valid email address');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { 
          to_email: email,
          from_name: 'Mahega General Suppliers',
          message: 'Thank you for subscribing to our newsletter!',
          reply_to: email
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setMessage('✅ Subscribed successfully! You will receive updates soon.');
      e.target.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setMessage('❌ Subscription failed. Please try again later.');
    } finally {
      setLoading(false);
    }
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
          <p>📞 +256 751 120 022</p>
          <p>✉️ info@mahega.co.ug</p>
          <p>📍 Kampala, Uganda</p>
        </div>

        {/* Newsletter Signup Section */}
        <div className="footer-section newsletter-section">
          <h4>📬 Stay Updated</h4>
          <p>Subscribe to our newsletter for product updates and special offers.</p>
          
          <form className="newsletter-form" onSubmit={sendNewsletter}>
            <input 
              type="email" 
              name="email" 
              placeholder="Your email address" 
              className="newsletter-input" 
              required 
              disabled={loading}
            />
            <button 
              type="submit" 
              className="newsletter-button"
              disabled={loading} 
            >
              {loading ? '⏳ Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          {message && (
            <div className={`newsletter-message ${message.includes('✅') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}
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
              📘 Facebook
            </a>
            <a 
              href="https://twitter.com/mahega" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
            >
              🐦 Twitter
            </a>
            <a 
              href="https://linkedin.com/company/mahega" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
            >
              🔗 LinkedIn
            </a>
            <a 
              href="https://wa.me/256751120022" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              💬 WhatsApp
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