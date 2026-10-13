"use client";

import { useState } from "react";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
import { Upload, CheckCircle, Send } from "lucide-react";

export default function CustomQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                Bespoke
              </p>
              <h1 className="text-4xl sm:text-5xl font-light text-[#F5F5F0] tracking-tight">
                Request a Custom Quote
              </h1>
              <p className="text-[#F5F5F0]/50 font-light mt-4 max-w-md mx-auto">
                Tell us about your bespoke furniture design or space
                requirements.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {submitted ? (
              /* Success Message */
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#B0B597]/15 text-[#484532] mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-light text-[#2D3439] tracking-tight mb-3">
                  Quote Request Received
                </h2>
                <p className="text-[#8B92AC] max-w-md mx-auto leading-relaxed">
                  Thank you! An RSF sales rep will contact you shortly to
                  discuss your project and provide a detailed quote.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 bg-[#484532] hover:bg-[#2D3439] text-[#F5F5F0] tracking-[0.1em] uppercase text-xs px-10 py-6 rounded-none transition-all duration-300"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              /* Quote Form */
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Info */}
                <div>
                  <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-[#2D3439]/80 mb-4">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#2D3439]/70 mb-1.5">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="Juan dela Cruz"
                        className="bg-white border-[#B0B597]/30 text-[#2D3439] placeholder:text-[#8B92AC]/50 h-11 rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#2D3439]/70 mb-1.5">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="0962 912 1207"
                        className="bg-white border-[#B0B597]/30 text-[#2D3439] placeholder:text-[#8B92AC]/50 h-11 rounded-none"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm text-[#2D3439]/70 mb-1.5">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="bg-white border-[#B0B597]/30 text-[#2D3439] placeholder:text-[#8B92AC]/50 h-11 rounded-none"
                    />
                  </div>
                </div>

                <Separator className="bg-[#B0B597]/20" />

                {/* Project Details */}
                <div>
                  <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-[#2D3439]/80 mb-4">
                    Project Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#2D3439]/70 mb-1.5">
                        Project Type *
                      </label>
                      <Select
                        value={projectType}
                        onValueChange={setProjectType}
                      >
                        <SelectTrigger className="border-[#B0B597]/30 text-[#2D3439]/70 h-11 rounded-none bg-white">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="custom-furniture">
                            Custom Furniture
                          </SelectItem>
                          <SelectItem value="kitchen-cabinetry">
                            Kitchen Cabinetry
                          </SelectItem>
                          <SelectItem value="bedroom-set">
                            Bedroom Set
                          </SelectItem>
                          <SelectItem value="commercial">
                            Commercial
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm text-[#2D3439]/70 mb-1.5">
                        Material / Wood Finish
                      </label>
                      <Input
                        placeholder="e.g. Narra, Mahogany, Walnut"
                        className="bg-white border-[#B0B597]/30 text-[#2D3439] placeholder:text-[#8B92AC]/50 h-11 rounded-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Dimensions & Notes */}
                <div>
                  <label className="block text-sm text-[#2D3439]/70 mb-1.5">
                    Estimated Dimensions & Notes *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe the furniture you need — dimensions, design references, quantity, or any specific requirements..."
                    className="w-full bg-white border border-[#B0B597]/30 text-[#2D3439] placeholder:text-[#8B92AC]/50 rounded-none p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#B0B597]/50 focus:border-transparent"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm text-[#2D3439]/70 mb-1.5">
                    Floor Plans / Design References
                  </label>
                  <div className="border-2 border-dashed border-[#B0B597]/30 rounded-sm p-8 text-center hover:border-[#484532]/30 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-[#B0B597]/50 mx-auto mb-3" />
                    <p className="text-sm text-[#2D3439]/60">
                      Drag and drop files here, or{" "}
                      <span className="text-[#484532] font-medium underline">
                        browse
                      </span>
                    </p>
                    <p className="text-xs text-[#8B92AC] mt-1.5">
                      PNG, JPG, PDF up to 10MB
                    </p>
                    <input
                      type="file"
                      className="hidden"
                      accept=".png,.jpg,.jpeg,.pdf"
                      multiple
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#484532] hover:bg-[#2D3439] text-[#F5F5F0] tracking-[0.1em] uppercase text-xs py-6 rounded-none group transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Quote Request
                </Button>
              </form>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
