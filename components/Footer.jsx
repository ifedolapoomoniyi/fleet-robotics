import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaGit, FaGithub, FaSquareXTwitter, FaTelegram } from "react-icons/fa6";

const routes = [
  { label: "About", link: "about" },
  { label: "Team", link: "team" },
  { label: "Roadmap", link: "roadmap" },
  { label: "Technology", link: "technology" },
];

const Footer = () => {
  return (
    <div className="min-h-[500px] text-white flex flex-col items-center justify-center gap-1">
      <div className="flex flex-row gap-2 mb-10">
        <Image
          src={"/images/logo.svg"}
          alt="Fleet Robotics logo"
          className=""
          priority
          width={36}
          height={36}
        />
        <h2 className="whitespace-break-spaces text-2xl flex flex-col">fleet <span>robotics™</span></h2>
      </div>

      {/* links */}
      <div className="opacity-70">Discover</div>
      <div>
        {routes.map((route, key) => (
          <Link
            href={route.link}
            key={key}
            className="uppercase font-medium px-2 hover:opacity-75 duration-300 transition-all"
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center opacity-70 mt-7">
        <span>©2025 Copyright Fleet Robotics.</span>
        <span>All rights reserved.</span>
      </div>

      {/* socials */}
      <div className="flex flex-row gap-2 text-xl mt-5">
        <Link href={""} className="p-2 rounded-lg bg-[#171717]">
          <FaGithub />
        </Link>
        <Link href={""} className="p-2 rounded-lg bg-[#171717]">
          <FaDiscord />
        </Link>
        <Link href={""} className="p-2 rounded-lg bg-[#171717]">
          <FaSquareXTwitter />
        </Link>
        <Link href={""} className="p-2 rounded-lg bg-[#171717]">
          <FaTelegram />
        </Link>
      </div>

      <div>
        <Image
          src={"/images/footer-img.png"}
          alt="Footer image"
          className=""
          priority
          width={1900}
          height={768}
        />
      </div>
    </div>
  );
};

export default Footer;
