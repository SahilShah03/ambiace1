'use client';
import Image from "next/image";
import React from "react";

export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  subtitle?: string;
  badge?: string;
  badgeType?: "sale" | "new";
  oldPrice?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="bg-white rounded-lg shadow p-0 flex flex-col items-center relative group overflow-hidden cursor-pointer transition hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-64 bg-gray-100 rounded-t mb-0 flex items-center justify-center overflow-hidden relative">
        {!imgError ? (
          <Image src={product.image} alt={product.name} width={300} height={256} className="object-cover h-full w-full" onError={() => setImgError(true)} />
        ) : (
          <div className="product-image-placeholder">{product.name}</div>
        )}
        {product.badge && (
          <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full ${product.badgeType === "sale" ? "bg-red-500 text-white" : "bg-teal-500 text-white"}`}>
            {product.badge}
          </span>
        )}
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-2 transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium mb-2 hover:bg-gray-100">Add to cart</button>
          <div className="flex gap-4 text-white text-sm">
            <button className="hover:underline">Share</button>
            <button className="hover:underline">Compare</button>
            <button className="hover:underline">Like</button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start px-4 py-4">
        <h3 className="font-semibold text-lg mb-1 text-gray-900">{product.name}</h3>
        {product.subtitle && <p className="text-gray-500 text-sm mb-1">{product.subtitle}</p>}
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-bold">{product.price}</span>
          {product.oldPrice && <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>}
        </div>
      </div>
    </div>
  );
} 