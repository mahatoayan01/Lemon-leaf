import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ShieldCheck, CheckCircle, CreditCard, Smartphone, Banknote, AlertTriangle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getSubtotal, clearCart, addNewOrder } = useCart();
  const navigate = useNavigate();

  // Order Details Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'Delivery', // Delivery | Takeaway | Dine-in
    address: '',
    tableNumber: 'Table 1',
    notes: '',
    paymentMethod: 'UPI', // UPI | Card | Cash on Delivery
    // Fake payment inputs
    upiId: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const [errors, setErrors] = useState({});
  const [placedOrder, setPlacedOrder] = useState(null);

  const subtotal = getSubtotal();
  const demoTax = Math.round(subtotal * 0.05); // 5% demo GST
  const demoDeliveryFee = formData.orderType === 'Delivery' && subtotal > 0 ? 40 : 0;
  const total = subtotal + demoTax + demoDeliveryFee;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.phone.trim()) {
      errs.phone = "Phone is required.";
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = "Valid 10-digit number required.";
    }

    if (formData.orderType === 'Delivery' && !formData.address.trim()) {
      errs.address = "Delivery address is required.";
    }

    if (formData.paymentMethod === 'UPI' && !formData.upiId.trim()) {
      errs.upiId = "Enter a demo UPI ID (e.g. name@okhdfcbank).";
    }

    if (formData.paymentMethod === 'Card') {
      if (!formData.cardNumber.trim()) errs.cardNumber = "Enter a demo 16-digit card number.";
      if (!formData.cardExpiry.trim()) errs.cardExpiry = "MM/YY";
      if (!formData.cardCvv.trim()) errs.cardCvv = "CVV";
    }

    return errs;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    // Save order into Context (which persists into localStorage 'lemon_leaf_orders')
    const finalAddress = 
      formData.orderType === 'Delivery' ? formData.address :
      formData.orderType === 'Dine-in' ? `${formData.tableNumber}` : 'Counter Pick-up';

    const newOrder = addNewOrder({
      customerName: formData.name,
      customerPhone: formData.phone,
      orderType: formData.orderType,
      address: finalAddress,
      totalAmount: total,
      paymentMethod: formData.paymentMethod,
    });

    setPlacedOrder(newOrder);
  };

  // If order placed, show success screen
  if (placedOrder) {
    return (
      <div className="min-h-screen bg-warm-50/50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <SEO title="Order Confirmed" />
        <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 border border-warm-200 shadow-xl text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
            <CheckCircle className="w-10 h-10" />
          </div>

          <span className="px-3 py-1 rounded-full bg-leaf-100 text-leaf-800 text-xs font-bold uppercase tracking-wider">
            Order Confirmed
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-3 mb-1">
            Thank you, {placedOrder.customer}!
          </h1>

          <p className="text-xs text-zinc-500 mb-6">
            Your order has been recorded in the system and sent to the kitchen.
          </p>

          {/* Order Details Receipt Box */}
          <div className="bg-warm-50 rounded-2xl p-5 border border-warm-200 text-left text-xs space-y-2.5 mb-6">
            <div className="flex justify-between items-center pb-2 border-b border-warm-200">
              <span className="text-zinc-500">Order ID:</span>
              <span className="font-mono font-bold text-zinc-900 text-sm">{placedOrder.id}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500">Order Type:</span>
              <span className="font-bold text-zinc-800">{placedOrder.orderType} ({placedOrder.address})</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500">Payment:</span>
              <span className="font-semibold text-emerald-700">{placedOrder.paymentMethod} ({placedOrder.paymentStatus})</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-warm-200 text-sm">
              <span className="font-bold text-zinc-800">Total Paid:</span>
              <span className="font-extrabold text-leaf-800">₹{placedOrder.amount}</span>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 text-left mb-6 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Demo Notice:</strong> This order has been stored in your browser's <code>localStorage</code>. You can log into the <strong>Owner Dashboard</strong> to view this live order in the orders table!
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/menu"
              className="px-6 py-3 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-bold text-xs sm:text-sm"
            >
              Order More Food
            </Link>
            <Link
              to="/owner-dashboard"
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm"
            >
              Check Owner Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Empty Cart State
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-warm-50/50 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <SEO title="Cart is Empty" />
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-sm text-center">
          <div className="w-20 h-20 rounded-full bg-lemon-100 text-lemon-700 flex items-center justify-center mx-auto mb-5 text-3xl">
            🛒
          </div>
          <h1 className="text-2xl font-extrabold text-zinc-900 mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mb-8 leading-relaxed">
            Looks like you haven't added any dishes yet. Explore our delicious multi-cuisine menu and treat your tastebuds!
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-bold text-sm shadow-sm transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            Browse Full Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50/50 pb-20">
      <SEO
        title="Checkout & Order Summary"
        description="Review your food order, select delivery or pickup options, and complete simulated checkout at LEMON LEAF Restaurant."
      />

      {/* Header */}
      <div className="bg-white border-b border-warm-200 pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <Link to="/menu" className="inline-flex items-center gap-1.5 text-xs font-bold text-leaf-700 hover:underline mb-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Continue Ordering
            </Link>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
              Cart & Checkout
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 p-2 rounded-lg hover:bg-red-50"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear Cart
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Cart Items List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-warm-200 shadow-xs">
              <h2 className="text-lg font-extrabold text-zinc-900 mb-4 pb-3 border-b border-warm-200">
                Order Items ({cart.length})
              </h2>

              <div className="divide-y divide-warm-100">
                {cart.map((item) => (
                  <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-warm-100 shrink-0">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          label={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          {item.isVeg ? (
                            <span className="w-3 h-3 border-2 border-emerald-600 flex items-center justify-center p-0.5 rounded-xs shrink-0" title="Veg">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 block" />
                            </span>
                          ) : (
                            <span className="w-3 h-3 border-2 border-red-600 flex items-center justify-center p-0.5 rounded-xs shrink-0" title="Non-Veg">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600 block" />
                            </span>
                          )}
                          <h3 className="font-bold text-sm text-zinc-900 truncate">{item.name}</h3>
                        </div>
                        <p className="text-xs text-zinc-500 mt-0.5">₹{item.price} each</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      {/* Quantity Control */}
                      <div className="flex items-center bg-warm-100 rounded-xl px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-lg bg-white text-zinc-700 flex items-center justify-center shadow-2xs hover:bg-warm-200"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-xs px-2.5 text-zinc-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-lg bg-white text-zinc-700 flex items-center justify-center shadow-2xs hover:bg-warm-200"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-extrabold text-sm text-zinc-900 w-16 text-right">
                        ₹{item.price * item.quantity}
                      </span>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-400 hover:text-red-600 p-1 rounded-lg"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bill Summary */}
            <div className="bg-white rounded-3xl p-6 border border-warm-200 shadow-xs">
              <h3 className="text-base font-extrabold text-zinc-900 mb-4 pb-2 border-b border-warm-200">
                Payment Breakdown
              </h3>
              <div className="space-y-2 text-xs text-zinc-600">
                <div className="flex justify-between">
                  <span>Items Subtotal</span>
                  <span className="font-semibold text-zinc-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    GST & Taxes (5% demo)
                    <span className="text-[10px] text-zinc-400 font-mono">(Demo)</span>
                  </span>
                  <span className="font-semibold text-zinc-900">₹{demoTax}</span>
                </div>
                {formData.orderType === 'Delivery' && (
                  <div className="flex justify-between items-center">
                    <span>Delivery Packaging & Fee</span>
                    <span className="font-semibold text-zinc-900">₹{demoDeliveryFee}</span>
                  </div>
                )}
                <div className="flex justify-between pt-3 border-t border-warm-200 text-sm font-extrabold text-zinc-950">
                  <span>Grand Total</span>
                  <span className="text-leaf-800 text-base">₹{total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Checkout & Demo Payment Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-200 shadow-sm">
              <h2 className="text-lg font-extrabold text-zinc-950 mb-4 pb-2 border-b border-warm-200">
                Delivery & Customer Details
              </h2>

              <form onSubmit={handlePlaceOrder} noValidate className="space-y-4">
                {/* Order Type Toggle */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Order Type *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Delivery', 'Takeaway', 'Dine-in'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, orderType: type })}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                          formData.orderType === type
                            ? 'bg-leaf-800 text-white border-leaf-800 shadow-xs'
                            : 'bg-warm-50 text-zinc-700 border-warm-300 hover:bg-warm-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-warm-50 border text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-warm-50 border text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>

                {/* Address or Table based on order type */}
                {formData.orderType === 'Delivery' && (
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Apartment/Flat, Street, Landmark near Budigere..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className={`w-full p-3 rounded-xl bg-warm-50 border text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                        errors.address ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                      }`}
                    />
                    {errors.address && <p className="text-[11px] text-red-600 mt-0.5">{errors.address}</p>}
                  </div>
                )}

                {formData.orderType === 'Dine-in' && (
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Table Number
                    </label>
                    <select
                      value={formData.tableNumber}
                      onChange={(e) => setFormData({ ...formData, tableNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-warm-50 border border-warm-300 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                    >
                      {['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5', 'Table 6', 'Family Section'].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* DEMO PAYMENT SECTION */}
                <div className="pt-4 mt-4 border-t border-warm-200">
                  <div className="bg-amber-100 border border-amber-300 rounded-xl p-3 mb-4 text-xs text-amber-950 font-bold flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>DEMO PAYMENT – no real money is charged. Simulated for presentation.</span>
                  </div>

                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Select Demo Payment Method *
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { id: 'UPI', icon: Smartphone, label: 'UPI' },
                      { id: 'Card', icon: CreditCard, label: 'Card' },
                      { id: 'Cash on Delivery', icon: Banknote, label: 'COD' }
                    ].map((m) => {
                      const Icon = m.icon;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                          className={`py-2 px-2 rounded-xl text-xs font-bold border flex flex-col items-center justify-center gap-1 transition-all ${
                            formData.paymentMethod === m.id
                              ? 'bg-zinc-900 text-white border-zinc-900'
                              : 'bg-warm-50 text-zinc-700 border-warm-300'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{m.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Simulated Payment Sub-form */}
                  {formData.paymentMethod === 'UPI' && (
                    <div>
                      <input
                        type="text"
                        placeholder="demo-vpa@upi"
                        value={formData.upiId}
                        onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-warm-50 border text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                          errors.upiId ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                        }`}
                      />
                      {errors.upiId && <p className="text-[11px] text-red-600 mt-0.5">{errors.upiId}</p>}
                    </div>
                  )}

                  {formData.paymentMethod === 'Card' && (
                    <div className="space-y-2">
                      <input
                        type="text"
                        maxLength="19"
                        placeholder="4532 •••• •••• 8892"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-warm-50 border border-warm-300 text-xs sm:text-sm text-zinc-900"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          maxLength="5"
                          placeholder="MM/YY"
                          value={formData.cardExpiry}
                          onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-warm-50 border border-warm-300 text-xs sm:text-sm text-zinc-900"
                        />
                        <input
                          type="password"
                          maxLength="3"
                          placeholder="CVV"
                          value={formData.cardCvv}
                          onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-warm-50 border border-warm-300 text-xs sm:text-sm text-zinc-900"
                        />
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'Cash on Delivery' && (
                    <p className="text-xs text-zinc-500 bg-warm-100 p-2.5 rounded-xl">
                      💵 Pay with cash upon delivery or pickup counter.
                    </p>
                  )}
                </div>

                {/* Submit / Place Order Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-extrabold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-98 mt-4"
                >
                  Place Demo Order (₹{total})
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

