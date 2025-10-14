// src/pages/Services/Procurement.js
import React, { useState } from 'react';
import '../../style/procument.css';

function Procurement() {
  const [activeService, setActiveService] = useState('procurement');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    itemsNeeded: '',
    quantity: '',
    budget: '',
    timeline: '',
    requirements: ''
  });

  const services = [
    { id: 'consulting', name: 'Supply Chain Consulting', icon: '📊' },
    { id: 'custom-orders', name: 'Custom Orders', icon: '🛒' },
    { id: 'export-logistics', name: 'Export Logistics', icon: '🚢' },
    { id: 'logistics', name: 'Logistics Management', icon: '🚛' },
    { id: 'procurement', name: 'Procurement Services', icon: '📋' }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Requirements Consultation',
      description: 'Share your procurement needs, specifications, and budget constraints with our team',
      icon: '💬'
    },
    {
      step: '2',
      title: 'Supplier Sourcing',
      description: 'We identify and vet the best suppliers locally and internationally for your needs',
      icon: '🔍'
    },
    {
      step: '3',
      title: 'Price Negotiation',
      description: 'Our experts negotiate the best prices and terms on your behalf',
      icon: '💰'
    },
    {
      step: '4',
      title: 'Quality Assurance',
      description: 'We conduct thorough quality checks and inspections before procurement',
      icon: '✅'
    },
    {
      step: '5',
      title: 'Order Management',
      description: 'We handle all purchase orders, documentation, and supplier coordination',
      icon: '📝'
    },
    {
      step: '6',
      title: 'Delivery Coordination',
      description: 'Seamless delivery to your location with full tracking and support',
      icon: '🚚'
    }
  ];

  const industries = [
    {
      title: 'Corporate Offices',
      description: 'Office supplies, furniture, IT equipment, and facility management items',
      icon: '🏢'
    },
    {
      title: 'Educational Institutions',
      description: 'School supplies, laboratory equipment, furniture, and educational materials',
      icon: '🎓'
    },
    {
      title: 'Healthcare Facilities',
      description: 'Medical equipment, supplies, pharmaceuticals, and hospital furniture',
      icon: '🏥'
    },
    {
      title: 'Hotels & Hospitality',
      description: 'Furniture, linens, amenities, kitchen equipment, and operational supplies',
      icon: '🏨'
    },
    {
      title: 'Government Agencies',
      description: 'Office equipment, public service materials, and specialized government needs',
      icon: '🏛️'
    },
    {
      title: 'Manufacturing & Industry',
      description: 'Raw materials, machinery, tools, and industrial supplies',
      icon: '🏭'
    }
  ];

  const benefits = [
    {
      title: 'Cost Savings',
      description: 'Access to better pricing through our supplier networks and bulk purchasing power',
      icon: '💰'
    },
    {
      title: 'Time Efficiency',
      description: 'Save time on supplier research, negotiations, and procurement processes',
      icon: '⏱️'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and supplier vetting ensure you get the best products',
      icon: '✅'
    },
    {
      title: 'Global Sourcing',
      description: 'Access to international suppliers and hard-to-find specialized items',
      icon: '🌍'
    },
    {
      title: 'Risk Management',
      description: 'We handle supplier risks, quality issues, and supply chain disruptions',
      icon: '🛡️'
    },
    {
      title: 'Single Point of Contact',
      description: 'Dedicated procurement manager for all your sourcing needs',
      icon: '👨‍💼'
    }
  ];

  const sourcingExamples = [
    {
      title: '🏢 Office Equipment Bulk Order',
      description: 'Challenge: Equip new 50-person office with furniture and IT equipment',
      solution: 'Sourced from multiple verified suppliers with 25% cost savings',
      result: 'Complete office setup delivered in 3 weeks'
    },
    {
      title: '🏥 Medical Supplies Procurement',
      description: 'Challenge: Source specialized medical equipment not available locally',
      solution: 'International sourcing with proper certifications and compliance',
      result: 'Equipment delivered with full documentation and training'
    },
    {
      title: '🎓 School Renovation Project',
      description: 'Challenge: Furnish entire school with desks, chairs, and teaching aids',
      solution: 'Custom manufacturing with child-safe materials and bulk discounts',
      result: '2000+ items delivered across 5 locations on schedule'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuoteRequest = () => {
    document.getElementById('contact-form').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Procurement Quote Request:', formData);
      alert('Thank you for your procurement request! Our team will contact you within 24 hours with sourcing options.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        itemsNeeded: '',
        quantity: '',
        budget: '',
        timeline: '',
        requirements: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="procurement-container">
      {/* Sidebar */}
      <aside className="services-sidebar">
        <h3>Our Services</h3>
        <nav className="services-nav">
          {services.map(service => (
            <a
              key={service.id}
              href={`/services/${service.id}`}
              className={activeService === service.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActiveService(service.id);
              }}
            >
              <span className="service-icon">{service.icon}</span>
              {service.name}
            </a>
          ))}
        </nav>
        
        <div className="sidebar-cta">
          <h4>Need Procurement Help?</h4>
          <p>Let us handle your sourcing needs efficiently.</p>
          <button className="cta-button" onClick={handleQuoteRequest}>
            Get Quote
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="procurement-main">
        <div className="hero-section">
          <h1>Procurement & Sourcing</h1>
          <p className="hero-subtitle">Smart Sourcing for Your Business Needs</p>
        </div>

        <section className="intro-section">
          <h2>Your Strategic Procurement Partner</h2>
          <p>
            Let us handle the heavy lifting. Our procurement team identifies, negotiates, and delivers 
            the exact products you need — saving you time, money, and hassle. Whether you need 10 reams 
            of paper or 100 office chairs, we've got you covered with our extensive supplier network 
            and procurement expertise.
          </p>
        </section>

        <section className="process-section">
          <h2>How Our Procurement Process Works</h2>
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

        <section className="industries-section">
          <h2>Industries We Serve</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <h2>Why Choose Our Procurement Service</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sourcing-section">
          <h2>Recent Procurement Success Stories</h2>
          <div className="sourcing-grid">
            {sourcingExamples.map((example, index) => (
              <div key={index} className="sourcing-card">
                <h3>{example.title}</h3>
                <p><strong>Challenge:</strong> {example.description}</p>
                <p><strong>Solution:</strong> {example.solution}</p>
                <p><strong>Result:</strong> {example.result}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact-form">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>📋 Request Procurement Assistance</h2>
              <p>
                Ready to streamline your procurement process? Tell us what you need, and our team 
                will get back to you with sourcing options and competitive pricing within 24 hours.
              </p>
              
              <div className="quote-benefits">
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Free procurement consultation</span>
                </div>
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Multiple supplier options</span>
                </div>
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Quality guarantee</span>
                </div>
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Best price negotiation</span>
                </div>
              </div>
              
              <div className="contact-methods">
                <h3>📞 Or Contact Us Directly</h3>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>procurement@mahega.co.ug</span>
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
              <h3 className="form-title">🛍️ Procurement Request Form</h3>
              
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
                  <label htmlFor="industry">Industry *</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select your industry --</option>
                    <option value="corporate">Corporate Offices</option>
                    <option value="education">Educational Institutions</option>
                    <option value="healthcare">Healthcare Facilities</option>
                    <option value="hospitality">Hotels & Hospitality</option>
                    <option value="government">Government Agencies</option>
                    <option value="manufacturing">Manufacturing & Industry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="itemsNeeded">Items Needed *</label>
                  <input
                    type="text"
                    id="itemsNeeded"
                    name="itemsNeeded"
                    value={formData.itemsNeeded}
                    onChange={handleInputChange}
                    placeholder="e.g., Office chairs, computers, supplies"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quantity">Estimated Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="e.g., 50 units, 100 pieces"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
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
                <label htmlFor="timeline">Required Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                >
                  <option value="">-- Select timeline --</option>
                  <option value="urgent">Urgent (Within 1 week)</option>
                  <option value="1-2-weeks">1-2 Weeks</option>
                  <option value="2-4-weeks">2-4 Weeks</option>
                  <option value="1-2-months">1-2 Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="requirements">Detailed Requirements *</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows="6"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Please provide detailed specifications, brand preferences, quality requirements, delivery expectations, and any other specific needs..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? '⏳ Submitting Request...' : '🚀 Submit Procurement Request'}
              </button>
              
              <p className="form-note">
                * Required fields. We'll respond with sourcing options within 24 hours.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Procurement;