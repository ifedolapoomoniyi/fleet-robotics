import React from "react";

export const CallToActionSection = () => {
  return (
    <section className="w-full flex justify-center mt-16 md:mt-24 lg:mt-[117.3px]">
      <div className="w-full max-w-[1778.67px] grid grid-cols-1 lg:grid-cols-2 border-t border-b border-[#1a1a1a]">
        {/* Left side */}
        <div className="flex justify-center py-8 md:py-12 lg:py-[53.3px] px-4 lg:pl-[53.3px]">
          <h2 className="font-allianceNo2 font-medium text-white text-3xl md:text-5xl lg:text-[85.3px] text-center tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.12px] leading-tight md:leading-[60px] lg:leading-[85.3px]">
            Why it matters
          </h2>
        </div>

        {/* Right side */}
        <div className="border-t lg:border-t-0 lg:border-l border-[#1a1a1a]">
          <div className="p-4 md:p-8 lg:p-[53.3px] space-y-8 md:space-y-16 lg:space-y-[232px]">
            <p className="max-w-full opacity-70 [font-family:'Chakra_Petch',Helvetica] font-normal text-white text-sm md:text-base lg:text-[18.7px] tracking-[-0.56px] leading-normal">
              Robots aren&apos;t sci-fi anymore. Delivery bots are rolling on
              campuses, drones map construction sites, Unitree dogs are going
              viral online.
              <br />
              But none of them can plug into an open network. They can&apos;t
              take a payment. They can&apos;t hold an ID. They can&apos;t build
              a reputation.
            </p>

            <div className="flex items-center gap-2">
              <span className="[font-family:'Chakra_Petch',Helvetica] font-normal text-white text-sm md:text-base lg:text-[18.7px] tracking-[-0.56px] leading-normal">
                Fleet is the solution.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
