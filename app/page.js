import About from "@/components/home/About";
import Card from "@/components/home/Card";
import CTASection from "@/components/home/CTASection";
import FundsSection from "@/components/home/FundsSection";
import Hero from "@/components/home/Hero";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TechnologyCTA from "@/components/home/TechnologyCTA";
import Testimonials from "@/components/home/Testimonials";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import MarqueeComponent from "@/components/MarqueeComponent";

export default function Page() {
	return (
		<main>
			<Hero />
			<About />
			<HowItWorksSection />
			<WhatWeOffer />
			<Testimonials />
			<div className="border border-[#1A1A1A] py-[150px] my-20">
				<MarqueeComponent
					style={
						"bg-[url('/images/background.svg')]"
					}
				>
					<div className="px-[200px] text-[90px] md:text-[200px] ">
						Robots as gig workers
					</div>
				</MarqueeComponent>
			</div>

			<TechnologyCTA />
			<FundsSection />
			<CTASection />
		</main>
	);
}
