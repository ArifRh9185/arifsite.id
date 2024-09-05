"use client";
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils.js";
import { AnimatedList } from "@/components/magicui/animated-list.js";
let notifications = [
    {
        name: "Payment received",
        description: "Magic UI",
        time: "15m ago",
        icon: "💸",
        color: "#00C9A7",
    },
    {
        name: "User signed up",
        description: "Magic UI",
        time: "10m ago",
        icon: "👤",
        color: "#FFB800",
    },
    {
        name: "New message",
        description: "Magic UI",
        time: "5m ago",
        icon: "💬",
        color: "#FF3D71",
    },
    {
        name: "New event",
        description: "Magic UI",
        time: "2m ago",
        icon: "🗞️",
        color: "#1E86FF",
    },
];
notifications = Array.from({ length: 10 }, () => notifications).flat();
const Notification = ({ name, description, icon, color, time }) => {
    return (_jsx("figure", { className: cn("relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4", 
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]", 
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]", 
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"), children: _jsxs("div", { className: "flex flex-row items-center gap-3", children: [_jsx("div", { className: "flex size-10 items-center justify-center rounded-2xl", style: {
                        backgroundColor: color,
                    }, children: _jsx("span", { className: "text-lg", children: icon }) }), _jsxs("div", { className: "flex flex-col overflow-hidden", children: [_jsxs("figcaption", { className: "flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ", children: [_jsx("span", { className: "text-sm sm:text-lg", children: name }), _jsx("span", { className: "mx-1", children: "\u00B7" }), _jsx("span", { className: "text-xs text-gray-500", children: time })] }), _jsx("p", { className: "text-sm font-normal dark:text-white/60", children: description })] })] }) }));
};
export default function ContactPage({ className, }) {
    return (_jsx("div", { className: cn("relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl", className), children: _jsx(AnimatedList, { children: notifications.map((item, idx) => (_createElement(Notification, { ...item, key: idx }))) }) }));
}
