import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: "src/setupTests.ts",
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      globals: true,
      coverage: {
        all: true,
        enabled: true,
        thresholds: {
          branches: 100,
        },
        include: ["src/components/**", "src/features/**", "src/utilities/**"],
        exclude: [
          "**/**{Container,container}.vue",
          "**/{Default,default}**.*",
          "**/**.stories.ts",
          "**/{Story, story}**.*",
          "**/**.test.ts",
          "**/**TestBed.*",
          "**/**.routes.*",
          "**/index.*",
        ],
      },
    },
  }),
);
