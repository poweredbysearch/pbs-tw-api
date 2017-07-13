import requestFns from './functions';
import crud from './crud';

export const webhooks = Object.assign(
    Object.create(crud),
    {
        basePath: '/webhooks'
    }
);