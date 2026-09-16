"use client";

import { useCallback, useRef, useSyncExternalStore } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  type MotionStyle,
} from "framer-motion";
import { Icon } from "./icons";

const motionQuery =
  "(min-width: 801px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function getSnapshot() {
  return window.matchMedia(motionQuery).matches;
}
function getServerSnapshot() {
  return false;
}

const steps = [
  {
    title: "This is annoying.",
    copy: "Do the same thing three times. Start questioning everything.",
    label: "THE PROBLEM",
    terminal: "$ notice a very avoidable problem",
  },
  {
    title: "What if I just…",
    copy: "One questionable idea. A new folder. There goes the weekend.",
    label: "THE IDEA",
    terminal: "$ mkdir probably-a-bad-idea",
  },
  {
    title: "Okay, it works.",
    copy: "Connect the parts. Break it a few times. Make it useful.",
    label: "THE PROTOTYPE",
    terminal: "$ bun run make-it-work",
  },
  {
    title: "Oops. A real product.",
    copy: "Ship it. Let someone else try it. Find the next annoying thing.",
    label: "THE SHIP",
    terminal: "✓ shipped. back to finding problems.",
  },
];

export function BuildSequence() {
  const ref = useRef<HTMLElement>(null);
  const enabled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const current = useSyncExternalStore(
    useCallback(
      (callback: () => void) => scrollYProgress.on("change", callback),
      [scrollYProgress],
    ),
    useCallback(
      () =>
        enabled
          ? Math.min(3, Math.max(0, Math.floor(scrollYProgress.get() * 4)))
          : 3,
      [enabled, scrollYProgress],
    ),
    () => 3,
  );

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        ref={ref}
        id="build-loop"
        className={`build-sequence ${enabled ? "sequence-enhanced" : ""}`}
        aria-labelledby="sequence-heading"
        data-step={current}
        style={
          { "--build-progress": enabled ? scrollYProgress : 1 } as MotionStyle
        }
      >
        <div className="sequence-sticky">
          <div className="sequence-heading">
            <div>
              <span className="eyebrow">A quick look inside my head</span>
              <h2 id="sequence-heading">
                It usually starts
                <br />
                with <span>“this is annoying.”</span>
              </h2>
            </div>
            <a href="#experience" className="sequence-skip">
              Skip to the things <Icon name="arrow-down" />
            </a>
          </div>

          <div className="sequence-grid">
            <ol className="sequence-steps">
              {steps.map((step, index) => (
                <li
                  key={step.label}
                  data-active={current === index}
                  aria-current={
                    enabled && current === index ? "step" : undefined
                  }
                >
                  <span className="sequence-step-number">0{index + 1}</span>
                  <div>
                    <span className="eyebrow">{step.label}</span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="sequence-desk" aria-hidden="true">
              <div className="sequence-desk-grid" />
              <span className="sequence-coordinate">
                BRAIN.DUMP / {String(current + 1).padStart(2, "0")}
              </span>
              <svg className="sequence-wire" viewBox="0 0 500 380" fill="none">
                <path
                  className="wire-guide"
                  d="M100 85C235 50 100 240 240 200S415 215 375 310"
                />
                <m.path
                  d="M100 85C235 50 100 240 240 200S415 215 375 310"
                  style={{ pathLength: enabled ? scrollYProgress : 1 }}
                />
              </svg>
              <div className="sequence-note">
                <span>THINGS I DID MANUALLY</span>
                <p>
                  copy.
                  <br />
                  paste.
                  <br />
                  repeat<span>?</span>
                </p>
                <span className="note-scribble">
                  there has to be a better way.
                </span>
              </div>
              <div className="sequence-terminal">
                <div className="sequence-window-bar">
                  <span className="window-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>probably-a-bad-idea/</span>
                </div>
                <div className="sequence-code">
                  <span>
                    <i>01</i>
                    <b>const</b> annoyingThing = findProblem();
                  </span>
                  <span>
                    <i>02</i>
                  </span>
                  <span>
                    <i>03</i>
                    <b>while</b> (annoyingThing) &#123;
                  </span>
                  <span>
                    <i>04</i> <em>build</em>(somethingUseful);
                  </span>
                  <span>
                    <i>05</i> <em>break</em>().fix().repeat();
                  </span>
                  <span>
                    <i>06</i>&#125;
                  </span>
                  <span className="code-comment">
                    <i>07</i>
                    {"// surely this is a weekend project"}
                  </span>
                </div>
                <div className="sequence-terminal-bottom">
                  <span className="status-dot" /> {steps[current].terminal}
                </div>
              </div>
              <div className="sequence-product">
                <div className="product-header">
                  <span className="product-app-mark">
                    <Icon name="bolt" />
                  </span>
                  <span>
                    annoyance.exe<small>one less thing to do.</small>
                  </span>
                  <Icon name="check" />
                </div>
                <div className="product-check">
                  <Icon name="check" /> The boring part? Handled.
                </div>
                <div className="product-progress">
                  <span />
                </div>
                <div className="product-footer">
                  <span>BUILT → TESTED → SHIPPED</span>
                  <Icon name="arrow" />
                </div>
              </div>
              <span className="sequence-shipped-stamp">IT&apos;S ALIVE ↗</span>
              <span className="sequence-desk-caption">
                a slightly simplified reconstruction.
              </span>
            </div>
          </div>

          <div className="sequence-bottom">
            <span>
              <span className="status-dot" />{" "}
              {enabled
                ? "SCROLL TO RUN THE EXPERIMENT"
                : "THE PROCESS, MORE OR LESS"}
            </span>
            <div className="sequence-progress">
              <m.span style={{ scaleX: enabled ? scrollYProgress : 1 }} />
            </div>
            <span>IDEA → SOMETHING REAL</span>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
}
