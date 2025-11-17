import React from "react";
import Cards from "./Card";

const HowItWorksSection = () => {
  return (
    <div className="text-white lg:px-[80px] pt-15 p-5 pb-0 bg-[url('/images/background.svg')] min-h-[800px] flex flex-col justify-between w-full border border-[#1A1A1A] border-b-0">
      <div className="flex flex-col gap-5 md:flex-row md:gap-10 justify-between mb-20">
        <h1 className="text-4xl md:text-6xl font-medium">How it works</h1>
        <div className="max-w-[400px] opacity-80">
          Book delivery drones, cleaning bots, and industrial machines
          instantly. Operators earn crypto. Jobs are managed fully on-chain with
          trust and transparency.
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default HowItWorksSection;

