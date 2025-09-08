import React from "react";
import { Link } from "react-router-dom";

// Components
import Hero from "../components/Hero";
import Card from "../Components/Card";

// Images
import product1 from "../images/box materials.jpg";
import product2 from "../images/statinary.jpg";

function Home() {
  // Sample Products preview
  const productsPreview = [
    {
      title: "Construction Materials",
      description: "Durable and affordable building materials for all projects.",
      image: product1,
      buttonText: "View Products",
    },
    {
      title: "Office & Stationery Supplies",
      description: "From paper to printers, we supply all office essentials.",
      image: product2,
      buttonText: "View Products",
    },
  ];

  // Sample Services preview
  const servicesPreview = [
    {
      title: "Procurement & Sourcing",
      description: "We identify and deliver the right products to meet your business or personal needs.",
      image: product1, // You can use a different image if available
      buttonText: "View Services",
    },
    {
      title: "Logistics & Delivery",
      description: "Reliable transportation and timely delivery of supplies to your doorstep.",
      image: product2, // You can use a different image if available
      buttonText: "View Services",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Products Preview */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productsPreview.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              description={product.description}
              image={product.image} // pass image to Card
              buttonText={product.buttonText}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesPreview.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image} // pass image to Card
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
