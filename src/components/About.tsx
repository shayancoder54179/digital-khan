"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Framer Motion",
  "Supabase",
  "Technical SEO",
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-80px",
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 bg-[var(--dk-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222]">
              I Build Websites That Work As Hard As You Do
            </h2>
            <p className="text-[#7B7B7B] text-base leading-relaxed">
              Most websites look decent but do nothing. I build websites designed to make your business the obvious choice — fast, professional and built to bring you clients consistently. Based in Dubai, I work with brokers, agencies and businesses who are serious about their online presence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="rounded-xl border-0 bg-[#222222] p-6 shadow-lg">
              <CardContent className="p-0">
                <p className="text-white/80 text-sm font-medium mb-4">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <Badge
                      key={tech}
                      className="rounded-full bg-white/15 text-white font-medium px-3 py-1.5 border border-white/20 hover:bg-white/25 backdrop-blur-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
