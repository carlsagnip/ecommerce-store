"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Where Comfort Meets Craft",
    subtitle: "RSF The Craftsman",
    description:
      "Discover our handcrafted furniture pieces — built for timeless living.",
    cta: "Shop Collection",
    ctaHref: "/shop",
    image: "/hero.png",
  },
  {
    title: "The Reyna Bed",
    subtitle: "Signature Series",
    description:
      "Our flagship bed frame — tufted upholstered headboard in rich walnut. Where you rest matters.",
    cta: "View Details",
    ctaHref: "/shop",
    image: "/products/reyna-bed.jpg",
  },
  {
    title: "Made to Order",
    subtitle: "Custom Furniture",
    description:
      "Every piece is built by hand. Choose your wood, size, and finish — starting at ₱6,500.",
    cta: "Get a Quote",
    ctaHref: "/custom-quote",
    image: "/products/intarsia-bed.jpg",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 400);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-[#2D3439]">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3439]/80 via-[#2D3439]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D3439]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`max-w-xl transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-[#B0B597] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              {slide.subtitle}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#F5F5F0] tracking-tight leading-[1.1] mb-6">
              {slide.title}
            </h1>
            <p className="text-[#F5F5F0]/70 text-lg font-light leading-relaxed mb-8 max-w-md">
              {slide.description}
            </p>
            <Link href={slide.ctaHref}>
              <Button
                size="lg"
                className="bg-[#F5F5F0] text-[#2D3439] hover:bg-[#B0B597] hover:text-[#2D3439] tracking-[0.1em] uppercase text-xs px-10 py-6 rounded-none group transition-all duration-300"
              >
                {slide.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex items-center gap-3 z-20">
        <button
          onClick={handlePrev}
          className="h-12 w-12 flex items-center justify-center border border-[#F5F5F0]/30 text-[#F5F5F0]/70 hover:bg-[#F5F5F0]/10 hover:text-[#F5F5F0] transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="h-12 w-12 flex items-center justify-center border border-[#F5F5F0]/30 text-[#F5F5F0]/70 hover:bg-[#F5F5F0]/10 hover:text-[#F5F5F0] transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
              }, 400);
            }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-[2px] bg-[#F5F5F0]"
                : "w-4 h-[2px] bg-[#F5F5F0]/30 hover:bg-[#F5F5F0]/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
