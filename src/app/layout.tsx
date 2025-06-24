"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <link rel="website icon" href="public/comlogoo.png" type="png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full border-b border-gray-200 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6 relative">
            {/* Logo */}
            <div className="flex items-center gap-2 min-w-[180px] w-full md:w-auto justify-between">
              <div className="flex items-center gap-2">
                <Image src="/Images/comlogoo.png" alt="Ambiace Logo" width={52} height={52} className="object-contain" />
                <span className="font-serif text-3xl tracking-wide font-normal">AMBI<span className="font-extrabold">ACE</span></span>
              </div>
              {/* Hamburger */}
              <button className="md:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </button>
            </div>
            {/* Navigation Centered */}
            <nav className={`flex-col md:flex-row md:flex md:static absolute left-0 right-0 top-full bg-white md:bg-transparent z-30 transition-all duration-300 ${navOpen ? 'flex' : 'hidden'} md:items-center md:justify-center gap-6 md:gap-12 w-full md:w-auto shadow md:shadow-none border-t md:border-none`}> 
              <Link href="/" className="font-medium text-lg hover:text-black transition py-3 md:py-0 px-4 md:px-0">Home</Link>
              <Link href="/shop" className="font-medium text-lg hover:text-black transition py-3 md:py-0 px-4 md:px-0">Shop</Link>
              <Link href="/about" className="font-medium text-lg hover:text-black transition py-3 md:py-0 px-4 md:px-0">About</Link>
              <Link href="/contact" className="font-medium text-lg hover:text-black transition py-3 md:py-0 px-4 md:px-0">Contact</Link>
              {/* Mobile Icons */}
              <div className="flex items-center gap-6 justify-center mt-4 md:hidden">
                <button aria-label="User">
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
                </button>
                <button aria-label="Search">
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
                </button>
                <button aria-label="Wishlist">
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.99 13.07 5.36C13.64 3.99 15.1 3 16.65 3C19.65 3 22.15 5.5 22.15 8.5C22.15 13.5 12 21 12 21Z"/></svg>
                </button>
                <button aria-label="Cart">
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </button>
              </div>
            </nav>
            {/* Icons */}
            <div className="hidden md:flex items-center gap-6 md:gap-8 min-w-[120px] md:min-w-[180px] justify-end mt-4 md:mt-0 w-full md:w-auto">
              {/* User Icon */}
              <button aria-label="User">
                <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
              </button>
              {/* Search Icon */}
              <button aria-label="Search">
                <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
              </button>
              {/* Heart Icon */}
              <button aria-label="Wishlist">
                <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.99 13.07 5.36C13.64 3.99 15.1 3 16.65 3C19.65 3 22.15 5.5 22.15 8.5C22.15 13.5 12 21 12 21Z"/></svg>
              </button>
              {/* Cart Icon */}
              <button aria-label="Cart">
                <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </button>
            </div>
          </div>
        </header>
        <main className="min-h-[80vh]">{children}</main>
        <footer className="w-full text-center py-6 border-t border-gray-200 text-gray-500 text-sm bg-gray-50">
          © {new Date().getFullYear()} AMBIACE. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
