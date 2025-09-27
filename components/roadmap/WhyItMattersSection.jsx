import React from "react";

export const WhyItMattersSection = () => {
  return (
    <section className="relative w-full mt-16 mb-24 md:mt-24 lg:mt-[166.7px] min-h-[400px] md:min-h-[600px] lg:h-[798.67px] rounded-[10.67px] overflow-hidden">
      {/* Background frame */}
      <img
        className="absolute top-0 left-0 w-full object-cover h-full p lg:block transform rotate-180"
        src="/images/r_background.svg"
        alt="Frame"
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 w-full max-w-5xl mx-auto px-4 md:px-8 pt-16 lg:pt-[163px]">
        {/* Left content */}
        <div className="flex-1">
          <h1 className="mt-[-1.33px]  font-allianceNo2 font-medium text-white text-2xl md:text-4xl lg:text-[80.3px] text-center lg:text-center tracking-tight leading-tight md:leading-[50px] lg:leading-[85.3px] mb-8 lg:mb-0">
            Robots don&apos;t need jobs. They just need wallets. Fleet is the
            solution.
          </h1>
          <div className="flex justify-center mt-6 items-center gap-1.5">
            <div className="cursor-pointer w-60 p-3.5 bg-white rounded-sm flex justify-center items-center gap-2.5">
              <div className="justify-start text-black text-lg font-medium ">
                Explore the Marketplace
              </div>
            </div>

            <div className="w-12 h-12 lg:w-[49.33px] lg:h-[54.33px] bg-white rounded-[2.67px] overflow-hidden flex items-center justify-center">
              <div className="w-3 h-4 lg:w-[11px] lg:h-[17px] flex flex-col gap-[2.7px]">
                <div className="w-1 h-1 bg-[#ff3604]" />
                <div className="ml-2 lg:ml-[6.7px] w-1 h-1 bg-[#ff3604]" />
                <div className="w-1 h-1 bg-[#ff3604]" />
              </div>
            </div>
          </div>
        </div>

   
      </div>

      {/* Right-side big image */}
      <img
        className="absolute top-0  right-0 w-1/2 h-full object-cover hidden lg:block"
        src="/images/roboruk-1.svg"
        alt="Roboruk"
      />
    </section>
  );
};
