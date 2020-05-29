FROM alpine:3.7
WORKDIR /usr/src/app
RUN apk add nodejs
COPY package*.json ./
RUN npm install
RUN addgroup noadmin
RUN adduser node -g noadmin -D
USER node
COPY . .
EXPOSE 8080
CMD ["npm", "start"]