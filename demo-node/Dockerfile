FROM node:latest
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN mkdir -p /demo-node
WORKDIR /demo-node
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8888
CMD [ "npm", "start" ]
