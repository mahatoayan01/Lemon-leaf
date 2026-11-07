import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Calendar, Phone, Utensils } from 'lucide-react';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const CTAStrip = () => {
  return (
    <section className="bg-gradient-to-r from-leaf-900 via-leaf-800 to-zinc-950 text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="max-w-2xl">
            <span className="text-lemon-400 font-extrabold text-xs uppercase tracking-widest block mb-2">
              Ready for a Delicious Meal?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Order Online, Reserve a Table or Call Us Today
            </h2>
            <p className="text-sm text-zinc-300 mt-2">
              Enjoy freshly prepared North Indian & Tandoori specials in Budigere Cross, Bangalore.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/menu"
              className="px-6 py-3.5 rounded-xl bg-lemon-400 hover:bg-lemon-500 text-zinc-950 font-extrabold text-sm flex items-center gap-2 shadow-lg transition-transform active:scale-98"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Food Online
            </Link>

            <a
              href="#book-table"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm flex items-center gap-2 backdrop-blur-xs transition-colors"
            >
              <Calendar className="w-4 h-4 text-lemon-400" />
              Book Table
            </a>

            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="px-6 py-3.5 rounded-xl bg-leaf-700 hover:bg-leaf-600 text-white font-bold text-sm flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {RESTAURANT_DATA.phoneFormatted}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

