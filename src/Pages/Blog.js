import React from "react";
<<<<<<< HEAD
import "../style/Blog.css";
=======
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd

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
<<<<<<< HEAD
    <div className="blog-container">
      <h2 className="blog-title">Our Blog</h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3 className="blog-post-title">{post.title}</h3>
            <p className="blog-post-date">{post.date}</p>
            <p className="blog-post-summary">{post.summary}</p>
            <button className="blog-button">Read More</button>
=======
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.summary}</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Read More
            </button>
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
