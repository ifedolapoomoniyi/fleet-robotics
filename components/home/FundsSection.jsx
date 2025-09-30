"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const data = [
	{ phase: "Phase 1", quarter: "Q1", value: "400M SUBOT", height: "9rem", mobileHeight: "6rem" },
	{ phase: "Phase 2", quarter: "Q2", value: "700M SUBOT", height: "15rem", mobileHeight: "10rem" },
	{ phase: "Phase 3", quarter: "Q3", value: "1.1B SUBOT", height: "22rem", mobileHeight: "14rem" },
	{ phase: "Phase 4", quarter: "Q4", value: "1.5B SUBOT", height: "30rem", mobileHeight: "18rem" },
];

export default function FundsSection() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Check on mount
		checkMobile();

		// Add event listener for window resize
		window.addEventListener('resize', checkMobile);

		// Cleanup
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<section className="lg:mx-[80px] my-10 h-full bg-black text-white px-4 sm:px-6 md:px-10 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-0">
			{/* Left Text Section */}
			<div className="h-full flex flex-col">
				<h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tighter pr-4">
					Funds Raised & <br className="hidden sm:block" /> 
					<span className="sm:hidden">Tokens </span>
					<span className="hidden sm:inline">Tokens Distributed</span>
					<span className="sm:hidden">Distributed</span>
				</h2>
				<p className="text-gray-400 mt-6 md:mt-10 max-w-lg text-sm sm:text-base leading-relaxed pr-5 pb-5">
					Powered by escrow smart contracts, robot wallets, and an
					on-chain reputation system. $UBOT powers payments, staking,
					and governance. We enable operators to monetize idle
					machines and allow customers to hire verified robots
					instantly.
				</p>
				<div className="flex mt-8 md:mt-auto space-x-4 text-gray-500 w-full border border-[#262626] p-3 sm:p-4 py-6 md:py-[26px] text-sm md:text-base">
					<span className="text-white">MONTHLY</span>
					<span>/</span>
					<span>WEEKLY</span>
				</div>
			</div>

			{/* Right Graph Section */}
			<div className="flex items-end w-full relative min-h-[400px] sm:min-h-[500px] md:min-h-[700px] border-l border-b border-gray-800 pl-0 bg-[url('/images/graph-bg.svg')] bg-cover left uppercase font-chakrapetch">
				{data.map((d, i) => (
					<div
						key={i}
						className="flex flex-col items-center justify-end flex-1 relative"
					>
						<motion.span
							initial={{ y: 0, opacity: 0 }}
							whileInView={{ 
								y: isMobile 
									? -parseInt(d.mobileHeight) 
									: -parseInt(d.height), 
								opacity: 1 
							}}
							viewport={{ once: true, amount: 0.6 }}
							transition={{ duration: 1, delay: i * 0.3 }}
							className="text-red-500 text-xs sm:text-sm md:text-base text-center px-1"
						>
							<span className="hidden sm:inline">{d.value}</span>
							<span className="sm:hidden">
								{d.value.replace(' SUBOT', '').replace('M', 'M').replace('B', 'B')}
								<br />
								<span className="text-xs">SUBOT</span>
							</span>
						</motion.span>

						{/* Bar */}
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ 
								height: isMobile 
									? d.mobileHeight 
									: d.height 
							}}
							viewport={{ once: true, amount: 0.6 }}
							transition={{ duration: 1, delay: i * 0.3 }}
							className={`w-full border border-[#262626] ${
								data.length === i + 1
									? "bg-gradient-to-b from-orange-600 to-orange-600/0"
									: "bg-gradient-to-b from-stone-900 via-stone-900/70 to-stone-900/0"
							}`}
						/>

						{/* Labels */}
						<div className="bg-black p-2 sm:p-3 w-full text-center border-t border-gray-600 border-dashed">
							<div className="mt-2 sm:mt-3 text-white opacity-50 bg-black text-xs sm:text-sm">
								<span className="hidden sm:inline">{d.phase}</span>
								<span className="sm:hidden">P{i + 1}</span>
							</div>
							<div className="text-white opacity-85 bg-black text-xs sm:text-sm font-medium">
								{d.quarter}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}