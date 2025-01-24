import { motion, AnimatePresence } from "motion/react";
import { descriptionAnimation } from "../../utils/motionVariant";

function DescriptionAnimation({ children, keyword, className }) {
  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={keyword}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={descriptionAnimation}
        className={`font-manrope text-stone-600 font-medium text-sm leading-tight sm:text-base sm:leading-tight dark:text-stone-300 ${className}`}
      >
        {children}
      </motion.p>
    </AnimatePresence>
  );
}

export default DescriptionAnimation;
