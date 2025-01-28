FROM node:23-alpine AS build

# set work directory on Docker
WORKDIR /projects/weather-app-js

# Copy project from Host to Docker
COPY ./ ./

# Install client dependencies and build it
RUN npm install && npm run build

# EXPOSE 5005
# CMD [ "npm", "run", "preview" ]

# Al final, solo necesitamos los archivos estáticos de Vue.js
# Estos se copiarán al directorio de trabajo que Caddy usará más tarde
FROM nginx:alpine

# Copiar el archivo de configuración de Nginx
COPY --from=build /projects/weather-app-js/nginx.conf /etc/nginx/nginx.conf

# Copia los archivos construidos al directorio de Nginx
COPY --from=build /projects/weather-app-js/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80