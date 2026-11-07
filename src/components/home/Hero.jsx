import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Utensils, Calendar, ShoppingBag, ShieldCheck, MapPin } from 'lucide-react';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-warm-100 via-white to-warm-50 pt-10 pb-16 lg:py-24 border-b border-warm-200">
      {/* Background Subtle Pattern / Accent Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-lemon-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-leaf-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Rating Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-warm-200 shadow-xs mb-6">
              <span className="flex items-center gap-1 font-extrabold text-xs text-zinc-900">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                {RESTAURANT_DATA.rating} / 5.0
              </span>
              <span className="text-zinc-300">|</span>
              <span className="text-xs text-zinc-600 font-medium">
                Over 1,850+ Google & Local Reviews
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-4">
              Real Flavors, Fresh Spices & Warm Hospitality at{' '}
              <span className="text-leaf-700 underline decoration-lemon-400 decoration-wavy decoration-2">
                LEMON LEAF
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8 max-w-2xl">
              {RESTAURANT_DATA.aboutShort}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <Link
                to="/menu"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <Utensils className="w-4 h-4" />
                View Full Menu
              </Link>
              <Link
                to="/menu"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-lemon-400 hover:bg-lemon-500 text-zinc-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Online
              </Link>
              <a
                href="#book-table"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-warm-100 text-zinc-800 border border-warm-300 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4 text-leaf-700" />
                Book a Table
              </a>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-warm-200 text-xs text-zinc-700 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Veg & Non-Veg Prepared Separately</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Charcoal Clay Tandoor</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Outdoor Catering Available</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Dish Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
                  alt="Lemon Leaf Dum Biryani"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-lemon-400 text-zinc-950 font-extrabold text-[10px] tracking-wider uppercase">
                      Bestseller
                    </span>
                    <span className="text-xs text-zinc-300">Dine-in & Parcel</span>
                  </div>
                  <h3 className="font-extrabold text-xl text-white">Signature Chicken Dum Biryani</h3>
                  <p className="text-xs text-zinc-300 mt-1">Slow-cooked in earthen handi with royal spices.</p>
                </div>
              </div>

              {/* Floating Quick Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-warm-200 hidden sm:flex items-center gap-3.5 max-w-xs animate-bounce duration-1000">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xl font-bold">
                  🍲
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">Lemon Dhaniya Soup</h4>
                  <p className="text-xs text-zinc-500">Tangy signature house broth</p>
                  <span className="text-xs font-bold text-leaf-700">₹145 only</span>
                </div>
              </div>

              {/* Location Tag */}
              <div className="absolute -top-4 -right-4 bg-zinc-900 text-white px-3.5 py-2 rounded-xl shadow-lg border border-zinc-800 flex items-center gap-2 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-lemon-400" />
                <span>Budigere Cross, Bangalore</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

