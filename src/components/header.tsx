"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ShoppingBag,
  Search,
  User,
  Menu,
  Heart,
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Collections", href: "/collections" },
  { name: "Sale", href: "/sale" },
  { name: "About", href: "/about" },
];

export function Header() {
  const {
    items,
    totalItems,
    totalPrice,
    removeItem,
    updateQuantity,
    isOpen,
    toggleCart,
    closeCart,
  } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#484532] text-[#F5F5F0] text-center py-2 text-xs tracking-[0.2em] uppercase font-medium">
        Free shipping on orders over $150 — Spring Collection Now Live
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-[#F5F5F0]/95 backdrop-blur-md border-b border-[#B0B597]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2D3439] hover:text-[#484532] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl lg:text-3xl font-light tracking-[0.15em] text-[#2D3439] uppercase">
                Maison
              </span>
              <span className="hidden sm:inline text-2xl lg:text-3xl font-extralight tracking-[0.15em] text-[#8B92AC]">
                Luxe
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-[0.1em] text-[#2D3439]/70 hover:text-[#484532] transition-colors uppercase font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#484532] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-[#2D3439]/70 hover:text-[#484532] transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Wishlist */}
              <button
                className="hidden sm:block p-2 text-[#2D3439]/70 hover:text-[#484532] transition-colors"
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </button>

              {/* Account */}
              <button
                className="hidden sm:block p-2 text-[#2D3439]/70 hover:text-[#484532] transition-colors"
                aria-label="Account"
              >
                <User size={20} />
              </button>

              {/* Cart */}
              <Sheet open={isOpen} onOpenChange={toggleCart}>
                <SheetTrigger className="relative p-2 text-[#2D3439]/70 hover:text-[#484532] transition-colors cursor-pointer">
                  <ShoppingBag size={20} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-[#484532] text-[#F5F5F0] border-0 rounded-full font-medium">
                      {totalItems}
                    </span>
                  )}
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-lg bg-[#F5F5F0] border-l border-[#B0B597]/20">
                  <SheetHeader className="pb-4">
                    <SheetTitle className="text-xl font-light tracking-[0.1em] uppercase text-[#2D3439]">
                      Your Bag ({totalItems})
                    </SheetTitle>
                  </SheetHeader>
                  <Separator className="bg-[#B0B597]/30" />

                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                      <ShoppingBag className="h-16 w-16 text-[#B0B597]/50 mb-4" />
                      <p className="text-[#2D3439]/60 text-sm tracking-wide">
                        Your bag is empty
                      </p>
                      <Button
                        onClick={closeCart}
                        className="mt-6 bg-[#484532] hover:bg-[#2D3439] text-[#F5F5F0] tracking-[0.1em] uppercase text-xs px-8 py-5"
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col h-[calc(100vh-10rem)]">
                      <div className="flex-1 overflow-y-auto py-4 space-y-4">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex gap-4 p-3 rounded-lg hover:bg-[#B0B597]/10 transition-colors"
                          >
                            <div className="w-20 h-24 bg-[#B0B597]/20 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={item.product.image_url}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-medium text-[#2D3439] truncate">
                                {item.product.name}
                              </h3>
                              <p className="text-sm text-[#8B92AC] mt-1">
                                ${item.product.price.toFixed(2)}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="h-7 w-7 flex items-center justify-center rounded-full border border-[#B0B597]/40 text-[#2D3439]/60 hover:bg-[#B0B597]/20 transition-colors"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="text-sm text-[#2D3439] w-6 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="h-7 w-7 flex items-center justify-center rounded-full border border-[#B0B597]/40 text-[#2D3439]/60 hover:bg-[#B0B597]/20 transition-colors"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1 text-[#2D3439]/40 hover:text-red-500 transition-colors self-start"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-[#B0B597]/30 pt-4 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-[#2D3439]/60">Subtotal</span>
                          <span className="text-[#2D3439] font-medium">
                            ${totalPrice.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#2D3439]/60">Shipping</span>
                          <span className="text-[#B0B597] font-medium">
                            {totalPrice >= 150 ? "Free" : "$12.00"}
                          </span>
                        </div>
                        <Separator className="bg-[#B0B597]/30" />
                        <div className="flex justify-between">
                          <span className="text-[#2D3439] font-medium tracking-wide">
                            Total
                          </span>
                          <span className="text-[#2D3439] font-semibold text-lg">
                            $
                            {(
                              totalPrice + (totalPrice >= 150 ? 0 : 12)
                            ).toFixed(2)}
                          </span>
                        </div>
                        <Button className="w-full bg-[#484532] hover:bg-[#2D3439] text-[#F5F5F0] tracking-[0.1em] uppercase text-xs py-6 mt-2 transition-all duration-300">
                          Checkout
                        </Button>
                        <button
                          onClick={closeCart}
                          className="w-full text-center text-xs text-[#2D3439]/50 hover:text-[#484532] tracking-[0.1em] uppercase py-2 transition-colors"
                        >
                          Continue Shopping
                        </button>
                      </div>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-2xl mx-auto px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8B92AC]" />
              <Input
                placeholder="Search for products..."
                className="pl-11 bg-white/80 border-[#B0B597]/30 text-[#2D3439] placeholder:text-[#8B92AC]/60 focus-visible:ring-[#B0B597]/50 h-11"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2.5 text-sm tracking-[0.1em] text-[#2D3439]/70 hover:text-[#484532] uppercase font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
