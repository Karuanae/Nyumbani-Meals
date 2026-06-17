import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/meals", label: "Meals" },
    { path: "/meal-plans", label: "Meal Plans" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#21633D] rounded-full flex items-center justify-center text-white font-bold text-xl relative overflow-hidden transition-transform duration-500 group-hover:rotate-12">
            N <span className="absolute inset-0 bg-[#F28C28] translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center text-white">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Poppins'] font-bold text-xl text-[#21633D] tracking-tight leading-none">Nyumbani</span>
            <span className="font-['Great_Vibes'] text-xl text-[#F28C28] leading-none mt-1">Meals</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `font-['Poppins'] font-medium text-sm tracking-wide relative py-1 transition-colors duration-300 ${isActive ? "text-[#21633D]" : "text-[#3A2E24] hover:text-[#6BA43A]"} group`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F28C28] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/254795317878"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#F28C28] hover:bg-[#21633D] text-white px-6 py-2.5 rounded-full font-['Poppins'] font-semibold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone size={16} />
            <span>Order Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#3A2E24] focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"}`}>
        <div className="px-4 pt-4 pb-6 space-y-3 bg-[#FFF3E9]/50">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `block px-4 py-2 rounded-xl font-['Poppins'] font-medium text-base ${isActive ? "bg-[#21633D] text-white" : "text-[#3A2E24] hover:bg-white/80"}`}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <a
              href="https://wa.me/254795317878"
              className="flex items-center justify-center gap-2 w-full bg-[#F28C28] text-white py-3 rounded-xl font-['Poppins'] font-semibold"
            >
              <Phone size={18} />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;