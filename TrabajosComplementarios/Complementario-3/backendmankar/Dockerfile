# FROM node

# # Copia el código fuente al contenedor
# COPY . /app

# # Establece el directorio de trabajo
# WORKDIR /app

# # Copia los archivos package*.json para instalar dependencias
# COPY package*.json /

# # Instala las dependencias
# RUN npm install

# # Ejecuta el comando de construcción para generar la carpeta 'Dist'
# RUN npm run build

# # Expone el puerto 3000
# EXPOSE 3000

# # Inicia la aplicación
# CMD ["node", "Dist/Index.js"]


FROM node as install
WORKDIR /app
COPY package.json ./
RUN npm install

# Tests y Build
FROM node:16 as test
WORKDIR /app
COPY --from=install /app/node_modules ./node_modules
COPY . .
RUN npm run test -- Respostajes.ts

# Dependencias 
FROM node:16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Ejecutar APP
FROM node:16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY . .
CMD ["node", "Dist/Index.js"]




