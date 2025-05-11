import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const titles = [
    "Buy Instagram likes",
    "Buy Instagram followers",
    "Buy Instagram comments",
    "Buy Instagram views",
    "Buy Tiktok Followers",
    "Buy Tiktok Likes",
    "Buy Tiktok Views",
  ];

  const links = [
    "/buyinstalikes",
    "/buyinstafollowers",
    "/buyinstacomments",
    "/buyinstaviews",
    "/buytiktokfollowers",
    "/buytiktoklikes",
    "/buytiktokviews",
  ];

  return (
    <div className="primary-gradient">
      <div className="custom-container center flex-col space-y-10 min-h-screen pt-16 pb-8">
        <p className="heading text-center leading-14">
          Buy Instagram likes, followers, comments and other Interactions{" "}
          <span className="text-gradient">Delivered in Minutes</span>
        </p>
        <p className="text-secondary-text-color font-medium text-center text-lg max-w-2xl">
          Count on Company name #1 ranked growth service to help you build a
          robust social media presence!
        </p>

        {/* Clickable Tiles */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          {titles.map((title, idx) => (
            <div
              key={idx}
              onClick={() => navigate(links[idx])}
              className={`cursor-pointer ${
                title.toLowerCase().includes("tiktok")
                  ? "hero-tiles-tiktok"
                  : "hero-tiles"
              } uppercase text-center py-3 px-2 rounded-lg transition hover:scale-105`}
            >
              {title}
            </div>
          ))}
        </div>

        {/* Review and Delivery Info */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-4">
          {/* Stars */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="bg-[#00d084] w-fit px-1 rounded">
                <i className="fa-solid fa-star text-sm text-white"></i>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-8 w-[1px] bg-gray-300" />

          {/* Delivery box */}
          <div className="bg-[#00d084]/10 flex flex-col sm:flex-row sm:space-between gap-2 px-4 py-4 rounded-2xl text-sm flex-1">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="bg-[#00d084] w-2.5 h-2.5 animate-ping rounded-full absolute" />
                <div className="bg-[#00d084] w-2.5 h-2.5 rounded-full z-10" />
              </div>
              <p className="text-[#065f46]">
                <span className="font-medium">100 followers</span> delivered
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white center w-6 h-6 rounded-full">
                <i className="fa-solid fa-check text-[#00d084]"></i>
              </div>
              <p className="text-[#065f46]">43 minutes ago</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-8 w-[1px] bg-gray-300" />

          {/* Pay box */}
          <div className="text-primary-text-color border border-gray-300 w-fit px-3 py-1.5 flex items-center gap-1 rounded-lg text-xl">
            <i className="fa-brands fa-apple"></i>
            <p>Pay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
