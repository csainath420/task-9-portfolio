import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ServicesPage from './pages/Home/ServicesSection';
import AboutPage from './pages/Home/AboutSection';
import PortfolioPage from './pages/Home/PortfolioSection';
import ContactPage from './pages/Home/ContactSection';


const AppRoutes = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;