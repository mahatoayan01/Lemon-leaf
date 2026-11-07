import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] bg-warm-50/50 flex items-center justify-center px-4 py-20 text-center">
      <SEO title="Page Not Found (404)" />
      
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-sm">
        <div className="text-6xl font-extrabold text-lemon-500 mb-2 font-mono">
          404
        </div>
        <h1 className="text-2xl font-extrabold text-zinc-950 mb-2">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 mb-8 leading-relaxed">
          The page or dish you're searching for might have been moved, renamed, or is currently off our menu.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-bold text-sm shadow-xs transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-warm-100 hover:bg-warm-200 text-zinc-800 font-bold text-sm transition-colors border border-warm-300"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

