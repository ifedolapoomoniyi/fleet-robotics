"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const FuturisticNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  // Removed entry animation variants

  const mobileMenuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    },
    open: {
      x: '0%',
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3 }
    },
    open: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Left Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative text-white/80 hover:text-cyan-400 transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Center Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <motion.span
              className="ml-3 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              NEXUS
            </motion.span>
          </motion.div>

          {/* Right CTA Button - Desktop */}
          <div className="hidden lg:block">
            <motion.button
              className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, borderRadius: '50%' }}
                whileHover={{ scale: 1.5, borderRadius: '0%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/80 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                variants={overlayVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Side Menu */}
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed right-0 top-0 h-full w-80 max-w-[80vw] bg-gradient-to-br from-black via-gray-900 to-black border-l border-cyan-500/30 lg:hidden"
              >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
                  <div className="flex items-center">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <div className="relative bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <span className="ml-3 text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      NEXUS
                    </span>
                  </div>
                  
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="p-6 space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block relative group"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: 0.1 + index * 0.1 }
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:to-purple-500/10">
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: index * 0.3 
                          }}
                        />
                        <span className="text-white/80 group-hover:text-white font-medium">
                          {link.name}
                        </span>
                        <motion.div
                          className="ml-auto w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </motion.a>
                  ))}
                  
                  {/* CTA Button */}
                  <motion.div
                    className="pt-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      className="w-full relative px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"
                        initial={{ x: '100%' }}
                        whileHover={{ x: '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        Get Started
                        <motion.div
                          className="ml-2 w-4 h-4"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="pt-6 space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <motion.div
                          className="w-1 h-1 bg-cyan-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                        />
                        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default FuturisticNavbar;