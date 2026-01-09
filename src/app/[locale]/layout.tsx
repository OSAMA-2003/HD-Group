import type { Metadata } from "next";
import { Roboto } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { aside } from "framer-motion/client";
import { routing } from "@/i18n/routing";

// 2. Configure Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "HD Group",
  description: "HD Group for export",
};

export default async function RootLayout({
  children,
  params
}:{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params

  if(!hasLocale(routing.locales,locale)){
    throw new Error(`Locale ${locale} not supported`);
  }


  return (
    <html lang={locale}>
      
      <body className={roboto.className}>
        <NextIntlClientProvider>
          <Navbar/>
          {children}
          <Footer/>
        </NextIntlClientProvider>

        
      </body>
    </html>
  );
}