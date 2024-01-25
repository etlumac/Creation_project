FROM node:19-alpine

RUN npm install -g nodemon
WORKDIR /creation
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 3001

CMD ["npm", "run", "dev"]
