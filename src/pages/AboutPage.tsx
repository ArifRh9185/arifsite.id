import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid.js";
import { Spotlight } from "@/components/ui/spotlight.js"
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { items, reviews } from "@/data/index.js";
import { cn } from "@/lib/utils.js";
import Marquee from "@/components/magicui/marquee.js";
import { ReviewCard } from '@/data/index.js'
import { FaCode } from "react-icons/fa6";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Tukar elemen
  }
  return array;
}


const Row = shuffleArray([...reviews]);
const Row2 = reviews.sort(() => Math.random() - 5);
const AboutPage = () => {

  return (
    <>
    <div data-aos="fade-up"
    data-aos-duration='1000'
    className="text-neutral-400 p-3 container m-auto w-full">
      `
    <Spotlight
        className="-top-40 left-0 md:-top-20 w-full overflow-hidden"  
        fill="white"
    />
    <div className=" w-full rounded-md flex antialiased border-b border-dashed py-5 border-slate-500 bg-grid-white/[0.02] relative overflow-hidden">
      <div className="relative z-10 w-full md:pt-0 text-justify ">
        <h1 className="text-2xl md:text-4xl font-sora font-bold text-center border-b border-dashed pb-5 border-slate-600 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 bg-opacity-50">
          About Me <p className="text-lg p-2 font-semibold"> A short story of me </p>
        </h1>
        <p className="mt-4 font-normal text-sm font-sora">
        Hi! I am Arif Rahman, a seasoned software engineer with a deep passion for creating elegant and efficient solutions through code. With a strong foundation in JavaScript and TypeScript, along with a comprehensive understanding of various frontend libraries and frameworks, I heve been navigating the ever-evolving landscape of web development with enthusiasm and dedication. Currently, reside in Bekasi, Indonesia 🇮🇩.
        <br />
        <br />
        As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my technical prowess but also a humble attitude that values every members input.
        <br />
        <br />
        This site is my platform to share insights, experiences, and discoveries from my journey as a software engineer. Join me as we delve into the ever-exciting realm of technology, where each line of code has the potential to shape the digital landscape in remarkable ways.
        <br />
        <br />
        Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure
        </p>
      </div>
    </div>

    {/* career */}
    <div className="career py-5 font-sora relative">
      <div className="title flex items-center gap-2 text-xl text-neutral-300 pb-3">
        <MdOutlineWorkOutline className='pb-1'/><h1>Career</h1>
      </div>
      <h2>My professional career journey</h2>
      <a href="#" className="text-neutral-300 absolute right-0 top-7 text-sm hover:text-neutral-100 duration-300">Download Resume <MdOutlineFileDownload className="inline" />
      </a>
    </div>

    {/* box career */}
    <div
    data-aos="fade-up"
    data-aos-duration="1000">
      <BentoGrid className="mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg] overflow-hidden", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>

      {/* skils */}
    <div className="career py5 font-sora relative">
      <div className="title flex items-center gap-2 text-xl text-neutral-300 pt-5 pb-3">
      <FaCode className='pb-1'/><h1>Skills</h1>
      </div>  
      <h2>My coding skills</h2>
    </div>

    <div className="relative my-3 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black"> 
      <Marquee pauseOnHover className="[--duration:40s]">
        {Row.map((review) => (
          <ReviewCard key={review.name} {...review}/>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:70s]">
        {Row2.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>

    </div>
    </>
  )
}


export default AboutPage