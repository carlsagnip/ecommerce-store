import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Shop: [
    { name: "All Furniture", href: "/shop" },
    { name: "Beds", href: "/shop?cat=beds" },
    { name: "Doors", href: "/shop?cat=doors" },
    { name: "Living Room", href: "/shop?cat=living-room" },
    { name: "Accessories", href: "/shop?cat=accessories" },
  ],
  Services: [
    { name: "Custom Quote", href: "/custom-quote" },
    { name: "White-Glove Delivery", href: "/delivery" },
    { name: "Track Order", href: "/track-order" },
    { name: "Care & Maintenance", href: "/care" },
  ],
  Company: [
    { name: "About RSF", href: "/about" },
    { name: "Our Craft", href: "/about#craft" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Return Policy", href: "/returns" },
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
                RSF The Craftsman
              </span>
            </Link>
            <p className="text-sm text-[#F5F5F0]/50 leading-relaxed mb-6 max-w-xs">
              Where comfort meets craft. Handcrafted furniture built for
              timeless living — made to order in the Philippines.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "TikTok"].map((social) => (
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
            &copy; {new Date().getFullYear()} RSF The Craftsman.
          </p>
          <div className="flex items-center gap-6">
            {["GCash", "BPI", "BDO", "Cash on Delivery"].map((method) => (
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
