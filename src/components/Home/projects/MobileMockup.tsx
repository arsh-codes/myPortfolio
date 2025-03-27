import React from "react";

interface MobileMockupProps {
  websiteUrl: string;
  altText?: string;
}

const MobileMockup: React.FC<MobileMockupProps> = ({
  websiteUrl,
  altText = "Mobile Mockup",
}) => {
  return (
    <div className="relative mx-auto h-[540px] w-[270px] rounded-[2.25rem] border-[12.6px] border-gray-800 bg-gray-800 dark:border-gray-800">
      {/* Side Buttons */}
      <div className="absolute -start-[15.3px] top-[64.8px] h-[28.8px] w-[2.7px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -start-[15.3px] top-[111.6px] h-[41.4px] w-[2.7px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -start-[15.3px] top-[160.2px] h-[41.4px] w-[2.7px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -end-[15.3px] top-[127.8px] h-[57.6px] w-[2.7px] rounded-e-lg bg-gray-800 dark:bg-gray-800"></div>

      {/* Screen */}
      <div className="h-[514.8px] w-[244.8px] overflow-hidden rounded-[1.8rem] bg-white dark:bg-gray-800">
        {/* Embedded Website */}
        <iframe
          src={websiteUrl}
          title={altText}
          scrolling="no"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            overflow: "hidden",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
};

export default MobileMockup;
