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
const categories = ["All", "Breakfast", "Lunch", "Dinner", "Fitness Menu", "Kids Menu"];

const menuItems = [
  // Breakfast Menu
  {
    name: "Kenyan Classic",
    category: "Breakfast",
    desc: "A warm morning set with tea or coffee, two soft chapatis, two eggs, and seasonal fruit for a classic start.",
    img: "./chapomayai.jpeg",
    label: "Breakfast Set",
    macros: "Carbs + Protein + Fresh Fruit",
    ingredients: ["Kenyan Tea or Coffee", "2 Chapatis", "2 Eggs", "Seasonal Fruit"]
  },
  {
    name: "Power Breakfast",
    category: "Breakfast",
    desc: "A high-energy breakfast with steel-cut oatmeal, banana, boiled eggs, and a glass of fresh juice.",
    img: "./powerbreakfast.jpeg",
    label: "Fuel Up",
    macros: "Fiber + Protein + Vitamins",
    ingredients: ["Oatmeal", "Banana", "Boiled Eggs", "Fresh Juice"]
  },
  {
    name: "Pancake Morning",
    category: "Breakfast",
    desc: "Fluffy pancakes served with grilled sausages, fruit salad, and a warm cup of tea or coffee.",
    img: "./pancakemorning.jpeg",
    label: "Sweet Start",
    macros: "Protein + Carbs + Fresh Fruit",
    ingredients: ["Pancakes", "Sausages", "Fruit Salad", "Tea or Coffee"]
  },
  {
    name: "Healthy Breakfast",
    category: "Breakfast",
    desc: "A bright, antioxidant-rich breakfast with Greek yogurt, granola, fruit mix, and fresh juice.",
    img: "./healthybreakfast.jpeg",
    label: "Light & Fresh",
    macros: "Protein + Healthy Fats",
    ingredients: ["Greek Yogurt", "Granola", "Fruit Mix", "Fresh Juice"]
  },
  {
    name: "Family Breakfast",
    category: "Breakfast",
    desc: "A family-friendly breakfast with mini pancakes, scrambled eggs, sausages, and a fruit bowl.",
    img: "./familybreakfast.jpeg",
    label: "Family Friendly",
    macros: "Balanced Kids + Adult Meal",
    ingredients: ["Mini Pancakes", "Scrambled Eggs", "Sausages", "Fruit Bowl"]
  },

  // Lunch Menu
  {
    name: "Monday Lunch – Swahili Chicken Feast",
    category: "Lunch",
    desc: "A coastal-inspired lunch with Swahili chicken, creamy coconut rice, spicy stew, kachumbari, and fresh fruit.",
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=900",
    label: "Monday Special",
    macros: "Protein + Carbs + Fresh Greens",
    ingredients: ["Swahili Chicken", "Coconut Rice", "Swahili Chicken Stew", "Kachumbari", "Seasonal Fruit"]
  },
  {
    name: "Tuesday Lunch – Beef Delight",
    category: "Lunch",
    desc: "Rich beef stew paired with fragrant pilau rice, seasonal vegetables, and a sweet fruit finish.",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=900",
    label: "Tuesday Treat",
    macros: "Hearty Beef + Vegetables",
    ingredients: ["Beef Delight", "Pilau Rice", "Beef Stew", "Seasonal Vegetables", "Fruit"]
  },
  {
    name: "Wednesday Lunch – Nyumbani Special",
    category: "Lunch",
    desc: "A home-style favorite with ugali, beef wet fry, sukuma wiki, and avocado for a satisfying shared meal.",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=900",
    label: "Midweek Classic",
    macros: "Balanced Comfort Meal",
    ingredients: ["Ugali", "Beef Wet Fry", "Sukuma Wiki", "Avocado"]
  },
  {
    name: "Thursday Lunch – Healthy Bowl",
    category: "Lunch",
    desc: "A clean, nourishing bowl with brown rice, grilled chicken, mixed vegetables, and fresh fruit.",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=900",
    label: "Wholesome Choice",
    macros: "Lean Protein + Fiber",
    ingredients: ["Brown Rice", "Grilled Chicken", "Mixed Vegetables", "Fruit"]
  },
  {
    name: "Friday Lunch – Fish Friday",
    category: "Lunch",
    desc: "A coastal lunch of fried fish fillet, coconut rice, crunchy coleslaw, and a refreshing fruit side.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=900",
    label: "Seafood Favorite",
    macros: "Omega-3 + Fresh Salad",
    ingredients: ["Coconut Rice", "Fried Fish Fillet", "Coleslaw", "Fruit"]
  },
  {
    name: "Saturday Lunch – Family Feast",
    category: "Lunch",
    desc: "A generous family platter with rice, chicken curry, mixed vegetables, and fruit for sharing.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=900",
    label: "Weekend Feast",
    macros: "Comfort + Shareable",
    ingredients: ["Rice", "Chicken Curry", "Mixed Vegetables", "Fruit"]
  },
  {
    name: "Sunday Lunch – Sunday Special",
    category: "Lunch",
    desc: "A celebratory Sunday lunch with pilau, roast beef, kachumbari, and a sweet dessert finish.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=900",
    label: "Sunday Comfort",
    macros: "Rich Feast + Dessert",
    ingredients: ["Pilau", "Roast Beef", "Kachumbari", "Dessert"]
  },

  // Dinner Menu
  {
    name: "Monday Dinner – Beef Stew Plate",
    category: "Dinner",
    desc: "A hearty dinner with slow-cooked beef stew, soft chapati, and seasonal vegetables.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=900",
    label: "Weekday Warmth",
    macros: "Protein + Comfort",
    ingredients: ["Beef Stew", "Chapati", "Vegetables"]
  },
  {
    name: "Tuesday Dinner – Chicken Curry & Rice",
    category: "Dinner",
    desc: "Tender chicken curry served with steamed rice and a crisp salad for a balanced evening meal.",
    img: "https://images.unsplash.com/photo-1512058564366-c9e9cf375e90?auto=format&fit=crop&q=80&w=900",
    label: "Savory Dinner",
    macros: "Protein + Greens",
    ingredients: ["Chicken Curry", "Rice", "Salad"]
  },
  {
    name: "Wednesday Dinner – Spaghetti Bolognese",
    category: "Dinner",
    desc: "Classic spaghetti bolognese with garlic bread and salad for a comforting midweek dinner.",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=900",
    label: "Italian Night",
    macros: "Pasta + Protein",
    ingredients: ["Spaghetti Bolognese", "Garlic Bread", "Salad"]
  },
  {
    name: "Thursday Dinner – Grilled Chicken Plate",
    category: "Dinner",
    desc: "Juicy grilled chicken with creamy mashed potatoes and sautéed vegetables.",
    img: "https://images.unsplash.com/photo-1516684669134-de6b5f3f0ab4?auto=format&fit=crop&q=80&w=900",
    label: "Classic Dinner",
    macros: "Lean Protein + Veggies",
    ingredients: ["Grilled Chicken", "Mashed Potatoes", "Vegetables"]
  },
  {
    name: "Friday Dinner – Fish Fillet Feast",
    category: "Dinner",
    desc: "Crispy fish fillet with rice and coleslaw for a light and satisfying end to the week.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=900",
    label: "Fresh Friday",
    macros: "Omega-3 + Crunch",
    ingredients: ["Fish Fillet", "Rice", "Coleslaw"]
  },
  {
    name: "Saturday Dinner – BBQ Chicken Feast",
    category: "Dinner",
    desc: "Smoky BBQ chicken paired with crispy potato wedges and a fresh salad.",
    img: "https://images.unsplash.com/photo-1498606378646-0d9e3e41ea4b?auto=format&fit=crop&q=80&w=900",
    label: "Weekend Grill",
    macros: "Grilled Protein + Comfort",
    ingredients: ["BBQ Chicken", "Potato Wedges", "Salad"]
  },
  {
    name: "Sunday Dinner – Nyumbani Family Platter",
    category: "Dinner",
    desc: "A family platter with roast chicken, rice, and vegetables for a hearty Sunday evening meal.",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=900",
    label: "Family Platter",
    macros: "Shared Comfort Meal",
    ingredients: ["Roast Chicken", "Rice", "Vegetables"]
  },

  // Fitness Menu
  {
    name: "Fitness Breakfast",
    category: "Fitness Menu",
    desc: "A nutrient-rich breakfast with oats, peanut butter, banana, and boiled eggs to power a strong morning.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=900",
    label: "Premium Add-on",
    macros: "Clean Energy + Muscle Fuel",
    ingredients: ["Oats", "Peanut Butter", "Banana", "Boiled Eggs"]
  },
  {
    name: "Fitness Lunch",
    category: "Fitness Menu",
    desc: "Grilled chicken breast with brown rice and broccoli for a lean midday meal that supports performance.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=900",
    label: "Fuel Up",
    macros: "Protein + Complex Carbs",
    ingredients: ["Grilled Chicken Breast", "Brown Rice", "Broccoli"]
  },
  {
    name: "Fitness Dinner",
    category: "Fitness Menu",
    desc: "A clean dinner choice with your pick of fish or chicken, sweet potato, and mixed vegetables.",
    img: "https://images.unsplash.com/photo-1481931715705-36a6673ba74c?auto=format&fit=crop&q=80&w=900",
    label: "Recovery Plate",
    macros: "Lean Protein + Veggies",
    ingredients: ["Fish or Chicken", "Sweet Potato", "Mixed Vegetables"]
  },

  // Kids Menu
  {
    name: "Kids Breakfast",
    category: "Kids Menu",
    desc: "A fun kid-friendly breakfast with pancakes, fruit, and milk for a happy, nutritious start.",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=900",
    label: "Little Ones",
    macros: "Kid-Friendly + Balanced",
    ingredients: ["Pancakes", "Fruit", "Milk"]
  },
  {
    name: "Kids Lunch",
    category: "Kids Menu",
    desc: "Crispy chicken nuggets, chips, and juice for a comforting and familiar lunch loved by children.",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=900",
    label: "Playful Meal",
    macros: "Protein + Comfort",
    ingredients: ["Chicken Nuggets", "Chips", "Juice"]
  },
  {
    name: "Kids Dinner",
    category: "Kids Menu",
    desc: "Creamy mac and cheese with vegetables and fruit for a cozy dinner packed with familiar favorites.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=900",
    label: "Family Favorite",
    macros: "Cheesy Comfort + Veg",
    ingredients: ["Mac & Cheese", "Vegetables", "Fruit"]
  }
];

