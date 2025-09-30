"use client";

import React, { useEffect, useState } from "react";

const TechnologyCTA = () => {
	const [isTiny, setIsTiny] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 430) {
			setIsTiny(true);
		} else setIsTiny(false);
	}, []);
	return (
		<div className={`bg-[url('/images/CTA-bg-mobile.png')] sm:bg-[url('/images/CTA-bg-desktop.png')] sm:bg-top bg-contain sm:bg-cover 2xl:bg-contain  min-h-[57vh] sm:min-h-[55vh] bg-no-repeat flex justify-center items-center m-auto w-[380px] sm:w-full ${isTiny? "scale-80" : ""}`}>
			{/* cta btn */}

			<button className="mt-auto mb-15 flex justify-start items-center gap-1 hover:opacity-85 transition duration-300">
				<div className="w-60 p-3.5 bg-[#FF3604] rounded-sm flex justify-center items-center gap-2.5">
					<div className="justify-start text-white text-lg font-medium">
						Explore the Marketplace
					</div>
				</div>
				<div className="w-12 h-14 relative bg-white rounded-sm overflow-hidden">
					<div className="w-2.5 h-4 left-[21.33px] top-[16px] absolute">
						<div className="w-1 h-1 left-0 top-0 absolute bg-orange-600" />
						<div className="w-1 h-1 left-0 top-[13.33px] absolute bg-orange-600" />
						<div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-orange-600" />
					</div>
				</div>
			</button>
		</div>
	);
};

export default TechnologyCTA;
