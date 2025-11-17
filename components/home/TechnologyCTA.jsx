"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const TechnologyCTA = () => {
	const [isTiny, setIsTiny] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsTiny(window.innerWidth < 430);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div
			className={`relative overflow-hidden flex justify-center items-center m-auto sm:w-full min-h-[57vh] sm:min-h-[55vh] 2xl:min-h-0 2xl:h-[530px] ${
				isTiny ? "scale-80" : ""
			}`}
		>
			{/* Responsive background image */}
			<div className="absolute inset-0 -z-10">
				{/* Mobile bg */}
				<div className="block sm:hidden relative w-full h-full">
					<Image
						src="/images/CTA-bg-mobile.png"
						alt="CTA Background Mobile"
						fill
						className="object-contain"
						priority
					/>
				</div>

				{/* Desktop bg */}
				<div className="hidden sm:block relative w-full h-full">
					<Image
						src="/images/CTA-bg-desktop.png"
						alt="CTA Background Desktop"
						fill
						className="object-cover 2xl:object-contain object-top"
						priority
					/>
				</div>
			</div>

			{/* CTA Button */}
			<button className="mt-auto mb-15 flex justify-start items-center gap-1 group hover:scale-105 transition duration-300 relative z-10 cursor-pointer">
				<div className="w-60 p-3.5 group-hover:bg-white duration-500 text-white group-hover:text-black bg-[#FF3604] rounded-sm flex justify-center items-center gap-2.5">
					<div className="justify-start text-lg font-medium">
						Explore the Marketplace
					</div>
				</div>
				<div className="w-12 h-14 relative group-hover:bg-orange-600 duration-700 bg-white rounded-sm overflow-hidden">
					<div className="w-2.5 h-4 left-[21.33px] top-[16px] absolute">
						<div className="w-1 h-1 left-0 top-0 absolute bg-orange-600 group-hover:bg-white " />
						<div className="w-1 h-1 left-0 top-[13.33px] absolute bg-orange-600 group-hover:bg-white " />
						<div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-orange-600 group-hover:bg-white " />
					</div>
				</div>
			</button>
		</div>
	);
};

export default TechnologyCTA;
