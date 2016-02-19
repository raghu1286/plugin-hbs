'use strict';

var Handlebars = require('handlebars');

var handlebarsRuntimePath = System.normalizeSync('handlebars/handlebars.runtime', __moduleName);

export function translate(load) {
  var precompiled = Handlebars.precompile(load.source);
  load.source = `module.exports = require('${handlebarsRuntimePath}').template(${precompiled});`;
}
