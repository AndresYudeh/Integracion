# Etapa de construcción
FROM node:16.20.1 AS build

# Actualizar npm
# RUN npm install -g npm@latest

WORKDIR /app

COPY package*.json ./


# Forzar la resolución de dependencias
RUN npm install --force

COPY . .

RUN npm run build --prod


# Etapa de despliegue
FROM nginx:latest

# Elimina la configuración predeterminada de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos generados por Angular en la carpeta de despliegue de Nginx
COPY --from=build /app/dist/frontend-mankar-angular /usr/share/nginx/html

# Copia el archivo de configuración personalizado de Nginx
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 3003

CMD ["nginx", "-g", "daemon off;"]
