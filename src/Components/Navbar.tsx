"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-14">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          MyWebsite
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          <Link href="/loginModel" className="hover:text-gray-200">Login</Link>
          <Link href="/signUpModel" className="hover:text-gray-200">SignUp</Link>
          <Link href="/download-app" className="hover:text-gray-200">DownloadApp</Link>
          <Link href="/help-support" className="hover:text-gray-200">Help Center</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-2 space-y-2 animate-fadeIn">
          <Link href="/" className="block hover:text-gray-200">Home</Link>
          <Link href="/contact" className="block hover:text-gray-200">Contact</Link>
          <Link href="/loginModel" className="block hover:text-gray-200">Login</Link>
          <Link href="/signUpModel" className="block hover:text-gray-200">SignUp</Link>
          <Link href="/download-app" className="block hover:text-gray-200">DownloadApp</Link>
          <Link href="/help-support" className="block hover:text-gray-200">Help Center</Link>
        </div>
      )}
    </nav>
  );
}
