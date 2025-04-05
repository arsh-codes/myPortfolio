export default function Footer() {
  return (
    <footer className="mt-4 lg:mt-2 w-full border-t border-neutral-200 py-3 dark:border-neutral-800">
      <div className="w-full text-center text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
        {" "}
        Designed and Developed with <span className="animate-pulse">❤️</span> by
        Arshdeep Singh | 🅮 {new Date().getFullYear()}{" "}
      </div>
    </footer>
  );
}
