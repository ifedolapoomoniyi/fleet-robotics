import React from "react";

export const  EconomicRailSection = () => {
  return (
    <section className="relative bg-[url('/images/what-we-do-bg.svg')] bg-cover  relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute top-16  left-0 w-full h-[400px] md:h-[600px] lg:h-[779px] " />
      <div className="absolute top-64 md:top-80 lg:top-[200px] left-4 md:left-16 right-4 md:right-16 h-48 md:h-64 lg:h-[105px] " />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-16 md:-translate-y-24 lg:-translate-y-[130px] flex flex-col items-center gap-8 md:gap-12 lg:gap-[53.33px] px-4">
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[33.33px] w-full">
          <h1 className="max-w-xs md:max-w-4xl lg:w-[886.67px] font-allianceNo2 font-normal text-2xl md:text-5xl lg:text-[85.3px] text-center tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.12px] leading-tight md:leading-[60px] lg:leading-[85.3px] mt-[-1.33px]">
            <span className="font-medium text-white tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4.37px]">
              The Economic Rail For{" "}
            </span>
            <span className="font-allianceNo2 font-extralight text-[#ffffffd9] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4.37px]">
              the Machine Economy.
            </span>
          </h1>
        </div>
        <div className="inline-flex justify-start items-center gap-1.5">
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

        {/* <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-[5.33px]">
          <Button className="w-full sm:w-auto px-4 md:px-6 lg:px-[10.67px] py-3 lg:py-[13.33px] bg-white text-black hover:bg-gray-100 rounded-[2.67px] font-allianceNo2 font-medium text-sm md:text-base lg:text-[18.7px] tracking-[-0.56px]">
            Explore the Marketplace
          </Button>

          <div className="w-12 h-12 lg:w-[49.33px] lg:h-[49.33px] bg-white rounded-[2.67px] overflow-hidden flex items-center justify-center">
            <div className="w-3 h-4 lg:w-[11px] lg:h-[17px] flex flex-col gap-[2.7px]">
              <div className="w-1 h-1 bg-[#ff3604]" />
              <div className="ml-2 lg:ml-[6.7px] w-1 h-1 bg-[#ff3604]" />
              <div className="w-1 h-1 bg-[#ff3604]" />
            </div>
          </div>
        </div> */}
      </div>

      <div className="  absolute cursor-pointer bottom-4 md:bottom-8  left-1/2 transform -translate-x-1/2 w-48 md:w-[261px] h-16 md:h-[82px]  flex-col gap-[0.1px] hidden sm:flex">
        <img
          className="mx-auto w-6 h-12 md:w-[29.92px] md:h-[59.19px]"
          alt="Noun mouse scroll"
          src="/images/noun-mouse-scroll.svg"
        />
        <div className="h-6 md:h-[23px] w-full self-center font-allianceNo2 font-normal text-white text-sm md:text-[18.7px] text-center tracking-[-0.56px] leading-[normal]">
          Scroll &amp; Explore more
        </div>
      </div>
    </section>
  );
};
