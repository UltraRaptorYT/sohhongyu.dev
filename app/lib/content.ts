export const links = {
  github: "https://github.com/UltraRaptorYT",
  linkedin: "https://www.linkedin.com/in/soh-hong-yu-ultraraptor/",
  email: "mailto:sohhongyu@gmail.com",
};

export const projects = [
  {
    id: "filmgram",
    name: "FilmGram",
    number: "01",
    label: "CURRENTLY ON THE WORKBENCH",
    description:
      "An AI video editor for people who would rather build than edit.",
    detail:
      "Raw clips in. An edited reel out. FilmGram brings AI, programmatic video and a proper editing pipeline together, so making the thing doesn't also mean spending all night editing the thing.",
    tech: ["Next.js", "HyperFrames", "FFmpeg", "AI"],
    status: "In progress",
    github: "https://github.com/UltraRaptorYT/FilmGram",
    website: null,
  },
  {
    id: "notebook",
    name: "Enchanted Notebook",
    number: "02",
    label: "A LITTLE SOFTWARE MAGIC",
    description: "Write a question. The notebook answers back.",
    detail:
      "A notebook with something to say. Handwriting meets Gemini in a canvas-based experiment that makes asking AI a question feel a little less like talking to another chat box.",
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
    description: "Trace regulatory changes before they become legal problems.",
    detail:
      "Regulations change. The knock-on effects aren't always obvious. L.A.R.P. maps dependencies through an organisation to help trace a change from a rule to the teams and processes it touches. Built at the SMU LegalTech Hackathon, where it placed second with a judge-endorsed result.",
    tech: ["Next.js", "React Flow", "AI"],
    status: "Hackathon build",
    github: null,
    website: null,
  },
  {
    id: "pickme",
    name: "PickMe",
    number: "04",
    label: "WINNER · LIFEHACK 2026",
    description: "Stress-test your product content before AI shoppers do.",
    detail:
      "What happens when the shopper is an AI agent? PickMe puts product content through an AI shopper and critique loop, helping find what is missing before the buying decision happens. A winning build at LifeHack 2026.",
    tech: ["AI agents", "Product content", "Evaluation"],
    status: "Hackathon build",
    github: null,
    website: null,
  },
] as const;

export type Project = (typeof projects)[number];

export const awards = [
  {
    award: "Champion",
    event: "PolyFinTech API",
    year: "2023",
    symbol: "trophy",
    detail:
      "Singen. Everyone built a chatbot. We built an AI video pipeline. The project that started it.",
    href: "https://github.com/UltraRaptorYT/Singen",
  },
  {
    award: "1st Runner Up",
    event: "Singapore FinTech Festival",
    year: "2023",
    symbol: "medal",
    detail:
      "A podium finish at Singapore FinTech Festival 2023. A very good reason to keep building.",
    href: null,
  },
  {
    award: "Best Pre-U Hack",
    event: "Hack&Roll",
    year: "2024",
    symbol: "bolt",
    detail:
      "National service didn't quite stop the weekend builds. Best Pre-U Hack at Hack&Roll 2024.",
    href: null,
  },
  {
    award: "Best Pre-U Hack",
    event: "Hack&Roll",
    year: "2025",
    symbol: "bolt",
    detail:
      "Back at Hack&Roll. Another Best Pre-U Hack. Apparently once wasn't enough.",
    href: null,
  },
  {
    award: "Most Entertaining",
    event: "Hack&Roll",
    year: "2026",
    symbol: "spark",
    detail:
      "A hack doesn't always need to change the world. Sometimes it just needs to make the room have a good time.",
    href: null,
  },
  {
    award: "Winner",
    event: "LifeHack",
    year: "2026",
    symbol: "trophy",
    detail:
      "PickMe. Stress-testing product content for a world where AI agents do the shopping.",
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
