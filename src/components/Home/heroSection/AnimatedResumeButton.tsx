// Importing animation components from Framer Motion
import { AnimatePresence, motion } from "motion/react";
// Importing React and useState hook for state management
import React, { useState } from "react";

// Icon for download functionality
import { Download } from "lucide-react";
// Utility function for conditional className merging
import { cn } from "@/lib/utils";

// Props interface defining the shape of accepted props
interface AnimatedResumeButtonProps {
  resume: string; // URL to the resume file
  className?: string; // Optional additional class names for styling
}

// Functional component for an animated resume download button
export const AnimatedResumeButton: React.FC<AnimatedResumeButtonProps> = ({
  resume,
  className,
}) => {
  // Local state to track whether the resume has been downloaded
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Handles the resume download logic
  const handleDownload = () => {
    // Create a temporary anchor tag to trigger download
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Arshdeep_Singh_Resume.pdf"; // Specifies the downloaded file name
    document.body.appendChild(link);
    link.click(); // Programmatically trigger click
    document.body.removeChild(link); // Clean up the DOM

    // Update state to indicate the resume has been downloaded
    setIsDownloaded(true);

    // Reset the download state after 5 seconds
    setTimeout(() => {
      setIsDownloaded(false);
    }, 5000);
  };

  return (
    // AnimatePresence handles mounting/unmounting animations
    <AnimatePresence mode="wait">
      {/* Motion-enabled button with entrance/exit animations */}
      <motion.button
        className={cn(
          "bg-secondary text-primary-background relative flex h-10 w-fit items-center justify-center gap-2 rounded-lg px-6 font-semibold transition-all",
          className,
        )}
        onClick={handleDownload} // Triggers download logic on click
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animate to full visibility
        exit={{ opacity: 0 }} // Fade out on unmount
      >
        {/* Animated span that changes content based on download state */}
        <motion.span
          key={isDownloaded ? "downloaded" : "download"} // Key triggers re-animation
          className="flex items-center justify-center gap-2"
          initial={{ y: -10 }} // Slide in from above
          animate={{ y: 0 }} // Settle into place
        >
          {/* Conditionally show download icon */}
          {!isDownloaded && <Download size={16} />}{" "}
          {/* Toggle button label based on download state */}
          {isDownloaded ? "Downloaded" : "Resume"}
        </motion.span>
      </motion.button>
    </AnimatePresence>
  );
};
