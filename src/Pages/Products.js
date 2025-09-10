import React from "react";
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
  );
}

export default Products;
