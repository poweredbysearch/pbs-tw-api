import requestFns from './functions';
import crud from './crud';

export const tasks = Object.assign(
    Object.create(crud),
    {
        basePath: '/tasks',

        /**
         * Fetch tasks for a specific company
         *
         * @param  {Integer} id Company ID to fetch tasks for
         * @return {Promise}    Bluebird promise, see TW API docs for success JSON
         */
        complete: function (id) {
            let requestPath = this.basePath + `/${id}/complete`;

            return requestFns.update(requestPath);
        },

        /**
         * Fetch tasks for a specific company
         *
         * @param  {Integer} id Company ID to fetch tasks for
         * @return {Promise}    Bluebird promise, see TW API docs for success JSON
         */
        uncomplete: function (id) {
            let requestPath = this.basePath + `/${id}/uncomplete`;

            return requestFns.update(requestPath);
        }
    }
);

export function task (id) {

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
