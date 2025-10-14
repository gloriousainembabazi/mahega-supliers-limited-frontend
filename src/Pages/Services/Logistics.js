// src/pages/Services/Logistics.js
import React, { useState } from 'react';
import '../../style/Logistics.css';

function Logistics() {
  const [activeService, setActiveService] = useState('logistics');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    deliveryType: '',
    pickupLocation: '',
    deliveryLocation: '',
    packageType: '',
    weight: '',
    urgency: '',
    specialRequirements: ''
  });

  const services = [
    { id: 'consulting', name: 'Supply Chain Consulting', icon: '📊' },
    { id: 'custom-orders', name: 'Custom Orders', icon: '🛒' },
    { id: 'export-logistics', name: 'Export Logistics', icon: '🚢' },
    { id: 'logistics', name: 'Logistics Management', icon: '🚛' },
    { id: 'procurement', name: 'Procurement Services', icon: '📋' }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Deliveries Weekly',
      icon: '📦'
    },
    {
      number: '98%',
      label: 'On-Time Rate',
      icon: '⏱️'
    },
    {
      number: '50+',
      label: 'Vehicles in Fleet',
      icon: '🚚'
    },
    {
      number: '24/7',
      label: 'Support Team',
      icon: '📞'
    }
  ];

  const coverageAreas = [
    {
      area: '🏙️ Within Kampala',
      description: 'Same-day delivery (orders placed before 12 PM)'
    },
    {
      area: '🏘️ Major Cities',
      description: 'Jinja, Mbale, Mbarara, Gulu, Fort Portal (24–48 hours)'
    },
    {
      area: '🏞️ Rural & Remote Areas',
      description: '3–5 business days, with SMS tracking'
    },
    {
      area: '🌍 East Africa',
      description: 'Kenya, Tanzania, Rwanda, South Sudan (5–7 days, by road or air)'
    }
  ];

  const specializedSolutions = [
    {
      title: 'Bulk Deliveries',
      description: 'For schools, hospitals, factories, and events — handled with precision.',
      icon: '📦'
    },
    {
      title: 'Temperature-Sensitive',
      description: 'Medical supplies, beverages, perishables — delivered under controlled conditions.',
      icon: '❄️'
    },
    {
      title: 'High-Value Items',
      description: 'Sealed, tracked, and insured delivery for maximum security.',
      icon: '🔒'
    },
    {
      title: 'After-Hours/Weekend',
      description: 'Available on request for urgent or special timing needs.',
      icon: '🌙'
    }
  ];

  const benefits = [
    'On-Time Guarantee — We meet 98% of promised delivery windows',
    'No Hidden Fees — Transparent pricing based on weight, volume, and distance',
    'Dedicated Account Manager — For corporate and recurring clients',
    'Flexible Scheduling — Morning, afternoon, or after-hours delivery slots',
    'Damage-Free Promise — Careful handling and secure packaging'
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
      console.log('Logistics Quote Request:', formData);
      alert('Thank you for your logistics quote request! We will contact you within 1 hour with pricing and options.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        deliveryType: '',
        pickupLocation: '',
        deliveryLocation: '',
        packageType: '',
        weight: '',
        urgency: '',
        specialRequirements: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="logistics-container">
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
          <h4>Need Delivery?</h4>
          <p>Get a free quote for your logistics needs.</p>
          <button className="cta-button" onClick={handleQuoteRequest}>
            Get Quote
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="logistics-main">
        <div className="hero-section">
          <h1>Logistics & Delivery</h1>
          <p className="hero-subtitle">🚛 Reliable. ⏱️ Timely. 🌍 Nationwide.</p>
        </div>

        <section className="intro-section">
          <h2>Your Trusted Logistics Partner</h2>
          <p>
            At Mahega General Suppliers Limited, we don't just supply products — we ensure they reach you, 
            wherever you are, on time and in perfect condition. Our logistics network covers every region 
            in Uganda and extends to key East African markets.
          </p>
        </section>

        <section className="stats-section">
          <h2>Our Logistics Performance</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="coverage-section">
          <h2>📍 Our Delivery Coverage</h2>
          <ul className="coverage-list">
            {coverageAreas.map((area, index) => (
              <li key={index} className="coverage-item">
                <strong>{area.area}</strong> — {area.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="fleet-section">
          <h2>🚗 Our Fleet & Technology</h2>
          <p>
            We operate a modern fleet of delivery vans, trucks, and refrigerated vehicles — all GPS-tracked 
            and maintained to the highest standards. Our logistics team uses real-time route optimization 
            software to ensure speed and fuel efficiency.
          </p>
          <p>
            Every client receives:
          </p>
          <ul className="feature-list">
            <li> Order confirmation SMS/email</li>
            <li> Live tracking link (where applicable)</li>
            <li> Driver contact details before delivery</li>
            <li> Proof of delivery (signed receipt or photo)</li>
          </ul>
        </section>

        <section className="solutions-section">
          <h2>🎯 Specialized Logistics Solutions</h2>
          <div className="solutions-grid">
            {specializedSolutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <h2> Why Clients Choose Our Logistics</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                ✔ <strong>{benefit.split('—')[0]}</strong> — {benefit.split('—')[1]}
              </li>
            ))}
          </ul>
        </section>

        {/* New Contact Form Section */}
        <section className="contact-section" id="contact-form">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>📦 Get Your Logistics Quote</h2>
              <p>
                Ready to ship your items? Fill out the form with your delivery details, and our team 
                will get back to you with pricing and options within 1 hour.
              </p>
              
              <div className="quote-benefits">
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Free, no-obligation quote</span>
                </div>
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Response within 1 hour</span>
                </div>
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Flexible pickup & delivery times</span>
                </div>
                <div className="quote-benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Insurance options available</span>
                </div>
              </div>
              
              <div className="contact-methods">
                <h3>🚚 Or Contact Us Directly</h3>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>logistics@mahega.co.ug</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+256 700 123 456</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+256 414 123 456</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>24/7 Logistics Support</span>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">🚛 Logistics Quote Request</h3>
              
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
                  <label htmlFor="deliveryType">Delivery Type *</label>
                  <select
                    id="deliveryType"
                    name="deliveryType"
                    value={formData.deliveryType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select delivery type --</option>
                    <option value="same-day">Same Day Delivery</option>
                    <option value="next-day">Next Day Delivery</option>
                    <option value="express">Express Delivery</option>
                    <option value="standard">Standard Delivery</option>
                    <option value="bulk">Bulk Delivery</option>
                    <option value="international">International Delivery</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="packageType">Package Type *</label>
                  <select
                    id="packageType"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select package type --</option>
                    <option value="documents">Documents</option>
                    <option value="small-package">Small Package (&lt;5kg)</option>
                    <option value="medium-package">Medium Package (5-20kg)</option>
                    <option value="large-package">Large Package (20-50kg)</option>
                    <option value="bulk-items">Bulk Items</option>
                    <option value="furniture">Furniture</option>
                    <option value="equipment">Equipment</option>
                    <option value="perishable">Perishable Goods</option>
                    <option value="fragile">Fragile Items</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pickupLocation">Pickup Location *</label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder="Enter pickup address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="deliveryLocation">Delivery Location *</label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleInputChange}
                    placeholder="Enter delivery address"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="weight">Approximate Weight (kg)</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    placeholder="e.g., 10"
                    min="0"
                    step="0.1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="urgency">Urgency</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                  >
                    <option value="">-- Select urgency --</option>
                    <option value="standard">Standard (3-5 days)</option>
                    <option value="urgent">Urgent (1-2 days)</option>
                    <option value="express">Express (Same day)</option>
                    <option value="emergency">Emergency (Within hours)</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="specialRequirements">Special Requirements</label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  rows="4"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  placeholder="Any special handling instructions, delivery time preferences, access restrictions, or other requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? '⏳ Getting Your Quote...' : '🚀 Get Free Quote Now'}
              </button>
              
              <p className="form-note">
                * Required fields. We'll respond with pricing and options within 1 hour.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Logistics;