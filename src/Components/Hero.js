import React from "react";
import "../style/Hero.css";
import "./Card"


function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuoteClick = () => {
    const quoteSection = document.getElementById("quote-form");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <h2 className="hero-title">
        Delivering Quality. Trust Materials.
      </h2>
      <p className="hero-subtitle">
        Mahega Suppliers Limited is your reliable partner in quality supplies across industries.
        We focus on affordability, efficiency and customer satisfaction.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary" onClick={handleQuoteClick}>Request a Quote</button>
        <button className="btn-secondary" onClick={handleContactClick}>Contact Us</button>
      </div>
    </section>
  );
}

export default Hero;
