// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import PageTemplate from './Components/PageTemplate';

// Pages
import Home from './Pages/Home';
import AboutPage from './Pages/About'; 
import Services from './Pages/Services';

// Admin Pages
import AdminDashboard from './Pages/Admin/AdminDashboard';

// About Pages
import Mission from './Pages/About/Mission';
import Vision from './Pages/About/Vision';    
import Team from './Pages/About/Team';
import History from './Pages/About/History';
import Values from './Pages/About/Values';

// Products Pages
import Products from './Pages/Products';
import Stationery from './Pages/Products/Stationery';
import Computers from './Pages/Products/Computers';
import Furniture from './Pages/Products/Furniture';
import Cleaning from './Pages/Products/Cleaning';
import Agricultural from './Pages/Products/Agricultural';
import Livestock from './Pages/Products/Livestock';
import FoodBeverages from './Pages/Products/FoodBeverages';
import Medical from './Pages/Products/Medical';
import Industrial from './Pages/Products/Industrial';
import Branding from './Pages/Products/Branding';
import Export from './Pages/Products/Export';
import Custom from './Pages/Products/Custom';

// Services Pages
import Procurement from './Pages/Services/Procurement';
import Logistics from './Pages/Services/Logistics';
import CustomOrders from './Pages/Services/CustomOrders';
import Consulting from './Pages/Services/Consulting';
import ExportLogistics from './Pages/Services/ExportLogistics';

// Other Pages
import Gallary from './Pages/Gallary';
import Clients from './Pages/Clients';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

// Optional: 404 Page
const NotFound = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Go back home</a>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<PageTemplate><Home /></PageTemplate>} />

        {/* About */}
        <Route path="/about" element={<PageTemplate><AboutPage /></PageTemplate>} />
        <Route path="/about/mission" element={<PageTemplate><Mission /></PageTemplate>} />
        <Route path="/about/vision" element={<PageTemplate><Vision /></PageTemplate>} />
        <Route path="/about/team" element={<PageTemplate><Team /></PageTemplate>} />
        <Route path="/about/history" element={<PageTemplate><History /></PageTemplate>} />
        <Route path="/about/values" element={<PageTemplate><Values /></PageTemplate>} />

        {/* Products */}
        <Route path="/products" element={<PageTemplate><Products /></PageTemplate>} />
        <Route path="/products/stationery" element={<PageTemplate><Stationery /></PageTemplate>} />
        <Route path="/products/computers" element={<PageTemplate><Computers /></PageTemplate>} />
        <Route path="/products/furniture" element={<PageTemplate><Furniture /></PageTemplate>} />
        <Route path="/products/cleaning" element={<PageTemplate><Cleaning /></PageTemplate>} />
        <Route path="/products/agricultural" element={<PageTemplate><Agricultural /></PageTemplate>} />
        <Route path="/products/livestock" element={<PageTemplate><Livestock /></PageTemplate>} />
        <Route path="/products/food-beverages" element={<PageTemplate><FoodBeverages /></PageTemplate>} />
        <Route path="/products/medical" element={<PageTemplate><Medical /></PageTemplate>} />
        <Route path="/products/industrial" element={<PageTemplate><Industrial /></PageTemplate>} />
        <Route path="/products/branding" element={<PageTemplate><Branding /></PageTemplate>} /> 
        <Route path="/products/export" element={<PageTemplate><Export /></PageTemplate>} />
        <Route path="/products/custom" element={<PageTemplate><Custom /></PageTemplate>} />

        {/* Services */}
        <Route path="/services" element={<PageTemplate><Services /></PageTemplate>} />
        <Route path="/services/procurement" element={<PageTemplate><Procurement /></PageTemplate>} />
        <Route path="/services/logistics" element={<PageTemplate><Logistics /></PageTemplate>} />
        <Route path="/services/custom-orders" element={<PageTemplate><CustomOrders /></PageTemplate>} />
        <Route path="/services/consulting" element={<PageTemplate><Consulting /></PageTemplate>} />
        <Route path="/services/export-logistics" element={<PageTemplate><ExportLogistics /></PageTemplate>} />

        {/* Other Pages */}
        <Route path="/gallary" element={<PageTemplate><Gallary /></PageTemplate>} />
        <Route path="/clients" element={<PageTemplate><Clients /></PageTemplate>} />
        <Route path="/blog" element={<PageTemplate><Blog /></PageTemplate>} />
        <Route path="/contact" element={<PageTemplate><Contact /></PageTemplate>} />

        
        <Route path="/admin" element={<PageTemplate><AdminDashboard /></PageTemplate>} />

        
        <Route path="*" element={<PageTemplate><NotFound /></PageTemplate>} />
      </Routes>
    </Router>
  );
}

export default App;