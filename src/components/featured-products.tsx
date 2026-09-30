"use client";

import { useState } from "react";
import { mockProducts } from "@/lib/mock-data";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

const tabs = ["Featured", "New Arrivals", "Best Sellers"];

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("Featured");

  const getFilteredProducts = () => {
    switch (activeTab) {
      case "Featured":
        return mockProducts.filter((p) => p.featured);
      case "New Arrivals":
        return mockProducts.slice(0, 8);
      case "Best Sellers":
        return mockProducts.filter((p) => p.reviews_count > 100);
      default:
        return mockProducts;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8B92AC] mb-3">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#2D3439] tracking-tight">
            Curated Selection
          </h2>
          <div className="w-12 h-[1px] bg-[#B0B597] mx-auto mt-6" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 sm:gap-10 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs tracking-[0.15em] uppercase pb-2 transition-all duration-300 border-b-2 ${
                activeTab === tab
                  ? "text-[#484532] border-[#484532] font-medium"
                  : "text-[#2D3439]/40 border-transparent hover:text-[#2D3439]/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {getFilteredProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Button
            variant="outline"
            className="border-[#484532] text-[#484532] hover:bg-[#484532] hover:text-[#F5F5F0] tracking-[0.1em] uppercase text-xs px-12 py-6 rounded-none transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
