"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import headerBg from "@/assets/bg2.jpg";
import missionImage1 from "@/assets/header.jpg";
import missionImage2 from "@/assets/bg.jpeg";
import missionImage3 from "@/assets/back.jpeg";
import serviceImage1 from "@/assets/community.jpg";  // Community-Centered Therapy
import serviceImage3 from "@/assets/advocacy.jpg";  // Advocacy Campaigns
import serviceImage4 from "../assets/hand.jpeg";
import serviceImage5 from "../assets/self.jpeg";
import serviceImage6 from "../assets/gross.jpeg";
import serviceImage7 from "../assets/fine.jpeg";

import { 
  Brain, 
  HeartPulse, 
  Users, 
  Target, 
  Globe, 
  Leaf, 
  HandHelping, 
  Award,
  HandHelpingIcon,
  Move
} from 'lucide-react';
import TestimonialsSection from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Homepage: React.FC = () => {
  const { scrollY } = useScroll();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const missionImages = [missionImage1, missionImage2, missionImage3];

  // Enhanced image rotation with crossfade effect
  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % missionImages.length
      );
    }, 5000);

    return () => clearInterval(imageRotationInterval);
  }, []);
  
  // Parallax transformations
  const heroParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const featuresParallax = useTransform(scrollY, [300, 800], [100, -50]);
  const introductionParallax = useTransform(scrollY, [200, 700], [50, -100]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Image animation variants
  const imageVariants = {
    enter: { opacity: 0 },
    center: { 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Parallax Background - Fixed and Scaling */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ 
          scale: useTransform(scrollY, [0, 500], [1, 1.2]),
          opacity: useTransform(scrollY, [0, 200], [1, 0.7])
        }}
      >
        <Image 
          src={headerBg}
          alt="Rehabilitation Therapy Background"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172554]/60 via-[#0f766e]/40 to-[#172554]/30"></div>
      </motion.div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section with Parallax */}
      <motion.div 
        style={{ translateY: heroParallax }}
        className="relative z-10 min-h-screen flex items-center justify-center text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Empowering Communities Through Occupational Therapy
          </motion.h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-emerald-100">
            Transforming lives through personalized, community-centered occupational therapy
          </p>
          <Link 
            href="/services" 
            className="bg-[#0f766e] hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition"
          >
            Explore Our Services
          </Link>
        </div>
      </motion.div>

      {/* Introduction Section with Parallax */}
      <motion.section 
        style={{ translateY: introductionParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-[#f4f4f4]/70 py-16 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Enhanced Image Carousel with Infinite Animation */}
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {missionImages.map((image, index) => (
                  index === currentImageIndex && (
                    <motion.div
                      key={index}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0"
                    >
                      <Image 
                        src={image}
                        alt={`Mission image ${index + 1}`}
                        fill
                        priority
                        quality={90}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            {/* Mission and Vision Content */}
            <div>
              <motion.h2 
                variants={sectionVariants}
                className="text-3xl md:text-4xl font-bold mb-6 text-[#0f766e]"
              >
                Our Mission & Vision
              </motion.h2>

              <motion.div 
                variants={sectionVariants}
                className="space-y-6 text-slate-700"
              >
                <div className="flex items-start space-x-4">
                  <Target className="w-10 h-10 md:w-12 md:h-12 text-[#0f766e] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Mission</h3>
                    <p>
                      To foster a supportive and engaging community within the occupational 
                      therapy program and promote a value of occupational therapy within 
                      the wider community through a lens of community and environmental well-being.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-10 h-10 md:w-12 md:h-12 text-[#0f766e] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Vision</h3>
                    <p>
                      To be recognized as a leading organization that inspires and equips 
                      the future of occupational therapists, and to be agents of positive 
                      change by integrating principles of community and environmental 
                      sustainability into our practice.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Goals Section */}
          <motion.div 
            variants={sectionVariants}
            className="mt-16 bg-white/60 rounded-xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-10 text-[#0f766e]">Our Goals</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: <HandHelping className="w-12 h-12 md:w-16 md:h-16 text-[#0f766e]" />,
                  title: "Community-Centered",
                  description: "Providing occupational therapy with a focus on community needs."
                },
                { 
                  icon: <Leaf className="w-12 h-12 md:w-16 md:h-16 text-[#0f766e]" />,
                  title: "Inclusive Access",
                  description: "Foster equitable access to occupational therapy services for all."
                },
                { 
                  icon: <Award className="w-12 h-12 md:w-16 md:h-16 text-[#0f766e]" />,
                  title: "Social Impact",
                  description: "Engage in community service projects addressing social determinants of health."
                }
              ].map((goal, index) => (
                <motion.div 
                  key={index}
                  variants={sectionVariants}
                  className="text-center p-4 md:p-6 bg-slate-50 rounded-xl hover:shadow-md transition"
                >
                  <div className="flex justify-center mb-4">{goal.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-slate-800">{goal.title}</h3>
                  <p className="text-slate-600">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section with Parallax */}
      <motion.div 
        style={{ translateY: featuresParallax }}
        className="relative z-20 bg-white/10 backdrop-blur-md py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-10 md:mb-12 text-white">Our Approach</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: <Brain className="w-12 h-12 md:w-16 md:h-16 text-emerald-500" />, 
                title: "Cognitive Empowerment",
                description: "Tailored strategies to enhance mental resilience"
              },
              { 
                icon: <Users className="w-12 h-12 md:w-16 md:h-16 text-emerald-500" />, 
                title: "Community Integration",
                description: "Building supportive networks for holistic healing"
              },
              { 
                icon: <HeartPulse className="w-12 h-12 md:w-16 md:h-16 text-emerald-500" />, 
                title: "Holistic Wellness",
                description: "Comprehensive approach to physical and mental health"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 p-5 md:p-6 rounded-xl text-center hover:bg-slate-800/70 transition"
              >
                <div className="flex justify-center mb-3 md:mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-emerald-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Section - FIXED for Mobile Responsiveness */}
      <motion.section 
        style={{ translateY: useTransform(scrollY, [800, 1300], [150, -100]) }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-[#172554] py-16 md:py-20 overflow-hidden z-10"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={sectionVariants}
            className="text-3xl md:text-4xl text-center mb-10 md:mb-16 text-white"
          >
            Our Comprehensive Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Hand therapy for stroke rehabilitation",
                description: "We specialize in hand therapy techniques designed specifically for stroke rehabilitation. Our evidence-based approaches focus on enhancing fine motor skills, strength, and coordination to promote independence in daily activities.",
                icon: <HandHelpingIcon className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" />,
                image: serviceImage4,
                details: [
                  "Individualized hand therapy programs",
                  "Functional task training",
                  "Adaptive equipment recommendations"
                ]
              },
              {
                title: "Self care",
                description: "We focus on enhancing self-care skills through personalized therapy sessions. Our goal is to empower individuals to regain independence in daily activities, promoting overall well-being and quality of life.",
                icon: <HeartPulse className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" />,
                image: serviceImage5,
                details: [
                  "Personalized self-care plans",
                  "Adaptive strategies for daily living",
                  "Support for caregivers and families"
                ]
              },
              {
                title: "Gross Motor Skills Development",
                description: "Our therapy sessions are designed to enhance gross motor skills through engaging activities and exercises. We focus on improving coordination, balance, and strength to support overall physical development.",
                icon: <Brain className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" />,
                image: serviceImage6,
                details: [
                  "Structured gross motor activities",
                  "Play-based interventions",
                  "Progress tracking and assessments"
                ]
              },
              {
                title: "Community-Centered Therapy",
                description: "We provide personalized occupational therapy that deeply integrates with community needs, focusing on individual empowerment and collective well-being. Our approach considers social, environmental, and personal factors to create holistic intervention strategies.",
                icon: <Users className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" />,
                image: serviceImage1,
                details: [
                  "Tailored intervention plans",
                  "Community engagement workshops",
                  "Home and community-based assessments"
                ]
              },
              {
                title: "Fine Motor Skills Training",
                description: "At Rehab-Outcome Therapies Our therapy sessions are designed to enhance fine motor skills through engaging activities and exercises. We focus on improving dexterity, hand-eye coordination, and strength to support overall physical development.",
                icon: <Move className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" />,
                image: serviceImage7,
                details: [
                  "Structured fine motor activities",
                  "Play-based interventions",
                  "Progress tracking and assessments"
                ]
              },
              {
                title: "Advocacy Campaigns",
                description: "We lead transformative advocacy initiatives that raise awareness about occupational therapy's critical role in community health. Our campaigns focus on policy development, community education, and systemic change.",
                icon: <HandHelping className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" />,
                image: serviceImage3,
                details: [
                  "Public health awareness programs",
                  "Policy recommendation development",
                  "Community leadership training"
                ]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="bg-slate-800/60 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full"
              >
                {/* Fixed Image Container for All Screen Sizes */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    quality={90}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#172554]/50 to-[#0f766e]/30"></div>
                </div>

                {/* Service Content */}
                <div className="p-5 md:p-6 text-white flex-grow flex flex-col">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="mr-3 md:mr-4">{service.icon}</div>
                    <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <p className="mb-4 text-emerald-100 flex-grow">{service.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-2 text-emerald-300">Key Offerings:</h4>
                    <ul className="list-disc list-inside text-emerald-100 space-y-1 md:space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Homepage;