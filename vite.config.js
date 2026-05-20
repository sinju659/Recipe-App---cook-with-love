import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import "aos/dist/aos.css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
