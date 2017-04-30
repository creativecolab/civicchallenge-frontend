# Title

> Currently hosted at https://d4sd.org/

[![Build Status](https://travis-ci.org/davidcluu/civicchallenge-frontend.svg?branch=master)](https://travis-ci.org/davidcluu/civicchallenge-frontend) [![dependencies Status](https://david-dm.org/davidcluu/civicchallenge-frontend/status.svg)](https://david-dm.org/davidcluu/civicchallenge-frontend) [![devDependencies Status](https://david-dm.org/davidcluu/civicchallenge-frontend/dev-status.svg)](https://david-dm.org/davidcluu/civicchallenge-frontend?type=dev)

<!--
[![Node.js v7.8.0](https://img.shields.io/badge/Node.js-7.8.0-green.svg)](https://nodejs.org) [![Express v4.15.2](https://img.shields.io/badge/Express-4.15.2-lightgrey.svg)](https://expressjs.com/) [![React v15.5.4](https://img.shields.io/badge/React-15.5.4-blue.svg)](https://facebook.github.io/react/)
-->

## Overview

- Frontend: React w/ Server Side Rendering + Redux + CSS (SCSS)
- Backend: Node.js + Express
- Lint Tools: ESLint (Airbnb Config)
- Build Tools: Webpack + Babel (Stage 0 + React + ES2015 Presets)
- Test Tools: AVA (Unit Testing), **[TODO]** Nightwatch.js (Browser Testing)
- Deployment Tools: pm2

## Requirements

- Node.js
- Yarn

#### Installing Node.js

Visit [the Node.js website](https://nodejs.org/) and follow the instructions to download/install. The Node.js installation comes with npm.

Using [nvm](https://github.com/creationix/nvm) is recommended to manage Node.js versions.

#### Installing Yarn

Visit [the Yarn website](https://yarnpkg.com/) and follow the instructions to download/install.

#### Installing npm packages

In the root directory of the project, run this command:

`yarn` (short for `yarn install`)

## Development Mode

In the root directory of the project, run this command:

`yarn dev` (short for `yarn run dev`)

Development mode currently has these features:
- Hot module reloading
- Source mapping for CSS/JS files

## Linting Info

This project uses [ESLint](http://eslint.org/) with the full [Airbnb config](https://github.com/airbnb/javascript). Linting should work out of the box if the npm modules are installed.

In development mode, lint errors will result in an overlay on the browser window with the errors displayed and lint warnings will result in a warning message on the browser console. Both errors and warnings will be displayed on the terminal window.

To manually run ESLint on all client/server code, run this command:

`yarn lint` (short for `yarn run lint`)

## Build Info

To build the production version of the project, run this command:

`yarn build:all` (short for `yarn run build:all`)

## Test Info

A barebones testing configuration with [AVA](https://github.com/avajs) for unit testing is set up. [Nightwatch](http://nightwatchjs.org/) for browser testing will be set up. There are no substantial test cases written yet. To test the project, run this command:

`yarn test` (short for `yarn run test`)

## People

TODO :)

## Known Issues/Fixes

- (4-28-2017) In development mode, an error message similar to the one copied below is displayed on the console. This is caused by [the way that hot module reloading is implemented](/client/index.jsx) and does not cause issues in development mode or persist in producton mode. ([source 1](https://github.com/Hashnode/mern-starter/issues/149), tested and confirmed)
```
Warning: React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server:
 (client) <!-- react-empty: 1 -
 (server) <div data-reactid="1"
```
