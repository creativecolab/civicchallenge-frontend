FROM node:12.2.0-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN yarn install
RUN yarn build:all

COPY . /app

EXPOSE 3000

CMD ["npm","start"]
