import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import zipPack from "vite-plugin-zip-pack";
import { name, version } from "./package.json";

export default defineConfig({
    plugins: [
        react(),
        zipPack({
            outDir: ".",
            outFileName: `${name}-${version}.zip`
        })
    ],
    server: {
        open: true,
        port: 8080,
        strictPort: true
    },
    test: {
        globals: true,
        environment: "jsdom",
        include: ["**/*.spec.{js,jsx,tsx,ts}"],
        setupFiles: "./vitest.setup.js"
    }
});
