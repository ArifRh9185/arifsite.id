import React from "react";
import { Dock } from "../../components/magicui/dock";
import { navLinks } from "../../data";
import { NavLink } from "react-router-dom";



export default function DockComponent() {
  return (
    <div 
    className="w-full fixed bottom-5 z-50 sm:hidden"
    data-aos="fade-up"
    >
      <Dock direction="middle">
      {navLinks.map((link)=>{
        return (
          // div Navlink
          <div className="flex text-sm font-geist text-slate-300 hover:text-slate-400" key={link.id}>
            <NavLink className='flex justify-center p-2 items-center gap-1 hover:transform duration-200 hover:scale-110' to={link.path}>{link.icon}{link.text}</NavLink>
          </div>
        )
      })}
      </Dock>
    </div>
  );
}


