import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiHomeSmileLine } from "react-icons/ri";
import { ImLeaf } from "react-icons/im";
import { motion } from "framer-motion";
import { SiPolymerproject } from "react-icons/si";
import { IconBoxAlignRightFilled, IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, } from "@tabler/icons-react";
import { cn } from "@/lib/utils.js";
const instagram = _jsx(FaInstagram, {});
const facebook = _jsx(FaFacebook, {});
const github = _jsx(FaGithub, {});
const home = _jsx(RiHomeSmileLine, {});
const about = _jsx(ImLeaf, {});
const project = _jsx(SiPolymerproject, {});
export const navLinks = [
    {
        id: 1,
        path: '',
        text: 'Home Page',
        icon: home
    },
    {
        id: 2,
        path: 'about',
        text: 'About Me',
        icon: about
    },
    {
        id: 3,
        path: 'project',
        text: 'My Project',
        icon: project
    }
];
export const logoComponents = [
    {
        id: 1,
        logoName: 'Arif Site.id',
        logoImg: 1,
        path: ''
    }
];
export const socialLinks = [
    {
        icon: instagram,
        name: 'instagram',
        href: 'https://www.instagram.com/aaa.pinnn/'
    },
    {
        icon: facebook,
        name: 'facebook',
        href: 'https://www.facebook.com/avenged.arifsevenfold/'
    },
    {
        icon: github,
        name: 'github',
        href: 'https://github.com/arifrh9185'
    },
];
export const content = [
    {
        title: "Editing Skills",
        description: "I have skills in photo and video editing using various applications, both on mobile devices and desktop. I am experienced in using apps like PicsArt, CapCut, VN, and Canva for mobile editing, and I have beginner-level knowledge of Photoshop for desktop editing. Additionally, I can create logos.",
        content: (_jsx("div", { className: "h-full bg-pink-700 w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white", children: "Collaborative Editing" })),
    },
    {
        title: "Real time changes",
        description: "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (_jsx("div", { className: "h-full w-full bg-yellow-600  flex items-center justify-center text-white" })),
    },
    {
        title: "Version control",
        description: "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (_jsx("div", { className: "h-full bg-green-700 w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white", children: "Version control" })),
    },
    {
        title: "Running out of content",
        description: "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (_jsx("div", { className: "h-full bg-purple-700 w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white", children: "Running out of content" })),
    },
];
export const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];
export const projects = [
    {
        title: "Branding Design",
        description: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people",
    },
    {
        title: "Web Design",
        description: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people",
    },
    {
        title: "UI/UX Design",
        description: "I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people",
    },
    {
        title: "Graphic Design",
        description: "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    },
    {
        title: "Doodle Art",
        description: "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    },
    {
        title: "Logo Design",
        description: "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    },
];
export const Icons = {
    gitHub: (props) => (_jsx("svg", { viewBox: "0 0 438.549 438.549", ...props, children: _jsx("path", { fill: "currentColor", d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" }) })),
    notion: (props) => (_jsxs("svg", { width: "100", height: "100", viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: [_jsx("path", { d: "M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z", fill: "#fff" }), _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z", fill: "#000" })] })),
    googleDrive: (props) => (_jsxs("svg", { viewBox: "0 0 87.3 78", xmlns: "http://www.w3.org/2000/svg", ...props, children: [_jsx("path", { d: "m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z", fill: "#0066da" }), _jsx("path", { d: "m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z", fill: "#00ac47" }), _jsx("path", { d: "m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z", fill: "#ea4335" }), _jsx("path", { d: "m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z", fill: "#00832d" }), _jsx("path", { d: "m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z", fill: "#2684fc" }), _jsx("path", { d: "m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z", fill: "#ffba00" })] })),
    whatsapp: (props) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 175.216 175.552", ...props, children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: "b", x1: "85.915", x2: "86.535", y1: "32.567", y2: "137.092", gradientUnits: "userSpaceOnUse", children: [_jsx("stop", { offset: "0", stopColor: "#57d163" }), _jsx("stop", { offset: "1", stopColor: "#23b33a" })] }), _jsx("filter", { id: "a", width: "1.115", height: "1.114", x: "-.057", y: "-.057", colorInterpolationFilters: "sRGB", children: _jsx("feGaussianBlur", { stdDeviation: "3.531" }) })] }), _jsx("path", { fill: "#b3b3b3", d: "m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0", filter: "url(#a)" }), _jsx("path", { fill: "#fff", d: "m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" }), _jsx("path", { fill: "url(#linearGradient1780)", d: "M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" }), _jsx("path", { fill: "url(#b)", d: "M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" }), _jsx("path", { fill: "#fff", fillRule: "evenodd", d: "M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" })] })),
};
const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };
    return (_jsxs(motion.div, { initial: "initial", whileHover: "animate", className: "flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2", children: [_jsxs(motion.div, { variants: variants, className: "flex flex-row rounded-full border border-white/[0.2] p-2  items-center space-x-2 bg-black", children: [_jsx("div", { className: "h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" }), _jsx("div", { className: "w-full h-4 rounded-full bg-neutral-900" })] }), _jsxs(motion.div, { variants: variantsSecond, className: "flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black", children: [_jsx("div", { className: "w-full h-4 rounded-full bg-neutral-900" }), _jsx("div", { className: "h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" })] }), _jsxs(motion.div, { variants: variants, className: "flex flex-row rounded-full border border-white/[0.2] p-2 items-center space-x-2 bg-black", children: [_jsx("div", { className: "h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" }), _jsx("div", { className: "w-full h-4 rounded-full bg-neutral-900" })] })] }));
};
const SkeletonTwo = () => {
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.2,
            },
        },
        hover: {
            width: ["0%", "100%"],
            transition: {
                duration: 2,
            },
        },
    };
    const arr = new Array(6).fill(0);
    return (_jsx(motion.div, { initial: "initial", animate: "animate", whileHover: "hover", className: "flex flex-1 w-full h-full min-h-[6rem bg-dot-white/[0.2] flex-col space-y-2", children: arr.map((_, i) => (_jsx(motion.div, { variants: variants, style: {
                maxWidth: Math.random() * (100 - 40) + 40 + "%",
            }, className: "flex flex-row rounded-full border -10 border-white/[0.2] p-2  items-center space-x-2  bg-black w-full h-4" }, "skelenton-two" + i))) }));
};
const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (_jsx(motion.div, { initial: "initial", animate: "animate", variants: variants, transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
        }, className: "flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2", style: {
            background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
            backgroundSize: "400% 400%",
        }, children: _jsx(motion.div, { className: "h-full w-full rounded-lg" }) }));
};
const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (_jsxs(motion.div, { initial: "initial", animate: "animate", whileHover: "hover", className: "flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-row space-x-2", children: [_jsxs(motion.div, { variants: first, className: "h-full w-1/3 rounded-2xl bg-black border-white/[0.1] border flex flex-col items-center justify-center", children: [_jsx("img", { src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/03/3476976010-2499575056.jpg", alt: "avatar", height: "100", width: "100", className: "rounded-full h-10 w-10" }), _jsx("p", { className: "sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4", children: "Store Crew" }), _jsx("p", { className: "border border-red-500 bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4", children: "2018-2020" })] }), _jsxs(motion.div, { className: "h-full relative z-20 w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center", children: [_jsx("img", { src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/03/3476976010-2499575056.jpg", alt: "avatar", height: "100", width: "100", className: "rounded-full h-10 w-10" }), _jsx("p", { className: "sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4", children: "Store Junior Leader" }), _jsx("p", { className: "border border-green-500 b bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4", children: "2020-2021" })] }), _jsxs(motion.div, { variants: second, className: "h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center", children: [_jsx("img", { src: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/03/3476976010-2499575056.jpg", alt: "avatar", height: "100", width: "100", className: "rounded-full h-10 w-10" }), _jsx("p", { className: "sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4", children: "Store Senior Leader" }), _jsx("p", { className: "border border-orange-500 bg bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4", children: "2021-2023" })] })] }));
};
const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };
    return (_jsx(motion.div, { initial: "initial", whileHover: "animate", className: "flex flex-1 w-full h-full min-h-[5rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2", children: _jsxs(motion.div, { variants: variants, className: "flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-black", children: [_jsx("img", { src: "https://boxies123.co.id/wp-content/uploads/2019/11/Ace.png", alt: "avatar", height: "100", width: "100", className: "rounded-full h-10 w-10" }), _jsx("p", { className: "text-xs text-neutral-500", children: "Giving information, suggest our product and improve seller skils" })] }) }));
};
export const items = [
    {
        title: "Apprenticeship",
        description: (_jsxs("span", { className: "text-sm", children: [_jsx("b", { children: "Pt.Giant Tbk, " }), "Experience build great teamwork"] })),
        header: _jsx(SkeletonOne, {}),
        className: "md:col-span-1",
        icon: _jsx(IconClipboardCopy, { className: "h-4 w-4 text-neutral-500" }),
    },
    {
        title: "Maintenance Work",
        description: (_jsxs("span", { className: "text-sm", children: [_jsx("b", { children: "Pt.Giant Tbk, " }), "Handle the maintenance department"] })),
        header: _jsx(SkeletonTwo, {}),
        className: "md:col-span-1",
        icon: _jsx(IconFileBroken, { className: "h-4 w-4 text-neutral-500" }),
    },
    {
        title: "Contextual Suggestions",
        description: (_jsx(_Fragment, { children: _jsx("span", { className: "text-sm", children: "Get AI-powered suggestions based on your writing context." }) })),
        header: _jsx(SkeletonThree, {}),
        className: "md:col-span-1",
        icon: _jsx(IconSignature, { className: "h-4 w-4 text-neutral-500" }),
    },
    {
        title: "Store Leader",
        description: (_jsxs("span", { className: "text-sm", children: [_jsx("b", { children: "Pt. Indomarco Priosmatama Tbk, " }), "Build up performance store "] })),
        header: _jsx(SkeletonFour, {}),
        className: "md:col-span-2",
        icon: _jsx(IconTableColumn, { className: "h-4 w-4 text-neutral-500" }),
    },
    {
        title: "Sales Executive",
        description: (_jsxs("span", { className: "text-sm", children: [_jsx("b", { children: "Pt. Aspirasi Hidup Indonesia Tbk, " }), "Product specialist and Salesman"] })),
        header: _jsx(SkeletonFive, {}),
        className: "md:col-span-1",
        icon: _jsx(IconBoxAlignRightFilled, { className: "h-4 w-4 text-neutral-500" }),
    },
];
export const reviews = [
    {
        name: "Tailwind",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png",
    },
    {
        name: "HTML",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png",
    },
    {
        name: "CSS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
    },
    {
        name: "JavaScript",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
        name: "Node JS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png",
    },
    {
        name: "SASS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/800px-Sass_Logo_Color.svg.png",
    },
    {
        name: "Bootstrap",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    },
    {
        name: "React.js",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png",
    },
    {
        name: "Vite",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png?20220412224743",
    },
    {
        name: "Framer Motion",
        img: "https://logowik.com/content/uploads/images/framer-icon2440.logowik.com.webp",
    },
    {
        name: "Git",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/97px-Git_icon.svg.png?20220905010122",
    },
    {
        name: "React Router",
        img: "https://www.svgrepo.com/show/354262/react-router.svg",
    },
];
export const ReviewCard = ({ img, name, }) => {
    return (_jsx("figure", { className: cn("relative cursor-pointer overflow-hidden rounded-full py-1 flex px-4 shadow-md shadow-neutral-700", 
        // light styles
        "border-gray-950/[.3] hover:bg-neutral-950/[.05]", 
        // dark styles
        "dark:border-gray-50/[.3] dark:hover:bg-neutral-50/[.15]"), children: _jsxs("div", { className: "flex flex-row items-center gap-2", children: [_jsx("img", { className: "rounded-full", width: "20", height: "20", alt: "", src: img }), _jsx("div", { className: "flex flex-col", children: _jsx("figcaption", { className: "text-sm font-medium dark:text-white", children: name }) })] }) }));
};
