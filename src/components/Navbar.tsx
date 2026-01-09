"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl"; // Added this
import MenuToggle from "@/components/UI/MenuToggle";
import LanguageSelector from "@/components/UI/LanguageSelector";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLocale = useLocale(); // Detects 'en', 'fr', etc.
  const pathname = usePathname();

  const languages = [
    { code: 'En', name: 'English', flag: '/flags/us.svg' },
    { code: 'Zh', name: 'Chinese', flag: '/flags/cn.svg' },
    { code: 'Fr', name: 'French',  flag: '/flags/fr.png' },
    { code: 'Ru', name: 'Russian', flag: '/flags/ru.png' },
  ];

  // Derive the selected language object from the URL locale
  const selectedLang = languages.find(
    (l) => l.code.toLowerCase() === currentLocale.toLowerCase()
  ) || languages[0];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products/fruits" },
  ];

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-white lg:px-12 xl:px-24 z-50 relative ">
      
      {/* --- Logo --- */}
      <Link href="/" className="flex items-center space-x-2 z-50">
        <Image
          src="/logo.png" 
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
          // Logic to check if the path is active regardless of locale
          const isActive = pathname.endsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium text-sm xl:text-base transition-colors duration-200
                ${isActive ? "text-[#FBCE2E]" : "text-[#0a1f44] hover:text-[#FBCE2E]"}
              `}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* --- Desktop Right Actions --- */}
      <div className="hidden lg:flex items-center gap-4">
        <LanguageSelector 
          selectedLang={selectedLang}
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
        <div className="px-8 py-4 flex-grow space-y-8 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-xl font-medium transition-colors ${
                pathname.endsWith(item.href) ? "text-[#FBCE2E]" : "text-[#0a1f44]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="px-8 pb-12 space-y-6 bg-white border-t border-gray-100 pt-6">
          <LanguageSelector 
            selectedLang={selectedLang} 
            languages={languages} 
            isMobile={true} 
          />

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-4 rounded-xl bg-[#FCD34D] text-[#0a1f44] text-center font-medium text-lg shadow-md hover:bg-[#fbbf24] transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}