function Meals() {
  const [activeTab, setActiveTab] = useState("Breakfast");
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
            <Sparkles size={14} className="text-[#F28C28] animate-pulse" /> Weekly Menu & Daily Specials
          </div>
          <h1 className="font-['Poppins'] font-extrabold text-4xl sm:text-5xl tracking-tight text-[#3A2E24]">
            Breakfast, Lunch & Dinner Plans by Day
          </h1>
          <p className="font-['Great_Vibes'] text-[#F28C28] text-3xl">
            Explore our curated daily meals, premium fitness add-ons, and family-friendly kids selections
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

        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6BA43A] font-bold font-['Poppins']">
            {activeTab === 'All' ? 'Full Weekly Menu' : activeTab}
          </p>
          <h2 className="font-['Poppins'] font-extrabold text-3xl sm:text-4xl text-[#3A2E24]">
            {activeTab === 'All' && 'A full showcase of our breakfast, lunch, dinner, fitness and kids meals'}
            {activeTab === 'Breakfast' && 'Breakfast options to start your day with energy'}
            {activeTab === 'Lunch' && 'Daily lunch specials with fresh Kenyan-inspired flavors'}
            {activeTab === 'Dinner' && 'Comforting dinners for every evening of the week'}
            {activeTab === 'Fitness Menu' && 'Premium fitness add-ons crafted for active lifestyles'}
            {activeTab === 'Kids Menu' && 'Family-friendly kids meals made tasty and balanced'}
          </h2>
          <p className="text-sm text-gray-500 font-light px-4 sm:px-0">
            {activeTab === 'Breakfast' && 'Choose from five breakfast sets including Kenyan Classic, Power Breakfast, Pancake Morning, Healthy Breakfast and Family Breakfast.'}
            {activeTab === 'Lunch' && 'Browse our Monday through Sunday lunch plan, each day designed with hearty protein, fresh sides, and seasonal fruit.'}
            {activeTab === 'Dinner' && 'Select from comforting dinner plates built for the week, from beef stew to family platters and seafood favorites.'}
            {activeTab === 'Fitness Menu' && 'Explore our premium add-on meals with clean protein, complex carbs and nutrient-rich vegetables.'}
            {activeTab === 'Kids Menu' && 'Find playful, wholesome kids meals for breakfast, lunch and dinner.'}
            {activeTab === 'All' && 'Browse the full menu order by section, from breakfast to fitness add-ons and kids choices.'}
          </p>
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
          <>
            {activeTab === 'All' ? (
              <div className="space-y-16">
                {['Breakfast', 'Lunch', 'Dinner', 'Fitness Menu', 'Kids Menu'].map((section) => {
                  const sectionItems = filteredItems.filter(item => item.category === section);
                  if (!sectionItems.length) return null;

                  const sectionLabel = section === 'Fitness Menu' ? 'Fitness Add-On Menu' : section === 'Kids Menu' ? 'Kids Menu' : `${section} Menu`;
                  return (
                    <section key={section} className="space-y-6">
                      <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-orange-100/40">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-[#6BA43A] font-bold font-['Poppins']">{sectionLabel}</p>
                            <h3 className="mt-3 text-2xl sm:text-3xl font-['Poppins'] font-extrabold text-[#3A2E24]">{section === 'All' ? 'Full Menu' : section === 'Fitness Menu' ? 'Fitness Fuel' : section === 'Kids Menu' ? 'Family Kids' : section}</h3>
                          </div>
                          <p className="text-sm text-gray-500 font-light max-w-2xl">
                            {section === 'Breakfast' && 'The best way to begin every morning with balanced energy and wholesome favorites.'}
                            {section === 'Lunch' && 'Fresh daily lunch sets with Kenyan-inspired meals and seasonal sides.'}
                            {section === 'Dinner' && 'Hearty evening choices to close the day with comfort and flavor.'}
                            {section === 'Fitness Menu' && 'Nutrient-packed premium meals designed for strength, recovery, and clean fuel.'}
                            {section === 'Kids Menu' && 'Fun, tasty meals made for kids with balanced nutrition in every plate.'}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sectionItems.map((meal, index) => (
                          <div 
                            key={`${section}-${index}`} 
                            className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group hover:-translate-y-2 border border-orange-50/50"
                          >
                            <div className="relative h-60 overflow-hidden bg-gray-100">
                              <img 
                                src={meal.img} 
                                alt={meal.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-[10px] font-extrabold uppercase font-['Poppins'] tracking-wider text-[#21633D] shadow-sm flex items-center gap-1.5">
                                <Award size={12} strokeWidth={3} /> {meal.label}
                              </div>
                              <button 
                                onClick={() => setSelectedMeal(meal)}
                                className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm text-[#3A2E24] hover:bg-[#F28C28] hover:text-white transition-all transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-md flex items-center gap-1 text-xs font-semibold font-['Poppins']"
                              >
                                <Info size={14} /> Inspect Recipe
                              </button>
                            </div>

                            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                              <div className="space-y-2">
                                <h3 className="font-['Poppins'] font-extrabold text-xl text-[#3A2E24] tracking-tight group-hover:text-[#21633D] transition-colors duration-300">
                                  {meal.name}
                                </h3>
                                <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-2">
                                  {meal.desc}
                                </p>
                              </div>
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
                    </section>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((meal, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group hover:-translate-y-2 border border-orange-50/50"
                  >
                    <div className="relative h-60 overflow-hidden bg-gray-100">
                      <img 
                        src={meal.img} 
                        alt={meal.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-[10px] font-extrabold uppercase font-['Poppins'] tracking-wider text-[#21633D] shadow-sm flex items-center gap-1.5">
                        <Award size={12} strokeWidth={3} /> {meal.label}
                      </div>
                      <button 
                        onClick={() => setSelectedMeal(meal)}
                        className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-sm text-[#3A2E24] hover:bg-[#F28C28] hover:text-white transition-all transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-md flex items-center gap-1 text-xs font-semibold font-['Poppins']"
                      >
                        <Info size={14} /> Inspect Recipe
                      </button>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-['Poppins'] font-extrabold text-xl text-[#3A2E24] tracking-tight group-hover:text-[#21633D] transition-colors duration-300">
                          {meal.name}
                        </h3>
                        <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-2">
                          {meal.desc}
                        </p>
                      </div>
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
          </>
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