"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { getCountries } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en";
import "react-phone-number-input/style.css"; 
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from "react";
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

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

export default function ContactPage() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Zod Schema (Moved inside to access translations) ---
  const contactSchema = z.object({
    fullName: z.string().min(2, t('errors.name_min')),
    email: z.string().email(t('errors.email_invalid')),
    companyName: z.string().optional(),
    phoneNumber: z.string().refine(isValidPhoneNumber, { message: t('errors.phone_invalid') }),
    country: z.string().min(1, t('errors.country_req')),
    productInterest: z.string().optional(),
    message: z.string().min(10, t('errors.message_min')),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      phoneNumber: "",
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Form Data Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); 
    setIsSubmitting(false);
    reset(); 
    alert(t('alert_success'));
  };

  return (
    <div className="min-h-screen bg-gray-50 main-blue">
      
      {/* Header Section */}
      <div className="bg-white py-8 px-4 text-center shadow-sm border-b border-gray-100">
        <h1 className="text-4xl main-blue mb-4 ">
          {t('header_title')} <span className="secondary-yellow">HD Group</span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
          {t('header_desc')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-[24px] items-start">
          
          {/* LEFT COLUMN: Contact Info */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className='bg-white rounded-2xl p-5 shadow-sm border border-gray-100'>
              <span className="text-[#d4af37] tracking-wide uppercase text-sm font-bold ">
                {t('info_tag')}
              </span>
              <h2 className="text-2xl  main-blue mt-2 mb-4">
                {t('info_title')}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t('info_desc')}
              </p>

              <motion.div className="grid gap-8" variants={staggerContainer}>
                {/* Email */}
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="main-blue text-lg font-semibold">{t('label_email')}</h3>
                    <p className="text-slate-600">info@hdgroup-export.com</p>
                    <p className="text-slate-600">sales@hdgroup-export.com</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="main-blue text-lg font-semibold">{t('label_phone')}</h3>
                    <p className="text-slate-600">+20 153 0401 020</p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="main-blue text-lg font-semibold">{t('label_location')}</h3>
                    <p className="text-slate-600 max-w-xs">
                      {t('location_value')}
                    </p>
                  </div>
                </motion.div>

                {/* Working Hours */}
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="main-blue text-lg font-semibold">{t('label_hours')}</h3>
                    <p className="text-slate-600">{t('hours_days')}</p>
                    <p className="text-slate-600">08:00 am - 08:00 pm</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#FFF9E3] p-6 rounded-2xl border border-yellow-100">
              <h3 className="main-blue text-lg mb-2 font-bold">{t('quick_resp_title')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('quick_resp_desc')}
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Form */}
          <motion.div 
            className="bg-white rounded-3xl p-8 border border-yellow-400 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp} 
          >
            <h2 className="text-2xl font-bold main-blue mb-8">{t('form_title')}</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  {t('field_name')} <span className="text-red-500">*</span>
                </label>
                <input 
                  {...register("fullName")}
                  type="text" 
                  placeholder={t('ph_name')} 
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all ${
                    errors.fullName ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  {t('field_email')} <span className="text-red-500">*</span>
                </label>
                <input 
                  {...register("email")}
                  type="email" 
                  placeholder={t('ph_email')} 
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  {t('field_company')}
                </label>
                <input 
                  {...register("companyName")}
                  type="text" 
                  placeholder={t('ph_company')} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                />
              </div>

              {/* Phone and Country Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                             
                <div>
                  <label className="block text-sm font-medium main-blue mb-2">
                    {t('field_phone')} <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        international
                        defaultCountry="EG"
                        placeholder={t('ph_phone')}
                        className={`flex h-[50px] max-w-full rounded-lg border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-within:ring-2 focus-within:ring-[#d4af37] focus-within:border-transparent ${
                          errors.phoneNumber ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                    )}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                </div>

                {/* Country Select */}
                <div>
                  <label className="block text-sm font-medium main-blue mb-2">
                    {t('field_country')} <span className="text-red-500">*</span>
                  </label>
                  <select 
                    {...register("country")}
                    className={`w-full px-4 py-3 h-[50px] rounded-lg border bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all ${
                      errors.country ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <option value="">{t('ph_country')}</option>
                    {/* Note: Country names list remains in English (from library) as standard practice unless you manually translate all 200+ countries */}
                    {getCountries().map((country) => (
                      <option key={country} value={country}>
                        {en[country]}
                      </option>
                    ))}
                  </select>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>
              </div>

              {/* Product Interest */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  {t('field_product')}
                </label>
                <select 
                  {...register("productInterest")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                >
                  <option value="">{t('ph_product')}</option>
                  <option value="fruits">{t('products.fruits')}</option>
                  <option value="veg">{t('products.veg')}</option>
                  <option value="medical">{t('products.medical')}</option>
                  <option value="spices">{t('products.spices')}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  {t('field_message')} <span className="text-red-500">*</span>
                </label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  placeholder={t('ph_message')} 
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-[#0a1f44] font-bold py-4 px-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('btn_sending') : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('btn_submit')}
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
      
      <style jsx global>{`
        .PhoneInputInput {
          background-color: transparent;
          border: none;
          outline: none;
          height: 100%;
          font-size: 1rem;
        }
        .PhoneInputInput:focus {
          ring: 0;
          outline: none;
        }
        .PhoneInputCountry {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}