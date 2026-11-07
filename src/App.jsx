import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';
import { ProtectedRoute } from './components/common/ProtectedRoute';

// 7 Page Routes
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Location } from './pages/Location';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { OwnerLogin } from './pages/OwnerLogin';
import { OwnerDashboard } from './pages/OwnerDashboard';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/location" element={<Location />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/owner-login" element={<OwnerLogin />} />
                <Route
                  path="/owner-dashboard"
                  element={
                    <ProtectedRoute>
                      <OwnerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <FloatingActions />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

