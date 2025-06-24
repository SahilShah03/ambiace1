import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="w-full bg-[#e9fafa] pt-12 pb-4 px-4 mt-0">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
      {/* Brand & Social */}
      <div className="flex flex-col items-start md:col-span-1 mb-8 md:mb-0">
        <div className="flex flex-row items-center mb-6 gap-4">
          <img src="/Images/comlogoo.png" alt="AmbiAce Logo" className="w-20 h-20 object-contain" />
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
            <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
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
);

export default Footer; 