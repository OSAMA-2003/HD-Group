"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuToggle from "@/components/UI/MenuToggle";
// Import the new component
import LanguageSelector from "@/components/UI/LanguageSelector";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [selectedLang, setSelectedLang] = useState({ 
    code: 'EN', 
    name: 'English', 
    flag: '/flags/us.svg' 
  });
  
  const pathname = usePathname();

  const languages = [
    { code: 'EN', name: 'English', flag: '/flags/us.svg' },
    { code: 'CN', name: 'Chinese', flag: '/flags/cn.svg' },
    { code: 'FR', name: 'French',  flag: '/flags/fr.png' },
    { code: 'Ru', name: 'Russian', flag: '/flags/ru.png' },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products/fruits" },
  ];

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-white lg:px-12 xl:px-24 z-50 relative ">
      
      {/* --- Logo --- */}
      <Link href="/" className="flex items-center space-x-2 z-50">
        <Image
          src="/logo.webp" 
          alt="HD Group Logo"
          width={150}
          height={150}
          className="w-auto h-14 lg:h-20 object-contain"
          priority
        />
      </Link>

      {/* --- Desktop Menu --- */}
      <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium text-sm xl:text-base transition-colors duration-200
                ${
                  isActive
                    ? "text-[#FBCE2E]" 
                    : "text-[#0a1f44] hover:text-[#FBCE2E]" 
                }
              `}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* --- Desktop Right Actions --- */}
      <div className="hidden lg:flex items-center gap-4">
        {/* Desktop Language Selector */}
        <LanguageSelector 
          selectedLang={selectedLang} 
          setSelectedLang={setSelectedLang} 
          languages={languages} 
          isMobile={false}
        />

        <Link href="/contact" className="px-6 py-2.5 rounded-lg bg-[#FBCE2E] blue-main font-medium text-sm hover:bg-[#e4b219] transition-all shadow-md hover:shadow-lg">
          Contact Us
    
        </Link>
      </div>

      {/* --- Mobile Menu Toggle --- */}
      <div className="lg:hidden ml-4 flex items-center z-50">
        <MenuToggle 
          isOpen={isMobileMenuOpen} 
          toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        />
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] lg:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* --- Mobile Menu Drawer --- */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-40 flex flex-col pt-24 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* Navigation Links */}
        <div className="px-8 py-4 flex-grow space-y-8 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-xl font-medium transition-colors ${
                pathname === item.href ? "text-[#FBCE2E]" : "text-[#0a1f44] hover:text-[#B88E2F]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom Actions Area */}
        <div className="px-8 pb-12 space-y-6 bg-white border-t border-gray-100 pt-6">
          
          {/* Mobile Language Selector (Identical Style) */}
          <LanguageSelector 
            selectedLang={selectedLang} 
            setSelectedLang={setSelectedLang} 
            languages={languages} 
            isMobile={true} 
          />

          {/* Contact Button (Full Width Yellow) */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-4 rounded-xl bg-[#FCD34D] text-[#0a1f44] text-center font-medium text-lg shadow-md hover:bg-[#fbbf24] transition-all active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}