"use client"

import Image from "next/image"
import ScrollingText from "./ScrollingTex"
import { useEffect, useRef } from "react"

export default function Hero() {
const videoRefs = useRef<HTMLVideoElement[]>([])

const setVideoRef = (el: HTMLVideoElement | null) => {
  if (el && !videoRefs.current.includes(el)) {
    videoRefs.current.push(el)
  }
}


  // Lazy load + ensure autoplay on iOS
  useEffect(() => {
    const videos = videoRefs.current
    if (!videos.length) return

    // IntersectionObserver for lazy load
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            // Start loading sources
            const sources = video.querySelectorAll("source[data-src]")
            sources.forEach(source => {
              source.setAttribute("src", source.getAttribute("data-src") || "")
            })
            video.load()

            // Try autoplay (iOS fix)
            video.muted = true
            video.play().catch(() => {})
            observer.unobserve(video)
          }
        })
      },
      { threshold: 0.25 }
    )

    videos.forEach(v => observer.observe(v))

    return () => observer.disconnect()
  }, [])

  // Shared video attributes
  const videoAttrs = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "none" // important for lazy loading
  } as const

  return (
    <section className="relative h-screen flex items-start pt-12 px-8 lg:px-16 ">
      {/* Menu Button */}
      <button
        className="absolute top-3 right-4 lg:top-4 lg:right-8 bg-[#c5ee5b] text-black rounded-full font-bold hover:bg-opacity-90 transition-all z-30
                   text-sm lg:text-xl px-4 py-2 lg:px-8 flex items-center justify-center"
      >
        menu
      </button>

      {/* Headings */}
      <div className="flex flex-col gap-6 lg:absolute lg:inset-0 w-full lg:w-auto z-10">
        <div className="lg:absolute lg:left-4 lg:top-12">
          <h1 className="title2 font-bold leading-[0.85] tracking-tight text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[180px]">
            Build.IT
            <br />
            agency
          </h1>
        </div>

        <div className="lg:absolute lg:left-4 lg:bottom-[40%] max-w-sm md:max-w-md lg:max-w-xs">
          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-lg leading-tight uppercase">
            WE CREATE
            <br />
            WEBSITES AND BRANDS
            <br />
            PEOPLE REMEMBER.
            <br />
            NOT JUST SCROLL PAST.
          </p>
        </div>
      </div>

      {/* Decorative SVG */}
      <div className="absolute top-[70%] left-[5%] sm:left-[1%] lg:left-[28%] lg:top-[50%] rotate-12 w-[13.75rem] h-[13.75rem] md:w-[10rem] md:h-[10rem] lg:w-[21.875rem] lg:h-[21.875rem] z-15">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="100" cy="100" r="95" stroke="#c5ee5b" strokeWidth="12" fill="none" />
          <ellipse cx="70" cy="80" rx="15" ry="25" fill="#c5ee5b" />
          <ellipse cx="130" cy="80" rx="15" ry="25" fill="#c5ee5b" />
          <path
            d="M 60 120 Q 100 150 140 120"
            stroke="#c5ee5b"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Floating Media Stack */}
      <div className="absolute top-[55%] right-[5%] md:top-[20%] sm:right-[8%] md:right-[3%] lg:top-[5%] lg:right-[8%] w-[17.5rem] sm:w-[18.75rem] md:w-[22rem] lg:w-[25rem] h-[34.375rem] sm:h-[35.625rem] md:h-[40rem] lg:h-[43.75rem] z-25">

        {/* Project Image */}
        <div className="absolute right-0 bottom-[55%] lg:bottom-[60%] bg-white overflow-hidden shadow-2xl w-[11.875rem] sm:w-[12.5rem] md:w-[15rem] lg:w-[19.375rem] transform -rotate-10 hover:rotate-8 transition-transform z-10">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/ThriftyfyMock.png"
              alt="Thriftyfy Project"
              width={280}
              height={373}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* BuildIt Can Video */}
        <div className="absolute top-[18%] left-0 lg:top-[28%] bg-white overflow-hidden shadow-2xl w-[11.25rem] sm:w-[11.875rem] md:w-[14.5rem] lg:w-[20rem] transform rotate-4 hover:-rotate-3 transition-transform z-20 rounded-sm">
          <div className="relative w-full aspect-[3/4]">
            <video
              ref={setVideoRef}
  {...videoAttrs}
              poster="/BuildItcan-poster.jpg"
              className="w-full h-full object-cover"
            >
              <source data-src="/BuildItcan.webm" type="video/webm" />
              <source data-src="/BuildItcan.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* BuildIt Shoes Video */}
        <div className="absolute top-[48%] right-[55%] sm:right-[60%] md:right-[65%] lg:top-[68%] lg:right-[90%] bg-white overflow-hidden shadow-2xl w-[10.625rem] sm:w-[11.25rem] md:w-[14rem] lg:w-[20.625rem] transform -rotate-6 lg:rotate-6 hover:rotate-3 transition-transform z-30">
          <div className="relative w-full aspect-[6/7]">
            <video
             ref={setVideoRef}
  {...videoAttrs}
              poster="/builditshoes-poster.jpg"
              className="w-full h-full object-cover"
            >
              <source data-src="/builditshoes.webm" type="video/webm" />
              <source data-src="/builditshoes.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Scrolling Text */}
      <ScrollingText
        textClassName="leading-5"
        containerClassName="absolute bottom-3 left-0 w-full bg-[#e6e6e6] text-black py-4 overflow-hidden z-20"
        text="WEB DEVELOPMENT — APP DESIGN — BRAND STRATEGY — SOCIAL MEDIA MANAGEMENT — CREATIVE AGENCY — UI/UX DESIGN — DIGITAL MARKETING — INNOVATION — IDENTITY — GROWTH — CONTENT CREATION — BUILD IT —"
      />
    </section>
  )
}
