import React from "react";
import Cards from "./Card";

const HowItWorksSection = () => {
  return (
    <div className="text-white md:px-[80px] p-5 bg-[url('/images/background.svg')]">
      <div className="flex flex-col gap-5 md:flex-row md:gap-10 justify-between mb-20">
        <h1 className="text-6xl font-medium">How it works</h1>
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

