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
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/Contact" className="hover:text-gray-200">
            Contact
          </Link>
          <Link href="/loginModel" className="hover:text-gray-200">
           Login
          </Link>
          <Link href="/SignUpModel" className="hover:text-gray-200">
           SignUp
          </Link>
          <Link href="/download-app" className="hover:text-gray-200">
           DownloadApp
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-2 space-y-2">
          <Link href="/" className="block hover:text-gray-200">
            Home
          </Link>
          <Link href="/contact" className="block hover:text-gray-200">
            Contact
          </Link>
          <Link href="/loginModel" className="hover:text-gray-200">
           Login
          </Link>
          <Link href="/SignUpModel" className="hover:text-gray-200">
           SignUp
          </Link>
                   <Link href="/download-app" className="hover:text-gray-200">
           DownloadApp
          </Link>
        </div>
      )}
    </nav>
  );
}
