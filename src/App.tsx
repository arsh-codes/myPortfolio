import {
  Book,
  Briefcase,
  Code,
  FileText,
  Folder,
  Home,
  Mail,
  User,
} from "lucide-react";
import { Route, Routes } from "react-router-dom";

import { FloatingDock } from "@/components/ui/FloatingDock";
import HomePage from "@/pages/HomePage";
import { ModeToggle } from "./components/ModeToggle";

function App() {
  const dockItems = [
    { title: "Home", icon: <Home />, href: "/" },
    { title: "About Me", icon: <User />, href: "/about" },
    { title: "Skills", icon: <Code />, href: "/skills" },
    { title: "Projects", icon: <Folder />, href: "/projects" },
    { title: "Experience", icon: <Briefcase />, href: "/experience" },
    { title: "Blog", icon: <Book />, href: "/blog" },
    { title: "Resume", icon: <FileText />, href: "/resume" },
    { title: "Contact", icon: <Mail />, href: "/contact-me" },
  ];

  return (
    <div className="relative flex h-full w-full">
      {/* Mode Toggle in top-right */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {/* Floating Dock */}
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-0 left-1/2 transform -translate-x-1/2 backdrop-blur-md p-3 rounded-2xl shadow-lg"
        mobileClassName="fixed bottom-0 left-0 w-full  backdrop-blur-md p-2 rounded-t-2xl shadow-md"
      />
    </div>
  );
}

export default App;
