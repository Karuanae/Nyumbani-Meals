import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ArrowLeft,
  Star, 
  Sparkles, 
  Clock, 
  UtensilsCrossed,
  MessageSquare,
  Shield,
  Heart,
  Flame
} from "lucide-react";

// 1. Hero Dynamic Cinematic Slides
const heroSlides = [
  {
    title: "Healthy Meals.",
    subtitle: "Happy Homes.",
    caption: "Premium Home-Style Cooking",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Purely Kenyan.",
    subtitle: "Made With Care.",
    caption: "Sourced Fresh From Local Farms",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Classy Dining.",
    subtitle: "Delivered with Love.",
    caption: "Ready-to-Eat Luxury Subscriptions",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1200",
  }
];

// 2. High-Quality Kenyan Food Carousel Data 
const weeklyFeaturedMeals = [
  {
    name: "Ugali, Sukuma Wiki & Beef Stew",
    desc: "A timeless premium classic. Rich, hearty, satisfying chunks of organic beef stew.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    badge: "Most Ordered",
    stats: "4.9 ★ (1.2k orders)"
  },
  {
    name: "Fragrant Coastal Pilau & Beef",
    desc: "Aromatic basmati rice cooked with authentic coastal spices, served with tender beef and kachumbari.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800",
    badge: "Trending #1",
    stats: "4.8 ★ (950 orders)"
  },
  {
    name: "Comfort Matoke & Chicken Stew",
    desc: "Slow-simmered green bananas served steaming hot in a rich, velvety tomato herb gravy.",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
    badge: "Chef Special",
    stats: "4.9 ★ (820 orders)"
  },
  {
    name: "Flame-Grilled Chicken, Rice & Veg",
    desc: "Perfectly grilled quarter chicken paired with fragrant rice and crunchy blanched broccoli.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    badge: "Healthy Pick",
    stats: "4.7 ★ (1.1k orders)"
  },
  {
    name: "Spicy Goat Fry (Choma style) & Salad",
    desc: "Tender, pan-fried choma-style goat meat served over long-grain fluffy rice.",
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800",
    badge: "Weekend Classic",
    stats: "5.0 ★ (640 orders)"
  }
];

