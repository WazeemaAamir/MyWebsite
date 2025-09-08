"use client";
import Image from "next/image";

interface ProductGridProps {
  title: string;
  subtitle: string;
  images: string[];
}

export default function ProductGrid({ title, subtitle, images }: ProductGridProps) {
  // helper function to clean image paths
  const sanitizePath = (src: string) => {
    let clean = src.trim();

    // add leading slash if missing
    if (!clean.startsWith("/")) {
      clean = "/" + clean;
    }

    // replace spaces and apostrophes with dashes
    clean = clean.replace(/\s+/g, "-").replace(/'/g, "").toLowerCase();

    return clean;
  };

  return (
    <section className="my-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        <p className="text-gray-200">{subtitle}</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => {
          const safeSrc = sanitizePath(src);

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                   src={safeSrc}
                   alt={`${title} ${index + 1}`}
                   width={300}
                   height={300}
                   className="w-full h-48 object-cover"
              />

            </div>
          );
        })}
      </div>
    </section>
  );
}
