// @lovable.dev/vite-tanstack-config already wires tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, React/TanStack dedupe, sandbox detection, etc.
// We forward `nitro: { preset: "vercel" }` so production builds emit a Vercel
// Build Output API bundle under .vercel/output/.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
