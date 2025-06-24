'use client';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="max-w-3xl mx-auto w-full flex-1 px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Terms & Conditions</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">1. Introduction</h2>
          <p className="text-gray-600">Welcome to AmbiAce. By accessing or using our website, you agree to be bound by these terms and conditions. Please read them carefully.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">2. Intellectual Property Rights</h2>
          <p className="text-gray-600">All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of AmbiAce or its licensors.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">3. User Obligations</h2>
          <p className="text-gray-600">You agree not to misuse the website or help anyone else do so. You must not attempt to gain unauthorized access to any part of the website or its related systems.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">4. Limitation of Liability</h2>
          <p className="text-gray-600">AmbiAce will not be liable for any damages arising from the use or inability to use this website or its content.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">5. Changes to Terms</h2>
          <p className="text-gray-600">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">6. Contact Us</h2>
          <p className="text-gray-600">If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:contact@ambiace.com" className="text-teal-700 underline">contact@ambiace.com</a>.</p>
        </section>
      </div>
      {/* Feature Bar */}
      <div className="w-full bg-[#faf4ec] py-10 px-2 flex flex-col items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {/* High Quality */}
          <div className="flex flex-col items-center text-center">
            <svg width="40" height="40" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-3"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2M5 5h14v4a7 7 0 0 1-14 0V5z"/></svg>
            <div className="font-bold text-lg md:text-xl text-[#222] mb-1">High Quality</div>
            <div className="text-base md:text-lg text-gray-500">crafted from top materials</div>
          </div>
          {/* Warranty Protection */}
          <div className="flex flex-col items-center text-center">
            <svg width="40" height="40" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-3"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
            <div className="font-bold text-lg md:text-xl text-[#222] mb-1">Warranty Protection</div>
            <div className="text-base md:text-lg text-gray-500">Over 2 years</div>
          </div>
          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center">
            <svg width="40" height="40" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-3"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="16.5" cy="18.5" r="1.5"/></svg>
            <div className="font-bold text-lg md:text-xl text-[#222] mb-1">Free Shipping</div>
            <div className="text-base md:text-lg text-gray-500">Order over 150 $</div>
          </div>
          {/* 24/7 Support */}
          <div className="flex flex-col items-center text-center">
            <svg width="40" height="40" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-3"><circle cx="12" cy="12" r="10"/><path d="M19 19v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <div className="font-bold text-lg md:text-xl text-[#222] mb-1">24 / 7 Support</div>
            <div className="text-base md:text-lg text-gray-500">Dedicated support</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 