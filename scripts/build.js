import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));
const publicDir = join(root, "public");
const distDir = join(root, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await cp(publicDir, distDir, { recursive: true });

console.log("Built static site into dist/");
