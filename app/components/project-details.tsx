"use client";

import { useId, useState } from "react";
import { Dialog } from "./dialog";
import { Icon } from "./icons";
import type { Project } from "../lib/content";

export function ProjectDetails({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <button
        className="project-open"
        onClick={() => setOpen(true)}
        aria-label={`View ${project.name} project`}
      >
        <Icon name="arrow" />
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        labelledBy={id}
        className="project-dialog"
      >
        <button
          className="icon-button dialog-close"
          onClick={() => setOpen(false)}
          aria-label="Close project details"
        >
          <Icon name="close" />
        </button>
        <span className="eyebrow accent">{project.label}</span>
        <h2 id={id}>{project.name}</h2>
        <p className="project-lead">{project.description}</p>
        <p className="project-detail-copy">{project.detail}</p>
        <div className="tech-tags">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="dialog-status">
          <span className="status-dot" />
          {project.status}
        </div>
        <div className="dialog-links">
          {project.website && (
            <a
              className="button button-primary"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it <Icon name="arrow" />
            </a>
          )}
          {project.github && (
            <a
              className="button button-secondary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" /> View source <Icon name="arrow" />
            </a>
          )}
          {!project.website && !project.github && (
            <a
              className="button button-secondary"
              href={`mailto:sohhongyu@gmail.com?subject=${encodeURIComponent(`Tell me about ${project.name}`)}`}
            >
              Ask me about this build <Icon name="mail" />
            </a>
          )}
        </div>
      </Dialog>
    </>
  );
}
