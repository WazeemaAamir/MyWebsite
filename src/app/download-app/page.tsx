"use client";

import { QRCodeCanvas } from "qrcode.react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 text-center w-full max-w-md border border-gray-200">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Download the App
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Scan the QR code or use the buttons below to download our app.
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <QRCodeCanvas
            value="https://dildar.pk"
            size={160}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* App Store & Play Store Buttons */}
        <div className="flex flex-col gap-4">
          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.dildar.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg py-3 px-4 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <FaGooglePlay className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base font-medium">
              Get it on Google Play
            </span>
          </a>

          {/* App Store Button */}
          <a
            href="https://apps.apple.com/us/app/your-app-id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg py-3 px-4 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <FaApple className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base font-medium">
              Download on the App Store
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
