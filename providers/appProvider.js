const AppService = require('../services/app-service');

module.exports = function (c) {
  c.service('AppService', c => new AppService());
};
