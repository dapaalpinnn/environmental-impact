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
