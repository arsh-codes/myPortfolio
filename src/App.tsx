import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import HomePage from "@/pages/HomePage";
import { ModeToggle } from "./components/ModeToggle";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/ui/Preloader";

function App() {
  const [loader, setLoader] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  // Loader cleanup effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2250);

    return () => clearTimeout(timer);
  }, []);

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on page refresh or navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">{loader && <Preloader />}</AnimatePresence>

      <div className="relative flex h-full w-full flex-col scroll-smooth select-none">
        {/* Mode Toggle with improved animation */}
        <div
          className={`fixed z-50 transition-all duration-300 ${
            scrolling ? "top-5 right-8 scale-100" : "top-5 right-30 scale-105"
          }`}
        >
          <ModeToggle />
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
