const Header = () => {
  const links = [
    {
      name: "Buy instagram likes",
      url: "#",
    },
    {
      name: "Buy instagram followers",
      url: "#",
    },
    {
      name: "Buy instagram comments",
      url: "#",
    },
    {
      name: "Buy instagram views",
      url: "#",
    },
    {
      name: "FAQs",
      url: "#",
    },
    {
      name: "Contact Us",
      url: "#",
    },
    {
      name: "Login",
      url: "#",
    },
  ];
  return (
    <div className="header-container">
      <div className="nav-container space-between">
        <p className="header-logo">Logo</p>
        <div className="header-links-container">
          {links.map((link, index) => (
            <p key={index} className="pointer header-link hover:text-gradient">
              {link.name}
            </p>
          ))}
          <p className="sign-up-button pointer">Signup</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
