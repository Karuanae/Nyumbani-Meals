import React from "react";
import { 
  Eye, 
  Target, 
  Sparkles, 
  Utensils, 
  ShieldCheck, 
  Heart, 
  TrendingUp, 
  Layers, 
  ChevronRight,
  MessageSquare,
  Award
} from "lucide-react";

const milestones = [
  {
    phase: "Phase 1",
    title: "The Home-Based MVP",
    scope: "0 - 50 Active Subscriptions",
    desc: "Perfecting local flavor profiles and gathering user feedback using direct WhatsApp ordering loops and outsourced hyper-local couriers[cite: 360, 371].",
    color: "bg-[#21633D]",
    textColor: "text-[#21633D]"
  },
  {
    phase: "Phase 2",
    title: "Small Commercial Kitchen Setup",
    scope: "50 - 200 Active Subscriptions",
    desc: "Transitioning production infrastructure into dedicated cooking facilities to manage rising individual and family subscription demands[cite: 372].",
    color: "bg-[#F28C28]",
    textColor: "text-[#F28C28]"
  },
  {
    phase: "Phase 3",
    title: "Central Production Kitchen Hub",
    scope: "200 - 1,000+ Active Subscriptions",
    desc: "Scaling cooking operations into automated centralized kitchen spaces paired with advanced food-tech software systems[cite: 346, 373].",
    color: "bg-[#6BA43A]",
    textColor: "text-[#6BA43A]"
  },
  {
    phase: "Phase 4",
    title: "Regional East African Franchising",
    scope: "Mass Market food-tech Expansion",
    desc: "Expanding delivery grid networks to scale the Nyumbani Meals ecosystem across all major cities in East Africa[cite: 344, 373].",
    color: "bg-[#3A2E24]",
    textColor: "text-[#3A2E24]"
  }
];

