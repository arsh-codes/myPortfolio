import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import HomePage from "@/pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/ui/Preloader";

function App() {
  const [loader, setLoader] = useState(true);

  // Loader cleanup effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loader && <Preloader />}</AnimatePresence>
      <div className="relative flex h-full w-full flex-col scroll-smooth select-none">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
