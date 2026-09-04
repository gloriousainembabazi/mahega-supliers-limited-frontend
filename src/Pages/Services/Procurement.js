// src/pages/Services/Procurement.js
import React, { useState } from "react";
import {
  ClipboardList,
  MessageSquare,
  Search,
  DollarSign,
  CheckCircle2,
  FileText,
  Truck,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Factory,
  Clock,
  ShieldCheck,
  Globe,
  UserCheck,
  Mail,
  Phone,
  Send,
  Loader2,
  ShoppingBag,
} from "lucide-react";
import "../../style/procument.css";

function Procurement() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    itemsNeeded: "",
    quantity: "",
    budget: "",
    timeline: "",
    requirements: "",
  });

  const processSteps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Requirements Consultation",
      desc: "Share your procurement needs, specifications, and budget constraints with our team.",
    },
    {
      step: "02",
      icon: Search,
      title: "Supplier Sourcing",
      desc: "We identify and vet the best suppliers locally and internationally for your needs.",
    },
    {
      step: "03",
      icon: DollarSign,
      title: "Price Negotiation",
      desc: "Our experts negotiate the best prices and terms on your behalf.",
    },
    {
      step: "04",
      icon: CheckCircle2,
      title: "Quality Assurance",
      desc: "We conduct thorough quality checks and inspections before procurement.",
    },
    {
      step: "05",
      icon: FileText,
      title: "Order Management",
      desc: "We handle all purchase orders, documentation, and supplier coordination.",
    },
    {
      step: "06",
      icon: Truck,
      title: "Delivery Coordination",
      desc: "Seamless delivery to your location with full tracking and support.",
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "Corporate Offices",
      desc: "Office supplies, furniture, IT equipment, and facility management items.",
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      desc: "School supplies, laboratory equipment, furniture, and educational materials.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare Facilities",
      desc: "Medical equipment, supplies, pharmaceuticals, and hospital furniture.",
    },
    {
      icon: Hotel,
      title: "Hotels & Hospitality",
      desc: "Furniture, linens, amenities, kitchen equipment, and operational supplies.",
    },
    {
      icon: Landmark,
      title: "Government Agencies",
      desc: "Office equipment, public service materials, and specialized government needs.",
    },
    {
      icon: Factory,
      title: "Manufacturing & Industry",
      desc: "Raw materials, machinery, tools, and industrial supplies.",
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      desc: "Access to better pricing through our supplier networks and bulk purchasing power.",
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      desc: "Save time on supplier research, negotiations, and procurement processes.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      desc: "Rigorous quality checks and supplier vetting ensure you get the best products.",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      desc: "Access to international suppliers and hard-to-find specialized items.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management",
      desc: "We handle supplier risks, quality issues, and supply chain disruptions.",
    },
    {
      icon: UserCheck,
      title: "Single Point of Contact",
      desc: "Dedicated procurement manager for all your sourcing needs.",
    },
  ];

  const sourcingExamples = [
    {
      icon: Building2,
      title: "Office Equipment Bulk Order",
      challenge: "Equip new 50-person office with furniture and IT equipment.",
      solution: "Sourced from multiple verified suppliers with 25% cost savings.",
      result: "Complete office setup delivered in 3 weeks.",
    },
    {
      icon: HeartPulse,
      title: "Medical Supplies Procurement",
      challenge: "Source specialized medical equipment not available locally.",
      solution: "International sourcing with proper certifications and compliance.",
      result: "Equipment delivered with full documentation and training.",
    },
    {
      icon: GraduationCap,
      title: "School Renovation Project",
      challenge: "Furnish entire school with desks, chairs, and teaching aids.",
      solution: "Custom manufacturing with child-safe materials and bulk discounts.",
      result: "2000+ items delivered across 5 locations on schedule.",
    },
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
      console.log("Procurement Quote Request:", formData);
      alert("Thank you for your procurement request! Our team will contact you within 24 hours with sourcing options.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        itemsNeeded: "",
        quantity: "",
        budget: "",
        timeline: "",
        requirements: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pc">
      {/* Hero */}
      <section className="pc-hero">
        <div className="pc-container">
          <span className="pc-badge"><ShoppingBag size={15} /> Procurement & Sourcing</span>
          <h1>Smart Sourcing for Your Business Needs</h1>
          <p>
            Let us handle the heavy lifting. Our procurement team identifies,
            negotiates, and delivers the exact products you need — saving you
            time, money, and hassle. Whether you need 10 reams of paper or
            100 office chairs, we've got you covered with our extensive
            supplier network and procurement expertise.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="pc-section">
        <div className="pc-container">
          <div className="pc-section-heading">
            <h2>How Our Procurement Process Works</h2>
            <span className="pc-underline" />
          </div>
          <div className="pc-process-grid">
            {processSteps.map(({ step, icon: Icon, title, desc }) => (
              <div className="pc-process-card" key={step}>
                <div className="pc-process-top">
                  <span className="pc-process-step">{step}</span>
                  <span className="pc-process-icon"><Icon size={20} /></span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="pc-section pc-alt-section">
        <div className="pc-container">
          <div className="pc-section-heading">
            <h2>Industries We Serve</h2>
            <span className="pc-underline" />
          </div>
          <div className="pc-grid pc-grid-3">
            {industries.map(({ icon: Icon, title, desc }) => (
              <div className="pc-card" key={title}>
                <span className="pc-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pc-section">
        <div className="pc-container">
          <div className="pc-section-heading">
            <h2>Why Choose Our Procurement Service</h2>
            <span className="pc-underline" />
          </div>
          <div className="pc-grid pc-grid-3">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div className="pc-card" key={title}>
                <span className="pc-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="pc-section pc-alt-section">
        <div className="pc-container">
          <div className="pc-section-heading">
            <h2>Recent Procurement Success Stories</h2>
            <span className="pc-underline" />
          </div>
          <div className="pc-grid pc-grid-3">
            {sourcingExamples.map(({ icon: Icon, title, challenge, solution, result }) => (
              <div className="pc-example-card" key={title}>
                <span className="pc-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <dl>
                  <dt>Challenge</dt>
                  <dd>{challenge}</dd>
                  <dt>Solution</dt>
                  <dd>{solution}</dd>
                  <dt>Result</dt>
                  <dd>{result}</dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="pc-section pc-contact-section" id="contact-form">
        <div className="pc-container pc-contact-grid">
          <div className="pc-contact-info">
            <h2>Request Procurement Assistance</h2>
            <p>
              Ready to streamline your procurement process? Tell us what you
              need, and our team will get back to you with sourcing options
              and competitive pricing within 24 hours.
            </p>
            <ul className="pc-benefits-list">
              <li><CheckCircle2 size={17} /> Free procurement consultation</li>
              <li><CheckCircle2 size={17} /> Multiple supplier options</li>
              <li><CheckCircle2 size={17} /> Quality guarantee</li>
              <li><CheckCircle2 size={17} /> Best price negotiation</li>
            </ul>

            <div className="pc-contact-methods">
              <h3>Or Contact Us Directly</h3>
              <p><Mail size={16} /> procurement@mahega.co.ug</p>
              <p><Phone size={16} /> +256 700 123 456</p>
              <p><Clock size={16} /> Mon-Fri: 8:00 AM - 6:00 PM EAT</p>
            </div>
          </div>

          <form className="pc-form" onSubmit={handleSubmit}>
            <h3><ClipboardList size={18} /> Procurement Request Form</h3>

            <div className="pc-form-row">
              <div className="pc-form-group">
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
              <div className="pc-form-group">
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

            <div className="pc-form-row">
              <div className="pc-form-group">
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
              <div className="pc-form-group">
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

            <div className="pc-form-row">
              <div className="pc-form-group">
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
              <div className="pc-form-group">
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

            <div className="pc-form-row">
              <div className="pc-form-group">
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
              <div className="pc-form-group">
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

            <div className="pc-form-group">
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

            <div className="pc-form-group">
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

            <button type="submit" className="pc-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <><Loader2 size={16} className="pc-spin" /> Submitting Request...</>
              ) : (
                <><Send size={16} /> Submit Procurement Request</>
              )}
            </button>

            <p className="pc-form-note">
              * Required fields. We'll respond with sourcing options within 24 hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Procurement;