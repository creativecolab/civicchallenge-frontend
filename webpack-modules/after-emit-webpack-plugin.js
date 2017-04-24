/* eslint-disable no-console */

const path = require('path');
const fs = require('fs');

// function AfterEmitPlugin(options) {
function AfterEmitPlugin() {}

AfterEmitPlugin.prototype.apply = (compiler) => {
  // compiler.plugin('done', (stats) => {
  compiler.plugin('done', () => {
    const date = new Date();
    const publicPath = path.join(__dirname, '../public');

    try {
      /*
       * humans.txt
       */

      fs.writeFileSync(path.join(publicPath, 'humans.txt'),
`*** ABOUT ***

Developer: David Luu
Contact: luu dot david dot c at google dot com
Website: https://davidluu.me/

*** SITE ***

Last Update: ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}
Language: English
Development Tools: Terminal, Sublime Text, Sketch`
      );
    } catch (err) {
      console.error(err);
    }
  });
};

module.exports = AfterEmitPlugin;
