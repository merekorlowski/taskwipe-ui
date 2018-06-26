import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Task } from '../models/task.model';
import { AddTask, RemoveTask } from '../actions/task.actions';

export class TaskStateModel {
  tasks: Task[];
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: []
  }
})
export class TaskState {
  @Selector()
  static getTasks(state: TaskStateModel) {
    return state.tasks;
  }

  @Action(AddTask)
  addTask({ getState, patchState }: StateContext<TaskStateModel>, { payload }: AddTask) {
    const state = getState();
    patchState({
      tasks: [...state.tasks, payload]
    });
  }

  @Action(RemoveTask)
  removeTask({ getState, patchState }: StateContext<TaskStateModel>, { payload }: RemoveTask) {
    patchState({
      tasks: getState().tasks.filter(task => task.taskId != payload)
    });
  }

}
