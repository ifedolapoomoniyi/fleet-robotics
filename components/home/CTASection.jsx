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
				<div className="w-60 p-3.5 bg-white rounded-sm flex justify-center items-center gap-2.5">
					<div className="justify-start text-black text-lg font-medium">
						Explore the Marketplace
					</div>
				</div>
				<div className="w-12 h-14 relative bg-white rounded-sm overflow-hidden">
					<div className="w-2.5 h-4 left-[21.33px] top-[16px] absolute">
						<div className="w-1 h-1 left-0 top-0 absolute bg-orange-600" />
						<div className="w-1 h-1 left-0 top-[13.33px] absolute bg-orange-600" />
						<div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-orange-600" />
					</div>
				</div>
			</button>
		</div>
	);
};

export default CTASection;
