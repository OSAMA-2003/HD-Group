"use client";

import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/data/products";
import { Apple, Carrot, BriefcaseMedical, Package } from 'lucide-react';
import Button from "@/components/Button";
import { motion } from "framer-motion";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// 1. Define your routes map clearly
const categoryRoutes: Record<string, string> = {
  'fresh-vegetables': '/products/vegetables',
  'fresh-fruits': '/products/fruits',
  'medical-supplies': '/products/medical',
  'staple-foods': '/products/dry-goods'
};

export default function ProductsPage({ category }: { category: string }) {
  
  const filteredProducts = products.filter(p => p.category === category);

  // 2. Get the correct base path for the current category
  // Example: if category is 'medical-supplies', this becomes '/products/medical'
  const currentBasePath = categoryRoutes[category] || '/products';

  const getCategoryIcon = (categoryId: string) => {
    const icons = {
      'fresh-vegetables': Carrot,
      'fresh-fruits': Apple,
      'medical-supplies': BriefcaseMedical,
      'staple-foods': Package
    } as Record<string, React.ElementType>;
    const IconComponent = icons[categoryId] as React.ElementType;
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-6">
          <div className="flex flex-col lg:items-center lg:justify-center gap-8 md:gap-12">
            
            <div className="text-center">
              <h1 className="text-3xl lg:text-3xl  text-gray-900">Our  <span className="secondary-yellow">Products</span> </h1>
            </div>
            
            {/* Category Filter Navigation */}
            <motion.nav 
              className="flex items-center justify-between flex-wrap gap-2 lg:gap-4"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {categories.map((cat) => {
                const Icon = getCategoryIcon(cat.id);
                const href = categoryRoutes[cat.id] || '#';
                const isActive = category === cat.id;

                return (
                  <div key={cat.id} >
                    <Link
                      href={href}
                      className={`group flex items-center cursor-pointer gap-2 px-6 py-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-[#002249] text-gray-50 shadow-md'
                          : 'text-gray-700 hover:text-gray-900 bg-gray-100'
                      }`}
                    >
                      <div className="lg:hidden">
                        {Icon}
                      </div>
                      <div className="hidden lg:flex items-center gap-2">
                        {Icon}
                        <span>{cat.name}</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </motion.nav>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp} className="h-full">
              <Link
                // 3. UPDATED LINK LOGIC: Uses the map directly + product ID
                href={`${currentBasePath}/${product.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 block h-full flex flex-col"
              >
                <div className="relative h-72 bg-white overflow-hidden shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.available ? (
                    <div className="absolute top-4 right-4 bg-green-200 text-green-600 px-3 py-1 rounded-lg text-xs font-medium">
                      Available
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 bg-red-100 text-red-500 px-3 py-1 rounded-lg text-xs font-medium">
                      Not Available
                    </div>
                  )}
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  
                  <div className="mt-auto">
                    <Button text="View Details" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}