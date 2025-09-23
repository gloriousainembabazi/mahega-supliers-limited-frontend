import React from "react";
import "../style/Hero.css";
import "./Card"


function Hero() {
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
        <button className="btn-primary">Request a Quote</button>
        <button className="btn-secondary">Contact Us</button>
      </div>
    </section>
  );
}

export default Hero;
