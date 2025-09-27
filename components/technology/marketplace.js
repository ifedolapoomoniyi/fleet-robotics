"use client"
import React from 'react';
import Image from "next/image";

const Marketplace = () => {
    return (
        <section className="font-chakrapetch w-full px-10 py-12">
            <div className='py-12'>
                <h6 className="text-[#b4b4b4] font-chakrapetch font-medium sm:text-sm md:text-lg text-left mb-6">
                    MARKETPLACE
                </h6>
                <h1 className='font-black text-3xl sm:text-4xl  lg:text-7xl text-left w-full'>
                    The Marketplace Where Robots Work
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full ">
                  {/* Block 1  */}
                <div className="flex flex-col justify-between border border-[#1A1A1A]  p-6 bg-black/20">
                    <div>
                        <p className="font-allianceNo2 font-light text-sm  opacity-60 mb-3">
                            The Fleet marketplace is where customers and operators connect. A user funds a job in crypto, and a robot executes the action. Whether it’s a drone bookable for minutes, a cleaning bot by the hour, or a robot dog earning tips, every transaction is logged on-chain. Empowering a new era of autonomous services with accountability and efficiency.
                        </p>
                    </div>
                </div>

                {/* Block 3 */}
                <div className="flex flex-col justify-between border border-[#1A1A1A]  p-6 bg-black/20">
                    <div>
                        <ul className="opacity-60 uppercase text-left text-white text-sm font-normal space-y-3">
                            <li className="flex flex-row items-center gap-3">
                                <Image
                                    src="/images/Frame%20108029.svg"
                                    alt="list-icon"
                                    width={12}
                                    height={12}
                                />
                                Smart contracts hold payments in escrow
                            </li>
                            <li className="flex flex-row items-center gap-3">
                                <Image
                                    src="/images/Frame%20108029.svg"
                                    alt="list-icon"
                                    width={12}
                                    height={12}
                                />
                                Middleware connects contracts to robots (ROS, DJI, etc.)
                            </li>
                            <li className="flex flex-row items-center gap-3">
                                <Image
                                    src="/images/Frame%20108029.svg"
                                    alt="list-icon"
                                    width={12}
                                    height={12}
                                />
                                Transparent on-chain records
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketplace;