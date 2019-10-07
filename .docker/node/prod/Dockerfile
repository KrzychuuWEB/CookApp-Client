# Production App
FROM node:10 AS node-prod

RUN mkdir /app

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install --silent

RUN npm install react-scripts -g --silent

COPY .. /app

RUN file="$(ls -1 /app)" && echo $file

RUN npm run build

# Production App Nginx
FROM nginx:1.17

COPY ./.docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node-prod /app/build /var/www/html

RUN file="$(ls -1 /var/www/html/)" && echo $file

CMD ["nginx", "-g", "daemon off;"]