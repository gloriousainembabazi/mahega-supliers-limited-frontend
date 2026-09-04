import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  BookOpen,
  TrendingUp,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import "../style/Blog.css";

function Blog() {
  const posts = [
    {
      id: 1,
      category: "SUPPLY & PROCUREMENT",
      title: "How to Choose the Right Supplier for Your Business",
      date: "August 25, 2025",
      summary:
        "Choosing the right supplier can determine your business success. We share key tips on selecting a trusted partner who delivers quality, reliability, and consistent service.",
      icon: ShieldCheck,
    },
    {
      id: 2,
      category: "SUPPLY CHAIN",
      title: "The Importance of Quality in Supply Chain Management",
      date: "August 18, 2025",
      summary:
        "Quality is more than a buzzword. Discover why consistent, high-quality supplies can improve efficiency, reduce costs, and build long-term trust.",
      icon: TrendingUp,
    },
    {
      id: 3,
      category: "PROCUREMENT",
      title: "Cost-Saving Tips for Businesses When Procuring Supplies",
      date: "August 10, 2025",
      summary:
        "Managing procurement costs is critical for businesses. Here are practical strategies to save money without compromising on quality.",
      icon: BookOpen,
    },
    {
      id: 4,
      category: "LOGISTICS",
      title: "Why Reliable Logistics Matter to Your Business",
      date: "August 5, 2025",
      summary:
        "A reliable supply chain depends on efficient logistics. Learn how proper planning, coordination, and timely delivery can keep your operations moving.",
      icon: Truck,
    },
    {
      id: 5,
      category: "BUSINESS",
      title: "Building Long-Term Partnerships Through Reliable Supply",
      date: "July 28, 2025",
      summary:
        "Strong supplier relationships are built on trust, communication, quality, and dependable service. Explore what makes a supply partnership successful.",
      icon: Users,
    },
    {
      id: 6,
      category: "BUSINESS SOLUTIONS",
      title: "How Strategic Procurement Supports Business Growth",
      date: "July 20, 2025",
      summary:
        "Strategic procurement can help businesses control costs, improve efficiency, and focus resources on growth while maintaining dependable access to essential supplies.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="blog-page">

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>

        <div className="blog-hero-content">
          <span className="blog-eyebrow">MAHEGA INSIGHTS</span>

          <h1>
            Our <span>Blog</span>
          </h1>

          <p>
            Insights, ideas, and practical knowledge from Mahega General
            Suppliers Limited to help businesses make better procurement and
            supply decisions.
          </p>

          <div className="blog-hero-line"></div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
          ===================================================== */}
      <section className="blog-introduction">
        <div className="blog-container">

          <div className="blog-intro-grid">

            <div className="blog-intro-content">
              <span className="blog-small-title">
                KNOWLEDGE & EXPERIENCE
              </span>

              <h2>
                Practical Insights for
                <strong> Better Business</strong>
              </h2>

              <div className="blog-heading-line"></div>

              <p className="blog-lead">
                At Mahega, we believe that reliable supply is about more than
                delivering products. It is about understanding business needs,
                building trust, and creating solutions that support long-term
                success.
              </p>

              <p>
                Our blog brings together practical insights on procurement,
                supply chain management, logistics, quality, and business
                solutions.
              </p>
            </div>

            <div className="blog-intro-card">
              <div className="blog-intro-icon">
                <BookOpen size={28} />
              </div>

              <strong>What You'll Find Here</strong>

              <p>
                Helpful ideas and industry-focused information designed to
                support businesses in making informed supply and procurement
                decisions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG POSTS
          ===================================================== */}
      <section className="blog-posts-section">
        <div className="blog-container">

          <div className="blog-section-heading">
            <span>LATEST ARTICLES</span>

            <h2>
              Insights & <strong>Ideas</strong>
            </h2>

            <div className="blog-heading-line centered"></div>

            <p>
              Explore our latest articles covering procurement, logistics,
              supply chain management, and business growth.
            </p>
          </div>

          <div className="blog-grid">
            {posts.map((post) => {
              const Icon = post.icon;

              return (
                <article className="blog-card" key={post.id}>

                  <div className="blog-card-top">
                    <div className="blog-card-icon">
                      <Icon size={23} />
                    </div>

                    <span className="blog-category">
                      {post.category}
                    </span>
                  </div>

                  <div className="blog-card-content">

                    <h3>{post.title}</h3>

                    <div className="blog-date">
                      <CalendarDays size={14} />
                      <span>{post.date}</span>
                    </div>

                    <div className="blog-card-line"></div>

                    <p>{post.summary}</p>

                    <button
                      type="button"
                      className="blog-read-more"
                      onClick={() =>
                        alert(
                          "This article will be available soon. Please check back for the full article."
                        )
                      }
                    >
                      Read More
                      <ArrowRight size={15} />
                    </button>

                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          WHY READ OUR BLOG
          ===================================================== */}
      <section className="blog-benefits">
        <div className="blog-container">

          <div className="blog-section-heading">
            <span>WHY OUR INSIGHTS MATTER</span>

            <h2>
              Knowledge That Supports
              <strong> Better Decisions</strong>
            </h2>

            <div className="blog-heading-line centered"></div>
          </div>

          <div className="blog-benefits-grid">

            <div className="blog-benefit-card">
              <div className="blog-benefit-icon">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h3>Reliable Information</h3>

                <p>
                  We focus on practical information that helps businesses
                  understand supply, procurement, and quality considerations.
                </p>
              </div>
            </div>

            <div className="blog-benefit-card">
              <div className="blog-benefit-icon">
                <TrendingUp size={24} />
              </div>

              <div>
                <h3>Business Growth</h3>

                <p>
                  Our insights explore ways businesses can improve efficiency,
                  manage resources, and create stronger supply strategies.
                </p>
              </div>
            </div>

            <div className="blog-benefit-card">
              <div className="blog-benefit-icon">
                <Truck size={24} />
              </div>

              <div>
                <h3>Supply & Logistics</h3>

                <p>
                  Learn more about the importance of dependable supply,
                  procurement planning, and efficient logistics.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="blog-cta">

        <div className="blog-cta-overlay"></div>

        <div className="blog-container">

          <div className="blog-cta-content">

            <span>WORK WITH MAHEGA</span>

            <h2>
              Need a Reliable
              <strong> Supply Partner?</strong>
            </h2>

            <p>
              Whether you need procurement support, agricultural supplies,
              corporate products, industrial tools, or logistics solutions,
              Mahega is ready to support your business.
            </p>

            <Link to="/contact" className="blog-cta-button">
              Get In Touch
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Blog;