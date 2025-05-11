import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const InfoCard = ({ title, content, bg }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${
        expanded ? "max-h-full" : "max-h-[67vh] overflow-hidden relative"
      } ${bg} relative space-y-6 text-center rounded-xl shadow-md hover:shadow-sm py-12 px-6 max-w-xs w-full transition-all duration-300`}
    >
      <div className="w-24 h-24 bg-black mx-auto rounded-2xl" />
      <h3 className="font-semibold text-md mb-2">{title}</h3>
      <div className={`text-gray-600 transition-all text-sm duration-300 `}>
        <p>{content}</p>
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>
      <div className="flex justify-center mt-4 absolute bottom-2 left-1/2">
        <button
          className="text-gray-500 bg-white p-1 rounded-full shadow cursor-pointer"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle More"
        >
          {expanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
