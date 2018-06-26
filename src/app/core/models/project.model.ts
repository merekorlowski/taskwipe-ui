const STATUS = {
  COMPLETED: 'COMPLETED',
  ON_GOING: 'ON_GOING',
  IS_PAUSED: 'IS_PAUSED'
};

export default class Project {
  projectId: string;
  userId: string;
  title: string;
  deadline?: Date;
  status: string;
  notes: string;

  get isCompleted() {
    return this.status === STATUS.COMPLETED;
  }

  get isOnGoing() {
    return this.status === STATUS.ON_GOING;
  }

  get isPaused() {
    return this.status === STATUS.IS_PAUSED;
  }
}
