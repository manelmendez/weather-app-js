// solo lo he creado para cambiar el puerto
import { defineConfig } from "vite";

export default defineConfig ({
  server: {
    host: true,
    port: 5004,
    hmr: {
      host: 'localhost',
      protocol: 'wss',
      clientPort: 443
    }
  },
  preview: {
    port: 5005
  }
})