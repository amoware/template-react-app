import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import zipPack from "vite-plugin-zip-pack";
import { name, version } from "./package.json";

export default defineConfig({
    plugins: [
        react(),
        zipPack({
            outDir: "build",
            outFileName: `${name}-${version}.zip`
        })
    ],
    server: {
        port: 8080
    },
    test: {
        globals: true,
        environment: "jsdom",
        include: ["**/*.spec.{js,jsx,tsx,ts}"],
        setupFiles: "./vitest.setup.js"
    }
});
