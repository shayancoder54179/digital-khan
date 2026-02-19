"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Starter",
    price: "AED 4,500",
    popular: false,
    features: [
      "5 pages, modern design, mobile optimized",
      "Contact form + WhatsApp button",
      "Basic on-page SEO",
      "2 week delivery",
    ],
  },
  {
    name: "Growth",
    price: "AED 6,500",
    popular: true,
    features: [
      "Up to 8 pages",
      "Copywriting included",
      "Google Search Console setup",
      "Technical SEO audit",
      "2-3 week delivery",
    ],
  },
  {
    name: "Premium",
    price: "AED 9,500",
    popular: false,
    features: [
      "Up to 12 pages",
      "Everything in Growth",
      "Blog setup for SEO",
      "Featured listings section",
      "1 month post-launch support",
      "3 week delivery",
    ],
  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-80px",
  });

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-[var(--dk-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-[#222222] text-3xl sm:text-4xl mb-12"
        >
          What I Offer
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ scale: 1.02 }}
              className={tier.popular ? "relative md:-mt-2 md:mb-2" : ""}
            >
              <Card
                className={`rounded-xl h-full flex flex-col border bg-white ${
                  tier.popular
                    ? "shadow-lg border-[#222222]/20 ring-2 ring-[#222222]/10"
                    : "border-[#e5e5e5]"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="rounded-full bg-[#222222] text-white px-3 py-1 text-xs font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <h3 className="font-heading font-bold text-xl text-[#222222]">
                    {tier.name}
                  </h3>
                  <p className="text-2xl font-semibold text-[#222222]">
                    {tier.price}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  <ul className="space-y-2 text-sm text-[#7B7B7B]">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-[#222222] mt-0.5">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    asChild
                    className="w-full rounded-full bg-[#222222] hover:bg-[#333333] text-white font-medium"
                  >
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
