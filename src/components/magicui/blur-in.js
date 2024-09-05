"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils.js";
const BlurIn = ({ word, className, variant, duration = 1 }) => {
    const defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;
    return (_jsx(motion.h1, { initial: "hidden", animate: "visible", transition: { duration }, variants: combinedVariants, className: cn(className, "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"), children: word }));
};
export default BlurIn;
