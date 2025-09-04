import React from "react";
import Hero from "../Components/Hero";
import Card from "../Components/Card";

function Home() {
  // Sample Products preview
  const productsPreview = [
    {
      title: "Construction Materials",
      description: "Durable and affordable building materials for all projects.",
      buttonText: "View Products"
    },
    {
      title: "Office & Stationery Supplies",
      description: "From paper to printers, we supply all office essentials.",
      buttonText: "View Products"
    },
  ];

  // Sample Services preview
  const servicesPreview = [
    {
      title: "Procurement & Sourcing",
      description: "We identify and deliver the right products to meet your business or personal needs.",
      buttonText: "View Services"
    },
    {
      title: "Logistics & Delivery",
      description: "Reliable transportation and timely delivery of supplies to your doorstep.",
      buttonText: "View Services"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Products Preview */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productsPreview.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              description={product.description}
              buttonText={product.buttonText}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesPreview.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
