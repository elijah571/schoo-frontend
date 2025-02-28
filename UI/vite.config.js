// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      proxy: mode === "development" ? {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        }
      } : undefined,
    },
    preview: {
      host: "0.0.0.0",
      port: 4173,
    }
  };
});
