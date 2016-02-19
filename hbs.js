'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.translate = translate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

var handlebarsRuntimePath = System.normalizeSync('handlebars/handlebars.runtime', __moduleName);

function translate(load) {
  var precompiled = _handlebars2['default'].precompile(load.source);
  load.source = 'module.exports = require(\'' + handlebarsRuntimePath + '\').template(' + precompiled + ');';
}