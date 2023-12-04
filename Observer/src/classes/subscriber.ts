import IObserver from "../interfaces/iobserver";
import Video from "./video";

export default class Subscriber implements IObserver {
  constructor(public readonly id: number, public readonly name: string) {}

  update(video: Video) {
    console.log(`${this.name} has been notified about new video: ${video.title}`);
  }
}
