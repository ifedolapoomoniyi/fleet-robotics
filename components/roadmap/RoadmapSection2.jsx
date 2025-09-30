"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const roadmapPhases = [
	{
		title: "Proof",
		description: "Viral demos (pay crypto - robot moves live)",
	},
	{
		title: "Standard",
		description: "Fleet IDs become the passport for machines.",
	},
	{
		title: "Monetization",
		description: "Robot data turns into assets.",
	},
	{
		title: "Infra",
		description: "Staking, insurance, DePIN integrations.",
	},
];

const details = [
	"Live crypto → robot actions",
	"Machine passports (Fleet IDs)",
	"Data → on-chain assets",
	"Staking & insurance rails",
];

const RoadmapSection2 = () => {
	const lineRef = useRef(null);
	const isInView = useInView(lineRef, { once: true, margin: "-100px" });

	return (
		<div
			className="
        w-full h-[700px] my-5 mb-25
        overflow-x-auto overflow-y-hidden lg:overflow-visible
        scrollbar-thin scrollbar-thumb-[#FF3300] scrollbar-track-transparent
      "
			style={{
				scrollbarColor: "#1e1e1e transparent",
				scrollbarWidth: "thin",
			}}
		>
			<div className="min-w-[1000px] md:min-w-full bg-[url('/images/r-background.svg')] flex flex-col relative">
				<div className="flex flex-row h-[500px]">
					<div className="flex-4">
						<h2 className="flex-4 text-6xl font-semibold m-10">
							Roadmap
						</h2>

						{/* animated graph image */}
						<motion.div
							className="pr-5"
							initial={{ scaleX: 0, scaleY: 0 }}
							animate={{
								scaleX: isInView ? 1 : 0,
								scaleY: isInView ? 1 : 0,
							}}
							transition={{ duration: 1.5, ease: "easeInOut" }}
						>
							<Image
								src={"/images/graph-line.svg"}
								alt="line"
								width={1280}
								height={1}
								className="w-full h-[400px]"
							/>
						</motion.div>
					</div>

					<div className="flex-1 bg-gradient-to-r from-[#1D1D1D] to-black h-[120%] w-full p-5 text-lg">
						<ul>
							{details.map((detail, index) => (
								<li key={index}>
									<span className="inline-block bg-[#FF3300] mr-3 h-3 w-3"></span>
									{detail}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="relative mt-5" ref={lineRef}>
					{/* Animated roadmap connecting line */}
					<motion.div
						className="absolute top-[28px] left-0 right-0 h-[2px] bg-[#FF3300] origin-left"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: isInView ? 1 : 0 }}
						transition={{
							duration: 1.5,
							ease: "easeInOut",
							delay: 0.3,
						}}
					/>

					{/* Roadmap phases */}
					<div
						className="
							flex flex-row gap-5 w-full
							absolute justify-between
							top-[31px] lg:px-40 left-0 right-0
							bg-black bg-gradient-to-b from-[#1A1A1A] to-black
							z-10 border-b pb-10 border-b-[#1D1D1D]
						"
					>
						{roadmapPhases.map((phases, id) => (
							<div
								key={id}
								className="flex-shrink-0 w-[250px] md:w-auto"
							>
								{/* Animated dot */}
								<motion.div
									className={`z-[100] relative -top-3 w-5 h-5 rounded-full border border-[#FF3300] ${
										roadmapPhases.length === id + 1
											? "bg-[#FF3300]"
											: "bg-black"
									} mb-5`}
									initial={{ scale: 0 }}
									animate={{
										scale: isInView ? [0, 1.3, 1] : 0,
									}}
									transition={{
										duration: 1.2,
										ease: "easeOut",
										delay: 0.5 + id * 0.2,
									}}
								/>
								{/* Texts */}
								<motion.div
									className="text-3xl"
									initial={{ opacity: 0, x: -30 }}
									animate={{
										opacity: isInView ? 1 : 0,
										x: isInView ? 0 : -30,
									}}
									transition={{
										duration: 0.6,
										delay: 0.6 + id * 0.2,
									}}
								>
									{phases.title}
								</motion.div>
								<motion.div
									className="font-chakrapetch opacity-75 max-w-[200px] mt-2"
									initial={{ opacity: 0, x: -30 }}
									animate={{
										opacity: isInView ? 1 : 0,
										x: isInView ? 0 : -30,
									}}
									transition={{
										duration: 0.6,
										delay: 0.7 + id * 0.2,
									}}
								>
									{phases.description}
								</motion.div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoadmapSection2;
