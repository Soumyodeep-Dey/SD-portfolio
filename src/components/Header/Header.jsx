import { NavLink } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn'; // Ensure the path is correct


function Header() {
  const navLinkClasses = ({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? 'text-orange-700' : 'text-gray-500'
    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`;

  return (
    <header id="header" className="bg-gray-800 text-white text-2xl">
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
