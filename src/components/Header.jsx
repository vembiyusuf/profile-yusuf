import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext'; // pastikan path sesuai

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage(); // pakai global

  const handleNavClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const navLinks = {
    id: [
      { id: 'home', label: 'Beranda' },
      { id: 'certificates', label: 'Sertifikat' },
      { id: 'resume', label: 'Resume' },
      { id: 'portfolio', label: 'Portofolio' },
      { id: 'contact', label: 'Kontak' },
    ],
    en: [
      { id: 'home', label: 'Home' },
      { id: 'certificates', label: 'Certificates' },
      { id: 'resume', label: 'Resume' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'contact', label: 'Contact' },
    ],
  };

  return (
    <header className="fixed top-0 left-0 w-full py-6 px-6 md:px-16 bg-gray-900 border-b border-gray-700 flex justify-between items-center z-50">
      <Link to="/" className="text-3xl font-bold text-white">VESUF</Link>

      {/* Tombol Bahasa Desktop */}
      <button
        onClick={toggleLanguage}
        className="hidden md:block absolute top-6 right-6 text-white border border-white px-2 py-1 rounded text-sm hover:bg-white hover:text-gray-900 transition"
      >
        {language === 'id' ? 'EN' : 'ID'}
      </button>

      {/* Tombol menu mobile */}
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
          {navLinks[language].map((link) => (
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

          {/* Tombol Bahasa Mobile */}
          <button
            onClick={toggleLanguage}
            className="md:hidden text-white border border-white px-2 py-1 rounded text-sm hover:bg-white hover:text-gray-900 transition"
          >
            {language === 'id' ? 'ID' : 'EN'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
