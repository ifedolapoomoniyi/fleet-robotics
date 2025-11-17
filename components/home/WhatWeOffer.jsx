"use client"

import { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";
import { div } from "framer-motion/client";

const features = [
	{
		title1: "Delivery",
		title2: "& Logistics",
		description:
			"Access cleaning, delivery, security, and inspection Window washing drones security, and inspection robots instantly",
		details: [
			{
				title: "Window washing drones",
				desc: "Window washing drones security, and inspection robots instantly.",
			},
			{
				title: "Disinfection robots",
				desc: "Disinfection window washing drones security, and inspection robots instantly.",
			},
			{
				title: "Window washing drones",
				desc: "Window washing drones security, and inspection robots instantly.",
			},
			{
				title: "Disinfection robots",
				desc: "Disinfection window washing drones security, and inspection robots instantly.",
			},
		],
	},
	{
		title1: "Cleaning",
		title2: "& Maintenance",
		description:
			"Access cleaning, delivery, security, and inspection Window washing drones security, and inspection robots instantly",
		details: [
			{
				title: "Window washing drones",
				desc: "Window washing drones security, and inspection robots instantly.",
			},
			{
				title: "Disinfection robots",
				desc: "Disinfection window washing drones security, and inspection robots instantly.",
			},
			{
				title: "Commercial floor cleaning",
				desc: "Window washing drones security, and inspection robots instantly.",
			},
			{
				title: "Ooutdoor maintenance units",
				desc: "Disinfection window washing drones security, and inspection robots instantly.",
			},
		],
	},
	{
		title1: "Industrial",
		title2: "& Inspection",
		description:
			"Access cleaning, delivery, security, and inspection Window washing drones security, and inspection robots instantly",
		details: [
			{
				title: "Window washing drones",
				desc: "Window washing drones security, and inspection robots instantly.",
			},
			{
				title: "Disinfection robots",
				desc: "Disinfection window washing drones security, and inspection robots instantly.",
			},
			{
				title: "Window washing drones",
				desc: "Window washing drones security, and inspection robots instantly.",
			},
			{
				title: "Disinfection robots",
				desc: "Disinfection window washing drones security, and inspection robots instantly.",
			},
		],
	},
];

const WhatWeOffer = () => {
  // scroll button functionality
  const [cardWidth, setCardWidth] = useState(800)

	const scrollRef = useRef(null);
	useEffect(()=>{
		if(window.innerWidth < 568) {
			setCardWidth(400)
			return
		}
		if(window.innerWidth < 668) {
			setCardWidth(500)
			return
		}
		if(window.innerWidth < 768) {
			setCardWidth(600)
			return
		}

	},[])
	const scroll = (direction) => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				left: direction === "left" ? -cardWidth : cardWidth,
				behavior: "smooth",
			});
		}
	};
	return (
    <div className="border-x border-[#1A1A1A] lg:px-[80px] my-[100px]">
		<div className="min-h-[90vh] 2xl:min-h-0 sm:h-[1000px] bg-[url('/images/what-we-do-bg.svg')] bg-cover bg-bottom px-5  ">
			<div className="flex flex-col items-center justify-center text-white mb-14">
				<div className="uppercase opacity-70 text-lg ">
					What we Offer
				</div>
				<h2 className="pb-5 text-6xl font-medium tracking-tight">
					Robot Services On-Demand
				</h2>
				<div className="text-center max-w-[600px] opacity-60 leading-5">
					Access cleaning, delivery, security, and inspection robots
					instantly. Pay only for completed work with simple,
					transparent pricing based on job complexity, duration and
					robot type
				</div>
			</div>

			{/* Arrow Controls */}
			<div className="ml-5 xl:ml-20 flex gap-4 mb-6">
				<button onClick={() => scroll("left")} className="">
					<div className="w-12 h-12 relative bg-neutral-800 rounded-sm overflow-hidden">
						<div className="w-2.5 h-4 left-[15px] top-[17.33px] absolute">
							<div className="w-1 h-1 left-[6.67px] top-0 absolute bg-white"></div>
							<div className="w-1 h-1 left-[6.67px] top-[13.33px] absolute bg-white"></div>
							<div className="w-1 h-1 left-0 top-[6.67px] absolute bg-white"></div>
						</div>
					</div>
				</button>
				<button type="button" onClick={() => scroll("right")} className="">
					<div className="w-12 h-12 relative bg-orange-600 rounded-sm overflow-hidden">
						<div className="w-2.5 h-4 left-[20px] top-[17.33px] absolute">
							<div className="w-1 h-1 left-0 top-0 absolute bg-white"></div>
							<div className="w-1 h-1 left-0 top-[13.33px] absolute bg-white"></div>
							<div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-white"></div>
						</div>
					</div>
				</button>
			</div>

			{/* Cards */}
			<div className="flex flex-row overflow-scroll gap-10 scrollbar-hide pl-4 lg:pl-20 lg:pr-20" ref={scrollRef}>
				{features?.map((feature, key) => (
					<FeatureCard
						description={feature.description}
						title1={feature.title1}
						title2={feature.title2}
						details={feature.details}
						key={key}
						index={key}
					/>
				))}
			</div>
		</div>
    </div>
	);
};

export default WhatWeOffer;
