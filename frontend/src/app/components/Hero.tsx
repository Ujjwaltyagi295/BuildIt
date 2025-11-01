"use client";

import Image from "next/image";
import ScrollingText from "./ScrollingTex";

export default function Hero() {
  return (
   <section className="relative min-h-screen  flex items-start pt-12 px-8 lg:px-16">
       <button
        className="absolute top-3  right-4  lg:top-4 lg:right-8 bg-[#c5ee5b] text-black rounded-full font-bold   lg:text-xl hover:bg-opacity-90 transition-all z-30
                  px-4 py-2 text-sm lg:px-8 lg:py-2 flex items-center justify-center"
      >
       menu
      </button>

      <div className="absolute left-4 mt-2 top-12  lg:left-0 lg:ml-2 lg:top-0">
        <h1 className="text-[24vw] title2 sm:text-[18vw] md:text-[16vw] lg:text-[180px] font-bold leading-[0.85] tracking-tight">
          Build.IT
          <br />
          agency
        </h1>
      </div>

      <div className="absolute left-4 bottom-[48%]  mb-2 sm:bottom-[40%] lg:left-8 lg:bottom-[25%] max-w-75 lg:max-w-xs mt-2">
        <p className="font-semibold text-lg lg:text-lg leading-tight uppercase">
          WE CREATE
          <br />
          WEBSITES AND BRANDS
          <br />
          PEOPLE REMEMBER.
          <br />
          NOT JUST SCROLL PAST.
        </p>
      </div>

      {/* Smiley Face */}
      <div className="absolute top-[70%]  left-[5%] sm:left-[1%] md:left-[1%] lg:right-0 lg:top-[50%] lg:left-[28%] rotate-12 w-[13.75rem] h-[13.75rem] md:w-[10rem] md:h-[10rem] lg:w-[21.875rem] lg:h-[21.875rem] z-15">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            stroke="#c5ee5b"
            strokeWidth="12"
            fill="none"
          />
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
              alt="Project 1"
              width={280}
              height={373}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute top-[18%] left-0 lg:top-[28%] bg-white rounded-sm overflow-hidden shadow-2xl w-[11.25rem] sm:w-[11.875rem] md:w-[14.5rem] lg:w-[20rem] transform rotate-4 hover:-rotate-3 transition-transform z-20">
          <div className="relative w-full aspect-[3/4]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/Builditcan.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        
        <div className="absolute top-[48%] right-[55%] sm:right-[60%] md:right-[65%] lg:top-[68%] lg:right-[90%] bg-white overflow-hidden shadow-2xl w-[10.625rem] sm:w-[11.25rem] md:w-[14rem] lg:w-[20.625rem] transform -rotate-6 lg:rotate-6 hover:rotate-3 transition-transform z-30">
          <div className="relative w-full aspect-6/7">
           <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/builditshoes.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
       
      </div>
      <ScrollingText/>
    
    </section>
  );
}
