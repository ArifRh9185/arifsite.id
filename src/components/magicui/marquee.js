import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils.js";
export default function Marquee({ className, reverse, pauseOnHover = false, children, vertical = false, repeat = 12, ...props }) {
    return (_jsx("div", { ...props, className: cn("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]", {
            "flex-row": !vertical,
            "flex-col": vertical,
        }, className), children: Array(repeat)
            .fill(0)
            .map((_, i) => (_jsx("div", { className: cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
            }), children: children }, i))) }));
}
