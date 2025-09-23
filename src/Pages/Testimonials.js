import React from "react";
import "../style/testimonial.css"; 

const testimonials = [
  { name: "John Doe", message: "Excellent service and quality materials!" },
  { name: "Jane Smith", message: "Reliable supplier for all our projects." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-message">"{t.message}"</p>
              <h3 className="testimonial-name">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
