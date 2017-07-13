import {people} from './people';
import requestFns from './functions';
import crud from './crud';

export const companies = Object.assign(
    Object.create(crud),
    {
        basePath: '/companies',

        /**
         * Fetch projects for a specific company
         *
         * @param  {Integer} id Company ID to fetch projects for
         * @return {Promise}    Bluebird promise, see TW API docs for success JSON
         */
        projects: function (id) {
            let requestPath = this.basePath + `/${id}/projects`;

            return requestFns.find(requestPath);
        }
    }
);

export function company (id) {
    return {
        people: Object.assign(Object.create(people), {
            basePath: companies.basePath + `/${id}` + people.basePath
        }),

        projects: companies.projects.bind(companies, id)
    };
}
