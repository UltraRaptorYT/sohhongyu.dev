import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../components/icons";
import { resume } from "../lib/content";

export const metadata: Metadata = {
  title: "Resume | Soh Hong Yu",
  description:
    "Read or download Soh Hong Yu's resume, including education, experience, projects and awards.",
  alternates: { canonical: "/resume" },
};

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-actions">
        <Link href="/">← Back to the workshop</Link>
        <a
          className="button button-primary"
          href={resume.downloadUrl}
          download={resume.downloadName}
        >
          Download resume <Icon name="arrow-down" />
        </a>
      </div>
      <span className="eyebrow">Resume · {resume.updated}</span>
      <h1>Soh Hong Yu</h1>
      <p className="resume-subtitle">The short version, in one PDF.</p>
      <p className="resume-document-link">
        <a href={resume.documentUrl} target="_blank" rel="noopener noreferrer">
          Open the PDF in a new tab <Icon name="arrow" />
        </a>
      </p>
      <iframe
        className="resume-preview"
        title="Soh Hong Yu's uploaded resume"
        src={resume.documentUrl}
      />
      <p className="resume-fallback">
        Preview not showing?{" "}
        <a href={resume.downloadUrl} download={resume.downloadName}>
          Download the original PDF.
        </a>
      </p>
    </main>
  );
}
