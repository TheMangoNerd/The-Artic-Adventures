class Stair {

  constructor() {
    this.h = 4
    this.w = 50
    this.x = width
    this.y = height - this.h
  }

  move() {
    this.x -= 6
  }

  show() {
    rect(this.x, this.y - 50, this.w, this.h)
    noStroke()
  }
}