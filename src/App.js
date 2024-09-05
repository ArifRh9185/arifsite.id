import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ProjectPage from "./pages/ProjectPage.js";
import ContactPage from "./pages/ContactPage.js";
import NavbarComponent from "./pages/components/NavbarComponent.jsx";
import DotPattern from "./components/magicui/dot-pattern.js";
import { cn } from "./lib/utils.js";
import ShootingStars from "./components/ui/shooting-stars.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import DockComponent from "@/pages/components/DockComponent.jsx";
import FooterComponent from "@/pages/components/FooterComponent.jsx";
AOS.init({
    once: true
});
export default function App() {
    const location = useLocation();
    useEffect(() => {
        // Scroll to top of the page whenever the route changes
        window.scrollTo(0, 0);
    }, [location]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "px-3 w-full h-full bg-black text-white md:px-11 pb-24 sm:pb-0", children: [_jsx(NavbarComponent, {}), _jsx(DotPattern, { className: cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]") }), _jsx(ShootingStars, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", Component: HomePage }), _jsx(Route, { path: "/about", Component: AboutPage }), _jsx(Route, { path: "/project", Component: ProjectPage }), _jsx(Route, { path: "/contact", Component: ContactPage })] }, location.pathname), _jsx(FooterComponent, {}), _jsx(DockComponent, {})] }) }));
}
