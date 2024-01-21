FROM node:19-alpine as builder



WORKDIR /creation
COPY package.json package-lock.json ./
RUN npm install
RUN npm install axios
RUN npm install react-chatbot-kit
COPY . .
EXPOSE 3000

CMD ["npm", "start"]