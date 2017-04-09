/* eslint-disable */

/**
 * Spaghetti fix to webpack relative path into node_modules issue. TODO look into root cause of issue.
 */

var ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers');
var ExternalModule = require('webpack/lib/ExternalModule');

function ExternalsPlugin(opts) {
  this.opts = opts;
}

ExternalsPlugin.prototype.apply = function(compiler) {
  var opts = this.opts;
  compiler.plugin('normal-module-factory', function(nmf) {
    nmf.plugin('factory', function(factory) {
      return function(data, callback) {
        factory(data, function(err, module) {
          if (err) {
            return callback(err);
          }
          if (ModuleFilenameHelpers.matchObject(opts, module.resource)) {
            const request = data.dependencies[0].request;
            const match = request.match(/(..[\/]|.[\/])node_modules/);
            let newRequest = '';
            if (match) {
              newRequest = data.dependencies[0].request.slice(match.index);
            } else {
              newRequest = data.dependencies[0].request;
            }
            return callback(null, new ExternalModule(
              newRequest,
              opts.type || compiler.options.output.libraryTarget
            ));
          }
          callback(null, module);
        });
      };
    });
  });
};

module.exports = ExternalsPlugin;
