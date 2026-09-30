"use client";

import { useState } from "react";
import { Product } from "@/lib/supabase";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const discount = product.original_price
    ? Math.round(
        ((product.original_price - product.price) / product.original_price) *
          100,
      )
    : 0;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#B0B597]/10 rounded-sm">
        <img
          src={product.image_url}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#B0B597]/20 animate-pulse" />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && (
            <Badge className="bg-[#484532] text-[#F5F5F0] text-[10px] tracking-[0.1em] uppercase rounded-none px-3 py-1 border-0">
              Featured
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-[#8B92AC] text-[#F5F5F0] text-[10px] tracking-[0.1em] uppercase rounded-none px-3 py-1 border-0">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center bg-[#F5F5F0]/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-[#F5F5F0] transition-all duration-300"
          aria-label="Add to wishlist"
        >
          <Heart
            size={16}
            className={`transition-colors ${
              isWishlisted
                ? "fill-[#484532] text-[#484532]"
                : "text-[#2D3439]/60"
            }`}
          />
        </button>

        {/* Quick Actions Overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#2D3439]/60 to-transparent transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex gap-2">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                addItem(product);
              }}
              className="flex-1 bg-[#F5F5F0] text-[#2D3439] hover:bg-[#B0B597] hover:text-[#2D3439] text-xs tracking-[0.1em] uppercase rounded-none h-10 transition-all duration-300"
            >
              <ShoppingBag className="mr-2 h-3.5 w-3.5" />
              Add to Bag
            </Button>
            <Button
              variant="outline"
              className="bg-[#F5F5F0]/20 border-[#F5F5F0]/40 text-[#F5F5F0] hover:bg-[#F5F5F0]/30 rounded-none h-10 w-10 p-0"
              aria-label="Quick view"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1.5">
        <p className="text-xs text-[#8B92AC] tracking-[0.1em] uppercase">
          {product.category}
        </p>
        <h3 className="text-sm font-medium text-[#2D3439] group-hover:text-[#484532] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${
                  i < Math.floor(product.rating)
                    ? "fill-[#B0B597] text-[#B0B597]"
                    : "text-[#B0B597]/30"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-[#8B92AC]">
            ({product.reviews_count})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-[#2D3439]">
            ${product.price.toFixed(2)}
          </span>
          {product.original_price && (
            <span className="text-sm text-[#8B92AC] line-through">
              ${product.original_price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
