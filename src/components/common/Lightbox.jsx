import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const Lightbox = ({ items, currentIndex, isOpen, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || currentIndex < 0 || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-lemon-400"
          aria-label="Close image viewer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/50 hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-lemon-400"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-black/50 hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-lemon-400"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image */}
        <div className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-zinc-950">
          <ImageWithFallback
            src={currentItem.src}
            alt={currentItem.alt || currentItem.title}
            label={currentItem.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="w-full mt-3 text-center text-white">
          <h4 className="text-lg font-bold text-lemon-400">{currentItem.title}</h4>
          {currentItem.alt && <p className="text-xs text-zinc-300 mt-1">{currentItem.alt}</p>}
          <span className="text-xs text-zinc-400 mt-1 inline-block">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};

