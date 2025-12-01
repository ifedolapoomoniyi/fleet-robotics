import VerticalTextScroller from "./TextScroller";

const items = ["robots", "drones", "agents"];

const About = () => {
	return (
		<section className="text-white mt-[80px] lg:mx-[70px] mx-6 min-h-[700px] flex flex-col justify-center">
			<div>
				<div className="uppercase font-semibold text-lg sm:text-xl">
					Robots for everyone
				</div>

				<h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl bg-gradient-to-r from-white via-white/30 to-white/10 bg-clip-text text-transparent flex justify-start flex-wrap md:flex-nowrap">
					Explore marketplace for&nbsp;
					<VerticalTextScroller />
				</h2>

				<div className="flex flex-col md:flex-row justify-between gap-8 mt-6">
					{/* Left text */}
					<div className="opacity-70 max-w-full md:max-w-md text-sm sm:text-base">
						Fleet Robotics transforms service robotics into an
						accessible on-demand economy. Our platform connects
						customers and operators through a trustless marketplace
						powered by escrow smart contracts, robot wallets, and an
						on-chain reputation system.
					</div>

					{/* Right CTA */}
					<div>
						<button className="flex justify-start items-center gap-1">
							<div className="w-60 p-3.5 bg-white rounded-sm flex justify-center items-center gap-2.5">
								<div className="justify-start text-black text-lg font-medium">
									Explore the Marketplace
								</div>
							</div>
							<div className="w-12 h-14 relative bg-orange-600 rounded-sm overflow-hidden">
								<div className="w-2.5 h-4 left-[21.33px] top-[16px] absolute">
									<div className="w-1 h-1 left-0 top-0 absolute bg-white" />
									<div className="w-1 h-1 left-0 top-[13.33px] absolute bg-white" />
									<div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-white" />
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
