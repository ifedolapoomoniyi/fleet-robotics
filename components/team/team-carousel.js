"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import {FaDiscord, FaLinkedin} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";


const teamMembers = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "CTO & Co-founder",
        description:
            "Sarah Johnson is the CTO and Co-founder at First Robotics. She is responsible for the overall direction of the company and the development of its core technology. Sarah is a passionate advocate for the use of robotics to improve people's lives.",
        image: "/images/team/Rectangle 2.svg",
        social: {
            linkedin: "#",
            website: "#",
            twitter: "#",
        },
    },
    {
        id: 2,
        name: "Adam Consuli",
        title: "CEO & Engineer",
        description:
            "Adam Consuli is the CEO and Engineer at First Robotics. He is responsible for the overall direction of the company and the development of its core technology. Adam is a passionate advocate for the use of robotics to improve people's lives.",
        image: "/images/team/Rectangle 3.svg",
        social: {
            linkedin: "#",
            website: "#",
            twitter: "#",
        },
    },
    {
        id: 3,
        name: "Michael Chen",
        title: "Lead Developer",
        description:
            "Michael Chen is the Lead Developer at First Robotics. He is responsible for the overall direction of the company and the development of its core technology. Michael is a passionate advocate for the use of robotics to improve people's lives.",
        image: "/images/team/Rectangle 1.svg",
        social: {
            linkedin: "#",
            website: "#",
            twitter: "#",
        },
    },
    {
        id: 4,
        name: "Michael Chen",
        title: "Lead Developer",
        description:
            "Michael Chen is the Lead Developer at First Robotics. He is responsible for the overall direction of the company and the development of its core technology. Michael is a passionate advocate for the use of robotics to improve people's lives.",
        image: "/images/team/Rectangle 3.svg",
        social: {
            linkedin: "#",
            website: "#",
            twitter: "#",
        },
    },
    {
        id: 5,
        name: "Michael Chen",
        title: "Lead Developer",
        description:
            "Michael Chen is the Lead Developer at First Robotics. He is responsible for the overall direction of the company and the development of its core technology. Michael is a passionate advocate for the use of robotics to improve people's lives.",
        image: "/images/team/Rectangle 2.svg",
        social: {
            linkedin: "#",
            website: "#",
            twitter: "#",
        },
    },
    {
        id: 6,
        name: "Michael Chen",
        title: "Lead Developer",
        description:
            "Michael Chen is the Lead Developer at First Robotics. He is responsible for the overall direction of the company and the development of its core technology. Michael is a passionate advocate for the use of robotics to improve people's lives.",
        image: "/images/team/Rectangle 1.svg",
        social: {
            linkedin: "#",
            website: "#",
            twitter: "#",
        },
    },
]

export default function TeamCarousel() {
    const [currentIndex, setCurrentIndex] = useState(1) // Start with middle item
    const [isAnimating, setIsAnimating] = useState(false)

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    }

    const prevSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    }

    const goToSlide = (index) => {
        if (isAnimating || index === currentIndex) return
        setIsAnimating(true)
        setCurrentIndex(index)
    }

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(false), 500)
        return () => clearTimeout(timer)
    }, [currentIndex])

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const getCardPosition = (index) => {
        const diff = index - currentIndex
        if (diff === 0) return "center"
        if (diff === -1 || (diff === teamMembers.length - 1 && currentIndex === 0)) return "left"
        if (diff === 1 || (diff === -(teamMembers.length - 1) && currentIndex === teamMembers.length - 1)) return "right"
        return "hidden"
    }

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 py-8 bg-[url('/images/team/aboutcover 1.svg')] min-h-screen">
            {/* Carousel Section with Side Arrows */}
            <div className="relative flex items-center justify-center mb-12">
                 {/* Cards Container */}
                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                    {teamMembers.map((member, index) => {
                        const position = getCardPosition(index)
                        const isActive = position === "center"

                        return (
                            <div
                                key={member.id}
                                className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                                    position === "center"
                                        ? "z-10 scale-100 opacity-100 translate-x-0"
                                        : position === "left"
                                            ? "z-5 scale-75 opacity-60 -translate-x-64 md:-translate-x-80"
                                            : position === "right"
                                                ? "z-5 scale-75 opacity-60 translate-x-64 md:translate-x-80"
                                                : "z-0 scale-50 opacity-0"
                                } ${isAnimating ? "pointer-events-none" : ""}`}
                                onClick={() => !isActive && goToSlide(index)}
                            >
                                {/* Card */}
                                <div className="relative group">
                                    {/* Image Container with Gradient Background */}
                                    <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden">
                                        {/* Gradient Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-500 to-black opacity-90" />

                                        {/* Profile Image */}
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            height={100}
                                            width={100}
                                            className={`absolute inset-0 w-full h-full object-cover group-hover:mix-blend-multiply transition-transform duration-700 group-hover:scale-105 ${isActive? 'opacity-100': 'opacity-50'}`}
                                        />

                                        {/* Overlay for better contrast */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>

                                    {/* Animated Border */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                                            isActive
                                                ? "ring-2 ring-orange-400 ring-opacity-60 shadow-2xl shadow-orange-500/20"
                                                : "ring-1 ring-white/10"
                                        }`}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>

            {/* Person Details Section Below Carousel */}
            <div className="text-center text-white px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="flex w-full items-center justify-center gap-7 mb-2">
                        <button
                            className="p-3 rounded-sm cursor-pointer bg-white/10 hover:bg-white/20 transition-colors text-white "
                            onClick={prevSlide}
                            disabled={isAnimating}
                            aria-label="Previous"
                        >
                            <Image
                                src="/images/technology/left-whir.svg"
                                alt="list-icon"
                                width={12}
                                height={12}
                            />
                        </button>



                        <h2 className="text-3xl md:text-4xl font-bold transition-all duration-500 text-balance">
                            {teamMembers[currentIndex].name}
                        </h2>

                        <button
                            className="p-3 rounded-sm cursor-pointer bg-white/10 hover:bg-white/20 transition-colors text-white "
                            onClick={nextSlide}
                            disabled={isAnimating}
                            aria-label="Next"
                        >
                            <Image
                                src="/images/technology/right-whir.svg"
                                alt="list-icon"
                                width={12}
                                height={12}
                            />
                        </button>
                    </div>

                    <p className="text-lg md:text-xl font-light text-white/60 mb-6 transition-all duration-500">
                        {teamMembers[currentIndex].title}
                    </p>
                    <p className="text-sm md:text-base text-gray-300/80 font-chakrapetch font-light leading-relaxed mb-8 transition-all duration-500 text-pretty max-w-xl mx-auto">
                        {teamMembers[currentIndex].description}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mb-8">
                        {teamMembers[currentIndex].social.linkedin && (
                            <a
                                href={teamMembers[currentIndex].social.linkedin}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3"
                                aria-label="LinkedIn"
                            >
                                <FaDiscord color='gray' />
                            </a>
                        )}
                        {teamMembers[currentIndex].social.website && (
                            <a
                                href={teamMembers[currentIndex].social.website}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3"
                                aria-label="Website"
                            >
                                <FaLinkedin color='gray' />
                            </a>
                        )}
                        {teamMembers[currentIndex].social.twitter && (
                            <a
                                href={teamMembers[currentIndex].social.twitter}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-3"
                                aria-label="Twitter"
                            >
                                <FaSquareXTwitter color='gray' />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
