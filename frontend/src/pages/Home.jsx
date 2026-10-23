import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ArrowLeft, 
  Star, 
  Sparkles, 
  Clock, 
  UtensilsCrossed, 
  MessageSquare, 
  ShieldCheck, 
  Heart, 
  Flame,
  CheckCircle2,
  ChefHat
} from "lucide-react";

// 1. Hero Dynamic Cinematic Slides
const heroSlides = [
  {
    title: "Healthy Meals.",
    subtitle: "Happy Homes.",
    caption: "PREMIUM HOME-STYLE COOKING",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Purely Kenyan.",
    subtitle: "Made With Care.",
    caption: "SOURCED FRESH FROM LOCAL FARMS",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Classy Dining.",
    subtitle: "Delivered with Love.",
    caption: "READY-TO-EAT LUXURY SUBSCRIPTIONS",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1200",
  }
];

// 2. High-Quality Kenyan Food Carousel Data 
const weeklyFeaturedMeals = [
  {
    name: "Ugali, Sukuma Wiki & Beef Stew",
    desc: "A timeless premium classic. Rich, hearty, satisfying chunks of organic beef stew simmered with fresh herbs.",
    img: "./ugalisukuma.jpeg",
    badge: "Most Ordered",
    stats: "4.9",
    reviews: "1.2k orders"
  },
  {
    name: "Fragrant Coastal Pilau & Beef",
    desc: "Aromatic basmati rice cooked with authentic coastal spices, served with tender beef and crisp kachumbari.",
    img: "./pilau.jpeg",
    badge: "Trending #1",
    stats: "4.8",
    reviews: "950 orders"
  },
  {
    name: "Homestyle Chicken Stew",
    desc: "Slow-simmered farm chicken in a rich, velvety tomato herb gravy, paired with traditional sides.",
    img: "./chickenstew.jpeg",
    badge: "Chef Special",
    stats: "4.9",
    reviews: "820 orders"
  },
  {
    name: "Vibrant Vegetable Rice",
    desc: "Fragrant seasoned rice tossed with crisp garden veggies, served alongside flame-grilled sides.",
    img: "./vegetablerice.jpeg",
    badge: "Healthy Pick",
    stats: "4.7",
    reviews: "1.1k orders"
  },
  {
    name: "Choma-Style Goat Fry",
    desc: "Tender, pan-fried spiced goat meat cooked to perfection and served over long-grain fluffy rice.",
    img: "./goatstew.jpeg",
    badge: "Weekend Classic",
    stats: "5.0",
    reviews: "640 orders"
  }
];

// 3. Visual Menu Categories
const quickCategories = [
  { title: "Breakfast Classics", desc: "Energy-packed morning dishes", img: "./breakfast.jpeg", link: "/meals" },
  { title: "Signature Lunches", desc: "Balanced office & home lunches", img: "./lunch.jpeg", link: "/meals" },
  { title: "Hearty Family Dinners", desc: "Nourishing evening feasts", img: "./dinner.jpeg", link: "/meals" }
];

