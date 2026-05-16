import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}
export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      // Easing function: easeOutExpo
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      setCount(end * easeOut);
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);
  const formattedCount = count.
  toFixed(decimals).
  replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <span ref={ref}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>);

}