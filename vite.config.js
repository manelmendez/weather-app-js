// solo lo he creado para cambiar el puerto
import { defineConfig } from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig ({
  plugins: [reactRefresh()],
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