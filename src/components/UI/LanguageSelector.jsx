"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
// Import from your i18n routing file

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSelector({ selectedLang, languages, isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Ensure the ref is initialized properly
  const dropdownRef = useRef(null); 
  
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Standard check to see if click was outside the element
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    // Navigate using your i18n router to update the URL locale
    router.replace(
      // @ts-ignore
      { pathname, params },
      { locale: lang.code.toLowerCase() } 
    );
    
    setIsOpen(false);
  };

  return (
    /* The ref must be attached to a plain DOM element like <div> */
    <div 
      className={`relative ${isMobile ? "w-full" : ""}`} 
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between bg-white border rounded-xl text-[#0a1f44] border-[#FBCE2E] transition-colors 
          ${isMobile ? "w-full px-4 py-3" : "gap-2 px-4 py-2 min-w-[130px]"}
        `}
      >
        <span className="flex items-center gap-3">
          <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm shrink-0">
            {selectedLang?.flag && (
              <Image 
                src={selectedLang.flag} 
                alt={selectedLang.name} 
                fill 
                className="object-cover" 
              />
            )}
          </div>
          <span className={`font-medium ${isMobile ? "text-base" : "text-sm"}`}>
            {selectedLang?.name}
          </span>
        </span>
        <ChevronDown 
          size={isMobile ? 20 : 16} 
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div 
          className={`absolute left-0 w-full bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 overflow-y-auto
            ${isMobile ? "bottom-full mb-2 max-h-48" : "top-full mt-2 min-w-[140px]"}
          `}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelect(lang)}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-[#d4af37] transition-colors text-left"
            >
              <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm shrink-0">
                <Image src={lang.flag} alt={lang.name} fill className="object-cover" />
              </div>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}