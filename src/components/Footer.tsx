"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Clock,
  Music // Using Music as a placeholder for TikTok if strictly Lucide is needed, or just standard icons
} from 'lucide-react';
import Image from "next/image";

// Custom TikTok SVG since Lucide might not have the exact brand icon depending on version
const TikTokIcon = ({ size = 20, className = ""}) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );

function Footer() {
  return (
    <footer className="bg-[#002249]  text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

         
          <div className="flex flex-col items-center space-y-6">
            <Link href="/" className="block">
              
              <Image
                src="/logo-white.png" 
                alt="HD Group"
                width={120}
                height={120}
                className="w-auto h-20 object-contain"
              />
            </Link>
            
            <p className="text-slate-300 text-center text-sm leading-relaxed max-w-xs">
              Leading Egyptian export company specializing in fresh produce and medical supplies to global markets.
            </p>

            <div className="pt-2">
              <h4 className="text-sm  font-medium mb-4 text-white">Follow us on social media</h4>
              <div className="flex justify-center gap-4">
                <a href="#" className="main-yellow hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="main-yellow hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="main-yellow hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="main-yellow hover:text-white transition-colors"><TikTokIcon size={20} /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-start">
            <h3 className="main-yellow font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-yellow-400  transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products/fruits" className="hover:text-yellow-400  transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400  transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="text-center md:text-start">
            <h3 className="main-yellow font-bold text-lg mb-6">Our Products</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <Link href="/products/fruits" className="hover:text-yellow-400  transition-colors">Fresh Fruits</Link>
              </li>
              <li>
                <Link href="/products/vegetables" className="hover:text-yellow-400  transition-colors">Fresh Vegetables</Link>
              </li>
              <li>
                <Link href="/products/medical" className="hover:text-yellow-400 transition-colors">Medical Supplies</Link>
              </li>
              <li>
                <Link href="/products/dry-goods" className="hover:text-yellow-400 transition-colors">Staple Foods & Dry Goods</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Detailed) */}
          <div >
            <h3 className="main-yellow text-center md:text-start font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-6 text-sm md:text-start text-slate-300">
              
              {/* Phone */}
              <div className="flex items-start  gap-3">
                <Phone className="w-5 h-5 main-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="block main-yellow font-medium mb-1">Phone:</span>
                  <p>01530401020</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 main-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="block main-yellow font-medium mb-1">Email:</span>
                  <p className="break-all">info@hdgroup-export.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 main-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="block main-yellow font-medium mb-1">Location:</span>
                  <p className="leading-relaxed">
                    Cairo, Egypt - Export City Center.
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 main-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="block main-yellow font-medium mb-1">Working Hours</span>
                  <p>Saturday - Thursday</p>
                  <p>08:00 am - 08:00 pm</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700/50 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;