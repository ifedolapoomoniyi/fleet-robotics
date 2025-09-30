const CTASection = () => {
	return (
		<div className="flex flex-col items-center bg-[url('/images/cta-bg.png')] min-h-[80vh] bg-top lg:bg-contain bg-no-repeat mx-7 md:mx-[80px] my-20 px-5">
			<h2 className="text-4xl md:text-7xl mt-29 font-semibold max-w-[700px] text-center">
				Ready to Hire Your First Robot?
			</h2>
			<div className="font-chakrapetch my-6 leading-tight text-center text-lg">
				The future doesn’t wait, and neither should you. <br />
				Ready to join the robotic revolution?
			</div>

            {/* cta button */}
			<button className="flex justify-start items-center gap-1">
				<div className="md:w-60 p-2 md:p-3.5 bg-white rounded-sm flex justify-center items-center gap-2.5">
					<div className="text-black md:text-lg font-medium text-nowrap">
						Explore the Marketplace
					</div>
				</div>
				<div className="w-12 h-10 md:h-14 relative bg-white rounded-sm overflow-hidden">
					<div className="w-2.5 h-4 left-[21.33px] top-[16px] absolute">
						<div className="w-[5px] h-[5px] -left-1 -top-1 md:top-0 absolute bg-orange-600" />
						<div className="w-[5px] h-[5px] -left-1 top-[13.33px] absolute bg-orange-600" />
						<div className="w-[5px] h-[5px] left-[6.67px] top-1 md:top-[6.67px] absolute bg-orange-600" />
					</div>
				</div>
			</button>
		</div>
	);
};

export default CTASection;
