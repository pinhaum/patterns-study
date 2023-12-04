"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_object_1 = require("./classes/game-object");
var pedestrian = new game_object_1.GameObject('pedestrian-sprite.png', 0, 0);
pedestrian.moveX(10);
pedestrian.showProperties();
var clonedPedestrian1 = pedestrian.clone();
clonedPedestrian1.moveY(10);
clonedPedestrian1.showProperties();
var clonedPedestrian2 = clonedPedestrian1.clone();
clonedPedestrian2.moveY(10);
clonedPedestrian2.showProperties();