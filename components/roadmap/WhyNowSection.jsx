import React from "react";
import { Card, CardContent } from "./ui/card";

const progressData = [
  {
    percentage: "30",
    description: "Ship the first live demo and launch community channels.",
  },
  {
    percentage: "7/20",
    description: "Onboard 10-20 external robots with Fllet IDs.",
  },
  {
    percentage: "10",
    description: "Use the demo as a wedge to kick off investor traction.",
  },
];

const chartLines = [
  { top: "top-5", width: "w-[33px]", src: "/vector-979.svg" },
  { top: "top-[38px]", width: "w-[19px]", src: "/vector-984.svg" },
  { top: "top-[77px]", width: "w-[19px]", src: "/vector-984.svg" },
  { top: "top-[115px]", width: "w-[19px]", src: "/vector-984.svg" },
  { top: "top-[154px]", width: "w-[19px]", src: "/vector-984.svg" },
  { top: "top-[193px]", width: "w-[19px]", src: "/vector-984.svg" },
  { top: "top-[231px]", width: "w-[19px]", src: "/vector-984.svg" },
  { top: "top-[270px]", width: "w-[19px]", src: "/vector-984.svg" },
  { top: "top-[309px]", width: "w-[19px]", src: "/vector-984.svg" },
  { top: "top-[347px]", width: "w-[19px]", src: "/vector-984.svg" },
  { top: "top-[386px]", width: "w-[19px]", src: "/vector-979.svg" },
  { top: "top-[59px]", width: "w-[33px]", src: "/vector-979.svg" },
  { top: "top-[97px]", width: "w-[33px]", src: "/vector-979.svg" },
  { top: "top-[136px]", width: "w-[33px]", src: "/vector-979.svg" },
  { top: "top-[175px]", width: "w-[33px]", src: "/vector-979.svg" },
  { top: "top-[213px]", width: "w-[33px]", src: "/vector-979.svg" },
  { top: "top-[252px]", width: "w-[33px]", src: "/vector-979.svg" },
  { top: "top-[329px]", width: "w-[33px]", src: "/vector-979.svg" },
  { top: "top-[368px]", width: "w-[33px]", src: "/vector-979.svg" },
];

