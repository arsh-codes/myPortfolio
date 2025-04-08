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

type DockItem = {
  id?: string;
  title: string;
  icon: React.ReactNode;
  href: string;
};

type FloatingDockProps = {
  items: DockItem[];
  activeItem?: string;
  desktopClassName?: string;
  mobileClassName?: string;
};

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

  // Close mobile menu when clicking outside
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
    <div
      className={cn("floating-dock-mobile relative block md:hidden", className)}
    >
      <AnimatePresence>
        {open && (
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
        {open ? (
          <IconX className="h-5 w-5 text-cyan-500" />
        ) : (
          <IconLayoutNavbarCollapse className="h-5 w-5 text-cyan-500" />
        )}
      </motion.button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  activeItem,
  className,
}: {
  items: DockItem[];
  activeItem?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  return (
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

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Make the active item slightly larger by default
  const baseSize = isActive ? 50 : 40;
  const hoverSize = isActive ? 90 : 80;

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

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

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
