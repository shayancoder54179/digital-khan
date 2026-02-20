"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const comparisons = [
  {
    label: "Page Speed",
    wordpress: "Slow with plugins",
    better: "Blazing fast",
  },
  {
    label: "SEO",
    wordpress: "Limited",
    better: "Built-in technical SEO",
  },
  {
    label: "Security",
    wordpress: "Constant updates needed",
    better: "Secure by default",
  },
  {
    label: "Design",
    wordpress: "Template limited",
    better: "Built from scratch",
  },
  {
    label: "Maintenance",
    wordpress: "Ongoing plugin management",
    better: "Clean and simple",
  },
  {
    label: "Technology",
    wordpress: "Used by small blogs",
    better: "Used by Netflix, Nike, Airbnb",
  },
];

export function WhyNotWordPress() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-80px",
  });

  return (
    <section
      id="why-not-wordpress"
      ref={ref}
      className="py-24 bg-[var(--dk-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-[#222222] text-3xl sm:text-4xl mb-4">
            Why Businesses Are Leaving WordPress Behind
          </h2>
          <p className="text-[#7B7B7B] text-base sm:text-lg max-w-2xl mx-auto">
            Your website should be making you money, not causing you headaches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-[#e5e5e5]"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-[140px] sm:w-[160px] text-left py-4 px-4 sm:px-6 text-sm font-medium text-[#7B7B7B] bg-[var(--dk-bg)] border-b border-[#e5e5e5]">
                  {/* Row header placeholder */}
                </th>
                <th className="py-4 px-4 sm:px-6 text-sm font-semibold text-white bg-[#222222] border-b border-[#333333]">
                  WordPress
                </th>
                <th className="py-4 px-4 sm:px-6 text-sm font-semibold text-white bg-[#166534] border-b border-[#15803d]">
                  What I Build
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr
                  key={row.label}
                  className="border-b border-[#e5e5e5] last:border-b-0"
                >
                  <td className="py-4 px-4 sm:px-6 text-sm font-medium text-[#222222] bg-[var(--dk-bg)]">
                    {row.label}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-sm text-white/90 bg-[#222222]">
                    {row.wordpress}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-sm text-white bg-[#166534]">
                    {row.better}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
