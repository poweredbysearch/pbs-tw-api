'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createApiRequest = createApiRequest;
exports.apiRequest = apiRequest;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _teamwork = require('./teamwork');

var _teamwork2 = _interopRequireDefault(_teamwork);

var apiRequestProto = Object.defineProperties({

    exec: function exec() {
        return new _bluebird2['default'](this.doRequest.bind(this));
    },

    doRequest: function doRequest(resolve, reject) {
        var requestConfig = this.config;

        // append json extension
        requestConfig.uri = requestConfig.uri + '.json';

        (0, _request2['default'])(requestConfig, function (error, response, json) {
            var paging = undefined;

            if (error) {
                reject(error);
            } else if (response.statusCode >= 200 && response.statusCode < 300) {
                if (typeof json === 'string') {
                    json = JSON.parse(json);
                }

                _lodash2['default'].forEach(['x-page', 'x-pages', 'x-records'], function (n) {

                    if (typeof response.headers[n] !== 'undefined') {
                        if (typeof paging === 'undefined') paging = {};

                        paging[n.slice(2)] = response.headers[n];
                    }
                });

                resolve({ json: json, paging: paging });
            } else {
                reject({
                    code: response.statusCode,
                    message: response.statusMessage
                });
            }
        });
    }
}, {
    hostname: {
        get: function get() {
            return _teamwork2['default'].config.domain + '.teamwork.com';
        },
        configurable: true,
        enumerable: true
    },
    baseUrl: {
        get: function get() {
            return 'https://' + this.hostname;
        },
        configurable: true,
        enumerable: true
    },
    config: {
        get: function get() {
            return _extends({
                encoding: 'utf8',
                followRedirect: true,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + new Buffer(_teamwork2['default'].config.apiKey + ':').toString('base64')
                },
                hostname: this.hostname,
                baseUrl: this.baseUrl
            }, this.opts);
        },
        configurable: true,
        enumerable: true
    }
});

exports['default'] = apiRequestProto;

/**
 * Factory function for API request objects
 *
 * @param  {Object}   opts Request options
 * @return {Promise}
 */

function createApiRequest() {
    var requestObject = Object.create(apiRequestProto);
    return requestObject;
}

/**
 * Function for API requests
 *
 * @param  {Object}   opts Request options
 * @return {Promise}
 */

function apiRequest(opts) {
    var requestObject = _extends(createApiRequest(), { opts: opts });
    return requestObject.exec();
}
//# sourceMappingURL=apiRequest.js.map