import React from "react";

export const WhyItMattersSection = () => {
	return (
		<section className="relative w-full mt-16 mb-24 md:mt-24 lg:mt-[166.7px] min-h-[400px] md:min-h-[600px] lg:h-[798.67px] rounded-[10.67px] overflow-hidden">
			{/* Background frame */}
			<img
				className="absolute top-0 left-0 w-full object-cover h-full p lg:block transform rotate-180"
				src="/images/r_background.svg"
				alt="Frame"
			/>

			{/* Content container */}
			<div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 w-full max-w-5xl mx-auto px-4 md:px-8 pt-16 lg:pt-[163px]">
				{/* Left content */}
				<div className="flex-1">
					<h1 className="hidden md:block  font-allianceNo2 font-bold text-white text-4xl md:text-4xl lg:text-[80.3px] text-center lg:text-center tracking-tight leading-tight md:leading-[50px] lg:leading-[85.3px] mb-8 lg:mb-0">
						Robots don&apos;t need jobs.
						<br /> They just need wallets. <br />
						Fleet is the solution.
					</h1>
					<h1 className="block md:hidden font-allianceNo2 font-bold text-white text-4xl md:text-4xl lg:text-[80.3px] text-center lg:text-center tracking-tight leading-tight md:leading-[50px] lg:leading-[85.3px] mb-8 lg:mb-0">
						Ready to Hire <br/> Your First Robot?
					</h1>
					<p className="opacity-75 block md:hidden text-center font-normal text-white text-sm md:text-base ">
						The future doesn’t wait, and neither should you. Ready
						to join the robotic revolution?
					</p>

					{/* cta button */}
					<button className="flex justify-center m-auto mt-10 items-center gap-1 group hover:scale-105 duration-300 cursor-pointer">
						<div className="w-60 p-3.5 bg-white rounded-sm flex justify-center items-center group-hover:bg-orange-600 duration-300 text-black   group-hover:text-white gap-2.5">
							<div className="justify-start text-lg font-medium">
								Explore the Marketplace
							</div>
						</div>
						<div className="w-12 h-14 relative bg-white rounded-sm overflow-hidden group-hover:bg-orange-600 duration-300 group-hover:text-white">
							<div className="w-2.5 h-4 left-[21.33px] top-[16px] absolute">
								<div className="w-1 h-1 left-0 top-0 absolute bg-orange-600 group-hover:bg-white" />
								<div className="w-1 h-1 left-0 top-[13.33px] absolute bg-orange-600 group-hover:bg-white" />
								<div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-orange-600 group-hover:bg-white" />
							</div>
						</div>
					</button>
				</div>
			</div>

			{/* Right-side big image */}
			{/* r-mobile */}
			<img
				className="absolute top-0   right-0 w-1/2 h-full object-cover hidden lg:block"
				src="/images/roboruk-1.svg"
				alt="Roboruk"
			/>

			<img
				className="absolute -top-5   right-0  h-full  block lg:hidden"
				src="/images/r-mobile.svg"
				alt="Roboruk"
			/>
		</section>
	);
};
