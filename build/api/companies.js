'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.company = company;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _people = require('./people');

var _functions = require('./functions');

var _functions2 = _interopRequireDefault(_functions);

var _crud = require('./crud');

var _crud2 = _interopRequireDefault(_crud);

var companies = _extends(Object.create(_crud2['default']), {
    basePath: '/companies',

    /**
     * Fetch projects for a specific company
     *
     * @param  {Integer} id Company ID to fetch projects for
     * @return {Promise}    Bluebird promise, see TW API docs for success JSON
     */
    projects: function projects(id) {
        var requestPath = this.basePath + ('/' + id + '/projects');

        return _functions2['default'].find(requestPath);
    }
});

exports.companies = companies;

function company(id) {
    return {
        people: _extends(Object.create(_people.people), {
            basePath: companies.basePath + ('/' + id) + _people.people.basePath
        }),

        projects: companies.projects.bind(companies, id)
    };
}
//# sourceMappingURL=companies.js.map