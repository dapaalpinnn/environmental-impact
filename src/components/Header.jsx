import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { imageAnimation } from "../utils/motionVariant";
import { definitionEnvironmentImpact } from "../utils/environment";
import GuestName from "./molecules/GuestName";
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="font-plex max-w-md mx-auto sm:max-w-lg">
      <GuestName />
      <motion.img
        animate={imageAnimation}
        src={plantImage}
        alt="Plant"
        className="w-24 mx-auto mt-16 origin-bottom-left sm:w-32 sm:mt-16"
      />
      <h1 className="text-4xl tracking-tight font-semibold text-center mt-4 sm:text-4xl">
        Environmental Impacts
      </h1>
      <p className="font-inter text-sm text-center mt-2 tracking-wide leading-tight sm:text-base sm:leading-tight">
        {impact}
      </p>
    </header>
  );
}
