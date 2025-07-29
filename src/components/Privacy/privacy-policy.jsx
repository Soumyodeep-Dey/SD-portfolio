// src/pages/privacy-policy.jsx
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 md:px-20 md:py-16 font-sans">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
                    Privacy Policy for BeautyMatch
                </h1>

                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <strong>Effective Date:</strong> July 28, 2025
                </p>

                <section className="space-y-6 text-lg leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                        <p>
                            I, <strong>Soumyodeep Dey</strong>, am the solo developer of the BeautyMatch Chrome Extension ("Extension"). I respect your privacy and want you to understand how your data is handled.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">2. What Data Is Used</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Skin profile inputs</strong>: You may enter your skin tone, skin type, and known allergies.</li>
                            <li><strong>Product page content</strong>: The extension temporarily reads the ingredients listed on supported websites (Nykaa, Amazon.in, Sephora) to determine match.</li>
                        </ul>
                        <p className="mt-2">✅ <strong>No personally identifiable information (PII)</strong> is collected, stored, or transmitted.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">3. How the Data Is Handled</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>All data remains <strong>on your device</strong>.</li>
                            <li>Your skin profile is stored <strong>locally</strong> using Chrome's <code>storage.sync</code>.</li>
                            <li>Product ingredients are processed <strong>in real time</strong> and not saved.</li>
                            <li>The extension has <strong>no backend</strong>, <strong>no database</strong>, and <strong>no server communication</strong>.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">4. Data Sharing</h2>
                        <p>BeautyMatch does <strong>not share</strong>, sell, or transmit your data to any third parties or external services.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">5. Your Control</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>You can view or update your profile through the onboarding screen.</li>
                            <li>Remove the extension or reset its storage to clear your data.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">6. No Cookies or Tracking</h2>
                        <p>BeautyMatch uses <strong>no cookies</strong>, <strong>no tracking scripts</strong>, <strong>no analytics</strong>, and <strong>no ads</strong>.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
                        <p>Future changes will be reflected here with a new effective date if the extension's data handling changes.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
                        <p>For any questions or concerns, contact me at: <strong>soumyodeepdey2003@gmail.com</strong></p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">9. Conclusion</h2>
                        <p>Your privacy is my priority. This policy is designed to be transparent and easy to understand so you feel secure while using BeautyMatch.</p>
                    </div>

                    <footer className="mt-8 text-center text-sm text-gray-400">
                        Thank you for using <strong>BeautyMatch</strong>! 💄
                    </footer>
                </section>
            </div>
        </main>
    );
}
