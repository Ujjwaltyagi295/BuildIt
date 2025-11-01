"use client"; 

import { useEffect } from "react"; 
import Lenis from "lenis"; 
import Hero from "./components/Hero";
import TextRevealSection from "./components/TextRevealSection";
import { SecondSection } from "./components/SecondSection";

export default function Home() {
  
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []); 

  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* ADD THIS DIV TO TEST SCROLLING.
        This makes the page 100vh taller, forcing a scrollbar.
      */}
         <div className="min-h-screen mt-52 bg-[#e6e6e6]">
          <TextRevealSection/>
      </div>
       <div className="">
 <SecondSection/>
       </div>
    </main>
  );
}