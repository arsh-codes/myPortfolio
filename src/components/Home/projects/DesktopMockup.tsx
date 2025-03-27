import React from "react";

interface DesktopMockupProps {
  websiteUrl?: string;
  altText?: string;
}

const DesktopMockup: React.FC<DesktopMockupProps> = ({
  websiteUrl,
  altText = "Desktop Mockup",
}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Outer Container */}
      <div className="relative mx-auto h-[172px] w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 md:h-[294px] md:w-[512px] dark:border-gray-800">
        {/* Screen Container */}
        <div className="flex h-[156px] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-200 md:h-[278px] dark:bg-gray-800">
          {websiteUrl ? (
            <iframe
              src={websiteUrl}
              title={altText}
              scrolling="no"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                overflow: "hidden",
                pointerEvents: "none", // Prevents interaction
                userSelect: "none", // Prevents text selection
                backgroundColor: "#fff", // Ensures visibility
              }}
            />
          ) : (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              No preview available
            </span>
          )}
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="relative mx-auto h-[17px] w-[351px] rounded-t-sm rounded-b-xl bg-gray-900 md:h-[21px] md:w-[597px] dark:bg-gray-700">
        <div className="absolute top-0 left-1/2 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-[8px] md:w-[96px]"></div>
      </div>
    </div>
  );
};

export default DesktopMockup;
