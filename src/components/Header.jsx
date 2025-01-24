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

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImpact(definitionEnvironmentImpact[getRandomInt()]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="max-w-xs mx-auto pt-16 sm:max-w-lg">
      <GuestName />
      <motion.img
        animate={imageAnimation}
        src={plantImage}
        alt="Plant"
        className="w-24 mx-auto origin-bottom-left sm:w-32 sm:mt-16"
      />
      <div className="space-y-4 mt-8">
        <h1 className="font-manrope text-4xl tracking-tight font-semibold text-center sm:text-4xl">
          Environmental Impacts
        </h1>
        <p className="font-inter text-sm text-center leading-tight sm:text-base sm:leading-tight dark:text-slate-400">
          {impact}
        </p>
        <div className="flex justify-center">
          <button
            className="button__darkmode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}
