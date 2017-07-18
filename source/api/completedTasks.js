import requestFns from './functions';
import crud from './crud';

export const completedtasks = Object.assign(
    Object.create(crud),
    {
        basePath: '/completedtasks',
    }
);

export function completedtask (id) {
    return {};
}
