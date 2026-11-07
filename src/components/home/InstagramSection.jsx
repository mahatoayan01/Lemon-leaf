import React from 'react';
import { Heart, MessageCircle, ExternalLink, Instagram } from 'lucide-react';
import { INSTAGRAM_POSTS, INSTAGRAM_CONFIG } from '../../data/instagram';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const InstagramSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-warm-50 border-b border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-pink-100 text-pink-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Instagram className="w-3.5 h-3.5" />
              Social Moments
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Follow Us On Instagram
            </h2>
            <p className="text-sm text-zinc-600 mt-2">
              Catch daily kitchen highlights, tandoori sizzles, and behind-the-scenes cravings.
            </p>
          </div>

          <div className="self-start sm:self-end">
            <a
              href={INSTAGRAM_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow {INSTAGRAM_CONFIG.handle}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* 6 Grid Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-xs border border-warm-200 bg-zinc-900 block"
            >
              <ImageWithFallback
                src={post.image}
                alt={post.caption}
                label={post.tag}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Hover overlay with likes & caption */}
              <div className="absolute inset-0 bg-zinc-950/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                <span className="text-[10px] font-bold text-lemon-400">{post.tag}</span>
                <p className="text-[11px] text-zinc-200 line-clamp-2 leading-tight">
                  {post.caption}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-zinc-300">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-zinc-300" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Notice for placeholder */}
        {INSTAGRAM_CONFIG.isPlaceholder && (
          <div className="text-center">
            <span className="text-xs text-zinc-500 font-mono bg-zinc-100 px-3 py-1.5 rounded-full border border-zinc-200">
              * Note for restaurant owner: {INSTAGRAM_CONFIG.placeholderLabel} in <code>src/data/restaurant.js</code>
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

