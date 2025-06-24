'use client';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import { useState } from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#e9fafa] flex flex-col justify-between">
      
      <main className="flex-1 w-full max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-teal-700 mb-12 text-center max-w-2xl mx-auto">
          We&apos;d love to hear from you! Reach out for project inquiries, collaborations, or just to say hello.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">
          {/* Contact Form */}
          <form className="flex flex-col gap-6">
            <div>
              <label className="block text-teal-800 font-semibold mb-1">Name</label>
              <input type="text" className="w-full border border-teal-200 rounded px-4 py-2 focus:outline-none focus:border-teal-500" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-teal-800 font-semibold mb-1">Email</label>
              <input type="email" className="w-full border border-teal-200 rounded px-4 py-2 focus:outline-none focus:border-teal-500" placeholder="you@email.com" required />
            </div>
            <div>
              <label className="block text-teal-800 font-semibold mb-1">Message</label>
              <textarea className="w-full border border-teal-200 rounded px-4 py-2 focus:outline-none focus:border-teal-500" rows={5} placeholder="How can we help you?" required />
            </div>
            <button type="submit" className="bg-[#B1914A] text-white font-bold py-3 rounded hover:bg-[#a1843e] transition">Send Message</button>
          </form>
          {/* Contact Info */}
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <div className="text-teal-800 font-bold text-lg mb-1">Address</div>
              <div className="text-teal-700">123 AmbiAce Lane, Design City, India</div>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.73 3.06a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l2.02-2.02a2 2 0 0 1 2.11-.45c.99.36 2.01.6 3.06.73A2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-teal-700">+91 1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span className="text-teal-700">contact@ambiace.com</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-teal-700 hover:text-teal-900 text-2xl"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="LinkedIn" className="text-teal-700 hover:text-teal-900 text-2xl"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#" aria-label="Instagram" className="text-teal-700 hover:text-teal-900 text-2xl"><svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg></a>
            </div>
          </div>
        </div>
        {/* Map or Location Image */}
        <div className="w-full mt-12 flex justify-center">
          <img src="/Images/inbg.jpg" alt="AmbiAce Location" className="w-full max-w-2xl h-64 object-cover rounded-xl shadow" />
        </div>
      </main>
      {/* Feature Bar */}
      <div className="w-full bg-[#f6f1ea] py-10 px-2 flex flex-col items-center">
        <div className="max-w-6xl w-full flex flex-col sm:flex-row justify-evenly items-center gap-16 xl:gap-32">
          {/* High Quality */}
          <div className="flex items-center gap-5">
            <svg width="52" height="52" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2M5 5h14v4a7 7 0 0 1-14 0V5z"/></svg>
            <div>
              <div className="font-bold text-xl text-[#222]">High Quality</div>
              <div className="text-lg text-gray-500">crafted from top materials</div>
            </div>
          </div>
          {/* Warranty Protection */}
          <div className="flex items-center gap-5">
            <svg width="52" height="52" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
            <div>
              <div className="font-bold text-xl text-[#222]">Warranty Protection</div>
              <div className="text-lg text-gray-500">Over 2 years</div>
            </div>
          </div>
          {/* Free Shipping */}
          <div className="flex items-center gap-5">
            <svg width="52" height="52" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="16.5" cy="18.5" r="1.5"/></svg>
            <div>
              <div className="font-bold text-xl text-[#222]">Free Shipping</div>
              <div className="text-lg text-gray-500">Order over 150 $</div>
            </div>
          </div>
          {/* 24/7 Support */}
          <div className="flex items-center gap-5">
            <svg width="52" height="52" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <div>
              <div className="font-bold text-xl text-[#222]">24 / 7 Support</div>
              <div className="text-lg text-gray-500">Dedicated support</div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="w-full bg-[#e9fafa] py-16 px-2 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">FAQ</h2>
        <div className="w-16 h-1 bg-[#B1914A] rounded mb-8 mx-auto"></div>
        <div className="w-full max-w-5xl flex flex-col gap-3">
          {faqData.map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

// FAQ Data and Item Component
const faqData = [
  { q: '1. What is 3D printing, and how does it work?', a: '3D printing is a process of making three-dimensional objects from a digital file, using additive manufacturing techniques.' },
  { q: '2. What makes 3D printed furniture unique?', a: '3D printed furniture allows for custom, complex designs and sustainable production methods.' },
  { q: '3. Is 3D printed furniture environmentally friendly?', a: 'Yes, it can use recycled or sustainable materials and reduces waste compared to traditional manufacturing.' },
  { q: '4. How durable is HIPS material used in 3D printed furniture?', a: 'HIPS is strong, impact-resistant, and suitable for long-lasting furniture.' },
  { q: '5. Do you offer a take-back facility for 3D printed furniture?', a: 'Yes, we offer take-back and recycling options for our products.' },
  { q: '6. How long does it take to produce and deliver 3D printed furniture?', a: 'Production and delivery times vary by project, but we strive for quick turnaround.' },
  { q: '7. How does the ordering process work?', a: 'You can order online or contact us directly for custom projects.' },
  { q: '8. Are your furniture pieces durable?', a: 'Yes, our pieces are designed for durability and everyday use.' },
  { q: '9. Can I customize the furniture to suit my needs?', a: 'Absolutely! We specialize in custom, made-to-order designs.' },
  { q: '10. What are the delivery options and costs?', a: 'We offer various delivery options; costs depend on location and order size.' },
  { q: '11. What if I receive damaged or defective furniture?', a: 'Contact us immediately and we will resolve the issue promptly.' },
  { q: '12. Do you offer returns or exchanges?', a: 'Yes, please see our return and exchange policy for details.' },
  { q: '13. How can I contact your customer support team?', a: 'You can reach us via phone, email, or our contact form.' },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#e9fafa] border border-teal-200 rounded transition-all">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium text-lg text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${open ? 'rotate-90' : ''}`}
          fill="none"
          stroke="#222"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-700 text-base animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
} 