import { SiTermius } from "react-icons/si"
import { logoComponents, navLinks } from "../../data"
export default function FooterComponent(){
    return (
        <div className="flex justify-between mt-10 border-t border-neutral-900 py-20 font-poppins text-neutral-500 text-sm leading-7 px-3">
            <div className="aside min-w-[18rem] ">
                {logoComponents.map((logo)=> {  
                return (
                <div key={logo.id} className="w-auto text-white flex text-2xl font-sora font-bold items-center gap-2">
                <SiTermius />
                <p className='w-full' key={logo.id} to={logo.path}>{logo.logoName}</p>
                </div>
                )
                })}
                <p>A website by <span className="text-pink-600">Arif Rahman Hidyat 💓</span></p>
                <p>Self build and deploy 🐳</p>
            </div>

            <div className="bside flex gap-3 h-0 flex-wrap">
                <a className="hover:text-slate-400" href="#">Facebook</a>
                <a className="hover:text-slate-400"  href="#">Instagram</a>
                <a className="hover:text-slate-400"  href="#">Twitter</a>
                <a className="hover:text-slate-400"  href="#">Github</a>
                <a className="hover:text-slate-400"  href="#">Tiktok</a>

            </div>
        </div>
    )
}