import React from "react";
import "../style/About.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-text">
        Mahega Suppliers Limited is a trusted supplier dedicated to delivering high-quality products and services across diverse sectors.
      </p>

      <h3 className="about-subtitle">Our Mission</h3>
      <p className="about-text">
        To provide reliable and affordable supply solutions that empower businesses and communities to thrive.
      </p>

      <h3 className="about-subtitle">Our Vision</h3>
      <p className="about-text">
        To become the leading supplier in the region, known for excellence, innovation, and trust.
      </p>

      <h3 className="about-subtitle">Our Core Values</h3>
      <ul className="about-list">
        <li>Integrity – We deliver what we promise.</li>
        <li>Quality – We supply only the best.</li>
        <li>Efficiency – Timely and cost-effective solutions.</li>
        <li>Customer Focus – Your needs, our priority.</li>
      </ul>
    </div>
  );
}

export default About;

