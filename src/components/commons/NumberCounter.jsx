import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const AnimationContainer = ({ value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (inView) {
      setStart(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {start && <CountUp duration={1} className="counter" end={value} />}
      {!start && <span className="counter">0</span>}
      <span className="ml-2">+</span>
    </div>
  );
};

export default AnimationContainer;
