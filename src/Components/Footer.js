import React from "react";
import "../style/Footer.css";

const Footer = () => (
    <footer className="footer">
        {/* Quick Links Card */}
        <div className="footer-card">
            <h3 className="footer-card-title">Quick Links</h3>
            <ul className="footer-card-content">
                <li><a href="#about">About</a></li>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        {/* Follow Us Card */}
        <div className="footer-card">
            <h3 className="footer-card-title">Follow Us</h3>
            <div className="footer-card-content" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>

        {/* Contact Info Card */}
        <div className="footer-card">
            <h3 className="footer-card-title">Contact Us</h3>
            <div className="footer-card-content">
                <p>Mahega Suppliers Limited</p>
                <p>P.O. Box 1234, Kampala, Uganda</p>
                <p>Phone: +256 700 000 000</p>
                <p>Email: mahega.gs@gmail.com</p>
            </div>
        </div>

        <div className="copy-right">
            &copy; 2025 Mahega General Suppliers Limited. All rights reserved.
             <p className="footer-links">
                        <button type="button">Privacy Policy</button> | <button type="button">Terms of Service</button>
                    </p>
        </div>
    </footer>
);

export default Footer;
