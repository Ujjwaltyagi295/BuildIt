"use client";

import { motion } from "framer-motion";

export default function ScrollingText() {
  const text =
    "WEB DEVELOPMENT — APP DESIGN — BRAND STRATEGY — SOCIAL MEDIA MANAGEMENT — CREATIVE AGENCY — UI/UX DESIGN — DIGITAL MARKETING — INNOVATION — IDENTITY — GROWTH — CONTENT CREATION — BUILD IT —";

  return (
    <div className="absolute bottom-3  left-0 w-full bg-[#e6e6e6 ] text-black py-4 overflow-hidden z-20">
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
        <span className="font-Inter font-extrabold  md:text-base text-[14px] px-2  leading-5 tracking-wide">
          {text}
        </span>
        <span className="font-Inter font-extrabold  md:text-base text-[14px] px-2 leading-5 tracking-wide">
          {text}
        </span>
      </motion.div>
    </div>
  );
}
