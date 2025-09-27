import React from "react";

const roadmapPhases = [
  {
    title: "Proof",
    description: "Viral demos (pay crypto - robot moves live)",
    position: "left-24",
  },
  {
    title: "Standard",
    description: "Fleet IDs become the passport for machines.",
    position: "left-[537px]",
  },
  {
    title: "Monetization",
    description: "Robot data turns into assets.",
    position: "left-[979px]",
  },
  {
    title: "Infra",
    description: "Staking, insurance, DePIN integrations.",
    position: "left-[1409px]",
  },
];

export const RoadmapSection = ()=> {
  return (
    <section className="relative w-[1777px] h-[1067px] bg-black overflow-hidden border-t-[1.33px] [border-top-style:solid] border-b-[1.33px] [border-bottom-style:solid] border-[#1a1a1a]">
      <img
        className="absolute top-0 left-0 w-[1420px] h-[800px]"
        alt="Background"
        src="/images/r-background.svg"
      />

      <div className="top-[808px] left-0 w-[1777px] h-[259px] absolute bg-[linear-gradient(180deg,rgba(29,29,29,0.6)_0%,rgba(29,29,29,0)_100%)]" />

      <div className="top-[225px] left-[1195px] w-[807px] h-[357px] -rotate-90 absolute bg-[linear-gradient(180deg,rgba(29,29,29,0.6)_0%,rgba(29,29,29,0)_100%)]" />

      <header className="absolute top-[72px] left-24 [font-family:'Alliance_No.2-Medium',Helvetica] font-medium text-white text-[90.7px] tracking-[-5.44px] leading-[100px] whitespace-nowrap">
        Roadmap
      </header>

      <div className="absolute top-[calc(50.00%_+_268px)] left-0 w-[2901px] h-3">
        <img
          className="absolute top-[5px] left-0 w-[1777px] h-px"
          alt="Line"
          src="/images/line-104.svg"
        />

        <div className="top-px w-[2811px] h-2.5 rounded-[1405.57px/5.09px] blur-[29.2px] bg-[linear-gradient(90deg,rgba(153,32,2,0)_0%,rgba(255,54,4,1)_50%,rgba(153,32,2,0)_100%)] absolute left-[90px]" />

        <div className="top-0 w-[2659px] h-3 rounded-[1329.64px/5.84px] blur-[10.67px] bg-[linear-gradient(90deg,rgba(153,32,2,0)_0%,rgba(255,51,0,1)_50%,rgba(153,32,2,0)_100%)] opacity-50 absolute left-[90px]" />
      </div>

      {roadmapPhases.map((phase, index) => (
        <div
          key={`phase-${index}`}
          className={`absolute top-[796px] ${phase.position}`}
        >
          <div className="w-[21px] h-[21px] bg-black rounded-[10.67px] border-[0.67px] border-solid border-[#ff3300]" />
        </div>
      ))}

      {roadmapPhases.map((phase, index) => (
        <div
          key={`title-${index}`}
          className={`absolute top-[847px] ${phase.position} [font-family:'Alliance_No.2-Regular',Helvetica] font-normal text-white text-[29.3px] tracking-[-1.17px] leading-[38.1px] whitespace-nowrap`}
        >
          {phase.title}
        </div>
      ))}

      {roadmapPhases.map((phase, index) => (
        <div
          key={`description-${index}`}
          className={`absolute top-[891px] ${phase.position} w-[197px] opacity-80 [font-family:'Chakra_Petch',Helvetica] font-normal text-white text-[18.7px] tracking-[-0.56px] leading-[normal]`}
        >
          {phase.description}
        </div>
      ))}

      <img
        className="absolute top-[204px] left-24 w-[49px] h-[528px]"
        alt="Frame"
        src="/images/frame-2147258786.svg"
      />

      <img
        className="absolute top-[-105px] left-[1420px] w-px h-[911px]"
        alt="Vector"
        src="/images/vector-4.svg"
      />
    </section>
  );
};


