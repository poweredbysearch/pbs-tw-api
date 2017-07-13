'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.task = task;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _functions = require('./functions');

var _functions2 = _interopRequireDefault(_functions);

var _crud = require('./crud');

var _crud2 = _interopRequireDefault(_crud);

var tasks = _extends(Object.create(_crud2['default']), {
    basePath: '/tasks',

    /**
     * Fetch tasks for a specific company
     *
     * @param  {Integer} id Company ID to fetch tasks for
     * @return {Promise}    Bluebird promise, see TW API docs for success JSON
     */
    complete: function complete(id) {
        var requestPath = this.basePath + ('/' + id + '/complete');

        return _functions2['default'].update(requestPath);
    },

    /**
     * Fetch tasks for a specific company
     *
     * @param  {Integer} id Company ID to fetch tasks for
     * @return {Promise}    Bluebird promise, see TW API docs for success JSON
     */
    uncomplete: function uncomplete(id) {
        var requestPath = this.basePath + ('/' + id + '/uncomplete');

        return _functions2['default'].update(requestPath);
    }
});

exports.tasks = tasks;

function task(id) {

    return {

        /**
         * Star a project
         *
         * @return {Promise}
         */
        complete: tasks.complete.bind(tasks, id),

        /**
         * Uncomplete a project
         *
         * @return {Promise}
         */
        uncomplete: tasks.uncomplete.bind(tasks, id)

    };
}
//# sourceMappingURL=tasks.js.map