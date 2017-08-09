import requestFns from './functions';
import crud from './crud';

export const completedTasks = Object.assign(
    Object.create(crud),
    {
        basePath: '/completedtasks',
    }
);

export function completedTask (id) {
    return {};
}
