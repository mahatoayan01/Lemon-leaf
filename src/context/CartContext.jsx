import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_SAMPLE_ORDERS } from '../data/sampleOrders';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // Cart items: [{ id, name, price, isVeg, image, quantity }]
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('lemon_leaf_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn("Failed to read cart from localStorage:", e);
      return [];
    }
  });

  // Demo Orders for Dashboard
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('lemon_leaf_orders');
      return saved ? JSON.parse(saved) : INITIAL_SAMPLE_ORDERS;
    } catch (e) {
      console.warn("Failed to read orders from localStorage:", e);
      return INITIAL_SAMPLE_ORDERS;
    }
  });

  // Save Cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('lemon_leaf_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn("Failed to persist cart to localStorage:", e);
    }
  }, [cart]);

  // Save Orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('lemon_leaf_orders', JSON.stringify(orders));
    } catch (e) {
      console.warn("Failed to persist orders to localStorage:", e);
    }
  }, [orders]);

  const addToCart = (dish, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { ...dish, quantity: qty }];
    });
  };

  const removeFromCart = (dishId) => {
    setCart((prev) => prev.filter((item) => item.id !== dishId));
  };

  const updateQuantity = (dishId, qty) => {
    if (qty <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === dishId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Add demo order from checkout
  const addNewOrder = (orderDetails) => {
    const newId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newOrder = {
      id: newId,
      customer: orderDetails.customerName || "Customer",
      phone: orderDetails.customerPhone || "+91 99999 00000",
      items: cart.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
      orderType: orderDetails.orderType || "Delivery",
      address: orderDetails.address || "Counter Pick-up",
      amount: orderDetails.totalAmount || getSubtotal(),
      paymentMethod: orderDetails.paymentMethod || "UPI",
      paymentStatus: orderDetails.paymentMethod === "Cash on Delivery" ? "Pending" : "Paid",
      status: "New",
      date: formattedDate,
      day: "Today"
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  // Owner dashboard status update
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((ord) =>
        ord.id === orderId ? { ...ord, status: newStatus } : ord
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemCount,
        getSubtotal,
        addNewOrder,
        updateOrderStatus
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

