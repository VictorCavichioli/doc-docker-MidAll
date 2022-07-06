FROM node:latest as node
WORKDIR /app
COPY package.json /app
RUN npm install 
#ENTRYPOINT ["ng", "serve"]
#CMD ng serve --host 0.0.0.0
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY /dist/clientes-app /usr/share/nginx/html
COPY ./config/nginx.conf/ /etc/nginx/conf.d/default.conf
EXPOSE 4200

# docker build -t frontend-midall .
# docker run -p 4200:4200 frontend-midall