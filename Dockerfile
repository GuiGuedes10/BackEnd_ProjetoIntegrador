from node:lts

WORKDIR /usr/src/projeto-integrador-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]