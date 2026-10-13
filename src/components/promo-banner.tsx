"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2D3439]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src="/products/cordova-bed.jpg"
              alt="Custom Craftsman Furniture"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3439]/20 to-transparent" />
          </div>

          {/* Right - Content */}
          <div className="md:pl-8 lg:pl-16">
            <p className="text-[#B0B597] text-xs tracking-[0.3em] uppercase mb-4">
              Made to Order
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-[#F5F5F0] tracking-tight leading-[1.15] mb-6">
              Your Vision,
              <br />
              <span className="text-[#8B92AC]">Our Craft</span>
            </h2>
            <p className="text-[#F5F5F0]/60 font-light leading-relaxed mb-8 max-w-md">
              Every RSF piece begins with a conversation. Tell us what you
              need — custom sizing, wood selection, finish preferences — and
              we’ll bring it to life with expert Filipino craftsmanship.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <p className="text-3xl font-light text-[#F5F5F0]">500+</p>
                <p className="text-xs text-[#8B92AC] tracking-wider uppercase mt-1">
                  Pieces Delivered
                </p>
              </div>
              <div>
                <p className="text-3xl font-light text-[#F5F5F0]">50%</p>
                <p className="text-xs text-[#8B92AC] tracking-wider uppercase mt-1">
                  Deposit to Start
                </p>
              </div>
              <div>
                <p className="text-3xl font-light text-[#F5F5F0]">100%</p>
                <p className="text-xs text-[#8B92AC] tracking-wider uppercase mt-1">
                  Handmade
                </p>
              </div>
            </div>
            <Button className="bg-[#F5F5F0] text-[#2D3439] hover:bg-[#B0B597] tracking-[0.1em] uppercase text-xs px-10 py-6 rounded-none group transition-all duration-300">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
