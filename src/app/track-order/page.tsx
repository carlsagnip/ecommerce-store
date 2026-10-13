"use client";

import { useState } from "react";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  CheckCircle,
  Circle,
  Clock,
  Package,
  Truck,
  CreditCard,
  Hammer,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";

const milestones = [
  {
    label: "Deposit Paid (50%)",
    icon: CreditCard,
    status: "completed" as const,
    date: "Oct 1, 2026",
  },
  {
    label: "Sourcing Materials",
    icon: Package,
    status: "completed" as const,
    date: "Oct 3, 2026",
  },
  {
    label: "Workshop Joinery",
    icon: Hammer,
    status: "in-progress" as const,
    date: "Oct 8, 2026",
  },
  {
    label: "Quality Inspection",
    icon: ClipboardCheck,
    status: "pending" as const,
    date: "",
  },
  {
    label: "Balance Due",
    icon: ShieldCheck,
    status: "pending" as const,
    date: "",
  },
  {
    label: "White-Glove Delivery",
    icon: Truck,
    status: "pending" as const,
    date: "",
  },
];

export default function TrackOrderPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Page Header */}
          <div className="bg-[#2D3439] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-[#B0B597] mb-3">
                Order Status
              </p>
              <h1 className="text-4xl sm:text-5xl font-light text-[#F5F5F0] tracking-tight">
                Track Your Furniture Order
              </h1>
              <p className="text-[#F5F5F0]/50 font-light mt-4 max-w-md mx-auto">
                Monitor your order&apos;s workshop production milestones.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Search Bar */}
            <form onSubmit={handleTrack} className="flex gap-3 mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8B92AC]" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Order ID or Phone Number"
                  className="pl-11 bg-white border-[#B0B597]/30 text-[#2D3439] placeholder:text-[#8B92AC]/50 h-12 rounded-none"
                />
              </div>
              <Button
                type="submit"
                className="bg-[#484532] hover:bg-[#2D3439] text-[#F5F5F0] tracking-[0.1em] uppercase text-xs px-8 h-12 rounded-none transition-all duration-300"
              >
                Track Order
              </Button>
            </form>

            {showResults && (
              /* Mock Results Card */
              <div className="border border-[#B0B597]/30 rounded-sm overflow-hidden">
                {/* Order Header */}
                <div className="bg-[#484532] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="text-xs text-[#B0B597] tracking-[0.1em] uppercase">
                      Order ID
                    </p>
                    <p className="text-lg font-medium text-[#F5F5F0] tracking-wide">
                      #ORD-RSF-8942
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B0B597] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B0B597]"></span>
                    </span>
                    <span className="text-sm text-[#F5F5F0]/80 tracking-wide">
                      In Workshop Production
                    </span>
                  </div>
                </div>

                {/* Order Details */}
                <div className="px-6 py-5 bg-white/50">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-[#8B92AC] text-xs tracking-wider uppercase mb-0.5">
                        Product
                      </p>
                      <p className="text-[#2D3439] font-medium">Reyna Bed</p>
                    </div>
                    <div>
                      <p className="text-[#8B92AC] text-xs tracking-wider uppercase mb-0.5">
                        Size
                      </p>
                      <p className="text-[#2D3439] font-medium">Queen</p>
                    </div>
                    <div>
                      <p className="text-[#8B92AC] text-xs tracking-wider uppercase mb-0.5">
                        Deposit Paid
                      </p>
                      <p className="text-[#2D3439] font-medium">₱18,250</p>
                    </div>
                    <div>
                      <p className="text-[#8B92AC] text-xs tracking-wider uppercase mb-0.5">
                        Est. Delivery
                      </p>
                      <p className="text-[#2D3439] font-medium">Oct 28, 2026</p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-[#B0B597]/20" />

                {/* Milestones */}
                <div className="px-6 py-6 bg-[#F5F5F0]/50">
                  <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#2D3439]/80 mb-6">
                    Production Milestones
                  </h3>
                  <div className="space-y-0">
                    {milestones.map((milestone, index) => {
                      const Icon = milestone.icon;
                      const isLast = index === milestones.length - 1;
                      return (
                        <div key={milestone.label} className="flex gap-4">
                          {/* Timeline Column */}
                          <div className="flex flex-col items-center">
                            <div
                              className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                                milestone.status === "completed"
                                  ? "bg-[#484532] text-[#F5F5F0]"
                                  : milestone.status === "in-progress"
                                  ? "bg-[#B0B597]/30 text-[#484532] ring-2 ring-[#484532] ring-offset-2 ring-offset-[#F5F5F0]"
                                  : "bg-[#B0B597]/15 text-[#8B92AC]"
                              }`}
                            >
                              {milestone.status === "completed" ? (
                                <CheckCircle className="h-5 w-5" />
                              ) : milestone.status === "in-progress" ? (
                                <Clock className="h-5 w-5" />
                              ) : (
                                <Icon className="h-5 w-5" />
                              )}
                            </div>
                            {!isLast && (
                              <div
                                className={`w-[2px] h-8 ${
                                  milestone.status === "completed"
                                    ? "bg-[#484532]"
                                    : "bg-[#B0B597]/20"
                                }`}
                              />
                            )}
                          </div>

                          {/* Content Column */}
                          <div className="pt-2 pb-4">
                            <p
                              className={`text-sm font-medium ${
                                milestone.status === "pending"
                                  ? "text-[#2D3439]/40"
                                  : "text-[#2D3439]"
                              }`}
                            >
                              {milestone.label}
                              {milestone.status === "in-progress" && (
                                <span className="ml-2 text-xs font-normal text-[#484532] bg-[#B0B597]/20 px-2 py-0.5 rounded-full">
                                  In Progress
                                </span>
                              )}
                            </p>
                            {milestone.date && (
                              <p className="text-xs text-[#8B92AC] mt-0.5">
                                {milestone.date}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {!showResults && (
              <div className="text-center py-16">
                <Search className="h-16 w-16 text-[#B0B597]/30 mx-auto mb-4" />
                <p className="text-[#2D3439]/50 text-sm tracking-wide">
                  Enter your Order ID or phone number to track your furniture
                  order
                </p>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
