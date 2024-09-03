import { SiTermius } from "react-icons/si"
import { logoComponents} from "../../data/index"
import { navLinks } from "../../data/index"
import { NavLink } from 'react-router-dom'
import AnimatedGradientText from "../../components/magicui/animated-gradient-text";
import { cn } from "../../lib/utils";
import { socialLinks } from "../../data/index"
import { ChevronRight, Contact } from "lucide-react";

const NavbarComponent = () => {
  return (  
    <div className="container m-auto sticky top-0 w-full z-40 bg-transparent backdrop-blur-md justify-between sm:flex items-center px-5 py-3">
      {logoComponents.map((logo)=> {  
        return (
          <div key={logo.id} className="w-auto hidden text-white lg:flex text-2xl font-sora font-bold items-center gap-2">
            <SiTermius />
            <NavLink className='w-full' key={logo.id} to={logo.path}>{logo.logoName}</NavLink>

          </div>
        )
      })}
      
      <div className="flex w-auto gap-5 rounded-xl border-slate-400">
      {navLinks.map((link)=>{
        return (
          // div Navlink
          <div className="hidden sm:flex flex-col text-sm font-geist text-slate-300 hover:text-slate-400" key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </div>
        )
      })}
      </div>
      <div className="flex py-2 items-center gap-2">
        <AnimatedGradientText className="pt-1 absolute right-5  sm:right-0 sm:relative px-3 text-xs">
          <NavLink to="contact"
            className={cn(
              `cursor-pointer text-[1rem] z-10 inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}>🎉 Let's Connect
          </NavLink>
          <ChevronRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      
      {socialLinks.map((social)=>{
        return (
          // div Navlink
          <div className="text-xl right-0 sm:relative font-poppins text-slate-400 hover:text-slate-300" key={social.name}>
            <a href={social.href}  target="_blank">{social.icon}</a>
          </div>
        ) 
      })}
      </div>
    </div>
  )
}

export default NavbarComponent