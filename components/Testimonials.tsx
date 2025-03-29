"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, ArrowRight } from 'lucide-react';

// Testimonial images (replace with actual images)
import testimonialImage1 from "@/assets/ana.jpg";
import testimonialImage2 from "@/assets/pic1.jpg";
import testimonialImage3 from "@/assets/joe.jpg";

const TestimonialsSection: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "The personalized approach here has completely transformed my daily life. Their commitment to understanding my unique needs is truly remarkable.",
      author: "Elena Rodriguez",
      profession: "Marketing Consultant",
      image: testimonialImage1
    },
    {
      quote: "As a therapist, I've never seen such a holistic and community-centered approach. They're not just treating individuals, but healing communities.",
      author: "Dr. Marcus Brown",
      profession: "Clinical Psychologist",
      image: testimonialImage2
    },
    {
      quote: "This program gave me hope when I thought recovery was impossible. Their innovative methods and compassionate support changed everything.",
      author: "Joe Gomez",
      profession: "Software Engineer",
      image: testimonialImage3
    }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.length
      );
    }, 7000);

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

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
    <section className="bg-gradient-to-br from-[#10b981] to-[#059669] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            variants={sectionVariants}
            className="text-4xl text-center mb-16 text-white font-bold"
          >
            Stories of Transformation
          </motion.h2>

          {/* Testimonial Carousel */}
          <motion.div 
            key={currentTestimonialIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-lg"
          >
            {/* Testimonial Image */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src={testimonials[currentTestimonialIndex].image}
                alt={testimonials[currentTestimonialIndex].author}
                fill
                priority
                quality={90}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
            </div>

            {/* Testimonial Content */}
            <div className="text-white">
              <Quote className="w-16 h-16 text-emerald-300 mb-4" />
              <p className="text-2xl italic mb-6">
                &quot;{testimonials[currentTestimonialIndex].quote}&quot;
              </p>
              <div>
                <p className="text-xl font-semibold text-emerald-100">
                  {testimonials[currentTestimonialIndex].author}
                </p>
                <p className="text-emerald-200">
                  {testimonials[currentTestimonialIndex].profession}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonialIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="mt-16 bg-white/10 rounded-2xl p-12 text-center shadow-2xl backdrop-blur-lg"
        >
          <h2 className="text-4xl text-white mb-6 font-bold">
            Your Journey of Transformation Starts Here
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards personalized, community-centered occupational therapy. 
            Our team is ready to support your unique path to wellness.😊
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-white text-[#10b981] px-8 py-4 rounded-full 
            font-semibold text-lg hover:bg-emerald-50 transition-all 
            transform hover:scale-105 hover:shadow-xl group"
          >
            Connect With Us
            <ArrowRight 
              className="w-6 h-6 text-[#10b981] transition-transform group-hover:translate-x-1" 
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;