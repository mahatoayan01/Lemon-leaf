import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ShoppingBag, AlertCircle, X } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { DishCard } from '../components/menu/DishCard';
import { MENU_ITEMS, MENU_CATEGORIES, MENU_DISCLAIMER } from '../data/menu';
import { useCart } from '../context/CartContext';

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const { getItemCount, getSubtotal } = useCart();

  const itemCount = getItemCount();
  const subtotal = getSubtotal();

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
      // Veg filter
      const matchVeg = !vegOnly || item.isVeg;
      // Search filter
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchVeg && matchSearch;
    });
  }, [selectedCategory, vegOnly, searchQuery]);

  return (
    <div className="min-h-screen bg-warm-50/50 pb-24">
      <SEO
        title="Menu"
        description="Explore our authentic multi-cuisine menu featuring Tandoori starters, aromatic Dum Biryanis, Punjabi curries, and Indo-Chinese delights at LEMON LEAF Restaurant."
      />

      {/* Page Header */}
      <div className="bg-white border-b border-warm-200 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-leaf-700 font-bold text-xs uppercase tracking-wider block mb-1">
            Our Culinary Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            LEMON LEAF Restaurant Menu
          </h1>
          <p className="text-sm text-zinc-600 mt-2 max-w-xl mx-auto">
            Freshly prepared North Indian, Tandoori, Dum Biryanis, and Chinese selections.
          </p>

          {/* Sample Menu Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-medium">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{MENU_DISCLAIMER}</span>
          </div>
        </div>
      </div>

      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-warm-200 py-4 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search dishes (e.g. biryani, soup, paneer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-warm-50 border border-warm-300 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Veg Only Toggle */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                vegOnly
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-zinc-700 border-warm-300 hover:bg-warm-50'
              }`}
            >
              <span className={`w-3.5 h-3.5 border-2 ${vegOnly ? 'border-white' : 'border-emerald-600'} flex items-center justify-center p-0.5 rounded-xs`}>
                <span className={`w-1.5 h-1.5 rounded-full ${vegOnly ? 'bg-white' : 'bg-emerald-600'} block`} />
              </span>
              <span>Veg Only</span>
            </button>
          </div>

        </div>

        {/* Categories Horizontal Scroll */}
        <div className="max-w-7xl mx-auto mt-3 overflow-x-auto scrollbar-none pb-1">
          <div className="flex items-center gap-2 min-w-max">
            {MENU_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-leaf-800 text-white shadow-xs'
                      : 'bg-warm-100 text-zinc-700 hover:bg-warm-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Results summary */}
        <div className="flex items-center justify-between mb-6 text-xs text-zinc-500 font-medium">
          <span>Showing {filteredItems.length} items</span>
          {(searchQuery || selectedCategory !== "All" || vegOnly) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setVegOnly(false);
              }}
              className="text-leaf-700 hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-warm-200 max-w-md mx-auto my-12">
            <div className="w-16 h-16 rounded-full bg-warm-100 flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="font-extrabold text-lg text-zinc-900 mb-1">No matching dishes found</h3>
            <p className="text-xs text-zinc-500 mb-6">
              We couldn't find any dishes matching "{searchQuery}". Try searching for another ingredient or reset your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setVegOnly(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-leaf-700 text-white font-bold text-xs"
            >
              Show All Menu Items
            </button>
          </div>
        )}

      </div>

      {/* Floating Cart Bar if cart has items */}
      {itemCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-md px-4 animate-in slide-in-from-bottom duration-200">
          <Link
            to="/cart"
            className="flex items-center justify-between p-4 rounded-2xl bg-zinc-950 text-white shadow-2xl hover:bg-zinc-900 transition-colors border border-zinc-800"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lemon-400 text-zinc-950 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'} in Cart
                </p>
                <p className="text-xs text-zinc-400">Subtotal: ₹{subtotal}</p>
              </div>
            </div>

            <span className="px-4 py-2 rounded-xl bg-leaf-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm">
              Review & Checkout →
            </span>
          </Link>
        </div>
      )}

    </div>
  );
};

