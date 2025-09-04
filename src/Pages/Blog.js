import React from "react";

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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
