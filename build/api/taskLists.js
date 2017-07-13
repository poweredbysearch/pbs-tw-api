'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.taskList = taskList;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _functions = require('./functions');

var _functions2 = _interopRequireDefault(_functions);

var _tasksJs = require('./tasks.js');

var _crud = require('./crud');

var _crud2 = _interopRequireDefault(_crud);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var taskLists = _extends(Object.create(_crud2['default']), {
  basePath: '/tasklists',

  templates: function templates() {
    return _functions2['default'].find(this.basePath + '/templates');
  }
});

exports.taskLists = taskLists;

function taskList(id) {

  return {

    tasks: _extends(_lodash2['default'].pick(Object.create(_tasksJs.tasks), ['create']), {
      basePath: taskLists.basePath + ('/' + id) + _tasksJs.tasks.basePath
    })

  };
}
//# sourceMappingURL=taskLists.js.map