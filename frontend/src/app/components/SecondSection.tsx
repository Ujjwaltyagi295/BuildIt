"use client"

import Image from "next/image"
import ScrollingText from "./ScrollingTex"
import { useLayoutEffect, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLazyVideo } from "../lib/hooks/useLazyVideo"


gsap.registerPlugin(ScrollTrigger)

export const SecondSection = () => {
  const mainVidRef = useRef<HTMLDivElement>(null)
  const blueCanRef = useRef<HTMLDivElement>(null)
  const scrollTextRef = useRef<HTMLDivElement>(null)

  const lazyVideoRef = useLazyVideo()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add("(min-width: 0px)", () => {
        if (mainVidRef.current) {
          gsap.fromTo(
            mainVidRef.current,
            { rotation: -1 },
            {
              rotation: -16,
              scrollTrigger: {
                trigger: mainVidRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.1,
              },
            }
          )
        }

        if (blueCanRef.current) {
          gsap.fromTo(
            blueCanRef.current,
            { rotation: 6 },
            {
              rotation: 16,
              scrollTrigger: {
                trigger: blueCanRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.1,
              },
            }
          )
        }

        if (scrollTextRef.current) {
          gsap.fromTo(
            scrollTextRef.current,
            { x: "0%" },
            {
              x: "-50%",
              scrollTrigger: {
                trigger: scrollTextRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            }
          )
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const videoAttrs = {
    loop: true,
    muted: true,
    playsInline: true,
    preload: "metadata" as const,
  }

  return (
    <div className="relative h-screen mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex items-start px-4 sm:px-8 lg:px-16">
      <div
        className="absolute 
          top-[20%] sm:top-[18%] md:top-[8%] lg:top-[4%] 
          right-[3%] sm:right-[6%] md:right-[4%] lg:right-[8%] 
          w-[75vw] sm:w-[65vw] md:w-[22rem] lg:w-[25rem] 
          h-[85vh] sm:h-[75vh] md:h-[40rem] lg:h-[43.75rem] 
          z-25"
      >
        <div
          ref={mainVidRef}
          className="absolute 
            right-[40%] sm:right-[25%] md:right-[18%] lg:right-[15%]
            bottom-[-30%] sm:bottom-[-150%] md:bottom-[-58%] lg:bottom-[-60%]
            bg-white overflow-hidden shadow-2xl 
            w-[65vw] sm:w-[55vw] md:w-[18rem] lg:w-[32rem] 
            transform transition-transform z-20"
        >
          <div className="relative w-full p-2 sm:p-3 md:p-4 lg:p-5 bg-black/20 aspect-[3/4]">
            <video
              ref={lazyVideoRef}
              {...videoAttrs}
              poster="/mainvid-poster.jpg"
              className="w-full h-full rounded-sm object-cover"
            >
              <source data-src="/mainvid.webm" type="video/webm" />
              <source data-src="/mainvid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div
          ref={blueCanRef}
          className="absolute 
            top-[50%] sm:top-[75%] md:top-[58%] lg:top-[35%]
            right-[0%] sm:right-[5%] md:right-[80%] lg:right-[140%]
            bg-white overflow-hidden shadow-2xl 
            w-[58vw] sm:w-[52vw] md:w-[16rem] lg:w-[29rem] 
            transform transition-transform z-30"
        >
          <div className="relative w-full aspect-[5/6]">
            <video
              ref={lazyVideoRef}
              {...videoAttrs}
              poster="/bluecan-poster.jpg"
              className="w-full h-full rounded-sm object-cover"
            >
              <source data-src="/bluecan.webm" type="video/webm" />
              <source data-src="/bluecan.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div
          className="absolute 
            top-[18%] sm:top-[15%] md:top-[16%] lg:top-[5%]
            right-[48%] sm:right-[55%] md:right-[140%] lg:right-[250%]
            bg-white overflow-hidden shadow-2xl 
            w-[52vw] sm:w-[48vw] md:w-[15rem] lg:w-[20.625rem] 
            transform -rotate-6 transition-transform z-20"
        >
          <div className="relative w-full aspect-[6/7]">
            <video
              ref={lazyVideoRef}
              {...videoAttrs}
              poster="/fitnessweb-poster.jpg"
              className="w-full h-full rounded-sm object-cover"
            >
              <source data-src="/fitnessweb.webm" type="video/webm" />
              <source data-src="/fitnessweb.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <ScrollingText
        textClassName="leading-tight sm:leading-5"
        containerClassName="absolute 
          bottom-[38%] sm:bottom-[42%] md:bottom-[46%] lg:bottom-[50%] 
          title2 -rotate-1 left-0 w-full bg-[#e6e6e6] text-black 
          py-1.5 sm:py-2.5 md:py-3.5 lg:py-4 overflow-hidden z-20"
        text="BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT —"
      />

      <div
        className="absolute 
          bottom-[-75%] sm:bottom-[-70%] md:bottom-[-40%] lg:bottom-[-30%]
          title2 -rotate-4 left-0 w-full bg-[#e6e6e6] text-black 
          py-1.5 sm:py-2.5 md:py-3.5 lg:py-4 overflow-hidden z-20"
      >
        <div ref={scrollTextRef} className="flex whitespace-nowrap">
          <span
            className="title3 inline-block"
            style={{ fontSize: "clamp(5rem, 12vw, 16rem)" }}
          >
            A DESIGN AND TECHNOLOGY STUDIO — A DESIGN AND TECHNOLOGY STUDIO —
          </span>
        </div>
      </div>
    </div>
  )
}