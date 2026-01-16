"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl"; 
import MenuToggle from "@/components/UI/MenuToggle";
import LanguageSelector from "@/components/UI/LanguageSelector";

export default function Navbar() {
  const t = useTranslations('navigation'); // Hook for translations
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLocale = useLocale(); 
  const pathname = usePathname();

  // 1. Translated Languages Array
  const languages = [
    { code: 'En', name: t('lang_en'), flag: '/flags/us.svg' },
    { code: 'Fr', name: t('lang_fr'),  flag: '/flags/fr.png' },
    { code: 'De', name: t('lang_de'),  flag: '/flags/gr.svg' },
    { code: 'Zh', name: t('lang_zh'), flag: '/flags/cn.svg' },
    { code: 'Ru', name: t('lang_ru'), flag: '/flags/ru.png' },
  ];

  // Derive the selected language object
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

  // 2. Translated Nav Items
  const navItems = [
    { name: t('home'), href: "/" },
    { name: t('about'), href: "/about" },
    { name: t('products'), href: "/products/fruits" },
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
          // Logic to check active path
          // Note: Standard next/navigation usePathname includes the locale (e.g. /en/about)
          // You might need to adjust this depending on how you want strict highlighting to work.
          // A simple check is usually sufficient:
          const isActive = pathname === item.href || (item.href !== '/' && pathname.includes(item.href));
          
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
          {t('contact')}
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
                pathname.includes(item.href) && item.href !== '/' ? "text-[#FBCE2E]" : "text-[#0a1f44]"
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
            {t('contact')}
          </Link>
        </div>
      </div>
    </nav>
  );
}