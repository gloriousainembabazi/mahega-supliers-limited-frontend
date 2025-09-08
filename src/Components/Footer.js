import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/whyus" className="hover:text-blue-400">Why Us</a></li>
            <li><a href="/products" className="hover:text-blue-400">Products</a></li>
            <li><a href="#" className="hover:text-blue-400">Projects</a></li>
            <li><a href="/clients" className="hover:text-blue-400">Clients</a></li>
            <li><a href="#" className="hover:text-blue-400">Gallery</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
        </div>

        {/* Company Address */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Mahega Suppliers Limited</p>
          <p>P.O. Box 1234, Kampala, Uganda</p>
          <p>Phone: +256 700 000 000</p>
          <p>Email: info@mahegasuppliers.com</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 Mahega Suppliers Limited. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;