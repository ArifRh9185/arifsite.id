import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils.js";
export const BentoGrid = ({ className, children, }) => {
    return (_jsx("div", { className: cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ", className), children: children }));
};
export const BentoGridItem = ({ className, title, description, header, icon, }) => {
    return (_jsxs("div", { className: cn("row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4", className), children: [header, _jsxs("div", { className: "group-hover/bento:translate-x-2 transition duration-200", children: [icon, _jsx("div", { className: "font-sans font-bold text-neutral-200 mb-2 mt-2", children: title }), _jsx("div", { className: "font-sans font-normal text-neutral-300 text-xs ", children: description })] })] }));
};
