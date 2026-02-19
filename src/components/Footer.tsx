"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-white py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="font-heading font-semibold text-[#222222]">
              Digital Khan
            </p>
            <p className="text-[#7B7B7B] text-sm mt-1">
              Turning ideas into high-performance digital experiences
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#7B7B7B] hover:text-[#222222] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://wa.me/971506926298"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#222222] hover:bg-[#333333] text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
        <p className="text-[#7B7B7B] text-sm text-center mt-8">
          © 2026 Digital Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
