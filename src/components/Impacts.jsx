import { environmentImpactItems } from "../utils/environment";
import CoreConcepts from "./CoreConcepts";
import { motion } from "motion/react";
import { imageAnimation, fadeIn } from "../utils/motionVariant";
import plantImage from "../assets/plant.svg";

export default function Impacts() {
  return (
    <section className="font-manrope max-w-sm px-4 mx-auto py-12 rounded-3xl sm:max-w-xl sm:mt-12">
      <motion.div {...fadeIn} className="flex items-center gap-4">
        <h1 className="text-3xl tracking-tight font-semibold">Impacts</h1>
        <motion.img
          animate={imageAnimation}
          src={plantImage}
          alt="Plant"
          className="w-12 origin-bottom-left mb-4 sm:w-32 sm:mt-16"
        />
      </motion.div>
      <motion.p {...fadeIn} className="text-sm text-stone-600 font-medium dark:text-stone-300">
        Recognizing these challenges is the first step toward adopting
        sustainable practices to protect the Earth for future generations.
      </motion.p>
      <div className="grid gap-4 grid-cols-1 text-sm mt-4">
        {environmentImpactItems.map((item) => (
          <CoreConcepts key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
