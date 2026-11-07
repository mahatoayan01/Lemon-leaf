import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, DollarSign, Clock, CheckCircle2, TrendingUp, Search, 
  Filter, LogOut, RefreshCw, AlertCircle, CreditCard, ArrowUpRight, 
  ChevronRight, Calendar, User, Phone, MapPin
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export const OwnerDashboard = () => {
  const { user, logout } = useAuth();
  const { orders, updateOrderStatus } = useCart();
  const navigate = useNavigate();

  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [timeFilter, setTimeFilter] = useState('All'); // All | Today | PastWeek
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'payments' | 'analytics'

  const handleLogout = () => {
    logout();
    navigate('/owner-login');
  };

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      // Status filter
      const matchStatus = statusFilter === 'All' || order.status === statusFilter;

      // Time filter
      let matchTime = true;
      if (timeFilter === 'Today') {
        matchTime = order.day === 'Today';
      } else if (timeFilter === 'PastWeek') {
        matchTime = ['Today', 'Yesterday', 'Nov 04', 'Nov 03', 'Nov 02', 'Nov 01'].includes(order.day);
      }

      // Search filter (id, customer, phone)
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !searchQuery ||
        order.id.toLowerCase().includes(q) ||
        order.customer.toLowerCase().includes(q) ||
        order.phone.toLowerCase().includes(q);

      return matchStatus && matchTime && matchSearch;
    });
  }, [orders, statusFilter, timeFilter, searchQuery]);

  // Derived KPIs
  const totalOrdersCount = orders.length;
  const todayOrders = orders.filter(o => o.day === 'Today');
  const todayOrdersCount = todayOrders.length;
  const totalRevenue = orders
    .filter(o => o.paymentStatus === 'Paid')
    .reduce((sum, o) => sum + o.amount, 0);
  const pendingOrdersCount = orders.filter(o => ['New', 'Preparing', 'Out for delivery'].includes(o.status)).length;

  // Chart Data preparation (Last 6 days data from orders)
  const chartDays = [
    { label: 'Nov 01', orders: 3, revenue: 2180 },
    { label: 'Nov 02', orders: 4, revenue: 2950 },
    { label: 'Nov 03', orders: 3, revenue: 2360 },
    { label: 'Nov 04', orders: 5, revenue: 3820 },
    { label: 'Yesterday', orders: 6, revenue: 4790 },
    { label: 'Today', orders: todayOrdersCount || 5, revenue: todayOrders.reduce((acc, cur) => acc + cur.amount, 0) || 4100 }
  ];

  const maxRevenue = Math.max(...chartDays.map(d => d.revenue));
  const maxOrders = Math.max(...chartDays.map(d => d.orders));

  return (
    <div className="min-h-screen bg-warm-50/70 pb-20">
      <SEO
        title="Owner Dashboard"
        description="Restaurant management dashboard for Lemon Leaf: review orders, track payments, update status."
      />

      {/* Top Banner: Visible Demo Notice */}
      <div className="bg-amber-400 text-zinc-950 px-4 py-2 text-xs font-bold text-center flex items-center justify-center gap-2 shadow-xs">
        <AlertCircle className="w-4 h-4 text-zinc-900 shrink-0" />
        <span>Demo data – this dashboard shows sample data and live orders created during your session for presentation.</span>
      </div>

      {/* Dashboard Header Bar */}
      <div className="bg-white border-b border-warm-200 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-leaf-800 text-white flex items-center justify-center font-extrabold text-xl shadow-xs">
              🍋
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">
                  LEMON LEAF Dashboard
                </h1>
                <span className="px-2 py-0.5 rounded-md bg-leaf-100 text-leaf-800 text-[10px] font-extrabold uppercase tracking-wide">
                  Demo Admin
                </span>
              </div>
              <p className="text-xs text-zinc-500">
                Logged in as <strong className="text-zinc-800">{user?.email || "owner@demo.com"}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-warm-100 hover:bg-red-50 text-zinc-700 hover:text-red-700 border border-warm-300 text-xs font-bold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Total Orders */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-warm-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Total Orders</span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
              {totalOrdersCount}
            </div>
            <p className="text-[11px] text-zinc-400 mt-1">Sample + session orders</p>
          </div>

          {/* Today's Orders */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-warm-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Today's Orders</span>
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
              {todayOrdersCount}
            </div>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">Active kitchen load</p>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-warm-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Total Revenue</span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-leaf-800">
              ₹{totalRevenue.toLocaleString('en-IN')}
            </div>
            <p className="text-[11px] text-zinc-400 mt-1">Paid transactions</p>
          </div>

          {/* Pending Orders */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-warm-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">In Progress</span>
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <RefreshCw className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">
              {pendingOrdersCount}
            </div>
            <p className="text-[11px] text-zinc-400 mt-1">New / Preparing / Transit</p>
          </div>
        </div>

        {/* Pure CSS/SVG Trend Charts (No Chart Library) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Revenue Trend Chart (Pure SVG) */}
          <div className="bg-white rounded-3xl p-6 border border-warm-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-zinc-900">
                  Revenue Trend (Last 6 Days)
                </h3>
                <p className="text-xs text-zinc-500">Daily collections in INR</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                +18.4% this week
              </span>
            </div>

            {/* SVG Line / Bar visualization */}
            <div className="h-44 w-full flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-warm-200">
              {chartDays.map((d, idx) => {
                const heightPercent = Math.round((d.revenue / maxRevenue) * 100);
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      ₹{d.revenue}
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[36px] bg-gradient-to-t from-leaf-800 to-leaf-600 rounded-t-lg group-hover:from-lemon-500 group-hover:to-lemon-400 transition-all duration-200"
                    />
                    <span className="text-[10px] font-medium text-zinc-600 mt-2 truncate w-full text-center">
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center text-[11px] text-zinc-400 pt-3">
              <span>Low: ₹2,180</span>
              <span>High: ₹{maxRevenue.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Orders per Day Trend (Pure SVG) */}
          <div className="bg-white rounded-3xl p-6 border border-warm-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-zinc-900">
                  Orders Volume (Daily)
                </h3>
                <p className="text-xs text-zinc-500">Completed & active kitchen tickets</p>
              </div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                Peak: Dinner Rush
              </span>
            </div>

            {/* SVG Line / Bar visualization */}
            <div className="h-44 w-full flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-warm-200">
              {chartDays.map((d, idx) => {
                const heightPercent = Math.round((d.orders / (maxOrders + 2)) * 100);
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {d.orders}
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[36px] bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-lg group-hover:from-leaf-700 group-hover:to-leaf-600 transition-all duration-200"
                    />
                    <span className="text-[10px] font-medium text-zinc-600 mt-2 truncate w-full text-center">
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center text-[11px] text-zinc-400 pt-3">
              <span>Avg: 4 orders/day</span>
              <span>Max: {maxOrders} orders</span>
            </div>
          </div>

        </div>

        {/* Dashboard Tabs & Filter Controls */}
        <div className="bg-white rounded-3xl border border-warm-200 shadow-sm overflow-hidden mb-12">
          
          {/* Tab Navigation Bar */}
          <div className="border-b border-warm-200 px-6 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab('orders')}
                className={`pb-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'orders'
                    ? 'border-leaf-700 text-leaf-800'
                    : 'border-transparent text-zinc-500 hover:text-zinc-800'
                }`}
              >
                Orders Management ({filteredOrders.length})
              </button>
              <button
                onClick={() => setActiveTab('payments')}
                className={`pb-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'payments'
                    ? 'border-leaf-700 text-leaf-800'
                    : 'border-transparent text-zinc-500 hover:text-zinc-800'
                }`}
              >
                Payment History ({orders.length})
              </button>
            </div>

            {/* Quick Status Pill */}
            <span className="text-xs text-zinc-400 pb-3 sm:pb-0">
              Live updates saved to browser <code>localStorage</code>
            </span>
          </div>

          {/* Filtering Sub-Bar (For Orders Tab) */}
          {activeTab === 'orders' && (
            <div className="p-4 sm:p-6 bg-warm-50/50 border-b border-warm-200 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search */}
              <div className="relative w-full md:w-72">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search by ID, name, or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-warm-300 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                />
              </div>

              {/* Status & Time Dropdowns */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Status:</span>
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-white border border-warm-300 text-xs font-semibold text-zinc-800 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Preparing">Preparing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 ml-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Date:</span>
                </div>
                <select
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-white border border-warm-300 text-xs font-semibold text-zinc-800 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                >
                  <option value="All">All Dates</option>
                  <option value="Today">Today Only</option>
                  <option value="PastWeek">Past 7 Days</option>
                </select>
              </div>

            </div>
          )}

          {/* TAB 1: ORDERS TABLE */}
          {activeTab === 'orders' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-warm-100/60 border-b border-warm-200 text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                    <th className="py-3.5 px-4 sm:px-6">Order ID & Date</th>
                    <th className="py-3.5 px-4">Customer & Contact</th>
                    <th className="py-3.5 px-4">Items Ordered</th>
                    <th className="py-3.5 px-4">Type</th>
                    <th className="py-3.5 px-4">Total</th>
                    <th className="py-3.5 px-4">Payment</th>
                    <th className="py-3.5 px-4 sm:px-6">Order Status (Editable)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100 text-xs">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => {
                      // Status colors
                      const statusColor = 
                        order.status === 'New' ? 'bg-blue-100 text-blue-900 border-blue-300' :
                        order.status === 'Preparing' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                        order.status === 'Out for delivery' ? 'bg-purple-100 text-purple-900 border-purple-300' :
                        order.status === 'Completed' ? 'bg-emerald-100 text-emerald-900 border-emerald-300' :
                        'bg-red-100 text-red-900 border-red-300';

                      return (
                        <tr key={order.id} className="hover:bg-warm-50/60 transition-colors">
                          {/* Order ID */}
                          <td className="py-4 px-4 sm:px-6 font-mono font-bold text-zinc-900">
                            <div>{order.id}</div>
                            <span className="text-[10px] text-zinc-400 font-sans font-normal">{order.date}</span>
                          </td>

                          {/* Customer */}
                          <td className="py-4 px-4 text-zinc-800">
                            <div className="font-bold">{order.customer}</div>
                            <div className="text-[11px] text-zinc-500 font-mono">{order.phone}</div>
                          </td>

                          {/* Items */}
                          <td className="py-4 px-4 text-zinc-700 max-w-xs">
                            <ul className="space-y-0.5">
                              {order.items.map((it, idx) => (
                                <li key={idx} className="truncate">
                                  <span className="font-semibold">{it.quantity}x</span> {it.name}
                                </li>
                              ))}
                            </ul>
                          </td>

                          {/* Order Type */}
                          <td className="py-4 px-4">
                            <span className="px-2 py-0.5 rounded-md bg-warm-100 text-zinc-800 font-semibold text-[11px]">
                              {order.orderType}
                            </span>
                            <div className="text-[10px] text-zinc-400 truncate max-w-[120px] mt-0.5">
                              {order.address}
                            </div>
                          </td>

                          {/* Amount */}
                          <td className="py-4 px-4 font-extrabold text-sm text-zinc-950">
                            ₹{order.amount}
                          </td>

                          {/* Payment */}
                          <td className="py-4 px-4">
                            <span className="font-medium text-zinc-800 block">{order.paymentMethod}</span>
                            <span className={`text-[10px] font-bold ${order.paymentStatus === 'Paid' ? 'text-emerald-700' : order.paymentStatus === 'Pending' ? 'text-amber-700' : 'text-red-700'}`}>
                              ● {order.paymentStatus}
                            </span>
                          </td>

                          {/* Live Status Dropdown */}
                          <td className="py-4 px-4 sm:px-6">
                            <select
                              value={order.status}
                              onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold border focus:outline-none focus:ring-2 focus:ring-leaf-400 cursor-pointer ${statusColor}`}
                            >
                              <option value="New">New</option>
                              <option value="Preparing">Preparing</option>
                              <option value="Out for delivery">Out for delivery</option>
                              <option value="Completed">Completed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-zinc-500">
                        No orders match your filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 2: PAYMENT HISTORY TABLE */}
          {activeTab === 'payments' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-warm-100/60 border-b border-warm-200 text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                    <th className="py-3.5 px-4 sm:px-6">Transaction ID</th>
                    <th className="py-3.5 px-4">Date & Time</th>
                    <th className="py-3.5 px-4">Related Order</th>
                    <th className="py-3.5 px-4">Customer</th>
                    <th className="py-3.5 px-4">Payment Method</th>
                    <th className="py-3.5 px-4">Amount</th>
                    <th className="py-3.5 px-4 sm:px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100 text-xs">
                  {orders.map((ord, i) => (
                    <tr key={ord.id} className="hover:bg-warm-50/60 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-mono font-semibold text-zinc-700">
                        TXN-88{900 + i}
                      </td>
                      <td className="py-3.5 px-4 text-zinc-500 font-mono">
                        {ord.date}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-zinc-900 font-mono">
                        {ord.id}
                      </td>
                      <td className="py-3.5 px-4 text-zinc-800">
                        {ord.customer}
                      </td>
                      <td className="py-3.5 px-4 text-zinc-700 font-medium">
                        {ord.paymentMethod}
                      </td>
                      <td className="py-3.5 px-4 font-extrabold text-zinc-950">
                        ₹{ord.amount}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          ord.paymentStatus === 'Paid'
                            ? 'bg-emerald-100 text-emerald-900'
                            : ord.paymentStatus === 'Pending'
                            ? 'bg-amber-100 text-amber-900'
                            : 'bg-red-100 text-red-900'
                        }`}>
                          {ord.paymentStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

