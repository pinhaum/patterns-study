import { GameObject } from "./classes/game-object";

const pedestrian = new GameObject('pedestrian-sprite.png', 0, 0);
pedestrian.moveX(10)
pedestrian.showProperties();

const clonedPedestrian1 = pedestrian.clone();
clonedPedestrian1.moveY(10)
clonedPedestrian1.showProperties(); 

const clonedPedestrian2 = clonedPedestrian1.clone();
clonedPedestrian2.moveY(10)
clonedPedestrian2.showProperties(); 