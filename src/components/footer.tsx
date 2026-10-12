import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Shop: [
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Collections", href: "/collections" },
    { name: "Sale", href: "/sale" },
    { name: "Gift Cards", href: "/gift-cards" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  Support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Track Order", href: "/track" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#2D3439] text-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-light tracking-[0.15em] uppercase">
                DRAFT
              </span>
            </Link>
            <p className="text-sm text-[#F5F5F0]/50 leading-relaxed mb-6 max-w-xs">
              Curated home essentials crafted with intention. Where modern
              design meets artisan tradition.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Pinterest", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-[#F5F5F0]/40 hover:text-[#B0B597] tracking-wider uppercase transition-colors"
                >
                  {social.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-[#F5F5F0]/80 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#F5F5F0]/40 hover:text-[#B0B597] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-[#F5F5F0]/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F5F5F0]/30">
            &copy; {new Date().getFullYear()} DRAFT.
          </p>
          <div className="flex items-center gap-6">
            {["Visa", "Mastercard", "Apple Pay", "PayPal"].map((method) => (
              <span
                key={method}
                className="text-xs text-[#F5F5F0]/25 tracking-wider"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
