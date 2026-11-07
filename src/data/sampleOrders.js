/**
 * Sample Orders and Payment History for Owner Dashboard.
 * Includes 18 realistic orders with diverse statuses and payment methods.
 */

export const INITIAL_SAMPLE_ORDERS = [
  {
    id: "ORD-9401",
    customer: "Arun Kumar",
    phone: "+91 98450 12345",
    items: [
      { name: "Chicken Dum Biryani", quantity: 2, price: 280 },
      { name: "Lemon Dhaniya Soup", quantity: 1, price: 145 }
    ],
    orderType: "Delivery",
    address: "B-304, Prestige Tranquility, Budigere Cross",
    amount: 705,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "New",
    date: "2026-11-06 14:15",
    day: "Today"
  },
  {
    id: "ORD-9400",
    customer: "Pooja Hegde",
    phone: "+91 97412 88990",
    items: [
      { name: "Tandoori Chicken", quantity: 1, price: 280 },
      { name: "Butter Naan", quantity: 3, price: 55 },
      { name: "Murgh Patiala", quantity: 1, price: 320 }
    ],
    orderType: "Dine-in",
    address: "Table 4",
    amount: 765,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Preparing",
    date: "2026-11-06 13:50",
    day: "Today"
  },
  {
    id: "ORD-9399",
    customer: "Naveen Raj",
    phone: "+91 99001 54321",
    items: [
      { name: "Gobi Manchurian", quantity: 1, price: 225 },
      { name: "Veg Fried Rice", quantity: 1, price: 190 },
      { name: "Paneer Butter Masala", quantity: 1, price: 260 }
    ],
    orderType: "Takeaway",
    address: "Counter Pick-up",
    amount: 675,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    status: "Out for delivery",
    date: "2026-11-06 13:20",
    day: "Today"
  },
  {
    id: "ORD-9398",
    customer: "Suresh Gowda",
    phone: "+91 98862 33445",
    items: [
      { name: "Chicken Dum Biryani", quantity: 3, price: 280 },
      { name: "Chicken 65", quantity: 1, price: 270 }
    ],
    orderType: "Delivery",
    address: "Villa 12, Sobha Jade, Cheemasandra",
    amount: 1110,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-06 12:45",
    day: "Today"
  },
  {
    id: "ORD-9397",
    customer: "Meenakshi Sundaram",
    phone: "+91 96110 99887",
    items: [
      { name: "Paneer Pepper Dry", quantity: 1, price: 270 },
      { name: "Butter Naan", quantity: 2, price: 55 },
      { name: "Dal Tadka", quantity: 1, price: 180 }
    ],
    orderType: "Dine-in",
    address: "Table 2",
    amount: 560,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-06 12:15",
    day: "Today"
  },
  {
    id: "ORD-9396",
    customer: "Vikram Reddy",
    phone: "+91 94480 77665",
    items: [
      { name: "Chicken Schezwan Fried Rice", quantity: 2, price: 240 },
      { name: "Mushroom Chilli", quantity: 1, price: 255 }
    ],
    orderType: "Delivery",
    address: "A-102, SBR Keerthi, Budigere Road",
    amount: 735,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-05 20:30",
    day: "Yesterday"
  },
  {
    id: "ORD-9395",
    customer: "Rashmi K.",
    phone: "+91 97399 22110",
    items: [
      { name: "Lemon Dhaniya Soup", quantity: 2, price: 145 },
      { name: "Veg Dum Biryani", quantity: 1, price: 220 }
    ],
    orderType: "Takeaway",
    address: "Counter Pick-up",
    amount: 510,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-05 19:40",
    day: "Yesterday"
  },
  {
    id: "ORD-9394",
    customer: "Dinesh Patel",
    phone: "+91 98440 66554",
    items: [
      { name: "Chicken Tikka", quantity: 2, price: 290 },
      { name: "Butter Chicken", quantity: 1, price: 310 },
      { name: "Garlic Naan", quantity: 4, price: 65 }
    ],
    orderType: "Dine-in",
    address: "Table 6",
    amount: 1150,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-05 19:10",
    day: "Yesterday"
  },
  {
    id: "ORD-9393",
    customer: "Sneha Nair",
    phone: "+91 98800 44332",
    items: [
      { name: "Baby Corn Pepper Fry", quantity: 1, price: 260 },
      { name: "Masala Papad", quantity: 2, price: 65 }
    ],
    orderType: "Delivery",
    address: "Brigade Golden Triangle, Old Madras Rd",
    amount: 390,
    paymentMethod: "UPI",
    paymentStatus: "Refunded",
    status: "Cancelled",
    date: "2026-11-05 18:25",
    day: "Yesterday"
  },
  {
    id: "ORD-9392",
    customer: "Manoj Swaminathan",
    phone: "+91 99805 11223",
    items: [
      { name: "Prawns Achari Tikka", quantity: 1, price: 360 },
      { name: "Chicken Dum Biryani", quantity: 2, price: 280 }
    ],
    orderType: "Delivery",
    address: "E-401, Skylark Ithaca, Seegehalli",
    amount: 920,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-05 13:40",
    day: "Yesterday"
  },
  {
    id: "ORD-9391",
    customer: "Deepak Sharma",
    phone: "+91 99450 33221",
    items: [
      { name: "Murgh Patiala", quantity: 1, price: 320 },
      { name: "Tandoori Roti", quantity: 4, price: 35 },
      { name: "Hot Gulab Jamun (2 Pcs)", quantity: 2, price: 80 }
    ],
    orderType: "Dine-in",
    address: "Table 1",
    amount: 620,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-04 21:05",
    day: "Nov 04"
  },
  {
    id: "ORD-9390",
    customer: "Ananya Rao",
    phone: "+91 97400 99881",
    items: [
      { name: "Gobi Manchurian", quantity: 1, price: 225 },
      { name: "Jeera Rice", quantity: 1, price: 160 },
      { name: "Dal Tadka", quantity: 1, price: 180 }
    ],
    orderType: "Takeaway",
    address: "Counter Pick-up",
    amount: 565,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-04 19:50",
    day: "Nov 04"
  },
  {
    id: "ORD-9389",
    customer: "Kiran Prasad",
    phone: "+91 98860 77112",
    items: [
      { name: "Tandoori Chicken", quantity: 2, price: 280 },
      { name: "Chicken Dum Biryani", quantity: 2, price: 280 }
    ],
    orderType: "Delivery",
    address: "House 54, Bommenahalli Village",
    amount: 1120,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-04 14:10",
    day: "Nov 04"
  },
  {
    id: "ORD-9388",
    customer: "Farhan Ahmed",
    phone: "+91 99160 55443",
    items: [
      { name: "Chicken Tikka", quantity: 1, price: 290 },
      { name: "Butter Chicken", quantity: 1, price: 310 },
      { name: "Butter Naan", quantity: 2, price: 55 }
    ],
    orderType: "Dine-in",
    address: "Table 8",
    amount: 710,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-03 20:45",
    day: "Nov 03"
  },
  {
    id: "ORD-9387",
    customer: "Shilpa Roy",
    phone: "+91 96200 44889",
    items: [
      { name: "Mushroom Kurkure", quantity: 1, price: 240 },
      { name: "Veg Fried Rice", quantity: 1, price: 190 }
    ],
    orderType: "Delivery",
    address: "Tower 3, Prestige City, Budigere",
    amount: 430,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-03 13:15",
    day: "Nov 03"
  },
  {
    id: "ORD-9386",
    customer: "Girish K.",
    phone: "+91 98455 33220",
    items: [
      { name: "Chicken Dum Biryani", quantity: 4, price: 280 }
    ],
    orderType: "Takeaway",
    address: "Counter Pick-up",
    amount: 1120,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-02 20:00",
    day: "Nov 02"
  },
  {
    id: "ORD-9385",
    customer: "Harish Murthy",
    phone: "+91 97311 66550",
    items: [
      { name: "Paneer Butter Masala", quantity: 1, price: 260 },
      { name: "Garlic Naan", quantity: 3, price: 65 }
    ],
    orderType: "Dine-in",
    address: "Table 3",
    amount: 455,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-02 13:00",
    day: "Nov 02"
  },
  {
    id: "ORD-9384",
    customer: "Ayesha Siddiqui",
    phone: "+91 99022 88441",
    items: [
      { name: "Lemon Dhaniya Soup", quantity: 2, price: 145 },
      { name: "Tandoori Chicken", quantity: 1, price: 280 },
      { name: "Chicken Dum Biryani", quantity: 1, price: 280 }
    ],
    orderType: "Delivery",
    address: "Green Meadows Villa 9, Budigere Cross",
    amount: 850,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Completed",
    date: "2026-11-01 19:30",
    day: "Nov 01"
  }
];

