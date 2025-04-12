// Footer component — displays the footer section at the bottom of the page
export default function Footer() {
  return (
    // Semantic <footer> element with responsive margins, padding, and a top border
    <footer className="w-full border-t border-neutral-200 py-3 lg:mt-2 dark:border-neutral-800">
      {/* Container for footer text, centered and styled responsively for light and dark themes */}
      <div className="w-full text-center text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
        {/* Footer message with animated heart and current year rendered dynamically */}
        Designed and Developed with <span className="animate-pulse">❤️</span> by
        Arshdeep Singh | 🅮 {new Date().getFullYear()}
      </div>
    </footer>
  );
}
