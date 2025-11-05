'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-gray-300 py-6 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wazeema&apos;s Website. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 mt-4 space-y-3 sm:space-y-0">
          <a
            href="https://www.facebook.com/"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://x.com/A54154Amir"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/wazeemaamir"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
