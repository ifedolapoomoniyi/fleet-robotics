"use client"
import React from 'react';
import Image from "next/image";
import TeamCarousel from "@/components/team/team-carousel";

const Page = () => {
    return (
        <main className="overflow-hidden w-full flex flex-col relative min-h-screen text-white">
            <section className='bg-linear-0 h-[100%] from-transparent via-[#eb2f01]/30 to-transparent relative'>
                {/* Background Image Overlay */}
                <div
                    className="absolute -top-60 md:-top-50 inset-0 w-full h-full"
                    style={{
                        zIndex: 0,
                        pointerEvents: "none"
                    }}
                >
                    <Image
                        src="/images/team/aboutcover 1.svg"
                        alt="Background"
                        fill
                        className="object-cover sm:object-contain md:object-cover transition-all duration-300"
                        priority
                        sizes="(max-width: 640px) 100vw,
                               (max-width: 768px) 100vw,
                               (max-width: 1024px) 100vw,
                               100vw"
                    />
                </div>

                {/* Content with higher z-index */}
                <div className="relative z-10">
                    <h1 className='font-black mb-[100px] font-allianceNo2 text-3xl sm:text-4xl lg:text-6xl text-center mt-[80px] md:mt-[120px] w-full'>
                        Our <span className='font-light'>Team</span>
                    </h1>

                    <TeamCarousel/>
                </div>
            </section>
        </main>
    );
};

export default Page;