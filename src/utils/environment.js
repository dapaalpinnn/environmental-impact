import deforestation from "../assets/deforestation.svg";
import pollution from "../assets/pollution.svg";
import plastic from "../assets/plastic.svg";
import climate from "../assets/climate.svg";

export const environmentImpactItems = [
  {
    title: "Deforestation",
    description:
      "Large-scale clearing of forests leads to habitat loss, reduced biodiversity, and increased greenhouse gases.",
    statistic:
      "Approximately 15 billion trees are cut down every year, which equates to a loss of over 10 million hectares of forest annually, significantly impacting carbon storage and biodiversity.",
    imageSource: deforestation,
  },
  {
    title: "Pollution",
    description:
      "Emissions from industries and vehicles contribute to air pollution, affecting health and contributing to global warming.",
    statistic:
      "Air pollution causes 7 million deaths annually worldwide, with 90% of the global population breathing polluted air, exceeding WHO safety guidelines.",
    imageSource: pollution,
  },
  {
    title: "Plastic",
    description:
      "Improper disposal of plastic waste pollutes oceans and harms marine life.",
    statistic:
      "Over 8 million metric tons of plastic enter the oceans every year, with plastics accounting for 80% of all marine debris found from surface waters to deep-sea sediments.",
    imageSource: plastic,
  },
  {
    title: "Climate",
    description:
      "Rising global temperatures lead to extreme weather, rising sea levels, and ecological disruptions.",
    statistic:
      "The Earth's temperature has increased by 1.2°C since the pre-industrial era, contributing to a 21–24 cm rise in sea levels since 1880 and an increase in the frequency of extreme weather events.",
    imageSource: climate,
  },
];

export const definitionEnvironmentImpact = [
  "Environmental changes caused by human activities that affect ecosystems and quality of life.",
  "Impacts on nature, both positive and negative, resulting from human actions or natural phenomena.",
  "Effects on the environment caused by development, industry, or exploitation of natural resources.",
];
