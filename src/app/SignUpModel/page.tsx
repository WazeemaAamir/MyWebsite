"use client";

import { useState } from "react";

export default function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
      >
        Sign Up
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="bg-gray-900 bg-opacity-50 fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-96 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center mb-4">Sign Up</h2>

            {/* Phone Input */}
            <input
              type="text"
              placeholder="Enter your WhatsApp number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* WhatsApp Button */}
            <button className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg mt-4">
              Send Code via WhatsApp
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Logins */}
            <button className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg">
              Continue with Google
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg mt-2">
              Continue with Facebook
            </button>

            {/* Footer */}
            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
