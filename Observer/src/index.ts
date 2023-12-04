import Video from "./classes/video";
import Feed from "./classes/feed";
import Subscriber from "./classes/subscriber";
import VideoNotification from "./classes/video_notification";

const video = new Video(
  "video-id-test", 
  "Título do vídeo na plataforma desejada",
  "https://pt.wikipedia.org/wiki/Observer" 
);

const videoNotification = new VideoNotification(video);

// Subscribers (Observers)
const gabriel = new Subscriber(1, "Gabriel");
const fulano = new Subscriber(2, "Fulano");
const ciclano = new Subscriber(3, "Ciclano");
const videoFeed = new Feed("Observer");

// generate videoNotification
videoNotification.subscribe(gabriel);
videoNotification.subscribe(fulano);
videoNotification.subscribe(ciclano);
videoNotification.subscribe(videoFeed);

console.log("Notificando os observers...");
videoNotification.notifyAll();
console.log("----------------------------------------------------------");

// Unsubscribe ciclano
videoNotification.unsubscribe(ciclano);

// Notify again, should not include ciclano
console.log("Notificando os observers...");
videoNotification.notifyAll();
console.log("----------------------------------------------------------");

