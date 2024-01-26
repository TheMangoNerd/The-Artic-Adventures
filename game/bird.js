class Bird {

  constructor() {
    randint = [ int(random(0, 10)), int(random(40, 100)) ]
    this.h = 88
    this.w = 75
    this.x = width
    this.y = height - this.h - randint[int(random(0, 2))]
    this.birdshow = createImg('../assets/bird.gif')
  }

  move() {
    this.x -= 6
  }

  show() {
    this.birdshow.position(this.x, this.y)
    noStroke()
  }
}