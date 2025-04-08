import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { IconLayoutNavbarCollapse, IconX } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// Type definition for individual dock items
type DockItem = {
  id?: string;
  title: string;
  icon: React.ReactNode;
  href: string;
};

// Props for the main FloatingDock component
type FloatingDockProps = {
  items: DockItem[];
  activeItem?: string;
  desktopClassName?: string;
  mobileClassName?: string;
};

// Main FloatingDock component rendering both desktop and mobile versions
export const FloatingDock = ({
  items,
  activeItem,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        activeItem={activeItem}
        className={desktopClassName}
      />
      <FloatingDockMobile
        items={items}
        activeItem={activeItem}
        className={mobileClassName}
      />
    </>
  );
};

// Mobile version of the floating dock
const FloatingDockMobile = ({
  items,
  activeItem,
  className,
}: {
  items: DockItem[];
  activeItem?: string;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  // Close the menu if user clicks outside of the dock area
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && !(e.target as Element).closest(".floating-dock-mobile")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    // Container for mobile floating dock
    <div
      className={cn("floating-dock-mobile relative block md:hidden", className)}
    >
      <AnimatePresence>
        {open && (
          // Animated dropdown containing all dock items
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col items-center gap-2"
          >
            {items.map((item, idx) => {
              const isActive = activeItem === item.id;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.8,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: (items.length - 1 - idx) * 0.05,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Individual mobile dock button */}
                  <a
                    href={item.href}
                    key={item.title}
                    aria-label={item.title}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "relative flex h-10 w-10 items-center justify-center rounded-full",
                      isActive
                        ? "bg-gradient-to-r from-emerald-400/30 to-cyan-500/30 text-cyan-500"
                        : "bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700",
                    )}
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                    {/* Label badge on icon */}
                    <span className="absolute -top-1 -right-1 flex h-4 w-max min-w-4 items-center justify-center rounded-full bg-gray-100 px-1 text-[10px] font-semibold dark:bg-neutral-700">
                      {item.title}
                    </span>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button for mobile dock */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 backdrop-blur-sm transition-colors hover:from-emerald-400/30 hover:to-cyan-500/30"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        {/* Show close or menu icon based on open state */}
        {open ? (
          <IconX className="h-5 w-5 text-cyan-500" />
        ) : (
          <IconLayoutNavbarCollapse className="h-5 w-5 text-cyan-500" />
        )}
      </motion.button>
    </div>
  );
};

// Desktop version of the floating dock
const FloatingDockDesktop = ({
  items,
  activeItem,
  className,
}: {
  items: DockItem[];
  activeItem?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity); // Tracks cursor x position
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  return (
    // Horizontal dock container for desktop
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        setVisibleTooltip(null);
      }}
      className={cn(
        "mx-auto hidden h-16 items-start gap-4 rounded-2xl px-4 pt-3 md:flex",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          isActive={activeItem === item.id}
          onHover={(title) => setVisibleTooltip(title)}
          visibleTooltip={visibleTooltip}
          {...item}
        />
      ))}
    </motion.div>
  );
};

// Animated icon component used in the desktop dock
function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isActive,
  onHover,
  visibleTooltip,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
  onHover: (title: string | null) => void;
  visibleTooltip: string | null;
}) {
  let ref = useRef<HTMLDivElement>(null);

  // Calculate the distance of the cursor from the icon's center
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Size adjustments based on hover distance
  const baseSize = isActive ? 50 : 40;
  const hoverSize = isActive ? 90 : 80;

  // Animations for icon container scaling
  let widthTransform = useTransform(
    distance,
    [-150, 0, 150],
    [baseSize, hoverSize, baseSize],
  );
  let heightTransform = useTransform(
    distance,
    [-150, 0, 150],
    [baseSize, hoverSize, baseSize],
  );

  // Animations for icon scaling inside container
  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  // Spring transitions for smooth resizing
  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const showTooltip = visibleTooltip === title;

  return (
    <a
      href={href}
      aria-label={title}
      className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
    >
      <div className="relative">
        {/* Animated circular icon container */}
        <motion.div
          ref={ref}
          style={{ width, height }}
          onMouseEnter={() => onHover(title)}
          onMouseLeave={() => onHover(null)}
          onFocus={() => onHover(title)}
          onBlur={() => onHover(null)}
          className={cn(
            "flex aspect-square origin-top items-center justify-center rounded-full transition-colors",
            isActive
              ? "bg-gradient-to-r from-emerald-400/30 to-cyan-500/30"
              : "bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700",
          )}
        >
          {/* Icon inside the container */}
          <motion.div
            style={{ width: widthIcon, height: heightIcon }}
            className={cn(
              "flex items-center justify-center",
              isActive
                ? "text-cyan-500"
                : "text-neutral-600 dark:text-neutral-400",
            )}
          >
            {icon}
          </motion.div>

          {/* Active indicator dot */}
          {isActive && (
            <motion.div
              className="absolute -bottom-1 left-1/2 h-1 w-1 translate-x-[-50%] rounded-full bg-cyan-500"
              layoutId="active-indicator"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          )}
        </motion.div>

        {/* Tooltip showing icon title */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="absolute top-full left-1/2 mt-2 w-max -translate-x-1/2 rounded-md border border-cyan-500/20 bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 px-3 py-1 text-xs whitespace-pre text-cyan-600 backdrop-blur-sm dark:text-cyan-400"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </a>
  );
}
