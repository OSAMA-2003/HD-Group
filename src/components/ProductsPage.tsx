"use client";

import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/data/products";
import { Apple, Carrot, BriefcaseMedical, Package } from 'lucide-react';
import Button from "@/components/Button";

// Map your category IDs to the specific URLs you requested
const categoryRoutes: Record<string, string> = {
  'fresh-vegetables': '/products/vegetables',
  'fresh-fruits': '/products/fruits',
  'medical-supplies': '/products/medical',
  'staple-foods': '/products/dry-goods' // Assuming 'staple-foods' is the ID for dry goods
};

export default function ProductsPage({ category }: { category: string }) {
  
  // No need for useState, we filter based on the current prop passed from the page URL
  const filteredProducts = products.filter(p => p.category === category);

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
              <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900">Our Products</h1>
            </div>
            
            {/* Category Filter Navigation (Now using Links) */}
            <nav className="flex items-center justify-between flex-wrap gap-2 lg:gap-4">
              {categories.map((cat) => {
                const Icon = getCategoryIcon(cat.id);
                // Get the specific URL for this category, fallback to # if not found
                const href = categoryRoutes[cat.id] || '#';
                
                // Check if this link is currently active
                const isActive = category === cat.id;

                return (
                  <Link
                    key={cat.id}
                    href={href}
                    className={`group flex items-center cursor-pointer gap-2 px-6 py-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#002249] text-gray-50 shadow-md'
                        : 'text-gray-700 hover:text-gray-900 bg-gray-100'
                    }`}
                  >
                    {/* Mobile: Icon only */}
                    <div className="lg:hidden">
                      {Icon}
                    </div>
                    {/* Desktop: Icon + Text */}
                    <div className="hidden lg:flex items-center gap-2">
                      {Icon}
                      <span>{cat.name}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]">
          {filteredProducts.map((product) => (
            // Updated href to match your folder structure logic
            <Link
              key={product.id}
              href={`/products/${category === 'staple-foods' ? 'dry-goods' : category.replace('fresh-', '')}/${product.id}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative h-72 bg-white overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.available ? (
                  <div className="absolute top-4 right-4 bg-green-200 text-green-600 px-3 py-1 rounded-lg text-xs">
                    Available
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-red-200 text-red-600 px-3 py-1 rounded-lg text-xs">
                    Not Available
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <Button text="View Details" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}