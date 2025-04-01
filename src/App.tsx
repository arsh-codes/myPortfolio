import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import HomePage from "@/pages/HomePage";
import { ModeToggle } from "./components/ModeToggle";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/ui/Preloader";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2250);
  }, []);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loader && <Preloader />}</AnimatePresence>
      <div className="relative flex h-full w-full flex-col scroll-smooth select-none">
        {/* Mode Toggle in top-right */}
        <div
          className={`fixed z-50 transition-all duration-400 ${
            scrolling
              ? " top-5 right-8" // After scrolling, move to right-8 top-8
              : "top-5 right-30" // Initial position
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
