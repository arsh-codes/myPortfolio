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

import { Button } from "@/components/ui/button";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  const dockItems = [
    { title: "Home", icon: <Home />, href: "/" },
    { title: "About Me", icon: <User />, href: "/about" },
    { title: "Skills", icon: <Code />, href: "/skills" },
    { title: "Projects", icon: <Folder />, href: "/projects" },
    { title: "Experience", icon: <Briefcase />, href: "/experience" },
    { title: "Blog", icon: <Book />, href: "/blog" },
    { title: "Resume", icon: <FileText />, href: "/resume" },
    { title: "Contact", icon: <Mail />, href: "/contact" },
  ];
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <FloatingDock
        items={dockItems}
        desktopClassName="bottom-0 absolute "
        mobileClassName=""
      />
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      hello
    </div>
  );
}

export default App;

// export default function App() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
//       🚀 Vite is Running!
//     </div>
//   );
// }
