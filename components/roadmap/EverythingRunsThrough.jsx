import React from "react";
import "../roadmap/ui/slideAnimation.css";

const EverythingRunsThrough = () => {
  return (
    <div
  className="relative overflow-hidden h-[300px] mt-8 flex items-center bg-[url('/images/background.svg')] bg-cover bg-center"
>
  <div className="slide-animation-fast">
    {/* First duplicate */}
    <span className="text-[#333333] text-[8rem] font-normal font-allianceNo2 whitespace-nowrap">
      Everything&nbsp;runs&nbsp;through&nbsp;
      <span className="font-extrabold text-white">$FLEET</span>.&nbsp;
    </span>

    {/* Second duplicate */}
    <span className="text-[#333333] text-[8rem] font-normal font-allianceNo2 whitespace-nowrap">
      Everything&nbsp;runs&nbsp;through&nbsp;
      <span className="font-extrabold text-white">$FLEET</span>.&nbsp;
    </span>
  </div>
</div>

  );
};

export default EverythingRunsThrough;
