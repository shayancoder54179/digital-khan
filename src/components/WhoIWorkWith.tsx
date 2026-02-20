"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { User, Building2, Rocket } from "lucide-react";

const clients = [
  {
    icon: User,
    title: "Real Estate Brokers",
    text: "You're competing against hundreds of brokers on Property Finder. A personal website makes you the premium choice before they even meet you.",
  },
  {
    icon: Building2,
    title: "Small Businesses",
    text: "Your business deserves more than a slow outdated website. Get one that actually brings you clients and represents your brand properly.",
  },
  {
    icon: Rocket,
    title: "Startups & SaaS",
    text: "Your website is your best salesperson. I build B2B websites that explain your product clearly and turn visitors into demo bookings.",
  },
];

export function WhoIWorkWith() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-80px",
  });

  return (
    <section
      id="who-i-work-with"
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
            Is This For You?
          </h2>
          <p className="text-[#7B7B7B] text-lg max-w-2xl mx-auto">
            I work best with people who are serious about growing their business online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((client, i) => {
            const IconComponent = client.icon;
            return (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Card className="rounded-xl bg-white border border-[#e5e5e5] h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 flex flex-col items-start h-full">
                    <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-[#222222]/10 to-[#222222]/5 border border-[#222222]/10">
                      <IconComponent className="w-8 h-8 text-[#222222]" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#222222] mb-4">
                      {client.title}
                    </h3>
                    <p className="text-[#7B7B7B] text-base leading-relaxed">
                      {client.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
