import type { Metadata } from "next";
import Link from "next/link";
import { awards, links, projects } from "../lib/content";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Resume | Soh Hong Yu",
  description:
    "Soh Hong Yu's experience, selected software and AI projects, education, and hackathon results.",
  alternates: { canonical: "/resume" },
};

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-actions">
        <Link href="/">← Back to the workshop</Link>
        <PrintButton />
      </div>
      <h1>Soh Hong Yu</h1>
      <p className="resume-subtitle">AI + Software Engineer · Singapore</p>
      <div className="resume-contact">
        <a href={links.email}>sohhongyu@gmail.com</a>
        <a href={links.github}>github.com/UltraRaptorYT</a>
        <a href={links.linkedin}>LinkedIn</a>
        <a href="https://sohhongyu.dev">sohhongyu.dev</a>
      </div>
      <section>
        <h2>Currently</h2>
        <p>
          Computer Science student at NUS, building FilmGram and experimenting
          with AI agents. Open to Summer 2027 software and AI internships.
        </p>
      </section>
      <section>
        <h2>Experience</h2>
        <h3>GovTech Singapore · Software Engineer · 2023 → 2024</h3>
        <p>Built compliance tooling for government cloud systems.</p>
        <ul>
          <li>
            CloudSCAPE compliance dashboards using React, Kibana, and
            Elasticsearch.
          </li>
          <li>IM8 compliance scanning across AWS and Azure.</li>
          <li>Terraform reverse-engineering.</li>
        </ul>
      </section>
      <section>
        <h2>Selected projects</h2>
        {projects.map((project) => (
          <div className="resume-project" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <small>
              {project.tech.join(" / ")} · {project.status}
            </small>
          </div>
        ))}
      </section>
      <section>
        <h2>Education</h2>
        <h3>National University of Singapore</h3>
        <p>Computer Science · Currently studying</p>
        <h3 className="resume-project">Singapore Polytechnic</h3>
        <p>Diploma in Applied AI &amp; Analytics</p>
      </section>
      <section>
        <h2>Hackathons</h2>
        <ul>
          {awards.map((award) => (
            <li key={`${award.event}-${award.year}`}>
              {award.year} · {award.award} · {award.event}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <p>Last updated September 2026.</p>
      </section>
    </main>
  );
}
