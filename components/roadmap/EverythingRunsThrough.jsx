import React from "react";
import "../roadmap/ui/slideAnimation.css";
import MarqueeComponent from "../MarqueeComponent";

const EverythingRunsThrough = () => {
	return (
		<div className="relative overflow-hidden h-[600px] mt-8 flex items-center bg-[url('/images/background.svg')] bg-cover bg-center">
			<MarqueeComponent>
				<span className="text-[#555555] text-[8rem] font-normal font-allianceNo2 whitespace-nowrap px-[50px]">
					Everything&nbsp;runs&nbsp;through&nbsp;
					<span className="font-extrabold text-white">$FLEET</span>
					.&nbsp;
				</span>
			</MarqueeComponent>
		</div>
	);
};

export default EverythingRunsThrough;
