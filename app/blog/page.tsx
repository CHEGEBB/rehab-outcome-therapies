"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { 
  Brain, 
  HeartHandshake, 
  Users, 
  Leaf, 
  Hand,
  School,
  Lightbulb,
  Microscope,
  Star,
  MessageCircle,
  PenTool,
  Shapes,
  Calendar,
  Clock,
  ChevronRight,
  Heart,
  Search,
  ArrowRight,
  Filter
} from 'lucide-react';

const BlogPage = () => {
  const scrollRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const controls = useAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [featuredArticleIndex, setFeaturedArticleIndex] = useState(0);

  // Categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'community', name: 'Community Stories' },
    { id: 'techniques', name: 'Therapy Techniques' },
    { id: 'research', name: 'Research Highlights' },
    { id: 'wellness', name: 'Wellness Tips' },
    { id: 'design', name: 'Design Principles' }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Innovative Approaches to Sensory Integration in Pediatric Therapy',
      excerpt: 'Exploring cutting-edge techniques that enhance sensory processing for children with developmental challenges.',
      category: 'Therapy Techniques',
      author: 'Dr. Sarah Johnson',
      date: 'March 15, 2025',
      readTime: '8 min read',
      image: '../../assets/sensory.jpg',
      featured: true,
      tags: ['pediatric', 'sensory processing', 'innovation']
    },
    {
      id: 2,
      title: 'Community Garden Project Improves Motor Skills and Mental Health',
      excerpt: 'How our community garden initiative is helping individuals of all abilities develop fine motor skills while fostering social connections.',
      category: 'Community Stories',
      author: 'Michael Chen, OT',
      date: 'March 10, 2025',
      readTime: '6 min read',
      image: 'community_garden.jpg',
      featured: true,
      tags: ['community', 'mental health', 'motor skills']
    },
    {
      id: 3,
      title: 'Virtual Reality Applications in Post-Stroke Rehabilitation',
      excerpt: 'Examining the effectiveness of VR technology in improving upper extremity function following stroke.',
      category: 'Research Highlights',
      author: 'Dr. Emily Williams',
      date: 'March 5, 2025',
      readTime: '10 min read',
      image: 'vr_rehab.jpg',
      featured: true,
      tags: ['technology', 'stroke', 'rehabilitation']
    },
    {
      id: 4,
      title: 'Ergonomic Principles for Remote Work Environments',
      excerpt: 'Essential guidelines for creating a healthy, sustainable home office setup that prevents injury and enhances productivity.',
      category: 'Wellness Tips',
      author: 'Jessica Torres, OT',
      date: 'February 28, 2025',
      readTime: '7 min read',
      image: 'ergonomics.jpg',
      tags: ['ergonomics', 'workplace', 'prevention']
    },
    {
      id: 5,
      title: 'Student Reflections: My First Community Outreach Experience',
      excerpt: 'A personal account from an OT student about meaningful connections made during rural community service.',
      category: 'Community Stories',
      author: 'Alex Rivera, OT Student',
      date: 'February 22, 2025',
      readTime: '5 min read',
      image: 'student_experience.jpg',
      tags: ['education', 'community', 'personal growth']
    },
    {
      id: 6,
      title: 'Sustainable Materials in Adaptive Equipment Design',
      excerpt: 'How eco-friendly materials are revolutionizing the creation of accessible tools and devices.',
      category: 'Design Principles',
      author: 'Olivia Parker, OT',
      date: 'February 18, 2025',
      readTime: '9 min read',
      image: 'sustainable_design.jpg',
      tags: ['sustainability', 'adaptive equipment', 'innovation']
    },
    {
      id: 7,
      title: 'Mindfulness Techniques for Pain Management',
      excerpt: 'Evidence-based mindfulness approaches that help clients manage chronic pain and improve quality of life.',
      category: 'Therapy Techniques',
      author: 'Dr. Robert Kim',
      date: 'February 12, 2025',
      readTime: '8 min read',
      image: 'mindfulness.jpg',
      tags: ['pain management', 'mindfulness', 'chronic conditions']
    },
    {
      id: 8,
      title: 'Universal Design: Creating Inclusive Community Spaces',
      excerpt: 'Principles and case studies showcasing how thoughtful design can create environments accessible to all.',
      category: 'Design Principles',
      author: 'Maya Patel, OT',
      date: 'February 5, 2025',
      readTime: '7 min read',
      image: 'universal_design.jpg',
      tags: ['accessibility', 'inclusive design', 'community spaces']
    },
    {
      id: 9,
      title: 'New Research on Executive Function Interventions',
      excerpt: 'A review of recent studies examining effective strategies for improving executive function across the lifespan.',
      category: 'Research Highlights',
      author: 'Dr. James Wilson',
      date: 'January 30, 2025',
      readTime: '11 min read',
      image: 'executive_function.jpg',
      tags: ['cognitive rehabilitation', 'research', 'evidence-based practice']
    },
    {
      id: 10,
      title: 'Transforming Lives: How Assistive Technology Enabled Independence',
      excerpt: 'Stories of individuals whose lives were changed through personalized assistive technology solutions.',
      category: 'Community Stories',
      author: 'Sophia Martinez, OT',
      date: 'January 25, 2025',
      readTime: '6 min read',
      image: 'assistive_tech.jpg',
      tags: ['assistive technology', 'independence', 'success stories']
    },
    {
      id: 11,
      title: 'The Power of Routine: Establishing Healthy Daily Habits',
      excerpt: 'Practical strategies for developing and maintaining routines that support health and wellness.',
      category: 'Wellness Tips',
      author: 'Daniel Brown, OT',
      date: 'January 20, 2025',
      readTime: '5 min read',
      image: 'daily_routines.jpg',
      tags: ['routines', 'habits', 'wellness']
    },
    {
      id: 12,
      title: 'Neurodiversity in the Workplace: Creating Supportive Environments',
      excerpt: 'How employers can foster inclusive workplaces that empower neurodivergent employees to thrive.',
      category: 'Community Stories',
      author: 'Elizabeth Wong, OT',
      date: 'January 15, 2025',
      readTime: '9 min read',
      image: 'neurodiversity.jpg',
      tags: ['neurodiversity', 'workplace', 'inclusion']
    }
  ];

  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
  const featuredParallax = useTransform(scrollY, [300, 800], [0, -50]);
  const contentParallax = useTransform(scrollY, [600, 1100], [50, -30]);

  // Auto-rotate featured articles
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedArticleIndex(prev => (prev + 1) % featuredPosts.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [featuredPosts.length]);

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

  return (
    <div ref={scrollRef} className="relative w-full overflow-x-hidden bg-slate-50">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      
      {/* Header Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          ref={headerRef}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/assets/blog.jpg')`,
            transformOrigin: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-cyan-900/70 to-emerald-900/80"></div>
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
                className="text-5xl md:text-7xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                RO<span className="text-cyan-400">Insights</span> Blog
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
                Exploring occupational therapy insights, community impact, and innovative techniques 
                for enhancing quality of life and promoting wellness across diverse populations.
              </motion.p>
              
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative max-w-xl border-2 border-emerald-500 rounded-[20px]"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-800 w-5 h-5 " />
                  <input 
                    type="text"
                    placeholder="Search articles, topics, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white p-2 rounded-full">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
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
      
      {/* Featured Articles Section */}
      <motion.section
        style={{ y: featuredParallax }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="relative z-10 py-16 -mt-20"
      >
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <motion.h2 
                variants={sectionVariants}
                className="text-3xl md:text-4xl font-bold text-indigo-900 relative inline-block"
              >
                Featured Insights
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: '50%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.h2>
              
              <div className="flex space-x-2">
                {featuredPosts.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === featuredArticleIndex ? 'bg-cyan-500' : 'bg-slate-300'
                    }`}
                    onClick={() => setFeaturedArticleIndex(index)}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Featured Article Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredArticleIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative aspect-[16/9] md:aspect-[21/9]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('/assets/blogg.jpg')` 
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-2xl p-8">
                      <span className="inline-block px-4 py-1 rounded-full bg-cyan-500 text-white text-sm font-medium mb-4">
                        {featuredPosts[featuredArticleIndex]?.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {featuredPosts[featuredArticleIndex]?.title}
                      </h3>
                      <p className="text-cyan-50 mb-6">
                        {featuredPosts[featuredArticleIndex]?.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                        <div>
                          <p className="text-white font-medium">{featuredPosts[featuredArticleIndex]?.author}</p>
                          <div className="flex items-center gap-3 text-sm text-cyan-200">
                            <span>{featuredPosts[featuredArticleIndex]?.date}</span>
                            <span>•</span>
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {featuredPosts[featuredArticleIndex]?.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-medium inline-flex items-center gap-2"
                      >
                        Read Article
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
      
      {/* Filter Categories */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-indigo-700" />
              <h3 className="font-semibold text-indigo-900">Filter by Category:</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.name
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </div>
      </section>
      
      {/* Main Blog Content */}
      <motion.section
        style={{ y: contentParallax }}
        className="py-8 pb-24"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl overflow-hidden shadow-lg relative group"
                >
                  {/* Post Category Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/80 backdrop-blur-sm text-white text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Featured Tag */}
                  {post.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/80 backdrop-blur-sm text-white text-xs font-medium">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
    style={{
      backgroundImage: `url('https://img.freepik.com/free-photo/gradient-pink-diamond-geometric-shapes-arrangement_23-2149824300.jpg?t=st=1743241249~exp=1743244849~hmac=a9097570b242e5a2f03be17fe440bd1969eef117bd9e6bec2eea329a993c5f5f&w=740')`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
  </div>
</div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-slate-800 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-slate-100 rounded-md text-xs text-slate-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Author and Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                        <span className="text-sm font-medium text-slate-700">{post.author}</span>
                      </div>
                      <div className="flex items-center text-xs text-slate-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Read More Link */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                  <div className="absolute bottom-6 right-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-cyan-300/30"
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl"></div>
                  <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-indigo-500/10 blur-xl"></div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <div className="mb-6 text-cyan-600">
                  <Search className="w-16 h-16 mx-auto opacity-50" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">No articles found</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  We couldn&apos;t find any articles matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <button 
                  onClick={() => {setSearchTerm(''); setActiveCategory('All');}}
                  className="mt-6 px-5 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </motion.div>
          
          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-16 flex justify-center">
              <div className="inline-flex rounded-full bg-white shadow-md p-1">
                {[1, 2, 3, 4, 5].map((page) => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      page === 1 ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {page}
                  </motion.button>
                ))}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </motion.section>
      
      {/* Newsletter Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-cyan-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/30 text-cyan-200 text-sm font-medium mb-4">
                Stay Updated
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-cyan-100 mb-8">
                Get the latest insights, research updates, and community stories delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-sm text-cyan-200 mt-4">
                We respect your privacy and will never share your information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Topics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900"
            >
              Explore Topics
            </motion.h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover curated content across a variety of specialized areas within occupational therapy.
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              { icon: <Brain />, name: "Cognitive Rehabilitation" },
              { icon: <HeartHandshake />, name: "Pediatric Therapy" },
              { icon: <Hand />, name: "Fine Motor Skills" },
              { icon: <Lightbulb />, name: "Sensory Processing" },
              { icon: <Shapes />, name: "Adaptive Equipment" },
              { icon: <Users />, name: "Community Health" },
              { icon: <Heart />, name: "Mental Wellness" },
              { icon: <School />, name: "Education Approaches" },
              { icon: <Leaf />, name: "Sustainable Practice" },
              { icon: <Microscope />, name: "Research Methods" },
              { icon: <MessageCircle />, name: "Communication" },
              { icon: <PenTool />, name: "Creative Interventions" }
            ].map((topic, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-slate-50 rounded-xl p-4 text-center flex flex-col items-center cursor-pointer group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-cyan-50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 flex items-center justify-center mb-4 group-hover:from-indigo-500 group-hover:to-cyan-500 transition-colors duration-300">
                  <div className="text-indigo-500 group-hover:text-white transition-colors duration-300">
                    {topic.icon}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-slate-700">{topic.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative py-16 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-48 text-white/5" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M0,0 C300,100 600,0 1000,100 L1000,0 L0,0 Z" fill="currentColor"></path>
          </svg>
          <svg className="absolute bottom-0 left-0 w-full h-48 text-white/5 transform rotate-180" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M0,0 C300,100 600,0 1000,100 L1000,0 L0,0 Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-7/12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Interested in Contributing?
              </motion.h2>
              <p className="text-emerald-100 mb-6">
                Share your expertise, community experiences, or research findings with our engaged audience. 
                We welcome submissions from practitioners, students, researchers, and community partners.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition"
              >
                Submit Your Article
              </motion.button>
            </div>
            
            <div className="md:w-5/12">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Submission Guidelines</h3>
                <ul className="space-y-3">
                  {[
                    "Articles should be 800-1,500 words in length",
                    "Include practical applications and evidence basis",
                    "Share personal experiences and case examples",
                    "Address community impact and sustainable practices",
                    "Include high-quality images (with proper permissions)"
                  ].map((guideline, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="min-w-5 h-5 rounded-full bg-cyan-500/30 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="text-sm">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;