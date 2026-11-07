import React, { useState } from 'react';
import { Calendar, Users, Clock, Phone, User, MessageSquare, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const BookingFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    specialRequest: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.date) newErrors.date = "Please select a booking date.";
    if (!formData.time) newErrors.time = "Please choose a booking time.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    if (!submittedData) return '';
    const text = `Hello Lemon Leaf Restaurant! I would like to reserve a table.%0A%0A*Name:* ${encodeURIComponent(submittedData.name)}%0A*Phone:* ${encodeURIComponent(submittedData.phone)}%0A*Date:* ${encodeURIComponent(submittedData.date)}%0A*Time:* ${encodeURIComponent(submittedData.time)}%0A*Guests:* ${encodeURIComponent(submittedData.guests)} people${submittedData.specialRequest ? `%0A*Special Request:* ${encodeURIComponent(submittedData.specialRequest)}` : ''}%0A%0APlease confirm my booking. Thank you!`;
    return `https://wa.me/${RESTAURANT_DATA.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="book-table" className="py-16 sm:py-20 bg-white border-b border-warm-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-leaf-100 text-leaf-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" />
              Reservations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Book a Table in Advance
            </h2>
            <p className="text-sm text-zinc-600 mt-2">
              Reserve your seating for lunch or dinner. Instant demo confirmation with instant WhatsApp notification option.
            </p>
          </div>

          {/* Form / Success State */}
          <div className="bg-warm-50 rounded-3xl p-6 sm:p-10 border border-warm-200 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-900 mb-2">
                  Table Reservation Received!
                </h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto mb-6">
                  Thank you, <strong>{submittedData.name}</strong>. We've recorded your table request for <strong>{submittedData.guests} guests</strong> on <strong>{submittedData.date}</strong> at <strong>{submittedData.time}</strong>.
                </p>

                {/* Demo Notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 mb-8 max-w-md mx-auto text-left flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Demo Notice:</strong> This is a front-end simulation. To notify the restaurant directly, click below to send your pre-filled request to their WhatsApp!
                  </span>
                </div>

                {/* WhatsApp Action */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={getWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    Send to WhatsApp ({RESTAURANT_DATA.whatsappFormatted})
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        date: '',
                        time: '19:30',
                        guests: '2',
                        specialRequest: ''
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-warm-100 text-zinc-800 border border-warm-300 font-bold text-sm transition-colors"
                  >
                    Make Another Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        placeholder="e.g. 98450 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                      Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                          errors.date ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                        }`}
                      />
                    </div>
                    {errors.date && <p className="text-xs text-red-600 mt-1">{errors.date}</p>}
                  </div>

                  {/* Time & Guests */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                        Time *
                      </label>
                      <div className="relative">
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-3 py-3 rounded-xl bg-white border border-warm-300 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                        Guests *
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-white border border-warm-300 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Special Requests (Optional)
                  </label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      placeholder="e.g. Window seating, high chair needed, celebrating birthday..."
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-white border border-warm-300 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-extrabold text-base shadow-sm hover:shadow-md transition-all active:scale-99"
                >
                  Confirm Table Reservation
                </button>

                <p className="text-[11px] text-zinc-500 text-center">
                  * Table reservations are held for 15 minutes past the reserved time.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

