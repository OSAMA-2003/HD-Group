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
} from 'lucide-react';
import Image from "next/image";
import { useTranslations } from 'next-intl';

// Custom TikTok SVG
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
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#002249]  text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Column 1: Logo & Description */}
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
              {t('description')}
            </p>

            <div className="pt-2">
              <h4 className="text-sm  font-medium mb-4 text-white">{t('follow_us')}</h4>
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
            <h3 className="main-yellow font-bold text-lg mb-6">{t('links_title')}</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-yellow-400  transition-colors">{t('link_home')}</Link>
              </li>
              <li>
                <Link href="/products/fruits" className="hover:text-yellow-400  transition-colors">{t('link_products')}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400  transition-colors">{t('link_about')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="text-center md:text-start">
            <h3 className="main-yellow font-bold text-lg mb-6">{t('products_title')}</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <Link href="/products/fruits" className="hover:text-yellow-400  transition-colors">{t('prod_fruits')}</Link>
              </li>
              <li>
                <Link href="/products/vegetables" className="hover:text-yellow-400  transition-colors">{t('prod_veg')}</Link>
              </li>
              <li>
                <Link href="/products/medical" className="hover:text-yellow-400 transition-colors">{t('prod_medical')}</Link>
              </li>
              <li>
                <Link href="/products/dry-goods" className="hover:text-yellow-400 transition-colors">{t('prod_dry')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Detailed) */}
          <div >
            <h3 className="main-yellow text-center md:text-start font-bold text-lg mb-6">{t('contact_title')}</h3>
            <div className="space-y-6 text-sm md:text-start text-slate-300">
              
              {/* Phone */}
              <div className="flex items-start  gap-3">
                <Phone className="w-5 h-5 main-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="block main-yellow font-medium mb-1">{t('label_phone')}</span>
                  <p>01530401020</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 main-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="block main-yellow font-medium mb-1">{t('label_email')}</span>
                  <p className="break-all">info@hdgroup-export.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 main-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="block main-yellow font-medium mb-1">{t('label_location')}</span>
                  <p className="leading-relaxed">
                    {t('location_value')}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 main-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="block main-yellow font-medium mb-1">{t('label_hours')}</span>
                  <p>{t('hours_days')}</p>
                  <p>08:00 am - 08:00 pm</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700/50 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;