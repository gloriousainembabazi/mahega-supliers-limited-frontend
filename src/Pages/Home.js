import React from "react";
<<<<<<< HEAD
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import "../style/Home.css"; 

import product1 from "../images/boards.jpg";
import product2 from "../images/box materials.jpg";
import product3 from "../images/cars.jpg";
import product4 from "../images/cattle 2 rearing.jpg";
import product5 from "../images/compound tables.jpg";
import product6 from "../images/chairs.jpg";
import product7  from "../images/exported goods.jpg";
import product8 from "../images/goat 2 rearing.jpg";
import product9  from "../images/hotel tables.jpg";
import product10 from "../images/metalic tables.jpg";
import product12 from "../images/office material 2.jpg";
import product13 from "../images/office tables.jpg";
import product14 from "../images/office use.jpg";
import product15 from "../images/pipes.jpg";
import product16 from "../images/placeholders.jpg";
import product17 from "../images/plywood.jpg";
import product11 from "../images/cattle rearing.jpg";




function Home() {
  const productsPreview = [
    {
      title: "Assorted Stationery & Office Suppliers",
      description: "Comprehensive range of stationery and office supplies for all your business needs.",
      image: product1,
    
      buttonText: "View Products",
    },
    {
      title: "Computers, Printers & ICT Consumables",
      description: "Latest computers, printers, and ICT consumables for efficient office operations.",
      image: product2,
      buttonText: "View Products",
    },
    {
      title: "Furniture & Fittings",
      description: "Quality furniture and fittings to enhance your workspace.",
      image: product3,
      buttonText: "View Products",
    },
    {
      title: "Cleaning Materials & Consumables",
      description: "Effective cleaning materials and consumables for a spotless environment.",
      image: product4,
      buttonText: "View Products",
    },
    {
      title: "Agricultural & Industrial Suppliers",
      description: "Reliable supplies for agricultural and industrial operations.",
      images:product5,
      buttonText: "View Products",
    },
    {
      title: "Beverages & Food Supplies",
      description: "Wide selection of beverages and food supplies for offices and events.",
      image: product6,
      buttonText: "View Products",
    },
    {
      title: "Medical Consumables & PPE",
      description: "Essential medical consumables and personal protective equipment.",
      image: product7,
      buttonText: "View Products",
    },
    {
      title: "Blading",
      description: "Professional blading solutions for various applications.",
      image: product8,
      buttonText: "View Products",
    },
  ];

  const servicesPreview1 = [
    {
      title: "Exported Goods Handling",
      description: "Professional handling and management of exported goods for businesses.",
      image: product9,
      buttonText: "View Services",
    },
    {
      title: "Office Material Supply",
      description: "Supplying a wide range of office materials for efficient operations.",
      image: product10,
      buttonText: "View Services",
    },
    {
      title: "Cattle Rearing Support",
      description: "Support and solutions for modern cattle rearing and livestock management.",
      image: product11,
      buttonText: "View Services",
    },
    {
      title: "Export Logistics",
      description: "Reliable logistics services for exporting goods and materials.",
      image: product12, 
      buttonText: "View Services",
    },
    {
      title: "Goat Rearing Solutions",
      description: "Expert solutions and support for goat rearing and livestock farming.",
      image: product13,
      buttonText: "View Services",
    },
  ];

=======
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
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
  const servicesPreview = [
    {
      title: "Procurement & Sourcing",
      description: "We identify and deliver the right products to meet your business or personal needs.",
<<<<<<< HEAD
      image: product14, // Assorted Stationery & Office Suppliers
=======
      image: product1, // You can use a different image if available
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
      buttonText: "View Services",
    },
    {
      title: "Logistics & Delivery",
      description: "Reliable transportation and timely delivery of supplies to your doorstep.",
<<<<<<< HEAD
      image: product15, // Logistics2
      buttonText: "View Services",
    },
    {
      title: "Custom Orders",
      description: "Tailored solutions for unique product requirements and bulk orders.",
      image: product16, // Posho Making
      buttonText: "View Services",
    },
    {
      title: "Consultation & Support",
      description: "Expert advice and support for procurement and supply chain management.",
      image: product17, // Office Materials
=======
      image: product2, // You can use a different image if available
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
      buttonText: "View Services",
    },
  ];

  return (
    <div>
<<<<<<< HEAD
      <Hero />

      {/* Products Section */}
      <section className="home-section products-section">
        <h2 className="section-title">Our Products</h2>
        <div className="card-grid">
=======
      {/* Hero Section */}
      <Hero />

      {/* Products Preview */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
          {productsPreview.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              description={product.description}
<<<<<<< HEAD
              image={product.image}
=======
              image={product.image} // pass image to Card
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
              buttonText={product.buttonText}
            />
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section className="home-section services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="card-grid">
=======
      {/* Services Preview */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
          {servicesPreview.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
<<<<<<< HEAD
              image={service.image}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="home-section services-section">
        <h2 className="section-title">More Services</h2>
        <div className="card-grid">
          {servicesPreview1.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
=======
              image={service.image} // pass image to Card
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
