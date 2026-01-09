"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react"; 
import MenuToggle from "@/components/MenuToggle"; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  // Default language state
  const [selectedLang, setSelectedLang] = useState({ 
    code: 'EN', 
    name: 'English', 
    flag: '/flags/us.svg' 
  });
  
  const pathname = usePathname();
  const langMenuRef = useRef(null);

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

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !(langMenuRef.current as HTMLElement).contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangSelect = (lang: { code: string; name: string; flag: string }) => {
    setSelectedLang(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-white lg:px-12 xl:px-24 z-50 relative">
      
      {/* --- Logo --- */}
      <Link href="/" className="flex items-center space-x-2 z-50">
        <Image
          src="/logoo.png" 
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
                    ? "text-[#d4af37]" 
                    : "text-[#0a1f44] hover:text-[#d4af37]" 
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
        {/* Desktop Language Dropdown */}
        <div className="relative" ref={langMenuRef}>
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d4af37] rounded-lg text-[#0a1f44] hover:bg-gray-50 transition-colors min-w-[120px] justify-between"
          >
            <span className="flex items-center gap-2">
              <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm">
                <Image src={selectedLang.flag} alt={selectedLang.name} fill className="object-cover" />
              </div>
              <span className="font-medium text-sm">{selectedLang.code}</span>
            </span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isLangMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-full min-w-[140px] bg-white border border-gray-100 rounded-lg shadow-xl py-1 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-[#d4af37] transition-colors text-left"
                >
                  <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm">
                    <Image src={lang.flag} alt={lang.name} fill className="object-cover" />
                  </div>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <Link href="/contact" className="px-6 py-2.5 rounded-lg bg-[#d4af37] text-white font-medium text-sm hover:bg-[#b08d28] transition-all shadow-md hover:shadow-lg">
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

      {/* --- Mobile Menu Drawer (Styled like screenshot) --- */}
      <div
        className={`fixed top-0 right-0 h-full w-[50%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-40 flex flex-col pt-24 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* Navigation Links */}
        <div className="px-8 py-4 flex-grow space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-xl font-medium transition-colors ${
                pathname === item.href ? "text-[#B88E2F]" : "text-[#0a1f44] hover:text-[#B88E2F]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom Actions Area */}
        <div className="px-8 pb-12 space-y-6">
          
          {/* Language Selector (Styled like a dropdown field) */}
          <div className="relative">
             <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#0a1f44] hover:border-[#d4af37] transition-colors shadow-sm"
              >
                <span className="flex items-center gap-3">
                  <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm">
                    <Image src={selectedLang.flag} alt={selectedLang.name} fill className="object-cover" />
                  </div>
                  <span className="font-semibold text-base">{selectedLang.name}</span>
                </span>
                <ChevronDown size={20} className={`text-gray-400 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Language Dropdown List */}
              {isLangMenuOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-full  border-gray-100 rounded-xl shadow-xl py-2 z-50 max-h-48 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLangSelect(lang);
                        setIsLangMenuOpen(false); // Close dropdown after selection
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-[#d4af37] transition-colors text-left"
                    >
                      <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm">
                        <Image src={lang.flag} alt={lang.name} fill className="object-cover" />
                      </div>
                      <span className="text-base font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
          </div>

          {/* Contact Button (Full Width Yellow) */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-4 rounded-xl bg-[#FCD34D] text-[#0a1f44] text-center font-bold text-lg shadow-md hover:bg-[#fbbf24] transition-all active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}