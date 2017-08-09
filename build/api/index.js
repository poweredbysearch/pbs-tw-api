/** Endpoints */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _activity = require('./activity');

var _activity2 = _interopRequireDefault(_activity);

var _companies = require('./companies');

var _people = require('./people');

var _projects = require('./projects');

var _timeEntries = require('./timeEntries');

var _taskLists = require('./taskLists');

var _tasks = require('./tasks');

var _completedTasks = require('./completedTasks');

var _milestones = require('./milestones');

var _webhooks = require('./webhooks');

var endpoints = {
    activity: _activity2['default'],
    companies: _companies.companies,
    company: _companies.company,
    people: _people.people,
    person: _people.person,
    projects: _projects.projects,
    project: _projects.project,
    timeEntries: _timeEntries.timeEntries,
    taskLists: _taskLists.taskLists,
    taskList: _taskLists.taskList,
    tasks: _tasks.tasks,
    task: _tasks.task,
    completedTask: _completedTasks.completedTask,
    completedTasks: _completedTasks.completedTasks,
    webhooks: _webhooks.webhooks,
    milestones: _milestones.milestones,
    milestone: _milestones.milestone
};

exports['default'] = endpoints;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map