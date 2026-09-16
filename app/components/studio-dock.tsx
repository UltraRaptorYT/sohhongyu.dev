"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { resume } from "../lib/content";

export function StudioDock() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="studio-dock"
      aria-label="Quick navigation"
      aria-hidden={!visible}
      inert={!visible}
      data-visible={visible}
    >
      <a href="#projects">
        <Icon name="folder" />
        <span>Work</span>
      </a>
      <a href="#about">
        <Icon name="code" />
        <span>About</span>
      </a>
      <a href={resume.downloadUrl} download={resume.downloadName}>
        <Icon name="file" />
        <span>Resume</span>
      </a>
      <span className="dock-divider" />
      <a href="#contact">
        <Icon name="mail" />
        <span>Hello</span>
      </a>
    </nav>
  );
}
