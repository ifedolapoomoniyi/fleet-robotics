"use client";
import React from "react";
import Image from "next/image";

const Infrastructure = () => {
    return (
        <section className="font-chakrapetch w-full px-10 py-12">
            <div className='py-12'>
                <h6 className="text-[#b4b4b4] font-chakrapetch font-medium sm:text-sm md:text-lg text-left mb-6">
                   INFRASTRUCTURE
                </h6>
                <h1 className='font-black text-3xl sm:text-4xl  lg:text-7xl text-left w-full'>
                    Infrastructure for a Robot Economy
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                {/* Block 1 - Image */}
                <div className="flex justify-center items-center border border-[#1A1A1A]  p-6 bg-black/20">
                    <Image
                        src="/images/technology/coin%201.svg"
                        alt="coin-image"
                        width={280}
                        height={280}
                        className="object-contain max-w-[200px] sm:max-w-[250px] lg:max-w-[300px]"
                    />
                </div>

                {/* Block 2 - Why $Fleet */}
                <div className="flex flex-col justify-between border border-[#1A1A1A]  p-6 bg-black/20">
                    <div>
                        <h4 className="text-md font-bold mb-4 text-[#ffffff]">
                            WHY $FLEET
                        </h4>
                        <p className="font-allianceNo2 font-light text-sm  opacity-60 mb-3">
                            As the network grows, accountability and reliability are built into
                            the core. Operators stake $FLEET to onboard robots, creating trust
                            and preventing spam.
                        </p>
                        <p className="font-allianceNo2 font-light text-sm  opacity-60">
                            Physical infrastructure like charging docks and maintenance hubs
                            integrate seamlessly, while insurance pools backstop failures.
                        </p>
                    </div>
                    <div className="mt-4">
                        <p className="font-chakrapetch font-light text-sm w-2/3 opacity-30">
                            A robust backbone where robots, operators, and infrastructure
                            thrive.
                        </p>
                    </div>
                </div>

                {/* Block 3 - Technical Notes */}
                <div className="flex flex-col justify-between border border-[#1A1A1A]  p-6 bg-black/20">
                    <div>
                        <h4 className="text-md font-bold mb-4 text-[#ffffff]">
                            Technical Notes
                        </h4>
                        <ul className="opacity-60 uppercase text-left text-white text-sm font-normal space-y-3">
                            <li className="flex flex-row items-center gap-3">
                                <Image
                                    src="/images/Frame%20108029.svg"
                                    alt="list-icon"
                                    width={12}
                                    height={12}
                                />
                                Staking contracts enforce accountability
                            </li>
                            <li className="flex flex-row items-center gap-3">
                                <Image
                                    src="/images/Frame%20108029.svg"
                                    alt="list-icon"
                                    width={12}
                                    height={12}
                                />
                                Risk pools cover underperformance or damage
                            </li>
                            <li className="flex flex-row items-center gap-3">
                                <Image
                                    src="/images/Frame%20108029.svg"
                                    alt="list-icon"
                                    width={12}
                                    height={12}
                                />
                                Penalties for misreporting or downtime
                            </li>
                            <li className="flex flex-row items-center gap-3">
                                <Image
                                    src="/images/Frame%20108029.svg"
                                    alt="list-icon"
                                    width={12}
                                    height={12}
                                />
                                Insurance pools backstop risk
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <p className="font-chakrapetch font-light text-sm w-2/3 ">
                            Fleet is the solution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
