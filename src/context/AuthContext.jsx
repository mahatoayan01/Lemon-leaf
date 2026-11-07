/**
 * Front-end Only Demo Authentication Context.
 * NOTE: For demonstration purposes only. Does not provide real server-side security.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

// Single source of truth for demo credentials
export const DEMO_CREDENTIALS = {
  email: "owner@demo.com",
  password: "demo1234",
  ownerName: "Lemon Leaf Management"
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const stored = localStorage.getItem('lemon_leaf_owner_auth');
      return stored === 'true';
    } catch (e) {
      console.warn("Failed to read auth from localStorage:", e);
      return false;
    }
  });

  const [user, setUser] = useState(() => {
    if (isAuthenticated) {
      return { email: DEMO_CREDENTIALS.email, name: DEMO_CREDENTIALS.ownerName };
    }
    return null;
  });

  const login = (email, password) => {
    if (
      email.trim().toLowerCase() === DEMO_CREDENTIALS.email.toLowerCase() &&
      password.trim() === DEMO_CREDENTIALS.password
    ) {
      try {
        localStorage.setItem('lemon_leaf_owner_auth', 'true');
      } catch (e) {
        console.warn("Failed to set auth in localStorage:", e);
      }
      setIsAuthenticated(true);
      setUser({ email: DEMO_CREDENTIALS.email, name: DEMO_CREDENTIALS.ownerName });
      return { success: true };
    }
    return { success: false, message: "Invalid email or password. Use owner@demo.com and demo1234." };
  };

  const logout = () => {
    try {
      localStorage.removeItem('lemon_leaf_owner_auth');
    } catch (e) {
      console.warn("Failed to remove auth from localStorage:", e);
    }
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, credentials: DEMO_CREDENTIALS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

