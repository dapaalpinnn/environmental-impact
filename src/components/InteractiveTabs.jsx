import { useState } from "react";
import { motion } from "motion/react";
import { textAnimation } from "../utils/motionVariant";
import { environmentImpactItems } from "../utils/environment";
import TabButton from "./atoms/TabButton";

export default function InteractiveTabs() {
  const [tabContent, setTabContent] = useState("Select a statistic!");

  function handleClick(selectedButton) {
    setTabContent(selectedButton);
  }

  return (
    <section className="font-inter max-w-md mx-auto my-4 p-4 rounded-xl sm:max-w-lg sm:px-0">
      <h1 className="text-xl text-slate-800 font-semibold sm:text-3xl">
        Statistic
      </h1>
      <p className="text-sm tracking-wide mt-2 text-green-600">
        * Choose a statistic to learn about environmental impacts.
      </p>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {environmentImpactItems.map((item) => (
          <TabButton
            key={item.statistic}
            isSelected={tabContent === item.statistic}
            onClick={() => handleClick(item.statistic)}
          >
            {item.title}
          </TabButton>
        ))}
      </div>
      <div className="mt-4 p-4 rounded-lg sm:mt-6 bg-slate-50">
        <motion.p
          className="text-sm text-slate-700 sm:text-base"
          key={tabContent}
          {...textAnimation}
        >
          {tabContent}
        </motion.p>
      </div>
    </section>
  );
}
