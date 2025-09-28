import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

export const metadata = {
  title: "Fleet Robotics",
  description: "Decentralized robot marketplace",
};

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
  weight: "300", // mark it as light
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${allianceNo2.variable} ${allianceNo2Light.variable} text-white`}>
      <body className="font-allianceNo2">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
