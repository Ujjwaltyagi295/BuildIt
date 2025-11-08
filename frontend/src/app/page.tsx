"use client"; 

import { useEffect } from "react"; 
import Lenis from "lenis"; 
import Hero from "./components/Hero";
import TextRevealSection from "./components/TextRevealSection";
import { SecondSection } from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import ProjectGrid from "./components/ProjectCards";

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
     
         <div className="min-h-screen mt-52 bg-[#e6e6e6]">
          <TextRevealSection/>
        </div>
 <SecondSection/>
   
       <div className="mt-[30rem] bg-[#e6e6e6]  min-h-screen">
          <ThirdSection/>
           <ProjectGrid/>
       </div>
    </main>
  );
}