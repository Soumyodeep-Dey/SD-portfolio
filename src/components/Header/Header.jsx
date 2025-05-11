import { NavLink } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `relative block py-2 px-4 text-lg font-medium transition-all duration-300 
    ${isActive
      ? 'text-white dark:text-white'
      : 'text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-white'
    } 
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
    after:bg-white after:transform after:scale-x-0 after:origin-center 
    hover:after:scale-x-100 after:transition-transform after:duration-300
    ${isActive ? 'after:scale-x-100' : ''}
    `;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo or Brand Name */}
          <div className="text-xl font-bold text-white">
            Soumyodeep Dey (S D)
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-2">
              <li>
                <NavLink to="/" className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={navLinkClasses}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className={navLinkClasses}>
                  Blogs
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Theme Toggle - Desktop */}
          <div className="hidden lg:flex items-center">
            <ThemeBtn />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="py-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blogs" 
                  className={navLinkClasses}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </NavLink>
              </li>
              <li className="pt-2">
                <ThemeBtn />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
