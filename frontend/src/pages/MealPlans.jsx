import React, { useState } from "react";
import { Check, Calendar, Users, Home as HomeIcon, Sparkles, HelpCircle, Utensils, MessageSquare } from "lucide-react";

function MealPlans() {
  const [billingPeriod, setBillingPeriod] = useState("daily"); // daily, weekly, monthly

  const plans = [
    {
      name: "Solo Plan",
      icon: <Calendar className="text-[#21633D]" size={24} />,
      coverage: "1 Person",
      tagline: "Tailored for busy professionals",
      bgImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
      prices: { daily: "2,500", weekly: "15,000", monthly: "55,000" },
      features: [
        "1 Freshly prepared balanced meal daily",
        "Customized macronutrient configurations",
        "Eco-friendly tamper-proof packaging",
        "Flexible calendar scheduling & pause controls"
      ],
      accentColor: "#21633D",
      borderColor: "hover:border-[#21633D]",
      badgeBg: "bg-[#21633D]/10 text-[#21633D]",
      btnStyle: "bg-[#21633D] hover:bg-[#6BA43A] text-white shadow-[#21633D]/20"
    },
    {
      name: "Small Family Plan",
      icon: <Users className="text-[#F28C28]" size={24} />,
      coverage: "Up to 3 People",
      tagline: "Perfect for modern couples & young families",
      bgImage: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",
      prices: { daily: "4,500", weekly: "27,000", monthly: "99,000" },
      features: [
        "3 Curated family-sized portion plates",
        "Hygienically safe, multi-tier food boxes",
        "Diverse menu rotations updated weekly",
        "Priority route fast courier dispatching"
      ],
      accentColor: "#F28C28",
      borderColor: "hover:border-[#F28C28]",
      badgeBg: "bg-[#F28C28]/10 text-[#F28C28]",
      btnStyle: "bg-[#F28C28] hover:bg-orange-600 text-white shadow-[#F28C28]/20",
      popular: true
    },
    {
      name: "Full Family Plan",
      icon: <HomeIcon className="text-[#6BA43A]" size={24} />,
      coverage: "Full House Portions",
      tagline: "Ultimate kitchen freedom for the entire house",
      bgImage: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600",
      prices: { daily: "6,000", weekly: "36,000", monthly: "132,000" },
      features: [
        "Generous feast-scaling premium portions",
        "Full health-focused ingredient oversight",
        "Complimentary freshly squeezed juice pairings",
        "Custom weekend delivery adjustments"
      ],
      accentColor: "#6BA43A",
      borderColor: "hover:border-[#6BA43A]",
      badgeBg: "bg-[#6BA43A]/10 text-[#6BA43A]",
      btnStyle: "bg-[#3A2E24] hover:bg-[#21633D] text-white shadow-gray-900/20"
    }
  ];

  const valueProps = [
    { title: "No Cooking, No Cleanup", desc: "Save up to 15 hours every single week." },
    { title: "100% Flexible", desc: "Pause, cancel, or switch plans instantly via chat." },
    { title: "Premium Sourcing", desc: "Only the freshest organic ingredients reach your plate." }
  ];

  return (
    <div className="bg-[#FFF3E9] min-h-screen pt-24 pb-20 text-[#3A2E24]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#21633D]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#F28C28]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================== HEADER ==================== */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 bg-[#21633D]/10 text-[#21633D] px-4 py-1.5 rounded-full text-xs font-bold font-['Poppins'] uppercase tracking-wider shadow-sm">
            <Sparkles size={14} className="text-[#F28C28] animate-pulse" /> Premium Food-Tech Subscriptions
          </div>
          <h1 className="font-['Poppins'] font-extrabold text-4xl sm:text-5xl text-[#3A2E24] tracking-tight">
            Flexible Subscription Plans
          </h1>
          <p className="text-[#6BA43A] font-['Great_Vibes'] text-3xl">
            Nourishing packages tailored to individuals and busy homes
          </p>
        </div>

        {/* ==================== BILLING TOGGLE SWITCH ==================== */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-2xl shadow-xl inline-flex items-center border border-orange-100/40">
            {["daily", "weekly", "monthly"].map((period) => (
              <button
                key={period}
                onClick={() => setBillingPeriod(period)}
                className={`font-['Poppins'] font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-500 ${
                  billingPeriod === period 
                    ? "bg-[#21633D] text-white shadow-md scale-100" 
                    : "text-[#3A2E24] hover:text-[#6BA43A] bg-transparent"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== PRICING CARDS GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[2.5rem] shadow-lg transition-all duration-500 border-2 border-transparent ${plan.borderColor} flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Highlight Ribbon for Most Popular Option */}
              {plan.popular && (
                <div className="absolute top-5 right-[-35px] bg-[#F28C28] text-white font-['Poppins'] font-bold text-[10px] uppercase tracking-widest py-1.5 w-32 text-center rotate-45 shadow-sm z-30">
                  Popular
                </div>
              )}

              <div>
                {/* 1. Card Media Background Header */}
                <div className="h-44 relative overflow-hidden bg-gray-900">
                  <img 
                    src={plan.bgImage} 
                    alt={plan.name} 
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                  
                  {/* Floating Identity Elements */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between z-10">
                    <div className="p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-orange-50/50">
                      {plan.icon}
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold font-['Poppins'] uppercase tracking-wider backdrop-blur-md ${plan.badgeBg} shadow-sm bg-white/80`}>
                      {plan.coverage}
                    </span>
                  </div>
                </div>

                {/* 2. Plan Pricing Details */}
                <div className="px-8 pt-6 pb-4 space-y-2">
                  <h3 className="font-['Poppins'] font-extrabold text-2xl text-[#3A2E24] tracking-tight group-hover:text-[#21633D] transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 font-light text-xs tracking-wide">
                    {plan.tagline}
                  </p>
                  <div className="flex items-baseline pt-2">
                    <span className="font-['Poppins'] font-black text-4xl text-[#3A2E24] tracking-tight">
                      KES {plan.prices[billingPeriod]}
                    </span>
                    <span className="text-gray-400 text-sm font-light ml-1.5">/{billingPeriod}</span>
                  </div>
                </div>

                {/* 3. Features Bullet List */}
                <div className="px-8 py-4">
                  <ul className="space-y-3.5 pt-4 border-t border-gray-100">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-['Poppins'] font-light leading-snug">
                        <div className="mt-0.5 p-0.5 bg-[#6BA43A]/10 text-[#6BA43A] rounded-md flex-shrink-0">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4. Instant Conversion Onboarding Link */}
              <div className="p-8 pt-4">
                <a
                  href={`https://wa.me/254795317878?text=Hello%20Nyumbani%20Meals,%20I%20want%20to%20subscribe%20to%20the%20${encodeURIComponent(plan.name)}%20(${billingPeriod}%20plan).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-['Poppins'] font-bold text-sm tracking-wide py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] transform ${plan.btnStyle}`}
                >
                  Subscribe & Onboard Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== BOTTOM TRUST PROPOSITIONS ==================== */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200/60 text-center">
          {valueProps.map((prop, idx) => (
            <div key={idx} className="space-y-1">
              <h4 className="font-['Poppins'] font-bold text-lg text-[#3A2E24]">{prop.title}</h4>
              <p className="text-gray-500 font-light text-sm">{prop.desc}</p>
            </div>
          ))}
        </div>

        {/* ==================== FAQ QUICK CTA BANNER ==================== */}
        <div className="mt-16 bg-gradient-to-br from-[#3A2E24] to-[#21633D] rounded-[2.5rem] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#F28C28] font-bold text-xs uppercase tracking-widest">
              <HelpCircle size={16} /> Have specific dietary requirements?
            </div>
            <h3 className="font-['Poppins'] font-extrabold text-2xl sm:text-3xl tracking-tight">
              Need a completely customized nutrition matrix?
            </h3>
            <p className="text-gray-300 font-light text-sm leading-relaxed">
              Our culinary team creates customized meal profiles for fitness targets, health management plans, and corporate office lunch rosters.
            </p>
          </div>
          <a 
            href="https://wa.me/254795317878?text=Hello,%20I%20need%20a%20customized%20meal%20plan%20profile." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-white text-white hover:text-[#21633D] font-['Poppins'] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md whitespace-nowrap"
          >
            <MessageSquare size={16} /> Consult Our Chef
          </a>
        </div>

      </div>
    </div>
  );
}

export default MealPlans;