"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react"; 
import MenuToggle from "@/components/MenuToggle"; // Import the component

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
    { name: "About", href: "/about" },
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
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangSelect = (lang) => {
    setSelectedLang(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-white lg:px-12 xl:px-24 z-50 relative">
      
      {/* --- Logo --- */}
      <Link href="/" className="flex items-center space-x-2">
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

      {/* --- Right Actions (Lang + Contact) --- */}
      <div className="hidden lg:flex items-center gap-4">
        
        {/* Language Dropdown */}
        <div className="relative" ref={langMenuRef}>
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d4af37] rounded-lg text-[#0a1f44] hover:bg-gray-50 transition-colors min-w-[120px] justify-between"
          >
            <span className="flex items-center gap-2">
              <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm">
                <Image 
                  src={selectedLang.flag} 
                  alt={selectedLang.name} 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-sm">{selectedLang.code}</span>
            </span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Panel */}
          {isLangMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-full min-w-[140px] bg-white border border-gray-100 rounded-lg shadow-xl py-1 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-[#d4af37] transition-colors text-left"
                >
                  <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm">
                    <Image 
                      src={lang.flag} 
                      alt={lang.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="px-6 py-2.5 rounded-lg bg-[#d4af37] text-white font-medium text-sm hover:bg-[#b08d28] transition-all shadow-md hover:shadow-lg"
        >
          Contact Us
        </Link>
      </div>

      {/* --- NEW MENU TOGGLE COMPONENT --- */}
      <div className="lg:hidden ml-4 flex items-center">
        <MenuToggle 
          isOpen={isMobileMenuOpen} 
          toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        />
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  lg:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* --- Mobile Menu Drawer --- */}
      <div
        className={`fixed top-20 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Links & Languages */}
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          
          {/* Nav Links */}
          <div className="space-y-4 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-medium ${
                  pathname === item.href ? "text-[#d4af37]" : "text-[#0a1f44]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <hr className="border-gray-100 mb-8" />

          {/* Mobile Language Selector */}
          <div className="mb-8">
            <h3 className="text-xs uppercase text-gray-400 font-bold tracking-wider mb-4">Select Language</h3>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLangSelect(lang);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-3 rounded-lg border ${
                    selectedLang.code === lang.code 
                      ? "border-[#d4af37] bg-yellow-50 text-[#0a1f44]" 
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm">
                    <Image 
                      src={lang.flag} 
                      alt={lang.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Button Mobile */}
          <div className="mt-10 pb-8">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3.5 rounded-xl bg-[#d4af37] text-white text-center font-bold shadow-lg"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}