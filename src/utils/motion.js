export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const stagger = (delayChildren = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: delayChildren } },
});
