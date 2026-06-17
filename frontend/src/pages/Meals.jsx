import React, { useState } from "react";
import { 
  Clock, 
  Award, 
  Star, 
  Search, 
  X, 
  Info, 
  UtensilsCrossed, 
  CheckCircle,
  MessageSquare,
  Sparkles
} from "lucide-react";

// Full menu array expanded from the signature documents and brand flyers
const categories = ["All", "Signature Meals", "Breakfast Classics", "Family Packages"];

const menuItems = [
  // 1. Signature Meals
  {
    name: "Ugali, Sukuma Wiki & Beef Stew",
    category: "Signature Meals",
    desc: "A timeless premium classic. Rich, hearty, deeply satisfying chunks of organic slow-simmered beef stew.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
    label: "Timeless Classic",
    macros: "Protein: 42g | Carbs: 65g | Fats: 14g",
    ingredients: ["Organic Local Beef", "Fresh Skuma Wiki (Collard Greens)", "White Maize Meal Ugali", "Chef's Gravy"]
  },
  {
    name: "Fragrant Coastal Pilau & Beef",
    category: "Signature Meals",
    desc: "Fragrant, spiced coastal pilau prepared with premium long-grain rice, served with juicy beef chunks and fresh kachumbari.",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",
    label: "Fragrant & Flavorful",
    macros: "Protein: 38g | Carbs: 78g | Fats: 12g",
    ingredients: ["Basmati Rice", "Tender Beef Cubes", "Pilau Masala Herbs", "Red Onion & Tomato Kachumbari"]
  },
  {
    name: "Matoke & Thick Chicken Stew",
    category: "Signature Meals",
    desc: "Comfort food done right. Slow-stewed organic green bananas served steaming hot in a thick, savory chicken gravy.",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600",
    label: "Pure Comfort",
    macros: "Protein: 35g | Carbs: 55g | Fats: 15g",
    ingredients: ["Kisii Green Bananas (Matoke)", "Free-range Chicken Strips", "Bell Peppers", "Fresh Coriander Root"]
  },
  {
    name: "Goat Fry, Rice & Salad",
    category: "Signature Meals",
    desc: "Spicy, perfectly tender pan-fried choma-style goat meat seasoned to perfection and layered over fluffy long-grain rice.",
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600",
    label: "Local Favorite",
    macros: "Protein: 45g | Carbs: 70g | Fats: 18g",
    ingredients: ["Premium Local Goat Choma", "Aromatic Fluffy Rice", "Fresh Cabbage Shavings", "Local Herbs"]
  },

  // 2. Breakfast Classics
  {
    name: "Masala Omelette & Wholemeal Toast",
    category: "Breakfast Classics",
    desc: "Protein-packed farm fresh eggs scrambled with diced tomatoes, onions, vibrant green chilis, and local spices.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
    label: "Morning Fuel",
    macros: "Protein: 24g | Carbs: 28g | Fats: 16g",
    ingredients: ["Farm Fresh Eggs", "Wholemeal Toast Layers", "Diced Birdseye Chili", "Coriander & Onion Mash"]
  },
  {
    name: "Pancakes With Fresh Fruits",
    category: "Breakfast Classics",
    desc: "Light, sweet, naturally delicious golden fluffy pancakes layered beautifully with seasonal sliced fruits and wild honey syrup.",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600",
    label: "Naturally Sweet",
    macros: "Protein: 12g | Carbs: 85g | Fats: 8g",
    ingredients: ["Fluffy Artisan Batter", "Seasonal Fresh Strawberries", "Sliced Bananas", "Organic Honey Drizzle"]
  },
  {
    name: "Chapati & Chicken Sausage",
    category: "Breakfast Classics",
    desc: "Warm, soft, multi-layered flaky chapatis served alongside cleanly grilled premium lean chicken sausage links.",
    img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600",
    label: "Energy Rich",
    macros: "Protein: 28g | Carbs: 58g | Fats: 14g",
    ingredients: ["Multi-layered Flaky Chapati", "Grilled Chicken Sausages", "Mild Tomato Fondue Dip"]
  },
  {
    name: "Berry Smoothie Bowl",
    category: "Breakfast Classics",
    desc: "A rich, antioxidant-packed blend of fresh local strawberries, raspberries, and thick Greek yogurt topped with crunchy chia seeds.",
    img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=600",
    label: "Nutrient Rich",
    macros: "Protein: 16g | Carbs: 45g | Fats: 5g",
    ingredients: ["Fresh Local Mixed Berries", "Thick Probiotic Greek Yogurt", "Chia Seeds", "Toasted Oats Granolas"]
  },
  {
    name: "Avocado Toast & Boiled Egg",
    category: "Breakfast Classics",
    desc: "Thick mash of seasonal premium Mt. Kenya avocados seasoned with sea salt, lime, and red pepper over crusty artisan brown bread.",
    img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600",
    label: "Healthy Fats",
    macros: "Protein: 18g | Carbs: 32g | Fats: 22g",
    ingredients: ["Premium Mt. Kenya Avocados", "Hard-Boiled Farm Egg", "Artisan Crusty Brown Bread", "Chili Flakes"]
  },

  // 3. Family Packages
  {
    name: "The Full Nyumbani Feast",
    category: "Family Packages",
    desc: "A giant family-sized sharing tray featuring a mix of flame-grilled chicken, beef stew chunks, aromatic rice, and chapatis.",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600",
    label: "Family Special",
    macros: "Serves 4-5 People Comfortably",
    ingredients: ["Whole Grilled Chicken", "Large Beef Stew Bowl", "Fluffy Basmati Rice Rice", "5 Layered Chapatis", "Double Kachumbari"]
  }
];

