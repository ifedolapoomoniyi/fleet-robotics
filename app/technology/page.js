"use client";
import React from 'react';
import HeroTechnology from "@/components/technology/hero-technology";
import DataLayer from "@/components/technology/data-layer";
import Infrastructure from "@/components/technology/infrastructure";
import Marketplace from "@/components/technology/marketplace";

const Page = () => {
    return (
        <main className="flex items-center flex-col justify-center  text-white">
            <HeroTechnology />
            <Marketplace/>
            <DataLayer/>
            <Infrastructure/>
        </main>
    );
};

export default Page;