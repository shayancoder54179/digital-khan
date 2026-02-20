"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export function Tagline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.05 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => { if (inView) setIsVisible(true); }, [inView]);

  return (
    <section className="py-12 bg-[var(--dk-bg)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#222222] font-medium text-center max-w-3xl mx-auto text-lg"
        >
          Thousands of buyers are searching for properties online right now. The question is — will they find you or your competitor?
        </motion.p>
      </div>
    </section>
  );
}
