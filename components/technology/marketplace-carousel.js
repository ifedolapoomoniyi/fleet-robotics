"use client"

import React, { useEffect, useState, useCallback, useRef } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const products = [
    {
        id: 1,
        name: "Leaner V2",
        model: "FLEET-03428-AX",
        category: "Cleaning bot",
        description: "Advanced autonomous cleaning robot with AI-powered navigation and eco-friendly operation for commercial spaces.",
        image: "/images/technology/atlas cleaner.svg",
        status: "ACTIVE",
        price: "2.5 ETH/hour"
    }, {
        id: 2,
        name: "Sensorcam S4",
        model: "FLEET-03529-SC",
        category: "Surveillance",
        description: "High-definition surveillance robot with 360° vision, night vision capabilities, and real-time threat detection.",
        image: "/images/technology/sensorcam.svg",
        status: "ACTIVE",
        price: "1.8 ETH/hour"
    }, {
        id: 3,
        name: "Atlas Cleaner V3",
        model: "FLEET-03628-AC",
        category: "Cleaning bot",
        description: "Industrial-grade cleaning solution with advanced filtration systems and smart scheduling capabilities.",
        image: "/images/technology/atlas cleaner.svg",
        status: "ACTIVE",
        price: "3.2 ETH/hour"
    }, {
        id: 4,
        name: "TCOX Mini",
        model: "FLEET-03728-TX",
        category: "Transport",
        description: "Compact autonomous transport robot for last-mile delivery and warehouse operations with GPS tracking.",
        image: "/images/technology/tcox.png",
        status: "ACTIVE",
        price: "2.0 ETH/hour"
    }, {
        id: 5,
        name: "RoboRuk Transport",
        model: "FLEET-03828-RR",
        category: "Transport",
        description: "Heavy-duty transport robot capable of carrying up to 500kg with advanced obstacle avoidance systems.",
        image: "/images/technology/advertastic_19774_an_advanced_manufacturing_robot._Black_white__e214dd08-818b-4c66-af48-2f8693f827cb 1.svg",
        status: "ACTIVE",
        price: "4.1 ETH/hour"
    }
]

