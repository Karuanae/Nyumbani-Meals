import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Meals from './pages/Meals';
import MealPlans from './pages/MealPlans';
import About from './pages/About';
import Contact from './pages/Contact';

// ScrollToTop Helper to ensure smooth page switching transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FFF3E9] text-[#3A2E24] font-['Poppins'] selection:bg-[#21633D] selection:text-white antialiased">
        
        {/* Fixed Global Navigation */}
        <Navbar />

        {/* Dynamic Page Target Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/meal-plans" element={<MealPlans />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer Layout */}
        <Footer />
        
      </div>
    </Router>
  );
}