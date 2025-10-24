"use client";
import Image from "next/image";

export default function Hero() {
  // Women’s clothing images
  const womenImages: string[] = [
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
  ];

  const embroideryImages: string[] = [
    "/embroidery-suit.jpg",
    "/embroidery-suit1.jpg",
    "/embroidery-suit2.jpg",
    "/embroidery-suit3.jpg",
    "/embroidery-suit4.jpg",
    "/embroidery-suit5.jpg",
    "/embroidery-suit6.jpg",
    "/embroidery-suit7.jpg",
    "/embroidery-suit8.jpg",
    "/embroidery-suit9.jpg",
    "/embroidery-suit10.jpg",
    "/embroidery-suit11.jpg",
    "/embroidery-suit12.jpg",
    "/embroidery-suit13.jpg",
    "/embroidery-suit14.jpg",
    "/embroidery-suit15.jpg",
    "/embroidery-suit16.jpg",
    "/embroidery-suit17.jpg",
    "/embroidery-suit18.jpg",
    "/embroidery-suit19.jpg",
    "/embroidery-suit20.jpg",
    "/embroidery-suit21.jpg",
    "/embroidery-suit22.jpg",
    "/embroidery-suit23.jpg",
    "/embroidery-suit24.jpg",
    "/embroidery-suit25.jpg",
    "/embroidery-suit26.jpg",
    "/embroidery-suit27.jpg",
    "/embroidery-suit28.jpg",
    "/embroidery-suit29.jpg",
    "/embroidery-suit30.jpg",
    "/embroidery-suit31.jpg",
    "/embroidery-suit32.jpg",
    "/embroidery-suit33.jpg",
    "/embroidery-suit34.jpg",
    "/embroidery-suit35.jpg",
    "/embroidery-suit36.jpg",
    "/embroidery-suit37.jpg",
    "/embroidery-suit38.jpg",
    "/embroidery-suit39.jpg",
    "/embroidery-suit40.jpg",
  ];

  const mensImages: string[] = [
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
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to Wazeema&apos;s Website
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Explore amazing products with just a click!
        </p>

        {/* Women’s Clothing */}
        <ImageGrid title="Women&apos;s Clothing" images={womenImages} />

        {/* Embroidery Suits */}
        <ImageGrid title="Embroidery Suits" images={embroideryImages} />

        {/* Men’s Suits */}
        <ImageGrid title="Men&apos;s Suits" images={mensImages} />
      </div>
    </section>
  );
}

// Reusable component
function ImageGrid({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-200 mb-6">Up to 50% off on selected items</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-56 rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
