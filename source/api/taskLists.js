import requestFns from './functions';
import {tasks} from './tasks.js';
import crud from './crud';
import _ from 'lodash';

export const taskLists = Object.assign(
  Object.create(crud), {
    basePath: '/tasklists',

    templates () {
      return requestFns.find(this.basePath + '/templates');
    }
  }
);

export function taskList (id) {

  return {

    tasks: Object.assign(_.pick(Object.create(tasks), ['create']), {
      basePath: taskLists.basePath + `/${id}` + tasks.basePath
    })

  };
}
