'use client'
import Link from 'next/link';
import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Truck, Handshake } from 'lucide-react';
// 1. Import Framer Motion
import { motion } from 'framer-motion';
import Button from '@/components/UI/Button';

// --- Animation Variants Configuration ---
// These are defined outside the component to prevent re-creation on every render (Performance Boost)

// 1. Simple Fade Up (for text and single elements)
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

// 2. Stagger Container (for Grids)
// This coordinates the children to animate one by one
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 0.2s delay between each item
      delayChildren: 0.1
    }
  }
};

export default function HomePage() {

  const products = [
    {
      id: 1,
      title: "Fresh Fruits",
      link: "/products/fruits",
      description: "Premium quality fruits selected for their sweetness and nutritional value for global export.",
      image: "/products/fruites/ALL .webp"
    },
    {
      id: 2,
      title: "Fresh Vegetables",
      link: "/products/vegetables",
      description: "Farm-fresh vegetables harvested at peak ripeness and delivered to international markets.",
      image: "/products/veg/ALL VEGE.webp"
    },
    {
      id: 3,
      title: "Medical Supplies",
      link: "/products/medical",
      description: "Certified medical equipment and supplies meeting rigorous international safety standards.",
      image: "/images/products-home.webp"
    },
    {
      id: 4,
      title: "Legumes & Dry Goods",
      link: "/products/dry-goods",
      description: "Aromatic and authentic spices sourced directly from Egyptian farms to your kitchen.",
      image: "/images/products-home.webp"
    },
  ];

  const features = [
    {
      title: "High Quality Standards",
      description: "All products meet international quality certifications and standards.",
      icon: <ShieldCheck size={32} className="text-white" />
    },
    {
      title: "Global Reach",
      description: "Exporting to markets across Europe, Asia, Middle East, and Africa.",
      icon: <Globe size={32} className="text-white" />
    },
    {
      title: "Reliable Logistics",
      description: "Efficient supply chain ensuring timely delivery worldwide.",
      icon: <Truck size={32} className="text-white" />
    },
    {
      title: "Trusted Partner",
      description: "Years of export experience with a proven track record.",
      icon: <Handshake size={32} className="text-white" />
    }
  ];

  return (
    <main>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    poster="/images/home.jpg"
    className="w-full h-full object-cover"
  >
    
    <source src="/images/home.webm" type="video/webm" />
    <source src="/images/home.mp4" type="video/mp4" />

    {/* Fallback for very old browsers */}
    <img
      src="/images/home.jpg"
      alt="Background"
      className="w-full h-full object-cover"
    />
  </video>

  <div className="absolute inset-0 bg-[#0a1f44] opacity-80"></div>
</div>



        {/* Hero Content - Animated */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* We wrap the content in motion.div */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer} // Stagger the internal elements
          >
            <motion.p variants={fadeInUp} className="main-yellow font-medium text-lg mb-4 tracking-wide">
              Global Trade Solutions & Export
            </motion.p>

            <motion.h1 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-3xl font-bold text-white leading-tight mb-8">
              HD GROUP for Export is an Egyptian export company providing a diverse range of high-quality products
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 main-blue py-3 px-8 rounded-md transition-colors flex items-center gap-2">
                View Product
                <ArrowRight />
              </button>

              <Link href="/contact">
                <button className="border border-white hover:bg-white hover:text-[#002249] text-white py-3 px-13 rounded-md transition-colors">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- WELCOME SECTION --- */}
      <section className="py-10 md:py-20 px-4 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Only animates once when 100px into view
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl mb-8 main-blue">
            Welcome to <span className="secondary-yellow">HD GROUP</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            <span className=" secondary-yellow">HD GROUP</span> HD GROUP is a leading Egyptian export company with years of experience in delivering premium fresh fruits, vegetables, and medical supplies to international markets. We pride ourselves on quality, reliability, and customer satisfaction.
            Our commitment to excellence and strict quality control ensures that every shipment meets the highest international standards. Partner with us for a seamless export experience.
          </p>
        </motion.div>
      </section>


      {/* --- PRODUCTS CATEGORIES SECTION --- */}
      <section className="py-5 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* --- Section Header --- */}
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl main-blue mb-4 text-[#0a1f44]">
              Our Product Categories
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover our range of export products, carefully selected and prepared for global markets
            </p>
          </motion.div>

          {/* --- Grid Layout with Stagger Animation --- */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} // Triggers when grid starts entering view
            variants={staggerContainer} // Tells children to stagger
          >
            {products.map((product) => (
              // Each Item gets 'fadeInUp' which is triggered by the parent 'staggerContainer'
              <motion.div 
                key={product.id} 
                variants={fadeInUp}
                className="min-h-[430px] bg-white border border-gray-400 border-t-0 rounded-[16px] flex flex-col h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Image Area */}
                <div className="overflow-hidden mb-6 bg-gray-50 h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="pb-4 px-4 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-semibold text-[#0a1f44] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  <Link href={product.link} className="w-full">
                    <Button text='View Products' />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-5 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl">
              <span className="main-blue">Why Choose </span>
              <span className="secondary-yellow">HD GROUP</span>
            </h2>
          </motion.div>

          {/* Grid with Stagger Animation */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-[#FAC10F] flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold main-blue mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </main>
  );
}