import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

export const ImageWithFallback = ({ src, alt, className = "", label = "Lemon Leaf Special", ...props }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={`bg-gradient-to-br from-leaf-800 via-leaf-900 to-zinc-950 flex flex-col items-center justify-center p-4 text-center text-white select-none ${className}`}
        role="img"
        aria-label={alt || label}
      >
        <div className="w-10 h-10 rounded-full bg-lemon-500/20 text-lemon-400 flex items-center justify-center mb-2 shadow-inner">
          <Utensils className="w-5 h-5" />
        </div>
        <span className="text-xs font-semibold tracking-wide text-lemon-300 line-clamp-1">{label}</span>
        <span className="text-[10px] text-zinc-400 mt-0.5">LEMON LEAF</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || label}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      {...props}
    />
  );
};

