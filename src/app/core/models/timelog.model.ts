
export class Timelog {
  userId: string;
  taskId: string;
  start: Date;
  end: Date;

  get isOnGoing() {
    return this.end === null;
  }
}
