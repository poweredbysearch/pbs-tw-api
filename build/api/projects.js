'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.project = project;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _functions = require('./functions');

var _functions2 = _interopRequireDefault(_functions);

var _crud = require('./crud');

var _crud2 = _interopRequireDefault(_crud);

var _timeEntries = require('./timeEntries');

var _taskLists = require('./taskLists');

var _tasks = require('./tasks');

var projects = _extends(Object.create(_crud2['default']), {
    basePath: '/projects',

    /**
     * Get the authenticated user's starred projects
     */
    starred: function starred() {
        return _functions2['default'].find(this.basePath);
    },

    /**
     * Add/remove people on the project
     *
     * @param  {Integer} id Project ID to fetch projects for
     * @return {Promise}    Bluebird promise, see TW API docs for success JSON
     */
    people: function people(id) {
        var requestPath = this.basePath + ('/' + id + '/people');

        return {
            add: function add(personId) {
                return _functions2['default'].create(requestPath + ('/' + personId));
            }
        };
    },

    /**
     * Star
     *
     * @param  {Integer} id Project ID to star
     * @return {Promise}    Bluebird promise, see TW API docs for success JSON
     */
    star: function star(id) {
        var requestPath = this.basePath + ('/' + id + '/star');

        return _functions2['default'].update(requestPath);
    },

    /**
     * Un-Star
     *
     * @param  {Integer} id Project ID to Un-star
     * @return {Promise}    Bluebird promise, see TW API docs for success JSON
     */
    unstar: function unstar(id) {
        var requestPath = this.basePath + ('/' + id + '/unstar');

        return _functions2['default'].update(requestPath);
    }
});

exports.projects = projects;

function project(id) {

    return {

        timeEntries: _extends(Object.create(_timeEntries.timeEntries), {
            basePath: projects.basePath + ('/' + id) + _timeEntries.timeEntries.basePath
        }),

        taskLists: _extends(_lodash2['default'].omit(Object.create(_taskLists.taskLists), ['update', 'delete']), {
            basePath: projects.basePath + ('/' + id) + _taskLists.taskLists.basePath,

            reorder: function reorder(data) {
                return _functions2['default'].update(this.basepath + '/reorder', data);
            }
        }),

        tasks: _extends(_lodash2['default'].pick(Object.create(_tasks.tasks), ['find']), {
            basePath: projects.basePath + ('/' + id) + _tasks.tasks.basePath
        }),

        people: projects.people.call(projects, id),

        /**
         * Star a project
         *
         * @return {Promise}
         */
        star: projects.star.bind(projects, id),

        /**
         * Unstar a project
         *
         * @return {Promise}
         */
        unstar: projects.unstar.bind(projects, id)

    };
}
//# sourceMappingURL=projects.js.map