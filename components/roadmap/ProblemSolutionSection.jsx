"use client";

import React, { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { motion, useInView, useAnimation } from "framer-motion";

export const ProblemSolutionSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  if (inView) controls.start("visible");

  const problemItems = [
    { text: "Robots are doing real work but have", highlight: " no way to get paid.", bgColor: "bg-[#1d1d1d]" },
    { text: "Operators use closed systems - there's no ", highlight: "open standard", additionalText: " to onboard fleets.", bgColor: "bg-[#222222]" },
    { text: "Data from robots is locked away when it should be ", highlight: "live and tradeable.", bgColor: "bg-[#1d1d1d]" },
  ];

  const solutionItems = [
    { title: "Fleet IDs", description: "→  a wallet + passport for every robot. Ownership, operator, reputation.", bgColor: "bg-[#ff3300]" },
    { title: "Marketplace", description: "→  Book or tip a robot directly in crypto.", bgColor: "bg-[#ed2f00]" },
    { title: "Data Layer", description: "→ robots stream telemetry (GPS, sensors, video) on-chain.", bgColor: "bg-[#ff3300]" },
    { title: "Infrastructure", description: "→  operators stake, fleets connect to hubs, insurance pools cover usage.", bgColor: "bg-[#ed2f00]" },
  ];

  const DotPattern = ({ color }) => (
    <div className="relative w-[10.67px] h-[17.33px]">
      <div className={`absolute top-0 left-0 w-1 h-1 ${color}`} />
      <div className={`absolute top-[13px] left-0 w-1 h-1 ${color}`} />
      <div className={`absolute top-[7px] left-[7px] w-1 h-1 ${color}`} />
    </div>
  );

  return (
    <section ref={sectionRef} className="relative w-full h-auto overflow-hidden border-t border-b border-[#1a1a1a] mt-16 md:mt-24 lg:mt-[133.3px]">
      <div className="absolute top-0 right-0   w-1/2 h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(121,24,0,1)_53%,rgba(241,48,0,1)_100%)]" />
      <img className="absolute top-[300px] left-0 w-[1779px] h-[666px] hidden md:flex pointer-events-none" alt="Group" src="/images/fleetgrid.png" />

      <div className="grid  grid-cols-1 lg:grid-cols-2 h-full ">
        {/* Left Problem Column */}
        <div className="relative  bg-black lg:border-r border-[#1a1a1a] flex flex-col overflow-hidden">
          <div className="absolute top-[90px] right-0 w-[430px] h-[663px] overflow-hidden hidden md:flex">
            <motion.img
              alt="Dark canister"
              src="/images/untitled-2-1.png"
              className="absolute w-[430px] h-[663px]"
              initial={{ x: "100%" }} 
              animate={controls}
              variants={{
                visible: { x: 0, transition: { duration: 1, ease: "easeOut" } },
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col mt-16 md:mt-20 lg:mt-[606px]">
            <div className="flex ml-4 md:ml-14 mb-4 md:mb-8 items-center gap-2 left-4 md:left-8 lg:left-[53px]">
              <DotPattern color="bg-[#7a7a7a]" />
              <h2 className="[font-family:'Chakra_Petch',Helvetica] font-normal text-white text-lg md:text-xl lg:text-[26.7px] tracking-[-0.80px]">
                Problem
              </h2>
            </div>
            {problemItems.map((item, index) => (
              <Card key={index} className={`${item.bgColor} border-none rounded-none`}>
                <CardContent className="flex flex-col items-start gap-6 px-4 md:px-8 lg:px-[53.33px] py-6 md:py-8">
                  <p className="[font-family:'Alliance_No.2-Regular',Helvetica] font-normal text-sm md:text-base lg:text-[17px] tracking-[-0.56px] leading-relaxed lg:leading-[22.4px]">
                    <span className="text-[#878787] tracking-[-0.10px]">{item.text}</span>
                    <span className="text-white tracking-[-0.10px]">{item.highlight}</span>
                    {item.additionalText && <span className="text-[#878787] tracking-[-0.10px]">{item.additionalText}</span>}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Solution Column */}
        <div className="relative flex flex-col overflow-hidden">
          {/* MASK DIV for right image */}
          <div className="hidden md:flex absolute top-[90px] left-0 w-[430px] h-[666px] overflow-hidden">
            <motion.img
              alt="Light canister"
              src="/images/untitled-2.png"
              className="absolute w-[430px] h-[666px]"
              initial={{ x: "-100%" }} 
              animate={controls}
              variants={{
                visible: { x: 0, transition: { duration: 1, ease: "easeOut" } },
              }}
            />
          </div>

          <div className="relative z-10 flex items-center gap-2 top-12 md:top-8 lg:top-[652px] left-4 md:left-8 lg:left-[53px] mt-[-40px]">
            <DotPattern color="bg-[#ff3604]" />
            <h2 className="font-chakrapetch font-normal text-white text-lg md:text-xl lg:text-[26.7px] tracking-[-0.80px]">
              The Fleet Solution
            </h2>
          </div>

          <div className="relative z-10 flex flex-col mt-16 md:mt-20 lg:mt-[678px]">
            {solutionItems.map((item, index) => (
              <Card key={index} className={`${item.bgColor} border-none rounded-none`}>
                <CardContent className="flex flex-col lg:flex-row lg:h-[86.67px] items-start lg:items-center gap-2 lg:gap-4 px-4 md:px-8 lg:px-[53.33px] py-6 md:py-8">
                  <h3 className="font-chakrapetch font-semibold text-white text-lg md:text-xl lg:text-[26.7px] tracking-[-1.07px] leading-tight lg:leading-[39.0px] lg:whitespace-nowrap">
                    {item.title}
                  </h3>
                  <p className="opacity-75 font-normal text-white text-sm md:text-base lg:text-[18.7px] tracking-[-0.56px] leading-[normal]">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
