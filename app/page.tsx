import Link from "next/link";
import { Avatar } from "./components/avatar";
import { BuildSequence } from "./components/build-sequence";
import { CommandPalette } from "./components/command-palette";
import { HeroScene } from "./components/hero-scene";
import { Icon } from "./components/icons";
import {
  FilmArt,
  GraphArt,
  NotebookArt,
  PickMeArt,
} from "./components/project-art";
import { ProjectDetails } from "./components/project-details";
import { Reveal } from "./components/reveal";
import { StudioDock } from "./components/studio-dock";
import { awards, links, projects } from "./lib/content";

const projectArt = [
  <FilmArt key="film" />,
  <NotebookArt key="notebook" />,
  <GraphArt key="graph" />,
  <PickMeArt key="pickme" />,
];
const projectLabels = [
  "On the workbench",
  "A small experiment",
  "Runner-up · SMU LegalTech 2026",
  "Winner · LifeHack 2026",
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Soh Hong Yu, home">
          <Avatar eager />
          <span>
            hong yu<span className="accent">.</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <Link href="/resume">Resume</Link>
          <a href="#contact">
            Say hello <Icon name="arrow" />
          </a>
        </nav>
        <CommandPalette />
      </header>

      <main id="main">
        <HeroScene>
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <p className="hero-kicker">
                Soh Hong Yu <span>/</span> UltraRaptor
              </p>
              <h1 id="hero-heading">
                I build things
                <br />
                no one asked for<span className="accent">.</span>
              </h1>
              <p className="hero-description">
                Usually because something annoyed me
                <br className="desktop-break" /> enough to build it.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#workshop">
                  Enter workshop <Icon name="arrow-down" />
                </a>
                <a className="hero-email" href={links.email}>
                  Or say hello <Icon name="arrow" />
                </a>
              </div>
            </div>
            <a
              className="hero-portrait"
              href="#about"
              aria-label="Meet Hong Yu, the workshop operator"
            >
              <Avatar
                size={244}
                eager
                alt="UltraRaptor, a red avatar with sunglasses and headphones"
              />
              <span className="portrait-caption">
                the person behind the tabs.
              </span>
            </a>
            <div className="hero-intro">
              <span className="hero-hello">A little about me</span>
              <p>
                AI + Software Engineer.
                <br />
                Computer Science @ NUS.
                <br />
                Based in Singapore.
              </p>
              <p className="hero-aside">
                Making useful things.
                <br />
                Sometimes weird ones.
              </p>
              <a className="hero-current" href="#filmgram">
                <span className="status-dot" /> Currently building FilmGram{" "}
                <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className="hero-bottom page-width">
            <span>Software, AI, and a few side quests.</span>
            <span className="hero-keyboard-hint">
              Find your way around <kbd>⌘ K</kbd>
            </span>
          </div>
        </HeroScene>

        <div id="workshop" className="workshop page-width">
          <section id="now" className="now-board" aria-labelledby="now-heading">
            <div className="now-title">
              <span className="status-dot" />
              <h2 id="now-heading">Now</h2>
              <span>September 2026</span>
            </div>
            <div className="now-items">
              <p>
                Studying Computer Science <span>@ NUS</span>
              </p>
              <p>
                Building <a href="#filmgram">FilmGram ↗</a>
              </p>
              <p>Experimenting with AI agents</p>
              <p>Probably entering another hackathon</p>
            </div>
            <a className="now-opportunity" href="#contact">
              <span>Looking ahead</span>
              <p>
                Summer 2027
                <br />
                software / AI internships.
              </p>
              <span>
                Let&apos;s talk <Icon name="arrow" />
              </span>
            </a>
          </section>

          <section
            id="projects"
            className="section projects-section"
            aria-labelledby="projects-heading"
          >
            <div className="section-heading">
              <div>
                <span className="eyebrow">Selected work</span>
                <h2 id="projects-heading">A few things I&apos;ve made.</h2>
              </div>
              <p>Ideas that escaped the notes app.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <Reveal
                  key={project.id}
                  className={`project-reveal project-${project.id}`}
                >
                  <article
                    className={`project project-${project.id}`}
                    id={project.id}
                  >
                    <div className="project-visual">
                      {projectArt[index]}
                      <span className="project-index">0{index + 1}</span>
                    </div>
                    <div className="project-info">
                      <span className="project-label">
                        {index === 0 && <span className="status-dot" />}
                        {projectLabels[index]}
                      </span>
                      <div className="project-title-row">
                        <h3>{project.name}</h3>
                        <ProjectDetails project={project} />
                      </div>
                      <p>{project.description}</p>
                      <div className="tech-tags">
                        {project.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <a
              className="more-projects"
              href={`${links.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>More experiments live on GitHub.</span>
              <span>
                Open the drawer <Icon name="arrow" />
              </span>
            </a>
          </section>

          <BuildSequence />

          <Reveal>
            <section
              id="experience"
              className="section experience-section"
              aria-labelledby="experience-heading"
            >
              <div className="section-heading">
                <div>
                  <span className="eyebrow">Experience</span>
                  <h2 id="experience-heading">A few real-world commits.</h2>
                </div>
                <Link href="/resume" className="text-link">
                  The resume version <Icon name="arrow" />
                </Link>
              </div>
              <div className="experience-log">
                <div className="experience-date">
                  <span>2023 → 2024</span>
                  <small>Singapore</small>
                </div>
                <div className="experience-content">
                  <p className="eyebrow">Software Engineer</p>
                  <h3>GovTech Singapore</h3>
                  <p>Built compliance tooling for government cloud systems.</p>
                  <ul>
                    <li>CloudSCAPE compliance dashboards</li>
                    <li>IM8 compliance scanning across AWS + Azure</li>
                    <li>Terraform reverse-engineering</li>
                  </ul>
                  <div className="tech-tags">
                    {[
                      "React",
                      "Kibana",
                      "Elasticsearch",
                      "AWS",
                      "Azure",
                      "Terraform",
                    ].map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <span className="experience-symbol" aria-hidden="true">
                  <Icon name="terminal" />
                </span>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section
              id="hackathons"
              className="section hackathon-section"
              aria-labelledby="hackathons-heading"
            >
              <div className="section-heading">
                <div>
                  <span className="eyebrow">Weekends well spent</span>
                  <h2 id="hackathons-heading">
                    Somehow I keep joining hackathons.
                  </h2>
                </div>
                <p>A few things collected along the way.</p>
              </div>
              <div className="hackathon-wall">
                <div className="stickers">
                  {awards.map((award, index) => (
                    <details
                      className={`award-sticker sticker-${index}`}
                      key={`${award.event}-${award.year}`}
                    >
                      <summary>
                        <span className="award-symbol">
                          <Icon name={award.symbol} />
                        </span>
                        <span className="award-copy">
                          <strong>{award.award}</strong>
                          <span className="sticker-event">{award.event}</span>
                        </span>
                        <span className="sticker-year">{award.year}</span>
                        <span className="sticker-expand">+</span>
                      </summary>
                      <div className="award-detail">
                        <p>{award.detail}</p>
                        {award.href && (
                          <a
                            href={award.href}
                            target={
                              award.href.startsWith("https:")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              award.href.startsWith("https:")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            Meet the build <Icon name="arrow" />
                          </a>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
                <p className="wall-footnote">
                  There&apos;s a story behind each one. Click to open.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section
              id="about"
              className="section about-section"
              aria-labelledby="about-heading"
            >
              <div className="about-identity">
                <span className="eyebrow">The human in the loop</span>
                <h2 id="about-heading">Hey, I&apos;m Hong Yu.</h2>
                <div className="about-profile">
                  <Avatar size={88} alt="UltraRaptor's red headphone avatar" />
                  <div>
                    <span>Soh Hong Yu</span>
                    <small>Also answers to UltraRaptor.</small>
                    <small>Singapore · NUS Computer Science</small>
                  </div>
                </div>
              </div>
              <div className="about-copy">
                <p>
                  I like building software around problems that probably could
                  have been solved manually, but where&apos;s the fun in that?
                </p>
                <p>
                  Most of my work sits somewhere between software engineering,
                  AI systems, automation and{" "}
                  <span className="foreground">
                    “wouldn&apos;t it be funny if...”
                  </span>
                </p>
                <div className="about-facts">
                  <span>Applied AI &amp; Analytics diploma</span>
                  <span>Previously GovTech</span>
                  <span>Volunteer since 13</span>
                  <span>Occasional tank technician</span>
                  <span>Chronic hackathon participant</span>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section
              id="contact"
              className="contact-section"
              aria-labelledby="contact-heading"
            >
              <div className="contact-copy">
                <span className="contact-availability">
                  <span className="status-dot" /> Open to Summer 2027
                  internships
                </span>
                <h2 id="contact-heading">
                  Building something weird?
                  <br />
                  <span>Let&apos;s talk.</span>
                </h2>
                <p>
                  A project, an opportunity, or a very questionable idea.
                  <br />
                  I&apos;m listening.
                </p>
                <a className="button button-primary" href={links.email}>
                  Say hello <Icon name="arrow" />
                </a>
              </div>
              <div className="contact-links">
                <a href={links.email}>
                  <span>
                    Email<small>sohhongyu@gmail.com</small>
                  </span>
                  <Icon name="arrow" />
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    GitHub<small>@UltraRaptorYT</small>
                  </span>
                  <Icon name="arrow" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    LinkedIn
                    <small>The slightly more professional version</small>
                  </span>
                  <Icon name="arrow" />
                </a>
              </div>
            </section>
          </Reveal>
        </div>
      </main>
      <footer className="site-footer page-width">
        <a className="footer-brand" href="#">
          <Avatar size={24} />
          <span>
            Soh Hong Yu <span className="subtle">© 2026</span>
          </span>
        </a>
        <span>Made with a little curiosity.</span>
        <a href="#">Back to top ↑</a>
      </footer>
      <StudioDock />
    </>
  );
}
