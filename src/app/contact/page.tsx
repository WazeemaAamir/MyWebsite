'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Github, Menu } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const mailtoTo = 'wazeemaamir145@gmail.com';
  const mailtoSubject = encodeURIComponent('Customer Inquiry');
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
  );

  return (
    <>
      {/* ✅ Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-700">
            Dildar.pk
          </Link>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
 <Link href="/" className="block hover:text-gray-200">Home</Link>
          <Link href="/contact" className="block hover:text-gray-200">Contact</Link>
          <Link href="/loginModel" className="block hover:text-gray-200">Login</Link>
          <Link href="/signUpModel" className="block hover:text-gray-200">SignUp</Link>
          <Link href="/download-app" className="block hover:text-gray-200">DownloadApp</Link>
          <Link href="/help-support" className="block hover:text-gray-200">Help Center</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <Menu className="w-7 h-7 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="bg-white shadow-md md:hidden flex flex-col text-gray-800 font-medium px-6 py-4 space-y-4">
            <Link href="/" onClick={() => setMobileMenu(false)} className="hover:text-blue-600">Home</Link>
            <Link href="/about" onClick={() => setMobileMenu(false)} className="hover:text-blue-600">About</Link>
            <Link href="/contact" onClick={() => setMobileMenu(false)} className="text-blue-600 font-semibold">Contact</Link>
          </div>
        )}
      </header>

      {/* ✅ Contact Section */}
      <section className="w-full bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6 text-base sm:text-lg">
              Have questions about buying or selling <strong>Cosmetics</strong>,{' '}
              <strong>Men&apos;s Cloth</strong>, <strong>Women&apos;s Cloth</strong>, or{' '}
              <strong>Stationery</strong>? Reach out to our team and we will respond quickly!
            </p>
            <div className="space-y-3 text-gray-600 text-sm sm:text-base">
              <p><strong>📍 Address:</strong> Al Markaz, Karachi</p>
              <p><strong>📞 Phone:</strong> +92 3708709782 , +92 3702440409</p>
              <p><strong>📧 Email:</strong> {mailtoTo}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-6 sm:p-8 space-y-6">
            {submitted && (
              <div className="text-green-600 font-medium border border-green-200 bg-green-50 p-4 rounded-lg text-sm sm:text-base">
                ✅ Your message has been sent successfully!
              </div>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                placeholder="you@email.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                placeholder="How can we help you?"
                required
              />
            </div>

            {/* Submit */}
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md">
              Send Message
            </button>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start items-center space-x-6 mt-4">
              <a
                href={`mailto:${mailtoTo}?subject=${mailtoSubject}&body=${mailtoBody}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <Mail className="w-6 h-6" />
              </a>

              <a
                href="https://github.com/wazeemaamir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
