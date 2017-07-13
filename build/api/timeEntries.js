// import requestFns from './functions';
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _crud = require('./crud');

var _crud2 = _interopRequireDefault(_crud);

var timeEntries = _extends(Object.create(_crud2['default']), {
    basePath: '/time_entries'
});
exports.timeEntries = timeEntries;
//# sourceMappingURL=timeEntries.js.map