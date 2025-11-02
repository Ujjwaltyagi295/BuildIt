import Image from "next/image"
import ScrollingText from "./ScrollingTex"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const SecondSection = () => {
    const mainVidRef = useRef<HTMLDivElement>(null)
    const blueCanRef = useRef<HTMLDivElement>(null)
    const scrollTextRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        // Animate mainvid video
        if (mainVidRef.current) {
            gsap.fromTo(mainVidRef.current, 
                {
                    rotation: -1,
                },
                {
                    rotation: -16,
                    scrollTrigger: {
                        trigger: mainVidRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.1,
                    }
                }
            )
        }
        if (blueCanRef.current) {
            gsap.fromTo(blueCanRef.current,
                {
                    rotation: 6,
                },
                {
                    rotation: 16,
                    scrollTrigger: {
                        trigger: blueCanRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.1,
                    }
                }
            )
        }
        
        if (scrollTextRef.current) {
            gsap.fromTo(scrollTextRef.current,
                {
                    x: "0%",
                },
                {
                    x: "-50%", 
                    scrollTrigger: {
                        trigger: scrollTextRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.5,
                    }
                }
            )
        }
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])
    
    return (
        <div className="relative min-h-screen flex items-start pt-12 px-8 lg:px-16"> 
    
            <div className="absolute top-[55%] right-[5%] md:top-[20%] sm:right-[8%] md:right-[3%] lg:top-[4%] lg:right-[8%] w-[17.5rem] sm:w-[18.75rem] md:w-[22rem] lg:w-[25rem] h-[34.375rem] sm:h-[35.625rem] md:h-[40rem] lg:h-[43.75rem] z-25">
                   
                <div 
                    ref={mainVidRef}
                    className="absolute right-0 bottom-[55%] lg:bottom-[-60%] bg-white overflow-hidden shadow-2xl lg:right-[15%] w-[11.875rem] sm:w-[12.5rem] md:w-[15rem] lg:w-[32rem] transform transition-transform z-20"
                >
                    <div className="relative w-full p-5 bg-black/20 aspect-[3/4]">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full rounded-sm object-cover"
                        >
                            <source src="/mainvid.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            
                <div 
                    ref={blueCanRef}
                    className="absolute top-[98%] right-[55%] sm:right-[60%] md:right-[65%] lg:top-[35%] lg:right-[140%] bg-white overflow-hidden shadow-2xl w-[10.625rem] sm:w-[11.25rem] md:w-[14rem] lg:w-[29rem] transform transition-transform z-30"
                >
                    <div className="relative w-full aspect-[5/6]">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full rounded-sm object-cover"
                        >
                            <source src="/bluecan.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                    
                <div className="absolute top-[48%] right-[55%] sm:right-[60%] md:right-[65%] lg:top-[5%] lg:right-[250%] bg-white overflow-hidden shadow-2xl w-[10.625rem] sm:w-[11.25rem] md:w-[14rem] lg:w-[20.625rem] transform -rotate-6 lg:-rotate-6 transition-transform z-20">
                    <div className="relative w-full aspect-6/7">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full rounded-sm object-cover"
                        >
                            <source src="/fitnessweb.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            
            <ScrollingText
                textClassName="leading-5"
                containerClassName="absolute bottom-[50%] title2 -rotate-1 left-0 w-full bg-[#e6e6e6] text-black py-4 overflow-hidden z-20"
                text={"BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT —"}
            />
            
            <div className="absolute bottom-[-30%] title2 -rotate-4 left-0 w-full bg-[#e6e6e6] text-black py-4 overflow-hidden z-20">
                <div ref={scrollTextRef} className="flex whitespace-nowrap">
                    <span className="text-[16rem] title3 inline-block">
                        A DESIGN AND TECHNOLOGY STUDIO — A DESIGN AND TECHNOLOGY STUDIO — 
                    </span>
                </div>
            </div>
        </div>
    )
}