'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import "../sass/navbar.scss"
import Logo from "@/assets/Frame.png"
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        type: 'spring',
        stiffness: 300
      }
    })
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 md:backdrop-blur-md shadow-sm navbar bg-white md:bg-transparent">
      <div className="container mx-auto px-4 py-0 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-emerald-600 tracking-tight flex items-center space-x-2"
        >
          <Image src={Logo} alt="Rehab Outcome Therapies" width={150} height={150} className='-mt-3.5' />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="group relative text-slate-700 hover:text-emerald-600 transition-colors duration-300 ease-in-out"
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-emerald-600 transition-all duration-300"></span>
              </span>
            </Link>
          ))}
          
          <Link 
            href="/contact" 
            className="ml-4 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-300 flex items-center space-x-2 group"
          >
            <span>Get Started</span>
            <ArrowRight 
              className="transform group-hover:translate-x-1 transition-transform duration-300" 
              size={20} 
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="container mx-auto px-4 py-8 h-full flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center mb-8">
                <Link 
                  href="/" 
                  className="text-2xl font-bold text-emerald-600 tracking-tight"
                >
                  Rehab Outcome Therapies
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 focus:outline-none"
                  aria-label="Close mobile menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                    custom={index}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-medium text-slate-700 hover:text-emerald-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-auto mb-8">
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center px-6 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-300 text-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;