"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    name: "James Harrington",
    tags: ["Real Estate", "Demo Project"],
    description:
      "A luxury real estate broker website built to convert high-net-worth visitors into enquiries — premium design, fast loading and built to make any broker stand out in a crowded market.",
    link: "https://james-harrington-realestate.vercel.app",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    accent: "amber",
  },
  {
    name: "Bhadeya",
    tags: ["Service Business", "Live Project"],
    description:
      "A UAE business that was getting zero leads from their old website. After the rebuild — leads coming in daily, better Google visibility and Google Ads performing stronger than ever.",
    link: "https://bhadeya.com",
    tech: ["Next.js", "Tailwind", "shadcn/ui"],
    accent: "blue",
  },
  {
    name: "Exaim",
    tags: ["SaaS / B2B", "Live Project"],
    description:
      "A B2B platform that needed to turn website visitors into demo bookings. Result — clients now reach out faster, understand the product better and the team can update the site in minutes instead of hours.",
    link: "https://exaim.ai",
    tech: ["Next.js", "React", "TypeScript"],
    accent: "purple",
  },
];

export function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-80px",
  });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-24 bg-[var(--dk-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-[#222222] text-3xl sm:text-4xl mb-4">
            Real Results For Real Businesses
          </h2>
          <p className="text-[#7B7B7B] text-lg">
            Every website I build has one goal — to grow your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card
                  className={`rounded-xl bg-[#222222] border-0 text-white overflow-hidden h-full group cursor-pointer transition-shadow duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 ${
                    project.accent === "amber"
                      ? "border-t-amber-500"
                      : project.accent === "blue"
                        ? "border-t-blue-500"
                        : "border-t-purple-500"
                  }`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className={`rounded-full border-0 ${
                            project.accent === "amber"
                              ? "bg-amber-500/30 text-amber-100"
                              : project.accent === "blue"
                                ? "bg-blue-500/30 text-blue-100"
                                : "bg-purple-500/30 text-purple-100"
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-white">
                      {project.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="rounded-full bg-white/10 text-white border-0"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-white">
                      Visit site
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
