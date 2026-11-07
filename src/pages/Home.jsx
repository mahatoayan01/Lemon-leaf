import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { PopularDishesSection } from '../components/home/PopularDishesSection';
import { OffersSection } from '../components/home/OffersSection';
import { GallerySection } from '../components/home/GallerySection';
import { BookingFormSection } from '../components/home/BookingFormSection';
import { HoursSection } from '../components/home/HoursSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { InstagramSection } from '../components/home/InstagramSection';
import { FAQSection } from '../components/home/FAQSection';
import { CTAStrip } from '../components/home/CTAStrip';
import { RESTAURANT_DATA } from '../data/restaurant';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Home"
        description={`${RESTAURANT_DATA.name} - ${RESTAURANT_DATA.subname}. Multi-cuisine restaurant serving authentic North Indian, Tandoori starters, Dum Biryani, and Chinese in Budigere Cross, Cheemasandra, Bangalore.`}
      />
      
      <Hero />
      <AboutSection />
      <PopularDishesSection />
      <OffersSection />
      <GallerySection />
      <BookingFormSection />
      <HoursSection />
      <ReviewsSection />
      <InstagramSection />
      <FAQSection />
      <CTAStrip />
    </div>
  );
};

