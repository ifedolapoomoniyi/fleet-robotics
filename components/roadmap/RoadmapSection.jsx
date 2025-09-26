import React from "react";

export const RoadmapSection = () => {
  const roadmapPhases = [
    {
      title: "Proof",
      description: "Viral demos (pay crypto - robot moves live)",
      left: "left-24",
    },
    {
      title: "Standard",
      description: "Fleet IDs become the passport for machines.",
      left: "left-[537px]",
    },
    {
      title: "Monetization",
      description: "Robot data turns into assets.",
      left: "left-[979px]",
    },
    {
      title: "Infra",
      description: "Staking, insurance, DePIN integrations.",
      left: "left-[1409px]",
    },
  ];

  return (
    <section className="z-[5] ml-0 h-auto min-h-[600px] md:min-h-[800px] lg:h-[1066.67px] w-full max-w-[1777.33px] self-center relative mt-16   bg-black overflow-hidden border-t-[1.33px] [border-top-style:solid] border-b-[1.33px] [border-bottom-style:solid] border-[#1a1a1a]">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block"
        alt="Background"
        src="/background-1.svg"
      />

      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 lg:h-[259px] bg-[linear-gradient(180deg,rgba(29,29,29,0.6)_0%,rgba(29,29,29,0)_100%)]" />

      <div className="absolute top-32 md:top-48 lg:top-[225px] right-0 w-32 md:w-48 lg:w-[807px] h-48 md:h-64 lg:h-[357px] -rotate-90 bg-[linear-gradient(180deg,rgba(29,29,29,0.6)_0%,rgba(29,29,29,0)_100%)] hidden lg:block" />

      <h1 className="absolute top-8 md:top-12 lg:top-[72px] left-4 md:left-8 lg:left-24 font-allianceNo2 font-medium text-white text-3xl md:text-5xl lg:text-[90.7px] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.44px] leading-tight md:leading-[60px] lg:leading-[100px]">
        Roadmap
      </h1>

      <div className="absolute top-[calc(50%_+_100px)] md:top-[calc(50%_+_150px)] lg:top-[calc(50.00%_+_268px)] left-0 w-full h-3 overflow-hidden">
        <img
          className="absolute top-[5px] left-0 w-full h-px"
          alt="Line"
          src="/line-104.svg"
        />

        <div className="absolute top-px left-4 md:left-8 lg:left-[90px] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[2811px] h-2.5 rounded-[1405.57px/5.09px] blur-[29.2px] bg-[linear-gradient(90deg,rgba(153,32,2,0)_0%,rgba(255,54,4,1)_50%,rgba(153,32,2,0)_100%)]" />

        <div className="absolute top-0 left-4 md:left-8 lg:left-[90px] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[2659px] h-3 rounded-[1329.64px/5.84px] blur-[10.67px] bg-[linear-gradient(90deg,rgba(153,32,2,0)_0%,rgba(255,51,0,1)_50%,rgba(153,32,2,0)_100%)] opacity-50" />
      </div>

      <div className="absolute top-[calc(50%_+_130px)] md:top-[calc(50%_+_180px)] lg:top-[796px] left-0 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-8 lg:px-0">
          {roadmapPhases.map((phase, index) => (
            <div key={`phase-${index}`} className="flex flex-col items-start lg:absolute lg:top-0" style={{ left: index === 0 ? '96px' : index === 1 ? '537px' : index === 2 ? '979px' : '1409px' }}>
              <div className="w-[21px] h-[21px] bg-black rounded-[10.67px] border-[0.67px] border-solid border-[#ff3300] mb-4 lg:mb-0" />
              <h2 className="[font-family:'Alliance_No.2-Regular',Helvetica] font-normal text-white text-lg md:text-xl lg:text-[29.3px] tracking-[-1.17px] leading-tight lg:leading-[38.1px] mb-2 lg:mb-0 lg:mt-[51px]">
                {phase.title}
              </h2>
              <p className="w-full lg:w-[197px] opacity-80 [font-family:'Chakra_Petch',Helvetica] font-normal text-white text-sm md:text-base lg:text-[18.7px] tracking-[-0.56px] leading-normal lg:mt-[44px]">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <img
        className="absolute top-24 md:top-32 lg:top-[204px] left-4 md:left-8 lg:left-24 w-8 h-64 md:w-10 md:h-80 lg:w-[49px] lg:h-[528px] hidden lg:block"
        alt="Frame"
        src="/frame-2147258786.svg"
      />

      <img
        className="absolute top-0 right-0 w-px h-full hidden lg:block"
        alt="Vector"
        src="/vector-4.svg"
      />
    </section>
  );
};
