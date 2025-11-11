"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import ScrollingText from "./ScrollingTex"

function VideoWithFallback({ src, poster, frameSrc, className, videoAttrs }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
    }

    // Check if video is already loaded (cached)
    if (video.readyState >= 2) {
      setIsVideoLoaded(true)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    
    // Attempt to play video explicitly
    video.play().catch(error => {
      console.log("Video autoplay failed:", error)
    })

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      {!isVideoLoaded && (
        <Image
          src={frameSrc}
          alt="Loading preview"
          fill
          className={className}
          priority
        />
      )}
      <video
        ref={videoRef}
        {...videoAttrs}
        poster={poster}
        className={className}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      >
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export default function Hero() {
  const videoAttrs = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: "auto" as const,
  }

  return (
    <section className="relative h-screen flex items-start pt-12 px-8 lg:px-16 ">
      <div className="flex flex-col gap-6 lg:absolute lg:inset-0 w-full lg:w-auto z-10">
        <div className="lg:absolute lg:left-4 lg:top-12">
          <h1 className="title2 font-bold leading-[0.85] tracking-tight text-[20vw] sm:text-[14vw] md:text-[12vw] lg:text-[180px]">
            Build.IT
            <br />
            agency
          </h1>
        </div>

        <div className="lg:absolute lg:left-4 lg:bottom-[40%] max-w-sm md:max-w-md lg:max-w-xs mt-8 sm:mt-0">
          <p className="font-semibold text-base sm:text-base md:text-lg lg:text-lg leading-tight uppercase">
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

      <div className="absolute top-[55%] right-[5%] md:top-[20%] sm:right-[8%] md:right-[3%] lg:top-[5%] lg:right-[8%] w-[17.5rem] sm:w-[18.75rem] md:w-[22rem] lg:w-[25rem] h-[34.375rem] sm:h-[35.625rem] md:h-[40rem] lg:h-[43.75rem] z-25">
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

        <div className="absolute top-[18%] left-0 lg:top-[28%] bg-white overflow-hidden shadow-2xl w-[11.25rem] sm:w-[11.875rem] md:w-[14.5rem] lg:w-[20rem] transform rotate-4 hover:-rotate-3 transition-transform z-20 rounded-sm">
          <div className="relative w-full aspect-[3/4]">
            <VideoWithFallback
              src="/BuildItcan.mp4"
              poster="/BuildItcan-poster.jpg"
              frameSrc="/frames/BuildItcan.png"
              className="w-full h-full object-cover"
              videoAttrs={videoAttrs}
            />
          </div>
        </div>

        <div className="absolute top-[48%] right-[55%] sm:right-[60%] md:right-[65%] lg:top-[68%] lg:right-[90%] bg-white overflow-hidden shadow-2xl w-[10.625rem] sm:w-[11.25rem] md:w-[14rem] lg:w-[20.625rem] transform -rotate-6 lg:rotate-6 hover:rotate-3 transition-transform z-30">
          <div className="relative w-full aspect-[6/7]">
            <VideoWithFallback
              src="/builditshoes.mp4"
              poster="/builditshoes-poster.jpg"
              frameSrc="/frames/builditshoes.png"
              className="w-full h-full object-cover"
              videoAttrs={videoAttrs}
            />
          </div>
        </div>
      </div>

      <ScrollingText
        textClassName="leading-5"
        containerClassName="absolute bottom-3 left-0 w-full bg-[#e6e6e6] text-black py-4 overflow-hidden z-20"
        text="WEB DEVELOPMENT — APP DESIGN — BRAND STRATEGY — SOCIAL MEDIA MANAGEMENT — CREATIVE AGENCY — UI/UX DESIGN — DIGITAL MARKETING — INNOVATION — IDENTITY — GROWTH — CONTENT CREATION — BUILD IT —"
      />
    </section>
  )
}
