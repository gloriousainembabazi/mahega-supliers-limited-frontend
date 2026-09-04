// src/pages/Services/ExportLogistics.js
import React, { useState } from "react";
import {
  Ship,
  FileText,
  CheckCircle2,
  Package,
  Truck,
  Landmark,
  BarChart3,
  Coffee,
  Palette,
  Wheat,
  Factory,
  Handshake,
  ClipboardList,
  Search,
  Tags,
  MapPin,
  Award,
  Globe,
  DollarSign,
  UserCheck,
  Laptop,
  ShieldCheck,
  Check,
  Mail,
  Phone,
  Clock,
  Send,
} from "lucide-react";
import "../../style/ExportLogistics.css";

function ExportLogistics() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    destination: "",
    shipmentVolume: "",
    timeline: "",
    currentExperience: "",
    requirements: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Export Logistics Form submitted:", formData);
    alert("Thank you for your export inquiry! Our logistics team will contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productType: "",
      destination: "",
      shipmentVolume: "",
      timeline: "",
      currentExperience: "",
      requirements: "",
    });
  };

  const exportServices = [
    {
      icon: FileText,
      title: "Export Documentation",
      desc: "Complete paperwork including certificates of origin, commercial invoices, export permits, and phytosanitary certificates.",
    },
    {
      icon: CheckCircle2,
      title: "Compliance Management",
      desc: "Ensure compliance with international standards (EU, US, EAC, COMESA) and destination country requirements.",
    },
    {
      icon: Package,
      title: "Custom Packaging & Labeling",
      desc: "Professional packaging solutions and international labeling standards for various product types.",
    },
    {
      icon: Truck,
      title: "Freight Coordination",
      desc: "Multi-modal transport solutions including air, sea, and land freight with competitive rates.",
    },
    {
      icon: Landmark,
      title: "Customs Clearance",
      desc: "Expert customs clearance and port handling services to avoid delays and complications.",
    },
    {
      icon: BarChart3,
      title: "Tracking & Reporting",
      desc: "Real-time shipment tracking and comprehensive reporting throughout the export journey.",
    },
  ];

  const industries = [
    {
      icon: Coffee,
      title: "Coffee & Tea Exporters",
      desc: "Specialized handling of Uganda's premium coffee and tea with proper storage and export protocols.",
      features: ["Temperature-controlled storage", "Quality certifications", "Direct buyer connections"],
    },
    {
      icon: Palette,
      title: "Handicraft & Textile Makers",
      desc: "Artisan products export with cultural preservation and international market positioning.",
      features: ["Cultural compliance", "Artisan certifications", "Market positioning"],
    },
    {
      icon: Wheat,
      title: "Agro-processors",
      desc: "Agricultural products including grains, oils, spices with food safety compliance.",
      features: ["Food safety standards", "Organic certifications", "Bulk handling"],
    },
    {
      icon: Factory,
      title: "Manufacturers",
      desc: "Industrial products, furniture, and metalworks with quality assurance protocols.",
      features: ["Quality inspections", "Industrial standards", "B2B connections"],
    },
  ];

  const exportProcess = [
    {
      step: "01",
      icon: Handshake,
      title: "Initial Consultation",
      desc: "Product assessment, market analysis, and export feasibility study.",
    },
    {
      step: "02",
      icon: ClipboardList,
      title: "Documentation Preparation",
      desc: "Complete all required export documentation and certifications.",
    },
    {
      step: "03",
      icon: Search,
      title: "Compliance Verification",
      desc: "Ensure all products meet destination country standards and regulations.",
    },
    {
      step: "04",
      icon: Tags,
      title: "Packaging & Labeling",
      desc: "Professional packaging and international standard labeling.",
    },
    {
      step: "05",
      icon: Ship,
      title: "Logistics Coordination",
      desc: "Arrange freight, customs clearance, and shipping logistics.",
    },
    {
      step: "06",
      icon: MapPin,
      title: "Delivery & Tracking",
      desc: "Monitor shipment and provide real-time updates until delivery.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "10+ Years Experience",
      desc: "Decade of expertise in Uganda export markets and international trade regulations.",
    },
    {
      icon: Globe,
      title: "Global Network",
      desc: "Established partnerships with freight forwarders, customs agents, and buyers worldwide.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "Clear, upfront pricing with no hidden fees or surprise charges.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Support",
      desc: "Assigned export compliance officer for personalized service and guidance.",
    },
    {
      icon: Laptop,
      title: "Technology Integration",
      desc: "Modern tracking systems and digital documentation for efficient processing.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management",
      desc: "Comprehensive insurance coverage and risk mitigation strategies.",
    },
  ];

  const stories = [
    {
      title: "Coffee to Germany",
      client: "Bugisu Coffee Cooperative",
      challenge: "First-time export to European market with strict quality standards.",
      solution: "Complete certification process and quality compliance.",
      result: "Successfully exported 50 tons, established long-term partnership.",
    },
    {
      title: "Crafts to USA",
      client: "Kampala Artisan Collective",
      challenge: "Complex customs requirements for handmade goods.",
      solution: "Streamlined documentation and cultural compliance.",
      result: "Monthly shipments to 5 US states, 200% revenue growth.",
    },
    {
      title: "Grains to Kenya",
      client: "Northern Uganda Grain Processors",
      challenge: "Regional trade documentation and bulk transport.",
      solution: "EAC compliance and efficient land freight.",
      result: "Reduced shipping costs by 30%, faster delivery times.",
    },
  ];

  return (
    <div className="el">
      {/* Hero */}
      <section className="el-hero">
        <div className="el-container">
          <span className="el-badge"><Ship size={15} /> Export Logistics</span>
          <h1>Your Gateway to Global Markets</h1>
          <p>
            We handle the complexity of exporting Ugandan goods — from premium
            coffee and traditional crafts to agricultural produce and
            manufactured items. Let us manage documentation, packaging,
            customs, and shipping so you can focus on what you do best:
            production and sales. Our comprehensive export logistics services
            ensure your products reach international markets efficiently,
            compliantly, and cost-effectively.
          </p>
        </div>
      </section>

      {/* Export Services */}
      <section className="el-section">
        <div className="el-container">
          <div className="el-section-heading">
            <h2>Comprehensive Export Services</h2>
            <span className="el-underline" />
          </div>
          <div className="el-grid el-grid-3">
            {exportServices.map(({ icon: Icon, title, desc }) => (
              <div className="el-card" key={title}>
                <span className="el-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="el-section el-alt-section">
        <div className="el-container">
          <div className="el-section-heading">
            <h2>Our Export Process</h2>
            <span className="el-underline" />
          </div>
          <div className="el-timeline">
            {exportProcess.map(({ step, icon: Icon, title, desc }) => (
              <div className="el-timeline-item" key={step}>
                <div className="el-timeline-step">{step}</div>
                <div className="el-timeline-content">
                  <span className="el-timeline-icon"><Icon size={20} /></span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="el-section">
        <div className="el-container">
          <div className="el-section-heading">
            <h2>Industries We Serve</h2>
            <span className="el-underline" />
          </div>
          <div className="el-grid el-grid-4">
            {industries.map(({ icon: Icon, title, desc, features }) => (
              <div className="el-card el-industry-card" key={title}>
                <span className="el-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="el-feature-list">
                  {features.map((f) => (
                    <li key={f}><Check size={14} /> {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="el-section el-alt-section">
        <div className="el-container">
          <div className="el-section-heading">
            <h2>Why Partner With Us?</h2>
            <span className="el-underline" />
          </div>
          <div className="el-grid el-grid-3">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div className="el-card" key={title}>
                <span className="el-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="el-section">
        <div className="el-container">
          <div className="el-section-heading">
            <h2>Export Success Stories</h2>
            <span className="el-underline" />
          </div>
          <div className="el-grid el-grid-3">
            {stories.map(({ title, client, challenge, solution, result }) => (
              <div className="el-story-card" key={title}>
                <h3>{title}</h3>
                <p className="el-story-client">{client}</p>
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
      <section className="el-section el-contact-section" id="contact-form">
        <div className="el-container el-contact-grid">
          <div className="el-contact-info">
            <h2>Get Your Export Quote</h2>
            <p>
              Ready to take your products global? Fill out our export
              consultation form and our logistics experts will provide you
              with a comprehensive shipping solution and competitive quote
              within 24 hours.
            </p>
            <ul className="el-benefits-list">
              <li><Check size={17} /> Free export consultation</li>
              <li><Check size={17} /> Competitive freight rates</li>
              <li><Check size={17} /> Complete documentation support</li>
              <li><Check size={17} /> End-to-end tracking</li>
            </ul>

            <div className="el-contact-methods">
              <h3>Direct Contact</h3>
              <p><Mail size={16} /> exports@mahega.co.ug</p>
              <p><Phone size={16} /> +256 700 123 456</p>
              <p><Clock size={16} /> Mon-Sat: 8:00 AM - 7:00 PM EAT</p>
            </div>
          </div>

          <form className="el-form" onSubmit={handleSubmit}>
            <h3><Globe size={18} /> Export Consultation Request</h3>

            <div className="el-form-row">
              <div className="el-form-group">
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
              <div className="el-form-group">
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

            <div className="el-form-row">
              <div className="el-form-group">
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
              <div className="el-form-group">
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

            <div className="el-form-row">
              <div className="el-form-group">
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
              <div className="el-form-group">
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

            <div className="el-form-row">
              <div className="el-form-group">
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
              <div className="el-form-group">
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

            <div className="el-form-group">
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

            <div className="el-form-group">
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

            <button type="submit" className="el-submit-btn">
              <Send size={16} /> Request Export Consultation
            </button>

            <p className="el-form-note">
              * Required fields. Our export specialists will contact you within 24 hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ExportLogistics;