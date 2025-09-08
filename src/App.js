import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import WhyUs from "./Pages/WhyUs";
import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Products from "./Pages/Products";

import Navbar from "./Components/Navbar";   
import Footer from "./Components/Footer"; 
import Image from "./images";
import Card from "./Components/Card"; 
import Hero from "./components/Hero";
import logo from "./images/Mahega General Supplies.png";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/image" element={<Image />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/card" element={<Card />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
