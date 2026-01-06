"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// 1. Import country helpers
import { getCountries, getCountryCallingCode } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en"; // English country names
import "react-phone-number-input/style.css"; 
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from "react";

// --- Zod Schema ---
const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().optional(),
  
  // Validates phone number format based on the selected country code
  phoneNumber: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  
  country: z.string().min(1, "Please select a country"),
  productInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 main-blue">
      
      {/* Header Section */}
      <div className="bg-white py-8 px-4 text-center shadow-sm border-b border-gray-100">
        <h1 className="text-4xl main-blue mb-4 font-bold">
          Let's Connect With <span className="text-[#d4af37]">HD Group</span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
          We support international partners with high-quality Egyptian products and reliable export solutions. 
          Reach out to discuss inquiries, quotations, or long-term cooperation.
        </p>
      </div>

      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-[24px] items-start">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="space-y-8">
            <div className='bg-white rounded-2xl p-5 shadow-sm border border-gray-100'>
              <span className="text-[#d4af37] tracking-wide uppercase text-sm font-bold">Get In Touch</span>
              <h2 className="text-2xl font-bold main-blue mt-2 mb-4">
                Seamless Communication, Global Impact.
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We are always here to help you grow your business with premium Egyptian exports.
              </p>

              <div className="grid gap-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="main-blue text-lg font-semibold">Email</h3>
                    <p className="text-slate-600">info@hdgroup-export.com</p>
                    <p className="text-slate-600">sales@hdgroup-export.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="main-blue text-lg font-semibold">Phone</h3>
                    <p className="text-slate-600">+20 153 0401 020</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="main-blue text-lg font-semibold">Location</h3>
                    <p className="text-slate-600 max-w-xs">
                      Cairo, Egypt - Export City Center.
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="main-blue text-lg font-semibold">Working Hours</h3>
                    <p className="text-slate-600">Saturday - Thursday</p>
                    <p className="text-slate-600">08:00 am - 08:00 pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF9E3] p-6 rounded-2xl border border-yellow-100">
              <h3 className="main-blue text-lg mb-2 font-bold">Quick Response</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our export team typically responds to inquiries within 24 business hours. 
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="bg-white rounded-3xl p-8 border border-yellow-400 shadow-sm">
            <h2 className="text-2xl font-bold main-blue mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  {...register("fullName")}
                  type="text" 
                  placeholder="Enter your Name" 
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all ${
                    errors.fullName ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  {...register("email")}
                  type="email" 
                  placeholder="Enter your Email Address" 
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  Company Name
                </label>
                <input 
                  {...register("companyName")}
                  type="text" 
                  placeholder="Enter Your Company Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                />
              </div>

              {/* Phone & Country Row */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium main-blue mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        international
                        defaultCountry="EG"
                        placeholder="Enter phone number"
                        className={`flex h-[50px] max-w-full rounded-lg border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-within:ring-2 focus-within:ring-[#d4af37] focus-within:border-transparent ${
                          errors.phoneNumber ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                    )}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                </div>

                {/* Country Dropdown (Dynamic) */}
                <div>
                  <label className="block text-sm font-medium main-blue mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select 
                    {...register("country")}
                    className={`max-w-full px-4 py-3 h-[50px] rounded-lg border bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all ${
                      errors.country ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select Your Country</option>
                    {/* 2. Dynamically map all countries */}
                    {getCountries().map((country) => (
                      <option key={country} value={country}>
                        {en[country]} {/* Displays "Egypt", "United States", etc. */}
                      </option>
                    ))}
                  </select>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>
              </div>

              {/* Product Interest */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  Product Interest
                </label>
                <select 
                  {...register("productInterest")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                >
                  <option value="">Select a Product</option>
                  <option value="fruits">Fresh Fruits</option>
                  <option value="veg">Vegetables</option>
                  <option value="medical">Medical Supplies</option>
                  <option value="spices">Spices & Herbs</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium main-blue mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  placeholder="Enter Your Message" 
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-[#0a1f44] font-bold py-4 px-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

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