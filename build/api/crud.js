'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _functions = require('./functions');

var _functions2 = _interopRequireDefault(_functions);

var crud = {

    /**
     * Find (get request)
     *
     * @param  {Object/Int} params Will look for a single record if int is passed
     * @return {Promise}           bluebird promise
     */
    find: function find(params) {
        if (params === parseInt(params, 10)) {
            return _functions2['default'].find(this.basePath + ('/' + params));
        }

        return _functions2['default'].find(this.basePath, params);
    },

    create: function create(data) {
        return _functions2['default'].create(this.basePath, data);
    },

    update: function update(id, data) {
        return _functions2['default'].update(this.basePath + ('/' + id), data);
    },

    destroy: function destroy(id) {
        return _functions2['default'].destroy(this.basePath + ('/' + id));
    }

};

exports['default'] = crud;
module.exports = exports['default'];
//# sourceMappingURL=crud.js.map