import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light-50 to-light-100 dark:from-dark-50 dark:to-dark-50 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Accent for Dark Mode */}
      <div className="absolute inset-0 pointer-events-none dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent)]" />

      <div className="max-w-md w-full text-center relative z-10">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500 dark:from-light-200 dark:via-light-50 dark:to-light-200 bg-clip-text text-transparent animate-pulse-slow">
            404
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-light-100 dark:bg-dark-100 rounded-2xl p-8 shadow-lg border border-light-300 dark:border-dark-300 transform hover:scale-[1.01] transition-all duration-300">
          <h2 className="text-2xl font-bold text-light-900 dark:text-dark-950 mb-4">
            Page Not Found
          </h2>

          <p className="text-light-700 dark:text-dark-800 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Button */}
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 
                       text-light-50 rounded-lg dark:from-primary-400 dark:to-primary-300 dark:hover:from-primary-300 dark:hover:to-primary-200 
                       dark:text-dark-900 font-medium transition-all duration-300 shadow-md hover:shadow-primary-400/50"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-8 space-y-2">
          <p className="text-sm text-light-600 dark:text-dark-700">
            Or explore these sections:
          </p>
          <div className="flex justify-center space-x-4">
            {[
              { to: "/projects", label: "Projects" },
              { to: "/blogs", label: "Blogs" },
              { to: "/support", label: "Support" }
            ].map((link, idx) => (
              <span key={idx} className="flex items-center">
                <Link
                  to={link.to}
                  className="text-sm text-light-700 dark:text-dark-800 hover:text-primary-600 dark:hover:text-primary-300 transition-colors relative after:absolute after:w-0 after:h-[1px] after:bg-current after:left-0 after:-bottom-0.5 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
                {idx < 2 && <span className="mx-2 text-light-500 dark:text-dark-600">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
