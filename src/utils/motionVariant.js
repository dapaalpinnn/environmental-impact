export const imageAnimation = {
  rotate: [0, 5, -5, 5, -5, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  },
};

export const textAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.5 },
};

export const modalAnimation = {
  initial: { opacity: 1, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.8 },
};

export const descriptionAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
