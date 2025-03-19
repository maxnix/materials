import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": `/src`,
      "@lezioni": `/src/lezioni`,
      "@assets": `/src/assets`,
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100, // Riduci l'intervallo per una reattività maggiore
    },
  },
});

