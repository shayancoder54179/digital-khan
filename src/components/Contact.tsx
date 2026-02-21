"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const WHATSAPP_NUMBER = "971506926298";

function buildWhatsAppUrl(name: string, email: string, message: string) {
  const text = `New enquiry from ${name}\nEmail: ${email}\nMessage: ${message}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function Contact() {
  const ref = useRef<HTMLElement>(null);
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameTrim = name.trim() || "—";
    const emailTrim = email.trim() || "—";
    const messageTrim = message.trim() || "—";
    const url = buildWhatsAppUrl(nameTrim, emailTrim, messageTrim);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 bg-[var(--dk-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-[#222222] text-3xl sm:text-4xl mb-4">
            Ready To Get More Clients Online?
          </h2>
          <p className="text-[#7B7B7B] text-base sm:text-lg">
            Tell me about your business and I will get back to you within 24 hours. No commitment, just a conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          <Card className="rounded-xl border border-[#e5e5e5] bg-white p-6 w-full">
            <CardContent className="p-0">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[#222222] block mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border-[#e5e5e5] bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[#222222] block mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border-[#e5e5e5] bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-[#222222] block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-[#e5e5e5] bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-[#7B7B7B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
                  />
                </div>
                {submitted && (
                  <p className="text-sm text-green-600 font-medium">
                    Opened in WhatsApp — we&apos;ll be in touch!
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#222222] hover:bg-[#333333] text-white font-medium"
                >
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 w-full">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#222222] hover:bg-[#333333] text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 transition-colors w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <p className="text-[#7B7B7B] text-sm">
              I respond within 24 hours
            </p>
            <p className="text-[#7B7B7B] text-sm">
              Or email us directly:{" "}
              <a
                href="mailto:shayan@digitalkhan.dev"
                className="text-[#222222] font-medium underline underline-offset-2 hover:text-[#333333] transition-colors"
              >
                shayan@digitalkhan.dev
              </a>
            </p>
            <p className="text-[#7B7B7B] text-sm">
              Based in Dubai, working with clients across UAE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
