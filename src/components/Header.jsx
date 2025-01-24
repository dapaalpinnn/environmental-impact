import { definitionEnvironmentImpact } from "../utils/environment";
import { useState, useEffect } from "react";
import DescriptionAnimation from "./atoms/DescriptionAnimation";
import globalWarmingProtest from "../assets/global-warming-protest.webp";

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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  return (
    <header className="max-w-sm p-4 mx-auto pt-16">
      <div className="mt-8">
        <h1 className="font-manrope text-4xl tracking-tight font-semibold sm:text-4xl">
          Understanding Environmental Impact: Challenges and Solutions
        </h1>
        <DescriptionAnimation keyword={impact} className="mt-5">
          {impact}
        </DescriptionAnimation>
        <button
          className="button__darkmode mt-5"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
        <img
          src={globalWarmingProtest}
          alt="Global Warming Protest"
          className="mt-16 rounded-lg "
        />
      </div>
    </header>
  );
}
