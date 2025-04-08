import {
  MotionValue,
  motion,
  motionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

// Spring animation configuration for smooth digit transitions
const TRANSITION = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.3,
};

interface DigitProps {
  value: number;
  place: number;
}

// Renders a single digit that smoothly animates when it changes
function Digit({ value, place }: DigitProps) {
  // Extracts the digit at the current place (e.g., tens, hundreds, etc.)
  const valueRoundedToPlace = Math.floor(value / place) % 10;

  // Motion value initialized with current digit
  const initial = motionValue(valueRoundedToPlace);

  // Animated value using spring transition
  const animatedValue = useSpring(initial, TRANSITION);

  // Update animated value when digit changes
  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    // Wrapper for sliding digits, sets size and clipping behavior
    <div className="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums">
      {/* Invisible digit to maintain consistent width */}
      <div className="invisible">0</div>

      {/* Render all digits 0–9, only one is visible at a time via animation */}
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
}

// Represents an individual number (0–9) positioned and animated using motion
function Number({ mv, number }: NumberProps) {
  const uniqueId = useId(); // Unique ID for Framer Motion layout optimization
  const ref = useRef<HTMLSpanElement>(null);
  const [height, setHeight] = useState<number>(0);

  // Measure the height of the digit after it mounts
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  // Calculate vertical position based on current motion value and height
  const y = useTransform(mv, (latest) => {
    if (!height) return 0;

    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;

    // Animate in the shortest direction when wrapping from 9 to 0 or vice versa
    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  // Until height is known, render an invisible placeholder to measure
  if (!height) {
    return (
      <span ref={ref} className="invisible absolute">
        {number}
      </span>
    );
  }

  return (
    // Render animated digit, positioned absolutely within container
    <motion.span
      style={{ y }}
      layoutId={`${uniqueId}-${number}`}
      className="absolute inset-0 flex items-center justify-center"
      transition={TRANSITION}
      ref={ref}
    >
      {number}
    </motion.span>
  );
}

interface SlidingNumberProps {
  value: number;
  padStart?: boolean;
}

// Splits a numeric value into animated digits and renders them in sequence
function SlidingNumber({ value, padStart = false }: SlidingNumberProps) {
  const absValue = Math.abs(value); // Support for negative values
  const integerPart = absValue.toString();
  const integerValue = parseInt(integerPart, 10);

  // Pad values less than 10 with a leading zero if needed
  const paddedInteger =
    padStart && integerValue < 10 ? `0${integerPart}` : integerPart;

  const integerDigits = paddedInteger.split("");

  // Determine place value for each digit (e.g., 10, 1, etc.)
  const integerPlaces = integerDigits.map((_, i) =>
    Math.pow(10, integerDigits.length - i - 1),
  );

  return (
    // Container for a single full number (e.g., 05 or 12)
    <div className="flex items-center">
      {/* Display minus sign if value is negative */}
      {value < 0 && "-"}
      {/* Render each digit using the Digit component */}
      {integerDigits.map((_, index) => (
        <Digit
          key={`pos-${integerPlaces[index]}`}
          value={integerValue}
          place={integerPlaces[index]}
        />
      ))}
    </div>
  );
}

// Displays a real-time sliding clock using animated digits for hours, minutes, and seconds
export function SlidingNumberClock() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [ampm, setAmpm] = useState<string>("AM");

  // Set up a timer to update the time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format the time according to Indian Standard Time in 12-hour format
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };

      const timeString = now.toLocaleTimeString("en-IN", options);
      const [time, period] = timeString.split(" ");
      const [hourStr, minuteStr, secondStr] = time.split(":");

      setHours(parseInt(hourStr, 10));
      setMinutes(parseInt(minuteStr, 10));
      setSeconds(parseInt(secondStr, 10));
      setAmpm(period);
    };

    updateTime(); // Initialize time immediately
    const interval = setInterval(updateTime, 1000); // Schedule updates every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    // Clock layout displaying sliding digits for HH:MM:SS and AM/PM
    <div className="flex items-center font-mono">
      <SlidingNumber value={hours} padStart={true} />
      <span className="mx-0.5 text-blue-400">:</span>
      <SlidingNumber value={minutes} padStart={true} />
      <span className="mx-0.5 text-blue-400">:</span>
      <SlidingNumber value={seconds} padStart={true} />
      <span className="ml-1">{ampm}</span>
    </div>
  );
}
