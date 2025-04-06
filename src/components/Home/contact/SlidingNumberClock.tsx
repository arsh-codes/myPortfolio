"use client";

import {
  MotionValue,
  motion,
  motionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

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

function Digit({ value, place }: DigitProps) {
  const valueRoundedToPlace = Math.floor(value / place) % 10;
  const initial = motionValue(valueRoundedToPlace);
  const animatedValue = useSpring(initial, TRANSITION);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums">
      <div className="invisible">0</div>
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

function Number({ mv, number }: NumberProps) {
  const uniqueId = useId();
  const ref = useRef<HTMLSpanElement>(null);
  const [height, setHeight] = useState<number>(0);

  // Get element height after first render
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const y = useTransform(mv, (latest) => {
    if (!height) return 0;
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  // don't render the animated number until we know the height
  if (!height) {
    return (
      <span ref={ref} className="invisible absolute">
        {number}
      </span>
    );
  }

  return (
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

function SlidingNumber({ value, padStart = false }: SlidingNumberProps) {
  const absValue = Math.abs(value);
  const integerPart = absValue.toString();
  const integerValue = parseInt(integerPart, 10);
  const paddedInteger =
    padStart && integerValue < 10 ? `0${integerPart}` : integerPart;
  const integerDigits = paddedInteger.split("");
  const integerPlaces = integerDigits.map((_, i) =>
    Math.pow(10, integerDigits.length - i - 1),
  );

  return (
    <div className="flex items-center">
      {value < 0 && "-"}
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

export function SlidingNumberClock() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [ampm, setAmpm] = useState<string>("AM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
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

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
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
