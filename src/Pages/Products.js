import React from "react";
<<<<<<< HEAD
import "../style/product.css"; 


function Products() {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title">Products & Services</h2>
        <div className="products-grid">
          {/* Product Category Cards */}
          <div className="product-card">
            <h3>Stationery & Office Supplies</h3>
            <ul>
              <li>General stationery</li>
              <li>Printing, Photocopying & Binding</li>
              <li>Toners & Cartridges</li>
            </ul>
          </div>
          <div className="product-card">
            <h3>Computer & ICT Supplies</h3>
            <ul>
              <li>Computer Equipment & Accessories</li>
              <li>Software & Consumables</li>
              <li>Consumer electronics & communication equipment</li>
            </ul>
          </div>
          <div className="product-card">
            <h3>Furniture & Fittings</h3>
            <p>A wide range of furniture and fittings for all your office and commercial needs.</p>
          </div>
          <div className="product-card">
            <h3>Agricultural & Industrial</h3>
            <ul>
              <li>Agricultural inputs</li>
              <li>Animals, Poultry & feeds</li>
              <li>General industrial supplies</li>
            </ul>
          </div>
          <div className="product-card">
            <h3>Food & Beverages</h3>
            <ul>
              <li>Food products</li>
              <li>Beverages</li>
              <li>Meat & Poultry products</li>
            </ul>
          </div>
          <div className="product-card">
            <h3>Medical Supplies</h3>
            <ul>
              <li>Medical consumables</li>
              <li>Personal Protective Equipment (PPE)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
=======

function Products() {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Construction Materials</h3>
          <p>Durable and affordable building materials for residential, commercial, and industrial projects.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Office & Stationery Supplies</h3>
          <p>From paper to printers, we supply all office essentials to keep your business running smoothly.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">Safety & Protective Equipment</h3>
          <p>We provide safety gear and protective wear to ensure workplace safety and compliance.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold">General Supplies</h3>
          <p>Through our broad network, we source and deliver various products upon client request.</p>
        </div>
      </div>
    </div>
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
  );
}

export default Products;
