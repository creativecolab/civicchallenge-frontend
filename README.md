# Title

> Currently hosted at https://designsandiego.ucsd.edu/

[![Build Status](https://travis-ci.org/davidcluu/civicchallenge-frontend.svg?branch=master)](https://travis-ci.org/davidcluu/civicchallenge-frontend) [![Node.js v7.8.0](https://img.shields.io/badge/Node.js-7.8.0-green.svg)](https://nodejs.org) [![Express v4.x](https://img.shields.io/badge/Express-4.x-lightgrey.svg)](https://expressjs.com/)

## Overview

- Frontend: React w/ Server Side Rendering + Redux + CSS (SCSS)
- Backend: Node.js + Express
- Lint Tools: ESLint (Airbnb Config)
- Build Tools: Webpack + Babel (Stage 0 + React + ES2015 Presets)
- Test Tools (TODO): AVA (Unit Testing), JSVerify (Property Testing), Nightwatch.js (Browser Testing)
- Deployment Tools: pm2

## Lint/Build/Test/Deployment Info

## Known Issues/Fixes

- (4-28-2017) In development mode, the following is displayed on the console. This is related to [the way that hot module reloading is implemented](/client/index.jsx) and does not cause issues in development mode or persist in producton mode. ([solution source](https://github.com/Hashnode/mern-starter/issues/149), tested and confirmed)
```
Warning: React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server:
 (client) <!-- react-empty: 1 -
 (server) <div data-reactid="1"
```
