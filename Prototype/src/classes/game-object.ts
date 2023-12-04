import { Cloneable } from "../interfaces/cloneable";

export class GameObject implements Cloneable {
  constructor(public sprite: string, public positionX: number, public positionY: number) { }

  clone(): GameObject {
    return new GameObject(this.sprite, this.positionX, this.positionY)
  }

  showProperties(): void {
    console.log(`Sprite: ${this.sprite}.\n PositionX: ${this.positionX}.\n PositionY: ${this.positionY}.\n`)
  }

  moveX(units: number): void {
    this.positionX += units
  }

  moveY(units: number): void {
    this.positionY += units
  }
}