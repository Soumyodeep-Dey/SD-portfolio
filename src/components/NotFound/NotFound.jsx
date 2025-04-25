import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-6xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">404</h1>
      <p className="text-xl mb-6">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;