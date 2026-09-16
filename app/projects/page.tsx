import type { Metadata } from "next";
import Link from "next/link";
import { Avatar } from "../components/avatar";
import { Icon } from "../components/icons";
import { ProjectArchive } from "../components/project-archive";
import { links, resume } from "../lib/content";
import { archiveProjects } from "../lib/project-archive";
import { elsewhereLinks } from "../lib/beacons-projects";

export const metadata: Metadata = {
  title: "Projects | Soh Hong Yu",
  description:
    "Software, AI systems, multiplayer event experiences and experiments from Soh Hong Yu's project archive.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="archive-page page-width">
      <nav className="archive-topline" aria-label="Archive navigation">
        <Link className="wordmark" href="/">
          <Avatar eager />
          <span>
            hong yu<span className="accent">.</span>
          </span>
        </Link>
        <a
          className="text-link"
          href={resume.downloadUrl}
          download={resume.downloadName}
        >
          Resume <Icon name="arrow-down" />
        </a>
      </nav>
      <header className="archive-intro">
        <Link href="/#projects" className="text-link">
          ← Back to selected work
        </Link>
        <h1>The project drawer.</h1>
        <p>
          Products, event builds, and experiments.
          <br />
          Some shipped. Some taught me something.
        </p>
      </header>
      <ProjectArchive projects={archiveProjects} />
      <aside className="archive-elsewhere" aria-labelledby="elsewhere-heading">
        <h2 id="elsewhere-heading">Beyond the code</h2>
        <div>
          {elsewhereLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label} <Icon name="arrow" />
            </a>
          ))}
        </div>
      </aside>
      <footer className="archive-footer">
        <span>Still adding to the collection.</span>
        <div>
          <a href={links.beacons} target="_blank" rel="noopener noreferrer">
            More links on Beacons <Icon name="arrow" />
          </a>
          <a
            href={`${links.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            All repositories <Icon name="arrow" />
          </a>
        </div>
      </footer>
    </main>
  );
}
