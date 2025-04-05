"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  Target, 
  Globe, 
  HandHelping, 
  Leaf, 
  Users, 
  Award, 
  Activity, 
  BookOpen, 
  Medal, 
  Star,
  Shield,
  Heart,
  Zap,
  Clock
} from 'lucide-react';

import "../../sass/about.scss";

const AboutPage: React.FC = () => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll({
    container: scrollRef,
  });

  // Parallax transformations
  const heroParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const missionParallax = useTransform(scrollY, [300, 800], [100, -50]);
  const goalsParallax = useTransform(scrollY, [600, 1100], [200, -75]);
  const approachParallax = useTransform(scrollY, [900, 1400], [250, -100]);

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

  // Background animation variants
  const backgroundVariants = {
    animate: {
      scale: [1, 1.05, 1],
      filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
      transition: {
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as "reverse" | "loop" | "mirror"
      }
    }
  };

  return (
    <div 
      ref={scrollRef}
      className="relative w-full overflow-x-hidden bg-[#f4f4f4]"
    >
      {/* Background Parallax Image Section with Infinite Animation */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          variants={backgroundVariants}
          animate="animate"
        >
          <Image
            src="/assets/about.jpg" 
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
            quality={90}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#172554]/60 via-[#0f766e]/40 to-[#172554]/30"></div>
      </div>

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
            className="text-6xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Empowering Communities
          </motion.h1>
          <p className="text-2xl max-w-3xl mx-auto mb-8 text-emerald-100">
            Transforming lives through innovative, compassionate, and community-centered occupational therapy
          </p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.section 
        style={{ translateY: missionParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-white/90 py-20 rounded-t-[50px]"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={sectionVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-[#0f766e]">
              Our Mission & Vision
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission Card */}
              <motion.div 
                variants={sectionVariants}
                className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-6">
                  <Target className="w-16 h-16 text-[#0f766e]" />
                </div>
                <h3 className="text-3xl font-semibold mb-4 text-[#0f766e]">
                  Mission
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  To foster a supportive and engaging community within the occupational 
                  therapy program and promote a value of occupational therapy within 
                  the wider community through a lens of community and environmental well-being.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                variants={sectionVariants}
                className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-6">
                  <Globe className="w-16 h-16 text-[#0f766e]" />
                </div>
                <h3 className="text-3xl font-semibold mb-4 text-[#0f766e]">
                  Vision
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  To be recognized as a leading organization that inspires and equips 
                  the future of occupational therapists, and to be agents of positive 
                  change by integrating principles of community and environmental 
                  sustainability into our practice.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Goals Section */}
      <motion.section 
        style={{ translateY: goalsParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-[#172554] py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={sectionVariants}
            className="text-4xl text-center mb-16 text-white"
          >
            Our Strategic Goals
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <HandHelping className="w-16 h-16 text-emerald-400" />,
                title: "Community-Centered Therapy",
                description: "Provide personalized occupational therapy deeply integrated with community needs, focusing on individual empowerment and collective well-being.",
                details: [
                  "Tailored intervention strategies",
                  "Community engagement programs",
                  "Holistic assessment approaches"
                ]
              },
              {
                icon: <Leaf className="w-16 h-16 text-emerald-400" />,
                title: "Inclusive Service Access",
                description: "Foster equitable access to occupational therapy services, addressing barriers and creating opportunities for diverse populations.",
                details: [
                  "Sliding scale service options",
                  "Community outreach programs",
                  "Adaptive service delivery models"
                ]
              },
              {
                icon: <Award className="w-16 h-16 text-emerald-400" />,
                title: "Social Impact",
                description: "Develop and implement innovative programs addressing unique community health challenges and promoting social justice.",
                details: [
                  "Community health initiatives",
                  "Policy advocacy",
                  "Collaborative intervention projects"
                ]
              }
            ].map((goal, index) => (
              <motion.div 
                key={index}
                variants={sectionVariants}
                className="bg-slate-800/60 p-6 rounded-xl text-center hover:bg-slate-800/70 transition"
              >
                <div className="flex justify-center mb-4">{goal.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{goal.title}</h3>
                <p className="text-emerald-100 mb-4">{goal.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-emerald-300">Key Focus Areas:</h4>
                  <ul className="list-disc list-inside text-emerald-100 space-y-2">
                    {goal.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Approach Section */}
      <motion.section 
        style={{ translateY: approachParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-white/90 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={sectionVariants}
            className="text-4xl text-center mb-16 text-[#0f766e]"
          >
            Our Comprehensive Approach
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-16 h-16 text-[#0f766e]" />,
                title: "Collaborative Strategy",
                description: "We believe in a collaborative approach that involves clients, families, and community stakeholders in the therapeutic process.",
                details: [
                  "Client-centered interventions",
                  "Family involvement",
                  "Multidisciplinary collaboration"
                ]
              },
              {
                icon: <Activity className="w-16 h-16 text-[#0f766e]" />,
                title: "Holistic Wellness",
                description: "Our interventions address physical, mental, emotional, and social aspects of health, promoting comprehensive well-being.",
                details: [
                  "Integrated health assessments",
                  "Mental health support",
                  "Lifestyle modification guidance"
                ]
              },
              {
                icon: <BookOpen className="w-16 h-16 text-[#0f766e]" />,
                title: "Continuous Learning",
                description: "We are committed to ongoing education, research, and innovation in occupational therapy practices.",
                details: [
                  "Professional development",
                  "Research initiatives",
                  "Best practice implementation"
                ]
              }
            ].map((approach, index) => (
              <motion.div 
                key={index}
                variants={sectionVariants}
                className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">{approach.icon}</div>
                <h3 className="text-xl font-semibold text-[#0f766e] mb-3">{approach.title}</h3>
                <p className="text-slate-700 mb-4">{approach.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-[#0f766e]/80">Core Elements:</h4>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    {approach.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    

      {/* Call to Action */}
      <section className="bg-[#0f766e] py-16 text-white z-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to transform lives through compassionate, 
            community-centered occupational therapy.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-[#0f766e] hover:bg-emerald-100 px-10 py-4 rounded-full text-xl font-semibold transition"
          >
            Connect With Us
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-emerald-100 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={sectionVariants}
            className="text-4xl text-center mb-16 text-[#0f766e]"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-16 h-16 text-[#0f766e]" />,
                title: "Expert Care",
                description: "Our team comprises highly skilled and compassionate occupational therapists with extensive experience and specialized training.",
                details: [
                  "Advanced clinical expertise",
                  "Continuous professional development",
                  "Specialized intervention strategies"
                ]
              },
              {
                icon: <Shield className="w-16 h-16 text-[#0f766e]" />,
                title: "Personalized Approach",
                description: "We provide tailored therapy solutions that address individual needs, ensuring comprehensive and meaningful support.",
                details: [
                  "Client-centered interventions",
                  "Customized treatment plans",
                  "Holistic assessment"
                ]
              },
              {
                icon: <Heart className="w-16 h-16 text-[#0f766e]" />,
                title: "Compassionate Care",
                description: "We prioritize empathy, respect, and understanding, creating a supportive environment for healing and growth.",
                details: [
                  "Emotional support",
                  "Non-judgmental approach",
                  "Empowering client relationships"
                ]
              },
              {
                icon: <Zap className="w-16 h-16 text-[#0f766e]" />,
                title: "Innovative Solutions",
                description: "We leverage cutting-edge techniques and technology to enhance therapeutic outcomes and client experiences.",
                details: [
                  "Advanced therapeutic techniques",
                  "Technology-enhanced interventions",
                  "Evidence-based practices"
                ]
              },
              {
                icon: <Clock className="w-16 h-16 text-[#0f766e]" />,
                title: "Accessibility",
                description: "We offer flexible scheduling, multiple service delivery models, and convenient communication channels.",
                details: [
                  "Flexible appointment times",
                  "Virtual and in-person options",
                  "Comprehensive support"
                ]
              },
              {
                icon: <Medal className="w-16 h-16 text-[#0f766e]" />,
                title: "Community Impact",
                description: "Our commitment extends beyond individual therapy to creating positive change in the broader community.",
                details: [
                  "Community outreach",
                  "Social justice initiatives",
                  "Collaborative partnerships"
                ]
              }
            ].map((quality, index) => (
              <motion.div 
                key={index}
                variants={sectionVariants}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">{quality.icon}</div>
                <h3 className="text-xl font-semibold text-[#0f766e] mb-3">{quality.title}</h3>
                <p className="text-slate-700 mb-4">{quality.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-[#0f766e]/80">Key Highlights:</h4>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    {quality.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AboutPage;