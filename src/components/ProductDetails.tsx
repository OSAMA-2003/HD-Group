"use client";

import Image from "next/image";
import { products } from "@/data/products.js";
import { notFound, useRouter } from "next/navigation"; 
import { ArrowLeft, Package, Globe, ShieldCheck, Box } from 'lucide-react';
import { use } from "react";
// 1. Import Framer Motion
import { motion } from "framer-motion";

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
  const { id } = use(params);
  const router = useRouter(); 

  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

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
            Back
          </button>
        </motion.nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* --- Product Main Section --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Left Column: Product Image (Animated Reveal) */}
          <motion.div 
            className="relative w-full"
            initial="hidden"
            animate="visible"
            variants={imageReveal}
          >
            <div className="aspect-square relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Product Details (Staggered Fade Up) */}
          <motion.div 
            className="flex flex-col pt-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            
            <motion.h1 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold man-blue mb-4">
              {product.name}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
              {product.description}
            </motion.p>

            {/* Specifications Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
              <div className="flex items-center gap-2 mb-6 man-blue">
                <Package className="w-10 h-10 md:w-5 md:h-5 text-yellow-500" />
                <h3 className="font-semibold text-lg">Specifications</h3>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                  <span className="text-slate-500 font-medium">Origin:</span>
                  <span className="man-blue font-medium">{product.origin}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                  <span className="text-slate-500 font-medium">Season:</span>
                  <span className="man-blue font-medium">May - September</span> 
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                  <span className="text-slate-500 font-medium">Varieties:</span>
                  <span className="man-blue font-medium">{product.varieties}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                  <span className="text-slate-500 font-medium">Packaging:</span>
                  <span className="man-blue font-medium">{product.packaging}</span>
                </div>
              </div>
            </motion.div>

            {/* Packaging & Export Info (Yellow Box) */}
            <motion.div variants={fadeInUp} className="bg-[#FFF9E5] rounded-2xl p-6 mb-8">
              <h3 className="man-blue font-semibold text-lg mb-3">
                Packaging & Export Information
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {product.details}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <button className="w-full bg-yellow-400 hover:bg-yellow-300 man-blue py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-lg mb-3">
                Request Information
              </button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center flex flex-col items-center gap-4">
              <p className="text-sm text-slate-500">
                Contact us for pricing, availability and shipping details
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
              Why Choose Our <span className="text-yellow-600">{product.name}?</span>
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
              { icon: Globe, title: "Premium Origin", text: "Directly sourced from the finest farms in Egypt, ensuring authentic taste and superior quality in every batch we export." },
              { icon: ShieldCheck, title: "Quality Assured", text: "Rigorous quality control processes from harvest to packaging, meeting international standards for freshness and safety." },
              { icon: Box, title: "Export Packaging", text: "Professional export-grade packaging designed to preserve freshness and prevent damage during long-distance shipping." }
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