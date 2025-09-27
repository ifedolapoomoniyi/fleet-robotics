"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const progressData = [
  {
    percentage: "30",
    description: "Ship the first live demo and launch community channels.",
    fillHeight: 130,
  },
  {
    percentage: "7/20",
    description: "Onboard 10-20 external robots with Fleet IDs.",
    fillHeight: 247,
  },
  {
    percentage: "10",
    description: "Use the demo as a wedge to kick off investor traction.",
    fillHeight: 60,
  },
];

export const WhyNowSection = () => {
  return (
    <section className="relative mt-40 w-full bg-black border-t border-b border-[#1a1a1a] py-16 md:py-24">
      <img
        className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        alt="Background"
        src="/images/background.svg"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="opacity-70 font-semibold text-white text-sm md:text-base lg:text-[18.7px] tracking-[-0.37px] leading-tight lg:leading-[18.7px] mb-4 md:mb-6 lg:mb-7">
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
          <p className="font-normal text-sm md:text-base lg:text-[18.7px] leading-[normal] max-w-sm md:max-w-md lg:max-w-[463px] mx-auto text-[#ffffffcc]">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 max-w-4xl mx-auto">
            {progressData.map((item, index) => (
              <Card
                key={index}
                className="w-full max-w-[247px] mx-auto h-64 md:h-80 lg:h-[387px] bg-[#1e1e1e] border-none rounded-lg overflow-hidden"
              >
                <CardContent className="relative p-0 h-full">
                  {/* White fill animation */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: item.fillHeight }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="absolute bottom-0 left-0 w-full bg-white opacity-20 lg:opacity-100"
                  >

                    {/* 🔥 Gradient line that caps the fill */}
                    <div className="absolute top-0 left-0 w-full h-[10px]">
                      {/* blurred glow */}
                                          <div className="top-0 left-[90px] w-[220px] md:w-[600px] lg:w-[2811px] h-2.5 rounded-[1405.57px/5.09px] border-[#ff3604] blur-[29.2px] bg-[linear-gradient(90deg,rgba(153,32,2,0)_0%,rgba(255,54,4,1)_50%,rgba(153,32,2,0)_100%)] absolute border-[1.33px] border-solid" />
                    <div className="top-px left-[91px] w-[200px] md:w-[550px] lg:w-[2659px] h-[15px] bg-[#ff3604] rounded-[1329.33px/7.33px] blur-[10.67px] opacity-50 absolute border-[1.33px] border-solid" />
                      {/* <div className="absolute inset-0 h-[10px] rounded-full blur-[12px] bg-gradient-to-r from-transparent via-[#ff3604] to-transparent" /> */}
                      {/* solid core */}

                      <div className="absolute inset-0 top-1/10 -translate-y-1/2 h-[3px] bg-[#ff3604] opacity-80" />
                    </div>
                  </motion.div>

                  {/* Percentage directly above the line */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.4 }}
                    style={{ bottom: item.fillHeight + 14 }} // just above the line
                    className="absolute left-1/2 transform -translate-x-1/2"
                  >
                    <div className="[font-family:'Chakra_Petch',Helvetica] font-normal text-white text-lg md:text-xl lg:text-[18.7px] text-center tracking-[-0.56px] leading-[normal]">
                      {index === 1 ? (
                        <>
                          <span className="text-white">
                            {item.percentage.split("/")[0]}/
                          </span>
                          <span className="text-[#ffffff66]">
                            {item.percentage.split("/")[1]}
                          </span>
                        </>
                      ) : (
                        <>
                          {item.percentage}
                          <span className="opacity-50 text-xs md:text-sm lg:text-[10.7px] ml-1">
                            %
                          </span>
                        </>
                      )}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Descriptions below cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {progressData.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[247px] mx-auto font-normal text-white text-sm md:text-base lg:text-[18.7px] text-center"
              >
                {item.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
