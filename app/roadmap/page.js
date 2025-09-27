import { CallToActionSection } from "@/components/roadmap/CallToActionSection";
import { EconomicRailSection } from "@/components/roadmap/EconomicRailSection";
import EverythingRunsThrough from "@/components/roadmap/EverythingRunsThrough";
import { ProblemSolutionSection } from "@/components/roadmap/ProblemSolutionSection";
import { RoadmapSection } from "@/components/roadmap/RoadmapSection";
import { RoboticsMarketSection } from "@/components/roadmap/RoboticsMarketSection";
import { WhyItMattersSection } from "@/components/roadmap/WhyItMattersSection";
import { WhyNowSection } from "@/components/roadmap/WhyNowSection";
import React from "react";

const RoadMap = () => {
  return (
    <div className=" overflow-hidden w-full flex flex-col relative min-h-screen">
      {/* <MainContentSection /> */}
      <EconomicRailSection />
      <CallToActionSection />
      <ProblemSolutionSection />
      <EverythingRunsThrough />
      <RoadmapSection />
      <WhyNowSection />
      <WhyItMattersSection />
    </div>
  );
};

export default RoadMap;
