"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const headline = "Your Competitors Are Getting Leads Online. Are You?";
const subtitle = "I build websites that make you look like the premium choice — and bring clients to you while you sleep.";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none animate-hero-gradient"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%, #f8f8f8 100%)",
          backgroundSize: "400% 400%",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden
      >
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, #222222 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading font-bold text-[#222222] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#7B7B7B] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#222222] hover:bg-[#333333] text-white font-medium px-6 sm:px-8 w-full sm:w-auto"
          >
            <Link href="#portfolio">See My Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white font-medium px-6 sm:px-8 w-full sm:w-auto"
          >
            <Link href="#contact">Let's Talk</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 text-[#222222]"
        >
          <Stat value={3} suffix="+ Projects Delivered" />
          <Stat value={2} suffix="+ Years Building" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, suffix }: { value: number; suffix: string }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.05 });
  const [count, setCount] = useState(0);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) setHasBeenVisible(true);
  }, [inView]);

  useEffect(() => {
    if (!hasBeenVisible) return;
    const duration = 1200;
    const steps = 30;
    const step = value / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [hasBeenVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-heading font-bold text-2xl sm:text-3xl block">
        {count}+
      </span>
      <span className="text-[#7B7B7B] text-sm font-medium">{suffix}</span>
    </div>
  );
}
