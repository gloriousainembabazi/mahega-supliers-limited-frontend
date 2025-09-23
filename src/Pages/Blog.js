import React from "react";
import "../style/Blog.css";

function Blog() {
  const posts = [
    {
      id: 1,
      title: "How to Choose the Right Supplier for Your Business",
      date: "August 25, 2025",
      summary:
        "Choosing the right supplier can determine your business success. We share key tips on selecting a trusted partner who delivers quality and reliability.",
    },
    {
      id: 2,
      title: "The Importance of Quality in Supply Chain Management",
      date: "August 18, 2025",
      summary:
        "Quality is more than a buzzword. Discover why consistent, high-quality supplies can improve efficiency, reduce costs, and build long-term trust.",
    },
    {
      id: 3,
      title: "Cost-Saving Tips for Businesses When Procuring Supplies",
      date: "August 10, 2025",
      summary:
        "Managing procurement costs is critical for businesses. Here are practical strategies to save money without compromising on quality.",
    },
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-title">Our Blog</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3 className="blog-post-title">{post.title}</h3>
            <p className="blog-post-date">{post.date}</p>
            <p className="blog-post-summary">{post.summary}</p>
            <button className="blog-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
