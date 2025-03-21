import "./index.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
