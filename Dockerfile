# Utilizar Node.js como base para mayor compatibilidad
FROM node:20-alpine as base

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de dependencias
COPY package.json package-lock.json* ./

# Instalar las dependencias
RUN npm ci --only=production

# Copiar el resto de los archivos del proyecto
COPY . .

# ===== STAGE: Build =====
FROM base as build

# Instalar todas las dependencias (incluyendo devDependencies)
RUN npm ci

# Construir la aplicación para producción
RUN npm run build

# ===== STAGE: Production =====
# Usar nginx para servir la aplicación en producción
FROM nginx:alpine as production

# Copiar los archivos construidos al directorio correcto de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Crear configuración personalizada de nginx para SPA
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    error_page 404 /index.html; \
}' > /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]