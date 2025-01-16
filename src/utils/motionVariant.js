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
  initial: { opacity: 0.5, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.5 },
};
