// src/pages/Services/ExportLogistics.js
import React, { useState } from 'react';
import '../../style/ExportLogistics.css';

function ExportLogistics() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    destination: '',
    shipmentVolume: '',
    timeline: '',
    currentExperience: '',
    requirements: ''
  });

  const [activeService, setActiveService] = useState('export-logistics');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Export Logistics Form submitted:', formData);
    alert('Thank you for your export inquiry! Our logistics team will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      productType: '',
      destination: '',
      shipmentVolume: '',
      timeline: '',
      currentExperience: '',
      requirements: ''
    });
  };

  const services = [
    { id: 'consulting', name: 'Supply Chain Consulting', icon: '📊' },
    { id: 'custom-orders', name: 'Custom Orders', icon: '🛒' },
    { id: 'export-logistics', name: 'Export Logistics', icon: '🚢' },
    { id: 'logistics', name: 'Logistics Management', icon: '🚛' },
    { id: 'procurement', name: 'Procurement Services', icon: '📋' }
  ];

  const exportServices = [
    {
      title: 'Export Documentation',
      description: 'Complete paperwork including certificates of origin, commercial invoices, export permits, and phytosanitary certificates',
      icon: '📄'
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with international standards (EU, US, EAC, COMESA) and destination country requirements',
      icon: '✅'
    },
    {
      title: 'Custom Packaging & Labeling',
      description: 'Professional packaging solutions and international labeling standards for various product types',
      icon: '📦'
    },
    {
      title: 'Freight Coordination',
      description: 'Multi-modal transport solutions including air, sea, and land freight with competitive rates',
      icon: '🚛'
    },
    {
      title: 'Customs Clearance',
      description: 'Expert customs clearance and port handling services to avoid delays and complications',
      icon: '🏛️'
    },
    {
      title: 'Tracking & Reporting',
      description: 'Real-time shipment tracking and comprehensive reporting throughout the export journey',
      icon: '📊'
    }
  ];

  const industries = [
    {
      title: 'Coffee & Tea Exporters',
      description: 'Specialized handling of Uganda\'s premium coffee and tea with proper storage and export protocols',
      icon: '☕',
      features: ['Temperature-controlled storage', 'Quality certifications', 'Direct buyer connections']
    },
    {
      title: 'Handicraft & Textile Makers',
      description: 'Artisan products export with cultural preservation and international market positioning',
      icon: '🎨',
      features: ['Cultural compliance', 'Artisan certifications', 'Market positioning']
    },
    {
      title: 'Agro-processors',
      description: 'Agricultural products including grains, oils, spices with food safety compliance',
      icon: '🌾',
      features: ['Food safety standards', 'Organic certifications', 'Bulk handling']
    },
    {
      title: 'Manufacturers',
      description: 'Industrial products, furniture, and metalworks with quality assurance protocols',
      icon: '🏭',
      features: ['Quality inspections', 'Industrial standards', 'B2B connections']
    }
  ];

  const exportProcess = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Product assessment, market analysis, and export feasibility study',
      icon: '🤝'
    },
    {
      step: '2',
      title: 'Documentation Preparation',
      description: 'Complete all required export documentation and certifications',
      icon: '📋'
    },
    {
      step: '3',
      title: 'Compliance Verification',
      description: 'Ensure all products meet destination country standards and regulations',
      icon: '🔍'
    },
    {
      step: '4',
      title: 'Packaging & Labeling',
      description: 'Professional packaging and international standard labeling',
      icon: '📦'
    },
    {
      step: '5',
      title: 'Logistics Coordination',
      description: 'Arrange freight, customs clearance, and shipping logistics',
      icon: '🚢'
    },
    {
      step: '6',
      title: 'Delivery & Tracking',
      description: 'Monitor shipment and provide real-time updates until delivery',
      icon: '📍'
    }
  ];

  const whyChooseUs = [
    {
      title: '10+ Years Experience',
      description: 'Decade of expertise in Uganda export markets and international trade regulations',
      icon: '🏆'
    },
    {
      title: 'Global Network',
      description: 'Established partnerships with freight forwarders, customs agents, and buyers worldwide',
      icon: '🌍'
    },
    {
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees or surprise charges',
      icon: '💰'
    },
    {
      title: 'Dedicated Support',
      description: 'Assigned export compliance officer for personalized service and guidance',
      icon: '👨‍💼'
    },
    {
      title: 'Technology Integration',
      description: 'Modern tracking systems and digital documentation for efficient processing',
      icon: '💻'
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive insurance coverage and risk mitigation strategies',
      icon: '🛡️'
    }
  ];

  return (
    <div className="export-logistics-container">
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
          <h4>Ready to Export?</h4>
          <p>Get expert guidance for your international shipping needs.</p>
          <button className="cta-button" onClick={() => document.getElementById('contact-form').scrollIntoView()}>
            Get Export Quote
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="export-logistics-main">
        <div className="hero-section">
          <h1>Export Handling & Logistics</h1>
          <p className="hero-subtitle">Your gateway to global markets</p>
        </div>

        <section className="intro-section">
          <h2>Simplifying Global Trade for Ugandan Businesses</h2>
          <p>
            We handle the complexity of exporting Ugandan goods — from premium coffee and traditional 
            crafts to agricultural produce and manufactured items. Let us manage documentation, packaging, 
            customs, and shipping so you can focus on what you do best: production and sales. Our 
            comprehensive export logistics services ensure your products reach international markets 
            efficiently, compliantly, and cost-effectively.
          </p>
        </section>

        <section className="services-section">
          <h2>Comprehensive Export Services</h2>
          <div className="services-grid">
            {exportServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="process-section">
          <h2>Our Export Process</h2>
          <div className="process-timeline">
            {exportProcess.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="industries-section">
          <h2>Industries We Serve</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <ul className="industry-features">
                  {industry.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <h2>Why Partner With Us?</h2>
          <div className="benefits-grid">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="success-stories-section">
          <h2>Export Success Stories</h2>
          <div className="stories-grid">
            <div className="story-card">
              <h3>🌍 Coffee to Germany</h3>
              <p><strong>Client:</strong> Bugisu Coffee Cooperative</p>
              <p><strong>Challenge:</strong> First-time export to European market with strict quality standards</p>
              <p><strong>Solution:</strong> Complete certification process and quality compliance</p>
              <p><strong>Result:</strong> Successfully exported 50 tons, established long-term partnership</p>
            </div>
            <div className="story-card">
              <h3>🎨 Crafts to USA</h3>
              <p><strong>Client:</strong> Kampala Artisan Collective</p>
              <p><strong>Challenge:</strong> Complex customs requirements for handmade goods</p>
              <p><strong>Solution:</strong> Streamlined documentation and cultural compliance</p>
              <p><strong>Result:</strong> Monthly shipments to 5 US states, 200% revenue growth</p>
            </div>
            <div className="story-card">
              <h3>🌾 Grains to Kenya</h3>
              <p><strong>Client:</strong> Northern Uganda Grain Processors</p>
              <p><strong>Challenge:</strong> Regional trade documentation and bulk transport</p>
              <p><strong>Solution:</strong> EAC compliance and efficient land freight</p>
              <p><strong>Result:</strong> Reduced shipping costs by 30%, faster delivery times</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact-form">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>🚢 Get Your Export Quote</h2>
              <p>
                Ready to take your products global? Fill out our export consultation form and our 
                logistics experts will provide you with a comprehensive shipping solution and 
                competitive quote within 24 hours.
              </p>
              <div className="export-benefits">
                <div className="export-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Free export consultation</span>
                </div>
                <div className="export-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Competitive freight rates</span>
                </div>
                <div className="export-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Complete documentation support</span>
                </div>
                <div className="export-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>End-to-end tracking</span>
                </div>
              </div>
              
              <div className="contact-methods">
                <h3>🌟 Direct Contact</h3>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>exports@mahega.co.ug</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+256 700 123 456</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>Mon-Sat: 8:00 AM - 7:00 PM EAT</span>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">🌍 Export Consultation Request</h3>
              
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
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+256 700 000 000"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company/Organization *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="productType">Product Type *</label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select product type --</option>
                    <option value="coffee-tea">Coffee & Tea</option>
                    <option value="handicrafts">Handicrafts & Textiles</option>
                    <option value="agricultural">Agricultural Products</option>
                    <option value="manufactured">Manufactured Goods</option>
                    <option value="processed-foods">Processed Foods</option>
                    <option value="other">Other (specify in requirements)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="destination">Destination Country/Region *</label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select destination --</option>
                    <option value="eac">East African Community (EAC)</option>
                    <option value="europe">Europe (EU)</option>
                    <option value="usa-canada">USA & Canada</option>
                    <option value="middle-east">Middle East</option>
                    <option value="asia">Asia Pacific</option>
                    <option value="other">Other (specify in requirements)</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="shipmentVolume">Estimated Shipment Volume</label>
                  <select
                    id="shipmentVolume"
                    name="shipmentVolume"
                    value={formData.shipmentVolume}
                    onChange={handleInputChange}
                  >
                    <option value="">-- Select volume --</option>
                    <option value="small">Small (Under 100kg)</option>
                    <option value="medium">Medium (100kg - 1 ton)</option>
                    <option value="large">Large (1-10 tons)</option>
                    <option value="bulk">Bulk (Over 10 tons)</option>
                    <option value="container">Full Container Load</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">Preferred Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">-- Select timeline --</option>
                    <option value="urgent">Urgent (Within 1 week)</option>
                    <option value="standard">Standard (2-4 weeks)</option>
                    <option value="flexible">Flexible (1-2 months)</option>
                    <option value="planning">Planning Stage (3+ months)</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="currentExperience">Export Experience Level</label>
                <select
                  id="currentExperience"
                  name="currentExperience"
                  value={formData.currentExperience}
                  onChange={handleInputChange}
                >
                  <option value="">-- Select experience level --</option>
                  <option value="first-time">First-time exporter</option>
                  <option value="limited">Limited experience (1-5 exports)</option>
                  <option value="experienced">Experienced (5+ exports)</option>
                  <option value="regular">Regular exporter</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="requirements">Specific Requirements & Details *</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows="5"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Please provide details about your products, specific export requirements, certifications needed, packaging preferences, and any other important information..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                🚀 Request Export Consultation
              </button>
              
              <p className="form-note">
                * Required fields. Our export specialists will contact you within 24 hours.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ExportLogistics;