import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./project-art.css";
import "./workshop-motion.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = { themeColor: "#f7f7f5" };

export const metadata: Metadata = {
  metadataBase: new URL("https://sohhongyu.dev"),
  title: "Soh Hong Yu — AI & Software Engineer",
  description:
    "Soh Hong Yu is a Computer Science student at NUS building software, AI systems, experiments and things nobody asked for.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Soh Hong Yu — AI & Software Engineer",
    description:
      "Building things no one asked for. Software, AI systems, and experiments from Hong Yu's workshop.",
    url: "https://sohhongyu.dev",
    siteName: "Hong Yu's Workshop",
    locale: "en_SG",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png?v=transparent",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png?v=transparent",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico?v=transparent",
    apple: {
      url: "/apple-touch-icon.png?v=transparent",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
