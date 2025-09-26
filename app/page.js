import About from "@/components/home/About";
import Card from "@/components/home/Card";
import Hero from "@/components/home/Hero";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhatWeOffer from "@/components/home/WhatWeOffer";

export default function Page() {
  return (
    <main>
      <Hero/>
      <About/>
      <HowItWorksSection/>
      <WhatWeOffer/>
    </main>
  );
}
