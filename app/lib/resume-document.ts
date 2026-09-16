import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { resume } from "./content";

export async function resumeDocument(disposition: "inline" | "attachment") {
  const bytes = await readFile(
    join(process.cwd(), "app", "resume", resume.sourceFile),
  );
  return new Response(new Uint8Array(bytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `${disposition}; filename="${resume.downloadName}"`,
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
