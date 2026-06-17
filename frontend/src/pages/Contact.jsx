import React, { useState } from "react";
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Map,
  HelpCircle
} from "lucide-react";

const coverageZones = [
  { region: "Nairobi Core", locales: "Kilimani, Kileleshwa, Westlands, CBD, Upperhill" },
  { region: "Nairobi Environs", locales: "Karen, Langata, Runda, Muthaiga, Embakasi" },
  { region: "Outlying Districts", locales: "Kiambu, Machakos, Kajiado, Nakuru & beyond!" }
];

function Contact() {
  const [selectedZone, setSelectedZone] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#FFF3E9] min-h-screen pt-24 pb-20 text-[#3A2E24] font-['Poppins'] relative overflow-hidden">
      
      {/* Decorative Brand Color Gradient Blobs */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-[#21633D]/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 left-[-10%] w-96 h-96 bg-[#F28C28]/5 rounded-full blur-3xl pointer-events-none animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================== PAGE HEADER ==================== */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#21633D]/10 text-[#21633D] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles size={14} className="text-[#F28C28] animate-spin" style={{ animationDuration: '4s' }} /> Direct Onboarding Hub
          </div>
          <h1 className="font-extrabold text-4xl sm:text-5xl tracking-tight text-[#3A2E24]">
            Let's Start Savoring
          </h1>
          <p className="font-['Great_Vibes'] text-[#F28C28] text-3xl">
            We are always ready to serve your home, office, or premium event space
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: VISUAL TOUCHPOINTS ==================== */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Informational Action Cards */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/254795317878"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl shadow-md border border-orange-50/50 flex items-center gap-5 group hover:border-[#21633D] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
              >
                <div className="p-3.5 bg-[#21633D]/10 text-[#21633D] group-hover:bg-[#21633D] group-hover:text-white rounded-xl transition-colors shadow-sm">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3A2E24] text-sm group-hover:text-[#21633D] transition-colors">WhatsApp Order Support</h4>
                  <p className="text-gray-500 text-xs font-light mt-0.5">+254 795 317 878</p>
                  <span className="text-[10px] text-[#6BA43A] font-semibold uppercase tracking-wider block mt-1">Instant Setup Chat →</span>
                </div>
              </a>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-50/50 flex items-center gap-5 group hover:border-[#F28C28] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-3.5 bg-[#F28C28]/10 text-[#F28C28] group-hover:bg-[#F28C28] group-hover:text-white rounded-xl transition-colors shadow-sm">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3A2E24] text-sm group-hover:text-[#F28C28] transition-colors">Corporate & Catering</h4>
                  <p className="text-gray-500 text-xs font-light mt-0.5">hello@nyumbanimeals.co.ke</p>
                  <span className="text-[10px] text-gray-400 font-light block mt-1">Response inside 2 hours</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-50/50 flex items-center gap-5 group hover:border-[#6BA43A] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-3.5 bg-[#6BA43A]/10 text-[#6BA43A] group-hover:bg-[#6BA43A] group-hover:text-white rounded-xl transition-colors shadow-sm">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3A2E24] text-sm group-hover:text-[#6BA43A] transition-colors">Central Kitchen Headquarters</h4>
                  <p className="text-gray-500 text-xs font-light mt-0.5">Nairobi, Kenya</p>
                  <span className="text-[10px] text-[#21633D] font-medium block mt-1">Hygienically Certified Operations</span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE COVERAGE CHECKER BANNER */}
            <div className="bg-gradient-to-br from-[#3A2E24] to-[#21633D] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[#F28C28] font-bold text-xs uppercase tracking-wider">
                  <Map size={14} /> Logistics Network
                </div>
                <h3 className="font-['Poppins'] font-extrabold text-xl tracking-tight">Our Active Delivery Zones</h3>
              </div>

              {/* Selector row buttons */}
              <div className="flex gap-2 flex-wrap border-b border-white/10 pb-4">
                {coverageZones.map((zone, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedZone(idx)}
                    className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all ${
                      selectedZone === idx 
                        ? "bg-[#F28C28] text-white shadow-sm" 
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    {zone.region}
                  </button>
                ))}
              </div>

              {/* Rendered Locales List Output */}
              <div className="space-y-2 h-14">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest flex items-center gap-1">
                  <Clock size={12} className="text-[#6BA43A]" /> Scheduled Routings Covered:
                </p>
                <p className="text-sm font-light text-gray-200 leading-relaxed truncate-2-lines">
                  {coverageZones[selectedZone].locales}
                </p>
              </div>
            </div>

          </div>

          {/* ==================== RIGHT COLUMN: HIGH-CONVERSION CONTEXT FORM ==================== */}
          <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-orange-100/40 lg:col-span-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#F28C28]"></div>
            
            {formSubmitted ? (
              <div className="py-20 text-center space-y-4 animate-scale-up">
                <div className="w-16 h-16 bg-[#21633D]/10 text-[#21633D] rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 size={36} className="animate-pulse" />
                </div>
                <h3 className="font-bold text-2xl text-[#3A2E24]">Message Received With Love!</h3>
                <p className="text-gray-500 font-light text-sm max-w-sm mx-auto leading-relaxed">
                  Our gourmet onboarding experts are reviewing your kitchen request profile. We will contact you back inside 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-extrabold text-2xl text-[#3A2E24] tracking-tight">Send Us An Inquiry</h3>
                  <p className="text-gray-400 font-light text-xs">Configure your household requirements to match our daily production scheduling grids.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 block">Your Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Mwangi J." 
                      className="w-full bg-[#FFF3E9]/40 border border-orange-100/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#21633D]/10 focus:border-[#21633D] transition-all font-['Poppins'] text-[#3A2E24]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 block">Active Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="e.g. 0795317878" 
                      className="w-full bg-[#FFF3E9]/40 border border-orange-100/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#21633D]/10 focus:border-[#21633D] transition-all font-['Poppins'] text-[#3A2E24]" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 block">Select Primary Service Intent</label>
                  <select className="w-full bg-[#FFF3E9]/40 border border-orange-100/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#21633D]/10 focus:border-[#21633D] transition-all font-['Poppins'] text-gray-600 cursor-pointer">
                    <option>Household Meal Subscription Setup (Solo / Family Plans)</option>
                    <option>Corporate Office Lunch Meal Systems</option>
                    <option>Airbnb Property Guest Meal Solutions</option>
                    <option>Private Event Catering Enquiries</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 block">Specify Dietary Needs or Scope</label>
                  <textarea 
                    required 
                    rows="4" 
                    placeholder="Let us know your favorite recipes, allergy profiles, or preferred timing drops..." 
                    className="w-full bg-[#FFF3E9]/40 border border-orange-100/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#21633D]/10 focus:border-[#21633D] transition-all font-['Poppins'] text-[#3A2E24] leading-relaxed"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-[#21633D] hover:bg-[#6BA43A] text-white font-['Poppins'] font-bold text-sm tracking-wide py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-[1.01]"
                  >
                    <Send size={16} /> Submit Kitchen Request Profile
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-100 text-center">
                  <p className="text-[11px] text-gray-400 flex items-center justify-center gap-1 font-light">
                    <HelpCircle size={12} className="text-[#F28C28]" /> Prefer talking right now? Call our client hotline directly.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;