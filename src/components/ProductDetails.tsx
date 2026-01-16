"use client";

import Image from "next/image";
import { products } from "@/data/products";
import { notFound, useRouter } from "next/navigation"; 
import { ArrowLeft, Package, Globe, ShieldCheck, Box } from 'lucide-react';
import { use } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // 1. Import hook
import Link from "next/link";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const } 
  }
};

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: ProductPageProps) {
  const t = useTranslations('product_details'); // 2. Initialize Translations
  const { id } = use(params);
  const router = useRouter(); 

  // We use the data file ONLY for ID, Image, and Availability check
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  // Helper to get translated item text safely
  const itemT = (key: string) => t(`items.${product.id}.${key}`);

  return (
    <div className="min-h-screen bg-gray-50 main-blue overflow-hidden">
      
      {/* Top Navigation / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.nav 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            onClick={() => router.back()} 
            className="group flex items-center text-yellow-700 font-medium hover:text-yellow-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" /> 
            {t('ui.back')}
          </button>
        </motion.nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* --- Product Main Section --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Left Column: Product Image */}
          <motion.div 
            className="relative w-full"
            initial="hidden"
            animate="visible"
            variants={imageReveal}
          >
            <div className="aspect-square relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
              <Image
                src={product.image}
                alt={itemT('name')} 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Product Details */}
          <motion.div 
            className="flex flex-col pt-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            
            <motion.h1 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold man-blue mb-4">
              {itemT('name')} {/* Translated Name */}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
              {itemT('desc')} {/* Translated Description */}
            </motion.p>

            {/* Specifications Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
              <div className="flex items-center gap-2 mb-6 man-blue">
                <Package className="w-10 h-10 md:w-5 md:h-5 text-yellow-500" />
                <h3 className="font-semibold text-lg">{t('ui.specifications')}</h3>
              </div>
              
              <div className="space-y-4">
                {/* Origin */}
                <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                  <span className="text-slate-500 font-medium">{t('ui.label_origin')}:</span>
                  <span className="man-blue font-medium">{itemT('origin')}</span>
                </div>
                {/* Season */}
                <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                  <span className="text-slate-500 font-medium">{t('ui.label_season')}:</span>
                  <span className="man-blue font-medium">{t('ui.season_value')}</span> 
                </div>
                {/* Varieties */}
                <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                  <span className="text-slate-500 font-medium">{t('ui.label_varieties')}:</span>
                  <span className="man-blue font-medium">{itemT('varieties')}</span>
                </div>
                {/* Packaging */}
                <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                  <span className="text-slate-500 font-medium">{t('ui.label_packaging')}:</span>
                  <span className="man-blue font-medium">{itemT('packaging')}</span>
                </div>
              </div>
            </motion.div>

            
            <motion.div variants={fadeInUp} className="bg-[#FFF9E5] rounded-2xl p-6 mb-8">
              <h3 className="man-blue font-semibold text-lg mb-3">
                {t('ui.packaging_title')}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {itemT('details')}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 man-blue py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-lg mb-3">
                {t('ui.btn_request')}
              </button>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center flex flex-col items-center gap-4">
              <p className="text-sm text-slate-500">
                {t('ui.contact_hint')}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* --- Why Choose Us --- */}
        <div className="py-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold man-blue">
              {t('ui.why_title')} <span className="text-yellow-600">{itemT('name')}?</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { icon: Globe, title: t('why_us.origin_title'), text: t('why_us.origin_text') },
              { icon: ShieldCheck, title: t('why_us.quality_title'), text: t('why_us.quality_text') },
              { icon: Box, title: t('why_us.export_title'), text: t('why_us.export_text') }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold man-blue mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}