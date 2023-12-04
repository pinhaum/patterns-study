import IObserver from "../interfaces/iobserver";
import Video from "./video";

export default class Feed implements IObserver {
  public url: string;
  constructor(public readonly channelId: string) {
    this.url = `https://pt.wikipedia.org/wiki/${this.channelId}`;
  }

  update(video: Video) {
    console.log(`New video added in Feed: "${video.title}"`);
    console.log(`Check this out : "${this.url}"`);
  }
}
