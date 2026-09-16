"use client";

import { useState } from "react";
import { Icon } from "./icons";
import type { ArchiveProject } from "../lib/project-archive";

export function ProjectArchive({
  projects,
}: {
  projects: readonly ArchiveProject[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All years");
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const years = [
    ...new Set(
      projects.flatMap((project) =>
        project.year === null ? [] : [project.year],
      ),
    ),
  ].sort((a, b) => b - a);
  const filtered = projects.filter(
    (project) =>
      (category === "All" || project.category === category) &&
      (year === "All years" ||
        (project.year?.toString() ?? "Undated") === year) &&
      `${project.name} ${project.description} ${project.tech.join(" ")} ${project.category} ${project.year ?? ""}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );

  function reset() {
    setQuery("");
    setCategory("All");
    setYear("All years");
  }

  return (
    <div className="archive-browser">
      <div className="archive-toolbar">
        <div className="archive-search">
          <Icon name="search" />
          <label className="sr-only" htmlFor="archive-search">
            Search projects
          </label>
          <input
            id="archive-search"
            type="search"
            placeholder="Find a project, tool, or idea…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <label className="archive-year">
          <span className="sr-only">Filter by year</span>
          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            <option>All years</option>
            {years.map((value) => (
              <option key={value}>{value}</option>
            ))}
            {projects.some((project) => project.year === null) && (
              <option>Undated</option>
            )}
          </select>
        </label>
      </div>
      <div
        className="archive-filters"
        role="group"
        aria-label="Project categories"
      >
        {categories.map((value) => (
          <button
            key={value}
            aria-pressed={category === value}
            onClick={() => setCategory(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="archive-count">
        <span role="status">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
        {(query || category !== "All" || year !== "All years") && (
          <button onClick={reset}>
            Clear filters <Icon name="close" />
          </button>
        )}
      </div>
      <div className="archive-list">
        {filtered.map((project) => (
          <article
            className="archive-row"
            key={project.id}
            id={project.id}
            aria-labelledby={`archive-${project.id}`}
            tabIndex={-1}
          >
            <div className="archive-row-year">
              {project.year ?? "Undated"}
              <small>{project.category}</small>
            </div>
            <div className="archive-row-copy">
              <h2 id={`archive-${project.id}`}>{project.name}</h2>
              <p>{project.description}</p>
              {project.tech.length > 0 && (
                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}
              <span className="archive-status">{project.status}</span>
            </div>
            <div className="archive-row-links">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} project`}
                >
                  Open project <Icon name="arrow" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} source code`}
                >
                  GitHub <Icon name="github" />
                </a>
              )}
              {project.extraLinks?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name}: ${link.label}`}
                >
                  {link.label} <Icon name="arrow" />
                </a>
              ))}
              {!project.website &&
                !project.github &&
                !project.extraLinks?.length && (
                  <a
                    href={`mailto:sohhongyu@gmail.com?subject=${encodeURIComponent(`Tell me about ${project.name}`)}`}
                  >
                    Ask me about it <Icon name="mail" />
                  </a>
                )}
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="archive-empty">
          <h2>Nothing in this drawer.</h2>
          <p>Try another search, or clear the filters.</p>
          <button className="button button-secondary" onClick={reset}>
            Show all projects
          </button>
        </div>
      )}
    </div>
  );
}
