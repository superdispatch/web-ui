'use strict';

// temporary workaround while we wait for https://github.com/facebook/jest/issues/9771
const resolver = require('enhanced-resolve').create.sync({
  conditionNames: ['require', 'node', 'default'],
  extensions: ['.js', '.json', '.node', '.ts', '.tsx', '.cjs'],
});

module.exports = (request, options) => {
  // list global module that must be resolved by defaultResolver here
  if (['fs', 'http', 'path'].includes(request)) {
    return options.defaultResolver(request, options);
  }

  return resolver(options.basedir, request);
};
