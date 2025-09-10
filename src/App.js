import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallary from "./Pages/Gallary";   
import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Products from "./Pages/Products";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";   
import Footer from "./Components/Footer"; 
import Hero from "./Components/Hero";


import "./style/App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallary" element={<Gallary />} />  
            <Route path="/clients" element={<Clients />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
