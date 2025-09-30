// src/pages/Services/CustomOrders.js
import React, { useState } from 'react';
import '../../style/customOrders.css';

function CustomOrders() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    orderType: '',
    quantity: '',
    deadline: '',
    budget: '',
    description: ''
  });

  const [activeService, setActiveService] = useState('custom-orders');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Custom Order Form submitted:', formData);
    alert('Thank you for your custom order request! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      orderType: '',
      quantity: '',
      deadline: '',
      budget: '',
      description: ''
    });
  };

  const services = [
    { id: 'consulting', name: 'Supply Chain Consulting', icon: '📊' },
    { id: 'custom-orders', name: 'Custom Orders', icon: '🛒' },
    { id: 'export-logistics', name: 'Export Logistics', icon: '🚢' },
    { id: 'logistics', name: 'Logistics Management', icon: '🚛' },
    { id: 'procurement', name: 'Procurement Services', icon: '📋' }
  ];

  const customOrderTypes = [
    {
      title: 'Branded Office Supplies',
      description: 'Custom notebooks, pens, folders, and stationery with your company branding',
      icon: '📝'
    },
    {
      title: 'Custom Furniture',
      description: 'Made-to-measure office desks, chairs, cabinets, and hotel furniture',
      icon: '🪑'
    },
    {
      title: 'Bulk Packaging Solutions',
      description: 'Custom packaging designs for export, retail, or promotional purposes',
      icon: '📦'
    },
    {
      title: 'Specialized Equipment',
      description: 'Hard-to-find tools, machinery, or equipment sourced globally',
      icon: '🔧'
    },
    {
      title: 'Event Supplies',
      description: 'Custom branded materials for conferences, trade shows, and corporate events',
      icon: '🎯'
    },
    {
      title: 'Uniform & Apparel',
      description: 'Custom workwear, uniforms, and promotional clothing with embroidery',
      icon: '👔'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Consultation',
      description: 'Share your specifications, quantity requirements, timeline, and budget constraints',
      icon: '💬'
    },
    {
      step: '2',
      title: 'Research & Sourcing',
      description: 'Our team researches suppliers, materials, and manufacturing options globally',
      icon: '🔍'
    },
    {
      step: '3',
      title: 'Quotation',
      description: 'Detailed proposal with options, pricing, and timeline within 24-48 hours',
      icon: '💰'
    },
    {
      step: '4',
      title: 'Approval & Production',
      description: 'Once approved, we manage production, quality control, and progress updates',
      icon: '⚙️'
    },
    {
      step: '5',
      title: 'Quality Assurance',
      description: 'Rigorous quality checks before shipment to ensure specifications are met',
      icon: '✅'
    },
    {
      step: '6',
      title: 'Delivery',
      description: 'On-time delivery to your location with full tracking and support',
      icon: '🚚'
    }
  ];

  return (
    <div className="custom-orders-container">
      {/* Sidebar */}
      <aside className="services-sidebar">
        <h3>Our Services</h3>
        <nav className="services-nav">
          {services.map(service => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className={activeService === service.id ? 'active' : ''}
              onClick={() => setActiveService(service.id)}
            >
              <span className="service-icon">{service.icon}</span>
              {service.name}
            </a>
          ))}
        </nav>
        
        <div className="sidebar-cta">
          <h4>Need a Custom Quote?</h4>
          <p>Get a personalized solution for your unique requirements.</p>
          <button className="cta-button" onClick={() => document.getElementById('contact-form').scrollIntoView()}>
            Request Quote
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="custom-orders-main">
        <div className="hero-section">
          <h1>Custom & Bulk Orders</h1>
          <p className="hero-subtitle">Tailored solutions for your unique business needs</p>
        </div>

        <section className="intro-section">
          <h2>Beyond the Standard Catalog</h2>
          <p>
            Whether you need branded office supplies, custom-sized furniture, or specialized 
            agricultural equipment — we've got you covered. Our custom order service is designed 
            for businesses that need something beyond the standard catalog, with solutions 
            tailored to your exact specifications and requirements.
          </p>
        </section>

        <section className="process-section">
          <h2>How Our Custom Order Process Works</h2>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="order-types-section">
          <h2>Popular Custom Order Categories</h2>
          <div className="order-types-grid">
            {customOrderTypes.map((type, index) => (
              <div key={index} className="order-type-card">
                <div className="order-icon">{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <h2>Why Choose Our Custom Order Service</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>No Order Too Complex</h3>
              <p>From single prototypes to large-scale productions, we handle projects of any size and complexity</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👨‍💼</div>
              <h3>Dedicated Account Manager</h3>
              <p>Personal point of contact who understands your business and manages your project end-to-end</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control at every step, from sourcing to final delivery</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💎</div>
              <h3>Competitive Pricing</h3>
              <p>Fair, transparent pricing even for one-off orders, with bulk discounts available</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Quick response times with detailed quotes within 24-48 hours of inquiry</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Sourcing</h3>
              <p>Access to international suppliers and manufacturers for specialized requirements</p>
            </div>
          </div>
        </section>

        <section className="examples-section">
          <h2>Recent Custom Order Success Stories</h2>
          <div className="examples-grid">
            <div className="example-card">
              <h3>🏨 Hotel Chain Furniture</h3>
              <p><strong>Challenge:</strong> 500 custom-sized beds and wardrobes for new hotel branch</p>
              <p><strong>Solution:</strong> Partnered with local manufacturer, delivered in 6 weeks</p>
              <p><strong>Result:</strong> 30% cost savings vs. imported alternatives</p>
            </div>
            <div className="example-card">
              <h3>📚 NGO Educational Materials</h3>
              <p><strong>Challenge:</strong> 10,000 branded notebooks and pens for rural schools</p>
              <p><strong>Solution:</strong> Custom design with local language content</p>
              <p><strong>Result:</strong> Delivered to 50 schools across 3 districts</p>
            </div>
            <div className="example-card">
              <h3>🏭 Factory Safety Equipment</h3>
              <p><strong>Challenge:</strong> Specialized protective gear not available locally</p>
              <p><strong>Solution:</strong> Sourced from certified international supplier</p>
              <p><strong>Result:</strong> 100% compliance with safety standards</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact-form">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>📋 Request Your Custom Quote</h2>
              <p>
                Ready to discuss your custom order requirements? Fill out the form with as much 
                detail as possible, and our team will get back to you with a comprehensive 
                proposal within 24-48 hours.
              </p>
              <div className="quote-benefits">
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Free consultation and quote</span>
                </div>
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>No minimum order quantity</span>
                </div>
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Flexible payment terms</span>
                </div>
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Quality guarantee</span>
                </div>
              </div>
              
              <div className="contact-methods">
                <h3>🌟 Or Contact Us Directly</h3>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>orders@mahega.co.ug</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+256 700 123 456</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>Mon-Fri: 8:00 AM - 6:00 PM EAT</span>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">🛒 Custom Order Request Form</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+256 700 000 000"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="orderType">Order Type *</label>
                  <select
                    id="orderType"
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select order type --</option>
                    <option value="branded-supplies">Branded Office Supplies</option>
                    <option value="custom-furniture">Custom Furniture</option>
                    <option value="bulk-packaging">Bulk Packaging Solutions</option>
                    <option value="specialized-equipment">Specialized Equipment</option>
                    <option value="event-supplies">Event Supplies</option>
                    <option value="uniforms">Uniforms & Apparel</option>
                    <option value="other">Other (specify in description)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Estimated Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="e.g., 100 pieces, 50 sets"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="deadline">Required Deadline</label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range (Optional)</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">-- Select budget range --</option>
                    <option value="under-1m">Under UGX 1,000,000</option>
                    <option value="1m-5m">UGX 1M - 5M</option>
                    <option value="5m-10m">UGX 5M - 10M</option>
                    <option value="10m-25m">UGX 10M - 25M</option>
                    <option value="over-25m">Over UGX 25M</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Detailed Requirements *</label>
                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please provide detailed specifications, materials, dimensions, colors, branding requirements, special features, or any other specific needs..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                🚀 Submit Custom Order Request
              </button>
              
              <p className="form-note">
                * Required fields. We'll respond with a detailed quote within 24-48 hours.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CustomOrders;