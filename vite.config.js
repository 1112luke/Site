import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wasm from "vite-plugin-wasm";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), wasm()],
    server: {
        host: true, // Or '0.0.0.0'
        port: 5173,
    },
});
