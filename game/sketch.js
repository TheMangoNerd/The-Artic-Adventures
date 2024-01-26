let obstacles;
let randint;
let score;
let lost;
let next;
let spread;
let slider;
let penguinshow;
let spike;
let font;

// setup func is called once at the beginning
function setup() {
    createCanvas(int(windowWidth*.95), int(windowHeight*.95))
    font = loadFont('../font.otf');
    textFont(font)
    textSize(24) 
    slider = createSlider(10, 20, 12, 1)
    slider.position(width - slider.width, 0)
    slider.value(25)
    slider.hide()
    penguin = new Penguin()

    // 100x100 
    penguinr = createImg('../assets/penguin.gif');
    // 100x50
    penguins = createImg('../assets/penguins.gif');
    penguins.hide();
  
    penguinshow = penguinr;

    resetSketch()
}

//keyPressed makes the penguin jump by pressing space or Up Arrow
function keyPressed() {
    if (key == ' ' || keyCode == UP_ARROW) {
        penguin.jump();
    }
    if (keyCode == DOWN_ARROW){
        penguin.ducking();
    }
}

function keyReleased() {
    if(keyCode == DOWN_ARROW){
        penguin.stretching();
    }
}

//resetSketch restarts game and recreating the penguin and the array of obstables
function resetSketch() {
    console.log("Restarting game")

    score = 0;
    lost = false;

    // obstacles 
    obstacles = []
    next = 0;
    new Obstacle();
    randint = int(random(50, 150));
  
    // birds
    birds = []
    nextb = 0;
    randintb = int(random(50, 150));
  
    // penguin  
    penguin = new Penguin();
  
    loop();
}

//draw func is called every frame
function draw() {
    background(135, 206, 250);
    text('Score: ' + score, 100, 50)

    if (score == 5) {
      text('Faster!', 100, 100)
    }

    // obstacles only when less than 20
    if(score < 15) {
      // if next(next increases by one every time draw is called which is a lot) is equal to random number than create a new obstacle add score, reset next and create another random number or else the obstacles wouldn't be randomly spaced.
      next += 1
      if (next == randint) {
          obstacles.push(new Obstacle())
          score += 1
          next = 0
          //spread = slider.value()
          randint = int(random(40, width / 6))
      }
  
      for (let o of obstacles) {
          // if obstacles x position is off the screen and there are more than 2 obstacles on the screen than remove the obstacle that is off the screen and loop it again and again until the penguin hits an obstacles and dies
          if (o.x < 0) {
              if (obstacles.length > 5) {
                  obstacles.shift()
              }
          }
  
          //if no obstacles are off the screen than keep on moving them until it happens
          o.move();
          o.show();
        
          //if the penguin hits the obstacle then game over wah wah wah
          if (penguin.hits(o)) {
              console.log("Game Over!")
              lost = true;
              location.href = '../lose.html'
              noLoop();
          }
      }
    }

    else {
       text('Level 2!', 100, 100)
      
      // jump higher
      slider.value(60)
      
      // delete remaining icycles
      while (obstacles.length > 0) {
        obstacles.shift();     
      }
      
      // if next(next increases by one every time draw is called which is a lot) is equal to random number than create a new obstacle add score, reset next and create another random number or else the obstacles wouldn't be randomly spaced.
      nextb += 1
      if (nextb == randintb) {
          birds.push(new Bird())
          score += 2
          nextb = 0
          //spread = slider.value()
          randintb = int(random(60, width / 4))
      }
  
      for (let b of birds) {
          // if obstacles x position is off the screen and there are more than 2 obstacles on the screen than remove the obstacle that is off the screen and loop it again and again until the penguin hits an obstacles and dies
          if (b.x < 0) {
              if (birds.length > 5) {
                  birds.shift()
              }
          }
  
          //if no obstacles are off the screen than keep on moving them until it happens
          b.move();
          b.show();
  
          //if the penguin hits the obstacle then game over wah wah wah
          if (penguin.hits(b)) {
              console.log("Game Over!")
              lost = true;
              location.href = '../lose.html'
              noLoop();
          }
      }
    }
  
    penguin.show();
    penguin.move();
}