"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Model from "./Model";
gsap.registerPlugin(ScrollTrigger);

export default function TextRevealSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Split text into words
    const text = textRef.current;
    const words = text.textContent.split(" ");
    
    // Clear original text and wrap each word in a span
    text.innerHTML = "";
    words.forEach((word, index) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "word";
      wordSpan.textContent = word;
      text.appendChild(wordSpan);
      
      // Add space after each word except the last
      if (index < words.length - 1) {
        text.appendChild(document.createTextNode(" "));
      }
    });

    const wordElements = text.querySelectorAll(".word");

    // Create scroll-triggered animation
    gsap.fromTo(
      wordElements,
      {
        opacity: 0.2,
      },
      {
        opacity: 1,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1,
          markers: false, // Set to true for debugging
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex items-center flex-col justify-center min-h-screen px-6 md:px-12"
    >
<h2
  ref={textRef}
  className="text-4xl md:text-6xl title2 lg:text-7xl xl:text-8xl title2 text-center font-bold leading-tight normal-case"
>
Meticulously crafted, we build brands. <br/>
We design feelings and craft immersive digital experiences <br/>
web, app, social that spark ideas and make people go, Wow.
</h2>

   
    </section>
  );
}
     {/* <button
        className="absolute top-3 right-4 lg:top-4 lg:right-8 bg-[#c5ee5b] text-black rounded-full font-bold hover:bg-opacity-90 transition-all z-30
                   text-sm lg:text-xl px-4 py-2 lg:px-8 flex items-center justify-center"
      >
        menu
      </button> */}