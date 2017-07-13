'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _apiRequest = require('../apiRequest');

var requestFns = {

    /**
     * Return function attached to endpoints
     *
     * @param  {Object/Integer}   params [description]
     * @return {[type]}          [description]
     */
    find: function find(path) {
        var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        var opts = {
            uri: path,
            method: 'get',
            qs: params
        };

        return (0, _apiRequest.apiRequest)(opts);
    },

    create: function create(path) {
        var data = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        var opts = {
            uri: path,
            method: 'post',
            json: data
        };

        return (0, _apiRequest.apiRequest)(opts);
    },

    update: function update(path) {
        var data = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        var opts = {
            uri: path,
            method: 'put',
            json: data
        };

        return (0, _apiRequest.apiRequest)(opts);
    },

    destroy: function destroy(path) {
        var opts = {
            uri: path,
            method: 'delete'
        };

        return (0, _apiRequest.apiRequest)(opts);
    }

};

exports['default'] = requestFns;
module.exports = exports['default'];
//# sourceMappingURL=functions.js.map