"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck, Shield, RefreshCw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "White-Glove Delivery",
    description: "Professional in-home delivery and assembly available",
  },
  {
    icon: Shield,
    title: "Secure 50% Deposit",
    description: "Pay half now, balance before delivery",
  },
  {
    icon: RefreshCw,
    title: "Made to Order",
    description: "Custom sizing, wood, and finish to your specs",
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    description: "Care guidance and refinishing for every piece",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5F0] border-t border-[#B0B597]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#B0B597]/15 text-[#484532] mb-4 group-hover:bg-[#484532] group-hover:text-[#F5F5F0] transition-all duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-medium text-[#2D3439] tracking-wide mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-[#8B92AC] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#B0B597]/15">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#8B92AC] mb-3">
          Stay Connected
        </p>
        <h2 className="text-3xl sm:text-4xl font-light text-[#2D3439] tracking-tight mb-4">
          Join the RSF Family
        </h2>
        <p className="text-[#2D3439]/60 font-light mb-8 max-w-md mx-auto">
          Subscribe for first access to new pieces, workshop stories, and
          exclusive offers from RSF The Craftsman.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            placeholder="Enter your email"
            className="bg-white border-[#B0B597]/30 text-[#2D3439] placeholder:text-[#8B92AC]/50 focus-visible:ring-[#B0B597]/50 h-12 rounded-none flex-1"
          />
          <Button className="bg-[#484532] hover:bg-[#2D3439] text-[#F5F5F0] tracking-[0.1em] uppercase text-xs px-8 h-12 rounded-none transition-all duration-300">
            Subscribe
          </Button>
        </div>
        <p className="text-xs text-[#8B92AC] mt-4">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
