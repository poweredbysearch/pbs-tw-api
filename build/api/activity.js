'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _functions = require('./functions');

var _functions2 = _interopRequireDefault(_functions);

var activity = {
    latest: function latest() {
        return _functions2['default'].find('/latestActivity');
    }
};

exports['default'] = activity;
module.exports = exports['default'];
//# sourceMappingURL=activity.js.map