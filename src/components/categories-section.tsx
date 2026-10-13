"use client";

import { mockCategories } from "@/lib/mock-data";
import { ArrowRight } from "lucide-react";

const categoryImages: Record<string, string> = {
  beds: "/products/reyna-bed.jpg",
  doors: "/products/aurelia-door.jpg",
  "living-room": "/products/tv-rack.jpg",
  accessories: "/products/bench.png",
};

export function CategoriesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8B92AC] mb-3">
            Explore
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#2D3439] tracking-tight">
            Shop by Category
          </h2>
          <div className="w-12 h-[1px] bg-[#B0B597] mx-auto mt-6" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {mockCategories.map((category, index) => (
            <a
              key={category.id}
              href={`/category/${category.slug}`}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0
                    ? "aspect-square md:aspect-[4/3]"
                    : "aspect-square"
                } overflow-hidden`}
              >
                <img
                  src={categoryImages[category.slug] || "/products/reyna-bed.jpg"}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#2D3439]/30 group-hover:bg-[#2D3439]/40 transition-colors duration-300" />

                {/* Category Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3
                    className={`font-light text-[#F5F5F0] tracking-[0.1em] uppercase ${
                      index === 0
                        ? "text-2xl sm:text-3xl"
                        : "text-lg sm:text-xl"
                    }`}
                  >
                    {category.name}
                  </h3>
                  <p className="text-[#F5F5F0]/60 text-xs tracking-wider mt-2">
                    {category.product_count} Products
                  </p>
                  <div className="flex items-center gap-1.5 mt-4 text-[#F5F5F0]/80 text-xs tracking-[0.1em] uppercase group-hover:text-[#F5F5F0] transition-colors">
                    <span>Shop Now</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
