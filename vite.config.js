import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [vue()],
    root: resolve(__dirname, "src"),
    build: {
        outDir: "../dist"
    },
    server: {
        port: 8080
    }
});
