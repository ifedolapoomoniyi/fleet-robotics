"use client";

import React, { useEffect, useState } from "react";

const ScrollIndicator = ({left}) => {
  const numBars = 70;
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollTop / docHeight; // 0 → 1
      setCurrentValue(scrolled * numBars);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [numBars]);

  return (
    <div className={`fixed ${left? "left-1" : "right-1"} top-2 bottom-2 z-[1000] flex flex-col justify-between`}>
      {Array.from({ length: numBars }).map((_, index) => (
        <div
          key={index}
          className={`md:w-[25px] w-[10px] h-[2px] transition-all duration-300 ease-in-out ${
            index < Math.floor(currentValue)
              ? "bg-[#FF3604] opacity-100 scale-x-100"
              : "bg-white/40 opacity-40 scale-x-100"
          }`}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
