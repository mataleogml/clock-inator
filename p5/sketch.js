// Flow Field background using p5.js

let numParticles = 2000;
let noiseScale = 500;
let noiseStrength = 1;
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(createVector(random(width * 1.2), random(height), 2), createVector(0, 0), random(0.5, 2)));
  }
}

function draw() {
  background(0, 5);
  particles.forEach(particle => {
    particle.move();
    particle.checkEdges();
    particle.update();
  });
}

class Particle {
  constructor(loc, dir, speed) {
    this.loc = loc;
    this.dir = dir;
    this.speed = speed;
  }
  move() {
    let angle = noise(this.loc.x / noiseScale, this.loc.y / noiseScale, frameCount / noiseScale);
    angle = map(angle, 0, 1, 0, TWO_PI * noiseStrength);
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    this.loc.add(this.dir.copy().mult(this.speed));
  }
  checkEdges() {
    if (this.loc.x < -width * 0.1 || this.loc.x > width * 1.1 || this.loc.y < -height * 0.1 || this.loc.y > height * 1.1) {
      this.loc.x = random(width * 1.2);
      this.loc.y = random(height);
    }
  }
  update() {
    fill(255);
    ellipse(this.loc.x, this.loc.y, this.loc.z, 2);
  }
}