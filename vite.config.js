// solo lo he creado para cambiar el puerto
import { defineConfig } from "vite";

export default defineConfig({
  base: '/weather-app-js/',
  server: {
    host: true,
    port: 5004,
  },
  preview: {
    host: true,
    port: 5005,
    hmr: {
      host: 'localhost',
      protocol: 'wss',
      clientPort: 443
    }
  }
})