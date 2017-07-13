import _ from 'lodash';
import requestFns from './functions';
import crud from './crud';
import {timeEntries} from './timeEntries';
import {taskLists} from './taskLists';
import {tasks} from './tasks';

export const projects = Object.assign(
    Object.create(crud),
    {
        basePath: '/projects',

        /**
         * Get the authenticated user's starred projects
         */
        starred () {
            return requestFns.find(this.basePath);
        },

        /**
         * Add/remove people on the project
         *
         * @param  {Integer} id Project ID to fetch projects for
         * @return {Promise}    Bluebird promise, see TW API docs for success JSON
         */
        people (id) {
            let requestPath = this.basePath + `/${id}/people`;

            return {
                add (personId) {
                    return requestFns.create(requestPath + `/${personId}`);
                }
            };
        },

        /**
         * Star
         *
         * @param  {Integer} id Project ID to star
         * @return {Promise}    Bluebird promise, see TW API docs for success JSON
         */
        star (id) {
            let requestPath = this.basePath + `/${id}/star`;

            return requestFns.update(requestPath);
        },

        /**
         * Un-Star
         *
         * @param  {Integer} id Project ID to Un-star
         * @return {Promise}    Bluebird promise, see TW API docs for success JSON
         */
        unstar (id) {
            let requestPath = this.basePath + `/${id}/unstar`;

            return requestFns.update(requestPath);
        }
    }
);

export function project (id) {

    return {

        timeEntries: Object.assign(Object.create(timeEntries), {
            basePath: projects.basePath + `/${id}` + timeEntries.basePath
        }),

        taskLists: Object.assign(_.omit(Object.create(taskLists), ['update', 'delete']), {
            basePath: projects.basePath + `/${id}` + taskLists.basePath,

            reorder (data) {
                return requestFns.update(this.basepath + '/reorder', data);
            }
        }),

        tasks: Object.assign(_.pick(Object.create(tasks), ['find']), {
          basePath: projects.basePath + `/${id}` + tasks.basePath
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
