"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./roadmap/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <header className="fixed top-0 left-0 right-0 w-full md:h-[84px] bg-[#000000cc] border-b-[1.33px] border-[#1a1a1a] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)] z-50">
      {/* Decorative Lines - Desktop Only */}
      <img
        className="hidden lg:block fixed top-0 left-0 w-[71px] z-[51]"
        alt="Loadbar left"
        src="/images/loadbar-left-1.svg"
      />
      <img
        className="hidden lg:block fixed top-0 right-0 w-[72px] z-[51]"
        alt="Loadbar right"
        src="/images/loadbar-left-1.svg"
      />

      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-8 lg:px-[98px]">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]"
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
                <div className="relative w-fit mt-[-1.33px] [font-family:'Chakra_Petch',Helvetica] font-medium text-white text-sm xl:text-[17.3px] tracking-[0.35px] leading-[normal]">
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          <img
            className="absolute md:top-[22px] left-1/2 transform -translate-x-1/2 w-[80px] h-6 sm:w-[100px] sm:h-7 lg:w-[119px] lg:h-9"
            alt="Logo"
            src="/images/logo-1.png"
          />

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-[5.33px]">
            <Button className="inline-flex items-center justify-center gap-[10.67px] px-2 py-2 sm:px-3 sm:py-2.5 lg:px-[13.33px] lg:py-[10.67px] bg-[#ff3604] rounded-[2.67px] h-auto hover:bg-[#ff3604]/90 text-xs sm:text-sm lg:text-[18.7px]">
              <div className="relative w-fit mt-[-1.33px] [font-family:'Alliance_No.2-Medium',Helvetica] font-medium text-white tracking-[-0.56px] leading-[normal]">
                <span className="hidden sm:inline">Hire Robot Now</span>
                <span className="sm:hidden">Hire Robot</span>
              </div>
            </Button>

            <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-[45.33px] lg:h-11 bg-white rounded-[2.67px] overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[8px] h-[12px] sm:w-[10px] sm:h-[15px] lg:w-[11px] lg:h-[17px] flex flex-col gap-[2px] lg:gap-[2.7px]">
                <div className="ml-0 w-1 h-1 mt-0 bg-[#ff3604]" />
                <div className="ml-[5px] sm:ml-[6px] lg:ml-[6.7px] w-1 h-1 bg-[#ff3604]" />
                <div className="ml-0 w-1 h-1 bg-[#ff3604]" />
              </div>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="sm:hidden">
            <Button className="inline-flex items-center justify-center px-3 py-2 bg-[#ff3604] rounded-[2.67px] h-auto hover:bg-[#ff3604]/90 text-xs">
              <div className="relative w-fit [font-family:'Alliance_No.2-Medium',Helvetica] font-medium text-white tracking-[-0.56px] leading-[normal]">
                Hire
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay with animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="lg:hidden absolute top-full left-0 right-0 bg-[#000000f5] backdrop-blur-md border-b border-[#1a1a1a] z-40"
            >
              <nav className="flex flex-col py-4">
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
                      className="flex items-center gap-3 px-6 py-4 hover:bg-white/5 transition-colors"
                    >
                      {pathname === item.href ? (
                        <img
                          className="w-[8.24px] h-[13.39px]"
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
                      <div className="[font-family:'Chakra_Petch',Helvetica] font-medium text-white text-lg tracking-[0.35px] leading-[normal]">
                        {item.label}
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Menu CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2 }}
                  className="px-6 pt-4 border-t border-[#1a1a1a] mt-4"
                >
                  <Button className="w-full inline-flex items-center justify-center gap-[10.67px] px-4 py-3 bg-[#ff3604] rounded-[2.67px] h-auto hover:bg-[#ff3604]/90">
                    <div className="relative w-fit [font-family:'Alliance_No.2-Medium',Helvetica] font-medium text-white text-base tracking-[-0.56px] leading-[normal]">
                      Hire Robot Now
                    </div>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
