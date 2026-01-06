'use client'
import Link from 'next/link';
import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Truck, Handshake } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles - essential for it to work
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '@/components/Button';


export default function HomePage() {



  const products = [
    {
      id: 1,
      title: "Fresh Fruits",
      link: "/products/fruits",
      description: "Premium quality fruits selected for their sweetness and nutritional value for global export.",
      image: "/products/fruites/ALL .png"

    },
    {
      id: 2,
      title: "Fresh Vegetables",
      link: "/products/vegetables",
      description: "Farm-fresh vegetables harvested at peak ripeness and delivered to international markets.",
      image: "/products/veg/ALL VEGE.png"
    },
    {
      id: 3,
      title: "Medical Supplies",
      link: "/products/medical",
      description: "Certified medical equipment and supplies meeting rigorous international safety standards.",
      image: "/images/products-home.png"
    },
    {
      id: 4,
      title: "Legumes & Dry Goods",
      link: "/products/dry-goods",
      description: "Aromatic and authentic spices sourced directly from Egyptian farms to your kitchen.",
      image: "/images/products-home.png"
    },

  ];




  // features


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

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Using a placeholder image of a port/ship to match your design */}
          <img
            src="/images/home.png"
            alt="Global Shipping Background"
            className="w-full h-full object-cover"
          />
          {/* Blue/Dark Overlay to make text readable */}
          <div className="absolute inset-0 bg-[#0a1f44] opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#d4af37] font-medium text-lg mb-4 tracking-wide">
            Global Trade Solutions & Export
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white leading-tight mb-8">
            Lorem ipsum id eget eu quis magna nunc diam nisl netus netus malesuada diam pellentesque suspendisse neque nisl eget nisi.          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Gold Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 main-blue  py-3 px-8 rounded-md transition-colors flex items-center gap-2">
              View Product
              <ArrowRight />

            </button>

            {/* Outline Button */}
            <Link href="/contact">
              <button className="border border-white hover:bg-white hover:text-[#002249] text-white py-3 px-13 rounded-md transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- WELCOME SECTION --- */}
      <section className="py-10 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl  mb-8 main-blue">
            Welcome to <span className="secondary-yellow">HD GROUP</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            <span className=" secondary-yellow">HD GROUP</span> HD GROUP is a leading Egyptian export company with years of experience in delivering premium fresh fruits, vegetables, and medical supplies to international markets. We pride ourselves on quality, reliability, and customer satisfaction.
            Our commitment to excellence and strict quality control ensures that every shipment meets the highest international standards. Partner with us for a seamless export experience.
          </p>

        </div>
      </section>


      {/* --- PRODUCTS CATEGORIES SECTION --- */}


      <section className="py-5 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* --- Section Header --- */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl main-blue mb-4  text-[#0a1f44]">
              Our Product Categories
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover our range of export products, carefully selected and prepared for global markets
            </p>
          </div>

          {/* --- Grid Layout --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
            {products.map((product) => (
              <div key={product.id} className="min-h-[430px] bg-white border border-gray-400 border-t-0 rounded-[16px] flex flex-col h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden ">

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

                  {/* Button */}
                  <Link href={product.link} className="w-full">
                    <Button text='View Products' />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>




      {/* WHY choose us section */}


      <section className=" py-5 md:py-20 px-4 ">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl ">
              <span className="main-blue">Why Choose </span>
              <span className="secondary-yellow">HD GROUP</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>

        </div>
      </section>



    </main>
  );
}