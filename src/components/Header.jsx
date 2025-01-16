import { useState, useEffect } from "react";
import { definitionEnvironmentImpact } from "../utils/environment";
import { imageAnimation } from "../utils/motionVariant";
import { motion } from "motion/react";
import plantImage from "../assets/plant.svg";

export default function Header() {
  function getRandomInt() {
    return Math.floor(Math.random() * definitionEnvironmentImpact.length);
  }

  const [impact, setImpact] = useState(
    definitionEnvironmentImpact[getRandomInt()]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImpact(definitionEnvironmentImpact[getRandomInt()]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="max-w-md mx-auto sm:max-w-lg">
      <motion.img
        animate={imageAnimation}
        src={plantImage}
        alt="Plant"
        className="w-24 mx-auto mt-12 origin-bottom-left sm:w-32 sm:mt-16"
      />
      <h1 className="text-3xl font-plex tracking-tight font-semibold text-center mt-4 sm:text-4xl">
        Environmental Impact
      </h1>
      <p className="font-inter text-sm text-center mt-2 tracking-wide leading-tight sm:text-base sm:leading-tight">
        {impact}
      </p>
    </header>
  );
}
