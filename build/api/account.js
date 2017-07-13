'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _functions = require('./functions');

var _functions2 = _interopRequireDefault(_functions);

var account = {
    account: function account() {
        return _functions2['default'].find('/account');
    },

    authenticate: function authenticate() {
        return _functions2['default'].find('/authenticate');
    }
};

exports['default'] = account;
module.exports = exports['default'];
//# sourceMappingURL=account.js.map