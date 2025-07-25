import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      formats: ["es"],
      entry: "./src/index.ts",
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: ["react"],
    },
  },

  plugins: [
    react(),
    dts({
      strictOutput: true,
      rollupTypes: true,
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      exclude: ["**/*.stories.ts"],
    }),
  ],
});
