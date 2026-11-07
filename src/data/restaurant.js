/**
 * Central configuration and verified details for LEMON LEAF Restaurant.
 * STRICT RULE: Real data used where found from Google Maps / local directories.
 * Missing fields are visibly marked with editable placeholder strings.
 */

export const RESTAURANT_DATA = {
  name: "LEMON LEAF",
  subname: "Veg & Non Veg Restaurant",
  officialTitle: "LEMON LEAF (Veg & Non Veg Restaurant)- Best Restaurant",
  placeId: "ChIJk4UiQcRBrjsR4Jsn-wsx6uI",
  tagline: "Authentic Multi-Cuisine, Tandoori Delicacies & Signature Biryanis",
  aboutShort: "LEMON LEAF is a vibrant multi-cuisine restaurant located at Budigere Cross, Cheemasandra, Bangalore. Renowned for rich North Indian gravies, smoky tandoori kebabs, aromatic dum biryanis, and mouthwatering Indo-Chinese starters, we offer an inviting dining atmosphere for families and food enthusiasts alike.",
  
  // Contact & Location Details
  address: "Shop No. 8 & 9, Ground Floor, No. 171, Virtuoso Complex (Sy. No. 138), Near Bommenahalli Bus Stop / Grand Will, Budigere Cross, Cheemasandra, Bengaluru, Karnataka 560049",
  area: "Budigere Cross, Cheemasandra",
  city: "Bengaluru",
  state: "Karnataka",
  pincode: "560049",
  landmark: "Near Bommenahalli Bus Stop / Grand Will, near Coldman",
  parkingInfo: "Customer street and complex parking available near Virtuoso Complex.",
  
  // Coordinates (Budigere Cross / Bommenahalli)
  coordinates: {
    lat: 13.0673,
    lng: 77.7428,
  },
  
  // Real Phone Numbers found
  phone: "096066 75557",
  phoneSecondary: "+91 96066 75558",
  phoneFormatted: "+91 96066 75557",
  
  // WhatsApp Contact (based on verified phone)
  whatsappNumber: "919606675557",
  whatsappFormatted: "+91 96066 75557",
  whatsappLink: "https://wa.me/919606675557",
  
  // Email (Placeholder as requested)
  email: "contact@lemonleaf-restaurant.com",
  emailPlaceholderNotice: "Add official email here",
  
  // Rating and Statistics (Google Maps / Justdial consensus)
  rating: 3.9,
  ratingMax: 5.0,
  reviewCount: 1850,
  priceRange: "₹300 - ₹750 for two",
  
  // Links
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=LEMON%20LEAF%20(Veg%20%26%20Non%20Veg%20Restaurant)-%20Best%20Restaurant&query_place_id=ChIJk4UiQcRBrjsR4Jsn-wsx6uI",
  embedMapUrl: "https://www.google.com/maps?q=LEMON%20LEAF%20(Veg%20%26%20Non%20Veg%20Restaurant)%20Budigere%20Cross%20Cheemasandra%20Bangalore&output=embed",
  
  // Opening Hours (7 days)
  openingHours: [
    { day: "Monday", open: "11:30 AM", close: "11:00 PM", raw: "11:30 AM – 11:00 PM" },
    { day: "Tuesday", open: "11:30 AM", close: "11:00 PM", raw: "11:30 AM – 11:00 PM" },
    { day: "Wednesday", open: "11:30 AM", close: "11:00 PM", raw: "11:30 AM – 11:00 PM" },
    { day: "Thursday", open: "11:30 AM", close: "11:00 PM", raw: "11:30 AM – 11:00 PM" },
    { day: "Friday", open: "11:30 AM", close: "11:00 PM", raw: "11:30 AM – 11:00 PM" },
    { day: "Saturday", open: "11:30 AM", close: "11:00 PM", raw: "11:30 AM – 11:00 PM" },
    { day: "Sunday", open: "11:30 AM", close: "11:00 PM", raw: "11:30 AM – 11:00 PM" },
  ],
  
  // Services directly provided
  services: [
    { name: "Dine-in", desc: "Cozy indoor seating for families and friends" },
    { name: "Takeaway / Parcel", desc: "Hygienic and swift packaging for pick-up" },
    { name: "Online Delivery", desc: "Delivered hot via delivery partners" },
    { name: "Outdoor & Event Catering", desc: "Full buffet and live counter catering for events and functions" },
  ],
  
  // Social Media Links (Visibly marked placeholders where official direct URLs are not listed)
  socialLinks: {
    instagram: {
      url: "https://instagram.com/placeholder_lemonleaf",
      handle: "@lemonleaf_restaurant",
      isPlaceholder: true,
      label: "Add Instagram link here"
    },
    facebook: {
      url: "https://facebook.com/placeholder_lemonleaf",
      handle: "LemonLeafBengaluru",
      isPlaceholder: true,
      label: "Add Facebook link here"
    },
    whatsapp: {
      url: "https://wa.me/919606675557",
      handle: "+91 96066 75557",
      isPlaceholder: false,
      label: "Verified WhatsApp"
    }
  }
};

