import React, { useMemo, useState } from "react";
import "../style/product.css";

const productCategories = [
  {
    name: "Agricultural",
    description: "Equipment, fertilizers, and tools for modern farming operations.",
    items: "1,204 Items",
    icon: "♧",
    link: "/products/agricultural",
  },
  {
    name: "Branding",
    description: "Corporate merchandise, signage, and promotional materials.",
    items: "542 Items",
    icon: "▣",
    link: "/products/branding",
  },
  {
    name: "Cleaning",
    description: "Industrial janitorial supplies and sanitization chemicals.",
    items: "890 Items",
    icon: "♨",
    link: "/products/cleaning",
  },
  {
    name: "Computers",
    description: "Hardware, peripherals, and networking infrastructure.",
    items: "3,120 Items",
    icon: "▱",
    link: "/products/computers",
  },
  {
    name: "Custom",
    description: "Bespoke manufacturing and tailored supply chain solutions.",
    items: "RFQ Based",
    icon: "◉",
    link: "/products/custom",
  },
  {
    name: "Export",
    description: "Export-grade commodities and international shipping supplies.",
    items: "450 Items",
    icon: "◈",
    link: "/products/export",
  },
  {
    name: "Food & Beverages",
    description: "Bulk pantry staples, catering supplies, and breakroom restocking.",
    items: "2,200 Items",
    icon: "♜",
    link: "/products/food-beverages",
  },
  {
    name: "Furniture",
    description: "Ergonomic office seating, workstations, and industrial shelving.",
    items: "670 Items",
    icon: "▰",
    link: "/products/furniture",
  },
  {
    name: "Industrial",
    description: "Heavy machinery parts, safety gear, and warehouse equipment.",
    items: "4,500 Items",
    icon: "♢",
    link: "/products/industrial",
  },
  {
    name: "Livestock",
    description: "Animal feed, veterinary supplies, and containment systems.",
    items: "820 Items",
    icon: "♣",
    link: "/products/livestock",
  },
  {
    name: "Medical",
    description: "First aid, clinical consumables, and diagnostic equipment.",
    items: "1,150 Items",
    icon: "✚",
    link: "/products/medical",
  },
  {
    name: "Stationery",
    description: "Paper goods, filing systems, and general office consumables.",
    items: "3,800 Items",
    icon: "▤",
    link: "/products/stationery",
  },
];

const logisticsRows = [
  {
    orderId: "ORD-2024-8901",
    commodity: "Agricultural Fertilizers",
    volume: "50 Tons",
    destination: "Kampala Warehouse A",
    status: "In Transit",
    statusClass: "status-transit",
    icon: "⌂",
  },
  {
    orderId: "ORD-2024-8905",
    commodity: "Office Computers (Dell)",
    volume: "2 Pallets",
    destination: "Entebbe Tech Hub",
    status: "Processing",
    statusClass: "status-processing",
    icon: "▣",
  },
  {
    orderId: "ORD-2024-8912",
    commodity: "Industrial Safety Gear",
    volume: "15 Crates",
    destination: "Jinja Manufacturing",
    status: "Delivered",
    statusClass: "status-delivered",
    icon: "✓",
  },
  {
    orderId: "ORD-2024-8920",
    commodity: "Medical Consumables",
    volume: "5 Pallets",
    destination: "Mbarara Regional Hosp",
    status: "Delayed (Customs)",
    statusClass: "status-delayed",
    icon: "!",
  },
];

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(() => {
    const value = searchTerm.trim().toLowerCase();

    if (!value) {
      return productCategories;
    }

    return productCategories.filter((category) => {
      return (
        category.name.toLowerCase().includes(value) ||
        category.description.toLowerCase().includes(value) ||
        category.items.toLowerCase().includes(value)
      );
    });
  }, [searchTerm]);

  return (
    <main className="products-page">
      <section className="products-content">
        <div className="products-search">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search categories, products, or SKUs..."
            aria-label="Search product categories"
          />
        </div>

        <div className="products-heading">
          <h1>Product Categories</h1>
        </div>

        <div className="products-grid">
          {filteredCategories.map((category) => (
            <article className="product-category-card" key={category.name}>
              <div className="product-icon">{category.icon}</div>

              <h2>{category.name}</h2>

              <p>{category.description}</p>

              <div className="product-card-footer">
                <span className="product-count">{category.items}</span>

                <a
                  href={category.link}
                  className="product-arrow"
                  aria-label={`View ${category.name} products`}
                >
                  →
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="no-products-found">
            No product categories match your search.
          </div>
        )}

        <section className="logistics-section">
          <div className="logistics-heading">
            <h2>Logistics Tracking</h2>
          </div>

          <div className="logistics-table-wrapper">
            <table className="logistics-table">
              <thead>
                <tr>
                  <th>ORDER ID</th>
                  <th>COMMODITY</th>
                  <th>VOLUME</th>
                  <th>DESTINATION</th>
                  <th>STATUS</th>
                </tr>
              </thead>

              <tbody>
                {logisticsRows.map((row) => (
                  <tr key={row.orderId}>
                    <td className="order-id">{row.orderId}</td>
                    <td>{row.commodity}</td>
                    <td>{row.volume}</td>
                    <td>{row.destination}</td>
                    <td>
                      <span className={`status-pill ${row.statusClass}`}>
                        <span className="status-icon">{row.icon}</span>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Products;
