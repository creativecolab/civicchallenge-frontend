#Credits to Iliyan Trifonov <iliyan.trifonov@gmail.com> for Node 7.6.0 install  

FROM ubuntu:14.04

#install required software before using nvm/node/npm/bower
RUN apt-get update && apt-get install -y curl git python build-essential

#add user node and use it to install node/npm and run the app
RUN useradd --home /home/node -m -U -s /bin/bash node

#run all of the following commands as user node from now on
USER node

RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

#change it to your required node version
ENV NODE_VERSION 7.6.0

#needed by nvm install
ENV NVM_DIR /home/node/.nvm

#install the specified node version and set it as the default one, install the global npm packages
RUN . ~/.nvm/nvm.sh && nvm install $NODE_VERSION && nvm alias default $NODE_VERSION
  
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN yarn install
RUN yarn build:all

COPY . /app

EXPOSE 3000

CMD ["npm","start"]
