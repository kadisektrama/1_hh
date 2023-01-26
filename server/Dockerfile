FROM node:12-alpine
WORKDIR /server
COPY package.json /server/package.json
RUN npm install
COPY . /server
EXPOSE 8080
#CMD ["npm", "start"]