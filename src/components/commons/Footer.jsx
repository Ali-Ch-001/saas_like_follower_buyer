import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const links = [
    { name: "FAQs", url: "/faqs" },
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "Terms of Services", url: "/terms" },
    { name: "Privacy Policy", url: "/privacy" },
  ];

  const services = [
    { name: "Buy Instagram Likes", url: "/buyinstalikes" },
    { name: "Buy Instagram Followers", url: "/buyinstafollowers" },
    { name: "Buy Instagram Comments", url: "/buyinstacomments" },
    { name: "Buy Instagram Views", url: "/buyinstaviews" },
  ];

  const services2 = [
    { name: "Buy Tiktok Likes", url: "/buytiktoklikes" },
    { name: "Buy Tiktok Followers", url: "/buytiktokfollowers" },
    { name: "Buy Tiktok Views", url: "/buytiktokviews" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-gray-200 py-12 mt-16 text-sm">
      <div className="custom-container flex flex-col gap-10">

        {/* Top Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium text-center">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => navigate(link.url)}
              className="hover:text-orange-500 transition duration-200"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Service Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          <div>
            <h4 className="text-gray-800 font-semibold mb-3">Instagram Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  onClick={() => navigate(service.url)}
                  className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-3">TikTok Services</h4>
            <ul className="space-y-2">
              {services2.map((service, index) => (
                <li
                  key={index}
                  onClick={() => navigate(service.url)}
                  className="text-gray-600 hover:text-orange-500 cursor-pointer transition"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-3">Why Choose Us?</h4>
            <p className="text-gray-600 leading-relaxed">
              Trusted by thousands for real and secure social media growth. Join our community and elevate your online presence today.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 border-t border-gray-200 text-gray-500">
          <p>© {year} Company Name. All rights reserved.</p>
          <p>💳 Visa • MasterCard • Apple Pay • Google Pay</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
