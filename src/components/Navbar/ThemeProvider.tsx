import { createContext, useContext, useEffect, useState } from "react";

// Define the possible theme values
type Theme = "dark" | "light" | "system";

// Props expected by the ThemeProvider component
type ThemeProviderProps = {
  children: React.ReactNode; // Components that will be wrapped by ThemeProvider
  defaultTheme?: Theme; // Optional default theme, defaults to "system"
  storageKey?: string; // Optional key to store theme in localStorage
};

// Interface for the Theme context value
type ThemeProviderState = {
  theme: Theme; // Current theme value
  setTheme: (theme: Theme) => void; // Function to update the theme
};

// Initial state used before the context is properly initialized
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null, // No-op placeholder
};

// Create a context to share theme data across the app
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// ThemeProvider component to wrap the application and provide theme context
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Initialize theme state from localStorage or fallback to default
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  // Effect to apply the appropriate theme class to the document root
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove any existing theme classes
    root.classList.remove("light", "dark");

    if (theme === "system") {
      // If theme is set to "system", match the OS preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    // Apply the selected theme class
    root.classList.add(theme);
  }, [theme]);

  // Value provided by the context, includes current theme and setter
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme); // Persist the theme choice
      setTheme(theme); // Update the state
    },
  };

  // Provide the theme context to child components
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to access the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  // Ensure the hook is used within a ThemeProvider
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
