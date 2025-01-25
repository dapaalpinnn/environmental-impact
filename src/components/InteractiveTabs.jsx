import { useState } from "react";
import { motion } from "motion/react";
import { fadeIn } from "../utils/motionVariant";
import { environmentImpactItems } from "../utils/environment";
import StatisticModal from "./molecules/StatisticModal";
import TabButton from "./atoms/TabButton";

export default function InteractiveTabs() {
  const [tabContent, setTabContent] = useState(null);

  function handleClick(selectedItem) {
    setTabContent(selectedItem);
  }

  return (
    <>
      {tabContent && (
        <StatisticModal
          imageSource={tabContent.imageSource}
          title={tabContent.title}
          statistic={tabContent.statistic}
          onClose={() => setTabContent(null)}
        />
      )}

      <section className="font-inter max-w-sm px-4 py-8 mx-auto">
        <motion.h1
          {...fadeIn}
          className="text-3xl text-stone-800 font-semibold sm:text-5xl dark:text-stone-100"
        >
          Statistic
        </motion.h1>
        <motion.p
          {...fadeIn}
          className="text-sm tracking-tight mt-2 text-stone-600 dark:text-stone-300"
        >
          Over the past century, human activities have significantly accelerated
          environmental degradation.
        </motion.p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {environmentImpactItems.map((item) => (
            <TabButton
              key={item.statistic}
              isSelected={tabContent?.statistic === item.statistic}
              onClick={() => handleClick(item)}
            >
              {item.title}
            </TabButton>
          ))}
        </div>
      </section>
    </>
  );
}
