import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "arrow"
  | "arrow-down"
  | "folder"
  | "code"
  | "terminal"
  | "spark"
  | "trophy"
  | "medal"
  | "bolt"
  | "mail"
  | "github"
  | "linkedin"
  | "close"
  | "search"
  | "file"
  | "check"
  | "play"
  | "command"
  | "globe";

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 19 19 5M5 5h14v14" />,
  "arrow-down": <path d="M12 4v16m-6-6 6 6 6-6" />,
  folder: (
    <path d="M3 7V5a1 1 0 0 1 1-1h5l3 3h8a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Z" />
  ),
  code: (
    <>
      <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 20" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3m6 0h4" />
    </>
  ),
  spark: (
    <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
  ),
  trophy: (
    <>
      <path d="M8 3h8v7a4 4 0 0 1-8 0V3Zm0 2H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 2v5m-5 2h10m-8-2h6" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="15" r="6" />
      <path d="m6 3 4 6m8-6-4 6M9 3l3 5 3-5m-3 10v4" />
    </>
  ),
  bolt: <path d="m13 2-9 12h7l-1 8 10-13h-8l1-7Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.4 3.4 0 0 0-1-2.5c3.4-.4 7-1.7 7-7.5A6 6 0 0 0 19.4 4c.2-1 .2-2-.4-3-1 0-3 1-4 2a14 14 0 0 0-6 0C8 2 6 1 5 1c-.6 1-.6 2-.4 3A6 6 0 0 0 3 8c0 5.8 3.6 7.1 7 7.5A3.4 3.4 0 0 0 9 18v4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
    </>
  ),
  close: <path d="m6 6 12 12M6 18 18 6" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  play: <path d="m8 4 12 8-12 8V4Z" />,
  command: (
    <>
      <path d="M8 8H5a3 3 0 1 1 3-3v14a2 2 0 1 1-2-2h13a2 2 0 1 1-2 2V5a2 2 0 1 1 2 2H8v10" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </>
  ),
};

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function Raptor({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 3h11v3h2v8H20v3h5v3h-3v-1h-2v6h-3v4h4v2h-7v-8h-3v6h3v2H8v-9H5v-3H2V9h3v5h3v3h6v-3h3V6h1V3Z" />
      <path d="M23 6h3v3h-3z" fill="var(--background)" />
    </svg>
  );
}
