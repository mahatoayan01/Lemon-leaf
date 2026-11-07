import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-warm-200 shadow-xs transition-colors">
      {/* Top micro-bar for quick phone & timings info */}
      <div className="bg-leaf-900 text-leaf-100 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-lemon-400" />
              Budigere Cross, Cheemasandra, Bangalore
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-lemon-400" />
              Daily: 11:30 AM – 11:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${RESTAURANT_DATA.phone}`} 
              className="flex items-center gap-1.5 text-lemon-300 hover:text-lemon-200 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call: {RESTAURANT_DATA.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link 
            to="/" 
            onClick={closeMenu}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-leaf-600 rounded-lg p-1"
          >
            {/* Visual Icon */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-leaf-700 to-leaf-900 flex items-center justify-center shadow-md shadow-leaf-900/10 group-hover:scale-105 transition-transform">
              <span className="text-2xl" role="img" aria-label="Lemon and Leaf">🍋</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-zinc-900 group-hover:text-leaf-800 transition-colors">
                LEMON <span className="text-leaf-700">LEAF</span>
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-zinc-500">
                Veg & Non Veg Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors hover:text-leaf-700 relative py-2 ${
                    isActive
                      ? 'text-leaf-700 font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-leaf-700 after:rounded-full'
                      : 'text-zinc-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/menu"
              className="px-4 py-2 rounded-xl bg-lemon-400 hover:bg-lemon-500 text-zinc-900 font-bold text-sm shadow-xs transition-all hover:shadow-sm"
            >
              Order Online
            </Link>

            <Link
              to="/cart"
              className="relative p-2.5 rounded-xl border border-warm-200 hover:border-leaf-600 hover:bg-leaf-50 text-zinc-800 transition-colors"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-zinc-800" />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-leaf-700 text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              to="/cart"
              onClick={closeMenu}
              className="relative p-2 rounded-lg text-zinc-800 border border-warm-200"
              aria-label={`Cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-leaf-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-800 hover:bg-warm-100 focus:outline-none focus:ring-2 focus:ring-leaf-600"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-warm-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-leaf-50 text-leaf-800 font-bold'
                      : 'text-zinc-700 hover:bg-warm-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-warm-200 flex flex-col gap-2">
            <Link
              to="/menu"
              onClick={closeMenu}
              className="w-full text-center py-3 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-bold text-sm shadow-sm"
            >
              Explore Menu & Order
            </Link>
            
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-leaf-700 text-leaf-800 font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              Call {RESTAURANT_DATA.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

