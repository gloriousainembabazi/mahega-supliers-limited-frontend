import React from "react";

function About() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
      <p className="text-lg text-gray-700">
        Mahega Suppliers Limited is a trusted supplier dedicated to delivering high-quality products and services across diverse sectors.
      </p>

      <h3 className="text-2xl font-semibold mt-6">Our Mission</h3>
      <p>To provide reliable and affordable supply solutions that empower businesses and communities to thrive.</p>

      <h3 className="text-2xl font-semibold mt-6">Our Vision</h3>
      <p>To become the leading supplier in the region, known for excellence, innovation, and trust.</p>

      <h3 className="text-2xl font-semibold mt-6">Our Core Values</h3>
      <ul className="list-disc ml-6">
        <li>Integrity – We deliver what we promise.</li>
        <li>Quality – We supply only the best.</li>
        <li>Efficiency – Timely and cost-effective solutions.</li>
        <li>Customer Focus – Your needs, our priority.</li>
      </ul>
    </div>
  );
}

export default About;
