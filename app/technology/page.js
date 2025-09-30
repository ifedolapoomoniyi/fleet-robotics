"use client";
import React from 'react';
import HeroTechnology from "@/components/technology/hero-technology";
import DataLayer from "@/components/technology/data-layer";
import Infrastructure from "@/components/technology/infrastructure";
import Marketplace from "@/components/technology/marketplace";
import EverythingRunsThrough from "@/components/roadmap/EverythingRunsThrough";
import {WhyItMattersSection} from "@/components/roadmap/WhyItMattersSection";
import MarketplaceCarousel from "@/components/technology/marketplace-carousel";
import RandomSection from "@/components/technology/random-section";
import MobileFleet from '@/components/technology/MobileFleet';

const Page = () => {
    return (
        <main  className=" overflow-hidden w-full flex flex-col relative min-h-screen bg-black text-white">
            <HeroTechnology />
            <MobileFleet/>
            <Marketplace/>
            <MarketplaceCarousel/>
            <RandomSection/>
            <EverythingRunsThrough/>
            <DataLayer/>
            <Infrastructure/>
            <WhyItMattersSection/>
        </main>
    );
};

export default Page;