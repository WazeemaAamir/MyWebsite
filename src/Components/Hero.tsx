"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to Wazeema&apos;s Website
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-12 text-gray-100">
          Explore amazing products with just a click!
        </p>

        {/* Women's Clothing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Women&apos;s Clothing</h2>
          <p className="text-gray-200 mb-6">Up to 50% off on selected items</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "/whatsapp-women2.jpg",
              "/whatsapp-women4.jpg",
              "/whatsapp-women5.jpg",
              "/whatsapp-women6.jpg",
              "/whatsapp-women7.jpg",
              "/whatsapp-women8.jpg",
              "/whatsapp-women9.jpg",
              "/whatsapp-women10.jpg",
              "/whatsapp-women222.jpg",
              "/whatsapp-women223.jpg",
              "/whatsapp-women224.jpg",
              "/whatsapp-women225.jpg",
              "/whatsapp-women226.jpg",
              "/whatsapp-women227.jpg",
              "/whatsapp-women228.jpg",
              "/whatsapp-women229.jpg",
              "/whatsapp-women230.jpg",
              "/pink-frock.jpg",
              "/purple-maxi.jpg",
              "/black-frock.jpg",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md">
                <Image
                  src={src}
                  alt={`Women's clothing ${i + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-56 hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Embroidery Suits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Embroidery Suits</h2>
          <p className="text-gray-200 mb-6">Up to 50% off on selected items</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: 40 }, (_, i) => `/embroidery-suit${i === 0 ? "" : i}.jpg`).map(
              (src, i) => (
                <div key={i} className="overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={src}
                    alt={`Embroidery suit ${i + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-56 hover:scale-105 transition-transform"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Men's Suits */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Men&apos;s Suits</h2>
          <p className="text-gray-200 mb-6">Up to 50% off on selected items</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "/mens-j-suit.jpg",
              "/mens-j-suit1.jpg",
              "/mens-j-suit2.jpg",
              "/mens-j-suit3.jpg",
              "/mens-j-suit4.jpg",
              "/mens-j-suit5.jpg",
              "/mens-j-suit6.jpg",
              "/mens-j-suit7.jpg",
              "/mens-j-suit8.jpg",
              "/mens-j-suit11.jpg",
              "/mens-j-suit12.jpg",
              "/mens-j-suit13.jpg",
              "/mens-j-suit14.jpg",
              "/mens-j-suit15.jpg",
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md">
                <Image
                  src={src}
                  alt={`Men's suit ${i + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-56 hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
