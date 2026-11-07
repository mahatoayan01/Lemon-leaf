import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={RESTAURANT_DATA.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lemon Leaf on WhatsApp"
        className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

      {/* Call Floating Button (Particularly visible & useful on mobile) */}
      <a
        href={`tel:${RESTAURANT_DATA.phone}`}
        aria-label={`Call Lemon Leaf at ${RESTAURANT_DATA.phoneFormatted}`}
        className="w-13 h-13 p-3.5 rounded-full bg-leaf-700 hover:bg-leaf-800 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-leaf-300 md:hidden"
      >
        <Phone className="w-6 h-6" />
        <span className="sr-only">Call Restaurant</span>
      </a>
    </div>
  );
};

