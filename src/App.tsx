import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import NavbarComponent from "./pages/components/NavbarComponent";
import DotPattern from "./components/magicui/dot-pattern";
import { cn } from "./lib/utils";
import ShootingStars from "./components/ui/shooting-stars";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import DockComponent from "@/pages/components/DockComponent"
import FooterComponent from "@/pages/components/FooterComponent"

AOS.init({
  once:true
});

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="px-3 w-full h-full bg-black text-white md:px-11 pb-24 sm:pb-0">
        <NavbarComponent />
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <ShootingStars />


        <Routes key={location.pathname}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/project" Component={ProjectPage} />
          <Route path="/contact" Component={ContactPage} />
        </Routes>
        <FooterComponent/>
        <DockComponent />

      </div>


    </>
  );
}