export const WhyNowSection = () => {
  return (
    <section className="relative w-full bg-black border-t border-b border-[#1a1a1a] py-16 md:py-24">
      <img
        className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        alt="Background"
        src="/images/background.svg"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <header className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="opacity-70 [font-family:'Chakra_Petch',Helvetica] font-semibold text-white text-sm md:text-base lg:text-[18.7px] tracking-[-0.37px] leading-tight lg:leading-[18.7px] mb-4 md:mb-6 lg:mb-7">
            WHY NOW
          </div>

          <h1 className="[font-family:'Alliance_No.2-Light',Helvetica] font-normal text-2xl md:text-4xl lg:text-[90.7px] text-center tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.44px] leading-tight md:leading-[50px] lg:leading-[100px] max-w-xs md:max-w-lg lg:max-w-[677px] mx-auto">
            <span className="font-light text-[#ffffffbf] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4.93px]">
              Robotics market projected at
            </span>
            <span className="font-allianceNo2 font-medium text-white tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4.93px]">
              {" "}
              $283B by 2030.
            </span>
          </h1>
        </header>

        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="[font-family:'Chakra_Petch',Helvetica] font-normal text-sm md:text-base lg:text-[18.7px] tracking-[-0.56px] leading-[normal] max-w-sm md:max-w-md lg:max-w-[463px] mx-auto">
            <span className="text-[#ffffffcc] tracking-[-0.10px]">
              Service robots already delivering
            </span>
            <span className="text-white tracking-[-0.10px]">&nbsp;</span>
            <span className="font-semibold text-white tracking-[-0.10px]">
              milions of orders.
              <br />{" "}
            </span>
            <span className="text-[#ffffffcc] tracking-[-0.10px]">
              AI gives machines intelligence. Fleet gives them
            </span>
            <span className="text-white tracking-[-0.10px]">&nbsp;</span>
            <span className="font-semibold text-white tracking-[-0.10px]">
              wallets.
            </span>
          </p>
        </div>

        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="opacity-70 [font-family:'Chakra_Petch',Helvetica] font-semibold text-white text-sm md:text-base lg:text-[18.7px] tracking-[-0.37px] leading-tight lg:leading-[18.7px] text-center mb-6 md:mb-8 lg:mb-12">
            PROGRESS TOWARDS NEAR-TERM GOALS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 max-w-4xl mx-auto">
            {progressData.map((item, index) => (
              <Card
                key={index}
                className="w-full max-w-[247px] mx-auto h-64 md:h-80 lg:h-[387px] bg-[#1e1e1e] border-none rounded-lg overflow-hidden"
              >
                <CardContent className="relative p-0 h-full">
                  {chartLines.map((line, lineIndex) => (
                    <img
                      key={lineIndex}
                      className={`absolute ${line.top} left-0 ${line.width} h-px hidden lg:block`}
                      alt="Vector"
                      src={line.src}
                    />
                  ))}

                  {index === 0 && (
                    <div className="absolute bottom-0 left-0 w-full h-20 md:h-24 lg:h-[131px] flex flex-col">
                      <img
                        className="w-full h-6 md:h-8 lg:h-[30.99px] mt-[-16px] md:mt-[-20px] lg:mt-[-31.0px] hidden lg:block"
                        alt="Frame"
                        src="/frame-2147258787.svg"
                      />
                      <div className="h-6 w-full self-center relative mt-0 flex items-center justify-center">
                        <div className="[font-family:'Chakra_Petch',Helvetica] font-normal text-white text-lg md:text-xl lg:text-[18.7px] text-center tracking-[-0.56px] leading-[normal]">
                          {item.percentage}
                          <span className="opacity-50 text-xs md:text-sm lg:text-[10.7px] tracking-[-0.32px] ml-1">
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 lg:h-[247px]">
                      <div className="top-8 md:top-10 lg:top-11 absolute left-[-200px] md:left-[-500px] lg:left-[-1328px] w-[400px] md:w-[800px] lg:w-[2901px] h-[15px] hidden lg:block">
                        <img
                          className="top-[-6317px] left-[100px] md:left-[300px] lg:left-[491px] absolute w-[200px] md:w-[500px] lg:w-[1926px] h-px"
                          alt="Line"
                          src="/line-104-1.svg"
                        />
                        <div className="top-0 left-[90px] w-[220px] md:w-[600px] lg:w-[2811px] h-2.5 rounded-[1405.57px/5.09px] border-[#ff3604] blur-[29.2px] bg-[linear-gradient(90deg,rgba(153,32,2,0)_0%,rgba(255,54,4,1)_50%,rgba(153,32,2,0)_100%)] absolute border-[1.33px] border-solid" />
                        <div className="top-px left-[91px] w-[200px] md:w-[550px] lg:w-[2659px] h-[15px] bg-[#ff3604] rounded-[1329.33px/7.33px] blur-[10.67px] opacity-50 absolute border-[1.33px] border-solid" />
                      </div>
                      <div className="absolute top-8 md:top-10 lg:top-[51px] left-0 w-full h-20 md:h-32 lg:h-[196px] bg-white opacity-20 lg:opacity-100" />
                      <div className="top-0 left-1/2 transform -translate-x-1/2 text-transparent text-lg md:text-xl lg:text-[18.7px] tracking-[-0.56px] absolute [font-family:'Chakra_Petch',Helvetica] font-normal text-center leading-[normal]">
                        <span className="text-white tracking-[-0.10px]">
                          {item.percentage.split("/")[0]}/
                        </span>
                        <span className="text-[#ffffff66] tracking-[-0.10px]">
                          {item.percentage.split("/")[1]}
                        </span>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 lg:h-[60px]">
                      <div className="top-6 md:top-7 lg:top-8 absolute left-[-200px] md:left-[-500px] lg:left-[-1328px] w-[400px] md:w-[800px] lg:w-[2901px] h-[15px] hidden lg:block">
                        <img
                          className="top-[-6305px] left-[50px] md:left-[150px] lg:left-[222px] absolute w-[300px] md:w-[600px] lg:w-[1926px] h-px"
                          alt="Line"
                          src="/line-104-1.svg"
                        />
                        <div className="top-0 left-[90px] w-[220px] md:w-[600px] lg:w-[2811px] h-2.5 rounded-[1405.57px/5.09px] border-[#ff3604] blur-[29.2px] bg-[linear-gradient(90deg,rgba(153,32,2,0)_0%,rgba(255,54,4,1)_50%,rgba(153,32,2,0)_100%)] absolute border-[1.33px] border-solid" />
                        <div className="top-px left-[91px] w-[200px] md:w-[550px] lg:w-[2659px] h-[15px] bg-[#ff3604] rounded-[1329.33px/7.33px] blur-[10.67px] opacity-50 absolute border-[1.33px] border-solid" />
                      </div>
                      <div className="absolute top-6 md:top-8 lg:top-[39px] left-0 w-full h-4 md:h-5 lg:h-[21px] bg-white opacity-20 lg:opacity-100" />
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-6 flex items-center justify-center">
                        <div className="[font-family:'Chakra_Petch',Helvetica] font-normal text-white text-lg md:text-xl lg:text-[18.7px] text-center tracking-[-0.56px] leading-[normal]">
                          {item.percentage}
                          <span className="opacity-50 text-xs md:text-sm lg:text-[10.7px] tracking-[-0.32px] ml-1">
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {progressData.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[247px] mx-auto [font-family:'Chakra_Petch',Helvetica] font-normal text-white text-sm md:text-base lg:text-[18.7px] text-center tracking-[-0.56px] leading-[normal]"
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
