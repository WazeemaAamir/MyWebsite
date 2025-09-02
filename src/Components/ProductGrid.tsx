"use client";
import Image from "next/image";
import { Swiper } from "swiper/react";

interface ProductGridProps {
  title: string;
  subtitle?: string;
  images: string[];
}

export default function ProductGrid({ title, subtitle, images }: ProductGridProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
      {/* Header */}
      <section className="text-center bg-white p-6">
        <h1 className="text-4xl font-bold text-red-600">Big Sale on {title}</h1>
        {subtitle && <p className="text-xl text-gray-700 mt-2">{subtitle}</p>}
        <Swiper />
      </section>

      {/* Section Title */}
      <h1 className="flex items-center justify-center text-xl font-bold rounded-xl">
        {title}
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4"
          >
            <Image
              src={src}
              alt={title}
              width={300}
              height={300}
              className="h-auto rounded-lg"
              unoptimized
              loading="lazy" // ✅ lazy load images
            />
            <div className="px-4 py-2">
              <h2 className="font-bold text-lg">{title}</h2>
              <div className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