// 3. Visual Menu Categories
const quickCategories = [
  { title: "Breakfast Classics", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=500", link: "/meals" },
  { title: "Signature Lunches", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=500", link: "/meals" },
  { title: "Hearty Family Dinners", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=500", link: "/meals" }
];

function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-advance hero cinematic screen
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev >= weeklyFeaturedMeals.length - 3 ? 0 : prev + 1));
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? weeklyFeaturedMeals.length - 3 : prev - 1));
  };

  return (
    <div className="bg-[#FFF3E9] min-h-screen pt-16 overflow-hidden text-[#3A2E24]">
      
      {/* ==================== 1. VISUAL SPLIT HERO SLIDER ==================== */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 bg-[#3A2E24] overflow-hidden">
        
        {/* Left Side: Bold Aesthetic Typography with Brand Colors */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 bg-[#FFF3E9] z-20 relative">
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none hidden lg:block"></div>
          
          <div className="space-y-6 max-w-md mx-auto lg:mx-0">
       

            {/* Title changes dynamically based on active slide text context */}
            <div className="h-[180px] sm:h-[220px] flex flex-col justify-center">
              <p className="text-[#6BA43A] font-['Great_Vibes'] text-3xl sm:text-4xl mb-2 transition-all duration-500">
                {heroSlides[currentHero].caption}
              </p>
              <h1 className="font-['Poppins'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#3A2E24] leading-tight transition-all duration-700">
                {heroSlides[currentHero].title} <br />
                <span className="text-[#21633D] font-['Great_Vibes'] text-5xl sm:text-7xl font-normal tracking-wide lowercase pt-2 block">
                  {heroSlides[currentHero].subtitle}
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a href="/meal-plans" className="w-full sm:w-auto text-center bg-[#21633D] hover:bg-[#6BA43A] text-white font-['Poppins'] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#21633D]/30 hover:-translate-y-1">
                Explore Subscription Plans
              </a>
              <a href="/meals" className="w-full sm:w-auto text-center border-2 border-[#3A2E24] hover:border-[#F28C28] text-[#3A2E24] hover:text-[#F28C28] font-['Poppins'] font-bold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                Menu <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-6 left-6 sm:left-12 lg:left-16 flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHero(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${idx === currentHero ? "bg-[#F28C28] w-8" : "bg-[#3A2E24]/20 w-2"}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Immersive Img Gallery View Frame */}
        <div className="lg:col-span-7 relative h-[45vh] lg:h-auto overflow-hidden bg-black">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentHero ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-105 rotate-1"}`}
            >
              <img src={slide.img} alt="Premium Kenyan food setup" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFF3E9] via-transparent to-black/20 lg:from-[#FFF3E9]/90 lg:via-transparent"></div>
            </div>
          ))}
        </div>
      </section>


      {/* ==================== 2. THE WEEKLY FEATURED MOST ORDERED MEALS CAROUSEL ==================== */}
      <section className="py-24 bg-white relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Layout */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 text-center md:text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[#F28C28] font-semibold text-xs tracking-widest uppercase">
                <Flame size={14} className="animate-bounce" /> Highly Requested Dishes
              </div>
              <h2 className="font-['Poppins'] font-extrabold text-3xl sm:text-4xl text-[#3A2E24] tracking-tight">
                Weekly Featured Favorites
              </h2>
              <p className="text-[#6BA43A] font-['Great_Vibes'] text-2xl">Freshly cooked home standards ordered most by Nairobi families</p>
            </div>
            
            {/* Control buttons for responsive carousel matrix */}
            <div className="flex items-center gap-3 mt-6 md:mt-0">
              <button onClick={prevCarousel} className="p-3 rounded-full border border-gray-200 bg-[#FFF3E9] text-[#3A2E24] hover:bg-[#21633D] hover:text-white transition-all shadow-md">
                <ArrowLeft size={18} />
              </button>
              <button onClick={nextCarousel} className="p-3 rounded-full border border-gray-200 bg-[#FFF3E9] text-[#3A2E24] hover:bg-[#21633D] hover:text-white transition-all shadow-md">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Active Carousel Wrapper Component */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex gap-8 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${carouselIndex * (100 / 3.05)}%)` }}
            >
              {weeklyFeaturedMeals.map((meal, idx) => (
                <div 
                  key={idx} 
                  className="w-full min-w-[100%]"
                >
                  <div className="bg-[#FFF3E9]/40 border border-orange-100/30 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                    
                    {/* Meal Card Top Frame Visual */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                      <img src={meal.img} alt={meal.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Floating Indicator Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                        <span className="bg-[#F28C28] text-white font-['Poppins'] font-bold text-xs uppercase px-4 py-1.5 rounded-xl shadow-md tracking-wider">
                          {meal.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-[#3A2E24]/90 backdrop-blur-md text-white font-semibold text-xs px-3 py-1.5 rounded-lg z-20 shadow-sm flex items-center gap-1">
                        <Star size={12} className="fill-[#F28C28] text-[#F28C28]" /> {meal.stats}
                      </div>
                    </div>

                    {/* Meal Info Bottom Box */}
                    <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                      <div className="space-y-2">
                        <h3 className="font-['Poppins'] font-bold text-xl text-[#3A2E24] tracking-tight group-hover:text-[#21633D] transition-colors duration-300">
                          {meal.name}
                        </h3>
                        <p className="text-gray-500 font-light text-sm leading-relaxed">
                          {meal.desc}
                        </p>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock size={12} /> Ready-to-Eat Daily Box
                        </span>
                        <a href="https://wa.me/254795317878" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-[#21633D] hover:text-[#F28C28] uppercase tracking-wider transition-colors">
                          Order via Chat <UtensilsCrossed size={12} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ==================== 3. CATEGORY BLOCK GRID (IMAGE DRIVEN) ==================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <h2 className="font-['Poppins'] font-extrabold text-3xl sm:text-4xl text-[#3A2E24] tracking-tight">Structured Meal Frameworks</h2>
          <p className="text-[#F28C28] font-['Great_Vibes'] text-3xl">Click below to discover your perfect routine choice</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickCategories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.link}
              className="relative h-80 rounded-3xl overflow-hidden shadow-lg group border-4 border-white transform hover:-translate-y-2 transition-all duration-500 block"
            >
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E24] via-[#3A2E24]/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <h3 className="font-['Poppins'] font-bold text-xl tracking-tight">{cat.title}</h3>
                  <p className="text-[#6BA43A] font-['Great_Vibes'] text-lg mt-0.5 opacity-90 group-hover:opacity-100">Handcrafted Fresh Daily</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F28C28] text-white flex items-center justify-center transform scale-90 group-hover:scale-100 group-hover:bg-[#21633D] transition-all duration-300 shadow-md">
                  <ArrowRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* ==================== 4. MINIMAL GRAPHIC CONVERSION BANNER ==================== */}
      <section className="bg-gradient-to-br from-[#21633D] via-[#3A2E24] to-[#21633D] text-white py-20 px-4 text-center relative overflow-hidden">
        {/* Parallax Background Glow Element Effects */}
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#6BA43A]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#F28C28]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="font-['Poppins'] font-extrabold text-3xl sm:text-5xl leading-tight tracking-tight">
            Ready to experience elite <br />
            <span className="font-['Great_Vibes'] text-[#F28C28] text-5xl sm:text-7xl tracking-wide lowercase font-normal">kitchen subscription care?</span>
          </h2>
          <p className="font-['Poppins'] font-light text-gray-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Get instant setup routing, customize your diet structures, or request corporate office lunch plans seamlessly via WhatsApp client link.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/254795317878" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F28C28] hover:bg-white text-white hover:text-[#21633D] px-8 py-4 rounded-xl font-['Poppins'] font-bold text-base transition-all duration-300 shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageSquare size={18} /> Order Instantly via WhatsApp
            </a>
            <a href="/meal-plans" className="w-full sm:w-auto text-center border border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-['Poppins'] font-medium text-sm transition-colors duration-200">
              View Pricing Packages
            </a>
          </div>
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-400 font-light max-w-md mx-auto border-t border-white/10">
            <div className="flex items-center justify-center gap-1">✓ Hygienic Kitchens</div>
            <div className="flex items-center justify-center gap-1">✓ Premium Ingredients</div>
            <div className="flex items-center justify-center gap-1">✓ Vetted Delivery</div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;