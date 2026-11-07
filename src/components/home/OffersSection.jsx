import React from 'react';
import { Tag, Sparkles, AlertCircle } from 'lucide-react';
import { SAMPLE_OFFERS } from '../../data/offers';

export const OffersSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lemon-100 text-lemon-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-lemon-600" />
            Special Deals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Promotions & Dining Offers
          </h2>
          <p className="text-sm text-zinc-500 mt-2">
            Seasonal specials and group dining deals.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-medium">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            Note: All promotional cards below are sample placeholders for demo preview.
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SAMPLE_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-2xl border-2 border-dashed border-warm-300 bg-gradient-to-br from-warm-50 to-white p-6 sm:p-7 shadow-xs hover:border-lemon-400 transition-colors flex flex-col justify-between"
            >
              {/* Visible Sample Marker */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-mono text-[11px] font-bold uppercase tracking-wider border border-amber-200">
                  {offer.sampleNotice}
                </span>
                <span className="text-xs font-extrabold text-leaf-800 bg-leaf-100 px-2 py-0.5 rounded-full">
                  {offer.discount}
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-xl text-zinc-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mb-4 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              <div className="pt-4 border-t border-warm-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-zinc-500">Promo Code:</span>
                  <span className="font-mono font-bold text-xs bg-zinc-100 px-2.5 py-1 rounded border border-zinc-200 text-zinc-800 tracking-wider">
                    {offer.code}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 italic">
                  {offer.validity}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

