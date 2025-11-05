"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CategoryObject {
  images: string[];
  moreImages?: string[];
  description?: string;
  moreImagesDescription?: string;
}

// Union type: either an array of images or a category object
type CategoryValue = string[] | CategoryObject;

const imageCollections: Record<string, CategoryValue> = {
  "Women's Clothing": {
    images: [
      "/whatsapp-women1.jpg",
      "/whatsapp-women2.jpg",
      "/whatsapp-women3.jpg",
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
      "/pink-frock.jpg",
      "/purple-maxi.jpg",
      "/black-frock.jpg",
    ],
    moreImages: [
      "/KameezShalwar.jpg",
      "/KameezShalwar1.jpg",
      "/KameezShalwar2.jpg",
      "/KameezShalwar3.jpg",
      "/KameezShalwar4.jpg",
      "/KameezShalwar5.jpg",
    ],
    moreImagesDescription: `Printed with Embroidered patch on Daman and Sleeves with Neck Handwork 3PCs

Size Measurement 
Chest 21
Shirt Length 38/39
Flapper Length 38/39
Stuff: Swiss Lawn (PREMIUM LAWN STUFF)

Digital Printed Dupatta
Size 2.5 yards
Stuff: Organza`,
  },

  "Embroidery Suits": [
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
  ],

  Saree: {
    images: ["/Saree.jpg", "/Saree1.jpg", "/Saree2.jpg", "/Saree3.jpg"],
    description: `Sequence embroidered saree
⭐ Original Shoot
💸 Rs 2650/-`,
  },

  "Men's Suits": [
    "/mens-j-suit.jpg",
    "/mens-j-suit1.jpg",
    "/mens-j-suit2.jpg",
    "/mens-j-suit3.jpg",
    "/mens-j-suit4.jpg",
    "/mens-j-suit5.jpg", 
    "/mens-j-suit6.jpg",
    "/mens-j-suit7.jpg", 
    "/mens-j-suit8.jpg", 
    "/mens-j-suit9.jpg", 
  ],
};

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen flex flex-col items-center py-16">
      <div className="max-w-6xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to Wazeema&apos;s Website
        </h1>
        <p className="text-lg md:text-2xl mb-12">
          Explore amazing products with just a click!
        </p>

        {Object.entries(imageCollections).map(([title, value]) => {
          const isCategoryObject = (val: CategoryValue): val is CategoryObject =>
            typeof val === "object" && !Array.isArray(val);

          const images = isCategoryObject(value) ? value.images : value;
          const description = isCategoryObject(value) ? value.description : "";
          const moreImages = isCategoryObject(value) && value.moreImages ? value.moreImages : [];
          const moreImagesDescription =
            isCategoryObject(value) && value.moreImagesDescription ? value.moreImagesDescription : "";

          return (
            <ImageGrid
              key={title}
              title={title}
              images={images}
              moreImages={moreImages}
              description={description}
              moreImagesDescription={moreImagesDescription}
            />
          );
        })}
      </div>
    </section>
  );
}

interface ImageGridProps {
  title: string;
  images: string[];
  moreImages?: string[];
  description?: string;
  moreImagesDescription?: string;
}

function ImageGrid({
  title,
  images,
  moreImages = [],
  description,
  moreImagesDescription,
}: ImageGridProps) {
  const [showMore, setShowMore] = useState(false);

  const displayedImages = showMore ? [...images, ...moreImages] : images;

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-200 mb-6">Up to 50% off on selected items</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {displayedImages.map((src, i) => {
          // Show description for original images or moreImages
          const showDesc =
            title === "Saree"
              ? description
              : showMore && i >= images.length
              ? moreImagesDescription
              : "";

          return (
            <div
              key={i}
              className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-3 shadow-lg hover:shadow-xl transition"
            >
              <div className="relative w-full h-56 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`${title} ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {showDesc && (
                <p className="text-xs text-white whitespace-pre-line leading-relaxed">
                  {showDesc}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {moreImages.length > 0 && !showMore && (
        <button
          onClick={() => setShowMore(true)}
          className="mt-4 px-4 py-2 bg-white/30 border border-white/50 text-white rounded-lg hover:bg-white/50 transition"
        >
          More Cards
        </button>
      )}
    </div>
  );
}
