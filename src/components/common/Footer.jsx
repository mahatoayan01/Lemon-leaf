import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, ShieldAlert, Lock } from 'lucide-react';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Restaurant Overview */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-leaf-600 to-leaf-800 flex items-center justify-center text-xl shadow-md">
                🍋
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">LEMON LEAF</span>
                <p className="text-[11px] text-lemon-400 font-medium uppercase tracking-wider">Veg & Non Veg Restaurant</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Your neighborhood multi-cuisine haven serving hearty North Indian dishes, tandoori starters, aromatic biryanis, and Chinese delicacies.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-lemon-400">
              <span className="font-bold">⭐ {RESTAURANT_DATA.rating} / 5</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400">1,850+ Google/Justdial reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-lemon-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/menu" className="text-zinc-400 hover:text-lemon-400 transition-colors">Our Full Menu</Link>
              </li>
              <li>
                <Link to="/location" className="text-zinc-400 hover:text-lemon-400 transition-colors">Find Location & Map</Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-lemon-400 transition-colors">Contact & Enquiries</Link>
              </li>
              <li>
                <Link to="/cart" className="text-zinc-400 hover:text-lemon-400 transition-colors">My Order / Checkout</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Service Timings</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-lemon-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-200">Monday – Sunday</p>
                  <p className="text-xs text-zinc-400">11:30 AM – 11:00 PM</p>
                </div>
              </div>
              <p className="text-xs text-zinc-400 pt-2 border-t border-zinc-900">
                Services: Dine-in, Takeaway Parcels & Outdoor Catering.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Visit & Connect</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lemon-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-zinc-300">
                  {RESTAURANT_DATA.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-lemon-400 shrink-0" />
                <a href={`tel:${RESTAURANT_DATA.phone}`} className="text-zinc-200 hover:text-lemon-400 font-semibold text-xs">
                  {RESTAURANT_DATA.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={RESTAURANT_DATA.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:text-emerald-300 text-xs font-semibold flex items-center gap-1"
                >
                  WhatsApp: {RESTAURANT_DATA.whatsappFormatted}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>

            {/* Social handles list */}
            <div className="mt-4 pt-3 border-t border-zinc-900 flex flex-col gap-1.5 text-xs">
              <span className="text-zinc-500 text-[11px] font-medium">Social Profiles:</span>
              <a 
                href={RESTAURANT_DATA.socialLinks.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-lemon-400 flex items-center justify-between"
              >
                <span>Instagram ({RESTAURANT_DATA.socialLinks.instagram.handle})</span>
                <span className="text-[10px] text-amber-500 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded">Placeholder</span>
              </a>
              <a 
                href={RESTAURANT_DATA.socialLinks.facebook.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-lemon-400 flex items-center justify-between"
              >
                <span>Facebook ({RESTAURANT_DATA.socialLinks.facebook.handle})</span>
                <span className="text-[10px] text-amber-500 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded">Placeholder</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-lemon-400" />
            <span>
              <strong>Demo Website:</strong> Created for presentation & demonstration purposes. All facts sourced from verified public listings.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} LEMON LEAF Restaurant.</span>
            <Link 
              to="/owner-login" 
              className="text-zinc-400 hover:text-lemon-400 flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
            >
              <Lock className="w-3 h-3" />
              Owner Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

