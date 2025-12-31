import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * VITE CONFIGURATION
 * Using the official @tailwindcss/vite plugin for v4 support.
 */
export default defineConfig({
	plugins: [react(), tailwindcss()],
});
