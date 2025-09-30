"use client"
import React from 'react';
import Image from "next/image";

const RandomSection = () => {
    return (
        <section  className="hidden md:inline-flex md:text-sm  lg:text-lg font-chakrapetch w-full px-10 py-12">
            <div  className="grid grid-cols-1 justify-between sm:grid-cols-3 lg:grid-cols-3 w-full" >
                <div className="flex flex-col items-center uppercase p-3 bg-black/20">
                    <li className="flex uppercase flex-row items-center gap-3">
                        <Image
                            src="/images/Frame%20108029.svg"
                            alt="list-icon"
                            width={12}
                            height={12}
                        />
                        Instant booking
                    </li>
                </div>

                <div className="flex flex-col  items-center  p-3 bg-black/20">
                    <li className="flex uppercase flex-row items-center gap-3">
                        <Image
                            src="/images/Frame%20108029.svg"
                            alt="list-icon"
                            width={12}
                            height={12}
                        />
                        trustless payments
                    </li>
                </div>

                <div className="flex flex-col items-center p-3 bg-black/20">
                    <li className="flex uppercase flex-row items-center gap-3">
                        <Image
                            src="/images/Frame%20108029.svg"
                            alt="list-icon"
                            width={12}
                            height={12}
                        />
                        verifiable execution
                    </li>
                </div>
            </div>

        </section>
    );
};

export default RandomSection;