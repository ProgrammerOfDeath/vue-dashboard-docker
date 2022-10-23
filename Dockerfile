FROM node:16.18

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 8080

ENTRYPOINT [ "npm", "run", "serve" ]