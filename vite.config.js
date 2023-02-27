// solo lo he creado para cambiar el puerto

import { defineConfig } from "vite";

export default defineConfig ({
  server: {
    port: 5004
  },
  preview: {
    port: 5005
  }
})