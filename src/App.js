import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import WhyUs from "./Pages/WhyUs";
import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Products from "./Pages/Products";

// Components
import Navbar from "../";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        {/* Navbar */}
        <nav className="bg-blue-900 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Mahega Suppliers Ltd</h1>
            <div className="space-x-6">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
              <Link to="/services" className="hover:text-gray-300">Services</Link>
              <Link to="/whyus" className="hover:text-gray-300">Why Us</Link>
              <Link to="/clients" className="hover:text-gray-300">Clients</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
              <Link to="/blog" className="hover:text-gray-300">Blog</Link>
              <Link to="/products" className="hover:text-gray-300">Products</Link>
              


            </div>
          </div>
        </nav>

        {/* Pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/products" element={<Products />} />

          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center p-4 mt-6">
          <p>© {new Date().getFullYear()} Mahega Suppliers Limited. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
