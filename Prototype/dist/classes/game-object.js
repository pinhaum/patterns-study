"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
var GameObject = /** @class */ (function () {
    function GameObject(sprite, positionX, positionY) {
        this.sprite = sprite;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    GameObject.prototype.clone = function () {
        return new GameObject(this.sprite, this.positionX, this.positionY);
    };
    GameObject.prototype.showProperties = function () {
        console.log("Sprite: ".concat(this.sprite, ".\n PositionX: ").concat(this.positionX, ".\n PositionY: ").concat(this.positionY, ".\n"));
    };
    GameObject.prototype.moveX = function (units) {
        this.positionX += units;
    };
    GameObject.prototype.moveY = function (units) {
        this.positionY += units;
    };
    return GameObject;
}());
exports.GameObject = GameObject;
