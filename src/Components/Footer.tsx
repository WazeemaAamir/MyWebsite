'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wazeema&apos;s Website. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-3">
          <a href="https://www.facebook.com/" className="hover:text-white">Facebook</a>
          <a href="https://x.com/A54154Amir" className="hover:text-white">Twitter</a>
          <a href="https://www.instagram.com/wazeemaamir" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
