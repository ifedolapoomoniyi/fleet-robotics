"use client";
import React, {useState} from "react";
import Image from "next/image";

const HeroTechnology = () => {
    const [videoFailed, setVideoFailed] = useState(false);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {!videoFailed ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover
                   sm:object-contain md:object-cover
                   min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/technology/alt%20vid%201.svg"
                    onError={() => setVideoFailed(true)}
                    onStalled={() => setVideoFailed(true)}
                    onAbort={() => setVideoFailed(true)}
                    style={{
                        aspectRatio: 'auto',
                        maxHeight: '100vh',
                    }}
                >
                    <source
                        src="/images/technology/FBG3.mp4"
                        type="video/mp4"
                        onError={() => setVideoFailed(true)}
                    />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <Image
                    src="/images/technology/alt%20vid%201.svg"
                    alt="Background"
                    fill
                    className="object-cover sm:object-contain md:object-cover
                   transition-all duration-300"
                    priority
                    sizes="(max-width: 640px) 100vw,
               (max-width: 768px) 100vw,
               (max-width: 1024px) 100vw,
               100vw"
                />
            )}

            {/* Foreground content */}
            <div className="relative p-5 z-10 flex flex-col items-center justify-center top-[90px] text-white">
                <h6 className="text-[#b4b4b4] font-chakrapetch font-medium sm:text-sm md:text-lg text-center">
                    HOW FLEET ROBOTICS WORKS
                </h6>
                    <h1 className="flex flex-col font-allianceNo2 mt-[60px]  gap-2 w-[90%]">
                        <span className="font-black text-3xl sm:text-4xl  lg:text-7xl text-center md:text-right w-full">
                             Every robot that joins Fleet
                        </span>
                        <span className="font-black text-3xl sm:text-4xl   lg:text-7xl  text-center md:text-left w-full">
                            gets a Fleet ID{" "}
                            <span className="font-light text-[#b4b4b4] text-3xl sm:text-4xl   lg:text-8xl">
                                - its on chain passport.
                            </span>
                        </span>
                    </h1>
            </div>
          <div className="grid grid-cols-1  w-full justify-end items-start absolute right-1/6  h-full">
              <div className="relative z-10 flex flex-col items-start gap-10 justify-start mt-[100px] mb-[0px] ml-10 md:ml-auto md:mr-10">
                  <div className="max-w-[800px] opacity-90 text-left text-white text-xl font-normal my-6 px-5">
                      <h2 className="mb-7 font-semibold text-xl">FLEET IDs</h2>
                      <p className="font-light text-md opacity-80">
                          A Fleet ID records who owns the robot, who operates it, and builds a reputation log based on uptime, completed work, and feedback.
                          On the technical side, IDs follow DID/NFT standards and can be tied to a robot’s hardware fingerprint (from a secure chip, controller, or TPM) to prevent spoofing. They’re portable across chains, so an ID created once can move wherever the network expands.
                      </p>
                  </div>
                  <ul className="max-w-[850px] opacity-95 uppercase text-left text-white text-xl font-normal my-6 px-5 list-none space-y-3">
                      <li className="flex flex-row items-center gap-3"><Image src="/images/Frame%20108029.svg" alt="list-icon" width={10} height={10}/>Built on DID/NFT Standards</li>
                      <li className="flex flex-row items-center gap-3"><Image src="/images/Frame%20108029.svg" alt="list-icon" width={10} height={10}/>Linked to secure hardware fingerprints (chip, controller, TPM)</li>
                      <li className="flex flex-row items-center gap-3"><Image src="/images/Frame%20108029.svg" alt="list-icon" width={10} height={10}/>Portable across chains</li>
                  </ul>
              </div>
              <div className="relative z-10 flex flex-col items-center mt-[20px] mb-[100px]"></div>
          </div>



        </section>
    );
};

export default HeroTechnology;
