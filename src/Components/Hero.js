import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Hero.css";

// Import hero background images
import hero1 from "../images/hero-bg1.jpg";
import hero2 from "../images/hero-bg2.jpg";
import hero3 from "../images/hero-bg3.jpg";
import hero4 from "../images/hero-bg4.jpg";
import hero5 from "../images/hero-bg5.jpg";

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4, hero5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      {/* Background Images */}
      <div className="hero-slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">Delivering Quality.</h1>
        <p className="hero-subtitle">
          Mahega Suppliers Limited is your reliable partner in quality supplies across industries.
          We focus on affordability, efficiency and customer satisfaction.
        </p>
        <Link to="/contact" className="hero-btn">Request a Quote</Link>
      </div>

      {/* Dot Indicators */}
      <div className="hero-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;