"use client";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Hero />     
      <Footer />
    </div>
  );
}
