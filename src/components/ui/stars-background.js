"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils.js";
import { useState, useEffect, useRef, useCallback, } from "react";
export const Star = ({ x, y, radius, opacity, twinkleSpeed, }) => (_jsx("circle", { cx: x, cy: y, r: radius, fill: "white", opacity: opacity, children: twinkleSpeed !== null && (_jsx("animate", { attributeName: "opacity", values: `${opacity};${opacity * 0.3};${opacity}`, dur: `${twinkleSpeed}s`, repeatCount: "indefinite" })) }));
export const StarsBackground = ({ starDensity = 0.00015, allStarsTwinkle = true, twinkleProbability = 0.7, minTwinkleSpeed = 0.5, maxTwinkleSpeed = 1, className, }) => {
    const [stars, setStars] = useState([]);
    const containerRef = useRef(null);
    const generateStars = useCallback((width, height) => {
        const area = width * height;
        const numStars = Math.floor(area * starDensity);
        return Array.from({ length: numStars }, () => {
            const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 0.05 + 0.5,
                opacity: Math.random() * 0.5 + 0.5,
                twinkleSpeed: shouldTwinkle
                    ? minTwinkleSpeed +
                        Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                    : null,
            };
        });
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
    ]);
    useEffect(() => {
        const updateStars = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setStars(generateStars(width, height));
            }
        };
        updateStars();
        const resizeObserver = new ResizeObserver(updateStars);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
        generateStars,
    ]);
    return (_jsx("div", { ref: containerRef, className: cn("h-full w-full absolute inset-0", className), children: _jsxs("svg", { preserveAspectRatio: "none", className: "h-full w-full bg-transparent", children: [_jsx("rect", { width: "100%", height: "100%", fill: "none" }), stars.map((star, index) => (_jsx(Star, { ...star }, index)))] }) }));
};
