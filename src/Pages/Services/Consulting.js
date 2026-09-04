// src/pages/Services/Consulting.js
import React, { useState } from "react";
import {
  Package,
  BarChart3,
  Truck,
  Search,
  Globe,
  Zap,
  Laptop,
  ShieldCheck,
  Leaf,
  DollarSign,
  GraduationCap,
  TrendingUp,
  Building2,
  Handshake,
  School,
  Phone,
  Mail,
  Clock,
  Check,
  MessageSquare,
  Send,
  ClipboardList,
  Users,
} from "lucide-react";
import "../../style/consulting.css";

function Consulting() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const consultingAreas = [
    {
      icon: Package,
      title: "Procurement Strategy",
      desc: "Vendor selection, negotiation tactics, contract management and supplier relationship optimization.",
    },
    {
      icon: BarChart3,
      title: "Inventory Optimization",
      desc: "Reduce waste, prevent stockouts, improve turnover rates and implement just-in-time strategies.",
    },
    {
      icon: Truck,
      title: "Logistics Planning",
      desc: "Route optimization, delivery scheduling, warehousing efficiency and transportation cost reduction.",
    },
    {
      icon: Search,
      title: "Supplier Audits",
      desc: "Quality assessments, reliability checks, compliance verification and performance monitoring.",
    },
    {
      icon: Globe,
      title: "Export Readiness",
      desc: "International documentation, packaging standards, customs compliance and market entry strategies.",
    },
    {
      icon: Zap,
      title: "Process Automation",
      desc: "Workflow digitization, system integration and technology implementation for efficiency gains.",
    },
  ];

  const additionalServices = [
    {
      icon: Laptop,
      title: "Digital Transformation",
      desc: "Implement modern supply chain management systems and automation tools.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management",
      desc: "Identify vulnerabilities and develop contingency plans for supply chain disruptions.",
    },
    {
      icon: Leaf,
      title: "Sustainability Consulting",
      desc: "Build eco-friendly supply chains and implement green logistics practices.",
    },
    {
      icon: DollarSign,
      title: "Cost Analysis & Reduction",
      desc: "Comprehensive cost audits and strategic recommendations for savings.",
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      desc: "Upskill your team with supply chain best practices and modern methodologies.",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      desc: "KPI tracking, reporting dashboards and data-driven insights.",
    },
  ];

  const audience = [
    {
      icon: Building2,
      title: "Growing SMEs",
      desc: "Small and medium enterprises needing structured supply chain processes and scalable solutions.",
    },
    {
      icon: Handshake,
      title: "NGOs & Non-Profits",
      desc: "Organizations managing complex humanitarian supply chains and donor-funded procurement.",
    },
    {
      icon: School,
      title: "Hospitality & Education",
      desc: "Hotels, restaurants, and schools managing bulk recurring orders and seasonal demand fluctuations.",
    },
    {
      icon: Globe,
      title: "Export Businesses",
      desc: "Companies entering new international markets or expanding their global footprint.",
    },
  ];

  const process = [
    {
      icon: Search,
      step: "01",
      title: "Discovery",
      desc: "We review your current procurement, inventory, and logistics processes to identify gaps and opportunities.",
    },
    {
      icon: BarChart3,
      step: "02",
      title: "Analysis",
      desc: "Your data is benchmarked against industry standards to quantify cost, time, and efficiency losses.",
    },
    {
      icon: ClipboardList,
      step: "03",
      title: "Strategy",
      desc: "We build a prioritized action plan tailored to your budget, team size, and growth timeline.",
    },
    {
      icon: Zap,
      step: "04",
      title: "Implementation",
      desc: "Our team supports rollout, trains your staff, and tracks results against agreed targets.",
    },
  ];

  const stats = [
    { value: "120+", label: "Businesses Advised" },
    { value: "18%", label: "Avg. Cost Reduction" },
    { value: "6", label: "Countries Served" },
    { value: "24h", label: "Response Time" },
  ];

  return (
    <div className="cs">
      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-container">
          <span className="cs-badge"><Users size={15} /> Supply Chain Consulting</span>
          <h1>Transform Your Operations With Expert Guidance</h1>
          <p>
            Many businesses lose money through inefficient sourcing, poor inventory
            management, or unreliable suppliers. Our consulting service helps you
            streamline operations, cut costs, and build a resilient supply chain
            that drives growth and profitability.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="cs-stats">
        <div className="cs-container cs-stats-grid">
          {stats.map((s) => (
            <div className="cs-stat" key={s.label}>
              <div className="cs-stat-value">{s.value}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Consulting Areas */}
      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-section-heading">
            <h2>Core Consulting Areas</h2>
            <span className="cs-underline" />
          </div>
          <div className="cs-grid cs-grid-3">
            {consultingAreas.map(({ icon: Icon, title, desc }) => (
              <div className="cs-card" key={title}>
                <span className="cs-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="cs-section cs-process-section">
        <div className="cs-container">
          <div className="cs-section-heading">
            <h2>How We Work</h2>
            <span className="cs-underline" />
          </div>
          <div className="cs-process-grid">
            {process.map(({ icon: Icon, step, title, desc }) => (
              <div className="cs-process-card" key={step}>
                <div className="cs-process-top">
                  <span className="cs-process-step">{step}</span>
                  <span className="cs-process-icon"><Icon size={22} /></span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-section-heading">
            <h2>Specialized Services</h2>
            <span className="cs-underline" />
          </div>
          <div className="cs-grid cs-grid-3">
            {additionalServices.map(({ icon: Icon, title, desc }) => (
              <div className="cs-card" key={title}>
                <span className="cs-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="cs-section cs-audience-section">
        <div className="cs-container">
          <div className="cs-section-heading">
            <h2>Who We Serve</h2>
            <span className="cs-underline" />
          </div>
          <div className="cs-grid cs-grid-4">
            {audience.map(({ icon: Icon, title, desc }) => (
              <div className="cs-card cs-audience-card" key={title}>
                <span className="cs-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="cs-section cs-contact-section" id="contact-form">
        <div className="cs-container cs-contact-grid">
          <div className="cs-contact-info">
            <h2>Get Your Free Consultation</h2>
            <p>
              Book a complimentary 30-minute consultation with our supply chain
              experts. We'll review your current processes and propose actionable
              improvements — no obligation.
            </p>
            <ul className="cs-benefits">
              <li><Check size={17} /> Free initial assessment</li>
              <li><Check size={17} /> Customized recommendations</li>
              <li><Check size={17} /> No commitment required</li>
              <li><Check size={17} /> Expert industry insights</li>
              <li><Check size={17} /> Response within 24 hours</li>
            </ul>

            <div className="cs-contact-methods">
              <h3>Or Contact Us Directly</h3>
              <p><Mail size={16} /> mahega@.com</p>
              <p><Phone size={16} /> +256 751 120 0</p>
              <p><Clock size={16} /> Mon-Fri: 8:00 AM - 6:00 PM EAT</p>
            </div>
          </div>

          <form className="cs-form" onSubmit={handleSubmit}>
            <h3><MessageSquare size={18} /> Send Us Your Inquiry</h3>

            <div className="cs-form-group">
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

            <div className="cs-form-row">
              <div className="cs-form-group">
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
              <div className="cs-form-group">
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

            <div className="cs-form-group">
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

            <div className="cs-form-group">
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

            <div className="cs-form-group">
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

            <button type="submit" className="cs-submit-btn">
              <Send size={16} /> Request Free Consultation
            </button>

            <p className="cs-form-note">
              * Required fields. We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Consulting;