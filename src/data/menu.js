/**
 * Menu data for LEMON LEAF Restaurant.
 * Includes verified dishes and prices where discovered, supplemented by authentic multi-cuisine items.
 */

export const MENU_DISCLAIMER = "Sample menu for demo – items and prices to be updated by the owner.";

export const MENU_CATEGORIES = [
  "All",
  "Soups & Starters",
  "Tandoori & Kebabs",
  "Biryani & Rice",
  "Main Course",
  "Breads & Accompaniments",
  "Chinese Specials",
  "Desserts & Drinks"
];

export const MENU_ITEMS = [
  // Soups & Starters
  {
    id: "dish-1",
    name: "Lemon Dhaniya Soup",
    category: "Soups & Starters",
    price: 145,
    isVeg: true,
    isPopular: true,
    rating: 4.8,
    description: "Our signature house broth infused with tangy fresh lemon, fresh coriander, ginger, and cracked black pepper.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    tags: ["Signature", "Soup", "Healthy"]
  },
  {
    id: "dish-2",
    name: "Masala Papad",
    category: "Soups & Starters",
    price: 65,
    isVeg: true,
    isPopular: false,
    rating: 4.5,
    description: "Crispy roasted lentil papad topped with spicy onion, tangy tomato, fresh green chillies, and chat masala.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    tags: ["Starter", "Crispy"]
  },
  {
    id: "dish-3",
    name: "Gobi Manchurian",
    category: "Soups & Starters",
    price: 225,
    isVeg: true,
    isPopular: true,
    rating: 4.7,
    description: "Crisp-fried cauliflower florets tossed in zesty garlic, soy glaze, spring onions, and oriental spices.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    tags: ["Indo-Chinese", "Customer Favorite"]
  },
  {
    id: "dish-4",
    name: "Mushroom Chilli",
    category: "Soups & Starters",
    price: 255,
    isVeg: true,
    isPopular: false,
    rating: 4.6,
    description: "Batter-fried tender button mushrooms wok-tossed with capsicum, slit chillies, and spicy dark soy sauce.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    tags: ["Spicy", "Chinese"]
  },
  {
    id: "dish-5",
    name: "Baby Corn Pepper Fry",
    category: "Soups & Starters",
    price: 260,
    isVeg: true,
    isPopular: false,
    rating: 4.6,
    description: "Crunchy golden baby corn sauteed with fresh curry leaves, crushed black pepper, and South Indian spices.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    tags: ["Pepper", "Crunchy"]
  },
  {
    id: "dish-6",
    name: "Paneer Pepper Dry",
    category: "Soups & Starters",
    price: 270,
    isVeg: true,
    isPopular: true,
    rating: 4.8,
    description: "Soft cottage cheese cubes pan-tossed in robust crushed peppercorns, caramelized onions, and fragrant herbs.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    tags: ["Paneer", "Chef Choice"]
  },
  {
    id: "dish-7",
    name: "Mushroom Kurkure",
    category: "Soups & Starters",
    price: 240,
    isVeg: true,
    isPopular: false,
    rating: 4.5,
    description: "Stuffed whole mushrooms coated with seasoned crunchy crust, fried golden and served with mint dip.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    tags: ["Crispy", "Snack"]
  },

  // Tandoori & Kebabs
  {
    id: "dish-8",
    name: "Tandoori Chicken",
    category: "Tandoori & Kebabs",
    price: 280,
    isVeg: false,
    isPopular: true,
    rating: 4.9,
    description: "Classic bone-in chicken marinated in hung curd, Kashmiri red chillies, and ground spices, roasted over charcoal.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    tags: ["Tandoor", "Must Try"]
  },
  {
    id: "dish-9",
    name: "Chicken Tikka",
    category: "Tandoori & Kebabs",
    price: 290,
    isVeg: false,
    isPopular: true,
    rating: 4.8,
    description: "Boneless chicken morsels steeped in spiced yogurt marinade and skewered to juicy charcoal perfection.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    tags: ["Boneless", "Smoky"]
  },
  {
    id: "dish-10",
    name: "Prawns Achari Tikka",
    category: "Tandoori & Kebabs",
    price: 360,
    isVeg: false,
    isPopular: false,
    rating: 4.7,
    description: "Plump coastal prawns coated with tangy pickling spices and slow-roasted in the clay oven.",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80",
    tags: ["Seafood", "Achari"]
  },
  {
    id: "dish-11",
    name: "Chicken 65",
    category: "Tandoori & Kebabs",
    price: 270,
    isVeg: false,
    isPopular: false,
    rating: 4.7,
    description: "Spicy, deep-fried chicken cubes tempered with mustard seeds, curry leaves, and green chillies.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
    tags: ["South Style", "Crispy"]
  },

  // Biryani & Rice
  {
    id: "dish-12",
    name: "Chicken Dum Biryani",
    category: "Biryani & Rice",
    price: 280,
    isVeg: false,
    isPopular: true,
    rating: 4.9,
    description: "Long-grain fragrant basmati rice layered with spiced marinated chicken, saffron, and fried onions, slow-cooked in dum seal.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    tags: ["Bestseller", "Aromatic"]
  },
  {
    id: "dish-13",
    name: "Veg Dum Biryani",
    category: "Biryani & Rice",
    price: 220,
    isVeg: true,
    isPopular: false,
    rating: 4.6,
    description: "Assorted seasonal garden vegetables, paneer cubes, and basmati rice dum-cooked with whole spices and mint.",
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e9a?auto=format&fit=crop&w=600&q=80",
    tags: ["Vegetarian", "Royal"]
  },
  {
    id: "dish-14",
    name: "Jeera Rice",
    category: "Biryani & Rice",
    price: 160,
    isVeg: true,
    isPopular: false,
    rating: 4.4,
    description: "Steamed fluffy basmati rice gently tempered with golden cumin seeds and pure desi ghee.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    tags: ["Mild", "Comfort"]
  },

  // Main Course
  {
    id: "dish-15",
    name: "Murgh Patiala",
    category: "Main Course",
    price: 320,
    isVeg: false,
    isPopular: true,
    rating: 4.9,
    description: "Royal Punjabi specialty featuring rich Mughlai chicken topped with an airy omelette roll and cashew saffron gravy.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
    tags: ["House Special", "Rich"]
  },
  {
    id: "dish-16",
    name: "Butter Chicken",
    category: "Main Course",
    price: 310,
    isVeg: false,
    isPopular: false,
    rating: 4.8,
    description: "Tender shredded tandoori chicken simmered in a velvet tomato, butter, and cream reduction with kasoori methi.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    tags: ["Creamy", "North Indian"]
  },
  {
    id: "dish-17",
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 260,
    isVeg: true,
    isPopular: false,
    rating: 4.7,
    description: "Soft fresh cottage cheese batons bathed in a rich, mild, buttery tomato and cashew nut gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    tags: ["Paneer", "Classic"]
  },
  {
    id: "dish-18",
    name: "Dal Tadka",
    category: "Main Course",
    price: 180,
    isVeg: true,
    isPopular: false,
    rating: 4.5,
    description: "Yellow lentils stewed with turmeric and tempered with garlic, cumin, mustard seeds, and dried red chillies.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    tags: ["Lentils", "Comfort"]
  },

  // Breads & Accompaniments
  {
    id: "dish-19",
    name: "Butter Naan",
    category: "Breads & Accompaniments",
    price: 55,
    isVeg: true,
    isPopular: false,
    rating: 4.7,
    description: "Soft and pillowy clay-oven baked refined flour bread brushed with molten butter.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80",
    tags: ["Tandoor", "Bread"]
  },
  {
    id: "dish-20",
    name: "Garlic Naan",
    category: "Breads & Accompaniments",
    price: 65,
    isVeg: true,
    isPopular: false,
    rating: 4.8,
    description: "Hand-stretched naan topped with finely minced roasted garlic and fresh coriander.",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80",
    tags: ["Aromatic", "Garlic"]
  },
  {
    id: "dish-21",
    name: "Tandoori Roti",
    category: "Breads & Accompaniments",
    price: 35,
    isVeg: true,
    isPopular: false,
    rating: 4.4,
    description: "Whole wheat unleavened bread baked crisp and wholesome in the traditional tandoor.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    tags: ["Whole Wheat", "Light"]
  },

  // Chinese Specials
  {
    id: "dish-22",
    name: "Veg Fried Rice",
    category: "Chinese Specials",
    price: 190,
    isVeg: true,
    isPopular: false,
    rating: 4.5,
    description: "Wok-tossed steamed rice with diced carrots, beans, cabbage, and light sesame soy seasoning.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    tags: ["Wok", "Mild"]
  },
  {
    id: "dish-23",
    name: "Chicken Schezwan Fried Rice",
    category: "Chinese Specials",
    price: 240,
    isVeg: false,
    isPopular: false,
    rating: 4.8,
    description: "Spicy wok-tossed basmati rice with shredded chicken, scrambled eggs, and spicy homemade schezwan sauce.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    tags: ["Spicy", "Schezwan"]
  },

  // Desserts & Drinks
  {
    id: "dish-24",
    name: "Hot Gulab Jamun (2 Pcs)",
    category: "Desserts & Drinks",
    price: 80,
    isVeg: true,
    isPopular: false,
    rating: 4.8,
    description: "Warm golden khoya dumplings soaked in fragrant cardamom and rosewater sugar syrup.",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14d48?auto=format&fit=crop&w=600&q=80",
    tags: ["Sweet", "Warm"]
  },
  {
    id: "dish-25",
    name: "Fresh Lemon Mint Cooler",
    category: "Desserts & Drinks",
    price: 75,
    isVeg: true,
    isPopular: false,
    rating: 4.9,
    description: "Zesty freshly squeezed lime juice with crushed garden mint leaves, black salt, and chilled soda.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    tags: ["Refreshing", "Lemon Leaf Special"]
  }
];

