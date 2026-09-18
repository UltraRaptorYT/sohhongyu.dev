import type { Metadata } from "next";
import Link from "next/link";
import { Avatar } from "../components/avatar";
import { Icon } from "../components/icons";
import { archiveProjects } from "../lib/project-archive";
import styles from "./booth.module.css";

const title = "Interactive Booths | Soh Hong Yu";
const description =
  "Six physical-digital event experiences, from immersive VR to interactive installations and multiplayer games. Watch the builds in action and try the demos.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/booth" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "/booth",
    type: "website",
  },
};

const booths = [
  {
    name: "VR Buddha",
    category: "Immersive experience",
    description:
      "An immersive virtual experience built for live community engagement at Vesak Day 2024.",
    interaction: "Step into a virtual world.",
    projectId: "vr-buddha",
  },
  {
    name: "Whack-the-Poison",
    category: "Interactive game",
    description:
      "A Vesak Day 2025 game that brings event participants into a playful, interactive experience.",
    interaction: "Play Whack the Poisons!",
    projectId: "whack-the-poisons",
  },
  {
    name: "NFC Lantern Booths",
    category: "Physical installation",
    description:
      "Physical stations triggered through NFC-based interactions, connecting a simple tap to a digital response.",
    interaction: "Tap to trigger an experience.",
    projectId: null,
  },
  {
    name: "Walking Lotus",
    category: "Responsive installation",
    description:
      "An installation that changes colour through participant interaction, making the audience part of the display.",
    interaction: "Your interaction changes the colour.",
    projectId: null,
  },
  {
    name: "Blow the Fire Away",
    category: "Microphone interaction",
    description:
      "Microphone input translated into a responsive visual experience. A physical action becomes an on-screen reaction.",
    interaction: "Blow into the microphone. See it respond.",
    projectId: null,
  },
  {
    name: "Multiplayer Event Game",
    category: "Physical-digital game",
    description:
      "Overcooked IRL: an event game for 80+ youth participants across six physical stations, with timers, judging and live scoring.",
    interaction: "Team up. Play together. Track the score.",
    projectId: "overcooked",
  },
] as const;

const reels = ["DJk4E4DT5CR", "DKOyaWfpNL3"] as const;

export default function BoothPage() {
  return (
    <div className={`${styles.page} page-width`}>
      <a className="skip-link" href="#booth-content">
        Skip to content
      </a>
      <nav className={styles.topline} aria-label="Booth navigation">
        <Link className="wordmark" href="/">
          <Avatar eager />
          <span>
            hong yu<span className="accent">.</span>
          </span>
        </Link>
        <a
          className={styles.link}
          href="https://beacons.ai/UltraRaptor"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on Beacons <Icon name="arrow" />
        </a>
      </nav>

      <main id="booth-content">
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Proof from prior builds</p>
          <h1>
            Beyond the screen.
            <br />
            <span>Into the booth.</span>
          </h1>
          <p className={styles.lede}>
            Virtual worlds, responsive installations, and games that bring
            people together. Six experiences built for real events and real
            participants.
          </p>
          <div className={styles.introActions}>
            <a className={styles.primaryLink} href="#in-action">
              <Icon name="play" /> Watch them in action
            </a>
            <a className={styles.link} href="#experiences">
              Explore the builds <Icon name="arrow-down" />
            </a>
          </div>
          <div className={styles.introNote}>
            <span className="status-dot" aria-hidden="true" />
            Built for community events · Bespoke, non-commercial installations
          </div>
        </header>

        <section
          id="in-action"
          className={styles.section}
          aria-labelledby="in-action-heading"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>From the event floor</p>
              <h2 id="in-action-heading">See the builds in action.</h2>
            </div>
            <p>Real moments from the experiences.</p>
          </div>
          <div className={styles.reelGrid}>
            {reels.map((id, index) => (
              <figure className={styles.reel} key={id}>
                <iframe
                  src={`https://www.instagram.com/reel/${id}/embed/`}
                  title={`Event footage — Instagram reel ${index + 1}`}
                  className={styles.reelEmbed}
                  loading="lazy"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <figcaption>
                  <span>Event reel / 0{index + 1}</span>
                  <a
                    className={styles.link}
                    href={`https://www.instagram.com/reel/${id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open event reel ${index + 1} on Instagram`}
                  >
                    Open on Instagram <Icon name="arrow" />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className={styles.embedNote}>
            If a reel doesn’t load here, use its “Open on Instagram” link to
            watch.
          </p>
        </section>

        <section
          id="experiences"
          className={styles.section}
          aria-labelledby="experiences-heading"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>The collection</p>
              <h2 id="experiences-heading">Six ways to get involved.</h2>
            </div>
            <p>Explore the experiences. Try the available web demos.</p>
          </div>
          <div className={styles.projectGrid}>
            {booths.map((booth, index) => {
              const project = archiveProjects.find(
                (entry) => entry.id === booth.projectId,
              );

              return (
                <article className={styles.project} key={booth.name}>
                  <div className={styles.projectTopline}>
                    <span className={styles.number}>0{index + 1}</span>
                    <span>{booth.category}</span>
                  </div>
                  <h3>{booth.name}</h3>
                  <p className={styles.projectDescription}>
                    {booth.description}
                  </p>
                  <p className={styles.interaction}>{booth.interaction}</p>
                  <div className={styles.projectFooter}>
                    {project?.website ? (
                      <a
                        className={styles.link}
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Try ${booth.name} demo`}
                      >
                        Try the demo <Icon name="arrow" />
                      </a>
                    ) : (
                      <span className={styles.physicalLabel}>
                        <Icon name="spark" /> In-person experience
                      </span>
                    )}
                    {project?.github && (
                      <a
                        className={styles.sourceLink}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${booth.name} source on GitHub`}
                      >
                        <Icon name="github" /> Source
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside className={styles.buildNote}>
          <p className={styles.eyebrow}>
            Different experiences. Shared building blocks.
          </p>
          <h2>Physical input. Digital response. People at the centre.</h2>
          <p>
            These bespoke, non-commercial event installations share a common set
            of components: sensing, state, scoring, triggers, displays, and
            measurement.
          </p>
        </aside>
      </main>

      <footer className={styles.footer}>
        <span>A collection of hands-on builds by Soh Hong Yu.</span>
        <Link className={styles.link} href="/">
          Back to the workshop <Icon name="arrow" />
        </Link>
      </footer>
    </div>
  );
}
