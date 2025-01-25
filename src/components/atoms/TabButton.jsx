import { motion } from "motion/react";
import { fadeIn } from "../../utils/motionVariant";

export default function TabButton({
  children,
  isSelected = false,
  color = "bg-slate-200 hover:ring-1 hover:ring-slate-500",
  ...props
}) {
  return (
    <motion.button
      {...fadeIn}
      {...props}
      className={`${
        isSelected ? "bg-stone-800 text-stone-200" : color
      } px-4 py-2 ring-1 ring-stone-700 text-stone-700 rounded-lg font-manrope font-medium text-sm hover:text-stone-900 hover:ring-stone-900 dark:bg-transparent dark:text-stone-300 dark:ring-stone-300 dark:hover:ring-stone-100 dark:hover:text-stone-100`}
    >
      {children}
    </motion.button>
  );
}
