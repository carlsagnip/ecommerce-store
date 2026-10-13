"use client";

import { useState, useMemo } from "react";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { mockProducts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  SlidersHorizontal,
  Grid3X3,
  LayoutGrid,
  Search,
  X,
} from "lucide-react";

const categories = [
  "All",
  "Beds",
  "Doors",
  "Living Room",
  "Accessories",
];
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₱5,000", min: 0, max: 5000 },
  { label: "₱5,000 – ₱10,000", min: 5000, max: 10000 },
  { label: "₱10,000 – ₱30,000", min: 10000, max: 30000 },
  { label: "₱30,000 – ₱50,000", min: 30000, max: 50000 },
  { label: "Over ₱50,000", min: 50000, max: Infinity },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [gridCols, setGridCols] = useState(4);
  const [showFilters, setShowFilters] = useState(true);

  const filteredProducts = useMemo(() => {
    let products = [...mockProducts];

    // Filter by category
    if (selectedCategory !== "All") {
      products = products.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    const range = priceRanges[selectedPriceRange];
    products = products.filter(
      (p) => p.price >= range.min && p.price <= range.max,
    );

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      );
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        products.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        products.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        );
        break;
      case "featured":
      default:
        products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return products;
  }, [selectedCategory, selectedPriceRange, sortBy, searchQuery]);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Page Header */}
          <div className="bg-[#2D3439] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-[#B0B597] mb-3">
                Browse
              </p>
              <h1 className="text-4xl sm:text-5xl font-light text-[#F5F5F0] tracking-tight">
                Our Furniture
              </h1>
              <p className="text-[#F5F5F0]/50 font-light mt-4 max-w-md mx-auto">
                Handcrafted pieces built for timeless living — beds, doors,
                and custom furniture made to order.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-[#B0B597]/30 text-[#2D3439]/70 hover:bg-[#B0B597]/10 text-xs tracking-wider uppercase"
                >
                  <SlidersHorizontal className="mr-2 h-3.5 w-3.5" />
                  Filters
                </Button>
                <span className="text-sm text-[#8B92AC]">
                  {filteredProducts.length} products
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Sort */}
                <Select
                  value={sortBy}
                  onValueChange={(value) => value && setSortBy(value)}
                >
                  <SelectTrigger className="w-[180px] border-[#B0B597]/30 text-sm text-[#2D3439]/70 h-9">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-desc">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>

                {/* Grid toggle */}
                <div className="hidden sm:flex items-center gap-1 border border-[#B0B597]/30 rounded-md p-0.5">
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-1.5 rounded-sm transition-colors ${
                      gridCols === 3
                        ? "bg-[#484532] text-[#F5F5F0]"
                        : "text-[#2D3439]/40 hover:text-[#2D3439]/70"
                    }`}
                  >
                    <Grid3X3 size={16} />
                  </button>
                  <button
                    onClick={() => setGridCols(4)}
                    className={`p-1.5 rounded-sm transition-colors ${
                      gridCols === 4
                        ? "bg-[#484532] text-[#F5F5F0]"
                        : "text-[#2D3439]/40 hover:text-[#2D3439]/70"
                    }`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              {/* Sidebar Filters */}
              {showFilters && (
                <aside className="hidden md:block w-60 flex-shrink-0">
                  {/* Search */}
                  <div className="mb-8">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8B92AC]" />
                      <Input
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-white border-[#B0B597]/30 text-[#2D3439] placeholder:text-[#8B92AC]/50 h-10"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B92AC] hover:text-[#2D3439]"
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="mb-8">
                    <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#2D3439]/80 mb-4">
                      Categories
                    </h3>
                    <div className="space-y-1.5">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`block w-full text-left text-sm py-1.5 px-3 rounded-sm transition-all ${
                            selectedCategory === cat
                              ? "bg-[#484532] text-[#F5F5F0]"
                              : "text-[#2D3439]/60 hover:text-[#2D3439] hover:bg-[#B0B597]/10"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Separator className="mb-8 bg-[#B0B597]/20" />

                  {/* Price Range */}
                  <div className="mb-8">
                    <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#2D3439]/80 mb-4">
                      Price Range
                    </h3>
                    <div className="space-y-1.5">
                      {priceRanges.map((range, index) => (
                        <button
                          key={range.label}
                          onClick={() => setSelectedPriceRange(index)}
                          className={`block w-full text-left text-sm py-1.5 px-3 rounded-sm transition-all ${
                            selectedPriceRange === index
                              ? "bg-[#484532] text-[#F5F5F0]"
                              : "text-[#2D3439]/60 hover:text-[#2D3439] hover:bg-[#B0B597]/10"
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Separator className="mb-8 bg-[#B0B597]/20" />

                  {/* Clear Filters */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedPriceRange(0);
                      setSearchQuery("");
                      setSortBy("featured");
                    }}
                    className="w-full border-[#B0B597]/30 text-[#2D3439]/60 hover:bg-[#B0B597]/10 text-xs tracking-wider uppercase"
                  >
                    Clear All Filters
                  </Button>
                </aside>
              )}

              {/* Product Grid */}
              <div className="flex-1">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-[#8B92AC] text-lg font-light">
                      No products found
                    </p>
                    <p className="text-[#8B92AC]/60 text-sm mt-2">
                      Try adjusting your filters
                    </p>
                  </div>
                ) : (
                  <div
                    className={`grid gap-6 sm:gap-8 ${
                      gridCols === 3
                        ? "grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-2 lg:grid-cols-4"
                    }`}
                  >
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
