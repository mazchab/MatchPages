var blob;
var img;
var begin;
var logo;
var stars = [],
    WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    FPS = 10,
    NUM_STARS = WIDTH;
var blobs = [];
var zoom = 1;
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2;
var vx = 0;
var vy = 0;
var ax = 0;
var ay = 0;
var vMultiplier = 0.007;
var bMultiplier = 0.6;
var alpha, beta, gamma;
var xpos, ypos;
function setup()
{
    begin = 0;
    createCanvas(window.innerWidth, window.innerHeight);
    b1 = color(20, 0, 122);
    b2 = color(126, 0, 255);
for (var i = 0; i < NUM_STARS; i++)
{
    stars.push({
        x: 0,
        y: 0,
        offset: Math.random() * 360,
        orbit: (Math.random() + 0.01) * max(WIDTH, HEIGHT),
        radius: Math.random() * 2,
        vx: Math.floor(Math.random() * 10) - 5,
        vy: Math.floor(Math.random() * 10) - 5
    });
}
frameRate(FPS);
loop();
xpos = 0;
ypos = 0;
alpha = 1000;
beta = 0;
gamma = 0;
img = loadImage("assets/dove2.png");
    fill(random(255), random(255), random(255))
    // blob = new Blob(width/2, height/2, 64);
    blob = new Blob();
    for (var i = 0; i < 5000; i++)
    {
        var x = random(-windowWidth,width*2);
        var y = random(-windowHeight,height*2);
        fill(255);

    }
}
function beginTheApp()
{
    begin = 1;
}
function draw()
{
    setGradient(0, 0, width, height, b1, b2, Y_AXIS);
    setGradient(width, 0, width, height, b2, b1, Y_AXIS);

    push();
    noFill();
    colorMode(RGB, 255, 255, 255, 1);
    stroke(240, 240, 240, 1);
    strokeCap(ROUND);
    strokeWeight(2);
    for (var i = 0, x = stars.length; i < x; i++)
    {
        var s = stars[i];
        ellipse(s.x, s.y, s.radius, 0);
    }
    pop();
    update();

push();
translate(windowWidth/2, windowHeight/2);
    // then rotate the grid around the pivot point by a
    // number of degrees equal to the frame count of the sketch
rotate(radians(gamma));
image(img, -150, -150, img.width/3, img.height/3);

pop();
// accelerometer Data
window.addEventListener('deviceorientation', function(e)
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});
translate(width/2, height/2);
var newzoom = 64 / blob.r;
zoom = lerp(zoom, newzoom, 0.1);
scale(zoom);
blob.show();
blob.update();
}
function update()
{
    var originX = WIDTH / 2;
    var originY = HEIGHT / 2;
    for (var i = 0, x = stars.length; i < x; i++)
    {
        var s = stars[i];
        var rad = (frameCount * (1 / (s.orbit*2 + s.offset)) + s.offset) % TAU;
        s.x = (originX + cos(rad)*(s.orbit*2));
        s.y = (originY + sin(rad)*(s.orbit));
    }
}
function windowResized()
{
    WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    resizeCanvas(WIDTH, HEIGHT);
}
function setGradient(x, y, w, h, b1, b2, axis) {
  noFill();
  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= h; i++) {
      var inter = map(i, y, h, 0, 1);
      var c = lerpColor(b1, b2, inter);
      stroke(c);
      line(x, i, w, i);
}
  }
      }
