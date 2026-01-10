'use client'
import React from 'react'
import { Facebook, Instagram, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }    }
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
    // 1. Initialize Translations
    const t = useTranslations('about');

   
    const teamMembers = [
        {
            name: "Ahmed Hassan", // Names usually stay properly nouns, or you can translate them if needed
            image: '/team/mem1.png',
            facebook: "https://facebook.com",
            instagram: "https://instagram.com"
        },
        {
            name: "Mohamed Ali", // Changed name for variety
            image: '/team/mem1.png',
            facebook: "https://facebook.com",
            instagram: "https://instagram.com"
        },
        {
            name: "Samy Ahmed", // Changed name for variety
            image: '/team/mem1.png',
            facebook: "https://facebook.com",
            instagram: "https://instagram.com"
        },
    ];

    // Market keys to lookup in JSON
    const marketKeys = [
        "south_africa", "france", "russia", "uk", "china"
    ];

    return (
        <main className='bg-gray-50 overflow-hidden'>

            {/* Header Section */}
            <div className="bg-white py-8 px-4 text-center shadow-sm border-b border-b-gray-100">
                <h1 className="text-4xl main-blue mb-4 ">
                    {t('header_title')} <span className="secondary-yellow">HD Group</span>
                </h1>
                <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
                    {t('header_subtitle')}
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
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl text-center main-blue mb-10 ">
                            {t('who_we_are_title')}
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
                            {/* Card 1: Our Mission */}
                            <motion.div
                                variants={fadeInUp}
                                className="border bg-white hover:bg-gray-100 border-gray-300 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-xl main-blue mb-4">{t('mission_title')}</h3>
                                <p className="text-md md:text-lg leading-relaxed text-gray-700">
                                    {t('mission_desc')}
                                </p>
                            </motion.div>

                            {/* Card 2: HD GROUP (Highlighted) */}
                            <motion.div
                                variants={fadeInUp}
                                className="border-2 bg-white hover:bg-yellow-50 border-[#FBCE2E] rounded-2xl p-8 flex flex-col items-center text-center shadow-md relative transform md:scale-105 transition-all duration-300 z-10"
                            >
                                <h3 className="text-xl secondary-yellow mb-4">{t('company_title')}</h3>
                                <p className="text-md md:text-lg leading-relaxed text-gray-700">
                                    {t('company_desc')}
                                </p>
                            </motion.div>

                            {/* Card 3: Our Vision */}
                            <motion.div
                                variants={fadeInUp}
                                className="border bg-white hover:bg-gray-100 border-gray-300 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-xl main-blue mb-4">{t('vision_title')}</h3>
                                <p className="text-md md:text-lg leading-relaxed text-gray-700">
                                    {t('vision_desc')}
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
                        <h2 className="text-3xl md:text-4xl mb-8">
                            <span className="main-blue">{t('story_title')} </span>
                            <span className="secondary-yellow">HD GROUP</span>
                        </h2>

                        <div className="space-y-6 main-blue text-sm md:text-base leading-relaxed px-4">
                            <p>{t('story_p1')}</p>
                            <p>{t('story_p2')}</p>
                            <p>{t('story_p3')}</p>
                            <p>{t('story_p4')}</p>
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
                        <h2 className="text-3xl main-blue mb-3 ">{t('team_title')}</h2>
                        <p className="main-blue text-sm md:text-base max-w-2xl mx-auto">
                            {t('team_subtitle')}
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
                                {/* Image Container */}
                                <div className="relative w-full bg-white">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="rounded-br-[3.5rem] w-full h-full object-contain"
                                    />
                                    {/* Social Icons */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                                        <div className="w-8 h-8 bg-[#d4af37] rounded flex items-center justify-center cursor-pointer hover:bg-[#b08d28] transition-colors">
                                            <a href={member.facebook} target="_blank" rel="noopener noreferrer"><Facebook className='text-white w-5 h-5' /></a>
                                        </div>
                                        <div className="w-8 h-8 bg-[#d4af37] rounded flex items-center justify-center cursor-pointer hover:bg-[#b08d28] transition-colors">
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer"><Instagram className='text-white w-5 h-5' /></a>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-6 pt-4 text-left">
                                    <h3 className="text-xl font-bold main-blue">{member.name}</h3>
                                    {/* Using generic role/desc from JSON, or you can add specific keys per member if they differ */}
                                    <p className="secondary-yellow font-medium text-sm mb-2">{t('team_member_role')}</p>
                                    <p className="main-blue text-sm leading-relaxed">
                                        {t('team_member_desc')}
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
                        <h2 className="text-2xl md:text-3xl main-blue mb-3 ">
                            {t('markets_title')}
                        </h2>
                        <p className="main-blue text-sm mb-10">
                            {t('markets_subtitle')}
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
                                {marketKeys.slice(0, 3).map((key, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeInUp}
                                        className="border border-[#FBCE2E] rounded-xl py-4 px-6 main-blue font-bold text-center shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MapPin className='main-yellow w-5 h-5' />
                                        {/* Dynamic Lookup: countries.france, etc */}
                                        {t(`countries.${key}`)}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Row: 2 Items */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full md:w-2/3 mx-auto">
                                {marketKeys.slice(3, 5).map((key, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeInUp}
                                        className="border border-[#FBCE2E] rounded-xl py-4 px-6 main-blue font-bold text-center shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MapPin className='main-yellow w-5 h-5' />
                                        {t(`countries.${key}`)}
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