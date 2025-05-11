import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Buy Instagram Likes", url: "/buyinstalikes" },
    { name: "Buy Instagram Followers", url: "/buyinstafollowers" },
    { name: "Buy Instagram Comments", url: "/buyinstacomments" },
    { name: "Buy Instagram Views", url: "/buyinstaviews" },
    { name: "FAQs", url: "/faqs" },
    { name: "Contact Us", url: "/contact" },
    { name: "Login", url: "/login" },
  ];

  return (
    <header className="w-full shadow-sm bg-white border-b border-gray-200 fixed top-0 z-50">
      <div className="custom-container flex items-center justify-between py-4 px-4 md:px-0">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Logo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.url}
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/signup"
            className="ml-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow hover:opacity-90 transition"
          >
            Signup
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-100">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.url}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-orange-500 transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="block w-full mt-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-center px-4 py-2 rounded-lg font-semibold transition"
          >
            Signup
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
