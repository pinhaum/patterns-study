import ISubject from "../interfaces/isubject";
import IObserver from "../interfaces/iobserver";
import Video from "../classes/video";

export default class VideoNotification implements ISubject {
  private observers: IObserver[] = [];

  constructor(public readonly video: Video) {}

  subscribe(sub: IObserver): void {
    this.observers.push(sub);
  }

  unsubscribe(sub: IObserver): void {
    this.observers = this.observers.filter(
      (element: IObserver) => element !== sub
    );
  }

  unsubscripeAll() {
    this.observers = [];
  }

  notify(sub: IObserver): void {
    sub.update(this.video);
  }

  notifyAll(): void {
    this.observers.forEach((sub) => this.notify(sub));
  }
}
