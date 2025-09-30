// src/pages/Services/Consulting.js
import React, { useState } from 'react';
import '../../style/consulting.css';
function Consulting() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [activeService, setActiveService] = useState('consulting');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const services = [
    { id: 'consulting', name: 'Supply Chain Consulting', icon: '📊' },
    { id: 'custom-orders', name: 'Custom Orders', icon: '🛒' },
    { id: 'export-logistics', name: 'Export Logistics', icon: '🚢' },
    { id: 'logistics', name: 'Logistics Management', icon: '🚛' },
    { id: 'procurement', name: 'Procurement Services', icon: '📋' }
  ];

  const additionalServices = [
    {
      title: 'Digital Transformation',
      description: 'Implement modern supply chain management systems and automation tools',
      icon: '💻'
    },
    {
      title: 'Risk Management',
      description: 'Identify vulnerabilities and develop contingency plans for supply chain disruptions',
      icon: '🛡️'
    },
    {
      title: 'Sustainability Consulting',
      description: 'Build eco-friendly supply chains and implement green logistics practices',
      icon: '🌱'
    },
    {
      title: 'Cost Analysis & Reduction',
      description: 'Comprehensive cost audits and strategic recommendations for savings',
      icon: '💰'
    },
    {
      title: 'Training & Development',
      description: 'Upskill your team with supply chain best practices and modern methodologies',
      icon: '🎓'
    },
    {
      title: 'Performance Analytics',
      description: 'KPI tracking, reporting dashboards and data-driven insights',
      icon: '📈'
    }
  ];

  return (
    <div className="consulting-container">
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
          <h4>Need Help?</h4>
          <p>Get expert advice tailored to your business needs.</p>
          <button className="cta-button" onClick={() => document.getElementById('contact-form').scrollIntoView()}>
            Free Consultation
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="consulting-main">
        <div className="hero-section">
          <h1>Supply Chain Consulting</h1>
          <p className="hero-subtitle">Transform your operations with expert guidance</p>
        </div>

        <section className="intro-section">
          <h2>Optimize Your Procurement & Logistics</h2>
          <p>
            Many businesses lose money through inefficient sourcing, poor inventory management, 
            or unreliable suppliers. Our consulting service helps you streamline operations, 
            cut costs and build a resilient supply chain that drives growth and profitability.
          </p>
        </section>

        <section className="consulting-areas">
          <h2>Core Consulting Areas</h2>
          <div className="areas-grid">
            <div className="area-card">
              <h3>📦 Procurement Strategy</h3>
              <p>Vendor selection, negotiation tactics, contract management and supplier relationship optimization</p>
            </div>
            <div className="area-card">
              <h3>📊 Inventory Optimization</h3>
              <p>Reduce waste, prevent stockouts, improve turnover rates and implement just-in-time strategies</p>
            </div>
            <div className="area-card">
              <h3>🚛 Logistics Planning</h3>
              <p>Route optimization, delivery scheduling, warehousing efficiency and transportation cost reduction</p>
            </div>
            <div className="area-card">
              <h3>🔍 Supplier Audits</h3>
              <p>Quality assessments, reliability checks, compliance verification and performance monitoring</p>
            </div>
            <div className="area-card">
              <h3>🌍 Export Readiness</h3>
              <p>International documentation, packaging standards, customs compliance and market entry strategies</p>
            </div>
            <div className="area-card">
              <h3>⚡ Process Automation</h3>
              <p>Workflow digitization, system integration and technology implementation for efficiency gains</p>
            </div>
          </div>
        </section>

        <section className="additional-services">
          <h2>Specialized Services</h2>
          <div className="services-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="target-audience">
          <h2>Who We Serve</h2>
          <div className="audience-cards">
            <div className="audience-card">
              <div className="audience-icon">🏢</div>
              <h3>Growing SMEs</h3>
              <p>Small and medium enterprises needing structured supply chain processes and scalable solutions</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🤝</div>
              <h3>NGOs & Non-Profits</h3>
              <p>Organizations managing complex humanitarian supply chains and donor-funded procurement</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🏨</div>
              <h3>Hospitality & Education</h3>
              <p>Hotels, restaurants, schools managing bulk recurring orders and seasonal demand fluctuations</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🌍</div>
              <h3>Export Businesses</h3>
              <p>Companies entering new international markets or expanding their global footprint</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact-form">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>📞 Get Your Free Consultation</h2>
              <p>
                Book a complimentary 30-minute consultation with our supply chain experts. 
                We'll review your current processes and propose actionable improvements — no obligation.
              </p>
              <div className="benefits-list">
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Free initial assessment</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Customized recommendations</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>No commitment required</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Expert industry insights</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Response within 24 hours</span>
                </div>
              </div>
              
              <div className="contact-methods">
                <h3>🌟 Or Contact Us Directly</h3>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>mahega@.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+2567511200</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>Mon-Fri: 8:00 AM - 6:00 PM EAT</span>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">💬 Send Us Your Inquiry</h3>
              
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
              
              <div className="form-row">
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
              
              <div className="form-group">
                <label htmlFor="service">Primary Service Interest *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">-- Select a service --</option>
                  <option value="consulting">Supply Chain Consulting</option>
                  <option value="procurement">Procurement Strategy</option>
                  <option value="logistics">Logistics Planning & Optimization</option>
                  <option value="export">Export Readiness & Documentation</option>
                  <option value="digital">Digital Transformation</option>
                  <option value="risk">Risk Management & Auditing</option>
                  <option value="training">Training & Development</option>
                  <option value="other">Other (please specify in message)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details & Requirements *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your current challenges, goals, timeline, and any specific requirements. The more details you provide, the better we can assist you."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                🚀 Request Free Consultation
              </button>
              
              <p className="form-note">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Consulting;  