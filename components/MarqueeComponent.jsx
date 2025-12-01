import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ children }) => {
	return (
		<div>
			<Marquee
				speed={250}
				gradient={true}
				gradientColor="rgb(0, 2, 1)"
				gradientWidth={100}
				className="overflow-hidden h-[90vh] w-full text-[200px] opacity-50"
				autoFill={true}
			>
				{children}
			</Marquee>
		</div>
	);
};

export default MarqueeComponent;
