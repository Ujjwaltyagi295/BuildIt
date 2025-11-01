import Image from "next/image"
import ScrollingText from "./ScrollingTex"

export const SecondSection =()=>{
    return (
        <div className="relative min-h-screen  flex items-start pt-12 px-8 lg:px-16"> 
    
              <div className="absolute top-[55%]  right-[5%] md:top-[20%] sm:right-[8%] md:right-[3%] lg:top-[4%] lg:right-[8%] w-[17.5rem] sm:w-[18.75rem] md:w-[22rem] lg:w-[25rem] h-[34.375rem] sm:h-[35.625rem] md:h-[40rem] lg:h-[43.75rem] z-25">
                   
                    <div className="absolute right-0 bottom-[55%] lg:bottom-[-70%] bg-white overflow-hidden shadow-2xl  lg:right-[1%] w-[11.875rem] sm:w-[12.5rem] md:w-[15rem] lg:w-[35rem] transform -rotate-1 transition-transform z-20">
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
            
                    <div className="absolute top-[98%] right-[55%] sm:right-[60%] md:right-[65%]  lg:top-[35%] lg:right-[140%] bg-white overflow-hidden shadow-2xl w-[10.625rem] sm:w-[11.25rem] md:w-[14rem] lg:w-[29rem] transform rotate-6 lg:rotate-6  transition-transform z-30">
                      <div className="relative w-full aspect-[5/6]">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src="/bluecan.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    
                    <div className="absolute top-[48%] right-[55%] sm:right-[60%] md:right-[65%] lg:top-[5%] lg:right-[250%] bg-white overflow-hidden shadow-2xl w-[10.625rem] sm:w-[11.25rem] md:w-[14rem] lg:w-[20.625rem] transform -rotate-6 lg:-rotate-6  transition-transform z-20">
                      <div className="relative w-full aspect-6/7">
                       <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src="/fitnessweb.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                    </div>
                    <ScrollingText containerClassName="absolute bottom-[50%] title2 -rotate-1 left-0 w-full bg-[#e6e6e6] text-black py-4 overflow-hidden z-20"
                    
                    text={"BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT — BUILD IT —"}/>
        </div>
    )
}