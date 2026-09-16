export const links = {
  github: "https://github.com/UltraRaptorYT",
  linkedin: "https://www.linkedin.com/in/soh-hong-yu-ultraraptor/",
  email: "mailto:sohhongyu@gmail.com",
  beacons: "https://beacons.ai/UltraRaptor",
};

export const resume = {
  sourceFile: "SohHongYu_Resume_caa20260917.pdf",
  downloadName: "Soh-Hong-Yu-Resume.pdf",
  downloadUrl: "/resume/download",
  documentUrl: "/resume/document",
  updated: "September 2026",
} as const;

export const experience = [
  {
    company: "GovTech Singapore",
    team: "Cybersecurity Group",
    role: "Software Engineer",
    dates: "Apr 2023 → Jun 2024",
    summary: "Built cloud-security dashboards and reverse-IaC tooling.",
    points: [
      "Aggregated AWS and Azure security findings in React and Elasticsearch dashboards for IM8 and CloudSCAPE compliance analysis.",
      "Integrated Terraformer into an automated pipeline that turns deployed cloud resources into Terraform for security-policy scanning.",
    ],
    tech: [
      "React",
      "Elasticsearch",
      "AWS",
      "Azure",
      "Terraformer",
      "Terraform",
    ],
  },
  {
    company: "Ministry of Education",
    team: null,
    role: "Relief Corporate Support Officer",
    dates: "Sep 2021 → Nov 2022",
    summary: "Made recurring admin work take a lot less time.",
    points: [
      "Automated HR workflows with RPA and VBA, cutting processing time by 67%+ from about three hours to under one.",
      "Built PDF-processing and web tools for teacher evaluations and accessibility improvements for educators.",
    ],
    tech: ["RPA", "VBA", "PDF processing", "Web tools"],
  },
] as const;

export const education = [
  {
    school: "National University of Singapore",
    qualification: "Bachelor of Computing, Computer Science",
    dates: "Aug 2026 → May 2030 (expected)",
    details: [],
  },
  {
    school: "Singapore Polytechnic",
    qualification: "Diploma in Applied Artificial Intelligence and Analytics",
    dates: "Apr 2021 → Apr 2024",
    details: [
      "CGPA 3.97/4.00 · 15 Distinctions · 7 As",
      "Singapore Digital Scholarship · Director’s Honour Roll",
    ],
  },
] as const;

export const projects = [
  {
    id: "filmgram",
    name: "FilmGram",
    number: "01",
    label: "CURRENTLY ON THE WORKBENCH",
    displayLabel: "On the workbench",
    year: 2026,
    description: "A code-first AI pipeline for turning briefs into videos.",
    detail:
      "A video pipeline you can inspect at every step: brief, script, storyboard, HyperFrames composition, narration and render. FilmGram uses local Ollama models, Kokoro narration and FFmpeg, with resumable generation and editable project files. Less time doing repetitive editing. More time making the thing.",
    tech: ["TypeScript", "Node.js", "HyperFrames", "FFmpeg"],
    status: "In progress",
    github: "https://github.com/UltraRaptorYT/FilmGram",
    website: null,
  },
  {
    id: "notebook",
    name: "Enchanted Notebook",
    number: "02",
    label: "A LITTLE SOFTWARE MAGIC",
    displayLabel: "A small experiment",
    year: 2026,
    description: "Write a question. The notebook answers back.",
    detail:
      "A full-screen canvas for handwriting and doodles. Pause your pen and Gemini reads the page, then writes back with a cursive ink-tracing effect. It supports a stylus, touchscreen or mouse, and keeps recent answered pages as notebook memory.",
    tech: ["Next.js", "Gemini", "Canvas"],
    status: "Experiment",
    github: "https://github.com/UltraRaptorYT/EnchantedNotebook",
    website: "https://enchanted-notebook.vercel.app",
  },
  {
    id: "larp",
    name: "L.A.R.P.",
    number: "03",
    label: "2ND PLACE · SMU LEGALTECH 2026",
    displayLabel: "Runner-up · SMU LegalTech 2026",
    year: 2026,
    description: "Trace regulatory changes before they become legal problems.",
    detail:
      "The Localised Amendment Resilience Platform traces regulatory changes through document dependencies to identify affected contracts and internal policies. An interactive graph feeds a human-in-the-loop amendment workflow, with impact prioritisation, version comparison and side-by-side AI-generated diffs.",
    tech: ["Next.js", "Cloudflare R2", "LLMs"],
    status: "Hackathon build",
    github: null,
    website: null,
  },
  {
    id: "pickme",
    name: "PickMe",
    number: "04",
    label: "LIFEHACK 2026 · REZOLVE AI CONSUMERISM CHALLENGE WINNER",
    displayLabel: "LifeHack · Rezolve AI challenge winner",
    year: 2026,
    description: "Stress-test your product content before AI shoppers do.",
    detail:
      "PickMe simulates how AI shopping agents interpret product listings and surfaces missing or ambiguous information. Built as an end-to-end MVP with React, FastAPI and the OpenAI API at LifeHack 2026, where it won the Rezolve AI Consumerism Challenge.",
    tech: ["React", "FastAPI", "OpenAI API"],
    status: "Hackathon build",
    github: null,
    website: "https://pickme-lifehack.vercel.app/",
  },
] as const;

export type Project = (typeof projects)[number];

export const awards = [
  {
    award: "Generative AI champion",
    event: "PolyFinTech API 100",
    year: "2023",
    symbol: "trophy",
    detail:
      "Singen. Everyone built a chatbot. We built an AI video pipeline. The project that started it.",
    href: "https://github.com/UltraRaptorYT/Singen",
  },
  {
    award: "1st Runner-Up",
    event: "Singapore FinTech Festival",
    year: "2023",
    symbol: "medal",
    detail:
      "Singen. First runner-up at Singapore FinTech Festival 2023, following its Generative AI category win at PolyFinTech API 100.",
    href: "/projects#singen",
  },
  {
    award: "Best Pre-University Hack",
    event: "Hack&Roll",
    year: "2024",
    symbol: "bolt",
    detail:
      "A Brilliant Cobra Duel. Best Pre-University Hack at NUS Hack&Roll 2024.",
    href: "/projects#cobra-duel",
  },
  {
    award: "Best Pre-University Hack",
    event: "Hack&Roll",
    year: "2025",
    symbol: "bolt",
    detail:
      "Art-ificial Failure. Best Pre-University Hack at NUS Hack&Roll 2025.",
    href: "/projects#artificial-failure",
  },
  {
    award: "Most Entertaining Hack",
    event: "Hack&Roll",
    year: "2026",
    symbol: "spark",
    detail:
      "Shape Up! Most Entertaining Hack at NUS Hack&Roll 2026. Sometimes the goal is to make the room have a good time.",
    href: "/projects#shape-up",
  },
  {
    award: "Challenge winner",
    event: "LifeHack · Rezolve AI Consumerism",
    year: "2026",
    symbol: "trophy",
    detail:
      "PickMe won the Rezolve AI Consumerism Challenge at LifeHack 2026. Stress-testing product content for a world where AI agents do the shopping.",
    href: "#pickme",
  },
  {
    award: "2nd Place",
    event: "SMU LegalTech",
    year: "2026",
    symbol: "medal",
    detail:
      "L.A.R.P. Tracing regulatory changes through an organisation. A judge-endorsed result.",
    href: "#larp",
  },
] as const;
