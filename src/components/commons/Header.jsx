// src/components/commons/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    { name: "Buy instagram likes",     url: "#"      },
    { name: "Buy instagram followers", url: "#"      },
    { name: "Buy instagram comments",  url: "#"      },
    { name: "Buy instagram views",     url: "#"      },
    { name: "FAQs",                    url: "#"      },
    { name: "Contact Us",              url: "#"      },
    { name: "Login",                   url: "/login" },
  ];

  return (
    <div className="header-container">
      <div className="nav-container space-between">
        <p className="header-logo">Logo</p>
        <div className="header-links-container">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.url}
              className="pointer header-link hover:text-gradient mx-2"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/signup"
            className="sign-up-button pointer"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
