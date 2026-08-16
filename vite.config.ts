import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * VITE BUILD & DEVELOPMENT CONFIGURATION
 * 
 * - react(): Enables JSX / Fast Refresh support for React.
 * - tailwindcss(): Official Vite plugin for Tailwind CSS v4 styling.
 * - base: Specifies the public base path when served in production.
 *   On GitHub Pages (https://<username>.github.io/<repo>/), assets must be
 *   served from '/<repo>/' rather than root '/'.
 */
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: "/JensWebPage/",
});
