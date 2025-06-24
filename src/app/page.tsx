"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const HERO_IMAGES = [
  "/images/Banner.png",
  "/images/b7.png",
  "/images/banner3.png",
  "/images/products/planter.jpg",
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center w-full px-0 sm:px-0">
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] md:h-[812px] flex items-center justify-center overflow-hidden">
        <img
          src={HERO_images[slide]}
          alt={`Hero slide ${slide + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${HERO_images[slide] === '/images/b7.png' ? 'object-contain bg-white' : ''}`}
        />
        <div className="relative z-20 flex w-full h-full items-center justify-center md:justify-end">
          <div className="bg-[#F7E9D0] bg-opacity-95 rounded-xl shadow-xl p-4 sm:p-8 md:p-16 max-w-xs w-[90vw] sm:max-w-xl sm:w-[96vw] md:w-[600px] flex flex-col gap-4 sm:gap-8 items-center text-center md:items-start md:text-left md:mr-24">
            <span className="uppercase text-xs sm:text-base tracking-widest text-gray-700 font-semibold mb-2 sm:mb-3">New Arrival</span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#B1914A] leading-tight mb-2 sm:mb-3">Discover Our<br/>New Collection</h1>
            <p className="text-sm sm:text-xl text-gray-700 mb-4 sm:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <Link href="/shop" className="bg-[#B1914A] text-white px-6 py-3 sm:px-10 sm:py-5 rounded font-bold text-base sm:text-xl hover:bg-[#a1843e] transition">
              BUY NOW
            </Link>
          </div>
        </div>
        {/* Carousel dots */}
        <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-6 z-30">
          {HERO_images.map((_, idx) => (
            <button
              key={idx}
              className={`relative w-7 h-7 flex items-center justify-center focus:outline-none`}
              onClick={() => setSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span
                className={`w-5 h-5 rounded-full border-2 ${slide === idx ? "border-[#B1914A] bg-[#B1914A]" : "border-gray-300 bg-white"}`}
              />
              {slide === idx && (
                <span className="absolute w-7 h-7 rounded-full border border-[#B1914A] top-0 left-0" style={{boxSizing: 'border-box'}}></span>
              )}
            </button>
          ))}
        </div>
      </section>
      {/* New Arrival Section */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4 mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">New Arrival</h2>
          <div className="w-16 h-1 bg-[#B1914A] rounded mb-4"></div>
          <p className="text-gray-500 text-lg">Discover the latest additions to our collection.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/t1.jpg" alt="Table" className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105" />
            <span className="text-xl font-bold text-gray-900 mt-4">Table</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/v1.png" alt="Vase" className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105" />
            <span className="text-xl font-bold text-gray-900 mt-4">Vase</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img src="/images/v8.png" alt="Vase" className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105" />
            <span className="text-xl font-bold text-gray-900 mt-4">Vase</span>
          </div>
        </div>
      </section>
      {/* 3DFurniture Gallery Section */}
      <section className="w-full max-h-[1440px] mx-auto py-16 px-4">
        <h2 className="text-center text-xl text-gray-700 font-medium mb-2">Share your setup with</h2>
        <div className="text-center text-4xl font-extrabold mb-10">#3DFurniture</div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <img src="/images/v5.jpg" alt="Table" className="w-full mb-4 rounded-xl break-inside-avoid" />
          <img src="/images/t1.jpg" alt="dsdsd" className="w-full mb-4 rounded-xl break-inside-avoid" />
          <img src="/images/t2.jpg" alt="dsds" className="w-full mb-4 rounded-xl break-inside-avoid" />
          <img src="/images/v8.png" alt="dsds" className="w-full mb-4 rounded-xl break-inside-avoid" />
          <img src="/images/v4.jpg" alt="Ch" className="w-full mb-4 rounded-xl break-inside-avoid" />
          <img src="/images/v8.png" alt="rt" className="w-full mb-4 rounded-xl break-inside-avoid" />
          <img src="/images/t1.jpg" alt="ter" className="w-full mb-4 rounded-xl break-inside-avoid" />
          <img src="/images/v3.png" alt="ers" className="w-full mb-4 rounded-xl break-inside-avoid" />
        </div>
      </section>
      {/* Our Products Section */}
      <section className="w-full max-w-[1440px] mx-auto py-20 px-4">
        <div className="flex flex-col items-center mb-8">
          <span className="italic text-[#B1914A] text-2xl mb-1">Our</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Products</h2>
          <div className="w-24 h-1 bg-[#B1914A] rounded mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col">
            <img src="/images/t1.jpg" alt="WaveZ Stool" className="w-full h-[340px] object-cover rounded-lg" />
            <span className="text-lg font-bold text-[#7A5A32] mt-4">WaveZ Stool</span>
          </div>
          <div className="flex flex-col">
            <img src="/images/v1.png" alt="Spheria Coffee Table" className="w-full h-[340px] object-cover rounded-lg" />
            <span className="text-lg font-bold text-[#7A5A32] mt-4">Spheria Coffee Table</span>
          </div>
          <div className="flex flex-col">
            <img src="/images/v8.png" alt="Waverly Coffee table" className="w-full h-[340px] object-cover rounded-lg" />
            <span className="text-lg font-bold text-[#7A5A32] mt-4">Waverly Coffee table</span>
          </div>
          <div className="flex flex-col">
            <img src="/images/b7.png" alt="Loopy Chair" className="w-full h-[340px] object-cover rounded-lg" />
            <span className="text-lg font-bold text-[#7A5A32] mt-4">Loopy Chair</span>
          </div>
        </div>
        {/* Dot Pagination */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <span className="w-3 h-3 rounded-full bg-[#B1914A] inline-block" />
          <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
          <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
          <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
        </div>
        <div className="flex justify-center">
          <Link href="/shop" className="px-10 py-3 border-2 border-[#B1914A] text-[#7A5A32] font-semibold rounded-none bg-transparent hover:bg-[#B1914A]/10 transition">
            VIEW MORE
          </Link>
        </div>
      </section>
      {/* Why AmbiAce Section */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4 mt-20 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Why AmbiAce?</h2>
        <div className="w-16 h-1 bg-[#B1914A] rounded mb-4"></div>
        <p className="text-gray-500 text-lg text-center mb-10 max-w-2xl">Experience the perfect blend of modern design, sustainability, and customer care. Here&apos;s why AmbiAce stands out:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
            <svg className="w-12 h-12 mb-4 text-[#B1914A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z"/></svg>
            <h3 className="font-bold text-xl mb-2">Unique Designs</h3>
            <p className="text-gray-600">Our furniture features exclusive, modern designs to elevate your space.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
            <svg className="w-12 h-12 mb-4 text-[#B1914A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            <h3 className="font-bold text-xl mb-2">Sustainable Materials</h3>
            <p className="text-gray-600">We use eco-friendly materials and processes for a greener future.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
            <svg className="w-12 h-12 mb-4 text-[#B1914A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-4.41 0-8-1.79-8-4V6c0-2.21 3.59-4 8-4s8 1.79 8 4v8c0 2.21-3.59 4-8 4z"/></svg>
            <h3 className="font-bold text-xl mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">We prioritize your happiness with dedicated support and service.</p>
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <section className="w-full max-w-4xl mx-auto py-16 px-4 mt-20 mb-32 flex flex-col items-center border-2 border-[#B1914A] rounded-2xl bg-white/60 shadow-md">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Founder</h2>
        <div className="w-16 h-1 bg-[#B1914A] rounded mb-8"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8">
          <img src="/images/fo.jpg" alt="Kshitiji Sakpal" className="w-48 h-48 object-cover rounded-full border-4 border-[#B1914A] mb-6 md:mb-0" />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <p className="text-xl text-gray-700 font-semibold mb-2 text-center md:text-left">Kshitiji Sakpal</p>
            <p className="text-lg text-gray-600 max-w-2xl text-center md:text-left">Kshitiji Sakpal is the visionary founder of 3DFurniture, dedicated to blending modern design with innovative craftsmanship. With a passion for creating unique and functional pieces, Kshitiji leads the brand to deliver exceptional quality and style for every home.</p>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full bg-[#e9fafa] pt-12 pb-4 px-4 mt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Brand & Social */}
          <div className="flex flex-col items-start md:col-span-1 mb-8 md:mb-0">
            <div className="flex flex-row items-center mb-6 gap-4">
              <img src="/images/comlogoo.png" alt="AmbiAce Logo" className="w-20 h-20 object-contain" />
              <div className="flex flex-col items-start">
                <span className="font-serif text-5xl font-normal tracking-wide text-teal-700 leading-none">AmbiAce</span>
                <span className="text-teal-700 text-base mt-2">Ace up your Ambience</span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-teal-700 hover:text-teal-900 text-2xl"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="LinkedIn" className="text-teal-700 hover:text-teal-900 text-2xl"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#" aria-label="Instagram" className="text-teal-700 hover:text-teal-900 text-2xl"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg></a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <div className="font-semibold text-teal-700 mb-3">Quick Links</div>
              <ul className="space-y-2 text-teal-700">
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/shop" className="hover:underline">Shop</a></li>
                <li><a href="#" className="hover:underline">Interior | Architecture Service</a></li>
                <li><a href="#" className="hover:underline">B2B</a></li>
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <ul className="space-y-2 text-teal-700">
                <li><a href="/contact" className="hover:underline">FAQ</a></li>
                <li><a href="terms" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Shipping | Return Policy</a></li>
                <li><a href="#" className="hover:underline">Order Tracking</a></li>
              </ul>
            </div>
          </div>
          {/* Subscribe & Contact */}
          <div className="flex flex-col gap-4 md:items-end w-full">
            <div className="font-semibold text-teal-700 mb-3">Subscribe</div>
            <form className="flex items-center border-b border-teal-400 w-full max-w-xs mb-2">
              <input type="email" placeholder="Email" className="flex-1 bg-transparent px-2 py-2 text-teal-700 placeholder-teal-400 focus:outline-none" />
              <button type="submit" className="text-teal-400 hover:text-teal-700 text-2xl"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></button>
            </form>
            <div className="flex items-center gap-2 text-teal-700 text-sm">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.73 3.06a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l2.02-2.02a2 2 0 0 1 2.11-.45c.99.36 2.01.6 3.06.73A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center gap-2 text-teal-700 text-sm">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>contact@ambiace.com</span>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col items-center text-teal-700 text-xs">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                <span>Recyclable</span>
              </div>
              <div className="flex flex-col items-center text-teal-700 text-xs">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Made in India</span>
              </div>
              <div className="flex flex-col items-center text-teal-700 text-xs">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 1-10 0V5a5 5 0 0 1 10 0z"/></svg>
                <span>Sustainability</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8 border-teal-100" />
      </footer>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#B1914A] text-white p-3 rounded-full shadow-lg hover:bg-[#a1843e] transition"
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
