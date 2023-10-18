FROM node:16.20.1 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build --prod


FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/frontend-mankar-angular /usr/share/nginx/html

COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 3003

CMD ["nginx", "-g", "daemon off;"]
