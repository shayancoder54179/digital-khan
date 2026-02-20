import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Tagline } from "@/components/Tagline";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { WhoIWorkWith } from "@/components/WhoIWorkWith";
import { WhyNotWordPress } from "@/components/WhyNotWordPress";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tagline />
        <About />
        <Portfolio />
        <Testimonials />
        <WhoIWorkWith />
        <WhyNotWordPress />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
