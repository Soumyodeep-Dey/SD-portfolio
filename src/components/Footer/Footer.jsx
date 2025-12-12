import { useState, useEffect } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-light-100 dark:bg-dark-100 border-t border-light-300 dark:border-dark-300 mt-auto overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-light-300 dark:bg-dark-300 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-light-200/40 to-transparent dark:from-dark-200/40 dark:to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Main Footer Content */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-dark-900 dark:text-light-50 mb-2">
              Soumyodeep Dey
            </h3>
            <p className="text-dark-700 dark:text-light-300 max-w-md">
              Final Year CSE Student | Software Developer
            </p>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-light-300 dark:border-dark-300"></div>

          {/* Copyright */}
          <div className="text-center text-sm text-dark-600 dark:text-light-400">
            <p>© {currentYear} Soumyodeep Dey. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Go to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500 transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Go to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
}

export default Footer;
