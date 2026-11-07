import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Phone, Car, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { RESTAURANT_DATA } from '../data/restaurant';

export const Location = () => {
  return (
    <div className="min-h-screen bg-warm-50/50 pb-20">
      <SEO
        title="Location & Directions"
        description={`Find LEMON LEAF Restaurant at Budigere Cross, Cheemasandra, Bangalore. Get driving directions, view Google Map, and check operating hours.`}
      />

      {/* Header */}
      <div className="bg-white border-b border-warm-200 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-leaf-700 font-bold text-xs uppercase tracking-wider block mb-1">
            Visit Our Restaurant
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Location & Driving Directions
          </h1>
          <p className="text-sm text-zinc-600 mt-2 max-w-xl mx-auto">
            Conveniently situated on Budigere Cross Road in Cheemasandra, East Bangalore.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Card (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-leaf-100 text-leaf-800 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-zinc-950">
                    {RESTAURANT_DATA.name}
                  </h2>
                  <p className="text-xs text-leaf-700 font-bold uppercase tracking-wider mt-0.5">
                    {RESTAURANT_DATA.subname}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase text-zinc-400 tracking-wider block mb-1">
                    Complete Address
                  </span>
                  <p className="text-zinc-800 leading-relaxed font-medium">
                    {RESTAURANT_DATA.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-warm-100">
                  <span className="text-xs font-bold uppercase text-zinc-400 tracking-wider block mb-1">
                    Landmark & Navigation
                  </span>
                  <p className="text-zinc-700">
                    {RESTAURANT_DATA.landmark}
                  </p>
                </div>

                <div className="pt-3 border-t border-warm-100 flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-lemon-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase text-zinc-400 tracking-wider block">
                      Parking Details
                    </span>
                    <p className="text-zinc-600 text-xs mt-0.5">
                      {RESTAURANT_DATA.parkingInfo}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-warm-100 flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-leaf-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase text-zinc-400 tracking-wider block">
                      Phone Number
                    </span>
                    <a href={`tel:${RESTAURANT_DATA.phone}`} className="text-leaf-800 hover:underline font-bold text-sm">
                      {RESTAURANT_DATA.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-warm-200 flex flex-col sm:flex-row gap-3">
                <a
                  href={RESTAURANT_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>

                <a
                  href={RESTAURANT_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-zinc-200"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-zinc-500" />
                </a>
              </div>
            </div>

            {/* Quick Hours Summary Card */}
            <div className="bg-white rounded-3xl p-6 border border-warm-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-zinc-900">Open 7 Days a Week</h3>
                <p className="text-xs text-zinc-600 mt-0.5">11:30 AM – 11:00 PM Daily</p>
                <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">Dine-in, Takeaway & Delivery</p>
              </div>
            </div>

          </div>

          {/* Interactive Google Maps Embed (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-warm-200 shadow-sm">
              <div className="w-full h-[450px] sm:h-[550px] rounded-2xl overflow-hidden bg-warm-100 relative">
                <iframe
                  title="Lemon Leaf Google Map Location"
                  src={RESTAURANT_DATA.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl"
                />
              </div>

              <div className="p-4 flex items-center justify-between text-xs text-zinc-500">
                <span>📍 Sy. No. 138, Budigere Cross, Cheemasandra, Bangalore 560049</span>
                <a
                  href={RESTAURANT_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-leaf-700 hover:underline font-bold"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

