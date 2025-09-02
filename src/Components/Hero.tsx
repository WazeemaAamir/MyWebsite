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
            // ... (just pass all your women’s clothing image paths here)
          ]}
        />

        {/* Embroidery Suits */}
        <ProductGrid
          title="Embroidery Suits"
          subtitle="Up to 50% off on selected items"
          images={[
            "Embroidery Suit1.jpg",
            "Embroidery Suit2.jpg",
            "Embroidery Suit3.jpg",
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

     {/* Watches */}     
    <ProductGrid
          title="Watches"
          subtitle="Up to 50% off on selected items"
          images={[
           "Watch1.jpg",
          "Watch2.jpg",
          "Watch3.jpg",
          "Watch4.jpg",
          "Watch5.jpg",
          "Watch6.jpg",
          "Watch7.jpg",
          "Watch8.jpg",
          "Watch9.jpg",
          ]}
        />

        {/* Bed Sheets */}     
    <ProductGrid
          title="Bed Sheets"
          subtitle="Up to 50% off on selected items"
          images={[
            "/Bed Sheet.jpg",
           "/Bed Sheet1.jpg",
           "/Bed Sheet2.jpg",
           "/Bed Sheet3.jpg",
           "/Bed Sheet4.jpg",
           "/Bed Sheet5.jpg",
          ]}
        />
        </div>
    </section>
  );
}
