FROM node

# Copia el código fuente al contenedor
COPY . /app

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package*.json para instalar dependencias
COPY package*.json /

# Instala las dependencias
RUN npm install

# Ejecuta el comando de construcción para generar la carpeta 'Dist'
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD ["node", "Dist/Index.js"]
