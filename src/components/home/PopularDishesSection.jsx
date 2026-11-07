import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';
import { MENU_ITEMS } from '../../data/menu';
import { DishCard } from '../menu/DishCard';

export const PopularDishesSection = () => {
  // Take 6 top popular dishes verified from reviews & menus
  const popularDishes = MENU_ITEMS.filter(dish => dish.isPopular).slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-warm-50 border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
              Customer Favorites
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Popular & Signature Dishes
            </h2>
            <p className="text-sm text-zinc-600 mt-2 max-w-xl">
              Authentic multi-cuisine crowd-pleasers cooked fresh to order with real spices and time-honored recipes.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 font-bold text-sm text-leaf-700 hover:text-leaf-800 transition-colors group self-start md:self-end"
          >
            Explore Complete Menu ({MENU_ITEMS.length} items)
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {popularDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-98"
          >
            View Full Menu & Prices
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

