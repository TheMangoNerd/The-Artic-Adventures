class Penguin {
  constructor() {
    this.r = 75
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.9;
    this.song = loadSound('../assets/jump.mp3');
    //console.log('penguin', width, height, this.r, this.x, this.vy)
  }
  
  ducking(){
    penguins.show()
    penguinr.hide()
    this.r = 35
    penguinshow = penguins;
  }
  
  stretching(){
    penguinr.show()
    penguins.hide()
    this.r = 75
    penguinshow = penguinr;
  }
  
  jump() {
    this.elev = height - this.y - this.r
    this.song.play()
    if (this.elev == 0) {
      this.vy = -slider.value();
    }
  }

  hits(obs) {
    console.log(this.x, this.y, obs.x, obs.y, obs.w, obs.h)
    return collideRectRect(this.x,this.y,this.r,this.r,obs.x,obs.y,obs.w,obs.h)
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity
    this.y = constrain(this.y, 0, height - this.r)
  }

  show() {
      penguinshow.position(this.x, this.y)
  }
}