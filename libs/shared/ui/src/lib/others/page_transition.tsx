import React, { FC } from 'react';
import { motion } from 'framer-motion';
export const PageTransition: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
