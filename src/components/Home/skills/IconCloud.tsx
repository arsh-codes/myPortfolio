import {
  Cloud,
  ICloud,
  SimpleIcon,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";
import { useEffect, useMemo, useState } from "react";

import { useTheme } from "@/components/Navbar/ThemeProvider";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 0,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 1.75,
    activeCursor: "help",
    tooltip: "native",
    initial: [0.2, -0.2],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.01,
    dragControl: true,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"; // Background color

  // Icons that should always be white in dark mode
  const forceWhiteIcons = new Set([
    "apple",
    "notion",
    "steam",
    "vercel",
    "express",
    "react",
  ]);

  // Set fallback color
  const fallbackHex =
    theme === "dark" && forceWhiteIcons.has(icon.slug)
      ? "#ffffff"
      : theme === "light"
        ? "#6e6e73"
        : "#ffffff";

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio: theme === "dark" ? 2 : 1.5,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs, theme]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons && renderedIcons.length > 0 ? renderedIcons : null}
    </Cloud>
  );
}
