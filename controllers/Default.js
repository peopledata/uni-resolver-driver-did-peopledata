'use strict';

var utils = require('../utils/writer.js');
var ResolveService = require('../service/ResolveService');

module.exports.resolve = function resolve (req, res, next, identifier, accept) {
  ResolveService.resolve(identifier, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
