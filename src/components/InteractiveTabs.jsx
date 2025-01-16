import { useState } from "react";
import { motion } from "motion/react";
import { environmentImpactItems } from "../utils/environment";
import TabButton from "./atoms/TabButton";
import { textAnimation } from "../utils/motionVariant";

export default function InteractiveTabs() {
  const [tabContent, setTabContent] = useState("Select a statistic!");

  function handleClick(selectedButton) {
    setTabContent(selectedButton);
  }

  return (
    <main className="font-inter max-w-md mx-auto my-4 p-4  rounded-xl">
      <h1 className="text-xl text-slate-800 font-semibold">Statistic</h1>
      <div className="flex gap-2 mt-4">
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
      <div className="mt-4 p-4 ring-1 h-20 ring-slate-400 rounded-lg">
        <motion.p
          className="text-sm text-slate-700"
          key={tabContent}
          {...textAnimation}
        >
          {tabContent}
        </motion.p>
      </div>
    </main>
  );
}
