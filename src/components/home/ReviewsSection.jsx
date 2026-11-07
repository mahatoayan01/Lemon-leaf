import React from 'react';
import { Star, ExternalLink, MessageSquare, CheckCircle } from 'lucide-react';
import { CUSTOMER_REVIEWS, REVIEWS_OVERVIEW } from '../../data/reviews';
import { RESTAURANT_DATA } from '../../data/restaurant';

export const ReviewsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Verified Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              What Diners Say About Us
            </h2>
            <p className="text-sm text-zinc-600 mt-2">
              Authentic customer experiences from Google Maps & community directory reviews.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-warm-50 border border-warm-200 rounded-2xl p-4 sm:p-5 flex items-center gap-4 self-start md:self-end">
            <div className="w-14 h-14 rounded-xl bg-lemon-400 text-zinc-950 flex flex-col items-center justify-center font-extrabold shadow-xs">
              <span className="text-xl leading-none">{REVIEWS_OVERVIEW.rating}</span>
              <span className="text-[10px] text-zinc-800 uppercase mt-0.5">Stars</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/30 text-amber-400/40'}`}
                  />
                ))}
              </div>
              <p className="text-xs text-zinc-600 font-medium">
                Based on over <strong>1,850+ ratings</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-warm-50/70 rounded-2xl p-6 border border-warm-200 shadow-xs flex flex-col justify-between hover:border-leaf-300 transition-colors"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic mb-4">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Recommended dish */}
              <div className="pt-3 border-t border-warm-200">
                <div className="flex items-center gap-1.5 font-bold text-xs text-zinc-900">
                  <span>{review.author}</span>
                  {review.verified && (
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold inline-flex items-center gap-0.5">
                      <CheckCircle className="w-2.5 h-2.5" /> Verified
                    </span>
                  )}
                </div>
                {review.dishRecommended && (
                  <p className="text-[11px] text-leaf-800 font-medium mt-1">
                    Loved: {review.dishRecommended}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Read more on Google Maps Button */}
        <div className="text-center">
          <a
            href={RESTAURANT_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm shadow-xs transition-colors"
          >
            <span>Read more reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-lemon-400" />
          </a>
        </div>

      </div>
    </section>
  );
};

