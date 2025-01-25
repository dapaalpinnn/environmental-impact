import { motion } from "motion/react";
import { fadeIn } from "../utils/motionVariant";

export default function CoreConcepts({
  imageSource,
  title,
  description,
  ...props
}) {
  return (
    <motion.section
      {...fadeIn}
      className="max-w-sm mx-auto text-center mt-4 rounded-xl p-6 ring-1 ring-slate-400 hover:ring-slate-600 sm:text-base dark:ring-slate-600 dark:hover:ring-slate-400"
    >
      <img
        src={imageSource}
        {...props}
        className="w-20 mx-auto origin-bottom sm:w-24 sm:mt-4 dark:invert"
      />
      <h4 className="font-bold tracking-tight text-base mt-4 text-black sm:text-lg sm:mt-6 dark:text-stone-200">
        {title}
      </h4>
      <p className="mt-2 leading-tight text-slate-600 sm:leading-tight dark:text-stone-300">
        {description}
      </p>
    </motion.section>
  );
}
