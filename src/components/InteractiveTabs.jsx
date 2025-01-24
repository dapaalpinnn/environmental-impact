import { useState } from "react";
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

      <section className="font-inter max-w-xs mx-auto py-12">
        <h1 className="text-xl text-slate-800 font-semibold sm:text-3xl dark:text-slate-100">
          Statistic
        </h1>
        <p className="text-sm tracking-wide mt-2 text-green-600 dark:text-green-400">
          * Choose a statistic.
        </p>
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
