import React from "react";
import { motion } from "framer-motion";

const Arrow = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [0, 16, 16, 0],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3,
        ease: [0.45, 0, 0.55, 1],
        times: [0, 0.3, 0.6, 1],
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={15}
        viewBox="0 0 42 15"
        fill="none"
      >
        <path
          d="M2 2L21 12.9697L40 2"
          stroke="#434448"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export default Arrow; 