// src/Components/PageTemplate.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsappButton from './WhatsappButton';  
import '../style/PageTemplate.css';

/**
 * Reusable template for all inner pages
 * @param {string} title - Page title (shown in hero header)
 * @param {ReactNode} children - Page content
 * @param {string} backgroundImage - Optional background image for header
 */
function PageTemplate({ title, children, backgroundImage = null }) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <div className="page-template-container">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="page-header" style={backgroundStyle}>
        <h1>{title}</h1>
      </div>

      {/* Page Content */}
      <div className="page-content">
        {children}
      </div>

      {/* Footer */}
      <Footer />

      {/* ✅ Floating WhatsApp Button — appears on every page */}
      <WhatsappButton />
    </div>
  );
}

export default PageTemplate;