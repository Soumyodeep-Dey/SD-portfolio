import { NavLink } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `relative block py-3 px-4 text-lg font-medium transition-all duration-300 transform
     ${isActive
      ? 'text-dark-900 dark:text-light-50 scale-105'
      : 'text-dark-700 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-50 hover:scale-105'
    }
     after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-3/4 after:h-0.5
     after:bg-dark-900 dark:after:bg-light-50 after:rounded-full
     after:transform after:scale-x-0 after:origin-center after:-translate-x-1/2
     hover:after:scale-x-100 after:transition-transform after:duration-300
     ${isActive ? 'after:scale-x-100' : ''}
    `;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-light-50 to-light-100 dark:from-dark-50 dark:to-dark-100 shadow-sm border-b border-light-300 dark:border-dark-300 sticky top-0 z-50 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80">
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
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
              <NavLink to="/blogs" className={navLinkClasses}>Blogs</NavLink>
              <NavLink to="/support" className={navLinkClasses}>Support</NavLink>
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeBtn />
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-dark-700 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-50 hover:bg-light-200 dark:hover:bg-dark-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="md:hidden animate-fadeInLeft"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-light-100 dark:bg-dark-100 rounded-lg mt-2 border border-light-300 dark:border-dark-300 shadow-md">
              <NavLink to="/" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/projects" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
              <NavLink to="/blogs" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>Blogs</NavLink>
              <NavLink to="/support" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>Support</NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
