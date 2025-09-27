"use client";
import React, { useState } from "react";
import Image from "next/image";

const DataLayer = () => {
    const [videoFailed, setVideoFailed] = useState(false);

    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between">
            {/* Background media */}
            {!videoFailed ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/technology/alt%20vid2.svg"
                    onError={() => setVideoFailed(true)}
                    onStalled={() => setVideoFailed(true)}
                    onAbort={() => setVideoFailed(true)}
                    style={{ maxHeight: "100vh" }}
                >
                    <source
                        src="/images/technology/fleet-data-stream.mp4"
                        type="video/mp4"
                        onError={() => setVideoFailed(true)}
                    />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <Image
                    src="/images/technology/alt%20vid2.svg"
                    alt="Background"
                    fill
                    className="object-cover transition-all duration-300"
                    priority
                    sizes="100vw"
                />
            )}

            {/* Foreground content */}
            <div className="relative z-10 flex top-0 flex-col items-center justify-center px-4 py-6 text-center text-white bg-gradient-to-b from-[#000000] via-[#000000] to-transparent">
                <h6 className="text-[#b4b4b4] font-chakrapetch font-medium text-sm sm:text-base md:text-lg">
                    DATA LAYER
                </h6>

                <h1 className="mt-2 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight w-full">
                   Turning Robot Data <span className="font-light text-[#ffffff]/90 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">into an Asset</span>
                    {/*<span className="block font-light text-[#b4b4b4] text-2xl sm:text-3xl md:text-5xl lg:text-7xl">*/}

                </h1>

                <p className="mt-2 max-w-4xl text-xs sm:text-base md:text-lg font-light text-[#ffffff]/90 leading-relaxed">
                    Robots generate valuable streams of data,{" "}
                    <strong className="font-bold text-white">
                        GPS, video, sensor readings.
                    </strong>{" "}
                    Fleet makes this data liquid. Operators can store it in decentralized
                    systems like IPFS or Arweave and package it as Data NFTs or continuous
                    subscriptions. Buyers range from AI trainers to logistics companies.
                </p>
            </div>

            {/* Footer caption */}
            <div className="relative z-10 px-4 pb-40 text-center uppercase">
                <h6 className="text-[#b4b4b4] font-chakrapetch font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                    Data isn’t wasted — it becomes a new revenue stream.
                </h6>
            </div>
        </section>
    );
};

export default DataLayer;
