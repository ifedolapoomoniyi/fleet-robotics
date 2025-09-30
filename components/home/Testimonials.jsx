import TestimonialCards from "./TestimonialCard";

const Testimonials = () => {
	return (
		<div className="bg-[url('/images/background.svg')] lg:p-[80px] md:pt-0">
			<div className="bg-black border border-[#1A1A1A] md:w-fit flex flex-col items-center justify-center p-7 text-center md:h-[300px] ml-auto mb-16 md:mb-0">
				<h2 className="text-3xl lg:text-6xl">Testimonials</h2>
				<div className="max-w-[300px] pt-5 mt-auto font-chakrapetch opacity-70">
					What out partners are saying about building with fleet
					robotics
				</div>
			</div>
			{/* Testimonial cards */}
			<div>
                <TestimonialCards/>
            </div>
		</div>
	);



};

export default Testimonials;
