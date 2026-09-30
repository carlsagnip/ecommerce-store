"use client";

import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";
import { FeaturedProducts } from "@/components/featured-products";
import { PromoBanner } from "@/components/promo-banner";
import { TestimonialsSection } from "@/components/testimonials-section";
import {
  FeaturesSection,
  NewsletterSection,
} from "@/components/features-newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <CategoriesSection />
          <FeaturedProducts />
          <PromoBanner />
          <TestimonialsSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
