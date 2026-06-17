import React from "react";
import { Link } from "react-router-dom";
// Removed Instagram and Share2, replaced with universally exported Globe and MessageCircle
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#3A2E24] text-[#FFF3E9] pt-16 pb-8 font-['Poppins'] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#21633D] via-[#F28C28] to-[#6BA43A]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Company Pitch */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#21633D] rounded-full flex items-center justify-center text-white font-bold text-sm">N</div>
            <span className="font-bold text-xl tracking-tight">Nyumbani <span className="font-['Great_Vibes'] text-[#F28C28] text-2xl">Meals</span></span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Nourishing families one premium home-style meal at a time. Healthy subscriptions tailored to modern urban life.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {/* SAFE ICON FOR INSTAGRAM/WEB LINK */}
            <a href="https://instagram.com/nyumbanimeals" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F28C28] transition-colors duration-300 flex items-center justify-center text-white">
              <Globe size={16} />
            </a>
            {/* SAFE ICON FOR FACEBOOK/WHATSAPP/COMMUNITY CHAT */}
            <a href="https://wa.me/254795317878" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#21633D] transition-colors duration-300 flex items-center justify-center text-white">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Navigation Quicklinks */}
        <div>
          <h4 className="text-[#F28C28] font-semibold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors duration-200">Home Showcase</Link></li>
            <li><Link to="/meals" className="hover:text-white transition-colors duration-200">Our Signature Menu</Link></li>
            <li><Link to="/meal-plans" className="hover:text-white transition-colors duration-200">Subscription Packages</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors duration-200">Our Culinary Story</Link></li>
          </ul>
        </div>

        {/* Coverage Logistics */}
        <div>
          <h4 className="text-[#6BA43A] font-semibold text-sm tracking-wider uppercase mb-4">Delivery Zones</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Nairobi & Suburbs</li>
            <li>• Kiambu Environs</li>
            <li>• Machakos Corridor</li>
            <li>• Kajiado & Nakuru</li>
          </ul>
        </div>

        {/* Core Contacts */}
        <div className="space-y-3 text-sm text-gray-400">
          <h4 className="text-[#F28C28] font-semibold text-sm tracking-wider uppercase mb-4">Get In Touch</h4>
          <div className="flex items-center gap-3"><Phone size={16} className="text-[#6BA43A]" /> <span>+254 795 317 878</span></div>
          <div className="flex items-center gap-3"><Mail size={16} className="text-[#6BA43A]" /> <span>hello@nyumbanimeals.co.ke</span></div>
          <div className="flex items-center gap-3"><MapPin size={16} className="text-[#6BA43A]" /> <span>Nairobi, Kenya</span></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>© 2026 Nyumbani Meals. A Product of Kaylyne Gourmet Ventures.</p>
        <p className="mt-2 md:mt-0">Healthy Meals. Happy Homes.</p>
      </div>
    </footer>
  );
}

export default Footer;