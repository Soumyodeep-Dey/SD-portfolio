function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 w-full mt-auto overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-gray-700/50"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          {/* Copyright Text */}
          <div className="text-center">
            <h3 className="text-gray-800 dark:text-gray-300 text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              &copy; {currentYear} Soumyodeep Dey. All rights reserved.
            </h3>
          </div>

          {/* Additional Footer Content */}
          <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-400">
            <span className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              Made with ❤️
            </span>
            <span className="text-sm">•</span>
            <span className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              Powered by React
            </span>
            <span className="text-sm">•</span>
            <span className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              Styled with Tailwind
            </span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 dark:from-indigo-600 dark:to-sky-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Back to top"
          >
            <span className="flex items-center gap-2">
              <span className="transform group-hover:-translate-y-0.5 transition-transform duration-300">↑</span>
              <span>Back to Top</span>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
