import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-light-50 dark:bg-dark-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-dark-900 dark:text-light-50 opacity-20">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-light-100 dark:bg-dark-100 rounded-2xl p-8 shadow-sm border border-light-300 dark:border-dark-300">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-light-50 mb-4">
            Page Not Found
          </h2>

          <p className="text-dark-700 dark:text-light-300 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Button */}
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-dark-900 dark:bg-light-50 text-light-50 dark:text-dark-900 rounded-lg hover:bg-dark-700 dark:hover:bg-light-200 transition-colors font-medium"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-8 space-y-2">
          <p className="text-sm text-dark-600 dark:text-light-400">
            Or explore these sections:
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="text-sm text-dark-700 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-50 transition-colors"
            >
              Projects
            </Link>
            <span className="text-dark-500 dark:text-light-500">•</span>
            <Link
              to="/blogs"
              className="text-sm text-dark-700 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-50 transition-colors"
            >
              Blogs
            </Link>
            <span className="text-dark-500 dark:text-light-500">•</span>
            <Link
              to="/support"
              className="text-sm text-dark-700 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-50 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;