import React from "react";
<<<<<<< HEAD
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
=======

function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Delivering Quality. Building Trust.
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Mahega Suppliers Limited is your reliable partner in quality supplies across industries.
        We focus on affordability, efficiency, and customer satisfaction.
      </p>
      <div className="mt-6 space-x-4">
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Request a Quote
        </button>
        <button className="bg-blue-200 text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-300">
          Contact Us
        </button>
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
      </div>
    </section>
  );
}

export default Hero;
