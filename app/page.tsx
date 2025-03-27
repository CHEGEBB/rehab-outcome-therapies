"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import headerBg from "@/assets/bg2.jpg";
import missionImage1 from "@/assets/header.jpg";
import missionImage2 from "@/assets/bg.jpeg";
import missionImage3 from "@/assets/back.jpeg";
import serviceImage1 from "@/assets/community.jpg";  // Community-Centered Therapy
import serviceImage2 from "@/assets/back2.jpeg";  // Sustainability in Practice
import serviceImage3 from "@/assets/advocacy.jpg";  // Advocacy Campaigns
import { 
  Brain, 
  HeartPulse, 
  Users, 
  BookOpen, 
  Medal, 
  Activity,
  Target, 
  Globe, 
  Trees, 
  Leaf, 
  HandHelping, 
  Award 
} from 'lucide-react';
import TestimonialsSection from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Homepage: React.FC = () => {
  const { scrollY } = useScroll();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const missionImages = [missionImage1, missionImage2, missionImage3];

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
  const testimonialsParallax = useTransform(scrollY, [600, 1100], [200, -75]);
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
            className="text-5xl font-bold mb-6 text-white"
          >
            Empowering Communities Through Occupational Therapy
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-emerald-100">
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
            {/* Image Carousel */}
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              {missionImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentImageIndex ? 1 : 0,
                    transition: { duration: 1 }
                  }}
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
                </motion.div>
              ))}
            </div>

            {/* Mission and Vision Content */}
            <div>
              <motion.h2 
                variants={sectionVariants}
                className="text-4xl font-bold mb-6 text-[#0f766e]"
              >
                Our Mission & Vision
              </motion.h2>

              <motion.div 
                variants={sectionVariants}
                className="space-y-6 text-slate-700"
              >
                <div className="flex items-start space-x-4">
                  <Target className="w-12 h-12 text-[#0f766e] flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Mission</h3>
                    <p>
                      To foster a supportive and engaging community within the occupational 
                      therapy program and promote a value of occupational therapy within 
                      the wider community through a lens of community and environmental well-being.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-12 h-12 text-[#0f766e] flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Vision</h3>
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
            className="mt-16 bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-4xl text-center mb-10 text-[#0f766e]">Our Goals</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: <HandHelping className="w-16 h-16 text-[#0f766e]" />,
                  title: "Community-Centered",
                  description: "Providing occupational therapy with a focus on community needs."
                },
                { 
                  icon: <Leaf className="w-16 h-16 text-[#0f766e]" />,
                  title: "Inclusive Access",
                  description: "Foster equitable access to occupational therapy services for all."
                },
                { 
                  icon: <Award className="w-16 h-16 text-[#0f766e]" />,
                  title: "Social Impact",
                  description: "Engage in community service projects addressing social determinants of health."
                }
              ].map((goal, index) => (
                <motion.div 
                  key={index}
                  variants={sectionVariants}
                  className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-md transition"
                >
                  <div className="flex justify-center mb-4">{goal.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{goal.title}</h3>
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
          <h2 className="text-4xl text-center mb-12 text-white">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Brain className="w-16 h-16 text-emerald-500" />, 
                title: "Cognitive Empowerment",
                description: "Tailored strategies to enhance mental resilience"
              },
              { 
                icon: <Users className="w-16 h-16 text-emerald-500" />, 
                title: "Community Integration",
                description: "Building supportive networks for holistic healing"
              },
              { 
                icon: <HeartPulse className="w-16 h-16 text-emerald-500" />, 
                title: "Holistic Wellness",
                description: "Comprehensive approach to physical and mental health"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-slate-800/70 transition"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-emerald-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Services Section with Parallax and Skewed Images */}
<motion.section 
  style={{ translateY: useTransform(scrollY, [800, 1300], [150, -100]) }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="relative bg-[#172554] py-20 overflow-hidden"
>
  <div className="container mx-auto px-4">
    <motion.h2 
      variants={sectionVariants}
      className="text-4xl text-center mb-16 text-white"
    >
      Our Comprehensive Services
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-12">
      {[
        {
          title: "Community-Centered Therapy",
          description: "We provide personalized occupational therapy that deeply integrates with community needs, focusing on individual empowerment and collective well-being. Our approach considers social, environmental, and personal factors to create holistic intervention strategies.",
          icon: <Users className="w-16 h-16 text-emerald-400" />,
          image: serviceImage1,
          details: [
            "Tailored intervention plans",
            "Community engagement workshops",
            "Home and community-based assessments"
          ]
        },
        {
          title: "Sustainability in Practice",
          description: "Integrating environmental consciousness into our therapeutic approaches, we develop sustainable intervention models that promote both individual health and ecological well-being. Our programs focus on creating resilient, adaptive strategies.",
          icon: <Leaf className="w-16 h-16 text-emerald-400" />,
          image: serviceImage2,
          details: [
            "Eco-friendly rehabilitation techniques",
            "Green health intervention strategies",
            "Environmental adaptation consultations"
          ]
        },
        {
          title: "Advocacy Campaigns",
          description: "We lead transformative advocacy initiatives that raise awareness about occupational therapy's critical role in community health. Our campaigns focus on policy development, community education, and systemic change.",
          icon: <HandHelping className="w-16 h-16 text-emerald-400" />,
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
          variants={sectionVariants}
          className="bg-slate-800/60 rounded-xl overflow-hidden shadow-2xl transform transition-all hover:scale-105"
        >
          {/* Skewed Image Container */}
          <div 
            className="relative h-64 w-full transform -skew-y-6 origin-top-left"
            style={{ 
              clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)' 
            }}
          >
            <Image 
              src={service.image}
              alt={service.title}
              fill
              priority
              quality={90}
              className="object-cover absolute inset-0 transform skew-y-6 -origin-top-left"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#172554]/50 to-[#0f766e]/30"></div>
          </div>

          {/* Service Content */}
          <div className="p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="mr-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
            </div>
            
            <p className="mb-4 text-emerald-100">{service.description}</p>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-emerald-300">Key Offerings:</h4>
              <ul className="list-disc list-inside text-emerald-100 space-y-2">
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

    <TestimonialsSection/>
    <Footer/>
    </div>
  );
};

export default Homepage;