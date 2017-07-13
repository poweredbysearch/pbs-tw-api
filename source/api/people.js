import requestFns from './functions';
import crud from './crud';

export const people = Object.assign(
    Object.create(crud),
    {
        basePath: '/people'
    }
);

export function person (id) {
    return {};
}
