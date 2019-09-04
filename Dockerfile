# Credit to MAINTAINER Kamil Karczmarczyk <kkarczmarczyk@gmail.com>

FROM node:7.6

RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/
COPY . /app/

RUN yarn install
RUN yarn build:all

EXPOSE 3000

CMD ["npm","start"]
