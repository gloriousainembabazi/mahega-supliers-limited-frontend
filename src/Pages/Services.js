import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  CheckCircle2,
  Users,
  Settings,
  Globe,
  Truck,
  Package,
  ArrowRight,
  Check,
} from "lucide-react";
import "../style/service.css";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHossVjHoLZGtxIoDhteEq-1DVc-a4tQWVPdynOsP6zJo68VFoxI1ofjvI8uav_RAvyqV4sdHMgYtwSEjukJaY_g8hvxFPysCecFUW4zjXvrt9jzr1lXdOwz6cT7JzP6L6ItTpAXpaCNWTaNW7b7kW1stvm8tBNKNqhYg6nWMRZDvyTBlD9XUVjfqXRHTnxVmHnNnA3NrMzBEw9N-ZevhbbmdcxsxvBr9aRw6W6LNePgsNCkfKa2EPbA";

const CORE_SERVICES = [
  {
    icon: Users,
    title: "Consulting",
    desc: "Strategic technical advisory for industrial optimization and supply chain efficiency.",
    path: "/services/consulting",
  },
  {
    icon: Settings,
    title: "Custom Orders",
    desc: "Bespoke procurement and fabrication of specialized industrial components and hardware.",
    path: "/services/custom-orders",
  },
  {
    icon: Globe,
    title: "Export Logistics",
    desc: "Seamless international shipping and customs management for cross-border supply chains.",
    path: "/services/export-logistics",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Comprehensive regional distribution and fleet management across East Africa.",
    path: "/services/logistics",
  },
  {
    icon: Package,
    title: "Procurement",
    desc: "End-to-end sourcing of high-grade industrial materials and equipment.",
    path: "/services/procurement",
  },
];

function Services() {
  return (
    <div className="msvc">
      {/* Hero */}
      <section className="msvc-hero">
        <div className="msvc-container msvc-hero-grid">
          <div className="msvc-hero-content">
            <span className="msvc-badge"><Wrench size={15} /> Technical Support</span>
            <h1>Precision Support for Industrial Scale.</h1>
            <p>
              Comprehensive maintenance, rapid deployment, and technical consulting
              ensuring your supply chain operates without interruption.
            </p>
            <div className="msvc-hero-buttons">
              <Link to="/contact" className="msvc-btn msvc-btn-primary">Request Service</Link>
              <Link to="/contact" className="msvc-btn msvc-btn-outline">View Maintenance Plans</Link>
            </div>
          </div>
          <div className="msvc-hero-image">
            <img src={HERO_IMG} alt="Mahega facility operations" />
            <div className="msvc-status-panel">
              <div>
                <p className="msvc-status-label">Current Status</p>
                <p className="msvc-status-value">All Systems Operational</p>
              </div>
              <CheckCircle2 size={30} className="msvc-status-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="msvc-section">
        <div className="msvc-container">
          <div className="msvc-section-heading">
            <h2>Core Services</h2>
            <p>Engineered solutions for complex logistical and supply challenges.</p>
          </div>
          <div className="msvc-services-grid">
            {CORE_SERVICES.map(({ icon: Icon, title, desc, path }) => (
              <Link to={path} className="msvc-service-card" key={title}>
                <div>
                  <span className="msvc-service-icon"><Icon size={32} /></span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <span className="msvc-learn-more">
                  Learn More <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="msvc-section msvc-tiers-section">
        <div className="msvc-container">
          <div className="msvc-section-heading">
            <h2>Maintenance &amp; Support Tiers</h2>
            <p>Scalable support contracts to ensure continuous operational uptime.</p>
          </div>
          <div className="msvc-tiers-grid">
            <div className="msvc-tier-card">
              <div className="msvc-tier-head">
                <h3>Standard</h3>
                <div className="msvc-tier-plan">Ad-Hoc</div>
                <p>For non-critical supply needs.</p>
              </div>
              <ul className="msvc-tier-list">
                <li><Check size={18} /> Business hours support</li>
                <li><Check size={18} /> 48-hour response time</li>
                <li><Check size={18} /> Standard part replacement</li>
              </ul>
              <Link to="/contact" className="msvc-btn msvc-btn-ghost">Select Standard</Link>
            </div>

            <div className="msvc-tier-card msvc-tier-featured">
              <span className="msvc-tier-recommended">Recommended</span>
              <div className="msvc-tier-head">
                <h3>Industrial</h3>
                <div className="msvc-tier-plan msvc-tier-plan-blue">Contracted</div>
                <p>For continuous operations.</p>
              </div>
              <ul className="msvc-tier-list msvc-tier-list-highlight">
                <li><Check size={18} /> 24/7 Priority Support</li>
                <li><Check size={18} /> 4-hour on-site response</li>
                <li><Check size={18} /> Quarterly preventative maintenance</li>
                <li><Check size={18} /> Dedicated Account Manager</li>
              </ul>
              <Link to="/contact" className="msvc-btn msvc-btn-primary msvc-full-width">Contact Sales</Link>
            </div>

            <div className="msvc-tier-card">
              <div className="msvc-tier-head">
                <h3>Enterprise</h3>
                <div className="msvc-tier-plan">Custom</div>
                <p>Full supply chain integration.</p>
              </div>
              <ul className="msvc-tier-list">
                <li><Check size={18} /> Embedded engineering team</li>
                <li><Check size={18} /> Custom SLAs</li>
                <li><Check size={18} /> Predictive analytics integration</li>
              </ul>
              <Link to="/contact" className="msvc-btn msvc-btn-ghost">Request Audit</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;