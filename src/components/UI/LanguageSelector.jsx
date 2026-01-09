"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function LanguageSelector({ selectedLang, setSelectedLang, languages, isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${isMobile ? "w-full" : ""}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between bg-white border rounded-xl text-[#0a1f44] border-[#FBCE2E] transition-colors 
          ${isMobile ? "w-full px-4 py-3" : "gap-2 px-4 py-2 min-w-[120px]"}
        `}
      >
        <span className="flex items-center gap-3">
          <div className="relative w-6 h-6 overflow-hidden rounded-full shadow-sm shrink-0">
            <Image src={selectedLang.flag} alt={selectedLang.name} fill className="object-cover" />
          </div>
          <span className={`font-medium ${isMobile ? "text-base" : "text-sm"}`}>{selectedLang.name}</span>
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