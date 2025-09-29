import "./globals.css";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import localFont from "next/font/local";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

const allianceNo2 = localFont({
	src: [
		{
			path: "../public/fonts/Alliance-No2-Regular/AllianceNo.2Regular.otf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-allianceNo2",
});

const allianceNo2Light = localFont({
	src: "../public/fonts/Alliance-No2-Regular/AllianceNo1-Light.ttf",
	weight: "300",
	style: "normal",
	variable: "--font-allianceNo2Light",
});

const chakraPetch = localFont({
	src: [
		{
			path: "../public/fonts/chakra_Petch/ChakraPetch-Regular.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-chakraPetch",
});

export const metadata = {
	title: "Fleet Robotics",
	description: "Decentralized robot marketplace",
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{
				url: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		other: [
			{
				rel: "android-chrome-192x192",
				url: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				rel: "android-chrome-512x512",
				url: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${chakraPetch.variable} ${allianceNo2.variable} ${allianceNo2Light.variable} text-white`}
		>
			<body className="font-allianceNo2">
				<SmoothScrollWrapper>
					<Navbar />
					<main className="pt-[84px] md:pt-[84px] lg:pt-[84px] max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
						{children}
					</main>
					<Footer />
				</SmoothScrollWrapper>
			</body>
		</html>
	);
}
