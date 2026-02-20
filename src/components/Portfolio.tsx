"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "James Harrington",
    tags: ["Real Estate", "Demo Project"],
    description:
      "A luxury real estate broker website built to convert high-net-worth visitors into enquiries — premium design, fast loading and built to make any broker stand out in a crowded market.",
    link: "https://james-harrington-realestate.vercel.app",
    buttonText: "View Demo Site",
    image: "james.png",
  },
  {
    name: "Bhadeya",
    tags: ["Service Business", "Live Project"],
    description:
      "A UAE business that was getting zero leads from their old website. After the rebuild — leads coming in daily, better Google visibility and Google Ads performing stronger than ever.",
    link: "https://bhadeya.com",
    buttonText: "View Live Site",
    image: "bhadeya.png",
  },
  {
    name: "Exaim",
    tags: ["SaaS / B2B", "Live Project"],
    description:
      "A B2B platform that needed to turn website visitors into demo bookings. Result — clients now reach out faster, understand the product better and the team can update the site in minutes instead of hours.",
    link: "https://exaim.ai",
    buttonText: "View Live Site",
    image: "exaim.png",
  },
];

export function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.05,
  });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // If section is already in view on page load, show immediately without waiting for scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasBeenVisible(true);
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) setHasBeenVisible(true);
  }, [inView]);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-16 bg-[var(--dk-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={hasBeenVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-[#222222] text-3xl sm:text-4xl mb-4">
            Real Results For Real Businesses
          </h2>
          <p className="text-[#7B7B7B] text-base sm:text-lg">
            Every website I build has one goal — to grow your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              animate={hasBeenVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-[8px]"
            >
              {/* TOP SECTION - Light gray background with image */}
              <div className="bg-[#F5F5F5] p-4">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={`/${project.image}`}
                    alt={`${project.name} website screenshot`}
                    fill
                    className="object-contain rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
              </div>

              {/* BOTTOM SECTION - Dark background with content */}
              <div className="bg-[#1a1a1a] p-6">
                {/* Tags row */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="rounded-full border-0 bg-white/10 text-white/70"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Project name */}
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                {/* Full width outlined button */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-6 rounded-full border-2 border-white text-white font-medium transition-all duration-300 hover:bg-white hover:text-[#1a1a1a]"
                >
                  {project.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
