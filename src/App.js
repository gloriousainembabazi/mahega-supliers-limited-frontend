import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import "./App.css";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallary from "./Pages/Gallary";   
=======

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import WhyUs from "./Pages/WhyUs";
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Products from "./Pages/Products";
<<<<<<< HEAD
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";   
import Footer from "./Components/Footer"; 
import Hero from "./Components/Hero";


import "./style/App.css"; 
=======

import Navbar from "./Components/Navbar";   
import Footer from "./Components/Footer"; 
import Image from "./images";
import Card from "./Components/Card"; 
import Hero from "./components/Hero";
import logo from "./images/Mahega General Supplies.png";
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        
        <main className="main-content">
=======
      <div className="flex flex-col min-h-screen font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <div className="flex-grow">
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
<<<<<<< HEAD
            <Route path="/gallary" element={<Gallary />} />  
=======
            <Route path="/whyus" element={<WhyUs />} />
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
            <Route path="/clients" element={<Clients />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          </Routes>
        </main>
=======
            <Route path="/image" element={<Image />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/card" element={<Card />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </div>
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
