import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils.js";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export const HoverEffect = ({ items, className, }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    return (_jsx("div", { className: cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className), children: items.map((item, idx) => (_jsxs("a", { className: "relative group  block p-2 h-full w-full", onMouseEnter: () => setHoveredIndex(idx), onMouseLeave: () => setHoveredIndex(null), children: [_jsx(AnimatePresence, { children: hoveredIndex === idx && (_jsx(motion.span, { className: "absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl", layoutId: "hoverBackground", initial: { opacity: 0 }, animate: {
                            opacity: 1,
                            transition: { duration: 0.15 },
                        }, exit: {
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                        } })) }), _jsxs(Card, { children: [_jsx(CardTitle, { children: item.title }), _jsx(CardDescription, { children: item.description })] })] }, item?.title))) }));
};
export const Card = ({ className, children, }) => {
    return (_jsx("div", { className: cn("rounded-2xl h-full w-full overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20", className), children: _jsx("div", { className: "relative z-50", children: _jsx("div", { className: "p-4", children: children }) }) }));
};
export const CardTitle = ({ className, children, }) => {
    return (_jsx("h4", { className: cn("text-zinc-100 font-bold tracking-wide mt-4", className), children: children }));
};
export const CardDescription = ({ className, children, }) => {
    return (_jsx("p", { className: cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className), children: children }));
};
