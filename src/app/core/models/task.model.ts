import * as moment from 'moment';

export class Task {
  taskId: string;
  userId: string;
  title: string;
  type: string;
  date: Date;
  deadline?: Date;
  projectId: string;
  notes: string;

  get isAfterDeadline() {
    return moment().isAfter(moment(this.deadline, 'YYYY-MM-DD'));
  }

  get isDateBeforeToday() {
    return moment().isBefore(moment(this.date, 'YYYY-MM-DD'));
  }
}
