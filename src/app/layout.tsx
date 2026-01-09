import type { Metadata } from "next";
// 1. Import Roboto
import { Roboto } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 2. Configure Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Standard Roboto weights
  variable: "--font-roboto", // Optional: allows usage in CSS variables if needed
});

export const metadata: Metadata = {
  title: "HD Group",
  description: "HD Group for export",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the class */}
      <body className={roboto.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}