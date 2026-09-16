import { projects } from "./content";
import { beaconsProjects } from "./beacons-projects";

export type ProjectCategory =
  "AI & automation" | "Games & events" | "Data & ML" | "Tools";
export type ArchiveProject = {
  id: string;
  name: string;
  year: number | null;
  category: ProjectCategory;
  description: string;
  tech: readonly string[];
  status: string;
  github: string | null;
  website: string | null;
  extraLinks?: readonly { label: string; href: string }[];
};

// Curated from the uploaded resume, the portfolio brief and public repository
// descriptions/READMEs. See docs/content-sources.md for provenance and gaps.
export const archiveProjects: readonly ArchiveProject[] = (
  [
    ...projects.map((project) => ({
      ...project,
      category: "AI & automation" as const,
      status: project.displayLabel,
    })),
    {
      id: "overcooked",
      name: "Overcooked IRL",
      year: 2026,
      category: "Games & events",
      description:
        "A real-time platform for 80+ youth participants across six physical game stations. Voice-only orders, timers, judging and live scoring for ZO Camp June 2026.",
      tech: ["Next.js", "TypeScript", "Supabase Realtime", "Kokoro"],
      status: "Used at a live event",
      github: "https://github.com/UltraRaptorYT/Overcooked",
      website: "https://zo-overcooked.vercel.app/",
    },
    {
      id: "atelier",
      name: "Atelier",
      year: 2026,
      category: "AI & automation",
      description:
        "An AI architecture studio where a principal, architect, interior designer and critic collaborate on versioned designs you can explore in 3D.",
      tech: ["TypeScript", "Three.js", "OpenAI", "E2B", "Blender"],
      status: "GPT-6 Astra Hackathon",
      github: "https://github.com/UltraRaptorYT/Atelier",
      website: "https://atelier-architecture-studio.z3e0.chatgpt.site/",
    },
    {
      id: "taskgoblin",
      name: "TaskGoblin",
      year: 2026,
      category: "AI & automation",
      description:
        "A Telegram-native AI project manager that turns group updates into project events, task suggestions, reminders and reports.",
      tech: ["Next.js", "Supabase", "OpenAI", "Telegram"],
      status: "Acacia Launchpad Challenge",
      github: "https://github.com/UltraRaptorYT/TaskGoblin",
      website: "https://taskgoblin.vercel.app",
      extraLinks: [
        { label: "Telegram bot", href: "https://t.me/taskgoblin_launch_bot" },
      ],
    },
    {
      id: "airmouse",
      name: "AirMouse",
      year: 2026,
      category: "Games & events",
      description:
        "A multiplayer drag-and-drop quiz. Tilt your phone to control a cursor on a shared host screen.",
      tech: ["Next.js", "WebSockets", "Cloudflare Durable Objects"],
      status: "Public build",
      github: "https://github.com/UltraRaptorYT/AirMouse",
      website: "https://bwm-air-mouse.vercel.app",
    },
    {
      id: "cursortag",
      name: "Cursor Tag",
      year: 2026,
      category: "Games & events",
      description:
        "A browser party game where phones become motion controllers. Chase the other cursors, collect power-ups and try not to get tagged.",
      tech: ["Next.js", "WebSockets", "Cloudflare Durable Objects"],
      status: "Public build",
      github: "https://github.com/UltraRaptorYT/CursorTag",
      website: "https://cursortag.vercel.app",
    },
    {
      id: "path-of-xuanzang",
      name: "Path of Xuanzang",
      year: 2026,
      category: "Games & events",
      description:
        "A camera-controlled event experience. The room moves left or right to choose its answers while pose processing stays in the browser.",
      tech: ["Next.js", "Browser pose detection"],
      status: "Event experience",
      github: "https://github.com/UltraRaptorYT/Path-of-Xuanzang",
      website: "https://path-of-xuanzang.vercel.app",
    },
    {
      id: "webgpu-transcription",
      name: "Live WebGPU Transcription",
      year: 2026,
      category: "AI & automation",
      description:
        "A local speech-to-text proof of concept using Whisper in a browser worker. Microphone audio stays on the device; the repository is named Parakeet-WebGPU.",
      tech: ["Next.js", "Transformers.js", "Whisper", "WebGPU"],
      status: "Proof of concept",
      github: "https://github.com/UltraRaptorYT/Parakeet-WebGPU",
      website: "https://parakeet-web-gpu.vercel.app",
    },
    {
      id: "agent-launchpad",
      name: "Agent Launchpad",
      year: 2026,
      category: "AI & automation",
      description:
        "Self-healing middleware for agent runs: detect a failure, repair it and continue.",
      tech: ["Fastify", "React", "LLM agents", "Observability"],
      status: "Experiment",
      github: null,
      website: null,
    },
    {
      id: "reremote",
      name: "ReRemote",
      year: 2024,
      category: "Tools",
      description:
        "The Arduino side of ReRemote, first runner-up at NUS ReWired 2024.",
      tech: ["Arduino", "C++"],
      status: "1st runner-up · NUS ReWired 2024",
      github: "https://github.com/UltraRaptorYT/ReRemote",
      website: null,
      extraLinks: [
        { label: "Watch demo", href: "https://youtu.be/tRnZwsKi9yM" },
      ],
    },
    {
      id: "singen",
      name: "Singen",
      year: 2023,
      category: "AI & automation",
      description:
        "Everyone built a chatbot. We built an AI video pipeline. Generative AI champion at PolyFinTech API 100 and first runner-up at Singapore FinTech Festival in 2023.",
      tech: ["AI video"],
      status: "The project that started it",
      github: "https://github.com/UltraRaptorYT/Singen",
      website: "https://ultraraptoryt.github.io/Singen/",
    },
    {
      id: "ai-platformer",
      name: "AI Platformer",
      year: 2023,
      category: "Games & events",
      description:
        "An early platformer experiment built with TypeScript and Webpack.",
      tech: ["TypeScript", "Webpack"],
      status: "Experiment",
      github: "https://github.com/UltraRaptorYT/AI-Platformer",
      website: null,
    },
    {
      id: "machine-failure",
      name: "Machine Failure Classification",
      year: 2022,
      category: "Data & ML",
      description:
        "An early supervised-learning project for detecting machine failure.",
      tech: ["Supervised learning", "Classification"],
      status: "Learning project",
      github: "https://github.com/UltraRaptorYT/Machine-Failure-Classification",
      website: null,
    },
    {
      id: "credit-card-fraud",
      name: "Credit Card Fraud Detection",
      year: 2022,
      category: "Data & ML",
      description:
        "An early notebook project exploring credit-card fraud detection.",
      tech: ["Jupyter Notebook"],
      status: "Learning project",
      github: "https://github.com/UltraRaptorYT/Credit-Card-Fraud-Detection",
      website: null,
    },
    {
      id: "air-pollution",
      name: "Air Pollution Forecasting",
      year: 2022,
      category: "Data & ML",
      description: "A notebook project exploring air-pollution forecasting.",
      tech: ["Jupyter Notebook"],
      status: "Learning project",
      github: "https://github.com/UltraRaptorYT/Air-Pollution-Forecasting",
      website: null,
    },
    {
      id: "tether",
      name: "Tether",
      year: 2022,
      category: "Tools",
      description: "An early Appetizer Hackathon project.",
      tech: ["JavaScript"],
      status: "Hackathon build",
      github: "https://github.com/UltraRaptorYT/Tether",
      website: "https://ultraraptoryt.github.io/Tether/",
    },
    ...beaconsProjects,
  ] satisfies ArchiveProject[]
).sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