export default function MarketplaceCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const carouselRef = useRef(null)

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % products.length)
    }, [])

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
    }, [])

    const goToSlide = useCallback((index) => {
        setActiveIndex(index)
    }, [])

    const toggleAutoPlay = useCallback(() => {
        setIsAutoPlaying(prev => !prev)
    }, [])

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(nextSlide, 4000)
        return () => clearInterval(interval)
    }, [nextSlide, isAutoPlaying])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault()
                prevSlide()
            } else if (event.key === 'ArrowRight') {
                event.preventDefault()
                nextSlide()
            } else if (event.key === ' ') {
                event.preventDefault()
                toggleAutoPlay()
            }
        }

        if (carouselRef.current) {
            carouselRef.current.addEventListener('keydown', handleKeyDown)
            return () => {
                if (carouselRef.current) {
                    carouselRef.current.removeEventListener('keydown', handleKeyDown)
                }
            }
        }
    }, [nextSlide, prevSlide, toggleAutoPlay])

    // Touch gestures
    const handleTouchStart = (e) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe) {
            nextSlide()
        } else if (isRightSwipe) {
            prevSlide()
        }
    }




    return (
        <section className="relative w-full max-w-[1440px] mx-auto px-2 sm:px-4">
            {/* Header with controls */}
            <div className="flex items-center justify-between mb-6">
                <div className="text-white hidden">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">Fleet Marketplace</h2>
                    <p className="text-gray-300 text-sm sm:text-base">
                        {products.length} robots available • {products.filter(p => p.status === 'available').length} ready for hire
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {/* Auto-play toggle */}
                    <button
                        onClick={toggleAutoPlay}
                        className="flex items-center gap-2 px-4 py-3 cursor-pointer bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm"
                        aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
                    >
                        {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        <span className="hidden sm:inline">
                            {isAutoPlaying ? 'Pause' : 'Play'}
                        </span>
                    </button>

                    {/* Navigation arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-sm cursor-pointer bg-white/10 hover:bg-white/20 transition-colors text-white "
                            aria-label="Previous robot"
                        >
                            <Image
                                src="/images/technology/left-whir.svg"
                                alt="list-icon"
                                width={12}
                                height={12}
                            />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-sm cursor-pointer bg-white/10 hover:bg-white/20 transition-colors text-white"
                            aria-label="Next robot"
                        >
                            <Image
                                src="/images/technology/right-whir.svg"
                                alt="list-icon"
                                width={12}
                                height={12}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main carousel */}
            <div
                ref={carouselRef}
                className="relative flex items-center justify-center overflow-hidden min-h-[520px] sm:min-h-[500px] md:min-h-[540px] focus:outline-none max-w-full mx-auto"
                tabIndex={0}
                role="region"
                aria-label="Robot marketplace carousel"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <AnimatePresence initial={false}>
                    {products.map((product, index) => {
                        const offset = (index - activeIndex + products.length) % products.length

                        // Enhanced position logic for better responsive design
                        let position = 0
                        let scale = 0.8
                        let opacity = 0.4
                        let zIndex = 1

                        if (offset === 0) {
                            position = 0
                            scale = 1
                            opacity = 1
                            zIndex = 20
                        } else if (offset === 1) {
                            position = window.innerWidth < 768 ? 280 : 340
                            scale = 0.85
                            opacity = 1
                            zIndex = 10
                        } else if (offset === 2) {
                            position = window.innerWidth < 768 ? 460 : 580
                            scale = 0.7
                            opacity = 1
                            zIndex = 5
                        } else if (offset === products.length - 1) {
                            position = window.innerWidth < 768 ? -280 : -340
                            scale = 0.85
                            opacity = 1
                            zIndex = 10
                        } else if (offset === products.length - 2) {
                            position = window.innerWidth < 768 ? -460 : -580
                            scale = 0.7
                            opacity = 1
                            zIndex = 5
                        } else {
                            return null
                        }

                        const isActive = offset === 0

                        return (
                            <motion.div
                                key={product.id}
                                className="absolute w-[280px] sm:w-[300px] md:w-[320px] lg:w-[360px] h-[480px] sm:h-[520px] cursor-pointer"
                                initial={{ opacity: 0, scale: 0.6, x: position }}
                                animate={{
                                    x: position,
                                    scale: scale,
                                    opacity: opacity,
                                    zIndex: zIndex,
                                }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 25,
                                    opacity: { duration: 0.3 }
                                }}
                                onClick={() => !isActive && goToSlide(index)}
                                role="tabpanel"
                                aria-label={`Robot ${product.name}`}
                            >
                                <div
                                    className={`relative w-[300px] sm:w-[400px]   rounded-sm overflow-hidden shadow-xl transition-all duration-500 ${
                                        isActive
                                            ? "bg-gradient-to-br from-[#eb2f01] to-[#eb2f01]"
                                            : "bg-[#141313fa] hover:bg-[#141313fa] group shadow-gray-900/10"
                                    }`}
                                >
                                    {/* Enhanced hover effect for inactive cards */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#eb2f01]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    )}

                                    {/* Status badge */}
                                    <div
                                        className={`absolute top-4 left-4 px-2 py-1 flex-row flex items-center tracking-wider rounded-xs font-chakrapetch text-md font-semibold z-20 ${isActive? "bg-white text-[#555555]" : "bg-[#555555]/60 text-white"}`}
                                    >
                                       <span className="inline-block w-2 h-2 rounded-full bg-[#95C907] mr-2 align-middle" />
                                        {product.status}
                                    </div>

                                    {/* Price badge */}
                                    <div className={`hidden absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-20 ${
                                        isActive ? "bg-white/20 text-white" : "bg-black/60 text-white"
                                    }`}>
                                        {product.price}
                                    </div>

                                    {/* Enhanced image container */}
                                    <div className="relative h-48 sm:h-52 flex items-center justify-center p-6 z-20">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={product.image}
                                                alt={`${product.name} - ${product.category}`}
                                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                                                sizes="(max-width: 768px) 280px, (max-width: 1024px) 500px, 400px"
                                                width={350}
                                                height={350}
                                            />
                                        </div>
                                    </div>

                                    {/* Enhanced info section */}
                                    <div className={`p-4 sm:p-6 space-y-4 relative tracking-wide font-allianceNo2 font-medium z-20 ${
                                        isActive 
                                            ? "bg-gradient-to-b from-transparent via-[#eb2f01] to-[#eb2f01]/100" 
                                            : "bg-gradient-to-b from-transparent via-[#141313fa] to-[#141313fa]/100"
                                    }`}>
                                        <div>
                                            <h3 className="text-lg sm:text-3xl font-bold text-white mb-3">{product.name}</h3>
                                            <div className="flex items-center gap-3 text-xs sm:text-sm">
                                                <span className={`px-2 py-1 rounded text-xs font-mono ${
                                                    isActive ? "bg-black/60 text-white" : "bg-white/30 text-white-300"
                                                }`}>
                                                    {product.model}
                                                </span>
                                                <span className={`px-2 py-1 rounded text-xs ${
                                                    isActive ? "bg-black/20 text-white/80" : "bg-white/10 text-white-400"
                                                }`}>
                                                    {product.category}
                                                </span>
                                            </div>
                                        </div>

                                        <p className={`text-xs font-allianceNo2 font-light sm:text-sm ${
                                            isActive ? "text-white/90" : "text-gray-300/70"
                                        }`}>
                                            {product.description}
                                        </p>
                                        <button className="flex cursor-pointer flex-row items-center gap-3">
                                            <Image
                                                src={isActive ? "/images/technology/right-whir.svg" : "/images/Frame%20108029.svg"}
                                                alt="list-icon"
                                                width={10}
                                                height={10}
                                                className="transition-all duration-300 group-hover:opacity-100"
                                            />
                                            VIEW DETAILS
                                        </button>

                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-8 gap-2">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex 
                                ? 'bg-orange-500 w-8' 
                                : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to robot ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress bar */}
            {/*{isAutoPlaying && (*/}
            {/*    <div className="w-full bg-white/10 rounded-full h-1 mt-4 overflow-hidden">*/}
            {/*        <motion.div*/}
            {/*            className="h-full bg-orange-500"*/}
            {/*            initial={{ width: '0%' }}*/}
            {/*            animate={{ width: '100%' }}*/}
            {/*            transition={{ duration: 4, ease: 'linear' }}*/}
            {/*            key={activeIndex}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*)}*/}


        </section>
    )
}
