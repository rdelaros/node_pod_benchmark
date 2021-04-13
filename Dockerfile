FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY src/ /usr/src/app/
RUN npm install
CMD [ "npm", "start" ]
