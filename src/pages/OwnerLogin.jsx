import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Lock, Mail, Key, ShieldAlert, ArrowRight, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useAuth, DEMO_CREDENTIALS } from '../context/AuthContext';

export const OwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If already logged in, redirect to dashboard
  if (isAuthenticated) {
    navigate('/owner-dashboard', { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    const res = login(email, password);
    if (res.success) {
      const origin = location.state?.from?.pathname || '/owner-dashboard';
      navigate(origin, { replace: true });
    } else {
      setErrorMessage(res.message);
    }
  };

  const handleFillDemoCredentials = () => {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-warm-50/60 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <SEO
        title="Owner Login"
        description="Demo administrative login for Lemon Leaf Restaurant owner dashboard."
      />

      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-warm-200 shadow-xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-leaf-700 hover:underline mb-6">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Website
        </Link>

        {/* Lock Icon */}
        <div className="w-14 h-14 rounded-2xl bg-leaf-100 text-leaf-800 flex items-center justify-center mx-auto mb-4 shadow-xs">
          <Lock className="w-7 h-7" />
        </div>

        <h1 className="text-2xl font-extrabold text-zinc-950 text-center">
          Restaurant Owner Portal
        </h1>
        <p className="text-xs text-zinc-500 text-center mt-1 mb-6">
          Sign in to manage live orders, view payments, and check analytics.
        </p>

        {/* Demo Credentials Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              Demo Credentials
            </span>
            <button
              type="button"
              onClick={handleFillDemoCredentials}
              className="text-[11px] font-bold text-leaf-800 hover:text-leaf-950 underline cursor-pointer"
            >
              Auto-fill Credentials
            </button>
          </div>
          <div className="text-xs font-mono space-y-1 text-zinc-700 bg-white/70 p-2.5 rounded-lg border border-amber-100">
            <div>Email: <strong className="text-zinc-950">{DEMO_CREDENTIALS.email}</strong></div>
            <div>Password: <strong className="text-zinc-950">{DEMO_CREDENTIALS.password}</strong></div>
          </div>
          <p className="text-[10px] text-amber-800 mt-2 leading-tight">
            * Front-end only demo authentication stored in browser localStorage.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="owner@demo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-warm-50 border border-warm-300 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                <Key className="w-4 h-4" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-warm-50 border border-warm-300 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm transition-all mt-6"
          >
            <span>Sign In to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

