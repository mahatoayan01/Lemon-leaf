import React, { useState } from 'react';
import { Plus, Minus, Star, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const DishCard = ({ dish }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = cart.find(item => item.id === dish.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    addToCart(dish, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-warm-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Top Image & Veg/Non-Veg Badge */}
        <div className="relative h-48 w-full overflow-hidden bg-warm-100">
          <ImageWithFallback
            src={dish.image}
            alt={dish.name}
            label={dish.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Veg / Non-Veg Standard Food Indicator */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs p-1.5 rounded-md shadow-xs border border-zinc-200 flex items-center justify-center">
            {dish.isVeg ? (
              <span className="w-4 h-4 border-2 border-emerald-600 flex items-center justify-center p-0.5 rounded-xs" title="Vegetarian">
                <span className="w-2 h-2 rounded-full bg-emerald-600 block" />
              </span>
            ) : (
              <span className="w-4 h-4 border-2 border-red-600 flex items-center justify-center p-0.5 rounded-xs" title="Non-Vegetarian">
                <span className="w-2 h-2 rounded-full bg-red-600 block" />
              </span>
            )}
          </div>

          {/* Category / Bestseller Badge */}
          {dish.isPopular && (
            <div className="absolute top-3 right-3 bg-lemon-400 text-zinc-950 font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow-xs tracking-wide">
              ⭐ Bestseller
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-bold text-base sm:text-lg text-zinc-900 group-hover:text-leaf-800 transition-colors line-clamp-1">
              {dish.name}
            </h3>
            <span className="font-extrabold text-base sm:text-lg text-leaf-800 shrink-0">
              ₹{dish.price}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-2.5">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              {dish.rating || 4.7}
            </span>
            <span className="text-xs text-zinc-400">•</span>
            <span className="text-xs text-zinc-500 font-medium">{dish.category}</span>
          </div>

          <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
            {dish.description}
          </p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="p-4 sm:p-5 pt-0 mt-2">
        {quantityInCart > 0 ? (
          <div className="flex items-center justify-between bg-leaf-50 border border-leaf-300 rounded-xl px-3 py-1.5">
            <button
              onClick={() => updateQuantity(dish.id, quantityInCart - 1)}
              className="w-8 h-8 rounded-lg bg-white border border-leaf-300 text-leaf-800 hover:bg-leaf-100 flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-leaf-500"
              aria-label={`Decrease ${dish.name} quantity`}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-sm text-leaf-900 px-2">
              {quantityInCart} in Cart
            </span>
            <button
              onClick={() => updateQuantity(dish.id, quantityInCart + 1)}
              className="w-8 h-8 rounded-lg bg-leaf-700 text-white hover:bg-leaf-800 flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-leaf-500"
              aria-label={`Increase ${dish.name} quantity`}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs active:scale-98 ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-leaf-700 hover:bg-leaf-800 text-white hover:shadow-sm'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

