import { NavLink } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `relative block py-3 px-4 text-lg font-medium transition-all duration-300
     ${isActive
      ? 'text-dark-900 dark:text-light-50'
      : 'text-dark-700 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-50'
    }
     after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
     after:bg-dark-900 dark:after:bg-light-50 after:transform after:scale-x-0 after:origin-center
     hover:after:scale-x-100 after:transition-transform after:duration-300
     ${isActive ? 'after:scale-x-100' : ''}
    `;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-light-50 dark:bg-dark-50 shadow-sm border-b border-light-300 dark:border-dark-300 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl font-bold text-dark-900 dark:text-light-50 hover:text-dark-700 dark:hover:text-light-300 transition-colors"
            >
              Portfolio
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/projects" className={navLinkClasses}>
                Projects
              </NavLink>
              <NavLink to="/blogs" className={navLinkClasses}>
                Blogs
              </NavLink>
              <NavLink to="/support" className={navLinkClasses}>
                Support
              </NavLink>
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeBtn />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-dark-700 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-50 hover:bg-light-200 dark:hover:bg-dark-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dark-500 dark:focus:ring-light-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-light-100 dark:bg-dark-100 rounded-lg mt-2">
              <NavLink
                to="/"
                className={navLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={navLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/blogs"
                className={navLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/support"
                className={navLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;