function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Responsive Carousel Visible Count Handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance hero cinematic screen
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const maxIndex = Math.max(0, weeklyFeaturedMeals.length - itemsPerPage);

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="bg-[#FFF9F5] min-h-screen pt-16 overflow-hidden text-[#3A2E24] font-['Poppins',sans-serif]">
      
      {/* ==================== 1. VISUAL SPLIT HERO SLIDER ==================== */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 bg-[#2D231B] overflow-hidden">
        
        {/* Left Side: Bold Aesthetic Typography with Brand Colors */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 bg-[#FFF9F5] z-20 relative">
          <div className="max-w-xl mx-auto lg:mx-0 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#21633D]/10 text-[#21633D] text-xs font-bold tracking-wider uppercase">
              <Sparkles size={14} className="text-[#F28C28]" />
              {heroSlides[currentHero].caption}
            </div>

            {/* Dynamic Title Context */}
            <div className="min-h-[160px] sm:min-h-[200px] flex flex-col justify-center transition-all duration-500">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#3A2E24] leading-[1.15] tracking-tight">
                {heroSlides[currentHero].title}
                <span className="font-['Great_Vibes',cursive] text-5xl sm:text-7xl text-[#21633D] font-normal tracking-wide lowercase block pt-2">
                  {heroSlides[currentHero].subtitle}
                </span>
              </h1>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
              Elevate your daily dining with chef-prepared, home-style meals delivered fresh across Nairobi. Zero prep, maximum flavor.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a 
                href="/meal-plans" 
                className="w-full sm:w-auto text-center bg-[#21633D] hover:bg-[#1a4f31] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#21633D]/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Subscriptions
              </a>
              <a 
                href="/meals" 
                className="w-full sm:w-auto text-center border-2 border-[#3A2E24] hover:border-[#F28C28] text-[#3A2E24] hover:text-[#F28C28] font-bold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                View Menu 
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats Counter Row */}
            <div className="pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-4">
              <div>
                <p className="font-bold text-lg sm:text-xl text-[#3A2E24]">100%</p>
                <p className="text-xs text-gray-500">Fresh Organic</p>
              </div>
              <div>
                <p className="font-bold text-lg sm:text-xl text-[#3A2E24]">4.9 ★</p>
                <p className="text-xs text-gray-500">Customer Rating</p>
              </div>
              <div>
                <p className="font-bold text-lg sm:text-xl text-[#3A2E24]">Daily</p>
                <p className="text-xs text-gray-500">Nairobi Delivery</p>
              </div>
            </div>

          </div>

          {/* Slide Indicator Dots */}
          <div className="mt-8 flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHero(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${idx === currentHero ? "bg-[#F28C28] w-8" : "bg-[#3A2E24]/20 w-2.5 hover:bg-[#3A2E24]/40"}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Immersive Visual Framing */}
        <div className="lg:col-span-7 relative h-[50vh] lg:h-auto overflow-hidden bg-black">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentHero ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            >
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-[#FFF9F5] lg:via-transparent lg:to-black/30"></div>
            </div>
          ))}

          {/* Floating Feature Chip */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3 text-xs font-semibold text-[#3A2E24] border border-white/40">
            <div className="w-8 h-8 rounded-full bg-[#21633D] text-white flex items-center justify-center">
              <ChefHat size={16} />
            </div>
            <div>
              <p className="font-bold">Chef-Crafted Standards</p>
              <p className="text-gray-500 text-[11px] font-normal">Hygienic & Authentic Kenyan Taste</p>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== 2. FEATURED MEALS CAROUSEL ==================== */}
      <section className="py-24 bg-white relative px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Layout */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[#F28C28] font-semibold text-xs tracking-widest uppercase">
                <Flame size={16} className="animate-pulse" /> Highly Requested Dishes
              </div>
              <h2 className="font-extrabold text-3xl sm:text-4xl text-[#3A2E24] tracking-tight">
                Weekly Featured Favorites
              </h2>
              <p className="text-[#6BA43A] font-['Great_Vibes',cursive] text-2xl sm:text-3xl">
                Freshly cooked home standards ordered most by Nairobi families
              </p>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-3">
              <button 
                onClick={prevCarousel} 
                aria-label="Previous meals"
                className="p-3.5 rounded-full border border-gray-200 bg-[#FFF9F5] text-[#3A2E24] hover:bg-[#21633D] hover:border-[#21633D] hover:text-white transition-all shadow-sm active:scale-95"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={nextCarousel} 
                aria-label="Next meals"
                className="p-3.5 rounded-full border border-gray-200 bg-[#FFF9F5] text-[#3A2E24] hover:bg-[#21633D] hover:border-[#21633D] hover:text-white transition-all shadow-sm active:scale-95"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Active Carousel Window */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${carouselIndex * (100 / itemsPerPage)}%)` }}
            >
              {weeklyFeaturedMeals.map((meal, idx) => (
                <div 
                  key={idx} 
                  className="w-full md:w-[calc(50%-12px)] shrink-0"
                >
                  <div className="group rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    
                    {/* Meal Image Frame */}
                    <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-gray-100">
                      <img 
                        src={meal.img} 
                        alt={meal.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                      
                      {/* Badge Top-Left */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-[#F28C28] text-white font-bold text-xs uppercase px-3 py-1.5 rounded-full shadow-md tracking-wider">
                          {meal.badge}
                        </span>
                      </div>
                      
                      {/* Rating Top-Right */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#3A2E24] font-bold text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                        <Star size={13} className="fill-[#F28C28] text-[#F28C28]" /> 
                        <span>{meal.stats}</span>
                        <span className="text-gray-400 font-normal">({meal.reviews})</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl text-[#3A2E24] group-hover:text-[#21633D] transition-colors leading-tight">
                          {meal.name}
                        </h3>
                        <p className="text-gray-600 font-light text-sm leading-relaxed">
                          {meal.desc}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                        <span className="text-xs text-gray-500 flex items-center gap-1.5 font-medium">
                          <Clock size={14} className="text-[#6BA43A]" /> Fresh Meal Box
                        </span>
                        <a 
                          href="https://wa.me/254795317878" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#21633D] hover:bg-[#F28C28] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                        >
                          Order <UtensilsCrossed size={14} />
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


      {/* ==================== 3. CATEGORY GRID ==================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-[#3A2E24] tracking-tight">
            Structured Meal Frameworks
          </h2>
          <p className="text-[#F28C28] font-['Great_Vibes',cursive] text-3xl">
            Click below to discover your perfect routine choice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickCategories.map((cat, idx) => (
            <a 
              key={idx} 
              href={cat.link}
              className="relative h-96 rounded-3xl overflow-hidden shadow-md group border-4 border-white transform hover:-translate-y-2 transition-all duration-500 block"
            >
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D231B] via-[#2D231B]/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="font-bold text-xl tracking-tight">{cat.title}</h3>
                  <p className="text-[#6BA43A] font-['Great_Vibes',cursive] text-xl opacity-90">
                    {cat.desc}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#F28C28] text-white flex items-center justify-center transform group-hover:bg-[#21633D] group-hover:rotate-12 transition-all duration-300 shadow-lg shrink-0">
                  <ArrowRight size={20} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* ==================== 4. HIGH CONVERSION CONVERSION BANNER ==================== */}
      <section className="bg-gradient-to-br from-[#21633D] via-[#2D231B] to-[#21633D] text-white py-20 px-6 text-center relative overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#6BA43A]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#F28C28]/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="font-extrabold text-3xl sm:text-5xl leading-tight tracking-tight">
              Ready to experience elite <br />
              <span className="font-['Great_Vibes',cursive] text-[#F28C28] text-5xl sm:text-7xl font-normal block pt-1">
                kitchen subscription care?
              </span>
            </h2>
            <p className="text-gray-300 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Get instant setup routing, customize your diet structures, or request corporate office lunch plans seamlessly via our instant desk link.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a 
              href="https://wa.me/254795317878" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F28C28] hover:bg-white text-white hover:text-[#21633D] px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare size={20} /> Order Instantly via WhatsApp
            </a>
            <a 
              href="/meal-plans" 
              className="w-full sm:w-auto text-center border border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-medium text-sm transition-all duration-200 hover:bg-white/10"
            >
              View Pricing Packages
            </a>
          </div>

          {/* Guarantee Pills */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300 font-light max-w-lg mx-auto border-t border-white/10">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#6BA43A]" /> Hygienic Kitchens
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#6BA43A]" /> Premium Ingredients
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#6BA43A]" /> Vetted Swift Delivery
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;