"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Calendar
} from 'lucide-react';

const ContactPage = () => {
  const scrollRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const formRef = useRef(null);

  // Header zoom animation
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY;
        const scale = 1 + scrollPosition * 0.0003;
        const opacity = 1 - (scrollPosition * 0.002);
        headerRef.current.style.transform = `scale(${Math.min(scale, 1.15)})`;
        headerRef.current.style.opacity = Math.max(opacity, 0.3).toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax transformations
  const headerParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const contentParallax = useTransform(scrollY, [300, 800], [50, -30]);
  const mapParallax = useTransform(scrollY, [600, 1100], [100, -50]);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Animation to indicate submission
    if (formRef.current) {
      controls.start({
        scale: [1, 0.98, 1],
        transition: { duration: 0.4 }
      });
    }
    
    // Here you would normally handle form submission to your backend
    // For now we'll just log the form data
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log('Form submitted:', formValues);
    
    // Reset form after submission
    e.currentTarget.reset();
    
    // Show success message (in a real implementation)
    alert('Your message has been sent! We will get back to you soon.');
  };

  // Animations for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Form field animation variants
  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden bg-slate-50">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      
      {/* Header Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Video (fallback to image) */}
        <div
          ref={headerRef}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/assets/contact.jpg')`,
            transformOrigin: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/80 via-indigo-900/70 to-emerald-900/80"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-emerald-500/20 blur-2xl"></div>
        
        {/* Content */}
        <motion.div 
          style={{ y: headerParallax }}
          className="relative z-10 h-full flex items-center"
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Get in <span className="text-cyan-400">Touch</span>
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-emerald-400 mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.p 
                className="text-xl text-cyan-50 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We&apos;re here to answer your questions and help you connect with our services. 
                Reach out to us and our team will respond as soon as possible.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Curved Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 90C672 100 768 110 864 110C960 110 1056 100 1152 90C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>
      
      {/* Contact Information Cards */}
      <motion.section
        style={{ y: contentParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="relative z-20 py-12 -mt-16"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Location Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Visit Us</h3>
                <p className="text-slate-600">
                  123 Wellness Avenue<br />
                  Nairobi, Kenya
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
              >
                Get Directions
                <ArrowRight className="ml-1 w-4 h-4" />
              </motion.button>
            </motion.div>
            
            {/* Phone Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Call Us</h3>
                <p className="text-slate-600">
                  Chair-person: 0756702812<br />
                  Secretary: 0748960787
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
              >
                Call Now
                <ArrowRight className="ml-1 w-4 h-4" />
              </motion.button>
            </motion.div>
            
            {/* Email Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Email Us</h3>
                <p className="text-slate-600 break-all">
                  rehaboutcometherapies@gmail.com
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
              >
                Send Email
                <ArrowRight className="ml-1 w-4 h-4" />
              </motion.button>
            </motion.div>
            
            {/* Hours Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Open Hours</h3>
                <p className="text-slate-600">
                  Monday-Friday: 8am - 6pm<br />
                  Saturday: 9am - 1pm
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
              >
                View Schedule
                <ArrowRight className="ml-1 w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={sectionVariants}
            >
              <div className="max-w-xl mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold text-indigo-900 mb-2">Send Us a Message</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mb-6"></div>
                <p className="text-slate-600 mb-8">
                  Have questions about our services? Need more information? 
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                
                <motion.form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  animate={controls}
                  className="space-y-6"
                >
                  <motion.div 
                    custom={0} 
                    variants={formFieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    custom={1} 
                    variants={formFieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </motion.div>
                  
                  <motion.div
                    custom={2} 
                    variants={formFieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="How can we help you?"
                    />
                  </motion.div>
                  
                  <motion.div
                    custom={3} 
                    variants={formFieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.div
                    custom={4} 
                    variants={formFieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="w-4 h-4 text-cyan-600 border-slate-300 rounded focus:ring-cyan-500"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-slate-600">
                      I consent to having this website store my submitted information
                    </label>
                  </motion.div>
                  
                  <motion.div
                    custom={5} 
                    variants={formFieldVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
            
            {/* Map and Social */}
            <motion.div 
              className="lg:w-1/2"
              style={{ y: mapParallax }}
            >
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
                className="h-[400px] rounded-3xl overflow-hidden shadow-xl mb-8 relative bg-slate-100"
              >
                {/* Google Maps Embed - Replace with your actual location */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853648197!2d36.68258499977898!3d-1.3031933983716837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1711665450209!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              
              {/* Connect with us */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-indigo-900 mb-2">Connect With Us</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mb-4"></div>
                <p className="text-slate-600 mb-6">
                  Follow us on social media to stay updated on our latest workshops, community events, and helpful resources.
                </p>
                
                <div className="flex gap-3">
                  {[
                    { icon: <Facebook />, color: "bg-blue-600", hover: "hover:bg-blue-700" },
                    { icon: <Twitter />, color: "bg-sky-500", hover: "hover:bg-sky-600" },
                    { icon: <Instagram />, color: "bg-pink-600", hover: "hover:bg-pink-700" },
                    { icon: <Linkedin />, color: "bg-blue-700", hover: "hover:bg-blue-800" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 ${social.color} ${social.hover} rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-300`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-indigo-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Please reach out to our friendly team.
            </p>
          </div>
          
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            {[
              {
                question: "What services do you offer?",
                answer: "We provide a wide range of occupational therapy services including pediatric therapy, sensory integration, cognitive rehabilitation, and community-based programs tailored to diverse populations."
              },
              {
                question: "Do I need a referral to access your services?",
                answer: "While many clients come through referrals, we also accept self-referrals. We recommend contacting us directly to discuss your specific needs and determine the best approach."
              },
              {
                question: "Are your services covered by insurance?",
                answer: "We work with various insurance providers. Please contact our office with your insurance information, and we can verify coverage and benefits for you."
              },
              {
                question: "How can I get involved in your community projects?",
                answer: "We welcome community involvement! Please contact us through our form or email for information about upcoming projects, volunteer opportunities, and ways to contribute."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-medium text-indigo-900">{faq.question}</h3>
                    <div className="ml-6 flex-shrink-0 text-cyan-600 group-open:rotate-180 transition-transform duration-300">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-cyan-600 to-emerald-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/10 translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
                Take the first step toward improving quality of life. Our team is ready to help you achieve your goals through personalized occupational therapy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-medium shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Consultation
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;