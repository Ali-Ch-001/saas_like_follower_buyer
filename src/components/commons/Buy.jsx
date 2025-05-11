import { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { TiStarFullOutline } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import AnimationContainer from "./NumberCounter";
export default function InstagramPromo({
  cardsFirst,
  bg,
  card1Title,
  card1Content,
  card2Title,
  card2Content,
  cta,
  features,
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 800);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`${bg} custom-container my-20 py-10 transition-all duration-500 rounded-4xl overflow-hidden`}
    >
      <div
        className={`flex ${
          cardsFirst ? "flex-row-reverse" : "flex-row"
        } justify-between`}
      >
        <div className="w-[45%] flex flex-col md:flex-row justify-center gap-6">
          <InfoCard title={card1Title} content={card1Content} />
          <InfoCard title={card2Title} content={card2Content} />
        </div>

        {/* Right Column - Features */}
        <div className={`md:block w-[50%]`}>
          <div className="flex items-center text-xs w-fit rounded-full mt-4 mb-8">
            <span className="font-semibold bg-white px-2 py-1 rounded-l-full flex gap-0.5">
              <TiStarFullOutline
                className={`text-[#38c793] ${animate ? "spin" : ""}`}
              />
              5.0
            </span>
            <span className="bg-black/10 text-gray-700 font-semibold rounded-r-full px-2 py-1">
              <AnimationContainer value={1045} />
            </span>
          </div>
          <h3 className="text-4xl font-semibold text-primary-text-color my-4">
            {cta}
          </h3>
          <ul className="grid gap-4 my-10">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-4 bg-white w-6 h-6 center rounded-full shadow-md flex-none">
                  <TiTick className="text-orange-400 text-xl" />
                </span>
                <span className="text-[#484f5e] font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-3 hero-tiles text-white rounded-lg font-semibold transition-colors uppercase">
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
}
