"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const progressData = [
  {
    percentage: "30",
    description: "Ship the first live demo and launch community channels.",
    // fillHeight: 130,
    fillHeight: { mobile: 130, desktop: 130 },
  },
  {
    percentage: "70",
    description: "Onboard 10-20 external robots with Fleet IDs.",
    // fillHeight: 200,
    fillHeight: { mobile: 180, desktop: 270 },
  },
  {
    percentage: "10",
    description: "Use the demo as a wedge to kick off investor traction.",
    // fillHeight: 50,
    fillHeight: { mobile: 50, desktop: 50 },
  },
];

export const WhyNowSection = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section className="relative mt-40 w-full bg-black border-t border-b border-[#1a1a1a] py-16 md:py-24">
      {/* Background (desktop only) */}
      <img
        className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        alt="Background"
        src="/images/background.svg"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="opacity-70 font-semibold text-white text-sm md:text-base lg:text-[18.7px] mb-4 md:mb-6 lg:mb-7">
            WHY NOW
          </div>

          <h1 className="font-normal text-2xl md:text-4xl lg:text-[90.7px] text-center tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.44px] leading-tight md:leading-[50px] lg:leading-[100px] max-w-xs md:max-w-lg lg:max-w-[677px] mx-auto">
            <span className="font-light text-[#ffffffbf]">
              Robotics market projected at
            </span>
            <span className="font-medium text-white"> $283B by 2030.</span>
          </h1>
        </header>

        {/* Sub-text */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="font-normal text-sm md:text-base lg:text-[18.7px] max-w-sm md:max-w-md lg:max-w-[463px] mx-auto text-[#ffffffcc]">
            Service robots already delivering{" "}
            <span className="font-semibold text-white">milions of orders.</span>
            <br />
            AI gives machines intelligence. Fleet gives them{" "}
            <span className="font-semibold text-white">wallets.</span>
          </p>
        </div>

        {/* Progress Cards */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="opacity-70 font-semibold text-white text-sm md:text-base lg:text-[18.7px] text-center mb-6 md:mb-8 lg:mb-12">
            PROGRESS TOWARDS NEAR-TERM GOALS
          </div>

          {/* Wrapper for horizontal scroll on small screens */}
        <div className="w-full overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-950">
            <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {progressData.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 md:flex-shrink  flex flex-col items-center w-[247px] md:w-full mx-auto"
                >
                  {/* Card */}
                  <Card className="w-full h-64 md:h-80 lg:h-[387px] bg-[#1e1e1e] border-none rounded-lg overflow-hidden">
                    <CardContent className="relative p-0 h-full">
                      {/* White fill animation */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height: isDesktop
                            ? item.fillHeight.desktop
                            : item.fillHeight.mobile,
                        }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="absolute bottom-0 left-0 w-full bg-white opacity-100"
                      >
                        {/* Gradient line */}
                        <div className="absolute top-0 left-0 w-full h-[10px]">
                          <div className="top-0 left-[90px] w-[220px] md:w-[600px] lg:w-[2811px] h-2.5 rounded-full border-[#ff3604] blur-[29.2px] bg-[linear-gradient(90deg,rgba(153,32,2,0)_0%,rgba(255,54,4,1)_50%,rgba(153,32,2,0)_100%)] absolute border-[1.33px]" />
                          <div className="top-px left-[91px] w-[200px] md:w-[550px] lg:w-[2659px] h-[15px] bg-[#ff3604] rounded-full blur-[10.67px] opacity-50 absolute border-[1.33px]" />
                          <div className="absolute inset-0 -translate-y-1/2 h-[3px] bg-[#ff3604] opacity-80" />
                        </div>
                      </motion.div>

                      {/* Percentage above line */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.4 }}
                        style={{
                          bottom: isDesktop
                            ? item.fillHeight.desktop + 14
                            : item.fillHeight.mobile + 14,
                        }}
                        className="absolute left-1/2 transform -translate-x-1/2"
                      >
                        <div className="font-allianceNo2 font-normal text-white text-lg md:text-xl lg:text-[18.7px] text-center tracking-[-0.56px] leading-[normal]">
                          {index === 9 ? (
                            <>
                              <span className="text-white">
                                {item.percentage.split("/")[0]}/
                              </span>
                              <span className="text-[#ffffff66]">
                                {item.percentage.split("/")[1]}
                              </span>
                            </>
                          ) : (
                            <span className="font-allianceNo2">
                              {item.percentage}
                              <span className=" font-allianceNo2 opacity-50 text-xs md:text-sm lg:text-[10.7px] ml-1">
                                %
                              </span>
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>

                  {/* Description under card */}
                  <p className="[font-family:'Alliance_No.2-Regular',Helvetica] mt-4 font-normal text-white text-sm md:text-base lg:text-[18.7px] text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
