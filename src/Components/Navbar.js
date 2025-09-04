import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-200 text-blue-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold">Mahega Suppliers Ltd</h1>

        {/* Navigation Links */}
        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/whyus" className="hover:text-blue-600">Why Us</Link>
          <Link to="/clients" className="hover:text-blue-600">Clients</Link>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
