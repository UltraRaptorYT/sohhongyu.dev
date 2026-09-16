"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog } from "./dialog";
import { Icon, type IconName } from "./icons";
import { links, projects } from "../lib/content";

type Command = { label: string; hint: string; icon: IconName; href: string };
const commands: Command[] = [
  {
    label: "Projects",
    hint: "The things I've built",
    icon: "folder",
    href: "#projects",
  },
  {
    label: "Experience",
    hint: "The changelog",
    icon: "terminal",
    href: "#experience",
  },
  {
    label: "Project archive",
    hint: "More builds, experiments, and event projects",
    icon: "folder",
    href: "/projects",
  },
  {
    label: "About",
    hint: "The person behind the keyboard",
    icon: "code",
    href: "#about",
  },
  { label: "Now", hint: "What's on the workbench", icon: "bolt", href: "#now" },
  {
    label: "Hackathons",
    hint: "The sticker collection",
    icon: "trophy",
    href: "#hackathons",
  },
  {
    label: "Resume",
    hint: "Read or download the original PDF",
    icon: "file",
    href: "/resume",
  },
  {
    label: "Contact",
    hint: "Let's build something",
    icon: "mail",
    href: "#contact",
  },
  {
    label: "GitHub",
    hint: "UltraRaptorYT",
    icon: "github",
    href: links.github,
  },
  {
    label: "LinkedIn",
    hint: "Soh Hong Yu",
    icon: "linkedin",
    href: links.linkedin,
  },
  {
    label: "Random project",
    hint: "Feeling curious?",
    icon: "spark",
    href: "random",
  },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const results = commands.filter((command) =>
    `${command.label} ${command.hint}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );

  function show() {
    setQuery("");
    setSelected(0);
    setOpen(true);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
        setQuery("");
        setSelected(0);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);

  function run(command: Command) {
    setOpen(false);
    if (command.href === "random") {
      window.location.hash =
        projects[Math.floor(Math.random() * projects.length)].id;
    } else if (command.href.startsWith("#")) {
      window.location.hash = command.href;
    } else if (command.href.startsWith("https:")) {
      window.open(command.href, "_blank", "noopener,noreferrer");
    } else {
      window.location.assign(command.href);
    }
  }

  return (
    <>
      <button
        className="command-trigger"
        onClick={show}
        aria-label="Open command palette"
        aria-keyshortcuts="Meta+k Control+k"
      >
        <Icon name="search" />
        <span>Find something</span>
        <kbd>⌘ K</kbd>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="command-title"
        className="command-dialog"
      >
        <div className="command-input-wrap">
          <Icon name="search" />
          <label
            className="sr-only"
            id="command-title"
            htmlFor="command-search"
          >
            What are you looking for?
          </label>
          <input
            ref={input}
            id="command-search"
            placeholder="What are you looking for?"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            autoComplete="off"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-results"
            aria-activedescendant={
              results.length ? `command-${selected}` : undefined
            }
            onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                event.preventDefault();
                const next = results.length
                  ? (selected +
                      (event.key === "ArrowDown" ? 1 : -1) +
                      results.length) %
                    results.length
                  : 0;
                setSelected(next);
                document
                  .getElementById(`command-${next}`)
                  ?.scrollIntoView({ block: "nearest" });
              }
              if (event.key === "Enter" && results[selected]) {
                event.preventDefault();
                run(results[selected]);
              }
            }}
          />
          <button
            className="escape-key"
            onClick={() => setOpen(false)}
            aria-label="Close command palette"
          >
            esc
          </button>
        </div>
        <p className="command-group eyebrow">GO SOMEWHERE</p>
        <ul
          role="listbox"
          id="command-results"
          aria-label="Workshop commands"
          className="command-results"
        >
          {results.map((command, index) => (
            <li
              key={command.label}
              id={`command-${index}`}
              role="option"
              aria-selected={selected === index}
              onMouseMove={() => setSelected(index)}
              onClick={() => run(command)}
            >
              <Icon name={command.icon} />
              <span>
                {command.label}
                <small>{command.hint}</small>
              </span>
              <span className="command-enter">↵</span>
            </li>
          ))}
        </ul>
        {!results.length && (
          <p className="command-empty">
            Nothing in this drawer. Try “projects” or “contact”.
          </p>
        )}
        <div className="command-footer">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> to navigate
          </span>
          <span>
            <kbd>↵</kbd> to open
          </span>
          <span>
            <kbd>esc</kbd> to close
          </span>
        </div>
      </Dialog>
    </>
  );
}
