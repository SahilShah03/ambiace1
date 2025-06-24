'use client';
import ProductCard, { Product } from "../../components/ProductCard";
import Image from "next/Image";
import React from "react";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function Shop() {
  const allProducts: Product[] = [
    {
      id: 1,
      name: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      image: "/images/products/chairs.jpg",
      badge: "-30%",
      badgeType: "sale",
    },
    {
      id: 2,
      name: "Leviosa",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "/images/products/chairs.jpg",
    },
    {
      id: 3,
      name: "Lolito",
      subtitle: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: "/images/products/tables.jpg",
      badge: "-50%",
      badgeType: "sale",
    },
    {
      id: 4,
      name: "Respira",
      subtitle: "Outdoor bar table and stool",
      price: "Rp 500.000",
      image: "/images/products/planter.jpg",
      badge: "New",
      badgeType: "new",
    },
    {
      id: 5,
      name: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      image: "/images/products/chairs.jpg",
      badge: "-30%",
      badgeType: "sale",
    },
    {
      id: 6,
      name: "Leviosa",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "/images/products/chairs.jpg",
    },
    {
      id: 7,
      name: "Lolito",
      subtitle: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: "/images/products/tables.jpg",
      badge: "-50%",
      badgeType: "sale",
    },
    {
      id: 8,
      name: "Respira",
      subtitle: "Outdoor bar table and stool",
      price: "Rp 500.000",
      image: "/images/products/planter.jpg",
      badge: "New",
      badgeType: "new",
    },
    {
      id: 9,
      name: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      image: "/images/products/chairs.jpg",
      badge: "-30%",
      badgeType: "sale",
    },
    {
      id: 10,
      name: "Leviosa",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "/images/products/chairs.jpg",
    },
    {
      id: 11,
      name: "Lolito",
      subtitle: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: "/images/products/tables.jpg",
      badge: "-50%",
      badgeType: "sale",
    },
    {
      id: 12,
      name: "Respira",
      subtitle: "Outdoor bar table and stool",
      price: "Rp 500.000",
      image: "/images/products/planter.jpg",
      badge: "New",
      badgeType: "new",
    },
  ];

  const [showCount, setShowCount] = React.useState<number | 'All'>(32);
  const [sort, setSort] = React.useState("Price: Low to High");
  const [search, setSearch] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  // Parse price string to number for sorting
  const parsePrice = (price: string) => Number(price.replace(/[^\d]/g, ""));

  // Filter by search
  let filtered = allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.subtitle && p.subtitle.toLowerCase().includes(search.toLowerCase()))
  );

  // Sort
  if (sort === "Price: Low to High") {
    filtered = filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sort === "Price: High to Low") {
    filtered = filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  } else if (sort === "Name: A-Z") {
    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "Name: Z-A") {
    filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  // Pagination logic
  const itemsPerPage = showCount === 'All' ? filtered.length : showCount;
  const totalPages = Math.max(1, Math.ceil(filtered.length / (itemsPerPage || 1)));
  const paginatedProducts = showCount === 'All'
    ? filtered
    : filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset to page 1 when search, sort, or showCount changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, sort, showCount]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header with background image */}
      <div className="w-full h-48 md:h-64 relative flex items-center justify-center bg-gray-200">
        <Image src="/images/inbg.jpg" alt="Shop Banner" fill className="object-cover object-center opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">Shop</h1>
          <div className="mt-2 text-gray-700 text-sm flex items-center gap-2">
            <span className="hover:underline cursor-pointer">Home</span>
            <span>/</span>
            <span className="font-semibold">Shop</span>
          </div>
        </div>
      </div>

      {/* Filter, sort, and search bar */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white rounded-b-lg shadow">
        <div className="flex items-center gap-2">
          <button className="border border-gray-300 rounded px-3 py-1 text-gray-700 flex items-center gap-2 hover:bg-gray-100">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M3 12h18"/><path d="M12 3v18"/></svg>
            Filter
          </button>
          <span className="ml-4 text-gray-500 text-sm">Showing {(showCount === 'All' ? 1 : (currentPage - 1) * itemsPerPage + 1)}-{Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length} results</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-gray-500 text-sm mr-2">Show</label>
          <select className="border border-gray-300 rounded px-2 py-1 text-gray-700" value={showCount} onChange={e => setShowCount(e.target.value === "All" ? 'All' : Number(e.target.value))}>
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value="All">All</option>
          </select>
          <label className="text-gray-500 text-sm ml-4 mr-2">Sort by</label>
          <select className="border border-gray-300 rounded px-2 py-1 text-gray-700" value={sort} onChange={e => setSort(e.target.value)}>
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Name: A-Z</option>
            <option>Name: Z-A</option>
          </select>
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <input
            type="text"
            placeholder="#3D"
            className="border border-gray-300 rounded px-3 py-1 text-gray-700 w-40 md:w-56"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="text-gray-500 hover:text-gray-700">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* Pagination */}
        {showCount !== 'All' && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`w-8 h-8 rounded font-bold ${currentPage === i + 1 ? 'bg-yellow-900 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`px-4 h-8 rounded font-bold ${currentPage === totalPages ? 'bg-gray-200 text-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
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
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
} 
