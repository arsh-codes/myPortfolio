"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useTheme } from "@/components/Navbar/ThemeProvider";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const { theme } = useTheme();
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  // Choose style based on theme
  const syntaxStyle = theme === "dark" ? atomDark : oneLight;

  // atomDark,
  // darcula,

  return (
    <div className="bg-muted relative w-full rounded-md pb-4 text-sm transition-colors lg:max-w-fit lg:text-sm">
      <div
        className={`flex flex-col gap-2 rounded-t-lg px-4 py-2 ${theme === "dark" ? "bg-[#131c2b]" : "bg-[#cbd5e1]"}`}
      >
        {tabsExist && (
          <div className="flex overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-2 font-sans text-xs transition-colors ${
                  activeTab === index
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex items-center justify-between py-2">
            <div className="flex flex-row items-center gap-2">
              <div className="flex gap-1">
                <button
                  className="h-2.5 w-2.5 rounded-full bg-red-500"
                  title="Close"
                />
                <button
                  className="h-2.5 w-2.5 rounded-full bg-yellow-500"
                  title="Minimize"
                />
                <button
                  className="h-2.5 w-2.5 rounded-full bg-green-500"
                  title="Maximize"
                />
              </div>
              <div className="text-muted-foreground text-xs">{filename}</div>
            </div>
            <button
              onClick={copyToClipboard}
              className="text-muted-foreground hover:text-foreground flex items-center gap-1 font-sans text-xs transition-colors"
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            </button>
          </div>
        )}
      </div>
      <SyntaxHighlighter
        language={activeLanguage}
        style={syntaxStyle}
        customStyle={{
          margin: 0,
          padding: 10,
          background: "transparent",
          fontSize: "0.875rem",
          fontFamily: "Ubuntu",
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber)
              ? theme === "dark"
                ? "rgba(255,255,255,0.05)" // Light highlight for dark mode
                : "rgba(0,0,0,0.05)" // Dark highlight for light mode
              : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
};
