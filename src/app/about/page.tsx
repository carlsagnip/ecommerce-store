"use client";

import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Hammer,
  ChefHat,
  BedDouble,
  Sofa,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Custom Furniture",
    description:
      "Beds, tables, shelving, and statement pieces — designed and built to your exact specifications.",
  },
  {
    icon: ChefHat,
    title: "Kitchen Cabinetry",
    description:
      "Durable, precision-fitted kitchen cabinets and countertops crafted from premium solid wood.",
  },
  {
    icon: BedDouble,
    title: "Bedroom Sets",
    description:
      "Complete bedroom suites — bed frames, nightstands, dressers, and wardrobes, all made to match.",
  },
  {
    icon: Sofa,
    title: "Living & Dining",
    description:
      "TV racks, dining tables, sideboards, and accent furniture that transforms your home.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description:
      "Office fit-outs, restaurant interiors, and hotel furnishings — scaled for business needs.",
  },
];

export default function AboutPage() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Page Header */}
          <div className="bg-[#2D3439] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-[#B0B597] mb-3">
                Our Story
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F5F0] tracking-tight">
                RSF The Craftsman
              </h1>
              <p className="text-[#F5F5F0]/50 font-light mt-4 max-w-lg mx-auto text-lg">
                Where Comfort Meets Craft — Built with precision. Crafted for
                living.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F5F0]">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src="/products/intarsia-bed.jpg"
                    alt="RSF Workshop Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3439]/20 to-transparent" />
                </div>

                {/* Story Text */}
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-[#8B92AC] mb-4">
                    Who We Are
                  </p>
                  <h2 className="text-3xl font-light text-[#2D3439] tracking-tight mb-6 leading-[1.2]">
                    A Legacy of Filipino Woodworking
                  </h2>
                  <div className="space-y-4 text-[#2D3439]/70 font-light leading-relaxed">
                    <p>
                      At RSF The Craftsman, we create timeless furniture and
                      custom pieces combining elegance, durability, and comfort.
                      Rooted in a deep family legacy of Filipino woodworking and
                      precision machinery, every piece is built to last.
                    </p>
                    <p>
                      Our workshop in Nueva Ecija is where raw wood transforms
                      into heirloom-quality furniture. From bed frames with
                      hand-carved intarsia headboards to full kitchen cabinetry
                      installations, we handle every step — from design
                      consultation to white-glove delivery.
                    </p>
                    <p>
                      Whether you need a single statement piece or a complete
                      home fit-out, RSF brings the same uncompromising attention
                      to detail.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex gap-8 mt-8">
                    <div>
                      <p className="text-2xl font-light text-[#484532]">500+</p>
                      <p className="text-xs text-[#8B92AC] tracking-wider uppercase mt-0.5">
                        Pieces Built
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-light text-[#484532]">100%</p>
                      <p className="text-xs text-[#8B92AC] tracking-wider uppercase mt-0.5">
                        Handmade
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-light text-[#484532]">50%</p>
                      <p className="text-xs text-[#8B92AC] tracking-wider uppercase mt-0.5">
                        Deposit Model
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-xs tracking-[0.3em] uppercase text-[#8B92AC] mb-3">
                  What We Do
                </p>
                <h2 className="text-3xl sm:text-4xl font-light text-[#2D3439] tracking-tight">
                  Our Services
                </h2>
                <div className="w-12 h-[1px] bg-[#B0B597] mx-auto mt-6" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="group p-8 border border-[#B0B597]/20 rounded-sm hover:border-[#484532]/30 hover:bg-[#B0B597]/5 transition-all duration-300"
                    >
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#B0B597]/15 text-[#484532] mb-5 group-hover:bg-[#484532] group-hover:text-[#F5F5F0] transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-base font-medium text-[#2D3439] tracking-wide mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#8B92AC] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Location & Contact */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2D3439]">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs tracking-[0.3em] uppercase text-[#B0B597] mb-3">
                  Visit Us
                </p>
                <h2 className="text-3xl sm:text-4xl font-light text-[#F5F5F0] tracking-tight">
                  Location & Contact
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#F5F5F0]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#B0B597]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#F5F5F0]/50 tracking-wider uppercase mb-1">
                        Workshop Address
                      </p>
                      <p className="text-[#F5F5F0] font-light leading-relaxed">
                        Purok 3, Brgy. Imelda Valley,
                        <br />
                        Palayan City, Nueva Ecija
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#F5F5F0]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#B0B597]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#F5F5F0]/50 tracking-wider uppercase mb-1">
                        Phone
                      </p>
                      <p className="text-[#F5F5F0] font-light">
                        0962 912 1207
                      </p>
                      <p className="text-[#F5F5F0] font-light">
                        0927 082 3043
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#F5F5F0]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#B0B597]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#F5F5F0]/50 tracking-wider uppercase mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:fryan031985@gmail.com"
                        className="text-[#F5F5F0] font-light hover:text-[#B0B597] transition-colors"
                      >
                        fryan031985@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#F5F5F0]/10 flex items-center justify-center flex-shrink-0">
                      <Facebook className="h-5 w-5 text-[#B0B597]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#F5F5F0]/50 tracking-wider uppercase mb-1">
                        Facebook
                      </p>
                      <a
                        href="https://facebook.com/RSFTheCraftsman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F5F5F0] font-light hover:text-[#B0B597] transition-colors"
                      >
                        RSF The Craftsman
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map / Image Placeholder */}
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-sm">
                  <img
                    src="/products/cordova-bed.jpg"
                    alt="RSF The Craftsman Workshop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#2D3439]/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src="/logo.png"
                        alt="RSF The Craftsman Logo"
                        className="h-20 w-auto mx-auto opacity-90"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
