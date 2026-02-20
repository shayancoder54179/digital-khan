"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Tagline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-80px",
  });

  return (
    <section className="py-12 bg-[var(--dk-bg)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#222222] font-medium text-center max-w-3xl mx-auto text-lg"
        >
          Thousands of buyers are searching for properties online right now. The question is — will they find you or your competitor?
        </motion.p>
      </div>
    </section>
  );
}
