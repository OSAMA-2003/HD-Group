'use client'
import React from 'react'
import { Facebook, Instagram, MapPin } from 'lucide-react';
// 1. Import Framer Motion
import { motion } from 'framer-motion';

// --- Reusable Animation Variants (Consistent with Home Page) ---
const fadeInUp = {
    hidden: { opacity: 0, y: 30 }, // Corrected type for ease
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

export default function AboutPage() {

    const teamMembers = [
        {
            name: "Ahmed Hassan",
            image: '/team/mem1.png',
            role: "Founder & CEO",
            description: "Over 20 years of experience in international export.",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com"
        },
        {
            name: "Ahmed Hassan",
            image: '/team/mem1.png',
            role: "Founder & CEO",
            description: "Over 20 years of experience in international export.",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com"
        },
        {
            name: "Ahmed Hassan",
            image: '/team/mem1.png',
            role: "Founder & CEO",
            description: "Over 20 years of experience in international export.",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com"
        },
    ];

    const markets = [
        "South Africa", "France", "Russia",
        "UK", "China"
    ];

    return (
        <main className='bg-gray-50 overflow-hidden'>

            {/* Header Section - Simple Fade In */}
            <div 
                className="bg-white py-8 px-4 text-center shadow-sm border-b border-b-gray-100"
                
            >
                <h1 className="text-4xl main-blue mb-4 font-bold">
                    About <span className="secondary-yellow">HD Group</span>
                </h1>
                <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
                    Your trusted partner in international trade since our founding
                </p>
            </div>

            <section className="py-16 px-4 text-gray-800">
                <div className="max-w-7xl mx-auto">

                    {/* --- Who We Are --- */}
                    <motion.div 
                        className="mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl text-center main-blue mb-10 font-bold">
                            Who We Are
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
                            {/* Card 1: Our Mission */}
                            <motion.div 
                                variants={fadeInUp}
                                className="border bg-white hover:bg-gray-100 border-gray-300 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold main-blue mb-4">Our Mission</h3>
                                <p className="text-md md:text-lg leading-relaxed text-gray-700">
                                    Our mission is to deliver safe, high-quality products that meet international standards while ensuring efficiency, transparency, and reliability across the export process. We aim to support our partners by providing consistent supply, careful product handling, and professional logistics solutions that add real value to their businesses.
                                </p>
                            </motion.div>

                            {/* Card 2: HD GROUP (Highlighted) */}
                            <motion.div 
                                variants={fadeInUp}
                                className="border-2 bg-white hover:bg-yellow-50 border-[#FBCE2E] rounded-2xl p-8 flex flex-col items-center text-center shadow-md relative transform md:scale-105 transition-all duration-300 z-10"
                            >
                                <h3 className="text-xl font-bold secondary-yellow mb-4">HD GROUP for Export</h3>
                                <p className="text-md md:text-lg leading-relaxed text-gray-700">
                                    HD GROUP for Export is an Egyptian export company providing a diverse range of high-quality products to international markets. Our portfolio includes fresh vegetables, fresh fruits, medical supplies, and staple food products. We focus on delivering reliable export solutions that meet global quality standards while building long-term partnerships.
                                </p>
                            </motion.div>

                            {/* Card 3: Our Vision */}
                            <motion.div 
                                variants={fadeInUp}
                                className="border bg-white hover:bg-gray-100 border-gray-300 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold main-blue mb-4">Our Vision</h3>
                                <p className="text-md md:text-lg leading-relaxed text-gray-700">
                                    Our vision is to become a trusted global export partner recognized for quality, integrity, and sustainability. We strive to expand our market reach, diversify our product offerings, and continuously improve our processes to meet the evolving needs of international markets and contribute to sustainable global trade.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* --- Our Story --- */}
                    <motion.div 
                        className="max-w-5xl mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl mb-8 font-bold">
                            <span className="main-blue">Our Story </span>
                            <span className="secondary-yellow">HD GROUP</span>
                        </h2>

                        <div className="space-y-6 main-blue text-sm md:text-base leading-relaxed px-4">
                            <p>
                                HD GROUP was established with a clear vision: to bridge the gap between Egyptian quality products and international markets. From our humble beginnings, we have grown into a trusted export partner for businesses across the globe.
                            </p>
                            <p>
                                Our journey began in the agricultural sector, exporting premium Egyptian fresh fruits and vegetables. Leveraging Egypt's ideal climate and rich agricultural heritage, we quickly established ourselves as a reliable supplier of top-quality produce. Our oranges, strawberries, grapes, and vegetables are now enjoyed in markets across Europe, Asia, and the Middle East.
                            </p>
                            <p>
                                Recognizing the growing global demand for medical supplies, we expanded our operations to include certified medical equipment and supplies. This diversification allows us to serve healthcare institutions and distributors with the same commitment to quality and reliability that defines our fresh produce business.
                            </p>
                            <p>
                                Today, HD GROUP stands as a testament to Egyptian excellence in international trade. Our state-of-the-art facilities, stringent quality control processes, and experienced team ensure that every product we export meets or exceeds international standards.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* --- Top Section: Leadership Team --- */}
                    <motion.div 
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl main-blue mb-3 font-bold">Our Leadership Team</h2>
                        <p className="main-blue text-sm md:text-base max-w-2xl mx-auto">
                            Meet the experienced professionals leading HD GROUP to excellence in international trade
                        </p>
                    </motion.div>

                    {/* Team Grid */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-br-[3.5rem] overflow-hidden border border-[#d4af37] shadow-sm hover:shadow-lg transition-all duration-300 relative group"
                            >
                                {/* Image Container with Social Icons */}
                                <div className="relative w-full bg-white h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Social Media Icons (Top Right) */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                                        <div className="w-8 h-8 bg-[#d4af37] rounded flex items-center justify-center cursor-pointer hover:bg-[#b08d28] transition-colors">
                                            <Facebook className='text-white w-4 h-4' />
                                        </div>
                                        <div className="w-8 h-8 bg-[#d4af37] rounded flex items-center justify-center cursor-pointer hover:bg-[#b08d28] transition-colors">
                                            <Instagram className='text-white w-4 h-4' />
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-6 pt-4 text-left">
                                    <h3 className="text-xl font-bold main-blue">{member.name}</h3>
                                    <p className="secondary-yellow font-medium text-sm mb-2">{member.role}</p>
                                    <p className="main-blue text-sm leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* --- Bottom Section: Global Export Markets --- */}
                    <motion.div 
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-2xl md:text-3xl main-blue mb-3 font-bold">
                            Global Export Markets
                        </h2>
                        <p className="main-blue text-sm mb-10">
                            We proudly serve international markets across multiple continents
                        </p>

                        <motion.div 
                            className="flex flex-col gap-6 max-w-4xl mx-auto"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Top Row: 3 Items */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {markets.slice(0, 3).map((market, i) => (
                                    <motion.div 
                                        key={i} 
                                        variants={fadeInUp}
                                        className="border border-[#FBCE2E] rounded-xl py-4 px-6 main-blue font-bold text-center shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MapPin className='main-yellow w-5 h-5' /> {market}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Row: 2 Items (Centered) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full md:w-2/3 mx-auto">
                                {markets.slice(3, 5).map((market, i) => (
                                    <motion.div 
                                        key={i} 
                                        variants={fadeInUp}
                                        className="border border-[#FBCE2E] rounded-xl py-4 px-6 main-blue font-bold text-center shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MapPin className='main-yellow w-5 h-5' /> {market}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}