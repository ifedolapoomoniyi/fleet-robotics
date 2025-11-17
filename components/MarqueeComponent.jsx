import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ children, style }) => {
	return (
		<div className="">
			<Marquee
				speed={250}
				gradient={true}
				gradientColor="rgb(0, 2, 1)"
				gradientWidth={100}
				className={`overflow-hidden w-full text-[200px] opacity-50 ${style}`}
				autoFill={true}
			>
				{children}
			</Marquee>
		</div>
	);
};

export default MarqueeComponent;
