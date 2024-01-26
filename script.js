var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius =  40;
var minRadius = 5;

var colors = ['rgba(42,130,216,.85)','rgba(0,92,188,.5)','rgba(255,255,255,.25)','rgba(157,205,255,.5)'];
var blurs = ['5px','10px','2px','0px','0px','5px'];


window.addEventListener('mousemove',function(e){
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('resize',function(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colors[Math.floor(Math.random() * colors.length)];  

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    ctx.lineWidth = "2";
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  this.update = function(){

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
    this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx*2;
    this.y += this.dy*2;

    this.draw();

  }

}



var circleArray = [];

function init() {

  circleArray = [];

  for (var i = 0; i < 100; i++) {

    var radius = Math.random()*15 + 1;
    var x   = Math.random() * (innerWidth - radius*2) + radius;
    var y   = Math.random() * (innerHeight - radius*2) + radius;
    var dx  = (Math.random() - 0.5);
    var dy  = (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius));

  }
}




function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  };

}
animate();
init();

function navToggle(that){
  let navbar = that.parentNode;
  navbar.classList.toggle('show')
}