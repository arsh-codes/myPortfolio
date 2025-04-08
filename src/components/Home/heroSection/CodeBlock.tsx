import { IconCheck, IconCopy } from "@tabler/icons-react";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useTheme } from "@/components/Navbar/ThemeProvider";

// Props definition for the CodeBlock component
type CodeBlockProps = {
  language: string; // Default language for syntax highlighting
  filename: string; // Filename to display in single-file mode
  highlightLines?: number[]; // Optional list of line numbers to highlight
} & // Either a single code block or a tabbed interface with multiple code blocks
(| {
      code: string; // Code string for single-file mode
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string; // Tab name
        code: string; // Code string for the tab
        language?: string; // Optional language override per tab
        highlightLines?: number[]; // Optional line highlights per tab
      }>;
    }
);

// Main CodeBlock component definition
export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const { theme } = useTheme(); // Get current theme (light/dark)
  const [copied, setCopied] = React.useState(false); // Clipboard copy state
  const [activeTab, setActiveTab] = React.useState(0); // Index of currently active tab

  const tabsExist = tabs.length > 0; // Determine if tabs are present

  // Handles copying code to clipboard
  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  // Determine active values based on tab state
  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  // Select syntax highlighting theme based on current UI theme
  const syntaxStyle = theme === "dark" ? atomDark : oneLight;

  return (
    // Root container for the code block
    <div className="bg-muted relative w-full rounded-md pb-4 text-sm transition-colors lg:max-w-fit lg:text-sm">
      {/* Header section for tabs or filename */}
      <div
        className={`flex flex-col gap-2 rounded-t-lg px-4 py-2 ${theme === "dark" ? "bg-[#131c2b]" : "bg-[#cbd5e1]"}`}
      >
        {/* Render tab buttons if multiple tabs are present */}
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

        {/* Render filename bar and copy button in single-file mode */}
        {!tabsExist && filename && (
          <div className="flex items-center justify-between py-2">
            <div className="flex flex-row items-center gap-2">
              {/* Simulated macOS-style window controls */}
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
              {/* Filename display */}
              <div className="text-muted-foreground text-xs">{filename}</div>
            </div>
            {/* Clipboard copy button */}
            <button
              onClick={copyToClipboard}
              className="text-muted-foreground hover:text-foreground flex items-center gap-1 font-sans text-xs transition-colors"
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            </button>
          </div>
        )}
      </div>

      {/* Syntax highlighter block for rendering code */}
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
                ? "rgba(255,255,255,0.05)" // Highlight color for dark theme
                : "rgba(0,0,0,0.05)" // Highlight color for light theme
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
