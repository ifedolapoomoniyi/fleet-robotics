"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icons

const testimonials = [
	{
		logo: "https://dummyimage.com/80x40/fff/000&text=Thinkseb",
		text: "We needed a flexible cleaning solution for our facilities, and Fleet Robotics delivered in minutes. Posting a job was effortless, and within five minutes, a robot was on-site completing the task",
		client: "Client Name Here",
		role: "Founder and CEO",
	},
	{
		logo: "https://dummyimage.com/40x40/fff/000&text=A",
		text: "As a fleet operator, Fleet Robotics has completely changed how I monetize my machines. Instead of waiting for long-term contracts, I can list my robots, get instant bookings, and earn crypto directly.",
		client: "Client Name Here",
		role: "Founder and CEO",
	},
	{
		logo: "https://dummyimage.com/80x40/fff/000&text=Oun",
		text: "“Book delivery drones, cleaning bots, and industrial machines instantly. Operators earn crypto. Jobs are managed fully on-chain with trust and transparency.”",
		client: "Client Name Here",
		role: "Founder and CEO",
	},
	{
		logo: "https://dummyimage.com/80x40/fff/000&text=Extra",
		text: "This is another testimonial to test scrolling behavior.",
		client: "Another Client",
		role: "CTO",
	},
];

const TestimonialCards = () => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				left: direction === "left" ? -400 : 400,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className=" text-white px-6 relative">
			<div className="max-w-7xl mx-auto">
				{/* Arrow Controls */}
				<div className="flex gap-4 mb-6 absolute -top-[60px]">
					<button onClick={() => scroll("left")} className="">
						<div className="w-12 h-12 relative bg-neutral-800 rounded-sm overflow-hidden">
							<div className="w-2.5 h-4 left-[15px] top-[17.33px] absolute">
								<div className="w-1 h-1 left-[6.67px] top-0 absolute bg-white"></div>
								<div className="w-1 h-1 left-[6.67px] top-[13.33px] absolute bg-white"></div>
								<div className="w-1 h-1 left-0 top-[6.67px] absolute bg-white"></div>
							</div>
						</div>
					</button>
					<button
						onClick={() => scroll("right")}
						className=""
					>
						<div className="w-12 h-12 relative bg-orange-600 rounded-sm overflow-hidden">
							<div className="w-2.5 h-4 left-[20px] top-[17.33px] absolute">
								<div className="w-1 h-1 left-0 top-0 absolute bg-white"></div>
								<div className="w-1 h-1 left-0 top-[13.33px] absolute bg-white"></div>
								<div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-white"></div>
							</div>
						</div>
					</button>
				</div>

				{/* Scrollable Row */}
				<div
					ref={scrollRef}
					className="flex overflow-x-auto scrollbar-hide scroll-smooth mr-4"
				>
					{testimonials.map((item, index) => (
						<div
							key={index}
							className={`w-[400px] h-[500px] bg-black hover:bg-[#0B0B0B] transition-all duration-500 border border-gray-800 p-8 flex flex-col justify-between flex-shrink-0`}
						>
							<div>
								<img
									src={item.logo}
									alt="Client Logo"
									className="h-8 mb-6"
								/>
								<p className="opacity-75 leading-relaxed font-allianceNo2 text-xl">
									{item.text}
								</p>
							</div>
							<div className="mt-8 text-sm text-gray-400">
								<p>{item.client}</p>
								<p>{item.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialCards;
