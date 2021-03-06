/** Endpoints */
import activity from './activity';
import {companies, company} from './companies';
import {people, person} from './people';
import {projects, project} from './projects';
import {timeEntries} from './timeEntries';
import {taskLists, taskList} from './taskLists';
import {tasks, task} from './tasks';
import {completedTasks, completedTask} from './completedTasks';
import {milestones, milestone} from './milestones';
import {webhooks} from './webhooks';

let endpoints = {
    activity,
	companies,
    company,
    people,
    person,
    projects,
    project,
    timeEntries,
    taskLists,
    taskList,
    tasks,
    task,
    completedTask,
    completedTasks,
    webhooks,
    milestones,
    milestone
};

export default endpoints;
