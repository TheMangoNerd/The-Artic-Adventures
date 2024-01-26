class Obstacle {

  constructor() {
    this.h = 50
    this.w = 20
    this.x = width
    this.y = height - this.h
  }

  move() {
    if(score < 5){
      this.x -= 10
    }
    else if(score >= 5){
      this.x -= 15
    }
  }
  show() {
    triangle(this.x -10, this.y + 50, this.x, this.y -50,this.x +10, this.y + 50)
    noStroke()
  }
}