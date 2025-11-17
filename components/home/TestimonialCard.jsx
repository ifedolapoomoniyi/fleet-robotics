"use client";

import React, { useRef, useEffect, useState } from "react";

const testimonials = [
	{
		logo: "/images/logo/thinkseb.svg",
		text: "We needed a flexible cleaning solution for our facilities, and Fleet Robotics delivered in minutes. Posting a job was effortless, and within five minutes, a robot was on-site completing the task",
		client: "Client Name Here",
		role: "Founder and CEO",
	},
	{
		logo: "/images/logo/arrow.svg",
		text: "As a fleet operator, Fleet Robotics has completely changed how I monetize my machines. Instead of waiting for long-term contracts, I can list my robots, get instant bookings, and earn crypto directly.",
		client: "Client Name Here",
		role: "Founder and CEO",
	},
	{
		logo: "/images/logo/oun.svg",
		text: "“Book delivery drones, cleaning bots, and industrial machines instantly. Operators earn crypto. Jobs are managed fully on-chain with trust and transparency.”",
		client: "Client Name Here",
		role: "Founder and CEO",
	},
];

const TestimonialCards = () => {
	const scrollRef = useRef(null);
	const isMobile = useState(false);
	const [cardWidth, setCardWidth] = useState(400);

	useEffect(() => {
		if (window.innerWidth < 768) {
			setCardWidth(320)
		}
	});
	const scroll = (direction) => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				left: direction === "left" ? -cardWidth : cardWidth,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className=" text-white pl-6 relative">
			<div className="max-w-[1450px] mx-auto">
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
					<button onClick={() => scroll("right")} className="">
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
							className={`w-[320px] md:w-[400px] h-[550px] bg-black hover:bg-[#0B0B0B] transition-all duration-500 border border-[#1A1A1A] p-8 flex flex-col justify-between flex-shrink-0`}
						>
							<div>
								<img
									src={item.logo}
									alt="Client Logo"
									className="h-7 mb-14"
								/>
								<p className="opacity-75 font-allianceNo2 text-xl">
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


