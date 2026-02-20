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
    priceUSD: "$1,500",
    priceAED: "AED 5,500",
    popular: false,
    tagline: "Get online with a professional website that makes clients take you seriously.",
    description:
      "Get a fast, professional website live in 2 weeks — designed to make your business look credible and convert visitors into leads.",
    features: [
      "5 pages, modern design, mobile optimized",
      "Basic copywriting included (hero, about, services, contact)",
      "Contact form + WhatsApp button",
      "Basic on-page SEO",
      "2 week delivery",
    ],
  },
  {
    name: "Growth",
    priceUSD: "$2,500",
    priceAED: "AED 9,000",
    popular: true,
    tagline: "Get found on Google and turn your website into a lead generation machine.",
    description:
      "Everything in Starter plus Google Search Console setup and technical SEO — so your business actually gets found when people search for you.",
    features: [
      "Up to 8 pages",
      "Full copywriting included (all sections written professionally)",
      "Google Search Console setup",
      "Technical SEO audit",
      "Meta descriptions written for SEO",
      "2-3 week delivery",
    ],
  },
  {
    name: "Premium",
    priceUSD: "$4,000",
    priceAED: "AED 14,500",
    popular: false,
    tagline: "The complete package for businesses serious about dominating online.",
    description:
      "The complete package — a fully optimized website with blog setup for long-term SEO growth and 1 month of support after launch.",
    features: [
      "Up to 12 pages",
      "SEO-optimized copywriting (written with target keywords)",
      "Everything in Growth",
      "Blog setup for long-term SEO",
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
      className="py-16 bg-[var(--dk-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-[#222222] text-3xl sm:text-4xl mb-4">
            Invest In A Website That Actually Works
          </h2>
          <p className="text-[#7B7B7B] text-base sm:text-lg">
            No hidden fees. No vague timelines. Just a website that grows your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    {tier.priceAED}
                    <span className="text-sm font-normal text-[#7B7B7B] ml-1">
                      (~{tier.priceUSD})
                    </span>
                  </p>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  <p className="text-sm font-medium text-[#222222] leading-relaxed">
                    {tier.tagline}
                  </p>
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
