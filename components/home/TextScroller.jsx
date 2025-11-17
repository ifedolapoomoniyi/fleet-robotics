"use client";

import React, { useState, useEffect } from "react";

const VerticalTextScroller = () => {
  const texts = [
    "drones",
    "agents",
    "robots"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="items-center inline-flex">
      <div className="w-43 lg:w-57 sm:pl-2 lg:pl-3">
        {/* Text container with fixed height to prevent layout shift */}
        <div className="relative h-32 overflow-visible">
          {texts.map((text, index) => (
            <div
              key={index}
              className={`absolute flex items-center justify-center transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "text-white opacity-100 transform translate-y-0"
                  : index === (currentIndex - 1 + texts.length) % texts.length
                  ? "opacity-12 transform bg-gradient-to-t from-white/70 to-white/0 bg-clip-text text-transparent -translate-y-full"
                  : "opacity-12 transform translate-y-full bg-gradient-to-b text-transparent from-white/70 to-white/5 bg-clip-text"
              }`}
            >
              <h1 className="font-bold">{text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTextScroller;
