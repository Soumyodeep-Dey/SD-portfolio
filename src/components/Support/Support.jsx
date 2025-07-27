import React from 'react';

function Support() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16 min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-200">
          Support Me
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
          If you enjoy my work and would like to support me, consider buying me a coffee!
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Buy Me a Coffee
          </h2>
          <a
            href="https://coff.ee/soumyodeepdey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Buy Me a Coffee
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            QR Codes
          </h2>
          <div className="flex justify-center space-x-4">
            <div>
              <img src="/QR/bmc_qr.png" alt="QR Code 1" className="w-32 h-32" />
              <p className="mt-2 text-gray-600 dark:text-gray-400">Scan to support</p>
            </div>
            <div>
              <img src="/QR/Gpay_QR.jpg" alt="QR Code 2" className="w-32 h-32" />
              <p className="mt-2 text-gray-600 dark:text-gray-400">Scan for more info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;