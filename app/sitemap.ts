import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sohhongyu.dev", changeFrequency: "monthly", priority: 1 },
    {
      url: "https://sohhongyu.dev/resume",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
