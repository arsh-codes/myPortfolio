import { Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import HomePage from "@/pages/HomePage";
import { ModeToggle } from "./components/ModeToggle";
import Preloader from "./components/ui/Preloader";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2250);
  }, []);

  return (
    <>
      {/* <AnimatePresence mode="wait">{loader && <Preloader />}</AnimatePresence> */}
      <div className="relative flex h-full w-full scroll-smooth select-none">
        {/* Mode Toggle in top-right */}
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
// ("use client");
