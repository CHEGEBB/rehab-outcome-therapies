/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  Brain, 
  Lightbulb, 
  Users, 
  GraduationCap, 
  Megaphone, 
  FileText,
  BookOpen,
  Heart,
  School,
  BookMarked,
  Newspaper,
  Microscope,
  GanttChartSquare,
  Building,
  Puzzle
} from 'lucide-react';

// Import all image assets
import ServicesHeader from '@/assets/kid.jpg';
import ServicesBackground from '@/assets/services.jpg';
import AdvocacyImage from '@/assets/advocacy.jpg';
import PatternDots from '@/assets/dots.png';
import PatternCircuit from '@/assets/circuit.png';
import PatternWaves from '@/assets/circuit.png';

const ServicesPage: React.FC = () => {
  const scrollRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef(null);
  const { scrollY } = useScroll();
  const controls = useAnimation();

  // Header zoom animation
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY;
        const scale = 1 + scrollPosition * 0.0005;
        headerRef.current.style.transform = `scale(${Math.min(scale, 1.2)})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax transformations for content sections
  const parallaxBg = useTransform(scrollY, [0, 1000], [0, -300]);
  const servicesHeaderParallax = useTransform(scrollY, [0, 500], [0, -150]);
  const cardsSectionParallax = useTransform(scrollY, [300, 800], [100, -100]);
  const advocacyParallax = useTransform(scrollY, [800, 1300], [150, -50]);
  const workshopsParallax = useTransform(scrollY, [1200, 1700], [200, -75]);
  const researchParallax = useTransform(scrollY, [1600, 2100], [250, -100]);

  // Animations for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  // Card hover animations
  const cardHoverVariants = {
    hover: { 
      scale: 1.03, 
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  // Staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div 
      ref={scrollRef}
      className="relative w-full overflow-x-hidden bg-[#f7f7f7]"
    >
      {/* Parallax Background Image */}
      <motion.div 
        ref={parallaxRef}
        style={{ y: parallaxBg }}
        className="fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 via-cyan-800/50 to-emerald-800/60"></div>
        <div 
          className="absolute inset-0 bg-repeat opacity-10"
          style={{ backgroundImage: `url(${ServicesBackground.src})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
        ></div>
      </motion.div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero Header with Zoom Animation */}
      <section className="relative h-[105vh] overflow-hidden">
        <div 
          ref={headerRef}
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${ServicesHeader.src})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transformOrigin: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-transparent to-emerald-900/60"></div>
        </div>

        <motion.div 
          style={{ y: servicesHeaderParallax }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <motion.h1 
                className="text-7xl font-extrabold mb-8 text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our Services
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-cyan-400 mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.p 
                className="text-2xl max-w-3xl mx-auto text-cyan-50 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Transforming lives through innovative, personalized, and community-centered 
                occupational therapy services
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ 
            y: [0, 12, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center items-start p-1">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Community Based Therapy Section */}
      <motion.section
        style={{ y: cardsSectionParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="relative z-10 bg-white py-24 rounded-t-[3rem] shadow-xl"
      >
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <motion.h2 
              variants={sectionVariants}
              className="text-5xl font-bold mb-6 text-indigo-900 relative inline-block"
            >
              Community-Based Therapy
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Our tailored programs address the unique needs of diverse populations, 
              focusing on inclusive practices that enhance functional independence and 
              quality of life within community settings.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Brain className="w-12 h-12 text-cyan-500" />,
                title: "Cognitive Rehabilitation",
                description: "Specialized interventions that address cognitive challenges, helping individuals develop strategies for memory, attention, and executive function in daily life.",
                color: "from-indigo-500 to-cyan-500"
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-emerald-500" />,
                title: "Sensory Processing",
                description: "Comprehensive assessment and intervention for sensory processing challenges, supporting participation in meaningful activities across various environments.",
                color: "from-cyan-500 to-emerald-500"
              },
              {
                icon: <Users className="w-12 h-12 text-indigo-500" />,
                title: "Group Therapy",
                description: "Collaborative sessions that foster social skills, peer support, and shared learning experiences in a supportive community environment.",
                color: "from-emerald-500 to-indigo-500"
              },
              {
                icon: <Heart className="w-12 h-12 text-cyan-500" />,
                title: "Mental Health Support",
                description: "Holistic approaches to mental wellness that integrate occupation-based interventions with community resources and support systems.",
                color: "from-indigo-500 to-cyan-500"
              },
              {
                icon: <Building className="w-12 h-12 text-emerald-500" />,
                title: "Community Reintegration",
                description: "Programs that facilitate successful transitions back into community living after hospitalization, injury, or significant life changes.",
                color: "from-cyan-500 to-emerald-500"
              },
              {
                icon: <Puzzle className="w-12 h-12 text-indigo-500" />,
                title: "Adaptive Solutions",
                description: "Creative approaches to environmental modifications and assistive technology that enhance independence and participation in community activities.",
                color: "from-emerald-500 to-indigo-500"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                whileHover="hover"
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="mb-5 relative">
                    <div className="absolute -top-1 -left-1 w-16 h-16 rounded-full bg-slate-100 -z-10 group-hover:scale-110 transition-transform duration-300"></div>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-slate-800">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-4 px-10 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
            >
              Learn More About Our Approach
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Advocacy and Awareness Section */}
      <motion.section
        style={{ y: advocacyParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="relative z-10 bg-gradient-to-br from-indigo-900 to-cyan-900 py-24 text-white"
      >
        <div 
          className="absolute inset-0 bg-repeat opacity-10"
          style={{ backgroundImage: `url(${PatternDots.src})`, backgroundSize: '300px' }}
        ></div>
        
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <motion.h2 
              variants={sectionVariants}
              className="text-5xl font-bold mb-6 text-white relative inline-block"
            >
              Advocacy & Awareness
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-300"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h2>
            <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
              We champion the value of occupational therapy through targeted campaigns, 
              community education, and collaborative initiatives that raise awareness 
              and promote accessibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={sectionVariants}
              className="order-2 md:order-1"
            >
              <div className="space-y-10">
                {[
                  {
                    icon: <Megaphone className="w-10 h-10 text-emerald-400" />,
                    title: "Public Awareness Campaigns",
                    description: "Strategic initiatives that highlight the role and impact of occupational therapy in addressing community health challenges and enhancing quality of life."
                  },
                  {
                    icon: <FileText className="w-10 h-10 text-emerald-400" />,
                    title: "Policy Advocacy",
                    description: "Engagement with policymakers and stakeholders to promote legislative support for accessible, community-centered occupational therapy services."
                  },
                  {
                    icon: <Newspaper className="w-10 h-10 text-emerald-400" />,
                    title: "Educational Resources",
                    description: "Development and distribution of accessible resources that explain occupational therapy concepts, benefits, and applications in everyday contexts."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={sectionVariants}
                    className="flex items-start gap-6 group"
                  >
                    <div className="p-3 rounded-lg bg-cyan-800 group-hover:bg-cyan-700 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-cyan-200">{item.title}</h3>
                      <p className="text-cyan-100">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={sectionVariants}
              className="order-1 md:order-2 p-6 relative"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-500/30"></div>
                <div 
                  className="h-full" 
                  style={{ 
                    backgroundImage: `url(${AdvocacyImage.src})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center' 
                  }}
                ></div>
                
                <motion.div 
                  className="absolute -bottom-1 -right-1 w-32 h-32 bg-emerald-400 rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400 rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                />
              </motion.div>
              
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-600 rounded-full opacity-10"></div>
              <div className="absolute -top-10 -left-10 w-36 h-36 bg-cyan-600 rounded-full opacity-10"></div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 px-10 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
            >
              Join Our Advocacy Efforts
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Workshops and Seminars Section */}
      <motion.section
        style={{ y: workshopsParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="relative z-10 bg-slate-50 py-24"
      >
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <motion.h2 
              variants={sectionVariants}
              className="text-5xl font-bold mb-6 text-indigo-900 relative inline-block"
            >
              Workshops & Seminars
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-indigo-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Expand your knowledge and skills through our educational sessions focused 
              on community-based practice, innovative interventions, and professional development.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-10"
          >
            {[
              {
                icon: <GraduationCap className="w-12 h-12 text-indigo-600" />,
                title: "Professional Development Workshops",
                description: "Advanced training sessions designed to enhance clinical skills, innovative intervention strategies, and evidence-based practice applications.",
                features: ["Expert-led sessions", "Hands-on learning", "Certificate of completion"]
              },
              {
                icon: <School className="w-12 h-12 text-emerald-600" />,
                title: "Community Practice Seminars",
                description: "Specialized education on community-centered care approaches, environmental considerations, and inclusive service delivery models.",
                features: ["Case-based learning", "Community engagement frameworks", "Practical applications"]
              },
              {
                icon: <BookMarked className="w-12 h-12 text-indigo-600" />,
                title: "Student Learning Opportunities",
                description: "Mentored experiences that bridge academic knowledge with practical application in diverse community settings and populations.",
                features: ["Mentorship programs", "Fieldwork experiences", "Research opportunities"]
              },
              {
                icon: <BookOpen className="w-12 h-12 text-emerald-600" />,
                title: "Public Education Series",
                description: "Accessible sessions for community members, caregivers, and stakeholders on occupational therapy concepts and applications.",
                features: ["Jargon-free content", "Practical strategies", "Interactive format"]
              }
            ].map((workshop, index) => (
              <motion.div 
                key={index}
                variants={sectionVariants}
                whileHover="hover"
                variants={cardHoverVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100"
              >
                <div className="p-8">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-3 rounded-xl bg-slate-100">
                      {workshop.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800">{workshop.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">{workshop.description}</p>
                  <div className="border-t border-slate-200 pt-5">
                    <h4 className="font-medium text-indigo-800 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-3">
                      {workshop.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-8 w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg font-medium hover:shadow-lg transition"
                  >
                    View Schedule
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-900">Looking for Custom Training?</h3>
              <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
                We offer tailored workshops and educational programs designed to address your 
                organization&apos;s specific needs and community context.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white py-3 px-8 rounded-full font-medium shadow-md hover:shadow-lg transition"
              >
                Request Custom Training
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Research Initiatives Section */}
      <motion.section
        style={{ y: researchParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="relative z-10 bg-gradient-to-br from-slate-900 to-indigo-900 py-24 text-white"
      >
        <div 
          className="absolute inset-0 bg-repeat opacity-5"
          style={{ backgroundImage: `url(${PatternCircuit.src})`, backgroundSize: '300px' }}
        ></div>
        
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <motion.h2 
              variants={sectionVariants}
              className="text-5xl font-bold mb-6 text-white relative inline-block"
            >
              Research Initiatives
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              We are committed to advancing the field of occupational therapy through rigorous 
              research, student mentorship, and evidence-based practice development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={sectionVariants}
              className="col-span-full md:col-span-1 flex flex-col gap-8"
            >
              {[
                {
                  icon: <GanttChartSquare className="w-10 h-10 text-emerald-400" />,
                  title: "Research Areas",
                  items: [
                    "Community health disparities",
                    "Environmental sustainability in practice",
                    "Innovative intervention approaches",
                    "Technology integration in therapy",
                    "Mental health promotion"
                  ]
                },
                {
                  icon: <Microscope className="w-10 h-10 text-emerald-400" />,
                  title: "Research Methods",
                  items: [
                    "Mixed methods designs",
                    "Community-based participatory research",
                    "Single-subject experimental designs",
                    "Program evaluation",
                    "Systematic reviews"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-indigo-800/50 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-2 rounded-lg bg-indigo-800">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2"></div>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div 
              variants={sectionVariants}
              className="col-span-full md:col-span-2"
            >
              <div className="bg-gradient-to-br from-indigo-800/50 to-slate-800/50 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-semibold mb-6 text-white">Student Research Opportunities</h3>
                <p className="text-slate-300 mb-8">
                  We actively support student-led research projects that align with our mission 
                  of community-centered practice and environmental sustainability. Our mentorship 
                  program provides guidance, resources, and opportunities for meaningful research 
                  experience.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Project Mentorship",
                      description: "One-on-one guidance from experienced researchers throughout the research process"
                    },
                    {
                      title: "Research Funding",
                      description: "Support for approved student projects aligned with our research priorities"
                    },
                    {
                      title: "Presentation Opportunities",
                      description: "Platforms to share findings at local and national conferences"
                    },
                    {
                      title: "Publication Support",
                      description: "Assistance with manuscript preparation and submission to scholarly journals"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-indigo-900/40 p-5 rounded-lg">
                      <h4 className="text-lg font-medium mb-2 text-cyan-200">{benefit.title}</h4>
                      <p className="text-slate-300 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-indigo-700/50 pt-8">
                  <h4 className="text-xl font-medium mb-4 text-white">Current Research Projects</h4>
                  <div className="space-y-4">
                    {[
                      "Impact of community gardens on mental health outcomes in urban neighborhoods",
                      "Telehealth adaptations for community-based occupational therapy services",
                      "Environmental modifications to support aging in place across diverse communities",
                      "Occupational engagement patterns in community-dwelling adults with chronic conditions"
                    ].map((project, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="min-w-8 h-8 flex items-center justify-center rounded-full bg-emerald-900/60 text-emerald-400 font-semibold">
                          {index + 1}
                        </div>
                        <p className="text-slate-300 pt-1">{project}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:shadow-lg transition"
                  >
                    Apply for Research Collaboration
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="relative z-10 bg-gradient-to-r from-cyan-600 to-emerald-600 py-16 text-white">
        <div 
          className="absolute inset-0 bg-repeat opacity-10"
          style={{ backgroundImage: `url(${PatternWaves.src})`, backgroundSize: '500px', backgroundRepeat: 'no-repeat' }}
        ></div>
        
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Community?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Connect with us to explore how our services can support your 
              organization, community, or individual needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-semibold transition shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/resources" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition"
              >
                Explore Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Stay Updated</h2>
              <p className="text-slate-600 mb-8">
                Subscribe to our newsletter for the latest updates on services, 
                workshops, and community initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                We respect your privacy and will never share your information.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default ServicesPage;