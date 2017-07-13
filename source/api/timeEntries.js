// import requestFns from './functions';
import crud from './crud';

export const timeEntries = Object.assign(
    Object.create(crud),
    {
        basePath: '/time_entries'
    }
);
