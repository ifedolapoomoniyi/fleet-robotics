import React from "react";
import { motion } from "framer-motion";

const steps = [
	{
		title: "Post A Job",
		description:
			"Describe the task, set location and timing, and fund an escrow with crypto.",
		active: false,
	},
	{
		title: "Match A Robot",
		description:
			"The marketplace assigns the best available robot, or you select from listed operators.",
		active: false,
	},
	{
		title: "Deploy & Track",
		description:
			"Your robot begins work immediately, with live updates and real-time monitoring.",
		active: false,
	},
	{
		title: "Settle & Rate",
		description:
			"Once complete, escrow releases payment automatically and reputation scores update on-chain.",
		active: true,
	},
];

const Cards = () => {
	return (
		<div className="p-6 flex flex-row gap-5 mt-10 relative overflow-auto scrollbar-hide">
			{/* line strip */}
			<div className="w-full absolute top-[135px] h-2 bg-gradient-to-r from-red-800/0 via-orange-600 to-orange-800/0 rounded-full z-10"></div>
			{steps.map((step, key) => (
				<div
					className="relative min-w-[300px] group transition-all duration-500"
					key={key}
				>
					{/* design elements */}
					<div
						className={`h-10 top-[1px] relative z-10 w-[227px] rounded-t ${
							step.active == true ? "bg-[#FF3604]" : "bg-black"
						}  group-hover:bg-[#FF3604] transition-all duration-500 border-gray-800 border-t border-l border-r`}
					></div>
					<div className="absolute bg-black -right-2 -top-1 w-15 h-11 rounded"></div>
					{/* content */}
					<div className="rounded-r-lg rounded-b text-white transition-all duration-500 group-hover:bg-[#FF3604] flex flex-col justify-between h-[300px] relative min-w-[300px]">
						<div className="absolute left-4 w-2.5 h-2.5 inline-block mix-blend-difference bg-orange-600 border-[1.33px]"></div>
						<div
							className={`font-semibold flex flex-row rounded-tr gap-2 justify-between p-4 h-[100px] min-w-[300px] border border-gray-800 border-b-0 ${
								step.active == true ? "bg-[#FF3604]" : ""
							}`}
						>
							{step.title}
							<div className="w-2.5 h-4 relative">
								<div className="w-1 h-1 left-0 top-0 absolute bg-orange-600"></div>
								<div className="w-1 h-1 left-0 top-[13.33px] absolute bg-orange-600"></div>
								<div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-orange-600"></div>
							</div>
						</div>
						<div className="flex items-end text-sm p-4 text-gray-300 mt-auto bg-[#171717] h-full text-bottom group-hover:bg-[#631603] transition-all duration-500">
							<div className="">{step.description}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cards;
