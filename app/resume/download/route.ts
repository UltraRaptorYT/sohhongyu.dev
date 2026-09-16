import { resumeDocument } from "../../lib/resume-document";

export const dynamic = "force-static";

export async function GET() {
  return resumeDocument("attachment");
}
