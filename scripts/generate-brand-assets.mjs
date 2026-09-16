import { readFile, writeFile, unlink } from "node:fs/promises";
import sharp from "sharp";

// Preserve the original transparent upload and optimize the on-page avatar.
const source = await readFile(
  new URL("../public/Profile Photo without Background.png", import.meta.url),
);
await writeFile(
  new URL("../public/avatar.webp", import.meta.url),
  await sharp(source)
    .resize(500, 500, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 88, alphaQuality: 100 })
    .toBuffer(),
);

// The uploaded public/ icon set is now authoritative. Remove our former
// generated icons so file-based metadata cannot override the transparent set.
for (const file of ["favicon.ico", "icon.png", "apple-icon.png"]) {
  await unlink(new URL(`../app/${file}`, import.meta.url)).catch((error) => {
    if (error.code !== "ENOENT") throw error;
  });
}
console.log(
  "Updated the transparent avatar. Browser icons use the uploaded public/ assets.",
);
