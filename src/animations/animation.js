export const fadeUpVariant = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
};

export const containerVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};
 