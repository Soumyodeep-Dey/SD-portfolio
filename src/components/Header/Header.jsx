import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

const resumeLink = import.meta.env.VITE_RESUME_LINK;
function Header() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`;
  return <header className="site-header"><nav className="site-nav" aria-label="Main navigation"><NavLink className="brand" to="/" onClick={() => setOpen(false)}><span>SD</span><b>Soumyodeep Dey</b></NavLink><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu">Menu</button><div id="menu" className={`nav-menu ${open ? 'nav-menu-open' : ''}`}><NavLink className={linkClass} to="/" onClick={() => setOpen(false)}>Home</NavLink><NavLink className={linkClass} to="/projects" onClick={() => setOpen(false)}>Projects</NavLink><NavLink className={linkClass} to="/blogs" onClick={() => setOpen(false)}>Writing</NavLink><a className="nav-link" href="/#contact" onClick={() => setOpen(false)}>Contact</a><a className="resume-nav" href={resumeLink} target="_blank" rel="noreferrer">Resume</a><ThemeBtn /></div></nav></header>;
}
export default Header;
