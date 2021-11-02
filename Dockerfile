FROM node:16.13.0-alpine

WORKDIR /usr/src/blogNode

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3001

CMD [ "yarn", "start"]
