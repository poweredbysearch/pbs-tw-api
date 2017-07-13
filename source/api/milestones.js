import requestFns from './functions';
import crud from './crud';

export const milestones = Object.assign(
    Object.create(crud),
    {
        basePath: '/milestones',
    }
);

export function milestone (id) {
    return {};
}
