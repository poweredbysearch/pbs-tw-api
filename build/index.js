/** Teamwork modules */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _teamwork = require('./teamwork');

var _teamwork2 = _interopRequireDefault(_teamwork);

exports['default'] = {

  /**
   * Your config should look like this
   *
   * @type {Object}
   *
   * let config = {
   *   apiKey: API_KEY
   *   domain: YOUR_TEAMWORK_SUBDOMAIN (found in http://YOUR_TEAMWORK_SUBDOMAIN.teamwork.com)
   * };
   */
  create: function create() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    // Check that the config was passed before creating the object
    if (Object.is(undefined, config.apiKey) || Object.is(undefined, config.domain)) {
      return false;
    }

    return _extends(_teamwork2['default'], { config: config });
  }

};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map