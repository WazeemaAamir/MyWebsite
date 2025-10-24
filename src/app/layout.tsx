import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dildar.pk - Online Shopping in Pakistan",
  description: "Shop the latest Men's Suits, Women's Clothing, Cosmetics, Stationery, and more at Dildar.pk.",
  icons: {
    icon: "/favicon.ico", // make sure you have a favicon in /public
  },
  openGraph: {
    title: "Dildar.pk - Online Shopping",
    description: "Discover amazing deals on clothing, cosmetics, and stationery at Dildar.pk.",
    url: "https://dildar.pk",
    siteName: "Dildar.pk",
    images: [
      {
        url: "/og-image.png", // add an image in /public for social preview
        width: 1200,
        height: 630,
        alt: "Dildar.pk Online Store",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {/* Example: Add Navbar here */}
        {children}
        {/* Example: Add Footer here */}
      </body>
    </html>
  );
}
