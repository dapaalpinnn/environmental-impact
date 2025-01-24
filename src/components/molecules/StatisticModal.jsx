import { motion } from "motion/react";
import { createPortal } from "react-dom";
import { modalAnimation, textAnimation } from "../../utils/motionVariant";

export default function StatisticModal({
  imageSource,
  title,
  statistic,
  onClose,
}) {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-inter">
      <motion.div
        className="relative bg-white p-6 rounded-xl shadow-xl max-w-xs sm:max-w-md sm:rounded-lg dark:bg-black dark:ring-1 dark:ring-stone-300"
        {...modalAnimation}
      >
        <button
          className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-800 dark:text-stone-200 dark:hover:text-stone-400"
          onClick={onClose}
        >
          ✕
        </button>
        <motion.img
          {...textAnimation}
          src={imageSource}
          alt={title}
          className="h-40 mx-auto object-cover rounded-lg origin-top-right dark:invert"
        />
        <motion.h2
          {...textAnimation}
          className="mt-6 text-lg font-semibold text-gray-800 dark:text-green-400"
        >
          {title}
        </motion.h2>
        <motion.p
          {...textAnimation}
          className="mt-2 text-sm text-gray-600 dark:text-stone-300"
        >
          {statistic}
        </motion.p>
      </motion.div>
    </div>,
    document.getElementById("modal")
  );
}
