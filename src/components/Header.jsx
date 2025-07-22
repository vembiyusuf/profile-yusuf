import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'certificates', label: 'Sertifikat' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full py-6 px-6 md:px-16 bg-gray-900 border-b border-gray-700 flex justify-between items-center z-50">
      <Link to="/" className="text-3xl font-bold text-white">VESUF</Link>

      {/* Toggle Menu Mobile */}
      <div
        className="md:hidden text-3xl text-white cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navigation */}
      <nav
        className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent py-4 md:py-0`}
      >
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-lg capitalize border-b-2 ${
                activeLink === link.id
                  ? 'text-blue-400 border-blue-400'
                  : 'text-white border-transparent'
              } hover:text-blue-400 hover:border-blue-400 transition-all`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
