import AnimatedShinyText from "@/components/magicui/animated-shiny-text"
import ShinyButton from "@/components/magicui/shiny-button"
import { FlipWords } from "@/components/ui/flip-words"
import { cn } from "@/lib/utils"
import { ArrowRightIcon, Quote, Sparkle } from "lucide-react"
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVitest } from "react-icons/si";
import { people } from "../data/index"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import astrounot from "../assets/astrounot.png"
import { projects } from "../data/index"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import BoxReveal from "@/components/magicui/box-reveal"
import { NavLink } from "react-router-dom"




``
const HomePage = () => {
  const words = ["Bro", "Sis", "Neng", "Mpo", "cang", "cing", "Nyak", "Babeh"];
  return  (
    <> 
    {/* Heading */}
    <div data-aos='fade-up' data-aos-duration='1000' className="container m-auto flex xl:gap-5">
      {/* aside */}
      <div className="aside ">
        {/* Magic Words */}
        <div className="flex mt-11 md:pt-40">
          <div className="aside z-10 flex">
            <div 
            className={cn(
              "group rounded-full border mx-2 text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 border-white/5 bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-f flex text-xs items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Download My Portfolio</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
            </div>
          </div>
        </div>
        {/* end magic word */}

        {/* heading */}
        <div className=" font-geist flex flex-col gap-3 px-2 pt-5 lg:w-full text-neutral-300">
          <h1 className="text-4xl py-4 font-poppins font-bold md:text-6xl">
          Halo
          <FlipWords words={words} /> <br />
          What do you want to know?</h1>
          <p className="text-sm mt-5 relative sm:text-lg text-neutral-400 font-sora">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people 🐳
          </p>
          <div className="button flex w-full flex-col gap-4 sm:flex-row mt-6 font-geist">
            <NavLink to="about">
              <ShinyButton text="About Me" className="border bg-white w-full text-black font-semibold sm:px-12 sm:py-3"/>
            </NavLink>
            <NavLink to="contact">
            <ShinyButton text="Social Media" className="border w-full sm:px-12 font-semibold sm:py-3"/>            </NavLink>
            
            
          </div>
        </div>
        {/* Heading */}
      
        {/* skills utility */}
        <div className="flex justify-between sm:justify-normal w-full text-xs px-5 py-5 my-4 text-slate-400 gap-10 sm:gap-5 font-geist">
          <div className="flex gap-2 justify-center items-center ">
            <RiNextjsLine className=" text-2xl sm:text-4xl" />
            <h2 className="hidden sm:block">Next Js</h2>
          </div>
          <div className="flex gap-2 justify-center items-center ">
            <FaReact className=" text-2xl sm:text-4xl" />
            <h2 className="hidden sm:block">React Js</h2>
          </div>
          <div className="flex gap-2 justify-center items-center ">
            <RiTailwindCssFill className=" text-2xl sm:text-4xl" />
            <h2 className="hidden sm:block">Tailwind CSS</h2>
          </div>
          <div className="flex gap-2 justify-center items-center ">
            <SiVitest className=" text-2xl sm:text-4xl" />
            <h2 className="hidden sm:block">Vite </h2>
          </div>
        </div>
        {/* end skills utility */}
        <div className="relative w-full py-8 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="flex justify-center m-0">
              <h1 className=" text-lg italic font-bold text-center text-slate-400 relative z-20">
              "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles." <br />
              - Wayne Dyer -
              </h1>
            </div>
          </div>
      </div>
      {/* end aside */}
      {/* bside */}
      <div className="bside mt-9 md:pt-16 flex flex-col gap-9">
        <div className="hidden xl:flex w-full justify-end px-5">
          <AnimatedTooltip items={people} />
        </div>
        <div className="hidden xl:flex items-center justify-center bg-[#0E0E10] rounded-2xl w-full">
        <TextRevealCard
        text="YOU ARE SO BAD 👎"
        revealText="I know your the best">
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
        </TextRevealCard>
        </div>
        <img src={astrounot} alt="bg-astrounot" className="w-[40rem] hidden xl:flex mt-[-10rem] overflow-hidden " />
      </div>
    </div>

      {/* content */}
    <div className="container w-full m-auto font-sora ">
      <h1 
        data-aos='fade-up' 
        data-aos-duration='700' 
        data-aos-anchor-placement="bottom-bottom"
        className="text-3xl md:text-4xl text-center font-bold ">My Quality Services</h1>
      <p 
        data-aos='fade-up' 
        data-aos-duration='700'
        data-aos-delay='200'
        className="py-3 text-center m-auto  lg:w-[50%] text-neutral-400">I put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        <div 
        data-aos='fade-up'
        data-aos-delay='100'
        className="max-w-5xl mx-auto">
          <HoverEffect items={projects} />
      </div>

      <div className="px-2 items-center justify-center overflow-hidden mt-2">
        <h1
        className="text-3xl md:text-4xl text-center font-bold"
        data-aos='fade-up' 
        data-aos-duration='700' 
        data-aos-anchor-placement="bottom-bottom"
        >What's Different?</h1>
        <p
        className="py-5 text-center m-auto  lg:w-[50%] mb-10 text-neutral-300"
        data-aos='fade-up' 
        data-aos-duration='700' 
        data-aos-anchor-placement="bottom-bottom">Create something different with another website design, without forgetting modernization</p>

        <div 
        className="bg-slate-900/50 px-5 rounded-xl pb-5">
          {/* unique */}
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-2xl md:text-4xl lg:text-5xl mt-5 font-semibold">
              Unique<span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>
    
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Make UI more {" "}
              <span className="text-[#5046e6]">Different</span>
            </h2>
          </BoxReveal>
    
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-[1.5rem] border-b pb-5 border-slate-800">
              <p>
                More than 20+ website with Different UI, with any language and tools i've used like
                <span className="font-semibold text-[#5046e6]"> React</span>,
                <span className="font-semibold text-[#5046e6]"> Typescript</span>,
                <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
                and
                <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
              </p>
            </div>
          </BoxReveal>
          {/* end unique */}
          {/* interactive */}
          <BoxReveal boxColor={"#ff2c2c"} duration={0.5}>
            <p className="text-2xl md:text-4xl lg:text-5xl mt-5 font-semibold">
              Interactive<span className="text-[#ff2c2c]">.</span>
            </p>
          </BoxReveal>
    
          <BoxReveal boxColor={"#ff2c2c"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Interactive is to get {" "}
              <span className="text-[#ff2c2c]">expression</span>
            </h2>
          </BoxReveal>
    
          <BoxReveal boxColor={"#ff2c2c"}  duration={0.5}>
            <div className="mt-[1.5rem] border-b pb-5 border-slate-800">
              <p>
                More than 20+ website with interactive page, with any language and tools i've used like
                <span className="font-semibold text-[#ff2c2c]"> React</span>,
                <span className="font-semibold text-[#ff2c2c]"> Typescript</span>,
                <span className="font-semibold text-[#ff2c2c]"> Tailwind CSS</span>,
                and
                <span className="font-semibold text-[#ff2c2c]"> Framer Motion</span>
              </p>
            </div>
          </BoxReveal>
          {/* end interactive */}
          {/* Colorfull */}
          <BoxReveal boxColor={"#ffa127"} duration={0.5}>
            <p className="text-2xl md:text-4xl lg:text-5xl mt-5 font-semibold">
              Colorfull<span className="text-[#ffa127]">.</span>
            </p>
          </BoxReveal>
    
          <BoxReveal boxColor={"#ffa127"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Colorfull to make website more {" "}
              <span className="text-[#ffa127]">life</span>
            </h2>
          </BoxReveal>
    
          <BoxReveal boxColor={"#ffa127"} duration={0.5}>
            <div className="mt-[1.5rem]">
              <p>
                More than 20+ website look more life than others, with any language and tools i've used like
                <span className="font-semibold text-[#ffa127]"> React</span>,
                <span className="font-semibold text-[#ffa127]"> Typescript</span>,
                <span className="font-semibold text-[#ffa127]"> Tailwind CSS</span>,
                and
                <span className="font-semibold text-[#ffa127]"> Framer Motion</span>
              </p>
            </div>
          </BoxReveal>
          {/* end colorfull */}
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage