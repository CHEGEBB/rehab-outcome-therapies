"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send, 
  Mail, 
  Phone, 
  ChevronRight
} from 'lucide-react';

import Logo from "@/assets/logo.png";

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const socialLinks = [
    { 
      icon: <Facebook className="w-6 h-6" />, 
      href: "https://facebook.com", 
      color: "text-blue-600 hover:text-blue-700" 
    },
    { 
      icon: <Twitter className="w-6 h-6" />, 
      href: "https://twitter.com", 
      color: "text-sky-500 hover:text-sky-600" 
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      href: "https://instagram.com", 
      color: "text-blue-600 hover:text-blue-700" 
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://linkedin.com", 
      color: "text-blue-800 hover:text-blue-900" 
    }
  ];

  const quickLinks = [
    { 
      title: "Quick Links", 
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" }
      ]
    },
    { 
      title: "Resources", 
      links: [
        { name: "Treatment Programs", href: "#" },
        { name: "Patient Resources", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "FAQ", href: "/contact" }
      ]
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement newsletter signup logic
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative z-40 bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image 
                src={Logo} 
                alt="Company Logo" 
                width={60} 
                height={60} 
                className="rounded-full"
              />
              <h2 className="text-2xl font-bold text-emerald-400">
                Rehab Outcome Therapies
              </h2>
            </div>
            <p className="text-gray-300">
              Transforming lives through comprehensive rehabilitation and personalized therapeutic approaches.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition ${social.color} transform hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li 
                    key={linkIndex}
                    className="group flex items-center"
                  >
                    <ChevronRight className="mr-2 w-4 h-4 text-emerald-500 group-hover:text-emerald-400 transition" />
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-emerald-400 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              Stay Connected
            </h3>
            <form 
              onSubmit={handleNewsletterSubmit}
              className="space-y-4"
            >
              <p className="text-gray-300">
                Subscribe to our newsletter for rehabilitation insights and updates.
              </p>
              <div className="flex">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 text-white 
                  rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-4 rounded-r-lg 
                  hover:bg-emerald-700 transition flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span>info@rehaboutcometherapies.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>+254756702812</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>+254748960787</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div 
          className="mt-16 pt-8 border-t border-slate-700 text-center"
        >
          <p className="text-gray-300">
            © {new Date().getFullYear()} Rehab Outcome Therapies. All Rights Reserved.
            <br />
            Empowering Rehabilitation Through Innovative Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;