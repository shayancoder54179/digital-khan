"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "We were getting absolutely no leads from our old website. Since the rebuild we get enquiries daily, our Google presence has grown consistently and our ads are working better than ever. Best investment we made.",
    name: "Bhadeya",
    label: "UAE Contracting Company",
  },
  {
    quote:
      "The difference was immediate. Clients reach out faster, they understand our product better when they land on the site and updating content no longer takes half a day. We should have done this sooner.",
    name: "Exaim",
    label: "AI EdTech Platform, UAE",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-80px",
  });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 bg-[var(--dk-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-[#222222] text-3xl sm:text-4xl mb-12 text-center"
        >
          Don't Take My Word For It
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="rounded-xl bg-white border border-[#e5e5e5] h-full relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute top-6 left-8 text-7xl font-serif text-gray-300 leading-none">
                    &ldquo;
                  </div>
                  <p className="text-[#222222] text-base sm:text-lg leading-relaxed mb-6 relative z-10">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-[#e5e5e5] pt-4">
                    <div className="font-heading font-bold text-[#222222] text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-[#7B7B7B] text-sm">
                      {testimonial.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
