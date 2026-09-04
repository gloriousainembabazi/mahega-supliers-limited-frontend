// src/pages/Services/Logistics.js
import React, { useState } from "react";
import {
  Package,
  Clock,
  Truck,
  Headset,
  MapPin,
  Building2,
  Home,
  Mountain,
  Globe,
  Snowflake,
  Lock,
  Moon,
  Check,
  Mail,
  Smartphone,
  Phone,
  Send,
  Loader2,
} from "lucide-react";
import "../../style/Logistics.css";

function Logistics() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    deliveryType: "",
    pickupLocation: "",
    deliveryLocation: "",
    packageType: "",
    weight: "",
    urgency: "",
    specialRequirements: "",
  });

  const stats = [
    { number: "500+", label: "Deliveries Weekly", icon: Package },
    { number: "98%", label: "On-Time Rate", icon: Clock },
    { number: "50+", label: "Vehicles in Fleet", icon: Truck },
    { number: "24/7", label: "Support Team", icon: Headset },
  ];

  const coverageAreas = [
    {
      icon: Building2,
      area: "Within Kampala",
      desc: "Same-day delivery (orders placed before 12 PM).",
    },
    {
      icon: Home,
      area: "Major Cities",
      desc: "Jinja, Mbale, Mbarara, Gulu, Fort Portal (24–48 hours).",
    },
    {
      icon: Mountain,
      area: "Rural & Remote Areas",
      desc: "3–5 business days, with SMS tracking.",
    },
    {
      icon: Globe,
      area: "East Africa",
      desc: "Kenya, Tanzania, Rwanda, South Sudan (5–7 days, by road or air).",
    },
  ];

  const fleetFeatures = [
    "Order confirmation SMS/email",
    "Live tracking link (where applicable)",
    "Driver contact details before delivery",
    "Proof of delivery (signed receipt or photo)",
  ];

  const specializedSolutions = [
    {
      icon: Package,
      title: "Bulk Deliveries",
      desc: "For schools, hospitals, factories, and events — handled with precision.",
    },
    {
      icon: Snowflake,
      title: "Temperature-Sensitive",
      desc: "Medical supplies, beverages, perishables — delivered under controlled conditions.",
    },
    {
      icon: Lock,
      title: "High-Value Items",
      desc: "Sealed, tracked, and insured delivery for maximum security.",
    },
    {
      icon: Moon,
      title: "After-Hours/Weekend",
      desc: "Available on request for urgent or special timing needs.",
    },
  ];

  const benefits = [
    { title: "On-Time Guarantee", desc: "We meet 98% of promised delivery windows." },
    { title: "No Hidden Fees", desc: "Transparent pricing based on weight, volume, and distance." },
    { title: "Dedicated Account Manager", desc: "For corporate and recurring clients." },
    { title: "Flexible Scheduling", desc: "Morning, afternoon, or after-hours delivery slots." },
    { title: "Damage-Free Promise", desc: "Careful handling and secure packaging." },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Logistics Quote Request:", formData);
      alert("Thank you for your logistics quote request! We will contact you within 1 hour with pricing and options.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        deliveryType: "",
        pickupLocation: "",
        deliveryLocation: "",
        packageType: "",
        weight: "",
        urgency: "",
        specialRequirements: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg">
      {/* Hero */}
      <section className="lg-hero">
        <div className="lg-container">
          <span className="lg-badge"><Truck size={15} /> Logistics & Delivery</span>
          <h1>Reliable. Timely. Nationwide.</h1>
          <p>
            At Mahega General Suppliers Limited, we don't just supply products
            — we ensure they reach you, wherever you are, on time and in
            perfect condition. Our logistics network covers every region in
            Uganda and extends to key East African markets.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="lg-stats">
        <div className="lg-container lg-stats-grid">
          {stats.map(({ number, label, icon: Icon }) => (
            <div className="lg-stat" key={label}>
              <span className="lg-stat-icon"><Icon size={22} /></span>
              <div className="lg-stat-value">{number}</div>
              <div className="lg-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="lg-section">
        <div className="lg-container">
          <div className="lg-section-heading">
            <span className="lg-heading-icon"><MapPin size={20} /></span>
            <h2>Our Delivery Coverage</h2>
            <span className="lg-underline" />
          </div>
          <div className="lg-coverage-grid">
            {coverageAreas.map(({ icon: Icon, area, desc }) => (
              <div className="lg-coverage-card" key={area}>
                <span className="lg-card-icon"><Icon size={24} /></span>
                <div>
                  <h3>{area}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="lg-section lg-alt-section">
        <div className="lg-container lg-fleet-grid">
          <div className="lg-fleet-content">
            <div className="lg-section-heading lg-section-heading-left">
              <span className="lg-heading-icon"><Truck size={20} /></span>
              <h2>Our Fleet & Technology</h2>
              <span className="lg-underline" />
            </div>
            <p>
              We operate a modern fleet of delivery vans, trucks, and
              refrigerated vehicles — all GPS-tracked and maintained to the
              highest standards. Our logistics team uses real-time route
              optimization software to ensure speed and fuel efficiency.
            </p>
            <p className="lg-fleet-lead">Every client receives:</p>
            <ul className="lg-fleet-list">
              {fleetFeatures.map((f) => (
                <li key={f}><Check size={17} /> {f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="lg-section">
        <div className="lg-container">
          <div className="lg-section-heading">
            <h2>Specialized Logistics Solutions</h2>
            <span className="lg-underline" />
          </div>
          <div className="lg-grid lg-grid-4">
            {specializedSolutions.map(({ icon: Icon, title, desc }) => (
              <div className="lg-card" key={title}>
                <span className="lg-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="lg-section lg-alt-section">
        <div className="lg-container">
          <div className="lg-section-heading">
            <h2>Why Clients Choose Our Logistics</h2>
            <span className="lg-underline" />
          </div>
          <ul className="lg-benefits-list">
            {benefits.map(({ title, desc }) => (
              <li key={title}>
                <Check size={18} />
                <span><strong>{title}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="lg-section lg-contact-section" id="contact-form">
        <div className="lg-container lg-contact-grid">
          <div className="lg-contact-info">
            <h2>Get Your Logistics Quote</h2>
            <p>
              Ready to ship your items? Fill out the form with your delivery
              details, and our team will get back to you with pricing and
              options within 1 hour.
            </p>
            <ul className="lg-quote-benefits">
              <li><Check size={17} /> Free, no-obligation quote</li>
              <li><Check size={17} /> Response within 1 hour</li>
              <li><Check size={17} /> Flexible pickup & delivery times</li>
              <li><Check size={17} /> Insurance options available</li>
            </ul>

            <div className="lg-contact-methods">
              <h3>Or Contact Us Directly</h3>
              <p><Mail size={16} /> logistics@mahega.co.ug</p>
              <p><Smartphone size={16} /> +256 700 123 456</p>
              <p><Phone size={16} /> +256 414 123 456</p>
              <p><Clock size={16} /> 24/7 Logistics Support</p>
            </div>
          </div>

          <form className="lg-form" onSubmit={handleSubmit}>
            <h3><Truck size={18} /> Logistics Quote Request</h3>

            <div className="lg-form-row">
              <div className="lg-form-group">
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
              <div className="lg-form-group">
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

            <div className="lg-form-row">
              <div className="lg-form-group">
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
              <div className="lg-form-group">
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

            <div className="lg-form-row">
              <div className="lg-form-group">
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
              <div className="lg-form-group">
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

            <div className="lg-form-row">
              <div className="lg-form-group">
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
              <div className="lg-form-group">
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

            <div className="lg-form-row">
              <div className="lg-form-group">
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
              <div className="lg-form-group">
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

            <div className="lg-form-group">
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

            <button type="submit" className="lg-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <><Loader2 size={16} className="lg-spin" /> Getting Your Quote...</>
              ) : (
                <><Send size={16} /> Get Free Quote Now</>
              )}
            </button>

            <p className="lg-form-note">
              * Required fields. We'll respond with pricing and options within 1 hour.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Logistics;