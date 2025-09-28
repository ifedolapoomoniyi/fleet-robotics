import About from "@/components/home/About";
import Card from "@/components/home/Card";
import CTASection from "@/components/home/CTASection";
import FundsSection from "@/components/home/FundsSection";
import Hero from "@/components/home/Hero";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import Testimonials from "@/components/home/Testimonials";
import WhatWeOffer from "@/components/home/WhatWeOffer";

export default function Page() {
  return (
    <main>
      <Hero/>
      <About/>
      <HowItWorksSection/>
      <WhatWeOffer/>
      <Testimonials/>
      <FundsSection/>
      <CTASection/>
    </main>
  );
}
