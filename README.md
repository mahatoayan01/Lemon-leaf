# LEMON LEAF Restaurant - Demo Website

A modern, responsive, production-quality demo website built for **LEMON LEAF (Veg & Non Veg Restaurant)**.

## 🚀 Tech Stack
- **React 18** (Vite)
- **Tailwind CSS** (Custom warm lemon & leaf palette)
- **React Router DOM v6** (Client-side routing)
- **Lucide React** (Clean, modern iconography)

## 📌 Features
- **7 Core Pages:**
  1. `/` - Home (Hero, About, Popular Dishes, Sample Offers, Gallery with Lightbox, Table Booking with WhatsApp prefill, Timings, Reviews, Instagram Grid, FAQ, CTA Strip)
  2. `/menu` - Menu with sticky category filter, search query, Veg-only toggle, and quantity-aware Add to Cart
  3. `/location` - Google Maps embed, directions CTA, address, landmark, and parking details
  4. `/contact` - Contact information and demo enquiry form with validation
  5. `/cart` - Order summary, delivery/takeaway/dine-in selection, demo payment gateway (UPI/Card/COD), and order placement into localStorage
  6. `/owner-login` - Front-end demo credentials (`owner@demo.com` / `demo1234`)
  7. `/owner-dashboard` - Protected dashboard with KPI cards, order status updater, payment history, search & filter, and pure SVG trend charts
- **Shared across all pages:**
  - Sticky header with cart item count
  - Comprehensive footer with quick links, owner login link, and demo disclaimer
  - Floating WhatsApp chat and instant Call buttons
  - Scroll-to-top on route change

## 🔒 Demo Authentication Note
The Owner Dashboard uses front-end only demo authentication stored in `localStorage`. The credentials are:
- **Email:** `owner@demo.com`
- **Password:** `demo1234`

*Note: This is strictly for demonstration purposes and does not replace production server-side authentication.*

## 🛠️ Local Development
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 🌐 Netlify Deployment Settings
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `20` (configured in `netlify.toml`)
- **SPA Redirects:** Handled automatically via `public/_redirects` and `netlify.toml`

