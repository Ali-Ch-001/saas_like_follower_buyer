function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const links = [
    {
      name: "FAQs",
      url: "#",
    },
    {
      name: "About Us",
      url: "#",
    },
    {
      name: "Contact Us",
      url: "#",
    },
    {
      name: "Terms of Services",
      url: "#",
    },
    {
      name: "Privacy Policy",
      url: "#",
    },
  ];
  const services = [
    {
      name: "Buy Instagram Likes",
      url: "#",
    },
    {
      name: "Buy Instagram Followers",
      url: "#",
    },
    {
      name: "Buy Instagram Comments",
      url: "#",
    },
    {
      name: "Buy Instagram Views",
      url: "#",
    },
  ];
  const services2 = [
    {
      name: "Buy Tiktok Likes",
      url: "#",
    },
    {
      name: "Buy Tiktok Followers",
      url: "#",
    },
    {
      name: "Buy Tiktok Views",
      url: "#",
    },
  ];
  return (
    <div className="footer-container">
      <div className="custom-container space-y-10">
        <div className="align-center gap-5">
          {links.map((link, index) => (
            <p key={index} className="pointer footer-link">
              {link.name}
            </p>
          ))}
        </div>
        <div className="space-y-3">
          <p className="footer-link">Instagram Services</p>
          <div className="space-y-1.5 flex gap-10">
            {services.map((service, index) => (
              <p
                key={index}
                className="pointer text-secondary-text-color text-sm w-fit font-medium"
              >
                {service.name}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="footer-link">Tiktok Services</p>
          <div className="space-y-1.5 flex gap-10">
            {services2.map((service, index) => (
              <p
                key={index}
                className="pointer text-secondary-text-color text-sm w-fit font-medium"
              >
                {service.name}
              </p>
            ))}
          </div>
        </div>
        <div className="space-between">
          <p className="text-sm text-secondary-text-color font-medium">
            Copyright © {year} Company name All rights reserved.
          </p>
          <p>List of payment methods supported</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
