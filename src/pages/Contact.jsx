import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle, Calendar, AlertCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { RESTAURANT_DATA } from '../data/restaurant';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = "Please enter a valid 10-digit number.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
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
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-warm-50/50 pb-20">
      <SEO
        title="Contact & Enquiries"
        description={`Get in touch with LEMON LEAF Restaurant. Phone: ${RESTAURANT_DATA.phoneFormatted}, WhatsApp: ${RESTAURANT_DATA.whatsappFormatted}. Enquiries for catering, group dining & feedback.`}
      />

      {/* Header */}
      <div className="bg-white border-b border-warm-200 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-leaf-700 font-bold text-xs uppercase tracking-wider block mb-1">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Contact LEMON LEAF
          </h1>
          <p className="text-sm text-zinc-600 mt-2 max-w-xl mx-auto">
            Have a question about our menu, event catering, or want to share feedback? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-zinc-950">
                Direct Contact Information
              </h2>

              <ul className="space-y-4 text-sm">
                {/* Phone */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-leaf-100 text-leaf-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                      Phone Call
                    </span>
                    <a href={`tel:${RESTAURANT_DATA.phone}`} className="text-zinc-900 hover:text-leaf-700 font-bold text-base">
                      {RESTAURANT_DATA.phoneFormatted}
                    </a>
                    <p className="text-xs text-zinc-500 mt-0.5">Lines open 11:30 AM – 11:00 PM</p>
                  </div>
                </li>

                {/* WhatsApp */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                      WhatsApp Chat
                    </span>
                    <a
                      href={RESTAURANT_DATA.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-bold text-base"
                    >
                      {RESTAURANT_DATA.whatsappFormatted}
                    </a>
                    <p className="text-xs text-zinc-500 mt-0.5">Instant chat for reservations & takeaways</p>
                  </div>
                </li>

                {/* Email with placeholder notice */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                        Email Address
                      </span>
                      <span className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded font-mono font-bold">Placeholder</span>
                    </div>
                    <span className="text-zinc-900 font-medium text-sm">
                      {RESTAURANT_DATA.email}
                    </span>
                    <p className="text-xs text-zinc-500 mt-0.5 italic">({RESTAURANT_DATA.emailPlaceholderNotice})</p>
                  </div>
                </li>

                {/* Address */}
                <li className="flex items-start gap-3.5 pt-2 border-t border-warm-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                      Restaurant Address
                    </span>
                    <p className="text-zinc-800 text-xs sm:text-sm leading-relaxed mt-0.5">
                      {RESTAURANT_DATA.address}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Shortcut to Table Booking */}
            <div className="bg-gradient-to-br from-leaf-800 to-leaf-950 text-white rounded-3xl p-6 sm:p-7 shadow-sm">
              <h3 className="font-extrabold text-lg text-white mb-1">
                Want to Book a Table?
              </h3>
              <p className="text-xs text-leaf-200 mb-4 leading-relaxed">
                Save time with our dedicated table reservation form on the home page.
              </p>
              <Link
                to="/#book-table"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lemon-400 hover:bg-lemon-500 text-zinc-950 font-bold text-xs shadow-xs transition-transform active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                Go to Table Booking
              </Link>
            </div>

          </div>

          {/* Enquiry Form (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-warm-200 shadow-sm">
              <h2 className="text-2xl font-extrabold text-zinc-950 mb-2">
                Send an Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mb-6">
                Fill in the form below for catering requests, party bookings, or any questions.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-zinc-900 mb-2">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto mb-6">
                    Thank you, <strong>{formData.name}</strong>. Your demo message regarding "{formData.subject}" has been received. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subject: 'General Enquiry',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-leaf-700 text-white font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-warm-50 border text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 98450 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-warm-50 border text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-warm-50 border border-warm-300 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                        Subject / Topic *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-warm-50 border border-warm-300 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Outdoor Catering">Outdoor Catering Request</option>
                        <option value="Party Hall / Event">Party Hall / Group Event</option>
                        <option value="Feedback">Dine-in Feedback</option>
                        <option value="Order Issue">Takeaway / Delivery Issue</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know your requirements or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full p-4 rounded-xl bg-warm-50 border text-sm text-zinc-900 focus:outline-none focus:ring-2 ${
                        errors.message ? 'border-red-500 focus:ring-red-200' : 'border-warm-300 focus:ring-leaf-400'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Demo Alert */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Demo Form:</strong> Submitting this form displays a demonstration confirmation message and does not send emails or contact an external server.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-leaf-700 hover:bg-leaf-800 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

