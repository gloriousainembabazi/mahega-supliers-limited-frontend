// src/pages/Services/CustomOrders.js
import React, { useState } from "react";
import {
  ShoppingCart,
  FileText,
  Armchair,
  Package,
  Wrench,
  Target,
  Shirt,
  MessageSquare,
  Search,
  DollarSign,
  Settings,
  CheckCircle2,
  Truck,
  UserCheck,
  ShieldCheck,
  Gem,
  Zap,
  Globe,
  Building2,
  BookOpen,
  Factory,
  Mail,
  Phone,
  Clock,
  Check,
  Send,
  ClipboardList,
} from "lucide-react";
import "../../style/customOrders.css";

function CustomOrders() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    orderType: "",
    quantity: "",
    deadline: "",
    budget: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Custom Order Form submitted:", formData);
    alert("Thank you for your custom order request! We will contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      orderType: "",
      quantity: "",
      deadline: "",
      budget: "",
      description: "",
    });
  };

  const customOrderTypes = [
    {
      icon: FileText,
      title: "Branded Office Supplies",
      desc: "Custom notebooks, pens, folders, and stationery with your company branding.",
    },
    {
      icon: Armchair,
      title: "Custom Furniture",
      desc: "Made-to-measure office desks, chairs, cabinets, and hotel furniture.",
    },
    {
      icon: Package,
      title: "Bulk Packaging Solutions",
      desc: "Custom packaging designs for export, retail, or promotional purposes.",
    },
    {
      icon: Wrench,
      title: "Specialized Equipment",
      desc: "Hard-to-find tools, machinery, or equipment sourced globally.",
    },
    {
      icon: Target,
      title: "Event Supplies",
      desc: "Custom branded materials for conferences, trade shows, and corporate events.",
    },
    {
      icon: Shirt,
      title: "Uniform & Apparel",
      desc: "Custom workwear, uniforms, and promotional clothing with embroidery.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Consultation",
      desc: "Share your specifications, quantity requirements, timeline, and budget constraints.",
    },
    {
      step: "02",
      icon: Search,
      title: "Research & Sourcing",
      desc: "Our team researches suppliers, materials, and manufacturing options globally.",
    },
    {
      step: "03",
      icon: DollarSign,
      title: "Quotation",
      desc: "Detailed proposal with options, pricing, and timeline within 24-48 hours.",
    },
    {
      step: "04",
      icon: Settings,
      title: "Approval & Production",
      desc: "Once approved, we manage production, quality control, and progress updates.",
    },
    {
      step: "05",
      icon: CheckCircle2,
      title: "Quality Assurance",
      desc: "Rigorous quality checks before shipment to ensure specifications are met.",
    },
    {
      step: "06",
      icon: Truck,
      title: "Delivery",
      desc: "On-time delivery to your location with full tracking and support.",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "No Order Too Complex",
      desc: "From single prototypes to large-scale productions, we handle projects of any size and complexity.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Account Manager",
      desc: "Personal point of contact who understands your business and manages your project end-to-end.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Rigorous quality control at every step, from sourcing to final delivery.",
    },
    {
      icon: Gem,
      title: "Competitive Pricing",
      desc: "Fair, transparent pricing even for one-off orders, with bulk discounts available.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      desc: "Quick response times with detailed quotes within 24-48 hours of inquiry.",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      desc: "Access to international suppliers and manufacturers for specialized requirements.",
    },
  ];

  const examples = [
    {
      icon: Building2,
      title: "Hotel Chain Furniture",
      challenge: "500 custom-sized beds and wardrobes for a new hotel branch.",
      solution: "Partnered with a local manufacturer, delivered in 6 weeks.",
      result: "30% cost savings vs. imported alternatives.",
    },
    {
      icon: BookOpen,
      title: "NGO Educational Materials",
      challenge: "10,000 branded notebooks and pens for rural schools.",
      solution: "Custom design with local language content.",
      result: "Delivered to 50 schools across 3 districts.",
    },
    {
      icon: Factory,
      title: "Factory Safety Equipment",
      challenge: "Specialized protective gear not available locally.",
      solution: "Sourced from a certified international supplier.",
      result: "100% compliance with safety standards.",
    },
  ];

  return (
    <div className="co">
      {/* Hero */}
      <section className="co-hero">
        <div className="co-container">
          <span className="co-badge"><ShoppingCart size={15} /> Custom & Bulk Orders</span>
          <h1>Tailored Solutions for Your Unique Business Needs</h1>
          <p>
            Whether you need branded office supplies, custom-sized furniture, or
            specialized agricultural equipment — we've got you covered. Our custom
            order service is designed for businesses that need something beyond
            the standard catalog, with solutions tailored to your exact
            specifications and requirements.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="co-section">
        <div className="co-container">
          <div className="co-section-heading">
            <h2>How Our Custom Order Process Works</h2>
            <span className="co-underline" />
          </div>
          <div className="co-process-grid">
            {processSteps.map(({ step, icon: Icon, title, desc }) => (
              <div className="co-process-card" key={step}>
                <div className="co-process-top">
                  <span className="co-process-step">{step}</span>
                  <span className="co-process-icon"><Icon size={20} /></span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Types */}
      <section className="co-section co-alt-section">
        <div className="co-container">
          <div className="co-section-heading">
            <h2>Popular Custom Order Categories</h2>
            <span className="co-underline" />
          </div>
          <div className="co-grid co-grid-3">
            {customOrderTypes.map(({ icon: Icon, title, desc }) => (
              <div className="co-card" key={title}>
                <span className="co-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="co-section">
        <div className="co-container">
          <div className="co-section-heading">
            <h2>Why Choose Our Custom Order Service</h2>
            <span className="co-underline" />
          </div>
          <div className="co-grid co-grid-3">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div className="co-card" key={title}>
                <span className="co-card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="co-section co-alt-section">
        <div className="co-container">
          <div className="co-section-heading">
            <h2>Recent Custom Order Success Stories</h2>
            <span className="co-underline" />
          </div>
          <div className="co-grid co-grid-3">
            {examples.map(({ icon: Icon, title, challenge, solution, result }) => (
              <div className="co-example-card" key={title}>
                <span className="co-card-icon"><Icon size={26} /></span>
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
      <section className="co-section co-contact-section" id="contact-form">
        <div className="co-container co-contact-grid">
          <div className="co-contact-info">
            <h2>Request Your Custom Quote</h2>
            <p>
              Ready to discuss your custom order requirements? Fill out the form
              with as much detail as possible, and our team will get back to you
              with a comprehensive proposal within 24-48 hours.
            </p>
            <ul className="co-benefits-list">
              <li><Check size={17} /> Free consultation and quote</li>
              <li><Check size={17} /> No minimum order quantity</li>
              <li><Check size={17} /> Flexible payment terms</li>
              <li><Check size={17} /> Quality guarantee</li>
            </ul>

            <div className="co-contact-methods">
              <h3>Or Contact Us Directly</h3>
              <p><Mail size={16} /> orders@mahega.co.ug</p>
              <p><Phone size={16} /> +256 700 123 456</p>
              <p><Clock size={16} /> Mon-Fri: 8:00 AM - 6:00 PM EAT</p>
            </div>
          </div>

          <form className="co-form" onSubmit={handleSubmit}>
            <h3><ClipboardList size={18} /> Custom Order Request Form</h3>

            <div className="co-form-row">
              <div className="co-form-group">
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
              <div className="co-form-group">
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

            <div className="co-form-row">
              <div className="co-form-group">
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
              <div className="co-form-group">
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

            <div className="co-form-row">
              <div className="co-form-group">
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
              <div className="co-form-group">
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

            <div className="co-form-row">
              <div className="co-form-group">
                <label htmlFor="deadline">Required Deadline</label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                />
              </div>
              <div className="co-form-group">
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

            <div className="co-form-group">
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

            <button type="submit" className="co-submit-btn">
              <Send size={16} /> Submit Custom Order Request
            </button>

            <p className="co-form-note">
              * Required fields. We'll respond with a detailed quote within 24-48 hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CustomOrders;