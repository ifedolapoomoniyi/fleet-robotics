import React from "react";

export const RoboticsMarketSection = () => {
  const navigationItems = [
    { label: "ABOUT" },
    { label: "TEAM" },
    { label: "ROADMAP" },
    { label: "TECHNOLOGY" },
  ];

  return (
    <section className="relative w-full h-auto min-h-[400px] md:min-h-[500px] lg:h-[670px] mt-16 md:mt-24 lg:mt-[133.3px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black" />

      <img
        className="absolute bottom-8 md:bottom-12 lg:top-[345px] left-1/2 transform -translate-x-1/2 w-32 md:w-40 lg:w-[205px] h-6 md:h-8 lg:h-[34px]"
        alt="Frame"
        src="/frame-2147258694.svg"
      />

      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl lg:max-w-[1691px] h-32 md:h-48 lg:h-[318px] object-contain"
        alt="Untitled"
        src="/untitled-1.png"
      />

      <img
        className="absolute top-8 md:top-12 lg:top-[82px] left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-[171px] h-8 md:h-10 lg:h-[52px]"
        alt="Logo"
        src="/logo.png"
      />

      <div className="absolute top-24 md:top-32 lg:top-[200px] left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center gap-2 lg:gap-[6.67px] px-4">
        <div className="opacity-50 [font-family:'Alliance_No.2-Regular',Helvetica] font-normal text-white text-sm md:text-base lg:text-[18.7px] tracking-[-0.56px] leading-normal">
          Discover
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className="[font-family:'Chakra_Petch',Helvetica] font-medium text-white text-sm md:text-base lg:text-[18.7px] tracking-[-0.56px] leading-normal hover:opacity-80 transition-opacity cursor-pointer px-2 py-1"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="absolute top-40 md:top-48 lg:top-[286px] left-1/2 transform -translate-x-1/2 w-full max-w-xs md:max-w-sm lg:w-[277px] opacity-40 [font-family:'Alliance_No.2-Regular',Helvetica] font-normal text-white text-xs md:text-sm lg:text-[18.7px] text-center tracking-[-0.56px] leading-normal px-4">
        ©2025 Copyright Fleet Robotics. All rights reserved.
      </div>
    </section>
  );
};
