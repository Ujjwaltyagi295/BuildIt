"use client";

import { motion } from "framer-motion";

export default function ScrollingText({ 
  text, 
  containerClassName ,
  textClassName = "font-Inter font-extrabold md:text-base text-[14px] px-2 leading-5 tracking-wide"
}) {

  return (
    <div className={containerClassName}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25, 
            ease: "linear",
          },
        }}
      >
        <span className={textClassName}>
          {text}
        </span>
        <span className={textClassName}>
          {text}
        </span>
      </motion.div>
    </div>
  );
}
