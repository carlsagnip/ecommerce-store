"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Makati, Philippines",
    text: "The Reyna Bed is absolutely stunning. The craftsmanship is next-level — you can feel the quality in every detail. RSF delivered it on time and the assembly team was incredibly professional.",
    rating: 5,
    product: "Reyna Bed",
  },
  {
    id: 2,
    name: "Carlos Reyes",
    location: "Cebu, Philippines",
    text: "We commissioned a custom bed frame and an Aurelia Door for our new home. RSF went above and beyond — the intarsia headboard detail is a showstopper. Worth every peso.",
    rating: 5,
    product: "Intarsia Bed",
  },
  {
    id: 3,
    name: "Andrea Lim",
    location: "Quezon City, Philippines",
    text: "I started with the Side Table and ended up ordering a full Cordova Bed set. The white-glove delivery made everything effortless. RSF truly lives up to their tagline.",
    rating: 5,
    product: "Cordova Bed",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (direction: "prev" | "next") => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) =>
        direction === "next"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length,
      );
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => navigate("next"), 5000);
    return () => clearInterval(interval);
  }, [current]);

  const testimonial = testimonials[current];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#484532]">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="h-10 w-10 text-[#B0B597]/40 mx-auto mb-8 rotate-180" />

        <div
          className={`transition-all duration-400 ${
            isTransitioning
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-[#B0B597] text-[#B0B597]"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl sm:text-2xl font-light text-[#F5F5F0] leading-relaxed mb-8 max-w-2xl mx-auto">
            &ldquo;{testimonial.text}&rdquo;
          </blockquote>

          {/* Author */}
          <div>
            <p className="text-[#F5F5F0] font-medium tracking-wide">
              {testimonial.name}
            </p>
            <p className="text-[#B0B597]/70 text-sm mt-1">
              {testimonial.location}
            </p>
            <p className="text-[#8B92AC] text-xs tracking-[0.1em] uppercase mt-2">
              Purchased: {testimonial.product}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => navigate("prev")}
            className="h-10 w-10 flex items-center justify-center border border-[#F5F5F0]/20 text-[#F5F5F0]/50 hover:bg-[#F5F5F0]/10 hover:text-[#F5F5F0] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrent(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === current
                    ? "w-6 bg-[#B0B597]"
                    : "w-2 bg-[#F5F5F0]/20 hover:bg-[#F5F5F0]/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => navigate("next")}
            className="h-10 w-10 flex items-center justify-center border border-[#F5F5F0]/20 text-[#F5F5F0]/50 hover:bg-[#F5F5F0]/10 hover:text-[#F5F5F0] transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
