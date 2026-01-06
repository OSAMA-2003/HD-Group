"use client";

import Image from "next/image";
import { products } from "@/data/products.js";
import { notFound, useRouter } from "next/navigation"; // 1. Import useRouter
import { ArrowLeft, Package, Globe, ShieldCheck, Box } from 'lucide-react';
import { use } from "react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: ProductPageProps) {
  const { id } = use(params);
  const router = useRouter(); // 2. Initialize router

  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 main-blue">
      
      {/* Top Navigation / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center">
          {/* 3. Changed Link to button with router.back() */}
          <button 
            onClick={() => router.back()} 
            className="group flex items-center text-yellow-700 font-medium hover:text-yellow-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" /> 
            Back
          </button>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* --- Product Main Section --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Left Column: Product Image */}
          <div className="relative w-full">
            <div className="aspect-square relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col pt-4">
            
            <h1 className="text-3xl lg:text-4xl font-bold man-blue mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
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
            </div>

            {/* Packaging & Export Info (Yellow Box) */}
            <div className="bg-[#FFF9E5] rounded-2xl p-6 mb-8">
              <h3 className="man-blue font-semibold text-lg mb-3">
                Packaging & Export Information
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {product.details}
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-yellow-400 hover:bg-yellow-300 man-blue  py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-lg mb-3">
              Request Information
            </button>
            
            <div className="text-center flex flex-col items-center gap-4">
              <p className="text-sm text-slate-500">
                Contact us for pricing, availability and shipping details
              </p>
            </div>
          </div>
        </div>

        {/* --- Why Choose Us --- */}
        <div className="py-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold man-blue">
              Why Choose Our <span className="text-yellow-600">{product.name}?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold man-blue mb-4">Premium Origin</h3>
              <p className="text-slate-600 leading-relaxed">
                Directly sourced from the finest farms in Egypt, ensuring authentic taste and superior quality in every batch we export.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold man-blue mb-4">Quality Assured</h3>
              <p className="text-slate-600 leading-relaxed">
                Rigorous quality control processes from harvest to packaging, meeting international standards for freshness and safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Box className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold man-blue mb-4">Export Packaging</h3>
              <p className="text-slate-600 leading-relaxed">
                Professional export-grade packaging designed to preserve freshness and prevent damage during long-distance shipping.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}