function Meals() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null); // Triggers detail popup modal

  // Filter logic combination for Search and Categories Tab
  const filteredItems = menuItems.filter(item => {
    const matchesTab = activeTab === "All" || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#FFF3E9] min-h-screen pt-24 pb-20 text-[#3A2E24] relative">
      
      {/* Decorative Floating Visual Background Elements */}
      <div className="absolute top-24 left-10 w-64 h-64 bg-[#21633D]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F28C28]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================== PAGE HEADER ==================== */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#21633D]/10 text-[#21633D] px-4 py-1.5 rounded-full text-xs font-bold font-['Poppins'] uppercase tracking-wider shadow-sm">
            <Sparkles size={14} className="text-[#F28C28] animate-pulse" /> Freshly Sourced & Prepared
          </div>
          <h1 className="font-['Poppins'] font-extrabold text-4xl sm:text-5xl tracking-tight text-[#3A2E24]">
            Our Culinary Showcase
          </h1>
          <p className="font-['Great_Vibes'] text-[#F28C28] text-3xl">
            Nutritious home-style masterclasses prepared to absolute perfection
          </p>
        </div>

        {/* ==================== SEARCH BAR INPUT SECTION ==================== */}
        <div className="max-w-md mx-auto mb-12 relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#21633D] transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search our delicious creations... (e.g. Pilau, Ugali)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3.5 bg-white border border-orange-100/60 rounded-2xl shadow-md font-['Poppins'] text-sm focus:outline-none focus:ring-2 focus:ring-[#21633D]/20 focus:border-[#21633D] transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* ==================== NAVIGATION TABS SYSTEM ==================== */}
        <div className="flex justify-center items-center gap-3 mb-16 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-['Poppins'] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-500 border shadow-sm ${
                activeTab === tab 
                  ? "bg-[#21633D] text-white border-transparent shadow-[#21633D]/20 scale-105" 
                  : "bg-white text-[#3A2E24] hover:bg-[#6BA43A]/10 border-orange-100/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ==================== FILTER RESULT COUNT NOTIFIER ==================== */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-sm border border-orange-100/30 max-w-lg mx-auto space-y-4">
            <UtensilsCrossed size={40} className="mx-auto text-gray-300 animate-bounce" />
            <h3 className="font-['Poppins'] font-bold text-lg text-[#3A2E24]">No meals match your criteria</h3>
            <p className="text-gray-400 font-light text-sm px-6">Try refining your word choice search or toggle a different filter menu tab index link.</p>
          </div>
        ) : (
          /* ==================== THE MENU MEAL MATRIX GRID ==================== */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((meal, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group hover:-translate-y-2 border border-orange-50/50"
              >
                {/* Dynamic Image Media Frame */}
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img 
                    src={meal.img} 
                    alt={meal.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Absolute Corner Overlay Badges */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-[10px] font-extrabold uppercase font-['Poppins'] tracking-wider text-[#21633D] shadow-sm flex items-center gap-1.5">
                    <Award size={12} strokeWidth={3} /> {meal.label}
                  </div>
                  
                  {/* Floating Action Button for Recipe Inspection Modal */}
                  <button 
                    onClick={() => setSelectedMeal(meal)}
                    className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm text-[#3A2E24] hover:bg-[#F28C28] hover:text-white transition-all transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-md flex items-center gap-1 text-xs font-semibold font-['Poppins']"
                  >
                    <Info size={14} /> Inspect Recipe
                  </button>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-['Poppins'] font-extrabold text-xl text-[#3A2E24] tracking-tight group-hover:text-[#21633D] transition-colors duration-300">
                      {meal.name}
                    </h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-2">
                      {meal.desc}
                    </p>
                  </div>
                  
                  {/* Base Metadata row lines */}
                  <div className="pt-3 flex items-center justify-between border-t border-gray-100 text-xs">
                    <span className="text-[#6BA43A] font-extrabold font-['Poppins'] tracking-wider uppercase bg-[#6BA43A]/10 px-2.5 py-1 rounded-md">
                      {meal.category}
                    </span>
                    <div className="flex items-center gap-0.5 text-[#F28C28]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ==================== DETAILED INTERACTIVE MODAL OVERLAY ==================== */}
      {selectedMeal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl relative animate-scale-up border border-orange-100/30">
            
            {/* Close trigger button absolute positioning */}
            <button 
              onClick={() => setSelectedMeal(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors shadow-md"
            >
              <X size={18} />
            </button>

            {/* Split Banner Image Frame */}
            <div className="h-56 relative bg-gray-900">
              <img src={selectedMeal.img} alt={selectedMeal.name} className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20"></div>
              <div className="absolute bottom-4 left-6">
                <span className="bg-[#F28C28] text-white px-3 py-1 rounded-lg text-[10px] uppercase font-bold font-['Poppins'] tracking-widest shadow-md">
                  {selectedMeal.label}
                </span>
              </div>
            </div>

            {/* Comprehensive Meta Content Panels */}
            <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-1">
                <h2 className="font-['Poppins'] font-black text-2xl text-[#3A2E24] tracking-tight leading-tight">
                  {selectedMeal.name}
                </h2>
                <p className="text-xs font-bold text-[#6BA43A] font-['Poppins'] tracking-wider uppercase">
                  {selectedMeal.category}
                </p>
              </div>

              <p className="text-gray-600 font-light text-sm leading-relaxed bg-[#FFF3E9]/50 p-4 rounded-xl border border-orange-100/30">
                {selectedMeal.desc}
              </p>

              {/* Sourced macro profiles mapping fields */}
              <div className="space-y-2">
                <h4 className="font-['Poppins'] font-bold text-xs uppercase text-gray-400 tracking-widest flex items-center gap-1">
                  <Clock size={12} /> Macro Configuration Profile
                </h4>
                <p className="text-sm font-bold font-['Poppins'] text-[#3A2E24] bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 inline-block">
                  {selectedMeal.macros}
                </p>
              </div>

              {/* Sourced Raw Premium Sourcing lists layout rows */}
              <div className="space-y-3">
                <h4 className="font-['Poppins'] font-bold text-xs uppercase text-gray-400 tracking-widest flex items-center gap-1">
                  <CheckCircle size={12} className="text-[#6BA43A]" /> Premium Raw Sourcing Elements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 font-light font-['Poppins']">
                  {selectedMeal.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#6BA43A] rounded-full"></div>
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Immediate Conversion CTA footer internally within overlay container frame */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`https://wa.me/254795317878?text=Hello%20Nyumbani%20Meals,%20I'm%20interested%20in%20ordering%20the%20${encodeURIComponent(selectedMeal.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-[#21633D] hover:bg-[#6BA43A] text-white font-['Poppins'] font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 flex-1"
                >
                  <MessageSquare size={16} /> Order Meal Pack via Chat
                </a>
                <button
                  onClick={() => setSelectedMeal(null)}
                  className="w-full sm:w-auto text-center border border-gray-200 text-gray-500 font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Back To Showcase
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Meals;