"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./roadmap/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { label: "HOME", href: "/" },
    { label: "TEAM", href: "/team" },
    { label: "ROADMAP", href: "/roadmap" },
    { label: "TECHNOLOGY", href: "/technology" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full md:h-[84px] pb-3 md:pb-0 bg-[#000000cc] border-b border-[#1a1a1a] backdrop-blur z-50">
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        <div className="flex ml-2 md:ml-0 mt-3.5 md:mt-0 items-center justify-between h-full px-4 sm:px-6  md:px-8 lg:px-[98px]">
          {/* Logo (mobile left, desktop centered) */}
          <img
            className="w-[100px] z-10 h-8  sm:w-[100px] sm:h-7 lg:w-[119px] lg:h-9 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 md:top-[22px]"
            alt="Logo"
            src="/images/logo-1.png"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`inline-flex items-center gap-1.5 relative flex-[0_0_auto] ${
                  pathname === item.href ? "" : "opacity-65"
                }`}
              >
                {pathname === item.href ? (
                  <img
                    className="relative flex-[0_0_auto]"
                    alt="Frame"
                    src="/images/frame-2147258686.svg"
                  />
                ) : (
                  <div className="relative w-[8.24px] h-[13.39px]">
                    <div className="absolute top-px left-0 w-[3px] h-[3px] bg-[#ffffff36]" />
                    <div className="absolute top-2.5 left-0 w-[3px] h-[3px] bg-[#ffffff36]" />
                    <div className="absolute top-[5px] left-[5px] w-[3px] h-[3px] bg-[#ffffff36]" />
                  </div>
                )}
                <div className="font-medium text-white text-sm xl:text-[17.3px] tracking-[0.35px]">
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA (unchanged) */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-[5.33px]">
            <Button className="inline-flex items-center justify-center gap-[10.67px] px-2 py-2 sm:px-3 sm:py-2.5 lg:px-[13.33px] lg:py-[10.67px] bg-[#ff3604] rounded-[2.67px] h-auto hover:bg-[#ff3604]/90 text-xs sm:text-sm lg:text-[18.7px]">
              <div className="font-medium text-white tracking-[-0.56px]">
                <span className="hidden sm:inline">Hire Robot Now</span>
                <span className="sm:hidden">Hire Robot</span>
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button (always right) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="lg:hidden fixed inset-0 bg-black  z-[9000px]  h-[100vh]  flex flex-col justify-between"
            >
              {/* Close button */}
              <div className="flex justify-end px-6 py-4 ml-0 mt-1 bg-black">
                <button
                  onClick={toggleMobileMenu}
                  className="text-white hover:text-[#ff3604] transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Links */}
              <div className=" min-h-[90vh] flex flex-col justify-between">
                <nav className="flex flex-col   ">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex justify-between items-center px-6 py-4 border-b border-[#1a1a1a] hover:bg-white/5 transition-colors"
                      >
                        <div className="font-medium text-white text-lg tracking-[0.35px]">
                          {item.label}
                        </div>
                        {pathname === item.href ? (
                          <img
                            className="w-[16px] h-[16px]"
                            alt="Frame"
                            src="/images/frame-2147258686.svg"
                          />
                        ) : (
                          <div className="relative w-[8.24px] h-[13.39px]">
                            <div className="absolute top-px left-0 w-[3px] h-[3px] bg-[#ffffff36]" />
                            <div className="absolute top-2.5 left-0 w-[3px] h-[3px] bg-[#ffffff36]" />
                            <div className="absolute top-[5px] left-[5px] w-[3px] h-[3px] bg-[#ffffff36]" />
                          </div>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  {/* mobile CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 }}
                    className="px-6 pt-4 flex space-x-2 justify-center items-center  mt-4"
                  >
                    <Button className="w-full inline-flex items-center justify-center gap-[10.67px] px-4 py-4 bg-[#ff3604] rounded-[2.67px] h-auto hover:bg-[#ff3604]/90">
                      <div className="relative w-fit [font-family:'Alliance_No.2-Medium',Helvetica] font-medium text-white text-base tracking-[-0.56px] leading-[normal]">
                        Hire Robot Now
                      </div>
                    </Button>
                    <div className="w-12 h-12 lg:w-[49.33px] lg:h-[54.33px] bg-white rounded-[2.67px] overflow-hidden flex items-center justify-center">
                      <div className="w-3 h-4 lg:w-[11px] lg:h-[17px] flex flex-col gap-[2.7px]">
                        <div className="w-1 h-1 bg-[#ff3604]" />
                        <div className="ml-2 lg:ml-[6.7px] w-1 h-1 bg-[#ff3604]" />
                        <div className="w-1 h-1 bg-[#ff3604]" />
                      </div>
                    </div>
                  </motion.div>
                </nav>

                {/* Social links bottom */}
                <div className="flex justify-start  ml-6 gap-6 py-6">
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
