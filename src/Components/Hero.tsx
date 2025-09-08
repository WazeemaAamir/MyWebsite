"use client";
import ProductGrid from "./ProductGrid";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to Wazeema&apos;s Website
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-6 text-gray-100">
          Explore amazing products with just a click!
        </p>

        {/* Women’s Clothing */}
        <ProductGrid
          title="Women's Clothing"
          subtitle="Up to 50% off on selected items"
          images={[
            "/whatsApp-women1.jpg",
            "/whatsapp-women2.jpg",
            "/whatsapp-women3.jpg",
            "/whatsApp-women4.jpg",
            "/whatsApp-women5.jpg",
            "/whatsApp-women6.jpg",
            "/whatsApp-women7.jpg",
            "/whatsApp-women8.jpg",
            "/whatsApp-women9.jpg",
            "/whatsApp-women10.jpg",
            "/WhatsApp-women222.jpg",
            "/WhatsApp-women223.jpg",
            "/WhatsApp-women224.jpg",
            "/WhatsApp-women225.jpg",
            "/WhatsApp-women226.jpg",
            "/WhatsApp-women227.jpg",
            "/WhatsApp-women228.jpg",
            "/WhatsApp-women229.jpg",
            "/WhatsApp-women230.jpg",
            "/WhatsApp-women231.jpg",
            "/WhatsApp-women232.jpg",
            "/WhatsApp-women233.jpg",
            "/WhatsApp-women234.jpg",
            "/WhatsApp-women236.jpg",
            "/WhatsApp-women237.jpg",
            "/WhatsApp-women238.jpg",
            "/WhatsApp-women239.jpg",
            "/WhatsApp-women240.jpg",
            "/WhatsApp-women241.jpg",
            "/WhatsApp-women242.jpg",
            "/WhatsApp-women243.jpg",
            "/WhatsApp-women244.jpg",
            "/WhatsApp-women245.jpg",
            "/pink-frock.jpg",
            "/purple-maxi.jpg"
           // ... (just pass all your women’s clothing image paths here)
          ]}
        />

        {/* Embroidery Suits */}
        <ProductGrid
          title="Embroidery Suits"
          subtitle="Up to 50% off on selected items"
          images={[
            "Embroidery Suit.jpg",
            "Embroidery Suit1.jpg",
            "Embroidery Suit2.jpg",
            "Embroidery Suit3.jpg",
            "Embroidery Suit4.jpg",
            "Embroidery Suit5.jpg",
            "Embroidery Suit6.jpg",
            "Embroidery Suit7.jpg",
            "Embroidery Suit8.jpg",
            "Embroidery Suit9.jpg",
            "Embroidery Suit10.jpg",
            "Embroidery Suit11.jpg",
            "Embroidery Suit12.jpg",
            "Embroidery Suit13.jpg",
            "Embroidery Suit14.jpg",
            "Embroidery Suit15.jpg",
            "Embroidery Suit16.jpg",
            "Embroidery Suit17.jpg",
            "Embroidery Suit18.jpg",
            "Embroidery Suit19.jpg",
            "Embroidery Suit20.jpg",
            "Embroidery Suit21.jpg",
            "Embroidery Suit22.jpg",
            "Embroidery Suit23.jpg",
            "Embroidery Suit24.jpg",
            "Embroidery Suit25.jpg",
            "Embroidery Suit26.jpg",
            "Embroidery Suit27.jpg",
            "Embroidery Suit28.jpg",
            "Embroidery Suit29.jpg",
            "Embroidery Suit30.jpg",
            "Embroidery Suit31.jpg",
            "Embroidery Suit32.jpg",
            "Embroidery Suit33.jpg",
            "Embroidery Suit34.jpg",
            "Embroidery Suit35.jpg",
            "Embroidery Suit36.jpg",
            "Embroidery Suit37.jpg",
            "Embroidery Suit38.jpg",
            "Embroidery Suit39.jpg",
            "Embroidery Suit40.jpg",
            "Embroidery Sui61t.jpg",
            "Embroidery Sui74.jpg"
            // ... (rest of embroidery suit images)
          ]}
        />

       {/* Men's Suits */}     
    <ProductGrid
          title="Men's Suits"
          subtitle="Up to 50% off on selected items"
          images={[
            "/Men's J. Suit.jpg",
            "/Men's J. Suit1.jpg",
            "/Men's J. Suit2.jpg",
            "/Men's J. Suit3.jpg",
            "/Men's J. Suit4.jpg",
            "/Men's J. Suit5.jpg",
            "/Men's J. Suit6.jpg",
            "/Men's J. Suit7.jpg",
            "/Men's J. Suit8.jpg",
            "/Men's J. Suit9.jpg",
            "/Men's J. Suit10.jpg",
            "/Men's J. Suit11.jpg",
            "/Men's J. Suit12.jpg",
            "/Men's J. Suit13.jpg",
            "/Men's J. Suit14.jpg",
            "/Men's J. Suit15.jpg",
            "/Men's J. Suit16.jpg",
            "/Men's J. Suit17.jpg",
            "/Men's J. Suit18.jpg",
            "/Men's J. Suit19.jpg",
            "/Men's J. Suit20.jpg",
            "/Men's J. Suit21.jpg",
            "/Men's J. Suit22.jpg",
            "/Men's J. Suit23.jpg",
            "/Men's J. Suit24.jpg",
            "/Men's J. Suit25.jpg",
          ]} 
        />
        </div>
    </section>
  );
}
