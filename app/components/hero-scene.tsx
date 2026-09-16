"use client";

import { useRef, type ReactNode } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  type MotionStyle,
} from "framer-motion";

export function HeroScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        ref={ref}
        className="hero"
        aria-labelledby="hero-heading"
        style={
          { "--departure": reducedMotion ? 0 : scrollYProgress } as MotionStyle
        }
      >
        {children}
      </m.section>
    </LazyMotion>
  );
}
