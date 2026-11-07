import React from 'react';
import { Shield, Sparkles, Users, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-warm-200">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Lemon Leaf Dining Ambiance"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-lemon-300 font-bold text-xs uppercase tracking-wider">Family Dining Destination</span>
                <h3 className="text-xl font-bold mt-1">Virtuoso Complex, Budigere Cross</h3>
                <p className="text-xs text-zinc-300 mt-1">Serving authentic flavors daily from 11:30 AM to 11:00 PM.</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-leaf-50 text-leaf-800 text-xs font-bold uppercase tracking-wider mb-3">
              About Lemon Leaf
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mb-5">
              A Warm Multi-Cuisine Experience for Every Palate
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
              LEMON LEAF (Veg & Non Veg Restaurant) is dedicated to serving genuine flavors crafted with fresh regional ingredients. Located conveniently near Bommenahalli Bus Stop at Budigere Cross, our kitchen bridges the rich culinary traditions of North Indian tandoor mastery, aromatic dum biryanis, and crisp Indo-Chinese favorites.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-lemon-100 text-lemon-700 flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">Extensive Menu</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Over 25 carefully crafted vegetarian and non-vegetarian selections.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">Careful Preparation</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Strict quality controls and dedicated preparation for vegetarian recipes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">Family & Group Friendly</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Comfortable dining space welcoming family gatherings and office groups.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-leaf-100 text-leaf-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">Outdoor Catering</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Full buffet setups for birthdays, housewarmings, and special events.</p>
                </div>
              </div>
            </div>

            {/* Verified Services tags */}
            <div className="pt-4 border-t border-warm-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-zinc-700 mr-2">Available Services:</span>
              {RESTAURANT_DATA.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-warm-100 text-zinc-800 text-xs font-semibold border border-warm-200"
                >
                  ✓ {srv.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

