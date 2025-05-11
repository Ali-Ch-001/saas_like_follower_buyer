import { TiChevronRight } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

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
    <div className="custom-container space-y-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Column: Text */}
        <div className="md:col-span-7 flex justify-center">
          <div className="space-y-5 max-w-xl">
            <h1 className="heading text-gradient">Get Started Now</h1>
            <h2 className="text-primary-text-color font-medium text-lg">
              And importantly, Buzzoid’s real followers, likes, views, and
              comments are available at very reasonable prices that are never
              higher than those charged by other reputable providers.
            </h2>
            <p className="text-secondary-text-color">
              Honest, trustworthy, responsible, and powerful TikTok and
              Instagram growth is what we’ve specialized in for more than a
              dozen years. We invite you to join our family of satisfied
              customers today!
            </p>
          </div>
        </div>

        {/* Right Column: Buttons */}
        <div className="md:col-span-5 space-y-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => navigate(service.url)}
              className="uppercase w-full bg-gradient-to-r from-[#ff7236] to-[#e261c5] text-white text-center font-semibold px-4 py-2.5 shadow-amber-500 shadow border border-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-none hover:scale-105 flex items-center justify-between"
            >
              {service.name}
              <span className="ml-4 bg-white w-5 h-5 center rounded-full flex items-center justify-center">
                <TiChevronRight className="text-[#ff45aa] text-[16px]" />
              </span>
            </button>
          ))}

          {services2.map((service, index) => (
            <button
              key={index}
              onClick={() => navigate(service.url)}
              className="uppercase w-full bg-gradient-to-r from-[#4dbbeb] via-[#c387ff] to-[#ff45aa] text-white text-center font-semibold px-4 py-2.5 shadow-amber-500 shadow border border-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-none hover:scale-105 flex items-center justify-between"
            >
              {service.name}
              <span className="ml-4 bg-white w-5 h-5 center rounded-full flex items-center justify-center">
                <TiChevronRight className="text-[#ff45aa] text-[16px]" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
