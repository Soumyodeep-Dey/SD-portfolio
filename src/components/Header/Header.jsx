import { NavLink } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function Header() {
  const navLinkClasses = ({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-sky-500 dark:text-black-900' : 'text-gray-600 dark:text-gray-400'
    } border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-sky-500 lg:p-0`;

  return (
    <header id="header" className="bg-sky-400 dark:bg-gray-900 text-white text-2xl">
      <div className="container mx-auto py-8 flex justify-between items-center">
        <nav className="flex space-x-6">
          <ul className="flex space-x-6">
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
        <div className="flex justify-end">
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
}

export default Header;
