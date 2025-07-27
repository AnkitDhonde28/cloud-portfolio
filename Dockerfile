FROM node:18

WORKDIR /app

COPY  package*.json ./

RUN node install

COPY . . 

CMD [ "node", "start" ]