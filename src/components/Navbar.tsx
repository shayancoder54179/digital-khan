"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading font-semibold text-[#222222] text-lg tracking-tight"
        >
          Digital Khan
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.span
                className="relative inline-block"
                variants={{ hover: {} }}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  href={link.href}
                  className="relative text-[#7B7B7B] hover:text-[#222222] text-sm font-medium transition-colors py-2 block"
                >
                  {link.label}
                </Link>
                <motion.span
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#222222]"
                  variants={{
                    initial: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originX: 0 }}
                />
              </motion.span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#222222] hover:bg-[#333333] text-white font-medium px-6 hidden sm:inline-flex"
          >
            <Link href="#contact">Book a Call</Link>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 text-[#222222]"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] bg-white z-40 md:hidden border-t border-[#e5e5e5] overflow-y-auto"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#222222] font-medium text-lg block py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full w-full bg-[#222222] hover:bg-[#333333] text-white font-medium"
                >
                  <Link href="#contact" onClick={() => setMobileOpen(false)}>
                    Book a Call
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
