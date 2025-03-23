"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedResumeButtonProps {
  resume: string;
  className?: string;
}

export const AnimatedResumeButton: React.FC<AnimatedResumeButtonProps> = ({
  resume,
  className,
}) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Arshdeep_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloaded(true);

    setTimeout(() => {
      setIsDownloaded(false);
    }, 5000);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.button
        className={cn(
          "bg-secondary text-primary-background relative flex h-10 w-fit items-center justify-center gap-2 rounded-lg px-6 font-semibold transition-all",
          className,
        )}
        onClick={handleDownload}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.span
          key={isDownloaded ? "downloaded" : "download"}
          className="flex items-center justify-center gap-2"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
        >
          {!isDownloaded && <Download size={16} />}{" "}
          {isDownloaded ? "Downloaded" : "Resume"}
        </motion.span>
      </motion.button>
    </AnimatePresence>
  );
};
