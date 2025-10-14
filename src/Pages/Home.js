import React from "react";
import Hero from  "../Components/Hero";
import Card from "../Components/Card";
import "../style/Home.css";





// Import Images
import product1 from "../images/statinary.jpg";
import product2 from "../images/latops.jpeg";
import product3 from "../images/steel bars.jpeg";
import product4 from "../images/cleaning kits.jpeg";
import product5 from "../images/seeds.jpeg";
import product6 from "../images/posho making.jpg";
import product7 from "../images/hospital grade.jpeg";
import product8 from "../images/branded uniform 2.jpeg";
import product9 from "../images/hotel tables.jpg";
import product10 from "../images/metalic tables.jpg";
import product12 from "../images/office material 2.jpg";
import product13 from "../images/goat 2 rearing.jpg";
import product14 from "../images/office use.jpg";
import product15 from "../images/pipes.jpg";
import product16 from "../images/placeholders.jpg";
import product17 from "../images/plywood.jpg";
import product11 from "../images/cattle rearing.jpg";
import product18 from "../images/goat feeding.jpeg"

function Home() {
  // Products
  const productsPreview = [
    {
      title: "Assorted Stationery & Office Suppliers",
      description: "Comprehensive range of stationery and office supplies for all your business needs.",
      image: product1,
      
    },
    {
      title: "Computers, Printers & ICT Consumables",
      description: "Latest computers, printers, and ICT consumables for efficient office operations.",
      image: product2,
      
    },
    {
      title: "Furniture & Fittings",
      description: "Quality furniture and fittings to enhance your workspace.",
      image: product3,
      
    },
    {
      title: "Cleaning Materials & Consumables",
      description: "Effective cleaning materials and consumables for a spotless environment.",
      image: product4,
      
    },
    {
      title: "Agricultural & Industrial Suppliers",
      description: "Reliable supplies for agricultural and industrial operations.",
      image: product5, 
      
    },
    {
      title: "Beverages & Food Supplies",
      description: "Wide selection of beverages and food supplies for offices and events.",
      image: product6,
      
    },
    {
      title: "Medical Consumables & PPE",
      description: "Essential medical consumables and personal protective equipment.",
      image: product7,
      
    },
    {
      title: "Branding",
      description: "Professional branding solutions for various applications.",
      image: product8,
      
    },
     {
      title: " Livestock Solutions",
      description: "Quality inputs for crops, cattle, goats, and modern farming in Uganda..",
      image: product18,
      
    },
    
  ];

  // Core Services
  const coreServices = [
    {
      title: "Procurement & Sourcing",
      description: "We identify and deliver the right products to meet your business or personal needs.",
      image: product14,
      
    },
    {
      title: "Logistics & Delivery",
      description: "Reliable transportation and timely delivery of supplies to your doorstep.",
      image: product15,
      
    },
    {
      title: "Custom Orders",
      description: "Tailored solutions for unique product requirements and bulk orders.",
      image: product16,
      
    },
    {
      title: "Consultation & Support",
      description: "Expert advice and support for procurement and supply chain management.",
      image: product17,
      
    },
  ];

  // Industry Solutions
  const industrySolutions = [
    {
      title: "Exported Goods Handling",
      description: "Professional handling and management of exported goods for businesses.",
      image: product9,
      
    },
    {
      title: "Office Material Supply",
      description: "Supplying a wide range of office materials for efficient operations.",
      image: product10,
      
    },
    {
      title: "Cattle Rearing Support",
      description: "Support and solutions for modern cattle rearing and livestock management.",
      image: product11,
      
    },
    {
      title: "Export Logistics",
      description: "Reliable logistics services for exporting goods and materials.",
      image: product12,
      
    },
    {
      title: "Goat Rearing Solutions",
      description: "Expert solutions and support for goat rearing and livestock farming.",
      image: product13,
      
    },
  ];

  // Testimonials for Slider
  const testimonials = [
    {
      text: "Mahega delivered our office supplies ahead of schedule and at competitive rates. Highly recommended!",
      name: "Sarah N.",
      company: "Kampala Business Hub",
    },
    {
      text: "Their agricultural inputs improved our yield by 40%. Reliable and knowledgeable team.",
      name: "John M.",
      company: "Green Valley Farms",
    },
    {
      text: "We’ve been working with Mahega for 3 years. Consistent quality and excellent customer service.",
      name: "David K.",
      company: "MediPlus Ltd",
    },
    {
      text: "From furniture to ICT, they handle everything. One-stop solution for our entire office setup.",
      name: "Fatima A.",
      company: "TechNova Solutions",
    },
    {
      text: "Their logistics team is unmatched. Even remote areas? No problem. Always on time.",
      name: "Robert T.",
      company: "Export Masters Ltd",
    },
    {
      text: "Custom orders were handled perfectly. They understood our needs and exceeded expectations.",
      name: "Grace L.",
      company: "Hotel Paradise",
    },
  ];

  return (
    <div>
      <Hero />

      {/* About Section */}
      <section className="home-section about-section">
        <div className="about-content">
          <h2>Welcome to Mahega General Suppliers Limited</h2>
          <p>
            We are a leading supplier of office materials, agricultural inputs, industrial goods,
            and logistics services across East Africa. Trusted by businesses for quality, reliability,
            and timely delivery.
          </p>
          <button className="btn-primary">Learn More About Us</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-section stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Clients Served</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Product Categories</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="home-section trust-section">
        <h2 className="section-title">Trust in Us, Our Work and Our Words</h2>
        <div className="trust-container">
          <div className="trust-item">
            <div className="trust-icon">✅</div>
            <h3>Quality Guaranteed</h3>
            <p>Every product is sourced and inspected to meet industry standards.</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🚚</div>
            <h3>On-Time Delivery</h3>
            <p>We guarantee timely delivery across Uganda and East Africa.</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🤝</div>
            <h3>Client-Centered</h3>
            <p>Your satisfaction is our priority — we listen, adapt, and deliver.</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">📜</div>
            <h3>Transparent Terms</h3>
            <p>No hidden fees. Clear contracts. Honest communication always.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="home-section products-section">
        <h2 className="section-title">Our Products</h2>
        <div className="card-grid">
          {productsPreview.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              buttonText={product.buttonText}
            />
          ))}
        </div>
      </section>

      {/* Core Services Section */}
      <section className="home-section services-section">
        <h2 className="section-title">Our Core Services</h2>
        <div className="card-grid">
          {coreServices.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="home-section services-section">
        <h2 className="section-title">Industry-Specific Solutions</h2>
        <div className="card-grid">
          {industrySolutions.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Grid - Static Cards (No Sliding) */}
<section className="home-section testimonials-section">
  <h2 className="section-title">What Our Clients Say</h2>
  <div className="card-grid">
    {testimonials.map((testimonial, index) => (
      <div className="testimonial-card" key={index}>
        <p className="testimonial-text">“{testimonial.text}”</p>
        <div className="client-info">
          <strong>{testimonial.name}</strong>
          <span> — {testimonial.company}</span>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CTA Section */}
      <section className="home-section cta-section">
        <div className="cta-content">
          <h2>Need Supplies Delivered? Contact Us Today!</h2>
          <p>We offer fast, reliable delivery across Uganda and East Africa.</p>
          <button className="btn-primary">Get In Touch</button>
        </div>
      </section>
    </div>
  );
}

export default Home;