function About() {
  return (
    <div className="bg-[#FFF3E9] min-h-screen pt-24 pb-20 text-[#3A2E24] font-['Poppins'] relative overflow-hidden">
      
      {/* Decorative Floating Background Orbs */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#6BA43A]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#F28C28]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 relative z-10">
        
        {/* ==================== 1. CINEMATIC STORY HERO ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="space-y-6 lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#21633D]/10 text-[#21633D] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles size={14} className="text-[#F28C28] animate-pulse" /> Nourishing Families One Meal At A Time
            </div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Our Culinary Story <br />
              <span className="font-['Great_Vibes'] text-[#F28C28] text-5xl sm:text-7xl font-normal lowercase tracking-wide mt-2 block">
                Healthy meals, happy homes. [cite: 13, 342]
              </span>
            </h1>
            <div className="space-y-4 text-gray-600 font-light text-base sm:text-lg leading-relaxed">
              <p>
                Nyumbani Meals is a modern, subscription-based household meal preparation and delivery company dedicated to providing reliable, healthy, convenient, and affordable culinary solutions[cite: 344]. Powered by <strong className="font-bold text-[#3A2E24]">Kaylyne Gourmet Ventures</strong>, we seamlessly blend food preparation with advanced logistics systems[cite: 341, 346].
              </p>
              <p>
                We were founded to solve the growing urban challenge of limited cooking time, dependency on unhealthy takeout, and inconsistent meal planning[cite: 345]. By controlling our entire value chain—from selecting fresh ingredients to cooking in clean kitchen environments—we deliver premium, comforting homemade flavor profiles with modern, automated convenience.
              </p>
            </div>
          </div>

          {/* Premium Multi-Layered Visual Display Grid */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7 relative h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" alt="Hygienic Kitchen Preparation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#21633D]/10"></div>
            </div>
            <div className="col-span-5 space-y-4">
              <div className="relative h-40 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" alt="Fresh ingredients dish" className="w-full h-full object-cover" />
              </div>
              <div className="relative h-44 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 bg-[#3A2E24] flex flex-col justify-center p-6 text-white text-center">
                <Award className="mx-auto text-[#F28C28] animate-bounce mb-1" size={28} />
                <p className="font-['Great_Vibes'] text-2xl text-[#6BA43A]">Premium</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-300">Food-Tech Ecosystem [cite: 346]</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 2. GUIDING CULINARY PILLARS ==================== */}
        <section className="bg-white py-20 px-8 sm:px-12 rounded-[3rem] shadow-xl border border-orange-100/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#21633D] via-[#F28C28] to-[#6BA43A]"></div>
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <h2 className="font-extrabold text-3xl text-[#3A2E24] tracking-tight">Our Core Mission & Vision</h2>
            <p className="text-[#6BA43A] font-['Great_Vibes'] text-2xl">The internal principles guiding every single recipe plate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#FFF3E9]/50 border border-orange-50 p-8 rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#21633D]/10 text-[#21633D] rounded-xl flex items-center justify-center shadow-sm"><Target size={24} /></div>
              <h3 className="font-bold text-2xl text-[#3A2E24]">Our Mission</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                To provide reliable, health-focused, and affordable recurring home-style meals to urban families and individuals, completely eliminating kitchen stress through advanced, recurring subscription models[cite: 358]. We are dedicated to offering full-day meal choices that help busy professionals establish healthy lifestyles[cite: 345, 434].
              </p>
            </div>
            <div className="bg-[#FFF3E9]/50 border border-orange-50 p-8 rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#F28C28]/10 text-[#F28C28] rounded-xl flex items-center justify-center shadow-sm"><Eye size={24} /></div>
              <h3 className="font-bold text-2xl text-[#3A2E24]">Our Vision</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                To become East Africa's leading household food-tech brand, recognized for premium culinary standards, structured recurring meal setups, and a profound contribution to happier homes[cite: 346, 358]. We envision a future where food convenience never requires sacrificing organic, nutritious quality[cite: 345, 419].
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 3. GROWTH ROADMAP TIMELINE ==================== */}
        <section className="space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-extrabold text-3xl sm:text-4xl text-[#3A2E24] tracking-tight">Our Execution Roadmap</h2>
            <p className="text-[#F28C28] font-['Great_Vibes'] text-3xl">Our strategic vision for food-tech scaling across East Africa [cite: 344]</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] uppercase font-black tracking-widest px-3 py-1 text-white rounded-md ${milestone.color}`}>
                      {milestone.phase}
                    </span>
                    <ChevronRight size={16} className={`${milestone.textColor} transform group-hover:translate-x-1 transition-transform`} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg text-[#3A2E24] tracking-tight group-hover:text-[#21633D] transition-colors">
                      {milestone.title}
                    </h3>
                    <p className={`text-xs font-bold font-['Poppins'] ${milestone.textColor}`}>
                      {milestone.scope}
                    </p>
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 4. PARENT HOLDING BLOCK ==================== */}
        <section className="bg-gradient-to-br from-[#3A2E24] via-[#21633D] to-[#3A2E24] rounded-[3rem] p-8 sm:p-14 text-white text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200')" }}></div>
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-[#6BA43A]/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#F28C28]/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <Utensils className="mx-auto text-[#6BA43A] animate-pulse" size={44} />
            <h3 className="font-black text-2xl sm:text-3xl tracking-tight">A Premium Product of Kaylyne Gourmet Ventures [cite: 3, 341]</h3>
            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
              Nyumbani Meals operates under standardized corporate quality frameworks. This structural alignment allows us to seamlessly provide balanced meal solutions for families, fitness-focused individuals, Airbnb properties, and high-volume corporate events[cite: 353, 355].
            </p>
            <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/254795317878?text=Hello%20Nyumbani%20Meals,%20I%20read%20your%20story%20and%20want%20to%20get%20started." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-white text-white hover:text-[#21633D] font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                <MessageSquare size={16} /> Partner/Subscribe with Us
              </a>
              <a href="/meals" className="w-full sm:w-auto text-center border border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-medium text-sm transition-colors duration-200">
                Explore Our Weekly Menu
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;